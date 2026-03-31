import {
    SourceManga,
    ChapterDetails,
    PartialSourceManga,
    Tag,
    Chapter
} from '@paperback/types'

import { NHLanguages } from './NHentaiHelper'

import {
    Gallery,
    GalleryListItem,
    ImagePageObject,
    QueryResponse,
    TagObject
} from './NHentaiInterfaces'

const IMAGE_SERVER = 'https://i4.nhentai.net'
const THUMB_SERVER = 'https://t3.nhentai.net'

export const parseMangaDetails = (data: Gallery): SourceManga => {
    const artist = getArtist(data)

    const tags: Tag[] = []
    for (const tag of data.tags) {
        if (tag.type !== 'tag') continue

        tags.push(App.createTag({ id: tag.name, label: capitalizeTags(tag.name) }))
    }

    return App.createSourceManga({
        id: data.id.toString(),
        mangaInfo: App.createMangaInfo({
            titles: Object.values(data.title).filter((title): title is string => title !== null && title !== ''),
            artist: artist,
            author: artist,
            image: getCoverImage(data),
            status: 'Completed',
            tags: [App.createTagSection({ id: 'tags', label: 'Tags', tags: tags })],
            desc: `Pages: ${data.num_pages} | Favorites: ${data.num_favorites}`
        })
    })
}

export const parseChapters = (data: Gallery, mangaId: string): Chapter => {
    return App.createChapter({
        id: mangaId,
        chapNum: 1,
        name: data.title.pretty || data.title.english,
        langCode: NHLanguages.getLangCode(getLanguage(data)),
        time: new Date(data.upload_date * 1000)
    })
}

export const parseChapterDetails = (data: Gallery, mangaId: string): ChapterDetails => {
    return App.createChapterDetails({
        id: mangaId,
        mangaId: mangaId,
        pages: getPages(data)
    })
}

export const parseSearch = (data: QueryResponse): PartialSourceManga[] => {
    const tiles: PartialSourceManga[] = []
    const collectedIds: string[] = []

    if ((data as any)?.error) {
        const errorMessage = (data as any).error
        if (typeof errorMessage == 'string' && errorMessage.toLowerCase().includes('rate limit')) {
            throw new Error('RATE LIMIT ERROR!\n\nnhentai API rate limit exceeded. Please wait about 1 minute and try again.')
        }

        throw new Error(`NHENTAI API ERROR!\n\n${errorMessage}`)
    }

    if (!data?.result) {
        console.log(JSON.stringify(data))
        throw new Error('JSON NO RESULT ERROR!\n\nThe API returned an unexpected response. Please try again in a moment.')
    }

    for (const gallery of data.result) {
        const mangaId = gallery.id.toString()
        if (collectedIds.includes(mangaId)) continue

        tiles.push(App.createPartialSourceManga({
            image: getSearchImage(gallery),
            title: getSearchTitle(gallery),
            mangaId: mangaId,
            subtitle: getSearchSubtitle(gallery)
        }))
        collectedIds.push(mangaId)
    }
    return tiles
}

// Utility
function capitalizeTags(str: string) {
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ')
}

const typeMap: { [key: string]: string; } = { 'j': 'jpg', 'p': 'png', 'g': 'gif', 'w': 'webp'}

const typeOfImage = (image: ImagePageObject): string => {
    return typeMap[image.t] ?? ''
}

const normalizePath = (path: string): string => {
    return path.replace(/^\/+/, '')
}

const withBase = (base: string, path: string): string => {
    return `${base}/${normalizePath(path)}`
}

const isGalleryListItem = (gallery: Gallery | GalleryListItem): gallery is GalleryListItem => {
    return 'english_title' in gallery
}

const getCoverImage = (gallery: Gallery): string => {
    if (gallery.cover?.path) {
        return withBase(THUMB_SERVER, gallery.cover.path)
    }

    if (gallery.images?.cover) {
        return `${THUMB_SERVER}/galleries/${gallery.media_id}/cover.${typeOfImage(gallery.images.cover)}`
    }

    return ''
}

const getPages = (gallery: Gallery): string[] => {
    if (gallery.pages?.length) {
        return gallery.pages.map(page => withBase(IMAGE_SERVER, page.path))
    }

    if (gallery.images?.pages?.length) {
        return gallery.images.pages.map((image, i) => {
            const type = typeOfImage(image)
            return `${IMAGE_SERVER}/galleries/${gallery.media_id}/${i + 1}.${type}`
        })
    }

    return []
}

const getSearchImage = (gallery: Gallery | GalleryListItem): string => {
    if (isGalleryListItem(gallery)) {
        return withBase(THUMB_SERVER, gallery.thumbnail)
    }

    return getCoverImage(gallery)
}

const getSearchTitle = (gallery: Gallery | GalleryListItem): string => {
    if (isGalleryListItem(gallery)) {
        return gallery.english_title || gallery.japanese_title || `Gallery ${gallery.id}`
    }

    return gallery.title.pretty || gallery.title.english || `Gallery ${gallery.id}`
}

const getSearchSubtitle = (gallery: Gallery | GalleryListItem): string => {
    if (isGalleryListItem(gallery)) {
        return ''
    }

    return `${NHLanguages.getName(getLanguage(gallery)).substring(0, 3)} | Pgs: ${gallery.num_pages}`
}

const getArtist = (gallery: Gallery): string => {
    const tags: TagObject[] = gallery.tags
    for (const tag of tags) {
        if (tag.type === 'artist') {
            return tag.name
        }
    }
    return ''
}

const getLanguage = (gallery: Gallery): string => {
    const tags: TagObject[] = gallery.tags
    for (const tag of tags) {
        if (tag.type === 'language' && tag.name !== 'translated') {
            return tag.name
        }
    }
    return ''
}
