/* eslint-disable linebreak-style */
import {
    Chapter,
    ChapterDetails,
    ChapterProviding,
    ContentRating,
    HomePageSectionsProviding,
    HomeSection,
    HomeSectionType,
    MangaProviding,
    PagedResults,
    PartialSourceManga,
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

import { AsuraScansParser } from './AsuraScansParser'
import { URLBuilder } from './UrlBuilder'
import {
    createHomeSection,
    DefaultHomeSectionData,
    getFilterTagsBySection,
    getIncludedTagBySection,
    HomeSectionData,
    isImgLink
} from './AsuraScansHelper'

import {
    StatusTypes
} from './AsuraScansInterfaces'

import {
    DUINavigationButton,
    DUISection,
    SourceStateManager
} from '@paperback/types/lib'

const simpleUrl = require('simple-url')

const ASURASCANS_DOMAIN = 'https://asuracomic.net'
const ASURASCANS_API_DOMAIN = 'https://gg.asuracomic.net'

export const AsuraScansInfo: SourceInfo = {
    version: '4.1.7',
    name: 'AsuraScans',
    description: 'Extension that pulls manga from AsuraScans',
    author: 'Seyden',
    authorWebsite: 'https://github.com/Seyden',
    icon: 'icon.png',
    contentRating: ContentRating.MATURE,
    websiteBaseURL: ASURASCANS_DOMAIN,
    intents: SourceIntents.MANGA_CHAPTERS | SourceIntents.HOMEPAGE_SECTIONS | SourceIntents.CLOUDFLARE_BYPASS_REQUIRED | SourceIntents.SETTINGS_UI,
    sourceTags: []
}

export class AsuraScans implements ChapterProviding, HomePageSectionsProviding, MangaProviding, SearchResultsProviding {

    constructor(public cheerio: CheerioAPI) { }

    stateManager = App.createSourceStateManager()

    async getSourceMenu(): Promise<DUISection> {
        return App.createDUISection({
            id: 'sourceMenu',
            header: 'Source Menu',
            isHidden: false,
            rows: async () => [
                this.sourceSettings(this.stateManager)
            ]
        })
    }

    sourceSettings = (stateManager: SourceStateManager): DUINavigationButton => App.createDUINavigationButton({
        id: 'asurascans_settings',
        label: 'Source Settings',
        form: App.createDUIForm({
            sections: async () => [
                App.createDUISection({
                    id: 'domain',
                    isHidden: false,
                    footer: 'Override the domain url for the source.',
                    rows: async () => [
                        App.createDUIInputField({
                            id: 'domain_url',
                            label: 'Domain',
                            value: App.createDUIBinding({
                                get: async () => await this.getBaseUrl(),
                                set: async (newValue) => await stateManager.store('Domain', newValue)
                            })
                        })
                    ]
                })
            ]
        })
    })

    parser = new AsuraScansParser()

    // ----REQUEST MANAGER----
    requestManager = App.createRequestManager({
        requestsPerSecond: 15,
        requestTimeout: 30000,
        interceptor: {
            interceptRequest: async (request: Request): Promise<Request> => {
                const url: string = await this.getBaseUrl()
                request.headers = {
                    ...(request.headers ?? {}), ...{
                        'user-agent': await this.requestManager.getDefaultUserAgent(),
                        referer: `${url}/`,
                    }
                }

                const path: any = simpleUrl.parse(request.url, true)
                if (!path.protocol || path.protocol == 'http') {
                    path.protocol = 'https'
                    request.url = simpleUrl.create(path)
                }

                if (path.host.includes(`localhost`)) {
                    const url: string = await this.getBaseUrl()
                    path.host = simpleUrl.parse(url, true).host
                    request.url = simpleUrl.create(path)
                }

                if (isImgLink(request.url)) {
                    let overrideUrl: string = await this.stateManager.retrieve('Domain')
                    if (overrideUrl && overrideUrl != this.baseUrl) {
                        const basePath: any = simpleUrl.parse(this.baseUrl, true)
                        const overridePath: any = simpleUrl.parse(overrideUrl, true)
                        if (path.host.includes(basePath.host) || path.host.includes(overridePath.host)) {
                            path.host = overridePath.host
                            request.url = simpleUrl.create(path)
                        }
                    }
                }

                return request
            },

            interceptResponse: async (response: Response): Promise<Response> => {
                if (response.headers.location) {
                    response.headers.location = response.headers.location.replace(/^http:/, 'https:')
                }
                return response
            }
        }
    })

    /**
     * The URL of the website. Eg. https://mangadark.com without a trailing slash
     */
    baseUrl: string = ASURASCANS_DOMAIN
    async getBaseUrl(): Promise<string> {
        const settingsUrl = await this.stateManager.retrieve('Domain')
        const url: string = settingsUrl ? settingsUrl : this.baseUrl
        return url.replace(/\/*$/, '')
    }

    /**
     * The language code which this source supports.
     */
    language: string = '🇬🇧'

    /**
     * The pathname between the domain and the manga.
     * Eg. https://mangadark.com/manga/mashle-magic-and-muscles the pathname would be "manga"
     * Default = "manga"
     */
    sourceTraversalPathName = 'series'

    /**
     * Fallback image if no image is present
     * Default = "https://i.imgur.com/GYUxEX8.png"
     */
    fallbackImage = 'https://i.imgur.com/GYUxEX8.png'

    /**
     * Some websites have the Cloudflare defense check enabled on specific parts of the website, these need to be loaded when using the Cloudflare bypass within the app
     */
    bypassPage = ''

    // ----MANGA DETAILS SELECTORS----

    manga_StatusTypes: StatusTypes = {
        COMINGSOON: 'COMING SOON',
        HIATUS: 'HIATUS',
        SEASONEND: 'SEASON END',
        ONGOING: 'ONGOING',
        COMPLETED: 'COMPLETED',
        DROPPED: 'DROPPED'
    }

    // ----HOMESCREEN SELECTORS----

    sections: Record<'popular_today' | 'latest_update' | 'top_alltime' | 'top_monthly' | 'top_weekly', HomeSectionData> = {
        'popular_today': {
            ...DefaultHomeSectionData,
            section: createHomeSection('popular_today', 'Popular Today', false, HomeSectionType.singleRowLarge),
            selectorFunc: ($: CheerioStatic) => $('div.group', $('h3:contains(Popular Today)')?.parent()?.next()?.next()),
            titleSelectorFunc: ($: CheerioStatic, element: CheerioElement) => $('span.block', element).text().trim(),
            subtitleSelectorFunc: ($: CheerioStatic, element: CheerioElement) => $('span.block', element)?.next()?.text().trim(),
            sortIndex: 10
        },
        'latest_update': {
            ...DefaultHomeSectionData,
            section: createHomeSection('latest_update', 'Latest Updates', false),
            selectorFunc: ($: CheerioStatic) => $('div.w-full', $('h3:contains(Latest Updates)')?.parent()?.next()),
            titleSelectorFunc: ($: CheerioStatic, element: CheerioElement) => $('span.font-medium', element).text().trim(),
            subtitleSelectorFunc: ($: CheerioStatic, element: CheerioElement) => {
                let obj = $('div.text-sm', element).first()
                let hiddenObj = $('div.hidden', obj)
                if (hiddenObj.length != 0)
                    return hiddenObj.text().trim()
                return obj.text().trim()
            },
            getViewMoreItemsFunc: (page: string) => `page/${page}`,
            sortIndex: 20,
        },
        'top_alltime': {
            ...DefaultHomeSectionData,
            section: createHomeSection('top_alltime', 'Top All Time', false),
            selectorFunc: ($: CheerioStatic) => $('li', $('div.serieslist.pop.wpop.wpop-alltime')),
            subtitleSelectorFunc: ($: CheerioStatic, element: CheerioElement) => $('span a', element).toArray().map(x => $(x).text().trim()).join(', '),
            sortIndex: 30,
            enabled: false
        },
        'top_monthly': {
            ...DefaultHomeSectionData,
            section: createHomeSection('top_monthly', 'Top Monthly', false),
            selectorFunc: ($: CheerioStatic) => $('li', $('div.serieslist.pop.wpop.wpop-monthly')),
            subtitleSelectorFunc: ($: CheerioStatic, element: CheerioElement) => $('span a', element).toArray().map(x => $(x).text().trim()).join(', '),
            sortIndex: 40,
            enabled: false
        },
        'top_weekly': {
            ...DefaultHomeSectionData,
            section: createHomeSection('top_weekly', 'Top Weekly', false),
            selectorFunc: ($: CheerioStatic) => $('li', $('div.serieslist.pop.wpop.wpop-weekly')),
            subtitleSelectorFunc: ($: CheerioStatic, element: CheerioElement) => $('span a', element).toArray().map(x => $(x).text().trim()).join(', '),
            sortIndex: 50,
            enabled: false
        }
    }

    // Ugly workaround to fasten up migrations and updates, paperback doesnt support any other way for not double requesting
    mangaDataRequests: { [Key: string]: { expires: number, data: Promise<string> } } = { }

    async getMangaRequest(mangaId: string): Promise<string> {
        let request = this.mangaDataRequests[mangaId]
        if (request && request.expires > Date.now()) {
            return request.data
        }

        for (const key in this.mangaDataRequests) {
            let tempRequest = this.mangaDataRequests[key]
            if (tempRequest!.expires < Date.now()) {
                delete this.mangaDataRequests[key]
            }
        }

        this.mangaDataRequests[mangaId] = {
            expires: Date.now() + 5000,
            data: new Promise<string>(async (resolve, reject) => {
                try {
                    const result = await this.getMangaData(mangaId)
                    resolve(result)
                }
                catch (e) {
                    reject(e)
                }
            })
        }

        return this.mangaDataRequests[mangaId]!.data
    }

    async getMangaSlug(mangaId: string): Promise<string> {
        return await this.stateManager.retrieve(`${mangaId}:slug`)
    }

    async setMangaSlug(mangaId: string, link: string): Promise<void> {
        await this.stateManager.store(`${mangaId}:slug`, link)
    }

    // @ts-ignore
    async getMangaShareUrl(mangaId: string): Promise<string> {
        const slug = await this.getMangaSlug(mangaId)
        if (!slug) {
            throw new Error(`Couldn't find a url for mangaId ${mangaId}, try migrating the title or contact a developer!`)
        }

        const url = await this.getBaseUrl()
        return `${url}/${slug}`
    }

    async getMangaData(mangaId: string): Promise<string> {
        const url = await this.getMangaShareUrl(mangaId)
        return await this.loadRequestData(url)
    }

    async getMangaDetails(mangaId: string): Promise<SourceManga> {
        const data = await this.getMangaRequest(mangaId)
        return await this.parser.parseMangaDetails(data, mangaId, this)
    }

    async getChapters(mangaId: string): Promise<Chapter[]> {
        const data = await this.getMangaRequest(mangaId)
        const chapters = await this.parser.parseChapterList(data, mangaId, this)
        if (!Array.isArray(chapters) || chapters.length == 0) {
            throw new Error(`Couldn't find any chapters for mangaId ${mangaId}, throwing an error to prevent loosing reading progress`)
        }

        return chapters
    }

    async getChapterSlug(mangaId: string, chapterId: string): Promise<string> {
        const chapterKey = `${mangaId}:${chapterId}`
        let existingMappedChapterLink = await this.stateManager.retrieve(chapterKey)
        // If the Chapter List wasn't retrieved since the app was opened, retrieve it first and initialize it for all chapters
        if (existingMappedChapterLink == null) {
            await this.getChapters(mangaId)
        }

        existingMappedChapterLink = await this.stateManager.retrieve(chapterKey)
        if (existingMappedChapterLink == null) {
            throw new Error(`Could not parse out Chapter Link when getting chapter details for postId: ${mangaId} chapterId: ${chapterId}`)
        }

        return existingMappedChapterLink
    }

    async getChapterDetails(mangaId: string, chapterId: string): Promise<ChapterDetails> {
        const chapterLink: string = await this.getChapterSlug(mangaId, chapterId)
        const url: string = await this.getBaseUrl()
        const data = await this.loadRequestData(`${url}/${chapterLink}/`)
        return this.parser.parseChapterDetails(data, mangaId, chapterId)
    }

    async getSearchTags(): Promise<TagSection[]> {
        const data = await this.loadRequestData(`${ASURASCANS_API_DOMAIN}/api/series/filters`)
        return this.parser.parseTags(data)
    }

    async getSearchResults(query: SearchRequest, metadata: any): Promise<PagedResults> {
        let result: {
            metadata: any;
            manga: PartialSourceManga[]
        }
        let manga: PartialSourceManga[] = []

        while (manga.length == 0)
        {
            result = await this.search(metadata, query)
            metadata = result.metadata
            manga = result.manga

            if (metadata == undefined)
                break
        }

        return App.createPagedResults({
            results: manga,
            metadata
        })
    }

    private async search(metadata: any, query: SearchRequest) {
        const page: number = metadata?.page ?? 1

        const request = await this.constructSearchRequest(page, query)
        const response = await this.requestManager.schedule(request, 1)
        this.checkResponseErrors(response)
        const $ = this.cheerio.load(response.data as string, { _useHtmlParser2: true })
        const results = await this.parser.parseSearchResults($, this)

        const chapterTag = query?.includedTags.find((x: Tag) => x.id.startsWith('chapters'))

        const manga: PartialSourceManga[] = []
        for (const result of results) {
            if (chapterTag) {
                const chapterCount = parseInt(chapterTag.id.replace(`chapters:`, ''))
                const chapterCountRegex = result.subtitle?.match(/(\d+)/)
                if (!chapterCountRegex || chapterCountRegex?.[1] && parseInt(chapterCountRegex[1]) < chapterCount)
                    continue
            }

            manga.push(App.createPartialSourceManga({
                mangaId: result.mangaId,
                image: result.image,
                title: result.title,
                subtitle: result.subtitle
            }))
        }

        metadata = !this.parser.isLastPage($, query?.title ? 'search_request' : 'view_more')
                   ? { page: page + 1 }
                   : undefined
        return {
            metadata,
            manga
        }
    }

    async constructSearchRequest(page: number, query: SearchRequest): Promise<any> {
        const url: string = await this.getBaseUrl()
        let urlBuilder: URLBuilder = new URLBuilder(url)
            .addPathComponent(this.sourceTraversalPathName)
            .addQueryParameter('page', page.toString())

        if (query?.title) {
            urlBuilder = urlBuilder.addQueryParameter('name', encodeURIComponent(query?.title.replace(/[’‘´`'\-][a-z]*/g, '%') ?? ''))
        }

        urlBuilder = urlBuilder
            .addQueryParameter('genres', getFilterTagsBySection('genres', query?.includedTags))
            .addQueryParameter('status', getIncludedTagBySection('status', query?.includedTags))
            .addQueryParameter('types', getIncludedTagBySection('type', query?.includedTags))
            .addQueryParameter('order', getIncludedTagBySection('order', query?.includedTags))

        return App.createRequest({
            url: urlBuilder.buildUrl({
                addTrailingSlash: false,
                includeUndefinedParameters: false
            }),
            method: 'GET'
        })
    }

    async supportsTagExclusion(): Promise<boolean> {
        return false
    }

    async getHomePageSections(sectionCallback: (section: HomeSection) => void): Promise<void> {
        const url: string = await this.getBaseUrl()
        const $ = await this.loadCheerioData(`${url}/`)

        const promises: Promise<void>[] = []
        const sectionValues = Object.values(this.sections).sort((n1, n2) => n1.sortIndex - n2.sortIndex)
        for (const section of sectionValues) {
            if (!section.enabled) {
                continue
            }
            // Let the app load empty sections
            sectionCallback(section.section)
        }

        for (const section of sectionValues) {
            if (!section.enabled) {
                continue
            }

            promises.push(new Promise(async () => {
                section.section.items = await this.parser.parseHomeSection($, section, this)
                sectionCallback(section.section)
            }))
        }

        // Make sure the function completes
        await Promise.all(promises)
    }

    async getViewMoreItems(homepageSectionId: string, metadata: any): Promise<PagedResults> {
        throw new Error(`Not implemented yet!`)

        /*const page: number = metadata?.page ?? 1

        // @ts-ignore
        const param = this.sections[homepageSectionId].getViewMoreItemsFunc(page) ?? undefined
        if (!param) {
            throw new Error(`Invalid homeSectionId | ${homepageSectionId}`)
        }

        const url: string = await this.getAndSetBaseUrl()
        const $ = await this.loadCheerioData(`${url}/${param}`)

        const items: PartialSourceManga[] = await this.parser.parseViewMore($, this)
        metadata = !this.parser.isLastPage($, 'view_more')
                   ? { page: page + 1 }
                   : undefined

        return App.createPagedResults({
            results: items,
            metadata
        })*/
    }

    async loadRequestData(url: string, method: string = 'GET'): Promise<string> {
        const request = App.createRequest({
            url,
            method
        })

        const response = await this.requestManager.schedule(request, 1)
        this.checkResponseErrors(response)
        return response.data as string
    }

    async loadCheerioData(url: string, method: string = 'GET'): Promise<CheerioStatic> {
        return this.cheerio.load(await this.loadRequestData(url, method), { _useHtmlParser2: true })
    }

    async getCloudflareBypassRequestAsync(): Promise<Request> {
        const url: string = await this.getBaseUrl()
        return App.createRequest({
            url: `${this.bypassPage || url}/`,
            method: 'GET',
            headers: {
                'referer': `${url}/`,
                'origin': `${url}/`,
                'user-agent': await this.requestManager.getDefaultUserAgent()
            }
        })
    }

    checkResponseErrors(response: Response): void {
        const status = response.status
        switch (status) {
            case 403:
            case 503:
                throw new Error(`CLOUDFLARE BYPASS ERROR:\\nPlease go to the homepage of <${this.baseUrl}> and press the cloud icon.`)
            case 404:
                throw new Error(`The requested page ${response.request.url} was not found!`)
        }
    }
}