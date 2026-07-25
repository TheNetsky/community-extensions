import {
    SourceManga,
    Chapter,
    ChapterDetails,
    HomeSection,
    SearchRequest,
    PagedResults,
    SourceInfo,
    ContentRating,
    Request,
    Response,
    SourceIntents,
    SearchResultsProviding,
    ChapterProviding,
    MangaProviding,
    HomePageSectionsProviding,
    HomeSectionType,
    PartialSourceManga,
    DUISection
} from '@paperback/types'

import {
    Language,
    MangaPlusResponse,
    Title,
    TitleDetailView
} from './MangaPlusHelper'
import { decodeMangaPlusResponse } from './MangaPlusProto'

import {
    contentSettings,
    getLanguages,
    resetSettings
} from './MangaPlusSettings'

const BASE_URL = 'https://mangaplus.shueisha.co.jp'
const API_URL = 'https://jumpg-webapi.tokyo-cdn.com/api'

export const MangaPlusInfo: SourceInfo = {
    version: '2.1.0',
    name: 'MangaPlus',
    icon: 'icon.png',
    author: 'Rinto-kun',
    authorWebsite: 'https://github.com/Rinto-kun',
    description: 'Extension that pulls manga from Manga+ by Shueisha',
    contentRating: ContentRating.EVERYONE,
    websiteBaseURL: BASE_URL,
    sourceTags: [],
    intents: SourceIntents.MANGA_CHAPTERS | SourceIntents.HOMEPAGE_SECTIONS | SourceIntents.CLOUDFLARE_BYPASS_REQUIRED | SourceIntents.SETTINGS_UI
}

export class MangaPlus implements SearchResultsProviding, MangaProviding, ChapterProviding, HomePageSectionsProviding {
    stateManager = App.createSourceStateManager()

    private cachedSessionToken: string | null = null

    private async getSessionToken(): Promise<string> {
        if (this.cachedSessionToken) return this.cachedSessionToken

        const storedToken = (await this.stateManager.retrieve('sessionToken')) as string || null
        if (storedToken) {
            this.cachedSessionToken = storedToken
            return storedToken
        }

        const sessionToken = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (character) => {
            const random = Math.random() * 16 | 0
            const value = character === 'x' ? random : (random & 0x3 | 0x8)
            return value.toString(16)
        })
        await this.stateManager.store('sessionToken', sessionToken)
        this.cachedSessionToken = sessionToken
        return sessionToken
    }

    requestManager = App.createRequestManager({
        requestsPerSecond: 5,
        requestTimeout: 20000,
        interceptor: {
            interceptRequest: async (request: Request): Promise<Request> => {
                request.headers = {
                    ...(request.headers ?? {}),
                    'Origin': BASE_URL,
                    'Referer': `${BASE_URL}/`,
                    'session-token': await this.getSessionToken()
                }

                if (request.url.startsWith('imageMangaId=')) {
                    const mangaId = request.url.replace('imageMangaId=', '')
                    request.url = await this.getThumbnailUrl(mangaId)
                }

                const imageMetadata = this.getImageMetadata(request.url)
                if (imageMetadata.viewToken) {
                    request.headers = {
                        ...request.headers,
                        'Plus-Vw-Token': imageMetadata.viewToken
                    }
                }

                return request
            },
            interceptResponse: async (response: Response): Promise<Response> => {
                const { encryptionKey } = this.getImageMetadata(response.request.url)
                if (!encryptionKey || !response.rawData) return response

                this.decodeXoRCipher(App.createByteArray(response.rawData), encryptionKey)
                return response
            }

        }
    });

    async getSourceMenu(): Promise<DUISection> {
        return App.createDUISection(
            {

                id: 'main',
                header: 'Source Settings',
                rows: async () => {
                    return [
                        contentSettings(this.stateManager),
                        resetSettings(this.stateManager)
                    ]
                },
                isHidden: false
            }
        )

    }

    getMangaShareUrl(mangaId: string): string { return `${BASE_URL}/titles/${mangaId}` }

    async getMangaDetails(mangaId: string): Promise<SourceManga> {
        return (await this.getTitleDetail(mangaId)).toSourceManga()
    }

    private async getThumbnailUrl(mangaId: string): Promise<string> {
        return (await this.getTitleDetail(mangaId)).title?.portraitImageUrl ?? ''
    }

    async getChapters(mangaId: string): Promise<Chapter[]> {
        const result = await this.getTitleDetail(mangaId)
        return [...result.firstChapterList, ...result.lastChapterList]
            .reverse()
            .filter(chapter => !chapter.isExpired)
            .map(chapter => chapter.toSChapter())
    }

    async getChapterDetails(mangaId: string, chapterId: string): Promise<ChapterDetails> {
        const request = App.createRequest({
            url: `${API_URL}/manga_viewer_v3?chapter_id=${chapterId}&split=${(await this.stateManager.retrieve('split_images')) as string ?? 'no'}&img_quality=${(await this.stateManager.retrieve('image_resolution')) as string ?? 'high'}&clang=eng`,
            method: 'GET'
        })

        const response = await this.requestManager.schedule(request, 1)
        const result = this.decodeResponse(response)
        const success = this.getSuccess(result)
        const viewer = success.mangaViewer
        if (!viewer) throw new Error('Cannot find chapter')

        const viewToken = encodeURIComponent(viewer.viewToken ?? '')
        const pages = viewer.pages
            .map(page => page.mangaPage)
            .filter((page): page is NonNullable<typeof page> => page !== undefined)
            .map(page => {
                const encryptionKey = page.encryptionKey ?? ''
                return encryptionKey || viewToken
                    ? `${page.imageUrl}#${encryptionKey}|${viewToken}`
                    : page.imageUrl
            })

        return App.createChapterDetails({
            id: chapterId,
            mangaId: mangaId,
            pages: pages ?? []
        })

    }

    async getFeaturedTitles(): Promise<PartialSourceManga[]> {
        const request = App.createRequest({
            url: `${API_URL}/featuredV2?lang=eng&clang=eng`,
            method: 'GET'
        })

        const response = await this.requestManager.schedule(request, 1)
        const result = this.getSuccess(this.decodeResponse(response))

        const languages = await getLanguages(this.stateManager)
        const lists = result.featuredTitlesViewV2?.contents
            .map(content => content.titleList)
            .filter((titleList): titleList is NonNullable<typeof titleList> => titleList !== undefined)
        const featured = lists?.find(list => list.listName === 'WEEKLY SHONEN JUMP') ?? lists?.[0]

        return this.createPartialTitles(featured?.featuredTitles ?? [], languages)
    }

    async getPopularTitles(): Promise<PartialSourceManga[]> {
        const request = App.createRequest({
            url: `${API_URL}/title_list/rankingV2?lang=eng&type=hottest&clang=eng`,
            method: 'GET'
        })

        const response = await this.requestManager.schedule(request, 1)
        const result = this.getSuccess(this.decodeResponse(response))

        const languages = await getLanguages(this.stateManager)
        return this.createPartialTitles(result.titleRankingViewV2?.titles ?? [], languages)
    }

    async getLatestUpdates(): Promise<PartialSourceManga[]> {

        function latestUpdatesRequest() {
            return App.createRequest({
                url: `${API_URL}/web/web_homeV4?lang=eng&clang=eng`,
                method: 'GET'
            })
        }

        const request = latestUpdatesRequest()
        const response = await this.requestManager.schedule(request, 1)

        const result = this.getSuccess(this.decodeResponse(response))

        const languages = await getLanguages(this.stateManager)

        const results = result.webHomeViewV4?.groups
            .flatMap(group => group.titles)
            .map(updatedTitle => updatedTitle.title)
            .filter((title): title is Title => title !== undefined)

        return this.createPartialTitles(results ?? [], languages)
    }

    async getHomePageSections(sectionCallback: (section: HomeSection) => void): Promise<void> {

        const featuredSection = App.createHomeSection({
            id: 'featured',
            title: 'Featured',
            containsMoreItems: true,
            type: HomeSectionType.featured,
            items: await this.getFeaturedTitles()
        })
        sectionCallback(featuredSection)

        const popularSection = App.createHomeSection({
            id: 'popular',
            title: 'Popular',
            containsMoreItems: true,
            type: HomeSectionType.singleRowNormal,
            items: await this.getPopularTitles()
        })
        sectionCallback(popularSection)

        const latestUpdatesSection = App.createHomeSection({
            id: 'latest_updates',
            title: 'Latest Updates',
            containsMoreItems: true,
            type: HomeSectionType.singleRowNormal,
            items: await this.getLatestUpdates()
        })
        sectionCallback(latestUpdatesSection)
    }

    async getViewMoreItems(homepageSectionId: string, metadata: any): Promise<PagedResults> {
        let items: PartialSourceManga[] = []

        switch (homepageSectionId) {
            case 'featured':
                items = await this.getFeaturedTitles()
                break

            case 'popular':
                items = await this.getPopularTitles()
                break

            case 'latest_updates':
                items = await this.getLatestUpdates()
                break

            default:
                throw new Error(`Invalid homeSectionId | ${homepageSectionId}`)
        }

        return App.createPagedResults({
            results: items,
            metadata
        })
    }

    async getSearchResults(query: SearchRequest, metadata: any): Promise<PagedResults> {
        const request = App.createRequest({
            url: `${API_URL}/title_list/allV2`,
            method: 'GET'
        }
        )

        const response = await this.requestManager.schedule(request, 1)
        const result = this.getSuccess(this.decodeResponse(response))

        const ltitle = query.title?.toLowerCase() ?? ''
        const languages = await getLanguages(this.stateManager)

        const results = result.allTitlesViewV2?.allTitlesGroup.flatMap(group => group.titles)
            .filter((title) => title.author?.toLowerCase().includes(ltitle) || title.name.toLowerCase().includes(ltitle))

        return App.createPagedResults({
            results: this.createPartialTitles(results ?? [], languages)
        })
    }

    // Utility
    private async getTitleDetail(mangaId: string): Promise<TitleDetailView> {
        const request = App.createRequest({
            url: `${API_URL}/title_detailV3?title_id=${mangaId}&clang=eng`,
            method: 'GET'
        })

        const response = await this.requestManager.schedule(request, 1)
        const result = this.getSuccess(this.decodeResponse(response))
        if (!result.titleDetailView?.title) throw new Error('Cannot find manga')

        return result.titleDetailView
    }

    private decodeResponse(response: Response): MangaPlusResponse {
        if (!response.rawData) throw new Error('Manga Plus returned an empty response')
        return decodeMangaPlusResponse(App.createByteArray(response.rawData))
    }

    private getSuccess(result: MangaPlusResponse) {
        if (!result.success) {
            throw new Error(result.error?.langPopup(Language.ENGLISH)?.body ?? 'Unknown error')
        }

        return result.success
    }

    private createPartialTitles(items: Title[], languages: string[]): PartialSourceManga[] {
        const collectedIds = new Set<string>()
        const titles: PartialSourceManga[] = []

        for (const item of items) {
            const mangaId = item.titleId.toString()
            if (!mangaId || !item.name || collectedIds.has(mangaId) || !languages.includes(item.language)) continue

            collectedIds.add(mangaId)
            titles.push(App.createPartialSourceManga({
                mangaId,
                title: item.name,
                subtitle: item.author,
                image: item.portraitImageUrl
            }))
        }

        return titles
    }

    private getImageMetadata(url: string): { encryptionKey: string; viewToken: string } {
        const fragmentIndex = url.lastIndexOf('#')
        if (fragmentIndex < 0) return { encryptionKey: '', viewToken: '' }

        const fragment = url.substring(fragmentIndex + 1)
        const separator = fragment.match(/\||%7C/i)
        if (separator?.index === undefined) return { encryptionKey: fragment, viewToken: '' }

        const encryptionKey = fragment.substring(0, separator.index)
        const encodedViewToken = fragment.substring(separator.index + separator[0].length)
        return {
            encryptionKey,
            viewToken: encodedViewToken ? decodeURIComponent(encodedViewToken) : ''
        }
    }

    private decodeXoRCipher(buffer: Uint8Array, encryptionKey: string): void {
        const key = encryptionKey.match(/../g)?.map((byte) => parseInt(byte, 16)) ?? []

        for (let index = 0; index < buffer.length; index++) {
            buffer[index] ^= key[index % key.length] ?? 0
        }
    }
}
