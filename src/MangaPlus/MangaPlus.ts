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
    TitleDetailView
} from './MangaPlusHelper'

import {
    contentSettings,
    getLanguages,
    resetSettings
} from './MangaPlusSettings'

const BASE_URL = 'https://mangaplus.shueisha.co.jp'
const API_URL = 'https://jumpg-webapi.tokyo-cdn.com/api'

const langCode = Language.ENGLISH

export const MangaPlusInfo: SourceInfo = {
    version: '2.0.3',
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

    requestManager = App.createRequestManager({
        requestsPerSecond: 10,
        requestTimeout: 20000,
        interceptor: {
            interceptRequest: async (request: Request): Promise<Request> => {
                request.headers = {
                    ...(request.headers ?? {}),
                    
                    'Referer': `${BASE_URL}/`,
                    'user-agent': await this.requestManager.getDefaultUserAgent()
                }

                if (request.url.startsWith('imageMangaId=')) {
                    const mangaId = request.url.replace('imageMangaId=', '')
                    request.url = await this.getThumbnailUrl(mangaId)
                }

                return request
            },
            interceptResponse: async (response: Response): Promise<Response> => {
                if (!response.request.url.includes('encryptionKey') && response.headers['Content-Type'] !== 'image/jpeg') {
                    return response
                }

                if (response.request.url.includes('title_thumbnail_portrait_list')) {
                    return response
                }

                const encryptionKey = response.request.url.substring(response.request.url.lastIndexOf('#') + 1) ?? ''

                // @ts-ignore
                response.rawData = App.createRawData(this.decodeXoRCipher(App.createByteArray(response.rawData ?? new Uint8Array()), encryptionKey))

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
        const request = App.createRequest({
            url: `${API_URL}/title_detailV3?title_id=${mangaId}&format=json`,
            method: 'GET'
        })

        const response = await this.requestManager.schedule(request, 1)
        const result = TitleDetailView.fromJson(response.data as string)

        return result.toSourceManga()
    }

    private async getThumbnailUrl(mangaId: string): Promise<string> {
        const request = App.createRequest({
            url: `${API_URL}/title_detailV3?title_id=${mangaId}&format=json`,
            method: 'GET'
        })

        const response = await this.requestManager.schedule(request, 1)
        const result = TitleDetailView.fromJson(response.data as string)
        
        return result.title?.portraitImageUrl ?? ''
    }

    async getChapters(mangaId: string): Promise<Chapter[]> {
        const request = App.createRequest({
            url: `${API_URL}/title_detailV3?title_id=${mangaId}&format=json`,
            method: 'GET'
        })

        const response = await this.requestManager.schedule(request, 1)
        const result = TitleDetailView.fromJson(response.data as string)

        return [...(result.firstChapterList ?? []), ...(result.lastChapterList ?? [])].reverse().filter(chapter => !chapter.isExpired).map(chapter => chapter.toSChapter())
    }

    async getChapterDetails(mangaId: string, chapterId: string): Promise<ChapterDetails> {
        const request = App.createRequest({
            url: `${API_URL}/manga_viewer?chapter_id=${chapterId}&split=${(await this.stateManager.retrieve('split_images')) as string ?? 'no'}&img_quality=${(await this.stateManager.retrieve('image_resolution')) as string ?? 'high'}&format=json`,
            method: 'GET'
        })

        const response = await this.requestManager.schedule(request, 1)
        const result = JSON.parse(response.data as string) as MangaPlusResponse

        if (result.success === undefined) {
            throw new Error(result.error?.langPopup(Language.ENGLISH)?.body ?? 'Unknown error')
        }

        const pages = result.success.mangaViewer?.pages
            .map(page => page.mangaPage)
            .filter(page => page)
            .map((page) => page?.encryptionKey ? `${page?.imageUrl}#${page?.encryptionKey}` : '')

        return App.createChapterDetails({
            id: chapterId,
            mangaId: mangaId,
            pages: pages ?? []
        })

    }

    async getFeaturedTitles(): Promise<PartialSourceManga[]> {
        const request = App.createRequest({
            url: `${API_URL}/featuredV2?lang=eng&clang=eng&format=json`,
            method: 'GET'
        })

        const response = await this.requestManager.schedule(request, 1)
        const result = JSON.parse(response.data as string) as MangaPlusResponse

        if (result.success === undefined) {
            throw new Error(result.error?.langPopup(Language.ENGLISH)?.body ?? 'Unknown error')
        }

        const languages = await getLanguages(this.stateManager)

        const results = result.success?.featuredTitlesViewV2?.contents?.find(x => x.titleList && x.titleList.listName == 'WEEKLY SHONEN JUMP')?.titleList.featuredTitles
            .filter((title) => languages.includes(title.language ?? Language.ENGLISH))

        const titles: PartialSourceManga[] = []
        const collectedIds: string[] = []

        for (const item of results ?? []) {
            const mangaId = item.titleId.toString()
            const title = item.name
            const author = item.author
            const image = item.portraitImageUrl

            if (!mangaId || !title || collectedIds.includes(mangaId)) continue

            titles.push(App.createPartialSourceManga({
                mangaId: mangaId,
                title: title,
                subtitle: author,
                image: image
            }))
        }

        return titles
    }

    async getPopularTitles(): Promise<PartialSourceManga[]> {
        const request = App.createRequest({
            url: `${API_URL}/title_list/ranking?format=json`,
            method: 'GET'
        })

        const response = await this.requestManager.schedule(request, 1)
        const result = JSON.parse(response.data as string) as MangaPlusResponse

        if (result.success === undefined) {
            throw new Error(result.error?.langPopup(Language.ENGLISH)?.body ?? 'Unknown error')
        }

        const languages = await getLanguages(this.stateManager)

        const results = result.success?.titleRankingView?.titles
            .filter((title) => languages.includes(title.language ?? Language.ENGLISH))

        const titles: PartialSourceManga[] = []
        const collectedIds: string[] = []

        for (const item of results ?? []) {
            const mangaId = item.titleId.toString()
            const title = item.name
            const author = item.author
            const image = item.portraitImageUrl

            if (!mangaId || !title || collectedIds.includes(mangaId)) continue

            titles.push(App.createPartialSourceManga({
                mangaId: mangaId,
                title: title,
                subtitle: author,
                image: image
            }))
        }

        return titles
    }

    async getLatestUpdates(): Promise<PartialSourceManga[]> {

        function latestUpdatesRequest() {
            return App.createRequest({
                url: `${API_URL}/web/web_homeV4?lang=eng&format=json`,
                method: 'GET'
            })
        }

        const request = latestUpdatesRequest()
        const response = await this.requestManager.schedule(request, 1)

        const result: MangaPlusResponse = JSON.parse(response.data as string)

        if (result.success === undefined) {
            throw new Error(result.error?.langPopup(langCode)?.body ?? 'Unknown error')
        }

        const languages = await getLanguages(this.stateManager)

        const results = result.success.webHomeViewV4?.groups
            .flatMap(ex => ex.titleGroups)
            .flatMap(ex => ex.titles)
            .map(title => title.title)
            .filter(title => languages.includes(title.language ?? Language.ENGLISH))

        const titles: PartialSourceManga[] = []
        const collectedIds: string[] = []

        for (const item of results ?? []) {
            const mangaId = item.titleId.toString()
            const title = item.name
            const author = item.author
            const image = item.portraitImageUrl

            if (!mangaId || !title || collectedIds.includes(mangaId)) continue

            titles.push(App.createPartialSourceManga({
                mangaId: mangaId,
                title: title,
                subtitle: author,
                image: image
            }))
        }

        return titles
    }

    async getHomePageSections(sectionCallback: (section: HomeSection) => void): Promise<void> {

        const featuredSection = App.createHomeSection({
            id: 'featured',
            title: 'Deatured',
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
        const title = query.title ?? ''

        const request = App.createRequest({
            url: `${API_URL}/title_list/allV2?format=JSON&${title ? 'filter=' + encodeURI(title) + '&' : ''}format=json`,
            method: 'GET'
        }
        )

        const response = await this.requestManager.schedule(request, 1)
        const result = JSON.parse(response.data as string) as MangaPlusResponse

        if (result.success === undefined) {
            throw new Error(result.error?.langPopup(Language.ENGLISH)?.body ?? 'Unknown error')
        }

        const ltitle = query.title?.toLowerCase() ?? ''
        const languages = await getLanguages(this.stateManager)

        const results = result.success?.allTitlesViewV2?.AllTitlesGroup.flatMap((group) => group.titles)
            .filter((title) => languages.includes(title.language ?? Language.ENGLISH))
            .filter((title) => title.author?.toLowerCase().includes(ltitle) || title.name.toLowerCase().includes(ltitle))

        const titles: PartialSourceManga[] = []
        const collectedIds: string[] = []

        for (const item of results ?? []) {
            const mangaId = item.titleId.toString()
            const title = item.name
            const author = item.author
            const image = item.portraitImageUrl

            if (!mangaId || !title || collectedIds.includes(mangaId)) continue

            titles.push(App.createPartialSourceManga({
                mangaId: mangaId,
                title: title,
                subtitle: author,
                image: image
            }))
        }

        return App.createPagedResults({
            results: titles
        })
    }

    // Utility
    private decodeXoRCipher(buffer: Uint8Array, encryptionKey: string) {
        const key = encryptionKey.match(/../g)?.map((byte) => parseInt(byte, 16)) ?? []

        return buffer.map((byte, index) => byte ^ (key[index % key.length] ?? 0))
    }
}
