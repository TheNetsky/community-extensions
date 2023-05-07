export interface MangaDexSearchResponse {
    result: string;
    response: string;
    data: MangaItem[];
    limit: number;
    offset: number;
    total: number;
}

export interface MangaItem {
    id: string;
    type: RelationshipType;
    attributes: DatumAttributes;
    relationships: Relationship[];
}

export interface DatumAttributes {
    title: Title;
    altTitles: AltTitle[];
    description: PurpleDescription;
    isLocked: boolean;
    links: Links;
    originalLanguage: OriginalLanguage;
    lastVolume: string;
    lastChapter: string;
    publicationDemographic: null | string;
    status: Status;
    year: number | null;
    contentRating: ContentRating;
    tags: Tag[];
    state: State;
    chapterNumbersResetOnNewVolume: boolean;
    createdAt: Date;
    updatedAt: Date;
    version: number;
    availableTranslatedLanguages: string[];
    latestUploadedChapter: string;
}

export interface AltTitle {
    ko?: string;
    ja?: string;
    en?: string;
    vi?: string;
    ru?: string;
    th?: string;
    'ko-ro'?: string;
    'ja-ro'?: string;
    uk?: string;
    zh?: string;
    es?: string;
    'zh-ro'?: string;
    ar?: string;
    id?: string;
    'es-la'?: string;
    'pt-br'?: string;
    tr?: string;
    'zh-hk'?: string;
    fr?: string;
    de?: string;
}

export enum ContentRating {
    Erotica = 'erotica',
    Pornographic = 'pornographic',
    Safe = 'safe',
    Suggestive = 'suggestive'
}

export interface PurpleDescription {
    en?: string;
    'pt-br'?: string;
    id?: string;
    ar?: string;
    fr?: string;
    ru?: string;
    zh?: string;
    'es-la'?: string;
    it?: string;
    ja?: string;
    ko?: string;
    de?: string;
}

export interface Links {
    mu?: string;
    raw?: string;
    al?: string;
    ap?: string;
    kt?: string;
    nu?: string;
    mal?: string;
    bw?: string;
    amz?: string;
    cdj?: string;
    ebj?: string;
    engtl?: string;
}

export enum OriginalLanguage {
    En = 'en',
    Ja = 'ja',
    Ko = 'ko',
    Zh = 'zh'
}

export enum State {
    Published = 'published'
}

export enum Status {
    Completed = 'completed',
    Ongoing = 'ongoing'
}

export interface Tag {
    id: string;
    type: TagType;
    attributes: TagAttributes;
    relationships: any[];
}

export interface TagAttributes {
    name: Title;
    description: string;
    group: Group;
    version: number;
}

export enum Group {
    Content = 'content',
    Format = 'format',
    Genre = 'genre',
    Theme = 'theme'
}

export interface Title {
    en: string;
}

export enum TagType {
    Tag = 'tag'
}

export interface Relationship {
    id: string;
    type: RelationshipType;
    attributes?: RelationshipAttributes;
    related?: string;
}

export interface RelationshipAttributes {
    description: string;
    volume: null | string;
    fileName: string;
    locale: OriginalLanguage;
    createdAt: Date;
    updatedAt: Date;
    version: number;
}

export enum RelationshipType {
    Artist = 'artist',
    Author = 'author',
    CoverArt = 'cover_art',
    Manga = 'manga'
}

