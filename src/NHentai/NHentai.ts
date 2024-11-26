import {
    SourceManga,
    Chapter,
    ChapterDetails,
    HomeSection,
    SearchRequest,
    PagedResults,
    SourceInfo,
    BadgeColor,
    Request,
    RequestManager,
    ContentRating,
    SourceStateManager,
    Response,
    ChapterProviding,
    MangaProviding,
    SearchResultsProviding,
    DUISection,
    HomeSectionType,
    SourceIntents,
    HomePageSectionsProviding,
    Tag,
    TagSection
} from '@paperback/types'

import { hasNoResults, NHSortOrders } from './NHentaiHelper'

import {
    parseMangaDetails,
    parseChapters,
    parseChapterDetails,
    parseSearch,
    addToReadMangaIds
} from './NHentaiParser'

import {
    getExtraArgs,
    resetSettings,
    settings
} from './NHentaiSettings'

import { popularTags } from './tags.json'

const NHENTAI_URL = 'https://nhentai.net'

export const NHentaiInfo: SourceInfo = {
    version: '4.0.9',
    name: 'nhentai',
    icon: 'icon.png',
    author: 'NotMarek & Netsky',
    authorWebsite: 'https://github.com/TheNetsky',
    description: 'Extension which pulls content from nHentai.',
    contentRating: ContentRating.ADULT,
    websiteBaseURL: NHENTAI_URL,
    intents: SourceIntents.MANGA_CHAPTERS | SourceIntents.HOMEPAGE_SECTIONS | SourceIntents.CLOUDFLARE_BYPASS_REQUIRED | SourceIntents.SETTINGS_UI,
    sourceTags: [
        {
            text: '18+',
            type: BadgeColor.YELLOW
        }
    ]
}


export class NHentai implements SearchResultsProviding, MangaProviding, ChapterProviding, HomePageSectionsProviding {
    readonly requestManager: RequestManager = App.createRequestManager({
        requestsPerSecond: 3,
        requestTimeout: 15000,
        interceptor: {
            interceptRequest: async (request: Request): Promise<Request> => {
                request.headers = {
                    ...(request.headers ?? {}),
                    ...{
                        'referer': `${NHENTAI_URL}/`,
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

    stateManager = App.createSourceStateManager()

    // Source Settings
    async getSourceMenu(): Promise<DUISection> {
        return Promise.resolve(App.createDUISection({
            id: 'main',
            header: 'Source Settings',
            rows: () => Promise.resolve([
                settings(this.stateManager),
                resetSettings(this.stateManager)
            ]),
            isHidden: false
        }))
    }

    getMangaShareUrl(mangaId: string): string { return `${NHENTAI_URL}/g/${mangaId}` }

    async getMangaDetails(mangaId: string): Promise<SourceManga> {
        const request = App.createRequest({
            url: `${NHENTAI_URL}/api/gallery/${mangaId}`,
            method: 'GET'
        })
        const response = await this.requestManager.schedule(request, 1)
        this.CloudFlareError(response.status)

        const jsonData = this.parseJson(response)
        return parseMangaDetails(jsonData)
    }

    async getChapters(mangaId: string): Promise<Chapter[]> {
        const request = App.createRequest({
            url: `${NHENTAI_URL}/api/gallery/${mangaId}`,
            method: 'GET'
        })
        const response = await this.requestManager.schedule(request, 1)
        this.CloudFlareError(response.status)

        const jsonData = this.parseJson(response)
        return [parseChapters(jsonData, mangaId)]
    }

    async getChapterDetails(mangaId: string): Promise<ChapterDetails> {
        const request = App.createRequest({
            url: `${NHENTAI_URL}/api/gallery/${mangaId}`,
            method: 'GET'
        })
        const response = await this.requestManager.schedule(request, 1)
        this.CloudFlareError(response.status)

        const jsonData = this.parseJson(response)

        // Add the manga ID to the read list
        await addToReadMangaIds(this.stateManager, mangaId)

        return parseChapterDetails(jsonData, mangaId)
    }

    async getSearchTags(): Promise<TagSection[]> {
        const arrayTags: Tag[] = []

        for (const tag of popularTags) {
            const label = tag.label
            const id = tag.id
            arrayTags.push({ id: id, label: label })
        }
        const tagSections: TagSection[] = [App.createTagSection({ id: '0', label: 'Tags', tags: arrayTags.map(x => App.createTag(x)) })]
        return tagSections
    }

    async getSearchResults(query: SearchRequest, metadata: any): Promise<PagedResults> {
        const page: number = metadata?.page ?? 1
        const title: string = query.title ?? ''
        const skipReadManga = await this.stateManager.retrieve('skip_read_manga') ?? false
        const readMangaIds = skipReadManga ? await this.getReadMangaIds() : []

        if (metadata?.stopSearch ?? false) {
            return App.createPagedResults({
                results: [],
                metadata: {
                    stopSearch: true
                }
            })
        }

        const q: string = encodeURIComponent(`${title} ${query?.includedTags?.map((x: Tag) => ` +${x.id}`)} `) + await this.generateQuery()
        const request = App.createRequest({
            url: `${NHENTAI_URL}/api/galleries/search?query=${q}&page=${page}&sort=${await this.sortOrder(this.stateManager)}`,
            method: 'GET'
        })
        const response = await this.requestManager.schedule(request, 1)
        this.CloudFlareError(response.status)

        const jsonData = this.parseJson(response)
        const results = parseSearch(jsonData, readMangaIds ?? [])

        return App.createPagedResults({
            results,
            metadata: {
                page: page + 1 // Increment by one page
            }
        })
    }

    async getHomePageSections(sectionCallback: (section: HomeSection) => void): Promise<void> {
        const skipReadManga = await this.stateManager.retrieve('skip_read_manga') ?? false
        const readMangaIds = skipReadManga ? await this.getReadMangaIds() : []
        const sections = [
            {
                request: App.createRequest({
                    url: `${NHENTAI_URL}/api/galleries/search?query=${await this.generateQuery()}&sort=date`,
                    method: 'GET'
                }),
                sectionID: App.createHomeSection({
                    id: 'date',
                    title: 'New Uploads',
                    containsMoreItems: true,
                    type: HomeSectionType.singleRowNormal
                })
            },
            {
                request: App.createRequest({
                    url: `${NHENTAI_URL}/api/galleries/search?query=${await this.generateQuery()}&sort=popular-today`,
                    method: 'GET'
                }),
                sectionID: App.createHomeSection({
                    id: 'popular-today',
                    title: 'Popular Today',
                    containsMoreItems: true,
                    type: HomeSectionType.singleRowNormal
                })
            },
            {
                request: App.createRequest({
                    url: `${NHENTAI_URL}/api/galleries/search?query=${await this.generateQuery()}&sort=popular-week`,
                    method: 'GET'
                }),
                sectionID: App.createHomeSection({
                    id: 'popular-week',
                    title: 'Popular Weekly',
                    containsMoreItems: true,
                    type: HomeSectionType.singleRowNormal
                })
            },
            {
                request: App.createRequest({
                    url: `${NHENTAI_URL}/api/galleries/search?query=${await this.generateQuery()}&sort=popular-month`,
                    method: 'GET'
                }),
                sectionID: App.createHomeSection({
                    id: 'popular-month',
                    title: 'Popular Monthly',
                    containsMoreItems: true,
                    type: HomeSectionType.singleRowNormal
                })
            },
            {
                request: App.createRequest({
                    url: `${NHENTAI_URL}/api/galleries/search?query=${await this.generateQuery()}&sort=popular`,
                    method: 'GET'
                }),
                sectionID: App.createHomeSection({
                    id: 'popular',
                    title: 'Popular All-Time',
                    containsMoreItems: true,
                    type: HomeSectionType.singleRowNormal
                })
            }
        ]

        const promises: Promise<void>[] = []

        for (const section of sections) {
            sectionCallback(section.sectionID)
            promises.push(
                this.requestManager.schedule(section.request, 1)
                    .then(response => {
                        this.CloudFlareError(response.status)
                        const jsonData = this.parseJson(response)
                        if (hasNoResults(jsonData)) {
                            return
                        }
                        section.sectionID.items = parseSearch(jsonData, readMangaIds ?? [])
                        sectionCallback(section.sectionID)
                    })
            )
        }

        await Promise.all(promises)
    }

    async getViewMoreItems(homepageSectionId: string, metadata: any): Promise<PagedResults> {
        let page: number = metadata?.page ?? 1
        const skipReadManga = await this.stateManager.retrieve('skip_read_manga') ?? false
        const readMangaIds = skipReadManga ? await this.getReadMangaIds() : []

        const request = App.createRequest({
            url: `${NHENTAI_URL}/api/galleries/search?query=${await this.generateQuery()}&sort=${homepageSectionId}&page=${page}`,
            method: 'GET'
        })
        const response = await this.requestManager.schedule(request, 1)
        this.CloudFlareError(response.status)

        const jsonData = this.parseJson(response)
        const results = parseSearch(jsonData, readMangaIds ?? [])

        page += 1 // Increment by one page
        return App.createPagedResults({
            results,
            metadata: {
                page: page
            }
        })
    }

    async getReadMangaIds(): Promise<string[]> {
        const allData = await this.stateManager.retrieve('read_manga_ids')
        if (!allData) {
            return []
        }
        return Object.keys(allData).map(key => key)
    }

    CloudFlareError(status: number): void {
        if (status == 503 || status == 403) {
            throw new Error(`CLOUDFLARE BYPASS ERROR:\nPlease go to the homepage of <${NHentai.name}> and press the cloud icon.`)
        }
    }

    async getCloudflareBypassRequestAsync(): Promise<Request> {
        return App.createRequest({
            url: NHENTAI_URL,
            method: 'GET',
            headers: {
                'referer': `${NHENTAI_URL}/`,
                'user-agent': await this.requestManager.getDefaultUserAgent()
            }
        })
    }

    // Utility
    parseJson(response: Response): any {
        try {
            return (typeof response.data == 'string') ? JSON.parse(response.data) : response.data
        } catch (error) {
            console.log(JSON.stringify(error))
            throw new Error('JSON PARSE ERROR!\n\nYou\'ve like set too many filters in this source\'s settings, remove some to see results!')
        }
    }

    async generateQuery(): Promise<string> {
        const langQuery = await this.language(this.stateManager)
        const extraArgs = await this.extraArgs(this.stateManager)
        const minPages = await this.stateManager.retrieve('min_pages') ?? 0
        return encodeURIComponent(`${langQuery} ${extraArgs} pages:>${minPages}`)
    }

    async language(stateManager: SourceStateManager): Promise<string> {
        const lang = (await stateManager.retrieve('languages') as string) ?? ''
        if (lang == '') {
            return '""'
        }
        else {
            return `language:${lang}`
        }
    }

    async sortOrder(stateManager: SourceStateManager): Promise<string> {
        const sortOrder = (await stateManager.retrieve('sort_order') as string) ?? NHSortOrders.getDefault()
        return sortOrder
    }

    async extraArgs(stateManager: SourceStateManager): Promise<string> {
        const args = await getExtraArgs(stateManager)
        return ` ${args}`
    }
}
