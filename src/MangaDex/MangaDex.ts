import {
    PagedResults,
    SourceManga,
    Chapter,
    ChapterDetails,
    HomeSection,
    SearchRequest,
    SourceInfo,
    PartialSourceManga,
    Tag,
    Request,
    Response,
    ContentRating,
    TagSection,
    HomeSectionType,
    ChapterProviding,
    SourceIntents,
    DUISection,
    SearchResultsProviding,
    HomePageSectionsProviding
} from '@paperback/types'

import entities = require('entities')
import {
    contentSettings,
    getLanguages,
    getRatings,
    thumbnailSettings,
    getHomepageThumbnail,
    getSearchThumbnail,
    getMangaThumbnail,
    resetSettings,
    getDataSaver,
    getSkipSameChapter,
    accountSettings,
    getAccessToken,
    authEndpointRequest,
    saveAccessToken,
    forcePort443
} from './MangaDexSettings'

import {
    requestMetadata,
    MDLanguages,
    URLBuilder,
    MDImageQuality
} from './MangaDexHelper'

import {
    parseMangaList
} from './MangaDexParser'

import tagJSON from './external/tag.json'
import { MangaDexSearchResponse } from './MangaDexInterfaces'

const MANGADEX_DOMAIN = 'https://mangadex.org'
const MANGADEX_API = 'https://api.mangadex.org'
const COVER_BASE_URL = 'https://uploads.mangadex.org/covers'

const SEASONAL_LIST = '77430796-6625-4684-b673-ffae5140f337'

export const MangaDexInfo: SourceInfo = {
    author: 'Nar1n & Netsky',
    description: 'Extension that pulls manga from MangaDex',
    icon: 'icon.png',
    name: 'MangaDex',
    version: '3.0.5',
    authorWebsite: 'https://github.com/nar1n',
    websiteBaseURL: MANGADEX_DOMAIN,
    contentRating: ContentRating.EVERYONE,
    sourceTags: [],
    intents: SourceIntents.MANGA_CHAPTERS | SourceIntents.SETTINGS_UI | SourceIntents.HOMEPAGE_SECTIONS
}

export class MangaDex implements ChapterProviding, SearchResultsProviding, HomePageSectionsProviding {
    MANGADEX_DOMAIN = MANGADEX_DOMAIN
    MANGADEX_API = MANGADEX_API
    COVER_BASE_URL = COVER_BASE_URL

    stateManager = App.createSourceStateManager()

    requestManager = App.createRequestManager({
        requestsPerSecond: 5,
        requestTimeout: 20000,
        interceptor: {
            interceptRequest: async (request: Request) => {
                // Impossible to have undefined headers, ensured by the app
                request.headers = {
                    ...request.headers,
                    referer: `${this.MANGADEX_DOMAIN}/`
                }

                let accessToken = await getAccessToken(this.stateManager)
                if (request.url.includes('auth/') || !accessToken) return request
                // Padding 60 secs to make sure it wont expire in-transit if the connection is really bad

                if (Number(accessToken.tokenBody.exp) <= Date.now() / 1000 - 60) {
                    try {
                        const response = await authEndpointRequest(this.requestManager, 'refresh', {
                            token: accessToken.refreshToken
                        })

                        accessToken = await saveAccessToken(this.stateManager, response.token.session, response.token.refresh)
                        if (!accessToken) return request
                    } catch {
                        return request
                    }
                }
                // Impossible to have undefined headers, ensured by the app
                request.headers = {
                    ...request.headers,
                    authorization: 'Bearer ' + accessToken.accessToken
                }
                return request
            },
            interceptResponse: async (response: Response): Promise<Response> => {
                return response
            }
        }
    })

    async getSourceMenu(): Promise<DUISection> {
        return App.createDUISection({
            id: 'main',
            header: 'Source Settings',
            isHidden: false,
            rows: async () => [
                await accountSettings(this.stateManager, this.requestManager),
                contentSettings(this.stateManager),
                thumbnailSettings(this.stateManager),
                resetSettings(this.stateManager)
            ]
        })
    }

    getMangaShareUrl(mangaId: string): string { return `${this.MANGADEX_DOMAIN}/title/${mangaId}` }

    async getSearchTags(): Promise<TagSection[]> {
        const sections: Record<string, TagSection> = {}

        for (const tag of tagJSON) {
            const group = tag.data.attributes.group

            if (sections[group] == null) {
                sections[group] = App.createTagSection({ id: group, label: group.charAt(0).toUpperCase() + group.slice(1), tags: [] })
            }
            const tagObject = App.createTag({
                id: tag.data.id,
                label: tag.data.attributes.name.en
            })

            // Since we already know that a section for the group has to exist, eslint is complaining
            // for no reason at all.
            sections[group]!.tags = [...(sections[group]?.tags ?? []), tagObject]
        }

        return Object.values(sections)
    }

    async supportsSearchOperators(): Promise<boolean> {
        return true
    }

    async supportsTagExclusion(): Promise<boolean> {
        return true
    }

    // Used for seasonal listing
    async getCustomListRequestURL(listId: string, ratings: string[]): Promise<string> {
        const request = App.createRequest({
            url: `${this.MANGADEX_API}/list/${listId}`,
            method: 'GET'
        })

        const response = await this.requestManager.schedule(request, 1)
        const json = (typeof response.data === 'string') ? JSON.parse(response.data) : response.data

        return new URLBuilder(this.MANGADEX_API)
            .addPathComponent('manga')
            .addQueryParameter('limit', 100)
            .addQueryParameter('contentRating', ratings)
            .addQueryParameter('includes', ['cover_art'])
            .addQueryParameter('ids', json.data.relationships.filter((x: any) => x.type == 'manga').map((x: Tag) => x.id))
            .buildUrl()
    }

    async getMangaDetails(mangaId: string): Promise<SourceManga> {
        this.checkId(mangaId)

        const request = App.createRequest({
            url: new URLBuilder(this.MANGADEX_API)
                .addPathComponent('manga')
                .addPathComponent(mangaId)
                .addQueryParameter('includes', ['author', 'artist', 'cover_art'])
                .buildUrl(),
            method: 'GET'
        })

        const response = await this.requestManager.schedule(request, 1)
        const json = (typeof response.data === 'string') ? JSON.parse(response.data) : response.data
        const mangaDetails = json.data.attributes

        const titles = <string[]>([...Object.values(mangaDetails.title), ...mangaDetails.altTitles.flatMap((x: never) => Object.values(x))].map((x: string) => this.decodeHTMLEntity(x)).filter((x) => x))
        const desc = this.decodeHTMLEntity(mangaDetails.description.en)?.replace(/\[\/?[bus]]/g, '') // Get rid of BBcode tags

        const status = mangaDetails.status

        const tags: Tag[] = []
        for (const tag of mangaDetails.tags) {
            const tagName: { [index: string]: string } = tag.attributes.name
            tags.push(App.createTag({ id: tag.id, label: Object.keys(tagName).map((keys) => tagName[keys])[0] ?? 'Unknown' }))
        }

        const author = json.data.relationships.filter((x: any) => x.type == 'author').map((x: any) => x.attributes.name).join(', ')
        const artist = json.data.relationships.filter((x: any) => x.type == 'artist').map((x: any) => x.attributes.name).join(', ')

        let image = ''
        const coverFileName = json.data.relationships.filter((x: any) => x.type == 'cover_art').map((x: any) => x.attributes?.fileName)[0]
        if (coverFileName) {
            image = `${this.COVER_BASE_URL}/${mangaId}/${coverFileName}${MDImageQuality.getEnding(await getMangaThumbnail(this.stateManager))}`
        }

        return App.createSourceManga({
            id: mangaId,
            mangaInfo: App.createMangaInfo({
                titles,
                image,
                author,
                artist,
                desc: desc ?? 'No Description',
                status,
                tags: [App.createTagSection({ id: 'tags', label: 'Tags', tags: tags })]
            })
        })
    }

    async getChapters(mangaId: string): Promise<Chapter[]> {
        this.checkId(mangaId)

        const languages: string[] = await getLanguages(this.stateManager)
        const skipSameChapter = await getSkipSameChapter(this.stateManager)
        const ratings: string[] = await getRatings(this.stateManager)
        const collectedChapters = new Set<string>()
        const chapters: Chapter[] = []

        let offset = 0
        let sortingIndex = 0

        let hasResults = true
        while (hasResults) {
            const request = App.createRequest({
                url: new URLBuilder(this.MANGADEX_API)
                    .addPathComponent('manga')
                    .addPathComponent(mangaId)
                    .addPathComponent('feed')
                    .addQueryParameter('limit', 500)
                    .addQueryParameter('offset', offset)
                    .addQueryParameter('includes', ['scanlation_group'])
                    .addQueryParameter('translatedLanguage', languages)
                    .addQueryParameter('order', { volume: 'desc', chapter: 'desc', publishAt: 'desc' })
                    .addQueryParameter('contentRating', ratings)
                    .addQueryParameter('includeFutureUpdates', '0')
                    .buildUrl(),
                method: 'GET'
            })

            const response = await this.requestManager.schedule(request, 1)
            const json = (typeof response.data === 'string') ? JSON.parse(response.data) : response.data

            offset += 500

            if (json.data === undefined) throw new Error(`Failed to parse json results for ${mangaId}`)

            for (const chapter of json.data) {
                const chapterId = chapter.id
                const chapterDetails = chapter.attributes
                const name = this.decodeHTMLEntity(chapterDetails.title)
                const chapNum = Number(chapterDetails?.chapter)
                const volume = Number(chapterDetails?.volume)
                const langCode: string = MDLanguages.getFlagCode(chapterDetails.translatedLanguage)
                const time = new Date(chapterDetails.publishAt)
                const group = chapter.relationships.filter((x: any) => x.type == 'scanlation_group').map((x: any) => x.attributes.name).join(', ')
                const pages = Number(chapterDetails.pages)
                const identifier = `${volume}-${chapNum}-${chapterDetails.translatedLanguage}`

                if (collectedChapters.has(identifier) && skipSameChapter) continue

                if (pages > 0) {
                    chapters.push(
                        App.createChapter({
                            id: chapterId,
                            name,
                            chapNum,
                            volume,
                            langCode,
                            group,
                            time,
                            sortingIndex
                        })
                    )
                    collectedChapters.add(identifier)
                    sortingIndex--
                }
            }

            if (json.total <= offset) {
                hasResults = false
            }
        }

        if (chapters.length == 0) {
            throw new Error(`Couldn't find any chapters in your selected language for mangaId: ${mangaId}!`)
        }

        return chapters.map(chapter => {
            chapter.sortingIndex += chapters.length
            return App.createChapter(chapter)
        })
    }

    async getChapterDetails(mangaId: string, chapterId: string): Promise<ChapterDetails> {
        this.checkId(chapterId) // Check the the mangaId is an old id

        const dataSaver = await getDataSaver(this.stateManager)
        const forcePort = await forcePort443(this.stateManager)

        const request = App.createRequest({
            url: `${this.MANGADEX_API}/at-home/server/${chapterId}${forcePort ? '?forcePort443=true' : ''}`,
            method: 'GET'
        })

        const response = await this.requestManager.schedule(request, 1)
        const json = (typeof response.data === 'string') ? JSON.parse(response.data) : response.data
        const serverUrl = json.baseUrl
        const chapterDetails = json.chapter

        let pages: string[]
        if (dataSaver) {
            pages = chapterDetails.dataSaver.map((x: string) => `${serverUrl}/data-saver/${chapterDetails.hash}/${x}`)
        } else {
            pages = chapterDetails.data.map((x: string) => `${serverUrl}/data/${chapterDetails.hash}/${x}`)
        }

        return App.createChapterDetails({
            id: chapterId,
            mangaId: mangaId,
            pages
        })
    }

    async getSearchResults(query: SearchRequest, metadata: requestMetadata): Promise<PagedResults> {
        const ratings: string[] = await getRatings(this.stateManager)
        const languages: string[] = await getLanguages(this.stateManager)
        const offset: number = metadata?.offset ?? 0
        let results: PartialSourceManga[] = []

        const searchType = query.title?.match(/[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i) ? 'ids[]' : 'title'

        const url = new URLBuilder(this.MANGADEX_API)
            .addPathComponent('manga')
            .addQueryParameter(searchType, query?.title?.replace(/ /g, '+') || '')
            .addQueryParameter('limit', 100)
            .addQueryParameter('hasAvailableChapters', true)
            .addQueryParameter('availableTranslatedLanguage', languages)
            .addQueryParameter('offset', offset)
            .addQueryParameter('contentRating', ratings)
            .addQueryParameter('includes', ['cover_art'])
            .addQueryParameter('includedTags', query.includedTags?.map((x) => x.id))
            .addQueryParameter('includedTagsMode', query.includeOperator)
            .addQueryParameter('excludedTags', query.excludedTags?.map((x) => x.id))
            .addQueryParameter('excludedTagsMode', query.excludeOperator)
            .buildUrl()

        const request = App.createRequest({
            url: url,
            method: 'GET'
        })
        const response = await this.requestManager.schedule(request, 1)

        if (response.status != 200) {
            return App.createPagedResults({ results })
        }

        const json = (typeof response.data === 'string') ? JSON.parse(response.data) : response.data
        if (json.data === undefined) {
            throw new Error('Failed to parse json for the given search')
        }

        results = await parseMangaList(json.data, this, getSearchThumbnail)
        return App.createPagedResults({
            results,
            metadata: { offset: offset + 100 }
        })
    }

    async getHomePageSections(sectionCallback: (section: HomeSection) => void): Promise<void> {
        const ratings: string[] = await getRatings(this.stateManager)
        const languages: string[] = await getLanguages(this.stateManager)
        const promises: Promise<void>[] = []

        const sections = [
            {
                request: App.createRequest({
                    url: await this.getCustomListRequestURL(SEASONAL_LIST, ratings),
                    method: 'GET'
                }),
                section: App.createHomeSection({
                    id: 'seasonal',
                    title: 'Seasonal',
                    containsMoreItems: false,
                    type: HomeSectionType.featured
                })
            },
            {
                request: App.createRequest({
                    url: new URLBuilder(this.MANGADEX_API)
                        .addPathComponent('manga')
                        .addQueryParameter('limit', 20)
                        .addQueryParameter('hasAvailableChapters', true)
                        .addQueryParameter('availableTranslatedLanguage', languages)
                        .addQueryParameter('order', { followedCount: 'desc' })
                        .addQueryParameter('contentRating', ratings)
                        .addQueryParameter('includes', ['cover_art'])
                        .buildUrl(),
                    method: 'GET'
                }),
                section: App.createHomeSection({
                    id: 'popular',
                    title: 'Popular',
                    containsMoreItems: true,
                    type: HomeSectionType.singleRowNormal
                })
            },
            {
                request: App.createRequest({
                    url: new URLBuilder(this.MANGADEX_API)
                        .addPathComponent('manga')
                        .addQueryParameter('limit', 20)
                        .addQueryParameter('hasAvailableChapters', true)
                        .addQueryParameter('availableTranslatedLanguage', languages)
                        .addQueryParameter('order', { latestUploadedChapter: 'desc' })
                        .addQueryParameter('contentRating', ratings)
                        .addQueryParameter('includes', ['cover_art'])
                        .buildUrl(),
                    method: 'GET'
                }),
                section: App.createHomeSection({
                    id: 'latest_updates',
                    title: 'Latest Updates',
                    containsMoreItems: true,
                    type: HomeSectionType.singleRowNormal
                })
            },
            {
                request: App.createRequest({
                    url: new URLBuilder(this.MANGADEX_API)
                        .addPathComponent('manga')
                        .addQueryParameter('limit', 20)
                        .addQueryParameter('hasAvailableChapters', true)
                        .addQueryParameter('availableTranslatedLanguage', languages)
                        .addQueryParameter('order', { createdAt: 'desc' })
                        .addQueryParameter('contentRating', ratings)
                        .addQueryParameter('includes', ['cover_art'])
                        .buildUrl(),
                    method: 'GET'
                }),
                section: App.createHomeSection({
                    id: 'recently_Added',
                    title: 'Recently Added',
                    containsMoreItems: true,
                    type: HomeSectionType.singleRowNormal
                })
            }
        ]

        for (const section of sections) {
            // Let the app load empty sections
            sectionCallback(section.section)
            // Get the section data
            promises.push(
                this.requestManager.schedule(section.request, 1).then(async (response) => {
                    const json: MangaDexSearchResponse = (typeof response.data === 'string') ? JSON.parse(response.data) : response.data

                    if (json.data === undefined) {
                        throw new Error(`Failed to parse json results for section ${section.section.title}`)
                    }

                    section.section.items = await parseMangaList(json.data, this, getHomepageThumbnail)

                    sectionCallback(section.section)
                })
            )
        }

        // Make sure the function completes
        await Promise.all(promises)
    }

    async getViewMoreItems(homepageSectionId: string, metadata: requestMetadata): Promise<PagedResults> {
        const offset: number = metadata?.offset ?? 0
        const collectedIds: string[] = metadata?.collectedIds ?? []
        const ratings: string[] = await getRatings(this.stateManager)
        const languages: string[] = await getLanguages(this.stateManager)

        let results: PartialSourceManga[] = []
        let url = ''

        switch (homepageSectionId) {
            case 'popular': {
                url = new URLBuilder(this.MANGADEX_API)
                    .addPathComponent('manga')
                    .addQueryParameter('limit', 100)
                    .addQueryParameter('hasAvailableChapters', true)
                    .addQueryParameter('availableTranslatedLanguage', languages)
                    .addQueryParameter('order', { followedCount: 'desc' })
                    .addQueryParameter('offset', offset)
                    .addQueryParameter('contentRating', ratings)
                    .addQueryParameter('includes', ['cover_art'])
                    .buildUrl()
                break
            }

            case 'latest_updates': {
                url = new URLBuilder(this.MANGADEX_API)
                    .addPathComponent('manga')
                    .addQueryParameter('limit', 100)
                    .addQueryParameter('hasAvailableChapters', true)
                    .addQueryParameter('availableTranslatedLanguage', languages)
                    .addQueryParameter('order', { latestUploadedChapter: 'desc' })
                    .addQueryParameter('offset', offset)
                    .addQueryParameter('contentRating', ratings)
                    .addQueryParameter('includes', ['cover_art'])
                    .buildUrl()
                break
            }

            case 'recently_Added': {
                url = new URLBuilder(this.MANGADEX_API)
                    .addPathComponent('manga')
                    .addQueryParameter('limit', 100)
                    .addQueryParameter('hasAvailableChapters', true)
                    .addQueryParameter('availableTranslatedLanguage', languages)
                    .addQueryParameter('order', { createdAt: 'desc' })
                    .addQueryParameter('offset', offset)
                    .addQueryParameter('contentRating', ratings)
                    .addQueryParameter('includes', ['cover_art'])
                    .buildUrl()
                break
            }
        }

        const request = App.createRequest({
            url: url,
            method: 'GET'
        })
        const response = await this.requestManager.schedule(request, 1)

        const json: MangaDexSearchResponse = (typeof response.data === 'string') ? JSON.parse(response.data) : response.data

        if (json.data === undefined) {
            throw new Error('Failed to parse json results for getViewMoreItems')
        }

        results = await parseMangaList(json.data, this, getHomepageThumbnail)

        return App.createPagedResults({
            results,
            metadata: { offset: offset + 100, collectedIds }
        })
    }

    // Utility
    decodeHTMLEntity(str: string | undefined): string | undefined {
        if (str == undefined) return undefined
        return entities.decodeHTML(str)
    }

    checkId(id: string): void {
        if (!id.includes('-')) {
            throw new Error('OLD ID: PLEASE REFRESH AND CLEAR ORPHANED CHAPTERS')
        }
    }
}
