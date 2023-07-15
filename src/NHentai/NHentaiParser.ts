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
    ImagePageObject,
    QueryResponse,
    TagObject
} from './NHentaiInterfaces'

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
            titles: Object.values(data.title).filter(title => title !== null),
            artist: artist,
            author: artist,
            image: `https://t.nhentai.net/galleries/${data.media_id}/cover.${typeOfImage(data.images.cover)}`,
            status: 'Completed',
            tags: [App.createTagSection({ id: 'tags', label: 'Tags', tags: tags })],
            desc: `Pages: ${data.num_pages}`
        })
    })
}

export const parseChapters = (data: Gallery, mangaId: string): Chapter => {
    return App.createChapter({
        id: mangaId,
        chapNum: 1,
        name: data.title.english,
        langCode: NHLanguages.getLangCode(getLanguage(data)),
        time: new Date(data.upload_date * 1000)
    })
}

export const parseChapterDetails = (data: Gallery, mangaId: string): ChapterDetails => {
    return App.createChapterDetails({
        id: mangaId,
        mangaId: mangaId,
        pages: data.images.pages.map((image, i) => {
            const type = typeOfImage(image)
            return `https://i.nhentai.net/galleries/${data.media_id}/${i + 1}.${type}`
        })
    })
}

export const parseSearch = (data: QueryResponse): PartialSourceManga[] => {
    const tiles: PartialSourceManga[] = []
    const collectedIds: string[] = []

    if (!data?.result) {
        console.log(JSON.stringify(data))
        throw new Error('JSON NO RESULT ERROR!\n\nYou\'ve like set too many additional arguments in this source\'s settings, remove some to see results!\nSo search with tags you need to use arguments like shown in the sourc\'s settings!')
    }

    for (const gallery of data.result) {

        if (collectedIds.includes(gallery.id.toString())) continue
        tiles.push(App.createPartialSourceManga({
            image: `https://t.nhentai.net/galleries/${gallery.media_id}/cover.${typeOfImage(gallery.images.cover)}`,
            title: gallery.title.pretty,
            mangaId: gallery.id.toString(),
            subtitle: NHLanguages.getName(getLanguage(gallery))
        }))
        collectedIds.push(gallery.id.toString())
    }
    return tiles
}

// Utility
function capitalizeTags(str: string) {
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ')
}

const typeMap: { [key: string]: string; } = { 'j': 'jpg', 'p': 'png', 'g': 'gif' }

const typeOfImage = (image: ImagePageObject): string => {
    return typeMap[image.t] ?? ''
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