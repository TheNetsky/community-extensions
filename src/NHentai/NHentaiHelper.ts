interface Language {
    name: string;
    NHCode: string;
    lang: string;
    default?: boolean;
}

class NHLanguagesClass {
    Languages: Language[] = [
        // Include all langauages
        {
            name: 'Include All',
            NHCode: '',
            lang: 'Unknown',
            default: true
        },
        {
            // English
            name: 'English',
            NHCode: 'english',
            lang: '🇬🇧'
        },
        {
            // Japanese
            name: 'Japanese',
            NHCode: 'japanese',
            lang: '🇯🇵'
        },
        {
            // Chinese (Simplified)
            name: 'Chinese',
            NHCode: 'chinese',
            lang: '🇨🇳'
        }
    ]

    constructor() {
        // Sorts the languages based on name
        this.Languages = this.Languages.sort((a, b) => a.name > b.name ? 1 : -1)
    }

    getNHCodeList(): string[] {
        return this.Languages.map(Language => Language.NHCode)
    }
    getName(NHCode: string): string {
        return this.Languages.filter(Language => Language.NHCode == NHCode)[0]?.name ?? 'Unknown'
    }
    getLangCode(NHCode: string): string {
        return this.Languages.filter(Language => Language.NHCode == NHCode)[0]?.lang ?? 'Unknown'
    }
    getDefault(): string[] {
        return this.Languages.filter(Language => Language.default).map(Language => Language.NHCode)
    }
}

export const NHLanguages = new NHLanguagesClass()
interface SortOrder {
    name: string;
    NHCode: string;
    shortcuts: string[];
    default?: boolean;
}

class NHSortOrderClass {
    sortOrders: SortOrder[] = [
        {
            // Sort by popular
            name: 'Popular All-Time',
            NHCode: 'popular',
            shortcuts: ['s:p', 's:popular', 'sort:p', 'sort:popular'],
            default: true
        },
        {
            // Sort by popular this week
            name: 'Popular This Week',
            NHCode: 'popular-week',
            shortcuts: ['s:pw', 's:w', 's:popular-week', 'sort:pw', 'sort:w', 'sort:popular-week']
        },
        {
            // Sort by popular today
            name: 'Popular Today',
            NHCode: 'popular-today',
            shortcuts: ['s:pt', 's:t', 's:popular-today', 'sort:pt', 'sort:t', 'sort:popular-today']
        },
        {
            // Sort by recent
            name: 'Most Recent',
            NHCode: 'date',
            shortcuts: ['s:r', 's:recent', 'sort:r', 'sort:recent']
        }
    ]

    constructor() {
        // Sorts the sort orders based on name
        this.sortOrders = this.sortOrders.sort((a, b) => a.name > b.name ? 1 : -1)
    }

    containsShortcut(query: string): string[] {
        for (const SortOrder of this.sortOrders) {
            for (const shortcut of SortOrder.shortcuts) {
                if (query.includes(shortcut)) {
                    return [SortOrder.NHCode, shortcut]
                }
            }
        }
        return ['', '']
    }

    getNHCodeList(): string[] {
        return this.sortOrders.map(SortOrder => SortOrder.NHCode)
    }
    getName(NHCode: string): string {
        return this.sortOrders.filter(SortOrder => SortOrder.NHCode == NHCode)[0]?.name ?? 'Unknown'
    }
    getDefault(): string[] {
        return this.sortOrders.filter(SortOrder => SortOrder.default).map(SortOrder => SortOrder.NHCode)
    }
}

export const NHSortOrders = new NHSortOrderClass()

export function hasNoResults(data: any): boolean {
    console.log(data)
    if (data.error) {
        console.error(data.error)
        return true
    }

    return false
}