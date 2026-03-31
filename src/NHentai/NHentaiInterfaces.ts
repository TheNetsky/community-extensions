
export interface ImagePageObject {
    t: 'j' | 'p' | 'g' | 'w';
    w: number;
    h: number;
}

export interface ImageObject {
    pages: ImagePageObject[];
    cover: ImagePageObject;
    thumbnail: ImagePageObject;
}

export interface CoverInfo {
    path: string;
    width: number;
    height: number;
}

export interface PageInfo {
    number: number;
    path: string;
    width: number;
    height: number;
    thumbnail: string;
    thumbnail_width: number;
    thumbnail_height: number;
}

export interface TagObject {
    id: number
    type:
    | 'artist'
    | 'category'
    | 'character'
    | 'groups'
    | 'language'
    | 'parody'
    | 'tag';
    name: string;
    slug?: string;
    url: string;
    count: number;
}

interface resTitleObj {
    english: string;
    japanese: string | null;
    pretty: string;
}

export interface GalleryListItem {
    id: number;
    media_id: string;
    thumbnail: string;
    thumbnail_width: number;
    thumbnail_height: number;
    english_title: string;
    japanese_title: string | null;
    tag_ids: number[];
}

export interface Gallery {
    id: number;
    media_id: string;
    title: resTitleObj;
    images?: ImageObject;
    cover?: CoverInfo;
    thumbnail?: CoverInfo;
    scanlator: string | undefined;
    upload_date: number;
    tags: TagObject[];
    num_pages: number;
    num_favorites: number;
    pages?: PageInfo[];
}

export interface QueryResponse {
    result: Array<GalleryListItem | Gallery>;
    num_pages: number;
    per_page: number;
    total?: number | null;
}

export interface RequestMetadata {
    nextPage?: number;
    maxPages?: number;
    sort: 'date' | 'popular-today' | 'popular-week' | 'popular-month' | 'popular' | '';
}
