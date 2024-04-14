import { Tag } from '@paperback/types'
import { decodeHTMLEntity } from './Hentai2ReadHelper'

export let categories: Tag[] = []
export let tags: Tag[] = []

// the doijin tags weren't set up here since it's long and caused the search page to crash the entire app on iphone

export const getTagId = async ($: CheerioStatic, label: string): Promise<string | null> => {

    await populateTags($)

    const category = categories.find(tag => tag.label === label)
    if (category) {
        return category.id
    }
    const tag = tags.find(tagVar => tagVar.label === label)
    if (tag) {
        return tag.id
    }
    return null
}

const getTags = async ($: CheerioStatic, tagSelector: string): Promise<Tag[]> => {
    const tags: Tag[] = []
    for (const tagElement of $('div.col-xs-4.col-sm-3.tag-blocks', tagSelector).toArray()) {
        const label = $('a > div', tagElement).text().trim()
        const id = $('input', tagElement).first().attr('value')?.trim()

        tags.push(
            App.createTag(
                {
                    id: id ?? '',
                    label: decodeHTMLEntity(label)
                }
            )
        )
    }
    return tags
}

export const populateTags = async ($: CheerioStatic) => {
    if (categories.length != 0 && tags.length != 0) {
        return
    }
    categories = await getTags($, '#tab-category')
    tags = await getTags($, '#tab-tag')
}