import {
    DUIButton,
    DUINavigationButton,
    SourceStateManager
} from '@paperback/types'

import {
    BTLanguages
} from './BatoToHelper'

const getLanguages = async (stateManager: SourceStateManager): Promise<string[]> => {
    return (await stateManager.retrieve('languages') ?? BTLanguages.getDefault())
}

const getLanguageHomeFilter = async (stateManager: SourceStateManager): Promise<boolean> => {
    return (await stateManager.retrieve('language_home_filter') ?? false)
}

const getLanguageSearchFilter = async (stateManager: SourceStateManager): Promise<boolean> => {
    return (await stateManager.retrieve('language_search_filter') ?? false)
}

export const languageSettings = (stateManager: SourceStateManager): DUINavigationButton => {
    return App.createDUINavigationButton({
        id: 'language_settings',
        label: 'Language Settings',
        form: App.createDUIForm({
            sections: async () => [
                App.createDUISection({
                    id: 'content',
                    footer: 'When enabled, mangas will be filtered by the selected languages.',
                    isHidden: false,
                    rows: async () => [
                        App.createDUISelect({
                            id: 'languages',
                            label: 'Languages',
                            options: BTLanguages.getBTCodeList(),
                            labelResolver: async (option) => BTLanguages.getName(option),
                            value: App.createDUIBinding({
                                get: () => getLanguages(stateManager),
                                set: async (newValue) => await stateManager.store('languages', newValue)
                            }),
                            allowsMultiselect: true
                        }),
                        App.createDUISwitch({
                            id: 'language_home_filter',
                            label: 'Filter Homepage Language',
                            value: App.createDUIBinding({
                                get: () => getLanguageHomeFilter(stateManager),
                                set: async (newValue) => await stateManager.store('language_home_filter', newValue)
                            })
                        }),
                        App.createDUISwitch({
                            id: 'language_search_filter',
                            label: 'Filter Search Language',
                            value: App.createDUIBinding({
                                get: () => getLanguageSearchFilter(stateManager),
                                set: async (newValue) => await stateManager.store('language_search_filter', newValue)
                            })
                        })
                    ]
                })
            ]
        })
    })
}

export const resetSettings = (stateManager: SourceStateManager): DUIButton => {
    return App.createDUIButton({
        id: 'reset',
        label: 'Reset to Default',
        onTap: async () => {
            await Promise.all([
                stateManager.store('languages', BTLanguages.getDefault()),
                stateManager.store('language_home_filter', false),
                stateManager.store('language_search_filter', false)
            ])
        }
    })
}
