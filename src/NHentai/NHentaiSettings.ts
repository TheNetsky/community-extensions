import {
    DUIButton,
    DUINavigationButton,
    SourceStateManager
} from '@paperback/types'

import {
    NHLanguages,
    NHSortOrders
} from './NHentaiHelper'

export const getLanguages = async (stateManager: SourceStateManager): Promise<string[]> => {
    return (await stateManager.retrieve('languages') as string[]) ?? NHLanguages.getDefault()
}

export const getSortOrders = async (stateManager: SourceStateManager): Promise<string[]> => {
    return (await stateManager.retrieve('sort_order') as string[]) ?? NHSortOrders.getDefault()
}

export const getExtraArgs = async (stateManager: SourceStateManager): Promise<string> => {
    return (await stateManager.retrieve('extra_args') as string) ?? '-lolicon -shotacon -yaoi'
}


export const settings = (stateManager: SourceStateManager): DUINavigationButton => {
    return App.createDUINavigationButton({
        id: 'settings',
        label: 'Content Settings',
        form: App.createDUIForm({
            sections: () => {
                return Promise.resolve([
                    App.createDUISection({
                        id: 'content',
                        footer: 'Tags with a space in it, need to be replace with a "-"\nExample: "-big breasts" will be "-big-breasts"',
                        rows: async () => {
                            await Promise.all([
                                getLanguages(stateManager),
                                getSortOrders(stateManager),
                                getExtraArgs(stateManager),
                            ])
                            return await [
                                App.createDUISelect({
                                    id: 'languages',
                                    label: 'Languages',
                                    options: NHLanguages.getNHCodeList(),
                                    labelResolver: async (option_1) => NHLanguages.getName(option_1),
                                    value: App.createDUIBinding({
                                        get: () => getLanguages(stateManager),
                                        set: async (newValue_1) => await stateManager.store('languages', newValue_1)
                                    }),
                                    allowsMultiselect: false,
                                }),

                                App.createDUISelect({
                                    id: 'sort_order',
                                    label: 'Default search sort order',
                                    options: NHSortOrders.getNHCodeList(),
                                    labelResolver: async (option_3) => NHSortOrders.getName(option_3),
                                    value: App.createDUIBinding({
                                        get: () => getSortOrders(stateManager),
                                        set: async (newValue_3) => await stateManager.store('sort_order', newValue_3)
                                    }),
                                    allowsMultiselect: false,
                                }),

                                App.createDUIInputField({
                                    id: 'extra_args',
                                    label: 'Additional arguments',
                                    value: App.createDUIBinding({
                                        get: () => getExtraArgs(stateManager),
                                        set: async (newValue_5) => await stateManager.store('extra_args', newValue_5)
                                    })
                                })
                            ]
                        },
                        isHidden: false
                    })
                ])
            }
        })
    })
}

export const resetSettings = (stateManager: SourceStateManager): DUIButton => {
    return App.createDUIButton({
        id: 'reset',
        label: 'Reset to Default',
        onTap: async () => {
            await Promise.all([
                stateManager.store('languages', null),
                stateManager.store('sort_order', null),
                stateManager.store('extra_args', null)
            ])
        }
    })
}
