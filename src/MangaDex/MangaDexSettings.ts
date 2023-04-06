import { RequestManager, SourceStateManager } from "@paperback/types"
import { MDLanguages, MDRatings, MDImageQuality, MDHomepageSections } from "./MangaDexHelper"
import {
  sliceRecommendedIds,
  //getRecommendedIds
} from "./MangaDexSimilarManga"

async function getState<T>(stateManager: SourceStateManager, key: string, fallback: T) {
  return ((await stateManager.retrieve(key)) as T) ?? fallback
}

export async function getLanguages(stateManager: SourceStateManager) {
  return getState(stateManager, "languages", MDLanguages.getDefault())
}

export async function getRatings(stateManager: SourceStateManager) {
  return getState(stateManager, "ratings", MDRatings.getDefault())
}

export async function getDataSaver(stateManager: SourceStateManager) {
  return getState(stateManager, "data_saver", false)
}

export async function getSkipSameChapter(stateManager: SourceStateManager) {
  return getState(stateManager, "skip_same_chapter", false)
}

export async function getHomepageThumbnail(stateManager: SourceStateManager) {
  return getState(stateManager, "homepage_thumbnail", MDImageQuality.getDefault("homepage"))
}

export async function getSearchThumbnail(stateManager: SourceStateManager) {
  return getState(stateManager, "search_thumbnail", MDImageQuality.getDefault("search"))
}

export async function getMangaThumbnail(stateManager: SourceStateManager) {
  return getState(stateManager, "manga_thumbnail", MDImageQuality.getDefault("manga"))
}

export async function getEnabledHomePageSections(stateManager: SourceStateManager) {
  return getState<string[]>(stateManager, "enabled_homepage_sections", MDHomepageSections.getDefault())
}

export async function getEnabledRecommendations(stateManager: SourceStateManager) {
  return getState(stateManager, "enabled_recommendations", false)
}

export async function getAmountRecommendations(stateManager: SourceStateManager) {
  return getState(stateManager, "amount_of_recommendations", 5)
}

export async function getAccessToken(stateManager: SourceStateManager) {
  const accessToken: string | undefined = await stateManager.keychain.retrieve("access_token")
  const refreshToken: string | undefined = await stateManager.keychain.retrieve("refresh_token")

  if (!accessToken) return undefined

  return {
    accessToken,
    refreshToken,
    tokenBody: await parseAccessToken(accessToken),
  }
}

export async function saveAccessToken(
  stateManager: SourceStateManager,
  accessToken: string | undefined,
  refreshToken: string | undefined,
) {
  await Promise.all([
    stateManager.keychain.store("access_token", accessToken),
    stateManager.keychain.store("refresh_token", refreshToken),
  ])

  if (!accessToken) return undefined

  return {
    accessToken,
    refreshToken,
    tokenBody: await parseAccessToken(accessToken),
  }
}

export function contentSettings(stateManager: SourceStateManager) {
  return App.createDUINavigationButton({
    id: "content_settings",
    label: "Content Settings",
    form: App.createDUIForm({
      onSubmit: async (values: any) => {
        await Promise.all([
          stateManager.store("languages", values.languages),
          stateManager.store("ratings", values.ratings),
          stateManager.store("data_saver", values.data_saver),
          stateManager.store("skip_same_chapter", values.skip_same_chapter),
        ])
      },
      sections: async () => [
        App.createDUISection({
          isHidden: false,
          id: "content",
          footer: "When enabled, same chapters from different scanlation group will not be shown.",
          rows: async () => {
            const values = await Promise.all([
              getLanguages(stateManager),
              getRatings(stateManager),
              getDataSaver(stateManager),
              getSkipSameChapter(stateManager),
            ])

            return await [
              App.createDUISelect({
                id: "languages",
                label: "Languages",
                options: MDLanguages.getMDCodeList(),
                labelResolver: async (option_1: string) => MDLanguages.getName(option_1),
                value: App.createDUIBinding({ get: async () => values[0] }),
                allowsMultiselect: true,
              }),

              App.createDUISelect({
                id: "ratings",
                label: "Content Rating",
                options: MDRatings.getEnumList(),
                labelResolver: async (option_3: string) => MDRatings.getName(option_3),
                value: App.createDUIBinding({ get: async () => values[1] }),
                allowsMultiselect: true,
              }),

              App.createDUISwitch({
                id: "data_saver",
                label: "Data Saver",
                value: App.createDUIBinding({ get: async () => values[2] }),
              }),

              App.createDUISwitch({
                id: "skip_same_chapter",
                label: "Skip Same Chapter",
                value: App.createDUIBinding({ get: async () => values[3] }),
              }),
            ]
          },
        }),
      ],
    }),
  })
}

export async function parseAccessToken(accessToken: string | undefined) {
  if (!accessToken) return undefined
  const tokenBodyBase64 = accessToken.split(".")[1]
  if (!tokenBodyBase64) return undefined
  const tokenBodyJSON = Buffer.from(tokenBodyBase64, "base64").toString("ascii")
  return JSON.parse(tokenBodyJSON)
}

const authRequestCache: Record<string, Promise<any | undefined>> = {}

export function authEndpointRequest(
  requestManager: RequestManager,
  endpoint: "login" | "refresh" | "logout",
  payload: any,
) {
  if (authRequestCache[endpoint] == undefined) {
    console.log("started request")
    authRequestCache[endpoint] = _authEndpointRequest(requestManager, endpoint, payload).finally(() => {
      delete authRequestCache[endpoint]
      console.log("completed request")
    })
  }

  return authRequestCache[endpoint]!
}

async function _authEndpointRequest(
  requestManager: RequestManager,
  endpoint: "login" | "refresh" | "logout",
  payload: any,
) {
  const response = await requestManager.schedule(
    App.createRequest({
      method: "POST",
      url: "https://api.mangadex.org/auth/" + endpoint,
      headers: {
        "content-type": "application/json",
      },
      data: payload,
    }),
    1,
  )
  if (response.status > 399) {
    throw new Error("Request failed with error code:" + response.status)
  }
  const jsonData = typeof response.data === "string" ? JSON.parse(response.data) : response.data
  if (jsonData.result != "ok") {
    throw new Error("Request failed with errors: " + jsonData.errors.map((x: any) => `[${x.title}]: ${x.detail}`))
  }
  return jsonData
}

export async function accountSettings(stateManager: SourceStateManager, requestManager: RequestManager) {
  const accessToken = await getAccessToken(stateManager)
  if (!accessToken) {
    return App.createDUIOAuthButton({
      id: "mdex_oauth",
      label: "Login with MangaDex",
      authorizeEndpoint: "https://auth.mangadex.dev/realms/mangadex/protocol/openid-connect/auth",
      clientId: "thirdparty-oauth-client",
      redirectUri: "paperback://mangadex-login",
      responseType: {
        type: "pkce",
        pkceCodeLength: 64,
        pkceCodeMethod: "S256",
        formEncodeGrant: true,
        tokenEndpoint: "https://auth.mangadex.dev/realms/mangadex/protocol/openid-connect/token",
      },
      async successHandler(accessToken, refreshToken?) {
        await saveAccessToken(stateManager, accessToken, refreshToken)
      },
      scopes: ["email", "openid"],
    })
  }

  return App.createDUINavigationButton({
    id: "account_settings",
    label: "Session Info",
    form: App.createDUIForm({
      onSubmit: async () => undefined,

      sections: async () => {
        const accessToken = await getAccessToken(stateManager)
        if (!accessToken) {
          return [
            App.createDUISection({
              isHidden: false,
              id: "not_logged_in_section",
              rows: async () => [
                App.createDUILabel({
                  id: "not_logged_in",
                  label: "Not Logged In",
                }),
              ],
            }),
          ]
        }

        return [
          App.createDUISection({
            isHidden: false,
            id: "introspect",
            rows: async () => {
              return Object.keys(accessToken.tokenBody).map((key) => {
                const value = accessToken.tokenBody[key]
                return App.createDUIMultilineLabel({
                  id: key,
                  label: key,
                  value: Array.isArray(value) ? value.join("\n") : `${value}`,
                })
              })
            },
          }),

          App.createDUISection({
            isHidden: false,
            id: "refresh_button_section",
            rows: async () => [
              App.createDUIButton({
                id: "refresh_token_button",
                label: "Refresh Token",
                onTap: async () => {
                  const response = await authEndpointRequest(requestManager, "refresh", {
                    token: accessToken.refreshToken,
                  })
                  await saveAccessToken(stateManager, response.token.session, response.token.refresh)
                },
              }),
              App.createDUIButton({
                id: "logout_button",
                label: "Logout",
                onTap: async () => {
                  await authEndpointRequest(requestManager, "logout", {})
                  await saveAccessToken(stateManager, undefined, undefined)
                },
              }),
            ],
          }),
        ]
      },
    }),
  })
}

export function thumbnailSettings(stateManager: SourceStateManager) {
  return App.createDUINavigationButton({
    id: "thumbnail_settings",
    label: "Thumbnail Quality",
    form: App.createDUIForm({
      onSubmit: async (values: any) => {
        await Promise.all([
          stateManager.store("homepage_thumbnail", values.homepage_thumbnail[0]),
          stateManager.store("search_thumbnail", values.search_thumbnail[0]),
          stateManager.store("manga_thumbnail", values.manga_thumbnail[0]),
        ])
      },

      sections: async () => [
        App.createDUISection({
          isHidden: false,
          id: "thumbnail",
          rows: async () => {
            const values_1 = await Promise.all([
              getHomepageThumbnail(stateManager),
              getSearchThumbnail(stateManager),
              getMangaThumbnail(stateManager),
            ])

            return [
              App.createDUISelect({
                id: "homepage_thumbnail",
                label: "Homepage Thumbnail",
                options: MDImageQuality.getEnumList(),
                labelResolver: async (option_1) => MDImageQuality.getName(option_1),
                value: App.createDUIBinding({
                  get: async () => [values_1[0]],
                }),
                allowsMultiselect: false,
              }),

              App.createDUISelect({
                id: "search_thumbnail",
                label: "Search Thumbnail",
                options: MDImageQuality.getEnumList(),
                labelResolver: async (option_3) => MDImageQuality.getName(option_3),
                value: App.createDUIBinding({
                  get: async () => [values_1[1]],
                }),
                allowsMultiselect: false,
              }),

              App.createDUISelect({
                id: "manga_thumbnail",
                label: "Manga Thumbnail",
                options: MDImageQuality.getEnumList(),
                labelResolver: async (option_5) => MDImageQuality.getName(option_5),
                value: App.createDUIBinding({
                  get: async () => [values_1[2]],
                }),
                allowsMultiselect: false,
              }),
            ]
          },
        }),
      ],
    }),
  })
}

export function resetSettings(stateManager: SourceStateManager) {
  return App.createDUIButton({
    id: "reset",
    label: "Reset to Default",
    onTap: async () => {
      await Promise.all([
        stateManager.store("languages", null),
        stateManager.store("ratings", null),
        stateManager.store("data_saver", null),
        stateManager.store("skip_same_chapter", null),
        stateManager.store("homepage_thumbnail", null),
        stateManager.store("search_thumbnail", null),
        stateManager.store("manga_thumbnail", null),
        stateManager.store("recommendedIds", null),
        stateManager.store("enabled_homepage_sections", null),
        stateManager.store("enabled_recommendations", null),
        stateManager.store("amount_of_recommendations", null),
      ])
    },
  })
}

export function homepageSettings(stateManager: SourceStateManager) {
  return App.createDUINavigationButton({
    id: "homepage_settings",
    label: "Homepage Settings",
    form: App.createDUIForm({
      onSubmit: async (values: any) => {
        await Promise.all([
          stateManager.store("enabled_homepage_sections", values.enabled_homepage_sections),
          // The `as boolean` seems required to prevent Paperback from throwing
          // `Invalid type for key value; expected `Bool` got `Optional<JSValue>``
          stateManager.store("enabled_recommendations", values.enabled_recommendations as boolean),
          stateManager.store("amount_of_recommendations", values.amount_of_recommendations),
          sliceRecommendedIds(stateManager, values.amount_of_recommendations),
        ])
      },

      sections: async () => [
        App.createDUISection({
          isHidden: false,
          id: "homepage_sections_section",
          //footer: 'Which sections should be shown on the homepage',
          rows: async () => {
            const value = await getEnabledHomePageSections(stateManager)

            return [
              App.createDUISelect({
                id: "enabled_homepage_sections",
                label: "Homepage sections",
                options: MDHomepageSections.getEnumList(),
                allowsMultiselect: true,
                labelResolver: async (option_1) => MDHomepageSections.getName(option_1),
                value: App.createDUIBinding({
                  get: async () => value ?? [],
                }),
              }),
            ]
          },
        }),

        App.createDUISection({
          isHidden: false,
          id: "recommendations_settings_section",
          header: "Titles recommendations",
          footer: "Recommendation are based on recently read chapters and shown on the homepage",
          rows: async () => {
            const values_1 = await Promise.all([
              getEnabledRecommendations(stateManager),
              getAmountRecommendations(stateManager),
            ])

            return [
              App.createDUISwitch({
                id: "enabled_recommendations",
                label: "Enable recommendations",
                value: App.createDUIBinding({
                  get: async () => values_1[0] ?? false,
                }),
              }),

              App.createDUIStepper({
                id: "amount_of_recommendations",
                label: "Amount of recommendation",
                min: 1,
                max: 15,
                step: 1,
                value: App.createDUIBinding({
                  get: async () => values_1[1] ?? 5,
                }),
              }),

              App.createDUIButton({
                id: "reset_recommended_ids",
                label: "Reset recommended titles",
                onTap: async () => {
                  await stateManager.store("recommendedIds", null)
                },
              }),
            ]
          },
        }),
      ],
    }),
  })
}
