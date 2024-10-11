import {
    RequestManager,
    SourceStateManager
} from '@paperback/types'
import {
    MDLanguages,
    MDRatings,
    MDImageQuality
} from './MangaDexHelper'


export async function getLanguages(stateManager: SourceStateManager) {
    return (await stateManager.retrieve('languages') ?? MDLanguages.getDefault())
}

export async function getRatings(stateManager: SourceStateManager) {
    return (await stateManager.retrieve('ratings') ?? MDRatings.getDefault())
}

export async function getDataSaver(stateManager: SourceStateManager) {
    return (await stateManager.retrieve('data_saver') ?? false)
}

export async function getSkipSameChapter(stateManager: SourceStateManager) {
    return (await stateManager.retrieve('skip_same_chapter') ?? false)
}

export async function forcePort443(stateManager: SourceStateManager) {
    return (await stateManager.retrieve('force_port_443') ?? false)
}

export async function getHomepageThumbnail(stateManager: SourceStateManager) {
    return (await stateManager.retrieve('homepage_thumbnail') ?? [MDImageQuality.getDefault('homepage')])
}

export async function getSearchThumbnail(stateManager: SourceStateManager) {
    return (await stateManager.retrieve('search_thumbnail') ?? [MDImageQuality.getDefault('search')])
}

export async function getMangaThumbnail(stateManager: SourceStateManager) {
    return (await stateManager.retrieve('manga_thumbnail') ?? [MDImageQuality.getDefault('manga')])
}

export async function getAccessToken(stateManager: SourceStateManager) {
    const accessToken: string | undefined = await stateManager.keychain.retrieve('access_token')
    const refreshToken: string | undefined = await stateManager.keychain.retrieve('refresh_token')

    if (!accessToken) return undefined

    return {
        accessToken,
        refreshToken,
        tokenBody: await parseAccessToken(accessToken)
    }
}

export async function saveAccessToken(stateManager: SourceStateManager, accessToken: string | undefined, refreshToken: string | undefined) {
    await Promise.all([
        stateManager.keychain.store('access_token', accessToken),
        stateManager.keychain.store('refresh_token', refreshToken)
    ])

    if (!accessToken) return undefined

    return {
        accessToken,
        refreshToken,
        tokenBody: await parseAccessToken(accessToken)
    }
}

export function contentSettings(stateManager: SourceStateManager) {
    return App.createDUINavigationButton({
        id: 'content_settings',
        label: 'Content Settings',
        form: App.createDUIForm({
            sections: async () => [
                App.createDUISection({
                    isHidden: false,
                    id: 'content',
                    footer: 'When enabled, same chapters from different scanlation group will not be shown.',
                    rows: async () => {
                        await Promise.all([
                            getLanguages(stateManager),
                            getRatings(stateManager),
                            getDataSaver(stateManager),
                            getSkipSameChapter(stateManager)
                        ])

                        return await [
                            App.createDUISelect({
                                id: 'languages',
                                label: 'Languages',
                                options: MDLanguages.getMDCodeList(),
                                labelResolver: async (option) => MDLanguages.getName(option),
                                value: App.createDUIBinding({
                                    get: async () => getLanguages(stateManager),
                                    set: async (newValue) => { await stateManager.store('languages', newValue) }
                                }),
                                allowsMultiselect: true
                            }),

                            App.createDUISelect({
                                id: 'ratings',
                                label: 'Content Rating',
                                options: MDRatings.getEnumList(),
                                labelResolver: async (option) => MDRatings.getName(option),
                                value: App.createDUIBinding({
                                    get: async () => getRatings(stateManager),
                                    set: async (newValue) => { await stateManager.store('ratings', newValue) }
                                }),
                                allowsMultiselect: true
                            }),

                            App.createDUISwitch({
                                id: 'data_saver',
                                label: 'Data Saver',
                                value: App.createDUIBinding({
                                    get: async () => getDataSaver(stateManager),
                                    set: async (newValue) => { await stateManager.store('data_saver', newValue) }
                                })
                            }),

                            App.createDUISwitch({
                                id: 'skip_same_chapter',
                                label: 'Skip Same Chapter',
                                value: App.createDUIBinding({
                                    get: async () => getSkipSameChapter(stateManager),
                                    set: async (newValue) => { await stateManager.store('skip_same_chapter', newValue) }
                                })
                            }),

                            App.createDUISwitch({
                                id: 'force_port_443',
                                label: 'Force Port 443',
                                value: App.createDUIBinding({
                                    get: async () => forcePort443(stateManager),
                                    set: async (newValue) => { await stateManager.store('force_port_443', newValue) }
                                })
                            })
                        ]
                    }
                })
            ]
        })
    })
}

export async function parseAccessToken(accessToken: string | undefined) {
    if (!accessToken) return undefined

    const tokenBodyBase64 = accessToken.split('.')[1]
    if (!tokenBodyBase64) return undefined

    const tokenBodyJSON = Buffer.from(tokenBodyBase64, 'base64').toString('ascii')
    return JSON.parse(tokenBodyJSON)
}

const authRequestCache: Record<string, Promise<any | undefined>> = {}

export function authEndpointRequest(requestManager: RequestManager, endpoint: 'login' | 'refresh' | 'logout', payload: any) {
    if (authRequestCache[endpoint] == undefined) {
        authRequestCache[endpoint] = _authEndpointRequest(requestManager, endpoint, payload).finally(() => {
            delete authRequestCache[endpoint]
        })
    }

    return authRequestCache[endpoint]!
}

async function _authEndpointRequest(requestManager: RequestManager, endpoint: 'login' | 'refresh' | 'logout', payload: any) {
    const response = await requestManager.schedule(
        App.createRequest({
            method: 'POST',
            url: 'https://api.mangadex.org/auth/' + endpoint,
            headers: {
                'content-type': 'application/json'
            },
            data: payload
        }), 1)

    if (response.status > 399) {
        throw new Error('Request failed with error code:' + response.status)
    }

    const jsonData = (typeof response.data === 'string') ? JSON.parse(response.data) : response.data
    if (jsonData.result != 'ok') {
        throw new Error('Request failed with errors: ' + jsonData.errors.map((x: any) => `[${x.title}]: ${x.detail}`))
    }

    return jsonData
}

export async function accountSettings(stateManager: SourceStateManager, requestManager: RequestManager) {
    const accessToken = await getAccessToken(stateManager)
    if (!accessToken) {
        return App.createDUIOAuthButton({
            id: 'mdex_oauth',
            label: 'Login with MangaDex',
            authorizeEndpoint: 'https://auth.mangadex.dev/realms/mangadex/protocol/openid-connect/auth',
            clientId: 'thirdparty-oauth-client',
            redirectUri: 'paperback://mangadex-login',
            responseType: {
                type: 'pkce',
                pkceCodeLength: 64,
                pkceCodeMethod: 'S256',
                formEncodeGrant: true,
                tokenEndpoint: 'https://auth.mangadex.dev/realms/mangadex/protocol/openid-connect/token'
            },

            async successHandler(accessToken, refreshToken?) {
                await saveAccessToken(stateManager, accessToken, refreshToken)
            },
            scopes: ['email', 'openid']
        })
    }

    return App.createDUINavigationButton({
        id: 'account_settings',
        label: 'Session Info',
        form: App.createDUIForm({
            onSubmit: async () => undefined,
            sections: async () => {
                const accessToken = await getAccessToken(stateManager)

                if (!accessToken) {
                    return [
                        App.createDUISection({
                            isHidden: false,
                            id: 'not_logged_in_section',
                            rows: async () => [
                                App.createDUILabel({
                                    id: 'not_logged_in',
                                    label: 'Not Logged In'
                                })
                            ]
                        })
                    ]
                }

                return [
                    App.createDUISection({
                        isHidden: false,
                        id: 'introspect',
                        rows: async () => {
                            return Object.keys(accessToken.tokenBody).map((key) => {
                                const value = accessToken.tokenBody[key]
                                return App.createDUIMultilineLabel({
                                    id: key,
                                    label: key,
                                    value: Array.isArray(value) ? value.join('\n') : `${value}`
                                })
                            })
                        }
                    }),

                    App.createDUISection({
                        isHidden: false,
                        id: 'refresh_button_section',
                        rows: async () => [
                            App.createDUIButton({
                                id: 'refresh_token_button',
                                label: 'Refresh Token',
                                onTap: async () => {
                                    const response = await authEndpointRequest(requestManager, 'refresh', { token: accessToken.refreshToken })
                                    await saveAccessToken(stateManager, response.token.session, response.token.refresh)
                                }
                            }),
                            App.createDUIButton({
                                id: 'logout_button',
                                label: 'Logout',
                                onTap: async () => {
                                    await authEndpointRequest(requestManager, 'logout', {})
                                    await saveAccessToken(stateManager, undefined, undefined)
                                }
                            })
                        ]
                    })
                ]
            }
        })
    })
}

export function thumbnailSettings(stateManager: SourceStateManager) {
    return App.createDUINavigationButton({
        id: 'thumbnail_settings',
        label: 'Thumbnail Quality',
        form: App.createDUIForm({
            sections: async () => [
                App.createDUISection({
                    isHidden: false,
                    id: 'thumbnail',
                    rows: async () => {
                        await Promise.all([
                            getHomepageThumbnail(stateManager),
                            getSearchThumbnail(stateManager),
                            getMangaThumbnail(stateManager)
                        ])
                        return await [
                            App.createDUISelect({
                                id: 'homepage_thumbnail',
                                label: 'Homepage Thumbnail',
                                options: MDImageQuality.getEnumList(),
                                labelResolver: async (option) => MDImageQuality.getName(option),
                                value: App.createDUIBinding({
                                    get: async () => getHomepageThumbnail(stateManager),
                                    set: async (newValue) => await stateManager.store('homepage_thumbnail', newValue)

                                }),
                                allowsMultiselect: false
                            }),
                            App.createDUISelect({
                                id: 'search_thumbnail',
                                label: 'Search Thumbnail',
                                options: MDImageQuality.getEnumList(),
                                labelResolver: async (option) => MDImageQuality.getName(option),
                                value: App.createDUIBinding({
                                    get: async () => getSearchThumbnail(stateManager),
                                    set: async (newValue) => await stateManager.store('search_thumbnail', newValue)

                                }),
                                allowsMultiselect: false
                            }),
                            App.createDUISelect({
                                id: 'manga_thumbnail',
                                label: 'Manga Thumbnail',
                                options: MDImageQuality.getEnumList(),
                                labelResolver: async (option) => MDImageQuality.getName(option),
                                value: App.createDUIBinding({
                                    get: async () => getMangaThumbnail(stateManager),
                                    set: async (newValue) => await stateManager.store('manga_thumbnail', newValue)

                                }),
                                allowsMultiselect: false
                            })
                        ]
                    }
                })
            ]
        })
    })
}

export function resetSettings(stateManager: SourceStateManager) {
    return App.createDUIButton({
        id: 'reset',
        label: 'Reset to Default',
        onTap: async () => {
            await Promise.all([
                stateManager.store('languages', null),
                stateManager.store('ratings', null),
                stateManager.store('data_saver', null),
                stateManager.store('skip_same_chapter', null),
                stateManager.store('homepage_thumbnail', null),
                stateManager.store('search_thumbnail', null),
                stateManager.store('manga_thumbnail', null)])
        }
    })
}