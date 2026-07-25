import { SourceManga } from '@paperback/types'

export interface MangaPlusResponse {
    success?: SuccessResult;
    error?: ErrorResult;
}

export interface SuccessResult {
    titleRankingViewV2?: TitleRankingView;
    titleDetailView?: TitleDetailView;
    mangaViewer?: MangaViewer;
    allTitlesViewV2?: AllTitlesViewV2;
    webHomeViewV4?: WebHomeViewV4;
    featuredTitlesViewV2?: FeaturedTitlesViewV2;
}

export interface TitleRankingView {
    titles: Title[];
}

export interface AllTitlesViewV2 {
    allTitlesGroup: AllTitlesGroup[];
}

export interface AllTitlesGroup {
    titles: Title[];
}

export interface WebHomeViewV4 {
    groups: UpdatedTitleGroup[];
}

export interface UpdatedTitleGroup {
    titles: UpdatedTitle[];
}

export interface UpdatedTitle {
    title?: Title;
}

export interface FeaturedTitlesViewV2 {
    contents: FeaturedContent[];
}

export interface FeaturedContent {
    titleList?: TitleList;
}

export interface TitleList {
    listName: string;
    featuredTitles: Title[];
}

export class ErrorResult {
    popups: Popup[] = []

    langPopup(lang: Language): Popup | null {
        return this.popups.find(popup => popup.language === lang)
            ?? this.popups.find(popup => popup.language === Language.ENGLISH)
            ?? null
    }
}

export class Popup {
    constructor(
        public subject: string,
        public body: string,
        public language: Language = Language.ENGLISH
    ) {}
}

export enum Language {
    ENGLISH = 'ENGLISH',
    SPANISH = 'SPANISH',
    FRENCH = 'FRENCH',
    INDONESIAN = 'INDONESIAN',
    PORTUGUESE_BR = 'PORTUGUESE_BR',
    RUSSIAN = 'RUSSIAN',
    THAI = 'THAI',
    GERMAN = 'GERMAN',
    ITALIAN = 'ITALIAN',
    VIETNAMESE = 'VIETNAMESE'
}

export class Title {
    viewCount = 0

    constructor(
        public titleId: number,
        public name: string,
        public portraitImageUrl: string,
        public landscapeImageUrl: string,
        public author?: string,
        public language: Language = Language.ENGLISH
    ) {}
}

export class TitleDetailView {
    title?: Title
    titleImageUrl?: string
    overview?: string
    backgroundImageUrl?: string
    nextTimeStamp = 0
    viewingPeriodDescription = ''
    nonAppearanceInfo = ''
    firstChapterList: Chapter[] = []
    lastChapterList: Chapter[] = []
    isSimulReleased = false
    tagNames: string[] = []

    private get chapterCount(): number {
        return this.firstChapterList.length + this.lastChapterList.length
    }

    private get isWebtoon(): boolean {
        const chapters = [...this.firstChapterList, ...this.lastChapterList]
        return chapters.length > 0 && chapters.every(chapter => chapter.isVerticalOnly)
    }

    private get isOneShot(): boolean {
        return this.tagNames.some(tag => tag.toLowerCase() === 'one-shot')
            || (this.chapterCount === 1
                && this.firstChapterList[0]?.name?.localeCompare('one-shot', undefined, { sensitivity: 'base' }) === 0)
    }

    private get isReEdition(): boolean {
        return TitleDetailView.REEDITION_REGEX.test(this.viewingPeriodDescription)
    }

    private get isCompleted(): boolean {
        return TitleDetailView.COMPLETED_REGEX.test(this.nonAppearanceInfo) || this.isOneShot
    }

    private get isOnHiatus(): boolean {
        return TitleDetailView.HIATUS_REGEX.test(this.nonAppearanceInfo)
    }

    private get genres(): string[] {
        const genres = [...this.tagNames]
        if (this.isSimulReleased && !this.isReEdition && !this.isOneShot) genres.push('Simulrelease')
        if (this.isOneShot) genres.push('One-shot')
        if (this.isReEdition) genres.push('Re-edition')
        if (this.isWebtoon) genres.push('Webtoon')

        return [...new Set(genres)]
    }

    toSourceManga(): SourceManga {
        const authors = this.title?.author?.split('/')
        return App.createSourceManga({
            id: this.title?.titleId.toString() ?? '',
            mangaInfo: App.createMangaInfo({
                image: 'imageMangaId=' + this.title?.titleId,
                titles: [this.title?.name ?? ''],
                author: authors ? authors[0]?.trimEnd() : this.title?.author ?? '',
                artist: authors ? authors[1]?.trimStart() : this.title?.author ?? '',
                desc: [this.overview, this.viewingPeriodDescription].filter(Boolean).join('\n\n'),
                tags: [
                    App.createTagSection({
                        id: '0',
                        label: 'genres',
                        tags: this.genres.map(genre => App.createTag({ id: genre, label: genre }))
                    })
                ],
                status: this.isCompleted ? 'Completed' : this.isOnHiatus ? 'On hiatus' : 'Ongoing'
            })
        })
    }

    private static COMPLETED_REGEX = /completado|complete|completo/i
    private static HIATUS_REGEX = /on a hiatus/i
    private static REEDITION_REGEX = /revival|remasterizada/i
}

export interface MangaViewer {
    pages: MangaPlusPage[];
    titleId?: number;
    viewToken?: string;
}

export interface MangaPlusPage {
    mangaPage?: MangaPage;
}

export interface MangaPage {
    imageUrl: string;
    width: number;
    height: number;
    encryptionKey?: string;
}

export class Chapter {
    subTitle?: string
    isVerticalOnly = false

    constructor(
        public titleId: number,
        public chapterId: number,
        public name: string,
        public startTimeStamp: number,
        public endTimeStamp: number
    ) {}

    public get isExpired(): boolean {
        return this.subTitle == null
    }

    toSChapter() {
        const chapNum = parseFloat(this.name.slice(this.name.lastIndexOf('#') + 1))

        return App.createChapter({
            id: this.chapterId.toString(),
            name: this.subTitle ?? '',
            chapNum: isNaN(chapNum) ? 0 : chapNum,
            sortingIndex: isNaN(chapNum) ? -1 : chapNum,
            time: new Date(this.startTimeStamp * 1000)
        })
    }
}
