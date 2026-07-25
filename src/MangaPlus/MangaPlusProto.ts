import { Buffer } from 'buffer'

import {
    AllTitlesGroup,
    Chapter,
    ErrorResult,
    FeaturedContent,
    FeaturedTitlesViewV2,
    Language,
    MangaPage,
    MangaPlusPage,
    MangaPlusResponse,
    MangaViewer,
    Popup,
    SuccessResult,
    Title,
    TitleDetailView,
    TitleList,
    UpdatedTitle,
    UpdatedTitleGroup,
    WebHomeViewV4
} from './MangaPlusHelper'

class ProtoReader {
    private position = 0

    constructor(private readonly bytes: Uint8Array) {}

    get done(): boolean {
        return this.position >= this.bytes.length
    }

    readTag(): { fieldNumber: number; wireType: number } {
        const tag = this.readVarint()
        return {
            fieldNumber: Math.floor(tag / 8),
            wireType: tag % 8
        }
    }

    readVarint(): number {
        let value = 0
        let multiplier = 1

        for (let index = 0; index < 10; index++) {
            const byte = this.bytes[this.position++]
            if (byte === undefined) throw new Error('Unexpected end of protobuf varint')

            value += (byte & 0x7f) * multiplier
            if ((byte & 0x80) === 0) return value

            multiplier *= 128
        }

        throw new Error('Invalid protobuf varint')
    }

    readBytes(): Uint8Array {
        const length = this.readVarint()
        const end = this.position + length
        if (end > this.bytes.length) throw new Error('Unexpected end of protobuf message')

        const value = this.bytes.subarray(this.position, end)
        this.position = end
        return value
    }

    readString(): string {
        return Buffer.from(this.readBytes()).toString('utf8')
    }

    skip(wireType: number): void {
        switch (wireType) {
            case 0:
                this.readVarint()
                return
            case 1:
                this.position += 8
                break
            case 2:
                {
                    const length = this.readVarint()
                    this.position += length
                }
                break
            case 5:
                this.position += 4
                break
            default:
                throw new Error(`Unsupported protobuf wire type ${wireType} at byte ${this.position}`)
        }

        if (this.position > this.bytes.length) throw new Error('Unexpected end of protobuf field')
    }
}

function readNested<T>(reader: ProtoReader, decoder: (bytes: Uint8Array) => T, wireType: number): T | undefined {
    if (wireType !== 2) {
        reader.skip(wireType)
        return undefined
    }

    try {
        return decoder(reader.readBytes())
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error)
        throw new Error(`${decoder.name}: ${message}`)
    }
}

function languageFromCode(code: number): Language {
    switch (code) {
        case 1: return Language.SPANISH
        case 2: return Language.FRENCH
        case 3: return Language.INDONESIAN
        case 4: return Language.PORTUGUESE_BR
        case 5: return Language.RUSSIAN
        case 6: return Language.THAI
        case 7: return Language.GERMAN
        case 8: return Language.ITALIAN
        case 9: return Language.VIETNAMESE
        default: return Language.ENGLISH
    }
}

function decodePopup(bytes: Uint8Array, fallbackLanguage: Language): Popup {
    const reader = new ProtoReader(bytes)
    let subject = ''
    let body = ''
    let language = fallbackLanguage

    while (!reader.done) {
        const { fieldNumber, wireType } = reader.readTag()
        switch (fieldNumber) {
            case 1:
                subject = wireType === 2 ? reader.readString() : subject
                if (wireType !== 2) reader.skip(wireType)
                break
            case 2:
                body = wireType === 2 ? reader.readString() : body
                if (wireType !== 2) reader.skip(wireType)
                break
            case 6:
                language = wireType === 0 ? languageFromCode(reader.readVarint()) : language
                if (wireType !== 0) reader.skip(wireType)
                break
            default:
                reader.skip(wireType)
        }
    }

    return new Popup(subject, body, language)
}

function decodeError(bytes: Uint8Array): ErrorResult {
    const reader = new ProtoReader(bytes)
    const error = new ErrorResult()

    while (!reader.done) {
        const { fieldNumber, wireType } = reader.readTag()
        const fallbackLanguage = fieldNumber === 3 ? Language.SPANISH : Language.ENGLISH

        if (fieldNumber === 2 || fieldNumber === 3 || fieldNumber === 5) {
            const popup = readNested(reader, bytes => decodePopup(bytes, fallbackLanguage), wireType)
            if (popup) error.popups.push(popup)
        } else {
            reader.skip(wireType)
        }
    }

    return error
}

function decodeTitle(bytes: Uint8Array): Title {
    const reader = new ProtoReader(bytes)
    let titleId = 0
    let name = ''
    let author: string | undefined
    let portraitImageUrl = ''
    let landscapeImageUrl = ''
    let language = Language.ENGLISH

    while (!reader.done) {
        const { fieldNumber, wireType } = reader.readTag()
        switch (fieldNumber) {
            case 1:
                titleId = wireType === 0 ? reader.readVarint() : titleId
                if (wireType !== 0) reader.skip(wireType)
                break
            case 2:
                name = wireType === 2 ? reader.readString() : name
                if (wireType !== 2) reader.skip(wireType)
                break
            case 3:
                author = wireType === 2 ? reader.readString() : author
                if (wireType !== 2) reader.skip(wireType)
                break
            case 4:
                portraitImageUrl = wireType === 2 ? reader.readString() : portraitImageUrl
                if (wireType !== 2) reader.skip(wireType)
                break
            case 5:
                landscapeImageUrl = wireType === 2 ? reader.readString() : landscapeImageUrl
                if (wireType !== 2) reader.skip(wireType)
                break
            case 7:
                language = wireType === 0 ? languageFromCode(reader.readVarint()) : language
                if (wireType !== 0) reader.skip(wireType)
                break
            default:
                reader.skip(wireType)
        }
    }

    return new Title(titleId, name, portraitImageUrl, landscapeImageUrl, author, language)
}

function decodeChapter(bytes: Uint8Array): Chapter {
    const reader = new ProtoReader(bytes)
    let titleId = 0
    let chapterId = 0
    let name = ''
    let subTitle: string | undefined
    let startTimeStamp = 0
    let endTimeStamp = 0
    let isVerticalOnly = false

    while (!reader.done) {
        const { fieldNumber, wireType } = reader.readTag()
        switch (fieldNumber) {
            case 1:
                titleId = wireType === 0 ? reader.readVarint() : titleId
                if (wireType !== 0) reader.skip(wireType)
                break
            case 2:
                chapterId = wireType === 0 ? reader.readVarint() : chapterId
                if (wireType !== 0) reader.skip(wireType)
                break
            case 3:
                name = wireType === 2 ? reader.readString() : name
                if (wireType !== 2) reader.skip(wireType)
                break
            case 4:
                subTitle = wireType === 2 ? reader.readString() : subTitle
                if (wireType !== 2) reader.skip(wireType)
                break
            case 6:
                startTimeStamp = wireType === 0 ? reader.readVarint() : startTimeStamp
                if (wireType !== 0) reader.skip(wireType)
                break
            case 7:
                endTimeStamp = wireType === 0 ? reader.readVarint() : endTimeStamp
                if (wireType !== 0) reader.skip(wireType)
                break
            case 9:
                isVerticalOnly = wireType === 0 ? reader.readVarint() !== 0 : isVerticalOnly
                if (wireType !== 0) reader.skip(wireType)
                break
            default:
                reader.skip(wireType)
        }
    }

    const chapter = new Chapter(titleId, chapterId, name, startTimeStamp, endTimeStamp)
    chapter.subTitle = subTitle
    chapter.isVerticalOnly = isVerticalOnly
    return chapter
}

function decodeChapterGroup(bytes: Uint8Array): { first: Chapter[]; last: Chapter[] } {
    const reader = new ProtoReader(bytes)
    const first: Chapter[] = []
    const last: Chapter[] = []

    while (!reader.done) {
        const { fieldNumber, wireType } = reader.readTag()
        if (fieldNumber === 2 || fieldNumber === 4) {
            const chapter = readNested(reader, decodeChapter, wireType)
            if (chapter) (fieldNumber === 2 ? first : last).push(chapter)
        } else {
            reader.skip(wireType)
        }
    }

    return { first, last }
}

function decodeTagName(bytes: Uint8Array): string {
    const reader = new ProtoReader(bytes)
    let name = ''

    while (!reader.done) {
        const { fieldNumber, wireType } = reader.readTag()
        if (fieldNumber === 1 && wireType === 2) {
            name = reader.readString()
        } else {
            reader.skip(wireType)
        }
    }

    return name
}

function decodeTitleDetail(bytes: Uint8Array): TitleDetailView {
    const reader = new ProtoReader(bytes)
    const detail = new TitleDetailView()

    while (!reader.done) {
        const { fieldNumber, wireType } = reader.readTag()
        switch (fieldNumber) {
            case 1:
                detail.title = readNested(reader, decodeTitle, wireType) ?? detail.title
                break
            case 2:
                detail.titleImageUrl = wireType === 2 ? reader.readString() : detail.titleImageUrl
                if (wireType !== 2) reader.skip(wireType)
                break
            case 3:
                detail.overview = wireType === 2 ? reader.readString() : detail.overview
                if (wireType !== 2) reader.skip(wireType)
                break
            case 4:
                detail.backgroundImageUrl = wireType === 2 ? reader.readString() : detail.backgroundImageUrl
                if (wireType !== 2) reader.skip(wireType)
                break
            case 5:
                detail.nextTimeStamp = wireType === 0 ? reader.readVarint() : detail.nextTimeStamp
                if (wireType !== 0) reader.skip(wireType)
                break
            case 7:
                detail.viewingPeriodDescription = wireType === 2 ? reader.readString() : detail.viewingPeriodDescription
                if (wireType !== 2) reader.skip(wireType)
                break
            case 8:
                detail.nonAppearanceInfo = wireType === 2 ? reader.readString() : detail.nonAppearanceInfo
                if (wireType !== 2) reader.skip(wireType)
                break
            case 14:
                detail.isSimulReleased = wireType === 0 ? reader.readVarint() !== 0 : detail.isSimulReleased
                if (wireType !== 0) reader.skip(wireType)
                break
            case 28: {
                const group = readNested(reader, decodeChapterGroup, wireType)
                if (group) {
                    detail.firstChapterList.push(...group.first)
                    detail.lastChapterList.push(...group.last)
                }
                break
            }
            case 31: {
                const tagName = readNested(reader, decodeTagName, wireType)
                if (tagName) detail.tagNames.push(tagName)
                break
            }
            default:
                reader.skip(wireType)
        }
    }

    return detail
}

function decodeMangaPage(bytes: Uint8Array): MangaPage {
    const reader = new ProtoReader(bytes)
    let imageUrl = ''
    let width = 0
    let height = 0
    let encryptionKey: string | undefined

    while (!reader.done) {
        const { fieldNumber, wireType } = reader.readTag()
        switch (fieldNumber) {
            case 1:
                imageUrl = wireType === 2 ? reader.readString() : imageUrl
                if (wireType !== 2) reader.skip(wireType)
                break
            case 2:
                width = wireType === 0 ? reader.readVarint() : width
                if (wireType !== 0) reader.skip(wireType)
                break
            case 3:
                height = wireType === 0 ? reader.readVarint() : height
                if (wireType !== 0) reader.skip(wireType)
                break
            case 5:
                encryptionKey = wireType === 2 ? reader.readString() : encryptionKey
                if (wireType !== 2) reader.skip(wireType)
                break
            default:
                reader.skip(wireType)
        }
    }

    return { imageUrl, width, height, encryptionKey }
}

function decodePage(bytes: Uint8Array): MangaPlusPage {
    const reader = new ProtoReader(bytes)
    let mangaPage: MangaPage | undefined

    while (!reader.done) {
        const { fieldNumber, wireType } = reader.readTag()
        if (fieldNumber === 1) {
            mangaPage = readNested(reader, decodeMangaPage, wireType) ?? mangaPage
        } else {
            reader.skip(wireType)
        }
    }

    return { mangaPage }
}

function decodeMangaViewer(bytes: Uint8Array): MangaViewer {
    const reader = new ProtoReader(bytes)
    const viewer: MangaViewer = { pages: [] }

    while (!reader.done) {
        const { fieldNumber, wireType } = reader.readTag()
        switch (fieldNumber) {
            case 1: {
                const page = readNested(reader, decodePage, wireType)
                if (page) viewer.pages.push(page)
                break
            }
            case 9:
                viewer.titleId = wireType === 0 ? reader.readVarint() : viewer.titleId
                if (wireType !== 0) reader.skip(wireType)
                break
            case 19:
                viewer.viewToken = wireType === 2 ? reader.readString() : viewer.viewToken
                if (wireType !== 2) reader.skip(wireType)
                break
            default:
                reader.skip(wireType)
        }
    }

    return viewer
}

function decodeAllTitlesGroup(bytes: Uint8Array): AllTitlesGroup {
    const reader = new ProtoReader(bytes)
    const group: AllTitlesGroup = { titles: [] }

    while (!reader.done) {
        const { fieldNumber, wireType } = reader.readTag()
        if (fieldNumber === 2) {
            const title = readNested(reader, decodeTitle, wireType)
            if (title) group.titles.push(title)
        } else {
            reader.skip(wireType)
        }
    }

    return group
}

function decodeAllTitlesViewV2(bytes: Uint8Array): { allTitlesGroup: AllTitlesGroup[] } {
    const reader = new ProtoReader(bytes)
    const allTitlesGroup: AllTitlesGroup[] = []

    while (!reader.done) {
        const { fieldNumber, wireType } = reader.readTag()
        if (fieldNumber === 1) {
            const group = readNested(reader, decodeAllTitlesGroup, wireType)
            if (group) allTitlesGroup.push(group)
        } else {
            reader.skip(wireType)
        }
    }

    return { allTitlesGroup }
}

function decodeTitleRankingGroup(bytes: Uint8Array): Title[] {
    const reader = new ProtoReader(bytes)
    const titles: Title[] = []

    while (!reader.done) {
        const { fieldNumber, wireType } = reader.readTag()
        if (fieldNumber === 2) {
            const title = readNested(reader, decodeTitle, wireType)
            if (title) titles.push(title)
        } else {
            reader.skip(wireType)
        }
    }

    return titles
}

function decodeTitleRankingViewV2(bytes: Uint8Array): { titles: Title[] } {
    const reader = new ProtoReader(bytes)
    const titles: Title[] = []

    while (!reader.done) {
        const { fieldNumber, wireType } = reader.readTag()
        if (fieldNumber === 3) {
            const groupTitles = readNested(reader, decodeTitleRankingGroup, wireType)
            if (groupTitles) titles.push(...groupTitles)
        } else {
            reader.skip(wireType)
        }
    }

    return { titles }
}

function decodeLatestChapter(bytes: Uint8Array): Title | undefined {
    const reader = new ProtoReader(bytes)
    let title: Title | undefined

    while (!reader.done) {
        const { fieldNumber, wireType } = reader.readTag()
        if (fieldNumber === 1) {
            title = readNested(reader, decodeTitle, wireType) ?? title
        } else {
            reader.skip(wireType)
        }
    }

    return title
}

function decodeUpdatedTitle(bytes: Uint8Array): UpdatedTitle {
    const reader = new ProtoReader(bytes)
    let title: Title | undefined

    while (!reader.done) {
        const { fieldNumber, wireType } = reader.readTag()
        if (fieldNumber === 3) {
            title = readNested(reader, decodeLatestChapter, wireType) ?? title
        } else {
            reader.skip(wireType)
        }
    }

    return { title }
}

function decodeUpdatedTitleGroup(bytes: Uint8Array): UpdatedTitleGroup {
    const reader = new ProtoReader(bytes)
    const group: UpdatedTitleGroup = { titles: [] }

    while (!reader.done) {
        const { fieldNumber, wireType } = reader.readTag()
        if (fieldNumber === 2) {
            const title = readNested(reader, decodeUpdatedTitle, wireType)
            if (title) group.titles.push(title)
        } else {
            reader.skip(wireType)
        }
    }

    return group
}

function decodeWebHomeViewV4(bytes: Uint8Array): WebHomeViewV4 {
    const reader = new ProtoReader(bytes)
    const view: WebHomeViewV4 = { groups: [] }

    while (!reader.done) {
        const { fieldNumber, wireType } = reader.readTag()
        if (fieldNumber === 2) {
            const group = readNested(reader, decodeUpdatedTitleGroup, wireType)
            if (group) view.groups.push(group)
        } else {
            reader.skip(wireType)
        }
    }

    return view
}

function decodeTitleList(bytes: Uint8Array): TitleList {
    const reader = new ProtoReader(bytes)
    const titleList: TitleList = { listName: '', featuredTitles: [] }

    while (!reader.done) {
        const { fieldNumber, wireType } = reader.readTag()
        switch (fieldNumber) {
            case 1:
                titleList.listName = wireType === 2 ? reader.readString() : titleList.listName
                if (wireType !== 2) reader.skip(wireType)
                break
            case 2: {
                const title = readNested(reader, decodeTitle, wireType)
                if (title) titleList.featuredTitles.push(title)
                break
            }
            default:
                reader.skip(wireType)
        }
    }

    return titleList
}

function decodeFeaturedContent(bytes: Uint8Array): FeaturedContent {
    const reader = new ProtoReader(bytes)
    const content: FeaturedContent = {}

    while (!reader.done) {
        const { fieldNumber, wireType } = reader.readTag()
        if (fieldNumber === 2) {
            content.titleList = readNested(reader, decodeTitleList, wireType) ?? content.titleList
        } else {
            reader.skip(wireType)
        }
    }

    return content
}

function decodeFeaturedTitlesViewV2(bytes: Uint8Array): FeaturedTitlesViewV2 {
    const reader = new ProtoReader(bytes)
    const view: FeaturedTitlesViewV2 = { contents: [] }

    while (!reader.done) {
        const { fieldNumber, wireType } = reader.readTag()
        if (fieldNumber === 2) {
            const content = readNested(reader, decodeFeaturedContent, wireType)
            if (content) view.contents.push(content)
        } else {
            reader.skip(wireType)
        }
    }

    return view
}

function decodeSuccess(bytes: Uint8Array): SuccessResult {
    const reader = new ProtoReader(bytes)
    const success: SuccessResult = {}

    while (!reader.done) {
        const { fieldNumber, wireType } = reader.readTag()
        switch (fieldNumber) {
            case 8:
                success.titleDetailView = readNested(reader, decodeTitleDetail, wireType) ?? success.titleDetailView
                break
            case 10:
                success.mangaViewer = readNested(reader, decodeMangaViewer, wireType) ?? success.mangaViewer
                break
            case 25:
                success.allTitlesViewV2 = readNested(reader, decodeAllTitlesViewV2, wireType) ?? success.allTitlesViewV2
                break
            case 37:
                success.titleRankingViewV2 = readNested(reader, decodeTitleRankingViewV2, wireType) ?? success.titleRankingViewV2
                break
            case 38:
                success.webHomeViewV4 = readNested(reader, decodeWebHomeViewV4, wireType) ?? success.webHomeViewV4
                break
            case 39:
                success.featuredTitlesViewV2 = readNested(reader, decodeFeaturedTitlesViewV2, wireType) ?? success.featuredTitlesViewV2
                break
            default:
                reader.skip(wireType)
        }
    }

    return success
}

export function decodeMangaPlusResponse(bytes: Uint8Array): MangaPlusResponse {
    const reader = new ProtoReader(bytes)
    const response: MangaPlusResponse = {}

    while (!reader.done) {
        const { fieldNumber, wireType } = reader.readTag()
        switch (fieldNumber) {
            case 1:
                response.success = readNested(reader, decodeSuccess, wireType) ?? response.success
                break
            case 2:
                response.error = readNested(reader, decodeError, wireType) ?? response.error
                break
            default:
                reader.skip(wireType)
        }
    }

    return response
}
