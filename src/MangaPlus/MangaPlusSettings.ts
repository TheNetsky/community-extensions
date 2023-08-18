import {
    DUIButton,
    DUINavigationButton,
    SourceStateManager
} from '@paperback/types'

import { Language } from './MangaPlusHelper'

export const getLanguages = async (stateManager: SourceStateManager): Promise<string[]> => {
    return (await stateManager.retrieve('languages') as string[]) ?? [Language.ENGLISH]
}

export const getSplitImages = async (stateManager: SourceStateManager): Promise<string> => {
    return (await stateManager.retrieve('split_images') as string) ?? 'yes'
}

export const getResolution = async (stateManager: SourceStateManager): Promise<string> => {
    return (
        (await stateManager.retrieve('image_resolution') as string) ?? 'high'
    )
}

export const contentSettings = (stateManager: SourceStateManager): DUINavigationButton => {
    return App.createDUINavigationButton({
        id: 'content_settings',
        label: 'Content Settings',
        form: App.createDUIForm({
            sections: async () =>
                [
                    App.createDUISection({
                        isHidden: false,
                        id: 'content',
                        rows: async () => {
                            await Promise.all([
                                getLanguages(stateManager),
                                getSplitImages(stateManager),
                                getResolution(stateManager)
                            ])

                            return await [
                                App.createDUISelect({
                                    id: 'languages',
                                    label: 'Languages',
                                    options: [Language.ENGLISH, Language.FRENCH, Language.INDONESIAN, Language.PORTUGUESE_BR, Language.RUSSIAN, Language.SPANISH, Language.THAI, Language.VIETNAMESE],
                                    labelResolver: async (option: string) => {
                                        switch (option) {
                                            case Language.ENGLISH:
                                                return 'English'

                                            case Language.SPANISH:
                                                return 'Español'

                                            case Language.FRENCH:
                                                return 'Français'

                                            case Language.INDONESIAN:
                                                return 'Bahasa (IND)'

                                            case Language.PORTUGUESE_BR:
                                                return 'Portugûes (BR)'

                                            case Language.RUSSIAN:
                                                return 'Русский'

                                            case Language.THAI:
                                                return 'ภาษาไทย'

                                            case Language.VIETNAMESE:
                                                return 'Tiếng Việt'

                                            default:
                                                return ''
                                        }
                                    },
                                    value: App.createDUIBinding({
                                        get: async () => getLanguages(stateManager),
                                        set: async (value: string[]) => { await stateManager.store('languages', value) }
                                    }),
                                    allowsMultiselect: true
                                }),

                                App.createDUISwitch({
                                    id: 'split_images',
                                    label: 'Split double pages',
                                    value: App.createDUIBinding({
                                        get: async () => await getSplitImages(stateManager) == 'yes',
                                        set: async (value: boolean) => { await stateManager.store('split_images', value ? 'yes' : 'no') }
                                    })
                                }),

                                App.createDUISelect({
                                    id: 'image_resolution',
                                    label: 'Image resolution',
                                    options: ['low', 'high', 'super_high'],
                                    value: App.createDUIBinding({
                                        get: async () => [await getResolution(stateManager)],
                                        set: async (value: string[]) => {
                                            await stateManager.store('image_resolution', value[0])
                                        }
                                    }),
                                    allowsMultiselect: false,
                                    labelResolver: async (option: string) => {
                                        switch (option) {
                                            case 'low':
                                                return 'Low'
                                            case 'high':
                                                return 'High'
                                            case 'super_high':
                                                return 'Super High'
                                            default:
                                                return ''
                                        }
                                    }
                                })

                            ]

                        }
                    })
                ]
        })
    })

}

export function resetSettings(stateManager: SourceStateManager): DUIButton {
    return App.createDUIButton({
        id: 'reset',
        label: 'Reset to Default',
        onTap: async () => {
            await stateManager.store('languages', [Language.ENGLISH]),
            await stateManager.store('split_images', 'yes'),
            await stateManager.store('image_resolution', 'high')
        }
    })
}