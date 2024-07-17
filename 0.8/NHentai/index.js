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
exports.NHentai = exports.NHentaiInfo = void 0;
const types_1 = require("@paperback/types");
const NHentaiHelper_1 = require("./NHentaiHelper");
const NHentaiParser_1 = require("./NHentaiParser");
const NHentaiSettings_1 = require("./NHentaiSettings");
const tags_json_1 = require("./tags.json");
const NHENTAI_URL = 'https://nhentai.net';
exports.NHentaiInfo = {
    version: '4.0.7',
    name: 'nhentai',
    icon: 'icon.png',
    author: 'NotMarek & Netsky',
    authorWebsite: 'https://github.com/TheNetsky',
    description: 'Extension which pulls content from nHentai.',
    contentRating: types_1.ContentRating.ADULT,
    websiteBaseURL: NHENTAI_URL,
    intents: types_1.SourceIntents.MANGA_CHAPTERS | types_1.SourceIntents.HOMEPAGE_SECTIONS | types_1.SourceIntents.CLOUDFLARE_BYPASS_REQUIRED | types_1.SourceIntents.SETTINGS_UI,
    sourceTags: [
        {
            text: '18+',
            type: types_1.BadgeColor.YELLOW
        }
    ]
};
class NHentai {
    constructor() {
        this.requestManager = App.createRequestManager({
            requestsPerSecond: 3,
            requestTimeout: 15000,
            interceptor: {
                interceptRequest: async (request) => {
                    request.headers = {
                        ...(request.headers ?? {}),
                        ...{
                            'referer': `${NHENTAI_URL}/`,
                            'user-agent': await this.requestManager.getDefaultUserAgent()
                        }
                    };
                    return request;
                },
                interceptResponse: async (response) => {
                    return response;
                }
            }
        });
        this.stateManager = App.createSourceStateManager();
    }
    // Sourrce Settings
    async getSourceMenu() {
        return Promise.resolve(App.createDUISection({
            id: 'main',
            header: 'Source Settings',
            rows: () => Promise.resolve([
                (0, NHentaiSettings_1.settings)(this.stateManager),
                (0, NHentaiSettings_1.resetSettings)(this.stateManager)
            ]),
            isHidden: false
        }));
    }
    getMangaShareUrl(mangaId) { return `${NHENTAI_URL}/g/${mangaId}`; }
    async getMangaDetails(mangaId) {
        const request = App.createRequest({
            url: `${NHENTAI_URL}/api/gallery/${mangaId}`,
            method: 'GET'
        });
        const response = await this.requestManager.schedule(request, 1);
        this.CloudFlareError(response.status);
        const jsonData = this.parseJson(response);
        return (0, NHentaiParser_1.parseMangaDetails)(jsonData);
    }
    async getChapters(mangaId) {
        const request = App.createRequest({
            url: `${NHENTAI_URL}/api/gallery/${mangaId}`,
            method: 'GET'
        });
        const response = await this.requestManager.schedule(request, 1);
        this.CloudFlareError(response.status);
        const jsonData = this.parseJson(response);
        return [(0, NHentaiParser_1.parseChapters)(jsonData, mangaId)];
    }
    async getChapterDetails(mangaId) {
        const request = App.createRequest({
            url: `${NHENTAI_URL}/api/gallery/${mangaId}`,
            method: 'GET'
        });
        const response = await this.requestManager.schedule(request, 1);
        this.CloudFlareError(response.status);
        const jsonData = this.parseJson(response);
        return (0, NHentaiParser_1.parseChapterDetails)(jsonData, mangaId);
    }
    async getSearchTags() {
        const arrayTags = [];
        for (const tag of tags_json_1.popularTags) {
            const label = tag.label;
            const id = tag.id;
            arrayTags.push({ id: id, label: label });
        }
        const tagSections = [App.createTagSection({ id: '0', label: 'Tags', tags: arrayTags.map(x => App.createTag(x)) })];
        return tagSections;
    }
    async getSearchResults(query, metadata) {
        const page = metadata?.page ?? 1;
        const title = query.title ?? '';
        if (metadata?.stopSearch ?? false) {
            return App.createPagedResults({
                results: [],
                metadata: {
                    stopSearch: true
                }
            });
        }
        // When given number query
        if (/^\d+$/.test(title)) {
            const request = App.createRequest({
                url: `${NHENTAI_URL}/api/gallery/${title}`,
                method: 'GET'
            });
            const response = await this.requestManager.schedule(request, 1);
            this.CloudFlareError(response.status);
            const jsonData = this.parseJson(response);
            return App.createPagedResults({
                results: (0, NHentaiParser_1.parseSearch)({ result: [jsonData], num_pages: 1, per_page: 1 }),
                metadata: {
                    page: page + 1,
                    stopSearch: true
                }
            });
            // Normal search query
        }
        else {
            const q = encodeURIComponent(`${title} ${query?.includedTags?.map((x) => ` +${x.id}`)} `) + await this.generateQuery();
            const request = App.createRequest({
                url: `${NHENTAI_URL}/api/galleries/search?query=${(q)}&page=${page}&sort=${await this.sortOrder(this.stateManager)}`,
                method: 'GET'
            });
            const response = await this.requestManager.schedule(request, 1);
            this.CloudFlareError(response.status);
            const jsonData = this.parseJson(response);
            return App.createPagedResults({
                results: (0, NHentaiParser_1.parseSearch)(jsonData),
                metadata: {
                    page: page + 1
                }
            });
        }
    }
    async getHomePageSections(sectionCallback) {
        const sections = [
            {
                request: App.createRequest({
                    url: `${NHENTAI_URL}/api/galleries/search?query=${await this.generateQuery()}&sort=date`,
                    method: 'GET'
                }),
                sectionID: App.createHomeSection({
                    id: 'date',
                    title: 'New Uploads',
                    containsMoreItems: true,
                    type: types_1.HomeSectionType.singleRowNormal
                })
            },
            {
                request: App.createRequest({
                    url: `${NHENTAI_URL}/api/galleries/search?query=${await this.generateQuery()}&sort=popular-today`,
                    method: 'GET'
                }),
                sectionID: App.createHomeSection({
                    id: 'popular-today',
                    title: 'Popular Today',
                    containsMoreItems: true,
                    type: types_1.HomeSectionType.singleRowNormal
                })
            },
            {
                request: App.createRequest({
                    url: `${NHENTAI_URL}/api/galleries/search?query=${await this.generateQuery()}&sort=popular-week`,
                    method: 'GET'
                }),
                sectionID: App.createHomeSection({
                    id: 'popular-week',
                    title: 'Popular Weekly',
                    containsMoreItems: true,
                    type: types_1.HomeSectionType.singleRowNormal
                })
            }
        ];
        const promises = [];
        for (const section of sections) {
            sectionCallback(section.sectionID);
            promises.push(this.requestManager.schedule(section.request, 1)
                .then(response => {
                this.CloudFlareError(response.status);
                const jsonData = this.parseJson(response);
                if ((0, NHentaiHelper_1.hasNoResults)(jsonData)) {
                    return;
                }
                section.sectionID.items = (0, NHentaiParser_1.parseSearch)(jsonData);
                sectionCallback(section.sectionID);
            }));
        }
        await Promise.all(promises);
    }
    async getViewMoreItems(homepageSectionId, metadata) {
        let page = metadata?.page ?? 1;
        const request = App.createRequest({
            url: `${NHENTAI_URL}/api/galleries/search?query=${await this.generateQuery()}&sort=${homepageSectionId}&page=${page}`,
            method: 'GET'
        });
        const response = await this.requestManager.schedule(request, 1);
        this.CloudFlareError(response.status);
        const jsonData = this.parseJson(response);
        page++;
        return App.createPagedResults({
            results: (0, NHentaiParser_1.parseSearch)(jsonData),
            metadata: {
                page: page
            }
        });
    }
    CloudFlareError(status) {
        if (status == 503 || status == 403) {
            throw new Error(`CLOUDFLARE BYPASS ERROR:\nPlease go to the homepage of <${NHentai.name}> and press the cloud icon.`);
        }
    }
    async getCloudflareBypassRequestAsync() {
        return App.createRequest({
            url: NHENTAI_URL,
            method: 'GET',
            headers: {
                'referer': `${NHENTAI_URL}/`,
                'user-agent': await this.requestManager.getDefaultUserAgent()
            }
        });
    }
    // Utility
    parseJson(response) {
        try {
            return (typeof response.data == 'string') ? JSON.parse(response.data) : response.data;
        }
        catch (error) {
            console.log(JSON.stringify(error));
            throw new Error('JSON PARSE ERROR!\n\nYou\'ve like set too many filters in this source\'s settings, remove some to see results!');
        }
    }
    async generateQuery() {
        const query = await this.language(this.stateManager) + await this.extraArgs(this.stateManager);
        return encodeURIComponent(query);
    }
    async language(stateManager) {
        const lang = await stateManager.retrieve('languages') ?? '';
        if (lang == '') {
            return '""';
        }
        else {
            return `language:${lang}`;
        }
    }
    async sortOrder(stateManager) {
        const sortOrder = await stateManager.retrieve('sort_order') ?? NHentaiHelper_1.NHSortOrders.getDefault();
        return sortOrder;
    }
    async extraArgs(stateManager) {
        const args = await (0, NHentaiSettings_1.getExtraArgs)(stateManager);
        return ` ${args}`;
    }
}
exports.NHentai = NHentai;

},{"./NHentaiHelper":63,"./NHentaiParser":64,"./NHentaiSettings":65,"./tags.json":66,"@paperback/types":61}],63:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasNoResults = exports.NHSortOrders = exports.NHLanguages = void 0;
class NHLanguagesClass {
    constructor() {
        this.Languages = [
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
        ];
        // Sorts the languages based on name
        this.Languages = this.Languages.sort((a, b) => a.name > b.name ? 1 : -1);
    }
    getNHCodeList() {
        return this.Languages.map(Language => Language.NHCode);
    }
    getName(NHCode) {
        return this.Languages.filter(Language => Language.NHCode == NHCode)[0]?.name ?? 'Unknown';
    }
    getLangCode(NHCode) {
        return this.Languages.filter(Language => Language.NHCode == NHCode)[0]?.lang ?? 'Unknown';
    }
    getDefault() {
        return this.Languages.filter(Language => Language.default).map(Language => Language.NHCode);
    }
}
exports.NHLanguages = new NHLanguagesClass();
class NHSortOrderClass {
    constructor() {
        this.sortOrders = [
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
        ];
        // Sorts the sort orders based on name
        this.sortOrders = this.sortOrders.sort((a, b) => a.name > b.name ? 1 : -1);
    }
    containsShortcut(query) {
        for (const SortOrder of this.sortOrders) {
            for (const shortcut of SortOrder.shortcuts) {
                if (query.includes(shortcut)) {
                    return [SortOrder.NHCode, shortcut];
                }
            }
        }
        return ['', ''];
    }
    getNHCodeList() {
        return this.sortOrders.map(SortOrder => SortOrder.NHCode);
    }
    getName(NHCode) {
        return this.sortOrders.filter(SortOrder => SortOrder.NHCode == NHCode)[0]?.name ?? 'Unknown';
    }
    getDefault() {
        return this.sortOrders.filter(SortOrder => SortOrder.default).map(SortOrder => SortOrder.NHCode);
    }
}
exports.NHSortOrders = new NHSortOrderClass();
function hasNoResults(data) {
    console.log(data);
    if (data.error) {
        console.error(data.error);
        return true;
    }
    return false;
}
exports.hasNoResults = hasNoResults;

},{}],64:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSearch = exports.parseChapterDetails = exports.parseChapters = exports.parseMangaDetails = void 0;
const NHentaiHelper_1 = require("./NHentaiHelper");
const parseMangaDetails = (data) => {
    const artist = getArtist(data);
    const tags = [];
    for (const tag of data.tags) {
        if (tag.type !== 'tag')
            continue;
        tags.push(App.createTag({ id: tag.name, label: capitalizeTags(tag.name) }));
    }
    return App.createSourceManga({
        id: data.id.toString(),
        mangaInfo: App.createMangaInfo({
            titles: Object.values(data.title).filter(title => title !== null),
            artist: artist,
            author: artist,
            image: `https://t.nhentai.net/galleries/${data.media_id}/cover.${typeOfImage(data.images.cover)}`,
            status: 'Completed',
            tags: [App.createTagSection({ id: 'tags', label: 'Tags', tags: tags })],
            desc: `Pages: ${data.num_pages}`
        })
    });
};
exports.parseMangaDetails = parseMangaDetails;
const parseChapters = (data, mangaId) => {
    return App.createChapter({
        id: mangaId,
        chapNum: 1,
        name: data.title.english,
        langCode: NHentaiHelper_1.NHLanguages.getLangCode(getLanguage(data)),
        time: new Date(data.upload_date * 1000)
    });
};
exports.parseChapters = parseChapters;
const parseChapterDetails = (data, mangaId) => {
    return App.createChapterDetails({
        id: mangaId,
        mangaId: mangaId,
        pages: data.images.pages.map((image, i) => {
            const type = typeOfImage(image);
            return `https://i.nhentai.net/galleries/${data.media_id}/${i + 1}.${type}`;
        })
    });
};
exports.parseChapterDetails = parseChapterDetails;
const parseSearch = (data) => {
    const tiles = [];
    const collectedIds = [];
    if (!data?.result) {
        console.log(JSON.stringify(data));
        throw new Error('JSON NO RESULT ERROR!\n\nYou\'ve like set too many additional arguments in this source\'s settings, remove some to see results!\nSo search with tags you need to use arguments like shown in the sourc\'s settings!');
    }
    for (const gallery of data.result) {
        if (collectedIds.includes(gallery.id.toString()))
            continue;
        tiles.push(App.createPartialSourceManga({
            image: `https://t.nhentai.net/galleries/${gallery.media_id}/cover.${typeOfImage(gallery.images.cover)}`,
            title: gallery.title.pretty,
            mangaId: gallery.id.toString(),
            subtitle: NHentaiHelper_1.NHLanguages.getName(getLanguage(gallery))
        }));
        collectedIds.push(gallery.id.toString());
    }
    return tiles;
};
exports.parseSearch = parseSearch;
// Utility
function capitalizeTags(str) {
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}
const typeMap = { 'j': 'jpg', 'p': 'png', 'g': 'gif' };
const typeOfImage = (image) => {
    return typeMap[image.t] ?? '';
};
const getArtist = (gallery) => {
    const tags = gallery.tags;
    for (const tag of tags) {
        if (tag.type === 'artist') {
            return tag.name;
        }
    }
    return '';
};
const getLanguage = (gallery) => {
    const tags = gallery.tags;
    for (const tag of tags) {
        if (tag.type === 'language' && tag.name !== 'translated') {
            return tag.name;
        }
    }
    return '';
};

},{"./NHentaiHelper":63}],65:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetSettings = exports.settings = exports.getExtraArgs = exports.getSortOrders = exports.getLanguages = void 0;
const NHentaiHelper_1 = require("./NHentaiHelper");
const getLanguages = async (stateManager) => {
    return await stateManager.retrieve('languages') ?? NHentaiHelper_1.NHLanguages.getDefault();
};
exports.getLanguages = getLanguages;
const getSortOrders = async (stateManager) => {
    return await stateManager.retrieve('sort_order') ?? NHentaiHelper_1.NHSortOrders.getDefault();
};
exports.getSortOrders = getSortOrders;
const getExtraArgs = async (stateManager) => {
    return await stateManager.retrieve('extra_args') ?? '-lolicon -shotacon -yaoi';
};
exports.getExtraArgs = getExtraArgs;
const settings = (stateManager) => {
    return App.createDUINavigationButton({
        id: 'settings',
        label: 'Content Settings',
        form: App.createDUIForm({
            sections: () => {
                return Promise.resolve([
                    App.createDUISection({
                        id: 'content',
                        footer: 'Tags with a space or "-" in them need to be double quoted. \nExample: "love-saber" and -"big breasts"\nTo exclude tags, add a "-" in the front. To include, add a "+".',
                        rows: async () => {
                            await Promise.all([
                                (0, exports.getLanguages)(stateManager),
                                (0, exports.getSortOrders)(stateManager),
                                (0, exports.getExtraArgs)(stateManager)
                            ]);
                            return await [
                                App.createDUISelect({
                                    id: 'languages',
                                    label: 'Languages',
                                    options: NHentaiHelper_1.NHLanguages.getNHCodeList(),
                                    labelResolver: async (option) => NHentaiHelper_1.NHLanguages.getName(option),
                                    value: App.createDUIBinding({
                                        get: () => (0, exports.getLanguages)(stateManager),
                                        set: async (newValue) => await stateManager.store('languages', newValue)
                                    }),
                                    allowsMultiselect: false
                                }),
                                App.createDUISelect({
                                    id: 'sort_order',
                                    label: 'Default search sort order',
                                    options: NHentaiHelper_1.NHSortOrders.getNHCodeList(),
                                    labelResolver: async (option) => NHentaiHelper_1.NHSortOrders.getName(option),
                                    value: App.createDUIBinding({
                                        get: () => (0, exports.getSortOrders)(stateManager),
                                        set: async (newValue) => await stateManager.store('sort_order', newValue)
                                    }),
                                    allowsMultiselect: false
                                }),
                                App.createDUIInputField({
                                    id: 'extra_args',
                                    label: 'Additional arguments',
                                    value: App.createDUIBinding({
                                        get: () => (0, exports.getExtraArgs)(stateManager),
                                        set: async (newValue) => {
                                            await stateManager.store('extra_args', newValue.replaceAll(/‘|’/g, '\'').replaceAll(/“|”/g, '"'));
                                        }
                                    })
                                })
                            ];
                        },
                        isHidden: false
                    })
                ]);
            }
        })
    });
};
exports.settings = settings;
const resetSettings = (stateManager) => {
    return App.createDUIButton({
        id: 'reset',
        label: 'Reset to Default',
        onTap: async () => {
            await Promise.all([
                stateManager.store('languages', null),
                stateManager.store('sort_order', null),
                stateManager.store('extra_args', null)
            ]);
        }
    });
};
exports.resetSettings = resetSettings;

},{"./NHentaiHelper":63}],66:[function(require,module,exports){
module.exports={
    "popularTags": [
        {
            "id": "big-breasts",
            "label": "Big Breasts"
        },
        {
            "id": "solo-female",
            "label": "Solo Female"
        },
        {
            "id": "sole-male",
            "label": "Solo Male"
        },
        {
            "id": "anal",
            "label": "Anal"
        },
        {
            "id": "stockings",
            "label": "Stockings"
        },
        {
            "id": "schoolgirl-uniform",
            "label": "Schoolgirl Uniform"
        },
        {
            "id": "nakadashi",
            "label": "Nakadashi"
        },
        {
            "id": "blowjob",
            "label": "Blowjob"
        },
        {
            "id": "bondage",
            "label": "Bondage"
        },
        {
            "id": "mosaic-censorship",
            "label": "Mosaic Censorship"
        },
        {
            "id": "ahegao",
            "label": "Ahegao"
        },
        {
            "id": "males-only",
            "label": "Males Only"
        },
        {
            "id": "dark-skin",
            "label": "Dark Skin"
        },
        {
            "id": "double-penetration",
            "label": "Double Penetration"
        },
        {
            "id": "tankoubon",
            "label": "Tankoubon"
        },
        {
            "id": "futanari",
            "label": "Futanari"
        },
        {
            "id": "defloration",
            "label": "Defloration"
        },
        {
            "id": "multi-work-series",
            "label": "Multi Work Series"
        },
        {
            "id": "sex-toys",
            "label": "Sex Toys"
        },
        {
            "id": "swimsuit",
            "label": "Swimsuit"
        },
        {
            "id": "ffm-threesome",
            "label": "FFM Threesome"
        },
        {
            "id": "full-censorship",
            "label": "Full Censorship"
        },
        {
            "id": "femdom",
            "label": "Femdom"
        },
        {
            "id": "dilf",
            "label": "DILF"
        },
        {
            "id": "twintails",
            "label": "Twintails"
        },
        {
            "id": "pantyhose",
            "label": "Pantyhose"
        },
        {
            "id": "sister",
            "label": "Sister"
        },
        {
            "id": "crossdressing",
            "label": "Crossdressing"
        },
        {
            "id": "tentacles",
            "label": "Tentacles"
        },
        {
            "id": "mind-break",
            "label": "Mind Break"
        },
        {
            "id": "bikini",
            "label": "Bikini"
        },
        {
            "id": "schoolboy-uniform",
            "label": "Schoolboy Uniform"
        },
        {
            "id": "story-arc",
            "label": "Story Arc"
        },
        {
            "id": "tomgirl",
            "label": "Tomgirl"
        },
        {
            "id": "big-ass",
            "label": "Big Sss"
        },
        {
            "id": "sweating",
            "label": "Sweating"
        },
        {
            "id": "mmf-threesome",
            "label": "MMF Threesome"
        },
        {
            "id": "teacher",
            "label": "Teacher"
        },
        {
            "id": "exhibitionism",
            "label": "Exhibitionism"
        },
        {
            "id": "uncensored",
            "label": "Uncensored"
        },
        {
            "id": "females-only",
            "label": "Females Only"
        },
        {
            "id": "lingerie",
            "label": "Lingerie"
        },
        {
            "id": "unusual-pupils",
            "label": "Unusual Pupils"
        },
        {
            "id": "footjob",
            "label": "Footjob"
        },
        {
            "id": "mother",
            "label": "Mother"
        },
        {
            "id": "huge-breasts",
            "label": "Huge-breasts"
        },
        {
            "id": "gender-bender",
            "label": "Gender Bender"
        },
        {
            "id": "catgirl",
            "label": "Catgirl"
        },
        {
            "id": "demon-girl",
            "label": "Demon Girl"
        },
        {
            "id": "kimono",
            "label": "Kimono"
        },
        {
            "id": "prostitution",
            "label": "Prostitution"
        },
        {
            "id": "stomach-deformation",
            "label": "Stomach Deformation"
        },
        {
            "id": "horns",
            "label": "Horns"
        },
        {
            "id": "webtoon",
            "label": "Webtoon"
        },
        {
            "id": "monster-girl",
            "label": "Monster Girl"
        },
        {
            "id": "latex",
            "label": "Latex"
        },
        {
            "id": "fox-girl",
            "label": "Fox Girl"
        },
        {
            "id": "yandere",
            "label": "Yandere"
        },
        {
            "id": "milking",
            "label": "Milking"
        }
    ]
}

},{}]},{},[62])(62)
});
