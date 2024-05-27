(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Sources = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeColor = void 0;
var BadgeColor;
(function (BadgeColor) {
    BadgeColor["BLUE"] = "default";
    BadgeColor["GREEN"] = "success";
    BadgeColor["GREY"] = "info";
    BadgeColor["YELLOW"] = "warning";
    BadgeColor["RED"] = "danger";
})(BadgeColor = exports.BadgeColor || (exports.BadgeColor = {}));

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeSectionType = void 0;
var HomeSectionType;
(function (HomeSectionType) {
    HomeSectionType["singleRowNormal"] = "singleRowNormal";
    HomeSectionType["singleRowLarge"] = "singleRowLarge";
    HomeSectionType["doubleRow"] = "doubleRow";
    HomeSectionType["featured"] = "featured";
})(HomeSectionType = exports.HomeSectionType || (exports.HomeSectionType = {}));

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],5:[function(require,module,exports){
"use strict";
/**
 * Request objects hold information for a particular source (see sources for example)
 * This allows us to to use a generic api to make the calls against any source
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlEncodeObject = exports.convertTime = exports.Source = void 0;
/**
* @deprecated Use {@link PaperbackExtensionBase}
*/
class Source {
    constructor(cheerio) {
        this.cheerio = cheerio;
    }
    /**
     * @deprecated use {@link Source.getSearchResults getSearchResults} instead
     */
    searchRequest(query, metadata) {
        return this.getSearchResults(query, metadata);
    }
    /**
     * @deprecated use {@link Source.getSearchTags} instead
     */
    async getTags() {
        // @ts-ignore
        return this.getSearchTags?.();
    }
}
exports.Source = Source;
// Many sites use '[x] time ago' - Figured it would be good to handle these cases in general
function convertTime(timeAgo) {
    let time;
    let trimmed = Number((/\d*/.exec(timeAgo) ?? [])[0]);
    trimmed = (trimmed == 0 && timeAgo.includes('a')) ? 1 : trimmed;
    if (timeAgo.includes('minutes')) {
        time = new Date(Date.now() - trimmed * 60000);
    }
    else if (timeAgo.includes('hours')) {
        time = new Date(Date.now() - trimmed * 3600000);
    }
    else if (timeAgo.includes('days')) {
        time = new Date(Date.now() - trimmed * 86400000);
    }
    else if (timeAgo.includes('year') || timeAgo.includes('years')) {
        time = new Date(Date.now() - trimmed * 31556952000);
    }
    else {
        time = new Date(Date.now());
    }
    return time;
}
exports.convertTime = convertTime;
/**
 * When a function requires a POST body, it always should be defined as a JsonObject
 * and then passed through this function to ensure that it's encoded properly.
 * @param obj
 */
function urlEncodeObject(obj) {
    let ret = {};
    for (const entry of Object.entries(obj)) {
        ret[encodeURIComponent(entry[0])] = encodeURIComponent(entry[1]);
    }
    return ret;
}
exports.urlEncodeObject = urlEncodeObject;

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentRating = exports.SourceIntents = void 0;
var SourceIntents;
(function (SourceIntents) {
    SourceIntents[SourceIntents["MANGA_CHAPTERS"] = 1] = "MANGA_CHAPTERS";
    SourceIntents[SourceIntents["MANGA_TRACKING"] = 2] = "MANGA_TRACKING";
    SourceIntents[SourceIntents["HOMEPAGE_SECTIONS"] = 4] = "HOMEPAGE_SECTIONS";
    SourceIntents[SourceIntents["COLLECTION_MANAGEMENT"] = 8] = "COLLECTION_MANAGEMENT";
    SourceIntents[SourceIntents["CLOUDFLARE_BYPASS_REQUIRED"] = 16] = "CLOUDFLARE_BYPASS_REQUIRED";
    SourceIntents[SourceIntents["SETTINGS_UI"] = 32] = "SETTINGS_UI";
})(SourceIntents = exports.SourceIntents || (exports.SourceIntents = {}));
/**
 * A content rating to be attributed to each source.
 */
var ContentRating;
(function (ContentRating) {
    ContentRating["EVERYONE"] = "EVERYONE";
    ContentRating["MATURE"] = "MATURE";
    ContentRating["ADULT"] = "ADULT";
})(ContentRating = exports.ContentRating || (exports.ContentRating = {}));

},{}],7:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Source"), exports);
__exportStar(require("./ByteArray"), exports);
__exportStar(require("./Badge"), exports);
__exportStar(require("./interfaces"), exports);
__exportStar(require("./SourceInfo"), exports);
__exportStar(require("./HomeSectionType"), exports);
__exportStar(require("./PaperbackExtensionBase"), exports);

},{"./Badge":1,"./ByteArray":2,"./HomeSectionType":3,"./PaperbackExtensionBase":4,"./Source":5,"./SourceInfo":6,"./interfaces":15}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],15:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./ChapterProviding"), exports);
__exportStar(require("./CloudflareBypassRequestProviding"), exports);
__exportStar(require("./HomePageSectionsProviding"), exports);
__exportStar(require("./MangaProgressProviding"), exports);
__exportStar(require("./MangaProviding"), exports);
__exportStar(require("./RequestManagerProviding"), exports);
__exportStar(require("./SearchResultsProviding"), exports);

},{"./ChapterProviding":8,"./CloudflareBypassRequestProviding":9,"./HomePageSectionsProviding":10,"./MangaProgressProviding":11,"./MangaProviding":12,"./RequestManagerProviding":13,"./SearchResultsProviding":14}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],33:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],34:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],35:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],36:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],37:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],40:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],41:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],43:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],44:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],45:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],46:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],47:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],48:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],49:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],50:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],51:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],52:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],53:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],54:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],55:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],56:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],57:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],58:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],59:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],60:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./DynamicUI/Exports/DUIBinding"), exports);
__exportStar(require("./DynamicUI/Exports/DUIForm"), exports);
__exportStar(require("./DynamicUI/Exports/DUIFormRow"), exports);
__exportStar(require("./DynamicUI/Exports/DUISection"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIButton"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIHeader"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIInputField"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUILabel"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUILink"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIMultilineLabel"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUINavigationButton"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIOAuthButton"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUISecureInputField"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUISelect"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIStepper"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUISwitch"), exports);
__exportStar(require("./Exports/ChapterDetails"), exports);
__exportStar(require("./Exports/Chapter"), exports);
__exportStar(require("./Exports/Cookie"), exports);
__exportStar(require("./Exports/HomeSection"), exports);
__exportStar(require("./Exports/IconText"), exports);
__exportStar(require("./Exports/MangaInfo"), exports);
__exportStar(require("./Exports/MangaProgress"), exports);
__exportStar(require("./Exports/PartialSourceManga"), exports);
__exportStar(require("./Exports/MangaUpdates"), exports);
__exportStar(require("./Exports/PBCanvas"), exports);
__exportStar(require("./Exports/PBImage"), exports);
__exportStar(require("./Exports/PagedResults"), exports);
__exportStar(require("./Exports/RawData"), exports);
__exportStar(require("./Exports/Request"), exports);
__exportStar(require("./Exports/SourceInterceptor"), exports);
__exportStar(require("./Exports/RequestManager"), exports);
__exportStar(require("./Exports/Response"), exports);
__exportStar(require("./Exports/SearchField"), exports);
__exportStar(require("./Exports/SearchRequest"), exports);
__exportStar(require("./Exports/SourceCookieStore"), exports);
__exportStar(require("./Exports/SourceManga"), exports);
__exportStar(require("./Exports/SecureStateManager"), exports);
__exportStar(require("./Exports/SourceStateManager"), exports);
__exportStar(require("./Exports/Tag"), exports);
__exportStar(require("./Exports/TagSection"), exports);
__exportStar(require("./Exports/TrackedMangaChapterReadAction"), exports);
__exportStar(require("./Exports/TrackerActionQueue"), exports);

},{"./DynamicUI/Exports/DUIBinding":17,"./DynamicUI/Exports/DUIForm":18,"./DynamicUI/Exports/DUIFormRow":19,"./DynamicUI/Exports/DUISection":20,"./DynamicUI/Rows/Exports/DUIButton":21,"./DynamicUI/Rows/Exports/DUIHeader":22,"./DynamicUI/Rows/Exports/DUIInputField":23,"./DynamicUI/Rows/Exports/DUILabel":24,"./DynamicUI/Rows/Exports/DUILink":25,"./DynamicUI/Rows/Exports/DUIMultilineLabel":26,"./DynamicUI/Rows/Exports/DUINavigationButton":27,"./DynamicUI/Rows/Exports/DUIOAuthButton":28,"./DynamicUI/Rows/Exports/DUISecureInputField":29,"./DynamicUI/Rows/Exports/DUISelect":30,"./DynamicUI/Rows/Exports/DUIStepper":31,"./DynamicUI/Rows/Exports/DUISwitch":32,"./Exports/Chapter":33,"./Exports/ChapterDetails":34,"./Exports/Cookie":35,"./Exports/HomeSection":36,"./Exports/IconText":37,"./Exports/MangaInfo":38,"./Exports/MangaProgress":39,"./Exports/MangaUpdates":40,"./Exports/PBCanvas":41,"./Exports/PBImage":42,"./Exports/PagedResults":43,"./Exports/PartialSourceManga":44,"./Exports/RawData":45,"./Exports/Request":46,"./Exports/RequestManager":47,"./Exports/Response":48,"./Exports/SearchField":49,"./Exports/SearchRequest":50,"./Exports/SecureStateManager":51,"./Exports/SourceCookieStore":52,"./Exports/SourceInterceptor":53,"./Exports/SourceManga":54,"./Exports/SourceStateManager":55,"./Exports/Tag":56,"./Exports/TagSection":57,"./Exports/TrackedMangaChapterReadAction":58,"./Exports/TrackerActionQueue":59}],61:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./generated/_exports"), exports);
__exportStar(require("./base/index"), exports);
__exportStar(require("./compat/DyamicUI"), exports);

},{"./base/index":7,"./compat/DyamicUI":16,"./generated/_exports":60}],62:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MangaPlus = exports.MangaPlusInfo = void 0;
const types_1 = require("@paperback/types");
const MangaPlusHelper_1 = require("./MangaPlusHelper");
const MangaPlusSettings_1 = require("./MangaPlusSettings");
const BASE_URL = 'https://mangaplus.shueisha.co.jp';
const API_URL = 'https://jumpg-webapi.tokyo-cdn.com/api';
const langCode = MangaPlusHelper_1.Language.ENGLISH;
exports.MangaPlusInfo = {
    version: '2.0.2',
    name: 'MangaPlus',
    icon: 'icon.png',
    author: 'Rinto-kun',
    authorWebsite: 'https://github.com/Rinto-kun',
    description: 'Extension that pulls manga from Manga+ by Shueisha',
    contentRating: types_1.ContentRating.EVERYONE,
    websiteBaseURL: BASE_URL,
    sourceTags: [],
    intents: types_1.SourceIntents.MANGA_CHAPTERS | types_1.SourceIntents.HOMEPAGE_SECTIONS | types_1.SourceIntents.CLOUDFLARE_BYPASS_REQUIRED | types_1.SourceIntents.SETTINGS_UI
};
class MangaPlus {
    constructor() {
        this.stateManager = App.createSourceStateManager();
        this.requestManager = App.createRequestManager({
            requestsPerSecond: 10,
            requestTimeout: 20000,
            interceptor: {
                interceptRequest: async (request) => {
                    request.headers = {
                        ...(request.headers ?? {}),
                        ...{
                            'Referer': `${BASE_URL}/`,
                            'user-agent': await this.requestManager.getDefaultUserAgent()
                        }
                    };
                    return request;
                },
                interceptResponse: async (response) => {
                    if (!response.request.url.includes('encryptionKey') && response.headers['Content-Type'] !== 'image/jpeg') {
                        return response;
                    }
                    if (response.request.url.includes('title_thumbnail_portrait_list')) {
                        return response;
                    }
                    const encryptionKey = response.request.url.substring(response.request.url.lastIndexOf('#') + 1) ?? '';
                    // @ts-ignore
                    response.rawData = App.createRawData(this.decodeXoRCipher(App.createByteArray(response.rawData ?? new Uint8Array()), encryptionKey));
                    return response;
                }
            }
        });
    }
    async getSourceMenu() {
        return App.createDUISection({
            id: 'main',
            header: 'Source Settings',
            rows: async () => {
                return [
                    (0, MangaPlusSettings_1.contentSettings)(this.stateManager),
                    (0, MangaPlusSettings_1.resetSettings)(this.stateManager)
                ];
            },
            isHidden: false
        });
    }
    getMangaShareUrl(mangaId) { return `${BASE_URL}/titles/${mangaId}`; }
    async getMangaDetails(mangaId) {
        const request = App.createRequest({
            url: `${API_URL}/title_detailV3?title_id=${mangaId}&format=json`,
            method: 'GET'
        });
        const response = await this.requestManager.schedule(request, 1);
        const result = MangaPlusHelper_1.TitleDetailView.fromJson(response.data);
        return result.toSourceManga();
    }
    async getChapters(mangaId) {
        const request = App.createRequest({
            url: `${API_URL}/title_detailV3?title_id=${mangaId}&format=json`,
            method: 'GET'
        });
        const response = await this.requestManager.schedule(request, 1);
        const result = MangaPlusHelper_1.TitleDetailView.fromJson(response.data);
        return [...(result.firstChapterList ?? []), ...(result.lastChapterList ?? [])].reverse().filter(chapter => !chapter.isExpired).map(chapter => chapter.toSChapter());
    }
    async getChapterDetails(mangaId, chapterId) {
        const request = App.createRequest({
            url: `${API_URL}/manga_viewer?chapter_id=${chapterId}&split=${(await this.stateManager.retrieve('split_images')) ?? 'no'}&img_quality=${(await this.stateManager.retrieve('image_resolution')) ?? 'high'}&format=json`,
            method: 'GET'
        });
        const response = await this.requestManager.schedule(request, 1);
        const result = JSON.parse(response.data);
        if (result.success === undefined) {
            throw new Error(result.error?.langPopup(MangaPlusHelper_1.Language.ENGLISH)?.body ?? 'Unknown error');
        }
        const pages = result.success.mangaViewer?.pages
            .map(page => page.mangaPage)
            .filter(page => page)
            .map((page) => page?.encryptionKey ? `${page?.imageUrl}#${page?.encryptionKey}` : '');
        return App.createChapterDetails({
            id: chapterId,
            mangaId: mangaId,
            pages: pages ?? []
        });
    }
    async getFeaturedTitles() {
        const request = App.createRequest({
            url: `${API_URL}/featured?lang=eng&format=json`,
            method: 'GET'
        });
        const response = await this.requestManager.schedule(request, 1);
        const result = JSON.parse(response.data);
        if (result.success === undefined) {
            throw new Error(result.error?.langPopup(MangaPlusHelper_1.Language.ENGLISH)?.body ?? 'Unknown error');
        }
        const languages = await (0, MangaPlusSettings_1.getLanguages)(this.stateManager);
        const results = result.success?.featuredTitlesView?.contents.find(x => x.titleList && x.titleList.listName == 'WEEKLY SHONEN JUMP')?.titleList.featuredTitles
            .filter((title) => languages.includes(title.language ?? MangaPlusHelper_1.Language.ENGLISH));
        const titles = [];
        const collectedIds = [];
        for (const item of results ?? []) {
            const mangaId = item.titleId.toString();
            const title = item.name;
            const author = item.author;
            const image = item.portraitImageUrl;
            if (!mangaId || !title || collectedIds.includes(mangaId))
                continue;
            titles.push(App.createPartialSourceManga({
                mangaId: mangaId,
                title: title,
                subtitle: author,
                image: image
            }));
        }
        return titles;
    }
    async getPopularTitles() {
        const request = App.createRequest({
            url: `${API_URL}/title_list/ranking?format=json`,
            method: 'GET'
        });
        const response = await this.requestManager.schedule(request, 1);
        const result = JSON.parse(response.data);
        if (result.success === undefined) {
            throw new Error(result.error?.langPopup(MangaPlusHelper_1.Language.ENGLISH)?.body ?? 'Unknown error');
        }
        const languages = await (0, MangaPlusSettings_1.getLanguages)(this.stateManager);
        const results = result.success?.titleRankingView?.titles
            .filter((title) => languages.includes(title.language ?? MangaPlusHelper_1.Language.ENGLISH));
        const titles = [];
        const collectedIds = [];
        for (const item of results ?? []) {
            const mangaId = item.titleId.toString();
            const title = item.name;
            const author = item.author;
            const image = item.portraitImageUrl;
            if (!mangaId || !title || collectedIds.includes(mangaId))
                continue;
            titles.push(App.createPartialSourceManga({
                mangaId: mangaId,
                title: title,
                subtitle: author,
                image: image
            }));
        }
        return titles;
    }
    async getLatestUpdates() {
        function latestUpdatesRequest() {
            return App.createRequest({
                url: `${API_URL}/web/web_homeV4?lang=eng&format=json`,
                method: 'GET'
            });
        }
        const request = latestUpdatesRequest();
        const response = await this.requestManager.schedule(request, 1);
        const result = JSON.parse(response.data);
        if (result.success === undefined) {
            throw new Error(result.error?.langPopup(langCode)?.body ?? 'Unknown error');
        }
        const languages = await (0, MangaPlusSettings_1.getLanguages)(this.stateManager);
        const results = result.success.webHomeViewV4?.groups
            .flatMap(ex => ex.titleGroups)
            .flatMap(ex => ex.titles)
            .map(title => title.title)
            .filter(title => languages.includes(title.language ?? MangaPlusHelper_1.Language.ENGLISH));
        const titles = [];
        const collectedIds = [];
        for (const item of results ?? []) {
            const mangaId = item.titleId.toString();
            const title = item.name;
            const author = item.author;
            const image = item.portraitImageUrl;
            if (!mangaId || !title || collectedIds.includes(mangaId))
                continue;
            titles.push(App.createPartialSourceManga({
                mangaId: mangaId,
                title: title,
                subtitle: author,
                image: image
            }));
        }
        return titles;
    }
    async getHomePageSections(sectionCallback) {
        const featuredSection = App.createHomeSection({
            id: 'featured',
            title: 'Deatured',
            containsMoreItems: true,
            type: types_1.HomeSectionType.featured,
            items: await this.getFeaturedTitles()
        });
        sectionCallback(featuredSection);
        const popularSection = App.createHomeSection({
            id: 'popular',
            title: 'Popular',
            containsMoreItems: true,
            type: types_1.HomeSectionType.singleRowNormal,
            items: await this.getPopularTitles()
        });
        sectionCallback(popularSection);
        const latestUpdatesSection = App.createHomeSection({
            id: 'latest_updates',
            title: 'Latest Updates',
            containsMoreItems: true,
            type: types_1.HomeSectionType.singleRowNormal,
            items: await this.getLatestUpdates()
        });
        sectionCallback(latestUpdatesSection);
    }
    async getViewMoreItems(homepageSectionId, metadata) {
        let items = [];
        switch (homepageSectionId) {
            case 'featured':
                items = await this.getFeaturedTitles();
                break;
            case 'popular':
                items = await this.getPopularTitles();
                break;
            case 'latest_updates':
                items = await this.getLatestUpdates();
                break;
            default:
                throw new Error(`Invalid homeSectionId | ${homepageSectionId}`);
        }
        return App.createPagedResults({
            results: items,
            metadata
        });
    }
    async getSearchResults(query, metadata) {
        const title = query.title ?? '';
        const request = App.createRequest({
            url: `${API_URL}/title_list/allV2?format=JSON&${title ? 'filter=' + encodeURI(title) + '&' : ''}format=json`,
            method: 'GET'
        });
        const response = await this.requestManager.schedule(request, 1);
        const result = JSON.parse(response.data);
        if (result.success === undefined) {
            throw new Error(result.error?.langPopup(MangaPlusHelper_1.Language.ENGLISH)?.body ?? 'Unknown error');
        }
        const ltitle = query.title?.toLowerCase() ?? '';
        const languages = await (0, MangaPlusSettings_1.getLanguages)(this.stateManager);
        const results = result.success?.allTitlesViewV2?.AllTitlesGroup.flatMap((group) => group.titles)
            .filter((title) => languages.includes(title.language ?? MangaPlusHelper_1.Language.ENGLISH))
            .filter((title) => title.author?.toLowerCase().includes(ltitle) || title.name.toLowerCase().includes(ltitle));
        const titles = [];
        const collectedIds = [];
        for (const item of results ?? []) {
            const mangaId = item.titleId.toString();
            const title = item.name;
            const author = item.author;
            const image = item.portraitImageUrl;
            if (!mangaId || !title || collectedIds.includes(mangaId))
                continue;
            titles.push(App.createPartialSourceManga({
                mangaId: mangaId,
                title: title,
                subtitle: author,
                image: image
            }));
        }
        return App.createPagedResults({
            results: titles
        });
    }
    // Utility
    decodeXoRCipher(buffer, encryptionKey) {
        const key = encryptionKey.match(/../g)?.map((byte) => parseInt(byte, 16)) ?? [];
        return buffer.map((byte, index) => byte ^ (key[index % key.length] ?? 0));
    }
}
exports.MangaPlus = MangaPlus;

},{"./MangaPlusHelper":63,"./MangaPlusSettings":64,"@paperback/types":61}],63:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitleDetailView = exports.Title = exports.Language = void 0;
class ErrorResult {
    constructor() {
        this.popups = [];
    }
    langPopup(lang) {
        return this.popups.find(popup => popup.language === lang) || null;
    }
}
class Popup {
    constructor(subject, body, language) {
        this.subject = subject;
        this.body = body;
        if (language)
            this.language = language;
        else
            this.language = Language.ENGLISH;
    }
}
var Language;
(function (Language) {
    Language["ENGLISH"] = "ENGLISH";
    Language["SPANISH"] = "SPANISH";
    Language["FRENCH"] = "FRENCH";
    Language["INDONESIAN"] = "INDONESIAN";
    Language["PORTUGUESE_BR"] = "PORTUGUESE_BR";
    Language["RUSSIAN"] = "RUSSIAN";
    Language["THAI"] = "THAI";
    Language["VIETNAMESE"] = "VIETNAMESE";
})(Language = exports.Language || (exports.Language = {}));
class Title {
    constructor(titleId, name, portraitImageUrl, landscapeImageUrl, author) {
        this.viewCount = 0;
        this.language = Language.ENGLISH;
        this.titleId = titleId;
        this.name = name;
        this.portraitImageUrl = portraitImageUrl;
        this.landscapeImageUrl = landscapeImageUrl;
        if (author)
            this.author = author;
    }
}
exports.Title = Title;
class TitleDetailView {
    constructor() {
        this.nextTimeStamp = 0;
        this.viewingPeriodDescription = '';
        this.nonAppearanceInfo = '';
        this.chapterListGroup = [];
        this.firstChapterList = [];
        this.lastChapterList = [];
        this.isSimulReleased = false;
        this.chaptersDescending = true;
    }
    get isWebtoon() {
        return this.firstChapterList.every(chapter => chapter.isVerticalOnly) && this.lastChapterList.every(chapter => chapter.isVerticalOnly);
    }
    get isOneShot() {
        return this.chapterCount == 1 && this.firstChapterList.at(0)?.name?.localeCompare('one-shot', undefined, { 'sensitivity': 'base' }) == 0;
    }
    get chapterCount() {
        return this.firstChapterList?.length + this.lastChapterList?.length;
    }
    get isReEdition() {
        return this.viewingPeriodDescription?.search(TitleDetailView.REEDITION_REGEX) != 0;
    }
    get isCompleted() {
        return this.nonAppearanceInfo?.search(TitleDetailView.COMPLETED_REGEX) != 0 || this.isOneShot;
    }
    get isOnHiatus() {
        return this.nonAppearanceInfo?.search(TitleDetailView.HIATUS_REGEX) != 0;
    }
    get genres() {
        const genres = [];
        if (this.isSimulReleased && !this.isReEdition && !this.isOneShot)
            genres.push('Simulrelease');
        if (this.isOneShot)
            genres.push('One-shot');
        if (this.isReEdition)
            genres.push('Re-edition');
        if (this.isWebtoon)
            genres.push('Webtoon');
        return genres;
    }
    static fromJson(str) {
        const bopp = JSON.parse(str);
        if (bopp.success?.titleDetailView === undefined)
            throw Error('Cannot find manga');
        const json = bopp.success.titleDetailView;
        const obj = new TitleDetailView();
        if (json.title === undefined) {
            throw Error('Cannot find title');
        }
        const title = json.title;
        obj.title = new Title(title.titleId, title.name, title.portraitImageUrl, title.landscapeImageUrl, title.author);
        obj.titleImageUrl = json.titleImageUrl;
        obj.overview = json.overview;
        obj.backgroundImageUrl = json.backgroundImageUrl;
        obj.nextTimeStamp = json.nextTimeStamp;
        obj.viewingPeriodDescription = json.viewingPeriodDescription;
        obj.nonAppearanceInfo = json.nonAppearanceInfo;
        obj.firstChapterList = json.chapterListGroup?.flatMap(a => a.firstChapterList ?? []).map(chapter => Object.assign(new Chapter(1, 1, '', 1, 1), chapter));
        obj.lastChapterList = json.chapterListGroup?.flatMap(a => a.lastChapterList ?? []).map(chapter => Object.assign(new Chapter(1, 1, '', 1, 1), chapter));
        return obj;
    }
    toSourceManga() {
        const authors = this.title?.author?.split('/');
        return App.createSourceManga({
            id: this.title?.titleId.toString() ?? '',
            mangaInfo: App.createMangaInfo({
                image: this.title?.portraitImageUrl ?? '',
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
        });
    }
}
exports.TitleDetailView = TitleDetailView;
TitleDetailView.COMPLETED_REGEX = /completado|complete|completo/;
TitleDetailView.HIATUS_REGEX = /on a hiatus/i;
TitleDetailView.REEDITION_REGEX = /revival|remasterizada/;
class Chapter {
    constructor(titleId, chapterId, name, startTimeStamp, endTimeStamp) {
        this.isVerticalOnly = false;
        this.titleId = titleId;
        this.chapterId = chapterId;
        this.name = name;
        this.startTimeStamp = startTimeStamp;
        this.endTimeStamp = endTimeStamp;
    }
    get isExpired() {
        return this.subTitle == null;
    }
    toSChapter() {
        const chapNum = parseFloat(this.name.slice(this.name.lastIndexOf('#') + 1));
        return App.createChapter({
            id: this.chapterId.toString(),
            name: this.subTitle ? this.subTitle : '',
            chapNum: isNaN(chapNum) ? 0 : chapNum,
            sortingIndex: isNaN(chapNum) ? -1 : chapNum,
            time: new Date(this.startTimeStamp * 1000)
        });
    }
}

},{}],64:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetSettings = exports.contentSettings = exports.getResolution = exports.getSplitImages = exports.getLanguages = void 0;
const MangaPlusHelper_1 = require("./MangaPlusHelper");
const getLanguages = async (stateManager) => {
    return await stateManager.retrieve('languages') ?? [MangaPlusHelper_1.Language.ENGLISH];
};
exports.getLanguages = getLanguages;
const getSplitImages = async (stateManager) => {
    return await stateManager.retrieve('split_images') ?? 'yes';
};
exports.getSplitImages = getSplitImages;
const getResolution = async (stateManager) => {
    return (await stateManager.retrieve('image_resolution') ?? 'high');
};
exports.getResolution = getResolution;
const contentSettings = (stateManager) => {
    return App.createDUINavigationButton({
        id: 'content_settings',
        label: 'Content Settings',
        form: App.createDUIForm({
            sections: async () => [
                App.createDUISection({
                    isHidden: false,
                    id: 'content',
                    rows: async () => {
                        await Promise.all([
                            (0, exports.getLanguages)(stateManager),
                            (0, exports.getSplitImages)(stateManager),
                            (0, exports.getResolution)(stateManager)
                        ]);
                        return await [
                            App.createDUISelect({
                                id: 'languages',
                                label: 'Languages',
                                options: [MangaPlusHelper_1.Language.ENGLISH, MangaPlusHelper_1.Language.FRENCH, MangaPlusHelper_1.Language.INDONESIAN, MangaPlusHelper_1.Language.PORTUGUESE_BR, MangaPlusHelper_1.Language.RUSSIAN, MangaPlusHelper_1.Language.SPANISH, MangaPlusHelper_1.Language.THAI, MangaPlusHelper_1.Language.VIETNAMESE],
                                labelResolver: async (option) => {
                                    switch (option) {
                                        case MangaPlusHelper_1.Language.ENGLISH:
                                            return 'English';
                                        case MangaPlusHelper_1.Language.SPANISH:
                                            return 'Español';
                                        case MangaPlusHelper_1.Language.FRENCH:
                                            return 'Français';
                                        case MangaPlusHelper_1.Language.INDONESIAN:
                                            return 'Bahasa (IND)';
                                        case MangaPlusHelper_1.Language.PORTUGUESE_BR:
                                            return 'Portugûes (BR)';
                                        case MangaPlusHelper_1.Language.RUSSIAN:
                                            return 'Русский';
                                        case MangaPlusHelper_1.Language.THAI:
                                            return 'ภาษาไทย';
                                        case MangaPlusHelper_1.Language.VIETNAMESE:
                                            return 'Tiếng Việt';
                                        default:
                                            return '';
                                    }
                                },
                                value: App.createDUIBinding({
                                    get: async () => (0, exports.getLanguages)(stateManager),
                                    set: async (value) => { await stateManager.store('languages', value); }
                                }),
                                allowsMultiselect: true
                            }),
                            App.createDUISwitch({
                                id: 'split_images',
                                label: 'Split double pages',
                                value: App.createDUIBinding({
                                    get: async () => await (0, exports.getSplitImages)(stateManager) == 'yes',
                                    set: async (value) => { await stateManager.store('split_images', value ? 'yes' : 'no'); }
                                })
                            }),
                            App.createDUISelect({
                                id: 'image_resolution',
                                label: 'Image resolution',
                                options: ['low', 'high', 'super_high'],
                                value: App.createDUIBinding({
                                    get: async () => [await (0, exports.getResolution)(stateManager)],
                                    set: async (value) => {
                                        await stateManager.store('image_resolution', value[0]);
                                    }
                                }),
                                allowsMultiselect: false,
                                labelResolver: async (option) => {
                                    switch (option) {
                                        case 'low':
                                            return 'Low';
                                        case 'high':
                                            return 'High';
                                        case 'super_high':
                                            return 'Super High';
                                        default:
                                            return '';
                                    }
                                }
                            })
                        ];
                    }
                })
            ]
        })
    });
};
exports.contentSettings = contentSettings;
function resetSettings(stateManager) {
    return App.createDUIButton({
        id: 'reset',
        label: 'Reset to Default',
        onTap: async () => {
            await stateManager.store('languages', [MangaPlusHelper_1.Language.ENGLISH]),
                await stateManager.store('split_images', 'yes'),
                await stateManager.store('image_resolution', 'high');
        }
    });
}
exports.resetSettings = resetSettings;

},{"./MangaPlusHelper":63}]},{},[62])(62)
});
