import { 
    PartialSourceManga, 
    SearchRequest 
} from '@paperback/types'
import { MDImageQuality } from './MangaDexHelper'
import { MangaItem } from './MangaDexInterfaces'


export const parseMangaList = async (
    object: MangaItem[],
    source: any,
    thumbnailSelector: any,
    query: SearchRequest
): Promise<PartialSourceManga[]> => {
    // Array to hold manga along with their relevance scores
    const results: { manga: PartialSourceManga; relevance: number }[] = []

    for (const manga of object) {
        const mangaId = manga.id ?? ''
        const mangaDetails = manga.attributes ?? {}

        // Get the title from the manga attributes
        const title = source.decodeHTMLEntity(
            mangaDetails.title?.en ??
            (mangaDetails.altTitles ?? [])
                .map(x => Object.values(x ?? {}).find((v) => v !== undefined))
                .find((t) => t !== undefined)
        ) || 'Unknown Title'

        // Get the cover image filename
        const coverFileName = (manga.relationships ?? [])
            .filter((x) => x.type == 'cover_art')
            .map((x) => x.attributes?.fileName)[0]

        // Construct the cover image URL
        const image = coverFileName
            ? `${source.COVER_BASE_URL}/${mangaId}/${coverFileName}${MDImageQuality.getEnding(await thumbnailSelector(source.stateManager))}`
            : 'https://mangadex.org/_nuxt/img/cover-placeholder.d12c3c5.jpg'

        // Create the subtitle
        const subtitle = `${
            mangaDetails.lastVolume ? `Vol. ${mangaDetails.lastVolume}` : ''
        } ${mangaDetails.lastChapter ? `Ch. ${mangaDetails.lastChapter}` : ''}`

        // Create the PartialSourceManga object
        const partialManga = App.createPartialSourceManga({
            mangaId: mangaId,
            title: title,
            image: image,
            subtitle: subtitle
        })

        // Initialize relevance score
        let relevance = 0

        // Compute relevance if query.title is defined
        if (query?.title) {
            relevance = computeRelevance(title, query.title)
        }

        // Add the manga and its relevance score to the results array
        results.push({
            manga: partialManga,
            relevance: relevance
        })
    }

    // Sort the results based on relevance score in descending order
    results.sort((a, b) => b.relevance - a.relevance)

    // Return the sorted list of PartialSourceManga
    return results.map((r) => r.manga)
}

// Memoized Levenshtein distance function
const levenshteinDistanceMemo = (() => {
    const cache: { [key: string]: number } = {}
    return (a: string, b: string): number => {
        const key = `${a}|${b}`
        if (key in cache) {
            return cache[key]
        }

        const an = a.length
        const bn = b.length

        if (an === 0) return bn
        if (bn === 0) return an

        const matrix: number[][] = []

        // Initialize the first row and column
        for (let i = 0; i <= bn; i++) {
            matrix[i] = [i]
        }
        for (let j = 0; j <= an; j++) {
            matrix[0][j] = j
        }

        // Compute the distance
        for (let i = 1; i <= bn; i++) {
            for (let j = 1; j <= an; j++) {
                if (b.charAt(i - 1) === a.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1]
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1, // substitution
                        matrix[i][j - 1] + 1,     // insertion
                        matrix[i - 1][j] + 1      // deletion
                    )
                }
            }
        }

        const distance = matrix[bn][an]
        cache[key] = distance
        return distance
    }
})()

// Compute the relevance score using normalized Levenshtein distance
function computeRelevance(title: string, queryTitle: string): number {
    const titleLC = title.toLowerCase()
    const queryLC = queryTitle.toLowerCase()

    // If the title is exactly the same as the query, assign highest relevance
    if (titleLC === queryLC) {
        return 100
    }

    const distance = levenshteinDistanceMemo(titleLC, queryLC)
    const maxLen = Math.max(titleLC.length, queryLC.length)

    // Compute similarity percentage
    const similarity = ((maxLen - distance) / maxLen) * 100

    return similarity
}