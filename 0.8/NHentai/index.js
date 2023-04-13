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

},{"./Badge":1,"./ByteArray":2,"./HomeSectionType":3,"./PaperbackExtensionBase":4,"./Source":5,"./SourceInfo":6,"./interfaces":13}],8:[function(require,module,exports){
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
__exportStar(require("./Searchable"), exports);
__exportStar(require("./Requestable"), exports);
__exportStar(require("./MangaProviding"), exports);
__exportStar(require("./MangaProgressProviding"), exports);

},{"./ChapterProviding":8,"./MangaProgressProviding":9,"./MangaProviding":10,"./Requestable":11,"./Searchable":12}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],16:[function(require,module,exports){
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

},{"./DynamicUI/Exports/DUIBinding":15,"./DynamicUI/Exports/DUIForm":16,"./DynamicUI/Exports/DUIFormRow":17,"./DynamicUI/Exports/DUISection":18,"./DynamicUI/Rows/Exports/DUIButton":19,"./DynamicUI/Rows/Exports/DUIHeader":20,"./DynamicUI/Rows/Exports/DUIInputField":21,"./DynamicUI/Rows/Exports/DUILabel":22,"./DynamicUI/Rows/Exports/DUILink":23,"./DynamicUI/Rows/Exports/DUIMultilineLabel":24,"./DynamicUI/Rows/Exports/DUINavigationButton":25,"./DynamicUI/Rows/Exports/DUIOAuthButton":26,"./DynamicUI/Rows/Exports/DUISecureInputField":27,"./DynamicUI/Rows/Exports/DUISelect":28,"./DynamicUI/Rows/Exports/DUIStepper":29,"./DynamicUI/Rows/Exports/DUISwitch":30,"./Exports/Chapter":31,"./Exports/ChapterDetails":32,"./Exports/Cookie":33,"./Exports/HomeSection":34,"./Exports/IconText":35,"./Exports/MangaInfo":36,"./Exports/MangaProgress":37,"./Exports/MangaUpdates":38,"./Exports/PBCanvas":39,"./Exports/PBImage":40,"./Exports/PagedResults":41,"./Exports/PartialSourceManga":42,"./Exports/RawData":43,"./Exports/Request":44,"./Exports/RequestManager":45,"./Exports/Response":46,"./Exports/SearchField":47,"./Exports/SearchRequest":48,"./Exports/SecureStateManager":49,"./Exports/SourceCookieStore":50,"./Exports/SourceInterceptor":51,"./Exports/SourceManga":52,"./Exports/SourceStateManager":53,"./Exports/Tag":54,"./Exports/TagSection":55,"./Exports/TrackedMangaChapterReadAction":56,"./Exports/TrackerActionQueue":57}],59:[function(require,module,exports){
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

},{"./base/index":7,"./compat/DyamicUI":14,"./generated/_exports":58}],60:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NHentai = exports.NHentaiInfo = void 0;
const types_1 = require("@paperback/types");
const NHentaiHelper_1 = require("./NHentaiHelper");
const NHentaiParser_1 = require("./NHentaiParser");
const NHentaiSettings_1 = require("./NHentaiSettings");
const NHENTAI_URL = 'https://nhentai.net';
exports.NHentaiInfo = {
    version: '4.0.0',
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
        },
        {
            text: 'Cloudflare',
            type: types_1.BadgeColor.RED
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
                (0, NHentaiSettings_1.resetSettings)(this.stateManager),
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
            const q = title + ' ' + this.generateQuery();
            const [sort, query] = await this.sortOrder(q, this.stateManager) ?? ['', q];
            const request = App.createRequest({
                url: `${NHENTAI_URL}/api/galleries/search?query=${encodeURIComponent(query ?? '')}&sort=${sort}&page=${page}`,
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
                    id: 'new',
                    title: 'New Uploads',
                    containsMoreItems: true,
                    type: types_1.HomeSectionType.singleRowNormal
                }),
            },
            {
                request: App.createRequest({
                    url: `${NHENTAI_URL}/api/galleries/search?query=${await this.generateQuery()}&sort=popular-today`,
                    method: 'GET'
                }),
                sectionID: App.createHomeSection({
                    id: 'popularToday',
                    title: 'Popular Today',
                    containsMoreItems: true,
                    type: types_1.HomeSectionType.singleRowNormal
                }),
            },
            {
                request: App.createRequest({
                    url: `${NHENTAI_URL}/api/galleries/search?query=${await this.generateQuery()}&sort=popular-week`,
                    method: 'GET'
                }),
                sectionID: App.createHomeSection({
                    id: 'popularWeekly',
                    title: 'Popular Weekly',
                    containsMoreItems: true,
                    type: types_1.HomeSectionType.singleRowNormal
                }),
            },
            {
                request: App.createRequest({
                    url: `${NHENTAI_URL}/api/galleries/search?query=${await this.generateQuery()}&sort=popular`,
                    method: 'GET'
                }),
                sectionID: App.createHomeSection({
                    id: 'popularAlltime',
                    title: 'Popular All-Time',
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
        if (status > 400) {
            throw new Error(`CLOUDFLARE BYPASS ERROR:\nPlease go to Settings > Sources > ${exports.NHentaiInfo.name}> and press Cloudflare Bypass`);
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
            console.log(error);
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
    async sortOrder(query, stateManager) {
        const inQuery = NHentaiHelper_1.NHSortOrders.containsShortcut(query);
        if (inQuery[0]?.length !== 0) {
            return [inQuery[0] ?? '', query.replace(inQuery[1] ?? '', '')];
        }
        else {
            const sortOrder = await stateManager.retrieve('sort_order') ?? NHentaiHelper_1.NHSortOrders.getDefault();
            return [sortOrder, query];
        }
    }
    async extraArgs(stateManager) {
        const args = await (0, NHentaiSettings_1.getExtraArgs)(stateManager);
        return ` ${args}`;
    }
}
exports.NHentai = NHentai;

},{"./NHentaiHelper":61,"./NHentaiParser":62,"./NHentaiSettings":63,"@paperback/types":59}],61:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NHSortOrders = exports.NHLanguages = void 0;
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
            },
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

},{}],62:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSearch = exports.parseChapterDetails = exports.parseChapters = exports.parseMangaDetails = void 0;
const NHentaiHelper_1 = require("./NHentaiHelper");
const parseMangaDetails = (data) => {
    const artist = getArtist(data);
    const tags = [];
    for (const tag of data.tags) {
        if (tag.type === 'tag')
            tags.push(App.createTag({ id: tag.id.toString(), label: tag.name }));
    }
    return App.createSourceManga({
        id: data.id.toString(),
        mangaInfo: App.createMangaInfo({
            titles: [data.title.english, data.title.japanese, data.title.pretty],
            artist: artist,
            author: artist,
            image: `https://t.nhentai.net/galleries/${data.media_id}/cover.${typeOfImage(data.images.cover)}`,
            status: 'Completed',
            tags: [App.createTagSection({ id: 'tags', label: 'Tags', tags: tags })],
            desc: ''
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
    for (const gallery of data.result) {
        tiles.push(App.createPartialSourceManga({
            image: `https://t.nhentai.net/galleries/${gallery.media_id}/cover.${typeOfImage(gallery.images.cover)}`,
            title: gallery.title.pretty,
            mangaId: gallery.id.toString(),
            subtitle: NHentaiHelper_1.NHLanguages.getName(getLanguage(gallery))
        }));
    }
    return tiles;
};
exports.parseSearch = parseSearch;
// Utility
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

},{"./NHentaiHelper":61}],63:[function(require,module,exports){
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
                        footer: 'Tags with a space in it, need to be replace with a "-"\nExample: "-big breasts" will be "-big-breasts"',
                        rows: async () => {
                            await Promise.all([
                                (0, exports.getLanguages)(stateManager),
                                (0, exports.getSortOrders)(stateManager),
                                (0, exports.getExtraArgs)(stateManager),
                            ]);
                            return await [
                                App.createDUISelect({
                                    id: 'languages',
                                    label: 'Languages',
                                    options: NHentaiHelper_1.NHLanguages.getNHCodeList(),
                                    labelResolver: async (option_1) => NHentaiHelper_1.NHLanguages.getName(option_1),
                                    value: App.createDUIBinding({
                                        get: () => (0, exports.getLanguages)(stateManager),
                                        set: async (newValue_1) => await stateManager.store('languages', newValue_1)
                                    }),
                                    allowsMultiselect: false,
                                }),
                                App.createDUISelect({
                                    id: 'sort_order',
                                    label: 'Default search sort order',
                                    options: NHentaiHelper_1.NHSortOrders.getNHCodeList(),
                                    labelResolver: async (option_3) => NHentaiHelper_1.NHSortOrders.getName(option_3),
                                    value: App.createDUIBinding({
                                        get: () => (0, exports.getSortOrders)(stateManager),
                                        set: async (newValue_3) => await stateManager.store('sort_order', newValue_3)
                                    }),
                                    allowsMultiselect: false,
                                }),
                                App.createDUIInputField({
                                    id: 'extra_args',
                                    label: 'Additional arguments',
                                    value: App.createDUIBinding({
                                        get: () => (0, exports.getExtraArgs)(stateManager),
                                        set: async (newValue_5) => await stateManager.store('extra_args', newValue_5)
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

},{"./NHentaiHelper":61}]},{},[60])(60)
});
