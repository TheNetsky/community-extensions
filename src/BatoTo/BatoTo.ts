import {
    BadgeColor,
    Chapter,
    ChapterDetails,
    ChapterProviding,
    ContentRating,
    DUISection,
    HomePageSectionsProviding,
    HomeSection,
    MangaProviding,
    PagedResults,
    Request,
    Response,
    SearchRequest,
    SearchResultsProviding,
    SourceInfo,
    SourceIntents,
    SourceManga,
    Tag,
    TagSection
} from '@paperback/types'

import {
    isLastPage,
    parseChapterDetails,
    parseChapterList,
    parseHomeSections,
    parseMangaDetails,
    parseSearch,
    parseTags,
    parseThumbnailUrl,
    parseViewMore
} from './BatoToParser'

import {
    BTLanguages,
    Metadata
} from './BatoToHelper'

import {
    languageSettings,
    resetSettings
} from './BatoToSettings'

const BATO_DOMAIN = 'https://bato.to'

export const BatoToInfo: SourceInfo = {
    version: '3.1.1',
    name: 'BatoTo',
    icon: 'icon.png',
    author: 'niclimcy',
    authorWebsite: 'https://github.com/niclimcy',
    description: 'Extension that pulls manga from bato.to',
    contentRating: ContentRating.MATURE,
    websiteBaseURL: BATO_DOMAIN,
    sourceTags: [
        {
            text: 'Multi Language',
            type: BadgeColor.BLUE
        }
    ],
    intents: SourceIntents.MANGA_CHAPTERS | SourceIntents.HOMEPAGE_SECTIONS | SourceIntents.SETTINGS_UI | SourceIntents.CLOUDFLARE_BYPASS_REQUIRED
}

export class BatoTo implements SearchResultsProviding, MangaProviding, ChapterProviding, HomePageSectionsProviding {

    constructor(private cheerio: CheerioAPI) { }

    requestManager = App.createRequestManager({
        requestsPerSecond: 4,
        requestTimeout: 15000,
        interceptor: {
            interceptRequest: async (request: Request): Promise<Request> => {
                request.headers = {
                    ...(request.headers ?? {}),
                    ...{
                        'referer': `${BATO_DOMAIN}/`,
                        'user-agent': await this.requestManager.getDefaultUserAgent()
                    }
                }
                if (request.url.includes('mangaId=')) {
                    const mangaId = request.url.replace('mangaId=', '')
                    if (mangaId) request.url = await this.getThumbnailUrl(mangaId)
                }
                return request
            },
            interceptResponse: async (response: Response): Promise<Response> => {
                return response
            }
        }
    });

    stateManager = App.createSourceStateManager()

    async getSourceMenu(): Promise<DUISection> {
        return Promise.resolve(App.createDUISection({
            id: 'main',
            header: 'Source Settings',
            isHidden: false,
            rows: async () => [
                languageSettings(this.stateManager),
                resetSettings(this.stateManager)
            ]
        }))
    }

    getMangaShareUrl(mangaId: string): string { return `${BATO_DOMAIN}/series/${mangaId}` }

    async getMangaDetails(mangaId: string): Promise<SourceManga> {
        const request = App.createRequest({
            url: `${BATO_DOMAIN}/series/${mangaId}`,
            method: 'GET'
        })

        const response = await this.requestManager.schedule(request, 1)
        this.CloudFlareError(response.status)
        const $ = this.cheerio.load(response.data as string)
        return parseMangaDetails($, mangaId)
    }

    async getChapters(mangaId: string): Promise<Chapter[]> {
        const request = App.createRequest({
            url: `${BATO_DOMAIN}/series/${mangaId}`,
            method: 'GET'
        })

        const response = await this.requestManager.schedule(request, 1)
        this.CloudFlareError(response.status)
        const $ = this.cheerio.load(response.data as string)
        return parseChapterList($, mangaId)
    }

    async getChapterDetails(mangaId: string, chapterId: string): Promise<ChapterDetails> {
        const request = App.createRequest({
            url: `${BATO_DOMAIN}/chapter/${chapterId}`,
            method: 'GET'
        })

        const response = await this.requestManager.schedule(request, 1)
        this.CloudFlareError(response.status)
        const $ = this.cheerio.load(response.data as string)
        return parseChapterDetails($, mangaId, chapterId)
    }

    async getHomePageSections(sectionCallback: (section: HomeSection) => void): Promise<void> {
        const request = App.createRequest({
            url: `${BATO_DOMAIN}`,
            method: 'GET'
        })

        const response = await this.requestManager.schedule(request, 1)
        this.CloudFlareError(response.status)
        const $ = this.cheerio.load(response.data as string)
        parseHomeSections($, sectionCallback)
    }

    async getViewMoreItems(homepageSectionId: string, metadata: Metadata | undefined): Promise<PagedResults> {
        const page: number = metadata?.page ?? 1
        let param = ''

        switch (homepageSectionId) {
            case 'popular_updates':
                param = `?sort=views_d.za&page=${page}`
                break
            case 'latest_releases':
                param = `?sort=update.za&page=${page}`
                break
            default:
                throw new Error('Requested to getViewMoreItems for a section ID which doesn\'t exist')
        }

        const langHomeFilter: boolean = await this.stateManager.retrieve('language_home_filter') ?? false
        const langs: string[] = await this.stateManager.retrieve('languages') ?? BTLanguages.getDefault()
        param += langHomeFilter ? `&langs=${langs.join(',')}` : ''

        const request = App.createRequest({
            url: `${BATO_DOMAIN}/browse`,
            method: 'GET',
            param
        })

        const response = await this.requestManager.schedule(request, 1)
        this.CloudFlareError(response.status)
        const $ = this.cheerio.load(response.data as string)
        const manga = parseViewMore($)

        metadata = !isLastPage($) ? { page: page + 1 } : undefined
        return App.createPagedResults({
            results: manga,
            metadata
        })
    }

    async getSearchResults(query: SearchRequest, metadata: Metadata | undefined): Promise<PagedResults> {
        const page: number = metadata?.page ?? 1
        let request

        // Regular search
        if (query.title) {
            request = App.createRequest({
                url: `${BATO_DOMAIN}/search?word=${encodeURI(query.title ?? '')}&page=${page}`,
                method: 'GET'
            })
        // Tag Search
        } else {
            request = App.createRequest({
                url: `${BATO_DOMAIN}/browse?genres=${query?.includedTags?.map((x: Tag) => x.id)[0]}&page=${page}`,
                method: 'GET'
            })
        }

        const langSearchFilter: boolean = await this.stateManager.retrieve('language_search_filter') ?? false
        const langs: string[] = await this.stateManager.retrieve('languages') ?? BTLanguages.getDefault()

        const response = await this.requestManager.schedule(request, 1)
        const $ = this.cheerio.load(response.data as string)
        const manga = parseSearch($, langSearchFilter, langs)

        metadata = !isLastPage($) ? { page: page + 1 } : undefined
        return App.createPagedResults({
            results: manga,
            metadata
        })
    }

    async getSearchTags(): Promise<TagSection[]> {
        return parseTags()
    }

    async getThumbnailUrl(mangaId: string): Promise<string> {
        const request = App.createRequest({
            url: `${BATO_DOMAIN}/series/${mangaId}`,
            method: 'GET'
        })

        const response = await this.requestManager.schedule(request, 1)
        this.CloudFlareError(response.status)
        const $ = this.cheerio.load(response.data as string)
        return parseThumbnailUrl($)
    }

    CloudFlareError(status: number): void {
        if (status == 503 || status == 403) {
            throw new Error(`CLOUDFLARE BYPASS ERROR:\nPlease go to the homepage of <${BatoTo.name}> and press the cloud icon.`)
        }
    }

    async getCloudflareBypassRequestAsync(): Promise<Request> {
        return App.createRequest({
            url: BATO_DOMAIN,
            method: 'GET',
            headers: {
                'referer': `${BATO_DOMAIN}/`,
                'user-agent': await this.requestManager.getDefaultUserAgent()
            }
        })
    }
}
