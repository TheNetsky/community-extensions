import {
    Chapter,
    ChapterDetails,
    PagedResults,
    PartialSourceManga,
    SearchField,
    Tag,
    TagSection
} from '@paperback/types'
import {
    decodeHTMLEntity,
    isLastPage,
    parseDate
} from './Hentai2ReadHelper'
import {
    categories,
    getTagId,
    tags,
    populateTags
} from './Hentai2ReadTags'

export let nextSearchPageUrl = ''


export const parseMangaDetails = async ($: CheerioStatic, mangaId: string) => {

    const mangaDetails = $('ul.list-simple-mini')
    const titles = [decodeHTMLEntity($('.block-header.bg-black.bh-xs > h3.block-title > a').first().text().trim())]
    const image = $('#js-linkNext > picture > img').attr('src') ?? ''
    const status = $('li:contains(Status) > a', mangaDetails).text().trim()
    const author = $('li:contains(Author) > a', mangaDetails).text().trim()
    const artist = $('li:contains(Artist) > a', mangaDetails).text().trim()
    const description = $('li:contains(Storyline) > p', mangaDetails).text().trim()

    const arrayTags: Tag[] = []
    for (const tag of $('div.col-xs-12.col-sm-7 > ul > li:nth-child(n+11):nth-child(-n+12) > a').toArray()) {
        const label = $(tag).text().trim()
        const id = await getTagId($, label)
        if (!id || !label) continue
        arrayTags.push({ id: id, label: label })
    }

    const tagSections: TagSection[] = [App.createTagSection({ id: '0', label: 'content', tags: arrayTags.map(x => App.createTag(x)) })]
    return App.createSourceManga({
        id: mangaId,
        mangaInfo: App.createMangaInfo({
            titles: titles,
            image: image,
            status: status,
            author: author,
            artist: artist,
            tags: tagSections,
            desc: description
        })
    })
}

export const parseChapters = ($: CheerioStatic, mangaId: string): Chapter[] => {

    const chapters: Chapter[] = []
    for (const chapter of $('ul.nav-chapters > li > div.media > a').toArray()) {

        const chapterId = $(chapter).attr('href')?.replace('https://hentai2read.com/', '')?.trim() ?? ''
        const titleRaw = $(chapter).text().trim()
        const title = titleRaw.substring(0, titleRaw.indexOf('uploaded')).trim()
        const language = $('div.col-xs-12.col-md-8 > div.block-content.row.bg-white.bc-xs > div.col-xs-12.col-sm-7 > ul > li:nth-child(14) > a').text().trim()
        let langCode = ''
        if (language == 'English') {
            langCode = '🇬🇧'
        }

        const parts = chapterId.split('/')
        const chapNum = Number(parts[parts.length - 2])

        const regex = /about (.*?) ago/g
        const match = regex.exec(titleRaw.substring(titleRaw.indexOf('uploaded')).trim())
        let dateString = ''
        if (match && match.length > 1) {
            dateString = match[1]?.trim() ?? ''
        }

        const date = parseDate(dateString)
        chapters.push(
            App.createChapter({
                id: chapterId,
                chapNum: chapNum,
                name: decodeHTMLEntity(title),
                time: date,
                langCode: langCode
            })
        )

    }
    return chapters
}

export const parseChapterDetails = ($: CheerioStatic, mangaId: string, chapterId: string): ChapterDetails => {
    const regex = /'images' : \[(.*?)\]/
    let imageUrls: string[] = []
    const match = regex.exec($.html())
    if (match && match[1]) {

        const imagesList = match[1].replace(/\\/g, '')

        imageUrls = JSON.parse('[' + imagesList + ']') as string[]

        imageUrls = imageUrls.map((imageUrl: string) => 'https://static.hentaicdn.com/hentai/' + imageUrl)
    }

    return App.createChapterDetails(
        {
            id: chapterId,
            mangaId: mangaId,
            pages: imageUrls
        }
    )
}

export const parseHomePageSectionMangas = ($: CheerioStatic): PartialSourceManga[] => {

    const section_Array: PartialSourceManga[] = []
    for (const manga of $('.col-xs-6.col-sm-4.col-md-3.col-xl-2', '.row.book-grid').toArray()) {
        const image = $('div > div > picture > img', manga).attr('src') ?? ''
        const title = $('div > div > a.title > span', manga).text().trim() ?? ''
        const id = $('div > div > a.title', manga).attr('href')?.replace('https://hentai2read.com/', '')?.replace('/', '')?.trim() ?? ''

        if (!id || !title) continue
        section_Array.push(App.createPartialSourceManga({
            image: image,
            title: decodeHTMLEntity(title),
            mangaId: id
        }))
    }

    return section_Array
}

export const parseSearchFields = (): SearchField[] => {
    const searchFields: SearchField[] = [
        App.createSearchField({ id: 'artist', name: 'Artist', placeholder: 'Konomi' }),
        App.createSearchField({ id: 'character', name: 'Character', placeholder: 'Tifa' }),
        App.createSearchField({ id: 'release-year', name: 'Release Year', placeholder: '2010' })
    ]
    return searchFields
}

export const parseSearchResults = ($: CheerioStatic, metadata: any): PagedResults => {
    const page: number = metadata?.page ?? 1
    const mangas: PartialSourceManga[] = []
    for (const manga of $('.col-xs-6.col-sm-4.col-md-3.col-xl-2', '.row.book-grid').toArray()) {
        const image = $('div > div > picture > img', manga).attr('src') ?? ''
        const title = $('div > div > a.title > span', manga).text().trim() ?? ''
        const id = $('div > div > a.title', manga).attr('href')?.replace('https://hentai2read.com/', '')?.replace('/', '')?.trim() ?? ''

        if (!id || !title) continue
        mangas.push(App.createPartialSourceManga({
            image: image,
            title: decodeHTMLEntity(title),
            mangaId: id
        }))
    }

    nextSearchPageUrl = $('#js-linkNext').attr('href') ?? ''

    metadata = !isLastPage($) ? { page: page + 1 } : undefined
    return App.createPagedResults({
        results: mangas,
        metadata
    })
}

export const parseSearchTags = async ($: CheerioStatic): Promise<TagSection[]> => {

    await populateTags($)

    return [App.createTagSection({
        id: 'tab-category',
        label: 'CATEGORY',
        tags: categories
    }
    ), App.createTagSection({
        id: 'tab-tag',
        label: 'TAGS',
        tags: tags
    }
    )]
}

export const parseViewMoreItems = ($: CheerioStatic, metadata: any): PagedResults => {
    const page: number = metadata?.page ?? 1
    const mangas: PartialSourceManga[] = []

    for (const manga of $('.col-xs-6.col-sm-4.col-md-3.col-xl-2', '.row.book-grid').toArray()) {
        const image = $('div > div > picture > img', manga).attr('src') ?? ''
        const title = $('div > div > a.title > span', manga).text().trim() ?? ''
        const id = $('div > div > a.title', manga).attr('href')?.replace('https://hentai2read.com/', '')?.replace('/', '')?.trim() ?? ''

        if (!id || !title) continue
        mangas.push(App.createPartialSourceManga({
            image: image,
            title: decodeHTMLEntity(title),
            mangaId: id
        }))


    }
    metadata = !isLastPage($) ? { page: page + 1 } : undefined
    return App.createPagedResults({
        results: mangas,
        metadata
    })
}