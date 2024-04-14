import {
    BadgeColor,
    Chapter,
    ChapterDetails,
    ChapterProviding,
    ContentRating,
    HomePageSectionsProviding,
    HomeSection,
    HomeSectionType,
    MangaProviding,
    PagedResults,
    Request,
    Response,
    SearchField,
    SearchRequest,
    SearchResultsProviding,
    SourceInfo,
    SourceIntents,
    SourceManga,
    TagSection
} from '@paperback/types'

import {
    nextSearchPageUrl,
    parseChapterDetails,
    parseChapters,
    parseHomePageSectionMangas,
    parseMangaDetails,
    parseSearchFields,
    parseSearchResults,
    parseSearchTags,
    parseViewMoreItems
} from './Hentai2ReadParser'
import { getFormBody } from './Hentai2ReadHelper'
import { populateTags } from './Hentai2ReadTags'


export const DOMAIN = 'https://hentai2read.com'

export const Hentai2ReadInfo: SourceInfo = {
    version: '1.0.1',
    name: 'Hentai2Read',
    icon: 'icon.png',
    author: 'EmZedH',
    authorWebsite: 'https://github.com/EmZedH',
    description: 'Extension that pulls manga from hentai2read.com',
    contentRating: ContentRating.ADULT,
    websiteBaseURL: DOMAIN,
    intents: SourceIntents.MANGA_CHAPTERS | SourceIntents.HOMEPAGE_SECTIONS,
    sourceTags: [
        {
            text: '18+',
            type: BadgeColor.YELLOW
        }
    ]
}

export class Hentai2Read implements SearchResultsProviding, MangaProviding, ChapterProviding, HomePageSectionsProviding {

    constructor(private cheerio: CheerioAPI) { }

    requestManager = App.createRequestManager({
        requestsPerSecond: 4,
        requestTimeout: 15000,
        interceptor: {
            interceptRequest: async (request: Request): Promise<Request> => {
                request.headers = {
                    ...(request.headers ?? {}),
                    ...{
                        'referer': `${DOMAIN}/`
                    }
                }

                return request
            },
            interceptResponse: async (response: Response): Promise<Response> => {
                return response
            }
        }
    });

    getMangaShareUrl(mangaId: string): string { return `${DOMAIN}/${mangaId}` }

    async getMangaDetails(mangaId: string): Promise<SourceManga> {
        const request = App.createRequest({
            url: `${DOMAIN}/${mangaId}`,
            method: 'GET'
        })

        const response = await this.requestManager.schedule(request, 1)
        const $ = this.cheerio.load(response.data as string)

        return parseMangaDetails($, mangaId)
    }

    async getChapters(mangaId: string): Promise<Chapter[]> {

        const request = App.createRequest({
            url: `${DOMAIN}/${mangaId}`,
            method: 'GET'
        })

        const response = await this.requestManager.schedule(request, 1)

        const $ = this.cheerio.load(response.data as string)
        return parseChapters($, mangaId)
    }

    async getChapterDetails(mangaId: string, chapterId: string): Promise<ChapterDetails> {
        const request = App.createRequest({
            url: `${DOMAIN}/${chapterId}`,
            method: 'GET'
        })

        const response = await this.requestManager.schedule(request, 1)

        const $ = this.cheerio.load(response.data as string)
        return parseChapterDetails($, mangaId, chapterId)
    }

    async getHomePageSections(sectionCallback: (section: HomeSection) => void): Promise<void> {

        const sections: HomeSection[] = [
            App.createHomeSection({
                id: 'staff-pick',
                title: 'Staff Pick',
                containsMoreItems: false,
                type: HomeSectionType.featured
            }),
            App.createHomeSection({
                id: 'most-popular',
                title: 'Most Popular',
                containsMoreItems: true,
                type: HomeSectionType.singleRowNormal
            }),
            App.createHomeSection({
                id: 'trending',
                title: 'Trending',
                containsMoreItems: true,
                type: HomeSectionType.singleRowNormal
            }),
            App.createHomeSection({
                id: 'last-added',
                title: 'Newest',
                containsMoreItems: true,
                type: HomeSectionType.singleRowNormal
            }),
            App.createHomeSection({
                id: 'top-rating',
                title: 'Top Rating',
                containsMoreItems: true,
                type: HomeSectionType.singleRowNormal
            })
        ]

        for (const section of sections) {
            let url = DOMAIN
            if (section.id != 'staff-pick') {
                url = `${DOMAIN}/hentai-list/all/any/all/` + section.id
            }
            const request = App.createRequest({
                url: url,
                method: 'GET'
            })

            const response = await this.requestManager.schedule(request, 1)

            const $ = this.cheerio.load(response.data as string)

            section.items = parseHomePageSectionMangas($)
            sectionCallback(section)
            this.populateTags()
        }
    }

    async getViewMoreItems(homepageSectionId: string, metadata: any): Promise<PagedResults> {
        const page: number = metadata?.page ?? 1
        let param = ''

        switch (homepageSectionId) {
            case 'most-popular':
                param = `/hentai-list/all/any/all/most-popular/${page}/`
                break
            case 'trending':
                param = `/hentai-list/all/any/all/trending/${page}/`
                break
            case 'last-added':
                param = `/hentai-list/all/any/all/last-added/${page}/`
                break
            case 'top-rating':
                param = `/hentai-list/all/any/all/top-rating/${page}/`
                break
            default:
                throw new Error('Requested to getViewMoreItems for a section ID which doesn\'t exist')
        }
        const request = App.createRequest({
            url: DOMAIN + param,
            method: 'GET'
        })

        const response = await this.requestManager.schedule(request, 1)

        const $ = this.cheerio.load(response.data as string)
        return parseViewMoreItems($, metadata)
    }

    async getSearchResults(query: SearchRequest, metadata: any): Promise<PagedResults> {
        const page: number = metadata?.page ?? 1
        let request: Request
        if (page == 1) {
            request = App.createRequest({
                url: DOMAIN + '/hentai-list/advanced-search',
                method: 'POST',
                data: getFormBody(query)
            })
        }
        else {
            request = App.createRequest({
                url: nextSearchPageUrl,
                method: 'GET'
            })
        }

        const response = await this.requestManager.schedule(request, 1)

        const $ = this.cheerio.load(response.data as string)

        return parseSearchResults($, metadata)
    }

    async getSearchFields(): Promise<SearchField[]> {
        return parseSearchFields()
    }

    async getSearchTags(): Promise<TagSection[]> {

        const request = App.createRequest({
            url: DOMAIN + '/hentai-search',
            method: 'GET'

        })

        const response = await this.requestManager.schedule(request, 1)

        const $ = this.cheerio.load(response.data as string)

        return parseSearchTags($)
    }

    async supportsTagExclusion(): Promise<boolean> {
        return true
    }

    private async populateTags() {

        const request = App.createRequest({
            url: DOMAIN + '/hentai-search',
            method: 'GET'

        })
        const response = await this.requestManager.schedule(request, 1)

        const $ = this.cheerio.load(response.data as string)
        await populateTags($)
    }
}