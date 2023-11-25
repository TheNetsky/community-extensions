import {
    BadgeColor,
    Chapter,
    ChapterDetails,
    ChapterProviding,
    ContentRating,
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
    parseChapterURL,
    parseHomeSections,
    parseMangaDetails,
    parseSearch,
    parseTags,
    parseViewMore
} from './VyvyMangaParser'

const VYVY_DOMAIN = 'https://vyvymanga.net'

export const VyvyMangaInfo: SourceInfo = {
    version: '2.0.0',
    name: 'VyvyManga',
    icon: 'icon.png',
    author: 'Nicholas',
    authorWebsite: 'https://github.com/niclimcy',
    description: 'Extension that pulls manga from vyvymanga.net',
    contentRating: ContentRating.MATURE,
    websiteBaseURL: VYVY_DOMAIN,
    sourceTags: [
        {
            text: '18+',
            type: BadgeColor.YELLOW
        }
    ],
    intents:
    SourceIntents.MANGA_CHAPTERS |
    SourceIntents.HOMEPAGE_SECTIONS |
    SourceIntents.CLOUDFLARE_BYPASS_REQUIRED
}

export class VyvyManga
implements
    SearchResultsProviding,
    MangaProviding,
    ChapterProviding,
    HomePageSectionsProviding
{
    constructor(private cheerio: CheerioAPI) {}

    requestManager = App.createRequestManager({
        requestsPerSecond: 4,
        requestTimeout: 15000,
        interceptor: {
            interceptRequest: async (request: Request): Promise<Request> => {
                request.headers = {
                    ...(request.headers ?? {}),
                    ...{
                        referer: `${VYVY_DOMAIN}/`,
                        'user-agent': await this.requestManager.getDefaultUserAgent()
                    }
                }
                return request
            },
            interceptResponse: async (response: Response): Promise<Response> => {
                return response
            }
        }
    });

    getMangaShareUrl(mangaId: string): string {
        return `${VYVY_DOMAIN}/manga/${mangaId}`
    }

    async getMangaDetails(mangaId: string): Promise<SourceManga> {
        const request = App.createRequest({
            url: `${VYVY_DOMAIN}/manga/${mangaId}`,
            method: 'GET'
        })

        const response = await this.requestManager.schedule(request, 1)
        this.CloudFlareError(response.status)
        const $ = this.cheerio.load(response.data as string)
        return parseMangaDetails($, mangaId)
    }

    async getChapters(mangaId: string): Promise<Chapter[]> {
        const request = App.createRequest({
            url: `${VYVY_DOMAIN}/manga/${mangaId}`,
            method: 'GET'
        })

        const response = await this.requestManager.schedule(request, 1)
        this.CloudFlareError(response.status)
        const $ = this.cheerio.load(response.data as string)
        return parseChapterList($, mangaId)
    }

    async getChapterDetails(
        mangaId: string,
        chapterId: string
    ): Promise<ChapterDetails> {
        let request: Request
        let response: Response
        let $: CheerioStatic

        // Find chapterUrl
        request = App.createRequest({
            url: `${VYVY_DOMAIN}/manga/${mangaId}`,
            method: 'GET'
        })
        response = await this.requestManager.schedule(request, 1)
        this.CloudFlareError(response.status)
        $ = this.cheerio.load(response.data as string)

        const chapterUrl = parseChapterURL($, chapterId)

        // Find pages
        request = App.createRequest({
            url: `${chapterUrl}`,
            method: 'GET'
        })
        response = await this.requestManager.schedule(request, 1)
        this.CloudFlareError(response.status)
        $ = this.cheerio.load(response.data as string)

        return parseChapterDetails($, mangaId, chapterId)
    }

    async getHomePageSections(
        sectionCallback: (section: HomeSection) => void
    ): Promise<void> {
        const request = App.createRequest({
            url: `${VYVY_DOMAIN}`,
            method: 'GET'
        })

        const response = await this.requestManager.schedule(request, 1)
        this.CloudFlareError(response.status)
        const $ = this.cheerio.load(response.data as string)
        parseHomeSections($, sectionCallback)
    }

    async getViewMoreItems(
        homepageSectionId: string,
        metadata: any
    ): Promise<PagedResults> {
        const page: number = metadata?.page ?? 1
        let param = ''

        switch (homepageSectionId) {
            case 'most_popular':
                param = `?sort=viewed&sort_type=desc&page=${page}`
                break
            case 'latest_updates':
                param = `?sort=updated_at&page=${page}`
                break
            case 'new_releases':
                param = `?sort=created_at&page=${page}`
                break
            default:
                throw new Error(
                    'Requested to getViewMoreItems for a section ID which doesn\'t exist'
                )
        }
        const request = App.createRequest({
            url: `${VYVY_DOMAIN}/search`,
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

    async getSearchResults(
        query: SearchRequest,
        metadata: any
    ): Promise<PagedResults> {
        const page: number = metadata?.page ?? 1
        let request

        // Regular search
        if (query.title) {
            request = App.createRequest({
                url: `${VYVY_DOMAIN}/search`,
                method: 'GET',
                param: `?q=${encodeURI(query.title ?? '')}&page=${page}`
            })
            // Tag Search
        } else {
            request = App.createRequest({
                url: `${VYVY_DOMAIN}/genre/${query?.includedTags?.map((x: Tag) => x.id)[0]}`,
                method: 'GET',
                param: `?page=${page}`
            })
        }

        const response = await this.requestManager.schedule(request, 1)
        const $ = this.cheerio.load(response.data as string)
        const manga = parseSearch($)

        metadata = !isLastPage($) ? { page: page + 1 } : undefined
        return App.createPagedResults({
            results: manga,
            metadata
        })
    }

    async getSearchTags(): Promise<TagSection[]> {
        const request = App.createRequest({
            url: `${VYVY_DOMAIN}`,
            method: 'GET'
        })

        const response = await this.requestManager.schedule(request, 1)
        const $ = this.cheerio.load(response.data as string)
        return parseTags($)
    }

    CloudFlareError(status: number): void {
        if (status == 503 || status == 403) {
            throw new Error(
                `CLOUDFLARE BYPASS ERROR:\nPlease go to the homepage of <${VyvyManga.name}> and press the cloud icon.`
            )
        }
    }

    async getCloudflareBypassRequestAsync(): Promise<Request> {
        return App.createRequest({
            url: VYVY_DOMAIN,
            method: 'GET',
            headers: {
                referer: `${VYVY_DOMAIN}/`,
                'user-agent': await this.requestManager.getDefaultUserAgent()
            }
        })
    }
}
