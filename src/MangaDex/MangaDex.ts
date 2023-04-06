/* eslint-disable @typescript-eslint/ban-ts-comment */
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
  ContentRating,
  TagSection,
  HomeSectionType,
  ChapterProviding,
  SourceIntents,
  DUISection,
  Searchable,
} from "@paperback/types"
import entities = require("entities")
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
  homepageSettings,
  getEnabledRecommendations,
  getEnabledHomePageSections,
  accountSettings,
  getAccessToken,
  authEndpointRequest,
  saveAccessToken,
} from "./MangaDexSettings"
import { requestMetadata, MDLanguages, URLBuilder, MDImageQuality } from "./MangaDexHelper"
import { addRecommendedId, getRecommendedIds } from "./MangaDexSimilarManga"
import tagJSON from "./external/tag.json"
import { parseChapterList, parseMangaList } from "./MangaDexParser"

const MANGADEX_DOMAIN = "https://mangadex.org"
const MANGADEX_API = "https://api.mangadex.org"
const COVER_BASE_URL = "https://uploads.mangadex.org/covers"

// Titles recommendations are shown on the homepage when enabled in source settings.
// Recommendations are made using https://github.com/Similar-Manga
const RECOMMENDATION_URL = "https://framboisepi.github.io/SimilarData"
export const MangaDexInfo: SourceInfo = {
  author: "nar1n",
  description: "Extension that pulls manga from MangaDex",
  icon: "icon.png",
  name: "MangaDex",
  version: "3.0.0",
  authorWebsite: "https://github.com/nar1n",
  websiteBaseURL: MANGADEX_DOMAIN,
  contentRating: ContentRating.EVERYONE,
  intents: SourceIntents.MANGA_CHAPTERS | SourceIntents.SETTINGS_UI | SourceIntents.HOMEPAGE_SECTIONS,
}

export class MangaDex implements ChapterProviding, Searchable {
  MANGADEX_DOMAIN = MANGADEX_DOMAIN
  MANGADEX_API = MANGADEX_API
  COVER_BASE_URL = COVER_BASE_URL

  stateManager = App.createSourceStateManager()
  requestManager = App.createRequestManager({
    requestsPerSecond: 2.5,
    requestTimeout: 20000,
    interceptor: {
      interceptRequest: async (request) => {
        // Impossible to have undefined headers, ensured by the app
        request.headers = {
          ...request.headers,
          referer: `${this.MANGADEX_DOMAIN}/`,
        }
        let accessToken = await getAccessToken(this.stateManager)
        if (request.url.includes("auth/") || !accessToken) return request
        // Padding 60 secs to make sure it wont expire in-transit if the connection is really bad
        if (Number(accessToken.tokenBody.exp) <= Date.now() / 1000 - 60) {
          try {
            const response = await authEndpointRequest(this.requestManager, "refresh", {
              token: accessToken.refreshToken,
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
          authorization: "Bearer " + accessToken.accessToken,
        }
        return request
      },
      interceptResponse: async (x) => x,
    },
  })

  async getSourceMenu(): Promise<DUISection> {
    return App.createDUISection({
      id: "main",
      header: "Source Settings",
      isHidden: false,
      rows: async () => [
        await accountSettings(this.stateManager, this.requestManager),
        contentSettings(this.stateManager),
        thumbnailSettings(this.stateManager),
        homepageSettings(this.stateManager),
        resetSettings(this.stateManager),
      ],
    })
  }

  getMangaShareUrl(mangaId: string): string {
    return `${this.MANGADEX_DOMAIN}/title/${mangaId}`
  }

  async getSearchTags(): Promise<TagSection[]> {
    const sections: Record<string, TagSection> = {}
    for (const tag of tagJSON) {
      const group = tag.data.attributes.group
      if (sections[group] == null) {
        sections[group] = App.createTagSection({
          id: group,
          label: group.charAt(0).toUpperCase() + group.slice(1),
          tags: [],
        })
      }
      const tagObject = App.createTag({
        id: tag.data.id,
        label: tag.data.attributes.name.en,
      })
      // Since we already know that a section for the group has to exist, eslint is complaining
      // for no reason at all.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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

  async getCustomListRequestURL(listId: string, ratings: string[]): Promise<string> {
    const request = App.createRequest({
      url: `${this.MANGADEX_API}/list/${listId}`,
      method: "GET",
    })
    const response = await this.requestManager.schedule(request, 1)
    const json = typeof response.data === "string" ? JSON.parse(response.data) : response.data
    return new URLBuilder(this.MANGADEX_API)
      .addPathComponent("manga")
      .addQueryParameter("limit", 100)
      .addQueryParameter("contentRating", ratings)
      .addQueryParameter("includes", ["cover_art"])
      .addQueryParameter(
        "ids",
        json.data.relationships.filter((x: any) => x.type == "manga").map((x: any) => x.id),
      )
      .buildUrl()
  }

  async getCoversMapping(
    mangaIds: string[],
    ratings: string[],
  ): Promise<{
    [id: string]: string
  }> {
    const mapping: {
      [id: string]: string
    } = {}
    const request = App.createRequest({
      url: new URLBuilder(this.MANGADEX_API)
        .addPathComponent("manga")
        .addQueryParameter("limit", 100)
        .addQueryParameter("contentRating", ratings)
        .addQueryParameter("ids", mangaIds)
        .addQueryParameter("includes", ["cover_art"])
        .buildUrl(),
      method: "GET",
    })
    const response = await this.requestManager.schedule(request, 1)
    const json = typeof response.data === "string" ? JSON.parse(response.data) : response.data
    for (const manga of json.data) {
      const mangaId = manga.id
      const coverFileName = manga.relationships
        .filter((x: any) => x.type == "cover_art")
        .map((x: any) => x.attributes?.fileName)[0]
      if (!mangaId || !coverFileName) continue
      mapping[mangaId] = coverFileName
    }
    return mapping
  }

  async getMangaDetails(mangaId: string): Promise<SourceManga> {
    if (!mangaId.includes("-")) {
      // Legacy Id
      console.log("OLD ID: PLEASE MIGRATE")
      throw new Error("OLD ID: PLEASE MIGRATE")
    }
    const request = App.createRequest({
      url: new URLBuilder(this.MANGADEX_API)
        .addPathComponent("manga")
        .addPathComponent(mangaId)
        .addQueryParameter("includes", ["author", "artist", "cover_art"])
        .buildUrl(),
      method: "GET",
    })
    const response = await this.requestManager.schedule(request, 1)
    const json = typeof response.data === "string" ? JSON.parse(response.data) : response.data
    const mangaDetails = json.data.attributes
    const titles = <string[]>(
      [...Object.values(mangaDetails.title), ...mangaDetails.altTitles.flatMap((x: never) => Object.values(x))]
        .map((x: string) => this.decodeHTMLEntity(x))
        .filter((x) => x)
    )
    const desc = this.decodeHTMLEntity(mangaDetails.description.en)?.replace(/\[\/?[bus]]/g, "") // Get rid of BBcode tags

    const status = mangaDetails.status

    const tags: Tag[] = []
    for (const tag of mangaDetails.tags) {
      const tagName: {
        [index: string]: string
      } = tag.attributes.name
      tags.push(
        App.createTag({
          id: tag.id,
          label: Object.keys(tagName).map((keys) => tagName[keys])[0] ?? "Unknown",
        }),
      )
    }
    const author = json.data.relationships
      .filter((x: any) => x.type == "author")
      .map((x: any) => x.attributes.name)
      .join(", ")
    const artist = json.data.relationships
      .filter((x: any) => x.type == "artist")
      .map((x: any) => x.attributes.name)
      .join(", ")
    const coverFileName = json.data.relationships
      .filter((x: any) => x.type == "cover_art")
      .map((x: any) => x.attributes?.fileName)[0]
    let image: string
    if (coverFileName) {
      image = `${this.COVER_BASE_URL}/${mangaId}/${coverFileName}${MDImageQuality.getEnding(
        await getMangaThumbnail(this.stateManager),
      )}`
    } else {
      image = "https://mangadex.org/_nuxt/img/cover-placeholder.d12c3c5.jpg"
    }
    return App.createSourceManga({
      id: mangaId,
      mangaInfo: App.createMangaInfo({
        titles,
        image,
        author,
        artist,
        desc: desc ?? "No Description",
        rating: 5,
        status,
        tags: [
          App.createTagSection({
            id: "tags",
            label: "Tags",
            tags: tags,
          }),
        ],
      }),
    })
  }

  async getChapters(mangaId: string): Promise<Chapter[]> {
    if (!mangaId.includes("-")) {
      // Legacy Id
      console.log("OLD ID: PLEASE MIGRATE")
      throw new Error("OLD ID: PLEASE MIGRATE")
    }
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
          .addPathComponent("manga")
          .addPathComponent(mangaId)
          .addPathComponent("feed")
          .addQueryParameter("limit", 500)
          .addQueryParameter("offset", offset)
          .addQueryParameter("includes", ["scanlation_group"])
          .addQueryParameter("translatedLanguage", languages)
          .addQueryParameter("order", {
            volume: "desc",
            chapter: "desc",
            publishAt: "desc",
          })
          .addQueryParameter("contentRating", ratings)
          .addQueryParameter("includeFutureUpdates", "0")
          .buildUrl(),
        method: "GET",
      })
      const response = await this.requestManager.schedule(request, 1)
      const json = typeof response.data === "string" ? JSON.parse(response.data) : response.data
      offset += 500
      if (json.data === undefined) throw new Error(`Failed to parse json results for ${mangaId}`)
      for (const chapter of json.data) {
        const chapterId = chapter.id
        const chapterDetails = chapter.attributes
        const name = this.decodeHTMLEntity(chapterDetails.title)
        const chapNum = Number(chapterDetails?.chapter)
        const volume = Number(chapterDetails?.volume)
        const langCode: any = MDLanguages.getPBCode(chapterDetails.translatedLanguage)
        const time = new Date(chapterDetails.publishAt)
        const group = chapter.relationships
          .filter((x: any) => x.type == "scanlation_group")
          .map((x: any) => x.attributes.name)
          .join(", ")
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
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              sortingIndex,
            }),
          )
          collectedChapters.add(identifier)
          sortingIndex--
        }
      }
      if (json.total <= offset) {
        hasResults = false
      }
    }
    return chapters
  }

  async getChapterDetails(mangaId: string, chapterId: string): Promise<ChapterDetails> {
    if (!chapterId.includes("-")) {
      // Numeric ID
      console.log("OLD ID: PLEASE MIGRATE")
      throw new Error("OLD ID: PLEASE REFRESH AND CLEAR ORPHANED CHAPTERS")
    }
    const dataSaver = await getDataSaver(this.stateManager)
    const request = App.createRequest({
      url: `${this.MANGADEX_API}/at-home/server/${chapterId}`,
      method: "GET",
    })
    const response = await this.requestManager.schedule(request, 1)
    const json = typeof response.data === "string" ? JSON.parse(response.data) : response.data
    const serverUrl = json.baseUrl
    const chapterDetails = json.chapter
    let pages: string[]
    if (dataSaver) {
      pages = chapterDetails.dataSaver.map((x: string) => `${serverUrl}/data-saver/${chapterDetails.hash}/${x}`)
    } else {
      pages = chapterDetails.data.map((x: string) => `${serverUrl}/data/${chapterDetails.hash}/${x}`)
    }
    // The chapter is being read, add the mangaId to the recommendation list
    addRecommendedId(this.stateManager, mangaId)
    return App.createChapterDetails({
      id: chapterId,
      mangaId: mangaId,
      pages,
    })
  }

  async getSearchResults(query: SearchRequest, metadata: requestMetadata): Promise<PagedResults> {
    const ratings: string[] = await getRatings(this.stateManager)
    const offset: number = metadata?.offset ?? 0
    let results: PartialSourceManga[] = []
    const searchType = query.title?.match(/[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i)
      ? "ids[]"
      : "title"
    const url = new URLBuilder(this.MANGADEX_API)
      .addPathComponent("manga")
      // Since we already know that a title must exist, we can ignore this.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      .addQueryParameter(searchType, (query.title?.length ?? 0) > 0 ? encodeURIComponent(query.title!) : undefined)
      .addQueryParameter("limit", 100)
      .addQueryParameter("offset", offset)
      .addQueryParameter("contentRating", ratings)
      .addQueryParameter("includes", ["cover_art"])
      .addQueryParameter(
        "includedTags",
        query.includedTags?.map((x) => x.id),
      )
      .addQueryParameter("includedTagsMode", query.includeOperator)
      .addQueryParameter(
        "excludedTags",
        query.excludedTags?.map((x) => x.id),
      )
      .addQueryParameter("excludedTagsMode", query.excludeOperator)
      .buildUrl()
    const request = App.createRequest({
      url: url,
      method: "GET",
    })
    const response = await this.requestManager.schedule(request, 1)
    if (response.status != 200) {
      return App.createPagedResults({ results })
    }
    const json = typeof response.data === "string" ? JSON.parse(response.data) : response.data
    if (json.data === undefined) {
      throw new Error("Failed to parse json for the given search")
    }
    results = await parseMangaList(json.data, this, getSearchThumbnail)
    return App.createPagedResults({
      results,
      metadata: { offset: offset + 100 },
    })
  }

  async getHomePageSections(
    // eslint-disable-next-line no-unused-vars
    sectionCallback: (section: HomeSection) => void,
  ): Promise<void> {
    const ratings: string[] = await getRatings(this.stateManager)
    const languages: string[] = await getLanguages(this.stateManager)
    const promises: Promise<void>[] = []

    // On the homepage we only show sections enabled in source settings:
    // enabled_homepage_sections and recommended titles sections
    const enabled_homepage_sections = await getEnabledHomePageSections(this.stateManager)
    const sections = [
      {
        request: App.createRequest({
          url: await this.getCustomListRequestURL("ff210dec-862b-4c17-8608-0e7f97c70488", ratings),
          method: "GET",
        }),
        section: App.createHomeSection({
          id: "seasonal",
          title: "Seasonal",
          containsMoreItems: false,
          type: HomeSectionType.featured,
        }),
      },
      {
        request: App.createRequest({
          url: new URLBuilder(this.MANGADEX_API)
            .addPathComponent("manga")
            .addQueryParameter("limit", 20)
            .addQueryParameter("order", { followedCount: "desc" })
            .addQueryParameter("contentRating", ratings)
            .addQueryParameter("includes", ["cover_art"])
            .buildUrl(),
          method: "GET",
        }),
        section: App.createHomeSection({
          id: "popular",
          title: "Popular",
          containsMoreItems: true,
          type: "singleRowNormal",
        }),
      },
      {
        request: App.createRequest({
          url: new URLBuilder(this.MANGADEX_API)
            .addPathComponent("chapter")
            .addQueryParameter("limit", 100)
            .addQueryParameter("order", { publishAt: "desc" })
            .addQueryParameter("translatedLanguage", languages)
            .addQueryParameter("includes", ["manga"])
            .addQueryParameter("includeFutureUpdates", "0")
            .buildUrl(),
          method: "GET",
        }),
        section: App.createHomeSection({
          id: "latest_updates",
          title: "Latest Updates",
          containsMoreItems: true,
          type: "singleRowNormal",
        }),
      },
    ]
    for (const section of sections) {
      // We only add the section if it is requested by the user in settings
      if (enabled_homepage_sections.includes(section.section.id)) {
        // Let the app load empty sections
        sectionCallback(section.section)
        // Get the section data
        promises.push(
          this.requestManager.schedule(section.request, 1).then(async (response) => {
            const json = typeof response.data === "string" ? JSON.parse(response.data) : response.data
            if (json.data === undefined)
              throw new Error(`Failed to parse json results for section ${section.section.title}`)
            switch (section.section.id) {
              case "latest_updates": {
                const coversMapping = await this.getCoversMapping(
                  json.data.map((x: any) => {
                    return x.relationships.filter((x: any) => x.type == "manga").map((x: any) => x.id)[0]
                  }),
                  ratings,
                )
                section.section.items = await parseChapterList(
                  json.data,
                  coversMapping,
                  this,
                  getHomepageThumbnail,
                  ratings,
                )
                break
              }
              default:
                section.section.items = await parseMangaList(json.data, this, getHomepageThumbnail)
            }
            sectionCallback(section.section)
          }),
        )
      }
    }
    // If the user want to see recommendations on the homepage, we process them
    if (await getEnabledRecommendations(this.stateManager)) {
      const recommendedIds = await getRecommendedIds(this.stateManager)
      for (const recommendedId of recommendedIds) {
        // First we fetch similar titles
        const similarRequest = App.createRequest({
          url: `${RECOMMENDATION_URL}/similar/${recommendedId}.json`,
          method: "GET",
        })
        promises.push(
          this.requestManager.schedule(similarRequest, 1).then(async (similarResponse) => {
            // We should only process if the response is valid
            // We won't throw an error but silently pass as an error can occurre with
            // titles unsupported by SimilarManga (new titles for example)
            if (similarResponse.status !== 200) {
              console.log(
                `Could not fetch similar titles for id: ${recommendedId}, request failed with status ${similarResponse.status}`,
              )
            } else {
              const similarJson =
                typeof similarResponse.data === "string" ? JSON.parse(similarResponse.data) : similarResponse.data
              // We should only process if the result is valid
              // We won't throw an error but silently pass as an error can occurre with
              // titles unsupported by SimilarManga (new titles for example)
              if (similarJson.id === undefined) {
                console.log("Could not fetch similar titles for id: " + recommendedId + ", json is invalid")
              } else {
                // We know the title of the recommended manga, we can thus create the homepage section
                const section = App.createHomeSection({
                  id: recommendedId,
                  // Can titles be html encoded?
                  title: "More like " + this.decodeHTMLEntity(similarJson.title.en),
                  containsMoreItems: false,
                  type: "singleRowNormal",
                })
                // Let the app load empty sections
                sectionCallback(section)
                // Generate the MangaTiles list, sorted by decreasing similarity
                const results = []
                // We first add the title used for the recommendation
                let image: string
                if (similarJson.coverFileName === "unknown") {
                  image = "https://mangadex.org/_nuxt/img/cover-placeholder.d12c3c5.jpg"
                } else {
                  image = `${COVER_BASE_URL}/${recommendedId}/${similarJson.coverFileName}${MDImageQuality.getEnding(
                    await getMangaThumbnail(this.stateManager),
                  )}`
                }
                results.push(
                  App.createPartialSourceManga({
                    title: this.decodeHTMLEntity(similarJson.title.en) ?? "No Title",
                    image,
                    mangaId: recommendedId,
                    subtitle: undefined,
                  }),
                )
                // We then add similar titles, ordered by decreasing similarity
                for (const manga of similarJson.matches) {
                  // We should only add the title if its rating is enabled
                  if (ratings.includes(manga.contentRating)) {
                    // The similar api contains the coverFileName or 'unknown'
                    let image: string
                    if (manga.coverFileName === "unknown") {
                      image = "https://mangadex.org/_nuxt/img/cover-placeholder.d12c3c5.jpg"
                    } else {
                      image = `${COVER_BASE_URL}/${manga.id}/${manga.coverFileName}${MDImageQuality.getEnding(
                        await getMangaThumbnail(this.stateManager),
                      )}`
                    }
                    results.push(
                      App.createPartialSourceManga({
                        title: this.decodeHTMLEntity(manga.title.en) ?? "No Title",
                        image,
                        mangaId: manga.id,
                        subtitle: `Similarity ${manga.score.toFixed(2)}`,
                      }),
                    )
                  }
                }
                section.items = results
                sectionCallback(section)
              }
            }
          }),
        )
      }
    }
    // Make sure the function completes
    await Promise.all(promises)
  }

  async getViewMoreItems(homepageSectionId: string, metadata: requestMetadata): Promise<PagedResults> {
    const offset: number = metadata?.offset ?? 0
    const collectedIds: string[] = metadata?.collectedIds ?? []
    let results: PartialSourceManga[] = []
    const ratings: string[] = await getRatings(this.stateManager)
    const languages: string[] = await getLanguages(this.stateManager)
    let url = ""
    switch (homepageSectionId) {
      case "popular": {
        url = new URLBuilder(this.MANGADEX_API)
          .addPathComponent("manga")
          .addQueryParameter("limit", 100)
          .addQueryParameter("order", { followedCount: "desc" })
          .addQueryParameter("offset", offset)
          .addQueryParameter("contentRating", ratings)
          .addQueryParameter("includes", ["cover_art"])
          .buildUrl()
        break
      }
      case "latest_updates": {
        url = new URLBuilder(this.MANGADEX_API)
          .addPathComponent("chapter")
          .addQueryParameter("limit", 100)
          .addQueryParameter("offset", offset)
          .addQueryParameter("order", { publishAt: "desc" })
          .addQueryParameter("translatedLanguage", languages)
          .addQueryParameter("includes", ["manga"])
          .addQueryParameter("includeFutureUpdates", "0")
          .buildUrl()
        break
      }
    }
    const request = App.createRequest({
      url,
      method: "GET",
    })
    const response = await this.requestManager.schedule(request, 1)
    const json = typeof response.data === "string" ? JSON.parse(response.data) : response.data
    if (json.data === undefined) throw new Error("Failed to parse json results for getViewMoreItems")
    switch (homepageSectionId) {
      case "latest_updates": {
        const coversMapping = await this.getCoversMapping(
          json.data.map((x: any) => x.relationships.filter((x: any) => x.type == "manga").map((x: any) => x.id)[0]),
          ratings,
        )
        results = await parseChapterList(json.data, coversMapping, this, getHomepageThumbnail, ratings)
        break
      }
      default:
        results = await parseMangaList(json.data, this, getHomepageThumbnail)
    }
    return App.createPagedResults({
      results,
      metadata: { offset: offset + 100, collectedIds },
    })
  }

  decodeHTMLEntity(str: string | undefined): string | undefined {
    if (str == undefined) return undefined
    return entities.decodeHTML(str)
  }
}
