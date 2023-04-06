import { PartialSourceManga } from '@paperback/types'
import { MDImageQuality } from './MangaDexHelper'
export const parseMangaList = async (
  object: any,
  source: any,
  thumbnailSelector: any,
): Promise<PartialSourceManga[]> => {
  const results: PartialSourceManga[] = []
  for (const manga of object) {
    const mangaId = manga.id
    const mangaDetails = manga.attributes
    const title = source.decodeHTMLEntity(
      Object.values(mangaDetails.title)[0] as string,
    )
    const coverFileName = manga.relationships
      .filter((x: any) => x.type == 'cover_art')
      .map((x: any) => x.attributes?.fileName)[0]
    const image = coverFileName
      ? `${
          source.COVER_BASE_URL
        }/${mangaId}/${coverFileName}${MDImageQuality.getEnding(
          await thumbnailSelector(source.stateManager),
        )}`
      : 'https://mangadex.org/_nuxt/img/cover-placeholder.d12c3c5.jpg'
    results.push(
      App.createPartialSourceManga({
        title: title,
        image,
        mangaId: mangaId,
        subtitle: undefined,
      }),
    )
  }
  return results
}
export const parseChapterList = async (
  chapterObject: any,
  coversMapping: {
    [id: string]: string
  },
  source: any,
  thumbnailSelector: any,
  ratings: string[],
): Promise<PartialSourceManga[]> => {
  const results: PartialSourceManga[] = []
  for (const chapter of chapterObject) {
    const mangaId = chapter.relationships
      .filter((x: any) => x.type == 'manga')
      .map((x: any) => x.id)[0]
    const title = chapter.relationships
      .filter((x: any) => x.type == 'manga')
      .map((x: any) => x.attributes.title.en)[0]
    const volume_num = chapter.attributes.volume
    const chapter_num = chapter.attributes.chapter
    const subtitle = `${volume_num ? `Vol. ${volume_num}` : ''} ${
      chapter_num ? `Ch. ${chapter_num}` : ''
    }`
    const coverFileName = coversMapping[mangaId]
    const image = coverFileName
      ? `${
          source.COVER_BASE_URL
        }/${mangaId}/${coverFileName}${MDImageQuality.getEnding(
          await thumbnailSelector(source.stateManager),
        )}`
      : 'https://mangadex.org/_nuxt/img/cover-placeholder.d12c3c5.jpg'
    if (
      !mangaId ||
      !title ||
      !ratings.includes(
        chapter.relationships
          .filter((x: any) => x.type == 'manga')
          .map((x: any) => x.attributes.contentRating)[0],
      )
    )
      continue
    results.push(
      App.createPartialSourceManga({
        title: title,
        image: image,
        mangaId: mangaId,
        subtitle: subtitle,
      }),
    )
  }
  return results
}
