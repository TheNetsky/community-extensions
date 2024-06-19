import { SourceManga } from '@paperback/types'


export interface MangaPlusResponse {
    success?: SuccessResult;
    error?: ErrorResult;
}

interface SuccessResult {
    isFeaturedUpdated?: boolean;
    titleRankingView?: TitleRankingView;
    titleDetailView?: TitleDetailView;
    mangaViewer?: MangaViewer;
    allTitlesViewV2?: AllTitlesViewV2;
    webHomeViewV4?: WebHomeViewV4;
    featuredTitlesViewV2?: {
        contents: [
            {
                titleList: {
                    listName: 'WEEKLY SHONEN JUMP' | 'JUMP PLUS' | 'OTHERS' | 'Re edition' | '"First Read Free" Eligible Titles!';
                    featuredTitles: Title[];
                }
            }
        ]
    };
}

interface TitleRankingView {
    titles: Title[];
}

interface AllTitlesViewV2 {
    AllTitlesGroup: AllTitlesGroup[];
}

interface AllTitlesGroup {
    theTitle: string;
    titles: Title[];
}

interface WebHomeViewV4 {
    groups: UpdatedTitleV2Group[];
}

interface UpdatedTitleV2Group {
    groupName: string;
    titleGroups: OriginalTitleGroup[];
}

interface OriginalTitleGroup {
    theTitle: string;
    titles: UpdatedTitle[];
}

interface UpdatedTitle {
    title: Title;
}

class ErrorResult {
    popups: Popup[] = []

    langPopup(lang: Language): Popup | null {
        return this.popups.find(popup => popup.language === lang) || null
    }
}

class Popup {
    subject: string
    body: string
    language?: Language

    constructor(subject: string, body: string, language?: Language) {
        this.subject = subject
        this.body = body
        if (language) this.language = language
        else this.language = Language.ENGLISH
    }
}

export enum Language {
    ENGLISH = 'ENGLISH',
    SPANISH = 'SPANISH',
    FRENCH = 'FRENCH',
    INDONESIAN = 'INDONESIAN',
    PORTUGUESE_BR = 'PORTUGUESE_BR',
    RUSSIAN = 'RUSSIAN',
    THAI = 'THAI',
    VIETNAMESE = 'VIETNAMESE'
}

export class Title {
    titleId: number;
    name: string;
    author?: string;
    portraitImageUrl: string;
    landscapeImageUrl: string;
    viewCount = 0;
    language: Language = Language.ENGLISH;

    constructor(titleId: number, name: string, portraitImageUrl: string, landscapeImageUrl: string, author?: string) {
        this.titleId = titleId
        this.name = name
        this.portraitImageUrl = portraitImageUrl
        this.landscapeImageUrl = landscapeImageUrl

        if (author) this.author = author
    }
}

export class TitleDetailView {
    title?: Title;
    titleImageUrl?: string;
    overview?: string;
    backgroundImageUrl?: string;
    nextTimeStamp = 0;
    viewingPeriodDescription = '';
    nonAppearanceInfo = '';
    chapterListGroup: {
        firstChapterList: Chapter[] | undefined;
        lastChapterList: Chapter[] | undefined;
    }[] = [];
    firstChapterList: Chapter[] = [];
    lastChapterList: Chapter[] = [];
    isSimulReleased = false;
    chaptersDescending = true;

    private get isWebtoon(): boolean {
        return this.firstChapterList.every(chapter => chapter.isVerticalOnly) && this.lastChapterList.every(chapter => chapter.isVerticalOnly)
    }

    private get isOneShot(): boolean {
        return this.chapterCount == 1 && this.firstChapterList.at(0)?.name?.localeCompare('one-shot', undefined, { 'sensitivity': 'base' }) == 0
    }

    private get chapterCount(): number {
        return this.firstChapterList?.length + this.lastChapterList?.length
    }

    private get isReEdition(): boolean {
        return this.viewingPeriodDescription?.search(TitleDetailView.REEDITION_REGEX) != 0
    }

    private get isCompleted(): boolean {
        return this.nonAppearanceInfo?.search(TitleDetailView.COMPLETED_REGEX) != 0 || this.isOneShot
    }

    private get isOnHiatus(): boolean {
        return this.nonAppearanceInfo?.search(TitleDetailView.HIATUS_REGEX) != 0
    }

    private get genres(): string[] {
        const genres = []
        if (this.isSimulReleased && !this.isReEdition && !this.isOneShot) genres.push('Simulrelease')

        if (this.isOneShot) genres.push('One-shot')

        if (this.isReEdition) genres.push('Re-edition')

        if (this.isWebtoon) genres.push('Webtoon')

        return genres
    }

    static fromJson(str: string): TitleDetailView {
        const bopp = JSON.parse(str) as MangaPlusResponse

        if (bopp.success?.titleDetailView === undefined) throw Error('Cannot find manga')

        const json = bopp.success.titleDetailView

        const obj = new TitleDetailView()

        if (json.title === undefined) {
            throw Error('Cannot find title')
        }

        const title = json.title

        obj.title = new Title(title.titleId, title.name, title.portraitImageUrl, title.landscapeImageUrl, title.author)
        obj.titleImageUrl = json.titleImageUrl
        obj.overview = json.overview
        obj.backgroundImageUrl = json.backgroundImageUrl
        obj.nextTimeStamp = json.nextTimeStamp
        obj.viewingPeriodDescription = json.viewingPeriodDescription
        obj.nonAppearanceInfo = json.nonAppearanceInfo
        obj.firstChapterList = json.chapterListGroup?.flatMap(a => a.firstChapterList ?? []).map(chapter => Object.assign(new Chapter(1, 1, '', 1, 1), chapter))
        obj.lastChapterList = json.chapterListGroup?.flatMap(a => a.lastChapterList ?? []).map(chapter => Object.assign(new Chapter(1, 1, '', 1, 1), chapter))
        
        return obj
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
                desc: (this.overview ?? '') + '\n\n' + (this.viewingPeriodDescription ?? ''),
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

    private static COMPLETED_REGEX = /completado|complete|completo/
    private static HIATUS_REGEX = /on a hiatus/i
    private static REEDITION_REGEX = /revival|remasterizada/
}

interface MangaViewer {
    pages: MangaPlusPage[];
    titleId?: number;
    titleName?: string;
}

interface MangaPlusPage {
    mangaPage?: MangaPage;
}

interface MangaPage {
    imageUrl: string;
    width: number;
    height: number;
    encryptionKey?: string;
}

class Chapter {
    titleId: number;
    chapterId: number;
    name: string;
    subTitle?: string;
    startTimeStamp: number;
    endTimeStamp: number;
    isVerticalOnly = false;

    constructor(titleId: number, chapterId: number, name: string, startTimeStamp: number, endTimeStamp: number) {
        this.titleId = titleId
        this.chapterId = chapterId
        this.name = name
        this.startTimeStamp = startTimeStamp
        this.endTimeStamp = endTimeStamp
    }

    public get isExpired(): boolean {
        return this.subTitle == null
    }

    toSChapter() {
        const chapNum = parseFloat(this.name.slice(this.name.lastIndexOf('#') + 1))

        return App.createChapter({
            id: this.chapterId.toString(),
            name: this.subTitle ? this.subTitle : '',
            chapNum: isNaN(chapNum) ? 0 : chapNum,
            sortingIndex: isNaN(chapNum) ? -1 : chapNum,
            time: new Date(this.startTimeStamp * 1000)
        })
    }
}