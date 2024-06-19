function compat() {
"use strict";
var source = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/@paperback/types/lib/generated/DynamicUI/Exports/DUIBinding.js
  var require_DUIBinding = __commonJS({
    "node_modules/@paperback/types/lib/generated/DynamicUI/Exports/DUIBinding.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/DynamicUI/Exports/DUIForm.js
  var require_DUIForm = __commonJS({
    "node_modules/@paperback/types/lib/generated/DynamicUI/Exports/DUIForm.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/DynamicUI/Exports/DUIFormRow.js
  var require_DUIFormRow = __commonJS({
    "node_modules/@paperback/types/lib/generated/DynamicUI/Exports/DUIFormRow.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/DynamicUI/Exports/DUISection.js
  var require_DUISection = __commonJS({
    "node_modules/@paperback/types/lib/generated/DynamicUI/Exports/DUISection.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/DynamicUI/Rows/Exports/DUIButton.js
  var require_DUIButton = __commonJS({
    "node_modules/@paperback/types/lib/generated/DynamicUI/Rows/Exports/DUIButton.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/DynamicUI/Rows/Exports/DUIHeader.js
  var require_DUIHeader = __commonJS({
    "node_modules/@paperback/types/lib/generated/DynamicUI/Rows/Exports/DUIHeader.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/DynamicUI/Rows/Exports/DUIInputField.js
  var require_DUIInputField = __commonJS({
    "node_modules/@paperback/types/lib/generated/DynamicUI/Rows/Exports/DUIInputField.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/DynamicUI/Rows/Exports/DUILabel.js
  var require_DUILabel = __commonJS({
    "node_modules/@paperback/types/lib/generated/DynamicUI/Rows/Exports/DUILabel.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/DynamicUI/Rows/Exports/DUILink.js
  var require_DUILink = __commonJS({
    "node_modules/@paperback/types/lib/generated/DynamicUI/Rows/Exports/DUILink.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/DynamicUI/Rows/Exports/DUIMultilineLabel.js
  var require_DUIMultilineLabel = __commonJS({
    "node_modules/@paperback/types/lib/generated/DynamicUI/Rows/Exports/DUIMultilineLabel.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/DynamicUI/Rows/Exports/DUINavigationButton.js
  var require_DUINavigationButton = __commonJS({
    "node_modules/@paperback/types/lib/generated/DynamicUI/Rows/Exports/DUINavigationButton.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/DynamicUI/Rows/Exports/DUIOAuthButton.js
  var require_DUIOAuthButton = __commonJS({
    "node_modules/@paperback/types/lib/generated/DynamicUI/Rows/Exports/DUIOAuthButton.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/DynamicUI/Rows/Exports/DUISecureInputField.js
  var require_DUISecureInputField = __commonJS({
    "node_modules/@paperback/types/lib/generated/DynamicUI/Rows/Exports/DUISecureInputField.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/DynamicUI/Rows/Exports/DUISelect.js
  var require_DUISelect = __commonJS({
    "node_modules/@paperback/types/lib/generated/DynamicUI/Rows/Exports/DUISelect.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/DynamicUI/Rows/Exports/DUIStepper.js
  var require_DUIStepper = __commonJS({
    "node_modules/@paperback/types/lib/generated/DynamicUI/Rows/Exports/DUIStepper.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/DynamicUI/Rows/Exports/DUISwitch.js
  var require_DUISwitch = __commonJS({
    "node_modules/@paperback/types/lib/generated/DynamicUI/Rows/Exports/DUISwitch.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/Exports/ChapterDetails.js
  var require_ChapterDetails = __commonJS({
    "node_modules/@paperback/types/lib/generated/Exports/ChapterDetails.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/Exports/Chapter.js
  var require_Chapter = __commonJS({
    "node_modules/@paperback/types/lib/generated/Exports/Chapter.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/Exports/Cookie.js
  var require_Cookie = __commonJS({
    "node_modules/@paperback/types/lib/generated/Exports/Cookie.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/Exports/HomeSection.js
  var require_HomeSection = __commonJS({
    "node_modules/@paperback/types/lib/generated/Exports/HomeSection.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/Exports/IconText.js
  var require_IconText = __commonJS({
    "node_modules/@paperback/types/lib/generated/Exports/IconText.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/Exports/MangaInfo.js
  var require_MangaInfo = __commonJS({
    "node_modules/@paperback/types/lib/generated/Exports/MangaInfo.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/Exports/MangaProgress.js
  var require_MangaProgress = __commonJS({
    "node_modules/@paperback/types/lib/generated/Exports/MangaProgress.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/Exports/PartialSourceManga.js
  var require_PartialSourceManga = __commonJS({
    "node_modules/@paperback/types/lib/generated/Exports/PartialSourceManga.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/Exports/MangaUpdates.js
  var require_MangaUpdates = __commonJS({
    "node_modules/@paperback/types/lib/generated/Exports/MangaUpdates.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/Exports/PBCanvas.js
  var require_PBCanvas = __commonJS({
    "node_modules/@paperback/types/lib/generated/Exports/PBCanvas.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/Exports/PBImage.js
  var require_PBImage = __commonJS({
    "node_modules/@paperback/types/lib/generated/Exports/PBImage.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/Exports/PagedResults.js
  var require_PagedResults = __commonJS({
    "node_modules/@paperback/types/lib/generated/Exports/PagedResults.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/Exports/RawData.js
  var require_RawData = __commonJS({
    "node_modules/@paperback/types/lib/generated/Exports/RawData.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/Exports/Request.js
  var require_Request = __commonJS({
    "node_modules/@paperback/types/lib/generated/Exports/Request.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/Exports/SourceInterceptor.js
  var require_SourceInterceptor = __commonJS({
    "node_modules/@paperback/types/lib/generated/Exports/SourceInterceptor.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/Exports/RequestManager.js
  var require_RequestManager = __commonJS({
    "node_modules/@paperback/types/lib/generated/Exports/RequestManager.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/Exports/Response.js
  var require_Response = __commonJS({
    "node_modules/@paperback/types/lib/generated/Exports/Response.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/Exports/SearchField.js
  var require_SearchField = __commonJS({
    "node_modules/@paperback/types/lib/generated/Exports/SearchField.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/Exports/SearchRequest.js
  var require_SearchRequest = __commonJS({
    "node_modules/@paperback/types/lib/generated/Exports/SearchRequest.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/Exports/SourceCookieStore.js
  var require_SourceCookieStore = __commonJS({
    "node_modules/@paperback/types/lib/generated/Exports/SourceCookieStore.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/Exports/SourceManga.js
  var require_SourceManga = __commonJS({
    "node_modules/@paperback/types/lib/generated/Exports/SourceManga.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/Exports/SecureStateManager.js
  var require_SecureStateManager = __commonJS({
    "node_modules/@paperback/types/lib/generated/Exports/SecureStateManager.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/Exports/SourceStateManager.js
  var require_SourceStateManager = __commonJS({
    "node_modules/@paperback/types/lib/generated/Exports/SourceStateManager.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/Exports/Tag.js
  var require_Tag = __commonJS({
    "node_modules/@paperback/types/lib/generated/Exports/Tag.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/Exports/TagSection.js
  var require_TagSection = __commonJS({
    "node_modules/@paperback/types/lib/generated/Exports/TagSection.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/Exports/TrackedMangaChapterReadAction.js
  var require_TrackedMangaChapterReadAction = __commonJS({
    "node_modules/@paperback/types/lib/generated/Exports/TrackedMangaChapterReadAction.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/Exports/TrackerActionQueue.js
  var require_TrackerActionQueue = __commonJS({
    "node_modules/@paperback/types/lib/generated/Exports/TrackerActionQueue.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/generated/_exports.js
  var require_exports = __commonJS({
    "node_modules/@paperback/types/lib/generated/_exports.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_DUIBinding(), exports);
      __exportStar(require_DUIForm(), exports);
      __exportStar(require_DUIFormRow(), exports);
      __exportStar(require_DUISection(), exports);
      __exportStar(require_DUIButton(), exports);
      __exportStar(require_DUIHeader(), exports);
      __exportStar(require_DUIInputField(), exports);
      __exportStar(require_DUILabel(), exports);
      __exportStar(require_DUILink(), exports);
      __exportStar(require_DUIMultilineLabel(), exports);
      __exportStar(require_DUINavigationButton(), exports);
      __exportStar(require_DUIOAuthButton(), exports);
      __exportStar(require_DUISecureInputField(), exports);
      __exportStar(require_DUISelect(), exports);
      __exportStar(require_DUIStepper(), exports);
      __exportStar(require_DUISwitch(), exports);
      __exportStar(require_ChapterDetails(), exports);
      __exportStar(require_Chapter(), exports);
      __exportStar(require_Cookie(), exports);
      __exportStar(require_HomeSection(), exports);
      __exportStar(require_IconText(), exports);
      __exportStar(require_MangaInfo(), exports);
      __exportStar(require_MangaProgress(), exports);
      __exportStar(require_PartialSourceManga(), exports);
      __exportStar(require_MangaUpdates(), exports);
      __exportStar(require_PBCanvas(), exports);
      __exportStar(require_PBImage(), exports);
      __exportStar(require_PagedResults(), exports);
      __exportStar(require_RawData(), exports);
      __exportStar(require_Request(), exports);
      __exportStar(require_SourceInterceptor(), exports);
      __exportStar(require_RequestManager(), exports);
      __exportStar(require_Response(), exports);
      __exportStar(require_SearchField(), exports);
      __exportStar(require_SearchRequest(), exports);
      __exportStar(require_SourceCookieStore(), exports);
      __exportStar(require_SourceManga(), exports);
      __exportStar(require_SecureStateManager(), exports);
      __exportStar(require_SourceStateManager(), exports);
      __exportStar(require_Tag(), exports);
      __exportStar(require_TagSection(), exports);
      __exportStar(require_TrackedMangaChapterReadAction(), exports);
      __exportStar(require_TrackerActionQueue(), exports);
    }
  });

  // node_modules/@paperback/types/lib/base/Source.js
  var require_Source = __commonJS({
    "node_modules/@paperback/types/lib/base/Source.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.urlEncodeObject = exports.convertTime = exports.Source = void 0;
      var Source = class {
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
          return this.getSearchTags?.();
        }
      };
      exports.Source = Source;
      function convertTime(timeAgo) {
        let time;
        let trimmed = Number((/\d*/.exec(timeAgo) ?? [])[0]);
        trimmed = trimmed == 0 && timeAgo.includes("a") ? 1 : trimmed;
        if (timeAgo.includes("minutes")) {
          time = new Date(Date.now() - trimmed * 6e4);
        } else if (timeAgo.includes("hours")) {
          time = new Date(Date.now() - trimmed * 36e5);
        } else if (timeAgo.includes("days")) {
          time = new Date(Date.now() - trimmed * 864e5);
        } else if (timeAgo.includes("year") || timeAgo.includes("years")) {
          time = new Date(Date.now() - trimmed * 31556952e3);
        } else {
          time = new Date(Date.now());
        }
        return time;
      }
      exports.convertTime = convertTime;
      function urlEncodeObject(obj) {
        let ret = {};
        for (const entry of Object.entries(obj)) {
          ret[encodeURIComponent(entry[0])] = encodeURIComponent(entry[1]);
        }
        return ret;
      }
      exports.urlEncodeObject = urlEncodeObject;
    }
  });

  // node_modules/@paperback/types/lib/base/ByteArray.js
  var require_ByteArray = __commonJS({
    "node_modules/@paperback/types/lib/base/ByteArray.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/base/Badge.js
  var require_Badge = __commonJS({
    "node_modules/@paperback/types/lib/base/Badge.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BadgeColor = void 0;
      var BadgeColor2;
      (function(BadgeColor3) {
        BadgeColor3["BLUE"] = "default";
        BadgeColor3["GREEN"] = "success";
        BadgeColor3["GREY"] = "info";
        BadgeColor3["YELLOW"] = "warning";
        BadgeColor3["RED"] = "danger";
      })(BadgeColor2 = exports.BadgeColor || (exports.BadgeColor = {}));
    }
  });

  // node_modules/@paperback/types/lib/base/interfaces/ChapterProviding.js
  var require_ChapterProviding = __commonJS({
    "node_modules/@paperback/types/lib/base/interfaces/ChapterProviding.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/base/interfaces/CloudflareBypassRequestProviding.js
  var require_CloudflareBypassRequestProviding = __commonJS({
    "node_modules/@paperback/types/lib/base/interfaces/CloudflareBypassRequestProviding.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/base/interfaces/HomePageSectionsProviding.js
  var require_HomePageSectionsProviding = __commonJS({
    "node_modules/@paperback/types/lib/base/interfaces/HomePageSectionsProviding.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/base/interfaces/MangaProgressProviding.js
  var require_MangaProgressProviding = __commonJS({
    "node_modules/@paperback/types/lib/base/interfaces/MangaProgressProviding.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/base/interfaces/MangaProviding.js
  var require_MangaProviding = __commonJS({
    "node_modules/@paperback/types/lib/base/interfaces/MangaProviding.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/base/interfaces/RequestManagerProviding.js
  var require_RequestManagerProviding = __commonJS({
    "node_modules/@paperback/types/lib/base/interfaces/RequestManagerProviding.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/base/interfaces/SearchResultsProviding.js
  var require_SearchResultsProviding = __commonJS({
    "node_modules/@paperback/types/lib/base/interfaces/SearchResultsProviding.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/base/interfaces/index.js
  var require_interfaces = __commonJS({
    "node_modules/@paperback/types/lib/base/interfaces/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_ChapterProviding(), exports);
      __exportStar(require_CloudflareBypassRequestProviding(), exports);
      __exportStar(require_HomePageSectionsProviding(), exports);
      __exportStar(require_MangaProgressProviding(), exports);
      __exportStar(require_MangaProviding(), exports);
      __exportStar(require_RequestManagerProviding(), exports);
      __exportStar(require_SearchResultsProviding(), exports);
    }
  });

  // node_modules/@paperback/types/lib/base/SourceInfo.js
  var require_SourceInfo = __commonJS({
    "node_modules/@paperback/types/lib/base/SourceInfo.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ContentRating = exports.SourceIntents = void 0;
      var SourceIntents2;
      (function(SourceIntents3) {
        SourceIntents3[SourceIntents3["MANGA_CHAPTERS"] = 1] = "MANGA_CHAPTERS";
        SourceIntents3[SourceIntents3["MANGA_TRACKING"] = 2] = "MANGA_TRACKING";
        SourceIntents3[SourceIntents3["HOMEPAGE_SECTIONS"] = 4] = "HOMEPAGE_SECTIONS";
        SourceIntents3[SourceIntents3["COLLECTION_MANAGEMENT"] = 8] = "COLLECTION_MANAGEMENT";
        SourceIntents3[SourceIntents3["CLOUDFLARE_BYPASS_REQUIRED"] = 16] = "CLOUDFLARE_BYPASS_REQUIRED";
        SourceIntents3[SourceIntents3["SETTINGS_UI"] = 32] = "SETTINGS_UI";
      })(SourceIntents2 = exports.SourceIntents || (exports.SourceIntents = {}));
      var ContentRating2;
      (function(ContentRating3) {
        ContentRating3["EVERYONE"] = "EVERYONE";
        ContentRating3["MATURE"] = "MATURE";
        ContentRating3["ADULT"] = "ADULT";
      })(ContentRating2 = exports.ContentRating || (exports.ContentRating = {}));
    }
  });

  // node_modules/@paperback/types/lib/base/HomeSectionType.js
  var require_HomeSectionType = __commonJS({
    "node_modules/@paperback/types/lib/base/HomeSectionType.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.HomeSectionType = void 0;
      var HomeSectionType2;
      (function(HomeSectionType3) {
        HomeSectionType3["singleRowNormal"] = "singleRowNormal";
        HomeSectionType3["singleRowLarge"] = "singleRowLarge";
        HomeSectionType3["doubleRow"] = "doubleRow";
        HomeSectionType3["featured"] = "featured";
      })(HomeSectionType2 = exports.HomeSectionType || (exports.HomeSectionType = {}));
    }
  });

  // node_modules/@paperback/types/lib/base/PaperbackExtensionBase.js
  var require_PaperbackExtensionBase = __commonJS({
    "node_modules/@paperback/types/lib/base/PaperbackExtensionBase.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/base/index.js
  var require_base = __commonJS({
    "node_modules/@paperback/types/lib/base/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_Source(), exports);
      __exportStar(require_ByteArray(), exports);
      __exportStar(require_Badge(), exports);
      __exportStar(require_interfaces(), exports);
      __exportStar(require_SourceInfo(), exports);
      __exportStar(require_HomeSectionType(), exports);
      __exportStar(require_PaperbackExtensionBase(), exports);
    }
  });

  // node_modules/@paperback/types/lib/compat/DyamicUI.js
  var require_DyamicUI = __commonJS({
    "node_modules/@paperback/types/lib/compat/DyamicUI.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/index.js
  var require_lib = __commonJS({
    "node_modules/@paperback/types/lib/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_exports(), exports);
      __exportStar(require_base(), exports);
      __exportStar(require_DyamicUI(), exports);
    }
  });

  // src/BatoTo/external/crypto-js.min.js
  var require_crypto_js_min = __commonJS({
    "src/BatoTo/external/crypto-js.min.js"(exports, module) {
      "use strict";
      !function(t, e) {
        "object" == typeof exports ? module.exports = exports = e() : "function" == typeof define && define.amd ? define([], e) : t.CryptoJS = e();
      }(exports, function() {
        var W, O, I, U, K, X, L, l, j, T, t, N, q, e, Z, V, G, J, Q, Y, $2, t1, e1, r1, i1, o1, n1, s, s1, c1, a1, h1, l1, o, f1, r, d1, u1, n, c, a, h, f, d, i = function(h3) {
          var i3;
          if ("undefined" != typeof window && window.crypto && (i3 = window.crypto), "undefined" != typeof self && self.crypto && (i3 = self.crypto), !(i3 = !(i3 = !(i3 = "undefined" != typeof globalThis && globalThis.crypto ? globalThis.crypto : i3) && "undefined" != typeof window && window.msCrypto ? window.msCrypto : i3) && "undefined" != typeof global && global.crypto ? global.crypto : i3) && "function" == typeof __require) try {
            i3 = __require("crypto");
          } catch (t4) {
          }
          var r3 = Object.create || function(t4) {
            return e3.prototype = t4, t4 = new e3(), e3.prototype = null, t4;
          };
          function e3() {
          }
          var t3 = {}, o3 = t3.lib = {}, n3 = o3.Base = { extend: function(t4) {
            var e4 = r3(this);
            return t4 && e4.mixIn(t4), e4.hasOwnProperty("init") && this.init !== e4.init || (e4.init = function() {
              e4.$super.init.apply(this, arguments);
            }), (e4.init.prototype = e4).$super = this, e4;
          }, create: function() {
            var t4 = this.extend();
            return t4.init.apply(t4, arguments), t4;
          }, init: function() {
          }, mixIn: function(t4) {
            for (var e4 in t4) t4.hasOwnProperty(e4) && (this[e4] = t4[e4]);
            t4.hasOwnProperty("toString") && (this.toString = t4.toString);
          }, clone: function() {
            return this.init.prototype.extend(this);
          } }, l3 = o3.WordArray = n3.extend({ init: function(t4, e4) {
            t4 = this.words = t4 || [], this.sigBytes = null != e4 ? e4 : 4 * t4.length;
          }, toString: function(t4) {
            return (t4 || c3).stringify(this);
          }, concat: function(t4) {
            var e4 = this.words, r4 = t4.words, i4 = this.sigBytes, o4 = t4.sigBytes;
            if (this.clamp(), i4 % 4) for (var n4 = 0; n4 < o4; n4++) {
              var s4 = r4[n4 >>> 2] >>> 24 - n4 % 4 * 8 & 255;
              e4[i4 + n4 >>> 2] |= s4 << 24 - (i4 + n4) % 4 * 8;
            }
            else for (var c4 = 0; c4 < o4; c4 += 4) e4[i4 + c4 >>> 2] = r4[c4 >>> 2];
            return this.sigBytes += o4, this;
          }, clamp: function() {
            var t4 = this.words, e4 = this.sigBytes;
            t4[e4 >>> 2] &= 4294967295 << 32 - e4 % 4 * 8, t4.length = h3.ceil(e4 / 4);
          }, clone: function() {
            var t4 = n3.clone.call(this);
            return t4.words = this.words.slice(0), t4;
          }, random: function(t4) {
            for (var e4 = [], r4 = 0; r4 < t4; r4 += 4) e4.push(function() {
              if (i3) {
                if ("function" == typeof i3.getRandomValues) try {
                  return i3.getRandomValues(new Uint32Array(1))[0];
                } catch (t5) {
                }
                if ("function" == typeof i3.randomBytes) try {
                  return i3.randomBytes(4).readInt32LE();
                } catch (t5) {
                }
              }
              throw new Error("Native crypto module could not be used to get secure random number.");
            }());
            return new l3.init(e4, t4);
          } }), s3 = t3.enc = {}, c3 = s3.Hex = { stringify: function(t4) {
            for (var e4 = t4.words, r4 = t4.sigBytes, i4 = [], o4 = 0; o4 < r4; o4++) {
              var n4 = e4[o4 >>> 2] >>> 24 - o4 % 4 * 8 & 255;
              i4.push((n4 >>> 4).toString(16)), i4.push((15 & n4).toString(16));
            }
            return i4.join("");
          }, parse: function(t4) {
            for (var e4 = t4.length, r4 = [], i4 = 0; i4 < e4; i4 += 2) r4[i4 >>> 3] |= parseInt(t4.substr(i4, 2), 16) << 24 - i4 % 8 * 4;
            return new l3.init(r4, e4 / 2);
          } }, a3 = s3.Latin1 = { stringify: function(t4) {
            for (var e4 = t4.words, r4 = t4.sigBytes, i4 = [], o4 = 0; o4 < r4; o4++) {
              var n4 = e4[o4 >>> 2] >>> 24 - o4 % 4 * 8 & 255;
              i4.push(String.fromCharCode(n4));
            }
            return i4.join("");
          }, parse: function(t4) {
            for (var e4 = t4.length, r4 = [], i4 = 0; i4 < e4; i4++) r4[i4 >>> 2] |= (255 & t4.charCodeAt(i4)) << 24 - i4 % 4 * 8;
            return new l3.init(r4, e4);
          } }, f3 = s3.Utf8 = { stringify: function(t4) {
            try {
              return decodeURIComponent(escape(a3.stringify(t4)));
            } catch (t5) {
              throw new Error("Malformed UTF-8 data");
            }
          }, parse: function(t4) {
            return a3.parse(unescape(encodeURIComponent(t4)));
          } }, d3 = o3.BufferedBlockAlgorithm = n3.extend({ reset: function() {
            this._data = new l3.init(), this._nDataBytes = 0;
          }, _append: function(t4) {
            "string" == typeof t4 && (t4 = f3.parse(t4)), this._data.concat(t4), this._nDataBytes += t4.sigBytes;
          }, _process: function(t4) {
            var e4, r4 = this._data, i4 = r4.words, o4 = r4.sigBytes, n4 = this.blockSize, s4 = o4 / (4 * n4), c4 = (s4 = t4 ? h3.ceil(s4) : h3.max((0 | s4) - this._minBufferSize, 0)) * n4, t4 = h3.min(4 * c4, o4);
            if (c4) {
              for (var a4 = 0; a4 < c4; a4 += n4) this._doProcessBlock(i4, a4);
              e4 = i4.splice(0, c4), r4.sigBytes -= t4;
            }
            return new l3.init(e4, t4);
          }, clone: function() {
            var t4 = n3.clone.call(this);
            return t4._data = this._data.clone(), t4;
          }, _minBufferSize: 0 }), u3 = (o3.Hasher = d3.extend({ cfg: n3.extend(), init: function(t4) {
            this.cfg = this.cfg.extend(t4), this.reset();
          }, reset: function() {
            d3.reset.call(this), this._doReset();
          }, update: function(t4) {
            return this._append(t4), this._process(), this;
          }, finalize: function(t4) {
            return t4 && this._append(t4), this._doFinalize();
          }, blockSize: 16, _createHelper: function(r4) {
            return function(t4, e4) {
              return new r4.init(e4).finalize(t4);
            };
          }, _createHmacHelper: function(r4) {
            return function(t4, e4) {
              return new u3.HMAC.init(r4, e4).finalize(t4);
            };
          } }), t3.algo = {});
          return t3;
        }(Math), u = (u = (p = i).lib, W = u.Base, O = u.WordArray, (u = p.x64 = {}).Word = W.extend({ init: function(t3, e3) {
          this.high = t3, this.low = e3;
        } }), u.WordArray = W.extend({ init: function(t3, e3) {
          t3 = this.words = t3 || [], this.sigBytes = null != e3 ? e3 : 8 * t3.length;
        }, toX32: function() {
          for (var t3 = this.words, e3 = t3.length, r3 = [], i3 = 0; i3 < e3; i3++) {
            var o3 = t3[i3];
            r3.push(o3.high), r3.push(o3.low);
          }
          return O.create(r3, this.sigBytes);
        }, clone: function() {
          for (var t3 = W.clone.call(this), e3 = t3.words = this.words.slice(0), r3 = e3.length, i3 = 0; i3 < r3; i3++) e3[i3] = e3[i3].clone();
          return t3;
        } }), "function" == typeof ArrayBuffer && (p = i.lib.WordArray, I = p.init, (p.init = function(t3) {
          if ((t3 = (t3 = t3 instanceof ArrayBuffer ? new Uint8Array(t3) : t3) instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && t3 instanceof Uint8ClampedArray || t3 instanceof Int16Array || t3 instanceof Uint16Array || t3 instanceof Int32Array || t3 instanceof Uint32Array || t3 instanceof Float32Array || t3 instanceof Float64Array ? new Uint8Array(t3.buffer, t3.byteOffset, t3.byteLength) : t3) instanceof Uint8Array) {
            for (var e3 = t3.byteLength, r3 = [], i3 = 0; i3 < e3; i3++) r3[i3 >>> 2] |= t3[i3] << 24 - i3 % 4 * 8;
            I.call(this, r3, e3);
          } else I.apply(this, arguments);
        }).prototype = p), i), p1 = u.lib.WordArray;
        function _1(t3) {
          return t3 << 8 & 4278255360 | t3 >>> 8 & 16711935;
        }
        (u = u.enc).Utf16 = u.Utf16BE = { stringify: function(t3) {
          for (var e3 = t3.words, r3 = t3.sigBytes, i3 = [], o3 = 0; o3 < r3; o3 += 2) {
            var n3 = e3[o3 >>> 2] >>> 16 - o3 % 4 * 8 & 65535;
            i3.push(String.fromCharCode(n3));
          }
          return i3.join("");
        }, parse: function(t3) {
          for (var e3 = t3.length, r3 = [], i3 = 0; i3 < e3; i3++) r3[i3 >>> 1] |= t3.charCodeAt(i3) << 16 - i3 % 2 * 16;
          return p1.create(r3, 2 * e3);
        } }, u.Utf16LE = { stringify: function(t3) {
          for (var e3 = t3.words, r3 = t3.sigBytes, i3 = [], o3 = 0; o3 < r3; o3 += 2) {
            var n3 = _1(e3[o3 >>> 2] >>> 16 - o3 % 4 * 8 & 65535);
            i3.push(String.fromCharCode(n3));
          }
          return i3.join("");
        }, parse: function(t3) {
          for (var e3 = t3.length, r3 = [], i3 = 0; i3 < e3; i3++) r3[i3 >>> 1] |= _1(t3.charCodeAt(i3) << 16 - i3 % 2 * 16);
          return p1.create(r3, 2 * e3);
        } }, U = (p = i).lib.WordArray, p.enc.Base64 = { stringify: function(t3) {
          for (var e3 = t3.words, r3 = t3.sigBytes, i3 = this._map, o3 = (t3.clamp(), []), n3 = 0; n3 < r3; n3 += 3) for (var s3 = (e3[n3 >>> 2] >>> 24 - n3 % 4 * 8 & 255) << 16 | (e3[n3 + 1 >>> 2] >>> 24 - (n3 + 1) % 4 * 8 & 255) << 8 | e3[n3 + 2 >>> 2] >>> 24 - (n3 + 2) % 4 * 8 & 255, c3 = 0; c3 < 4 && n3 + 0.75 * c3 < r3; c3++) o3.push(i3.charAt(s3 >>> 6 * (3 - c3) & 63));
          var a3 = i3.charAt(64);
          if (a3) for (; o3.length % 4; ) o3.push(a3);
          return o3.join("");
        }, parse: function(t3) {
          var e3 = t3.length, r3 = this._map;
          if (!(i3 = this._reverseMap)) for (var i3 = this._reverseMap = [], o3 = 0; o3 < r3.length; o3++) i3[r3.charCodeAt(o3)] = o3;
          for (var n3, s3, c3 = r3.charAt(64), a3 = (!c3 || -1 !== (c3 = t3.indexOf(c3)) && (e3 = c3), t3), h3 = e3, l3 = i3, f3 = [], d3 = 0, u3 = 0; u3 < h3; u3++) u3 % 4 && (s3 = l3[a3.charCodeAt(u3 - 1)] << u3 % 4 * 2, n3 = l3[a3.charCodeAt(u3)] >>> 6 - u3 % 4 * 2, s3 = s3 | n3, f3[d3 >>> 2] |= s3 << 24 - d3 % 4 * 8, d3++);
          return U.create(f3, d3);
        }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" }, K = (u = i).lib.WordArray, u.enc.Base64url = { stringify: function(t3, e3) {
          for (var r3 = t3.words, i3 = t3.sigBytes, o3 = (e3 = void 0 === e3 ? true : e3) ? this._safe_map : this._map, n3 = (t3.clamp(), []), s3 = 0; s3 < i3; s3 += 3) for (var c3 = (r3[s3 >>> 2] >>> 24 - s3 % 4 * 8 & 255) << 16 | (r3[s3 + 1 >>> 2] >>> 24 - (s3 + 1) % 4 * 8 & 255) << 8 | r3[s3 + 2 >>> 2] >>> 24 - (s3 + 2) % 4 * 8 & 255, a3 = 0; a3 < 4 && s3 + 0.75 * a3 < i3; a3++) n3.push(o3.charAt(c3 >>> 6 * (3 - a3) & 63));
          var h3 = o3.charAt(64);
          if (h3) for (; n3.length % 4; ) n3.push(h3);
          return n3.join("");
        }, parse: function(t3, e3) {
          var r3 = t3.length, i3 = (e3 = void 0 === e3 ? true : e3) ? this._safe_map : this._map;
          if (!(o3 = this._reverseMap)) for (var o3 = this._reverseMap = [], n3 = 0; n3 < i3.length; n3++) o3[i3.charCodeAt(n3)] = n3;
          for (var s3, c3, e3 = i3.charAt(64), a3 = (!e3 || -1 !== (e3 = t3.indexOf(e3)) && (r3 = e3), t3), h3 = r3, l3 = o3, f3 = [], d3 = 0, u3 = 0; u3 < h3; u3++) u3 % 4 && (c3 = l3[a3.charCodeAt(u3 - 1)] << u3 % 4 * 2, s3 = l3[a3.charCodeAt(u3)] >>> 6 - u3 % 4 * 2, c3 = c3 | s3, f3[d3 >>> 2] |= c3 << 24 - d3 % 4 * 8, d3++);
          return K.create(f3, d3);
        }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_" };
        for (var y1 = Math, p = i, g1 = (u = p.lib).WordArray, v1 = u.Hasher, u = p.algo, A = [], B1 = 0; B1 < 64; B1++) A[B1] = 4294967296 * y1.abs(y1.sin(B1 + 1)) | 0;
        function z(t3, e3, r3, i3, o3, n3, s3) {
          t3 = t3 + (e3 & r3 | ~e3 & i3) + o3 + s3;
          return (t3 << n3 | t3 >>> 32 - n3) + e3;
        }
        function H(t3, e3, r3, i3, o3, n3, s3) {
          t3 = t3 + (e3 & i3 | r3 & ~i3) + o3 + s3;
          return (t3 << n3 | t3 >>> 32 - n3) + e3;
        }
        function C(t3, e3, r3, i3, o3, n3, s3) {
          t3 = t3 + (e3 ^ r3 ^ i3) + o3 + s3;
          return (t3 << n3 | t3 >>> 32 - n3) + e3;
        }
        function R(t3, e3, r3, i3, o3, n3, s3) {
          t3 = t3 + (r3 ^ (e3 | ~i3)) + o3 + s3;
          return (t3 << n3 | t3 >>> 32 - n3) + e3;
        }
        u = u.MD5 = v1.extend({ _doReset: function() {
          this._hash = new g1.init([1732584193, 4023233417, 2562383102, 271733878]);
        }, _doProcessBlock: function(t3, e3) {
          for (var r3 = 0; r3 < 16; r3++) {
            var i3 = e3 + r3, o3 = t3[i3];
            t3[i3] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8);
          }
          var n3 = this._hash.words, s3 = t3[e3 + 0], c3 = t3[e3 + 1], a3 = t3[e3 + 2], h3 = t3[e3 + 3], l3 = t3[e3 + 4], f3 = t3[e3 + 5], d3 = t3[e3 + 6], u3 = t3[e3 + 7], p3 = t3[e3 + 8], _3 = t3[e3 + 9], y3 = t3[e3 + 10], g3 = t3[e3 + 11], v3 = t3[e3 + 12], B3 = t3[e3 + 13], w3 = t3[e3 + 14], k3 = t3[e3 + 15], x3 = z(n3[0], S3 = n3[1], m3 = n3[2], b3 = n3[3], s3, 7, A[0]), b3 = z(b3, x3, S3, m3, c3, 12, A[1]), m3 = z(m3, b3, x3, S3, a3, 17, A[2]), S3 = z(S3, m3, b3, x3, h3, 22, A[3]);
          x3 = z(x3, S3, m3, b3, l3, 7, A[4]), b3 = z(b3, x3, S3, m3, f3, 12, A[5]), m3 = z(m3, b3, x3, S3, d3, 17, A[6]), S3 = z(S3, m3, b3, x3, u3, 22, A[7]), x3 = z(x3, S3, m3, b3, p3, 7, A[8]), b3 = z(b3, x3, S3, m3, _3, 12, A[9]), m3 = z(m3, b3, x3, S3, y3, 17, A[10]), S3 = z(S3, m3, b3, x3, g3, 22, A[11]), x3 = z(x3, S3, m3, b3, v3, 7, A[12]), b3 = z(b3, x3, S3, m3, B3, 12, A[13]), m3 = z(m3, b3, x3, S3, w3, 17, A[14]), x3 = H(x3, S3 = z(S3, m3, b3, x3, k3, 22, A[15]), m3, b3, c3, 5, A[16]), b3 = H(b3, x3, S3, m3, d3, 9, A[17]), m3 = H(m3, b3, x3, S3, g3, 14, A[18]), S3 = H(S3, m3, b3, x3, s3, 20, A[19]), x3 = H(x3, S3, m3, b3, f3, 5, A[20]), b3 = H(b3, x3, S3, m3, y3, 9, A[21]), m3 = H(m3, b3, x3, S3, k3, 14, A[22]), S3 = H(S3, m3, b3, x3, l3, 20, A[23]), x3 = H(x3, S3, m3, b3, _3, 5, A[24]), b3 = H(b3, x3, S3, m3, w3, 9, A[25]), m3 = H(m3, b3, x3, S3, h3, 14, A[26]), S3 = H(S3, m3, b3, x3, p3, 20, A[27]), x3 = H(x3, S3, m3, b3, B3, 5, A[28]), b3 = H(b3, x3, S3, m3, a3, 9, A[29]), m3 = H(m3, b3, x3, S3, u3, 14, A[30]), x3 = C(x3, S3 = H(S3, m3, b3, x3, v3, 20, A[31]), m3, b3, f3, 4, A[32]), b3 = C(b3, x3, S3, m3, p3, 11, A[33]), m3 = C(m3, b3, x3, S3, g3, 16, A[34]), S3 = C(S3, m3, b3, x3, w3, 23, A[35]), x3 = C(x3, S3, m3, b3, c3, 4, A[36]), b3 = C(b3, x3, S3, m3, l3, 11, A[37]), m3 = C(m3, b3, x3, S3, u3, 16, A[38]), S3 = C(S3, m3, b3, x3, y3, 23, A[39]), x3 = C(x3, S3, m3, b3, B3, 4, A[40]), b3 = C(b3, x3, S3, m3, s3, 11, A[41]), m3 = C(m3, b3, x3, S3, h3, 16, A[42]), S3 = C(S3, m3, b3, x3, d3, 23, A[43]), x3 = C(x3, S3, m3, b3, _3, 4, A[44]), b3 = C(b3, x3, S3, m3, v3, 11, A[45]), m3 = C(m3, b3, x3, S3, k3, 16, A[46]), x3 = R(x3, S3 = C(S3, m3, b3, x3, a3, 23, A[47]), m3, b3, s3, 6, A[48]), b3 = R(b3, x3, S3, m3, u3, 10, A[49]), m3 = R(m3, b3, x3, S3, w3, 15, A[50]), S3 = R(S3, m3, b3, x3, f3, 21, A[51]), x3 = R(x3, S3, m3, b3, v3, 6, A[52]), b3 = R(b3, x3, S3, m3, h3, 10, A[53]), m3 = R(m3, b3, x3, S3, y3, 15, A[54]), S3 = R(S3, m3, b3, x3, c3, 21, A[55]), x3 = R(x3, S3, m3, b3, p3, 6, A[56]), b3 = R(b3, x3, S3, m3, k3, 10, A[57]), m3 = R(m3, b3, x3, S3, d3, 15, A[58]), S3 = R(S3, m3, b3, x3, B3, 21, A[59]), x3 = R(x3, S3, m3, b3, l3, 6, A[60]), b3 = R(b3, x3, S3, m3, g3, 10, A[61]), m3 = R(m3, b3, x3, S3, a3, 15, A[62]), S3 = R(S3, m3, b3, x3, _3, 21, A[63]), n3[0] = n3[0] + x3 | 0, n3[1] = n3[1] + S3 | 0, n3[2] = n3[2] + m3 | 0, n3[3] = n3[3] + b3 | 0;
        }, _doFinalize: function() {
          for (var t3 = this._data, e3 = t3.words, r3 = 8 * this._nDataBytes, i3 = 8 * t3.sigBytes, o3 = (e3[i3 >>> 5] |= 128 << 24 - i3 % 32, y1.floor(r3 / 4294967296)), o3 = (e3[15 + (64 + i3 >>> 9 << 4)] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8), e3[14 + (64 + i3 >>> 9 << 4)] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8), t3.sigBytes = 4 * (e3.length + 1), this._process(), this._hash), n3 = o3.words, s3 = 0; s3 < 4; s3++) {
            var c3 = n3[s3];
            n3[s3] = 16711935 & (c3 << 8 | c3 >>> 24) | 4278255360 & (c3 << 24 | c3 >>> 8);
          }
          return o3;
        }, clone: function() {
          var t3 = v1.clone.call(this);
          return t3._hash = this._hash.clone(), t3;
        } }), p.MD5 = v1._createHelper(u), p.HmacMD5 = v1._createHmacHelper(u), u = (p = i).lib, X = u.WordArray, L = u.Hasher, u = p.algo, l = [], u = u.SHA1 = L.extend({ _doReset: function() {
          this._hash = new X.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
        }, _doProcessBlock: function(t3, e3) {
          for (var r3 = this._hash.words, i3 = r3[0], o3 = r3[1], n3 = r3[2], s3 = r3[3], c3 = r3[4], a3 = 0; a3 < 80; a3++) {
            a3 < 16 ? l[a3] = 0 | t3[e3 + a3] : (h3 = l[a3 - 3] ^ l[a3 - 8] ^ l[a3 - 14] ^ l[a3 - 16], l[a3] = h3 << 1 | h3 >>> 31);
            var h3 = (i3 << 5 | i3 >>> 27) + c3 + l[a3];
            h3 += a3 < 20 ? 1518500249 + (o3 & n3 | ~o3 & s3) : a3 < 40 ? 1859775393 + (o3 ^ n3 ^ s3) : a3 < 60 ? (o3 & n3 | o3 & s3 | n3 & s3) - 1894007588 : (o3 ^ n3 ^ s3) - 899497514, c3 = s3, s3 = n3, n3 = o3 << 30 | o3 >>> 2, o3 = i3, i3 = h3;
          }
          r3[0] = r3[0] + i3 | 0, r3[1] = r3[1] + o3 | 0, r3[2] = r3[2] + n3 | 0, r3[3] = r3[3] + s3 | 0, r3[4] = r3[4] + c3 | 0;
        }, _doFinalize: function() {
          var t3 = this._data, e3 = t3.words, r3 = 8 * this._nDataBytes, i3 = 8 * t3.sigBytes;
          return e3[i3 >>> 5] |= 128 << 24 - i3 % 32, e3[14 + (64 + i3 >>> 9 << 4)] = Math.floor(r3 / 4294967296), e3[15 + (64 + i3 >>> 9 << 4)] = r3, t3.sigBytes = 4 * e3.length, this._process(), this._hash;
        }, clone: function() {
          var t3 = L.clone.call(this);
          return t3._hash = this._hash.clone(), t3;
        } }), p.SHA1 = L._createHelper(u), p.HmacSHA1 = L._createHmacHelper(u);
        var w1 = Math, p = i, k1 = (u = p.lib).WordArray, x1 = u.Hasher, u = p.algo, b1 = [], m1 = [];
        function S1(t3) {
          return 4294967296 * (t3 - (0 | t3)) | 0;
        }
        for (var A1 = 2, z1 = 0; z1 < 64; ) !function(t3) {
          for (var e3 = w1.sqrt(t3), r3 = 2; r3 <= e3; r3++) if (!(t3 % r3)) return;
          return 1;
        }(A1) || (z1 < 8 && (b1[z1] = S1(w1.pow(A1, 0.5))), m1[z1] = S1(w1.pow(A1, 1 / 3)), z1++), A1++;
        var _ = [], u = u.SHA256 = x1.extend({ _doReset: function() {
          this._hash = new k1.init(b1.slice(0));
        }, _doProcessBlock: function(t3, e3) {
          for (var r3 = this._hash.words, i3 = r3[0], o3 = r3[1], n3 = r3[2], s3 = r3[3], c3 = r3[4], a3 = r3[5], h3 = r3[6], l3 = r3[7], f3 = 0; f3 < 64; f3++) {
            f3 < 16 ? _[f3] = 0 | t3[e3 + f3] : (d3 = _[f3 - 15], u3 = _[f3 - 2], _[f3] = ((d3 << 25 | d3 >>> 7) ^ (d3 << 14 | d3 >>> 18) ^ d3 >>> 3) + _[f3 - 7] + ((u3 << 15 | u3 >>> 17) ^ (u3 << 13 | u3 >>> 19) ^ u3 >>> 10) + _[f3 - 16]);
            var d3 = i3 & o3 ^ i3 & n3 ^ o3 & n3, u3 = l3 + ((c3 << 26 | c3 >>> 6) ^ (c3 << 21 | c3 >>> 11) ^ (c3 << 7 | c3 >>> 25)) + (c3 & a3 ^ ~c3 & h3) + m1[f3] + _[f3], l3 = h3, h3 = a3, a3 = c3, c3 = s3 + u3 | 0, s3 = n3, n3 = o3, o3 = i3, i3 = u3 + (((i3 << 30 | i3 >>> 2) ^ (i3 << 19 | i3 >>> 13) ^ (i3 << 10 | i3 >>> 22)) + d3) | 0;
          }
          r3[0] = r3[0] + i3 | 0, r3[1] = r3[1] + o3 | 0, r3[2] = r3[2] + n3 | 0, r3[3] = r3[3] + s3 | 0, r3[4] = r3[4] + c3 | 0, r3[5] = r3[5] + a3 | 0, r3[6] = r3[6] + h3 | 0, r3[7] = r3[7] + l3 | 0;
        }, _doFinalize: function() {
          var t3 = this._data, e3 = t3.words, r3 = 8 * this._nDataBytes, i3 = 8 * t3.sigBytes;
          return e3[i3 >>> 5] |= 128 << 24 - i3 % 32, e3[14 + (64 + i3 >>> 9 << 4)] = w1.floor(r3 / 4294967296), e3[15 + (64 + i3 >>> 9 << 4)] = r3, t3.sigBytes = 4 * e3.length, this._process(), this._hash;
        }, clone: function() {
          var t3 = x1.clone.call(this);
          return t3._hash = this._hash.clone(), t3;
        } }), p = (p.SHA256 = x1._createHelper(u), p.HmacSHA256 = x1._createHmacHelper(u), j = (p = i).lib.WordArray, u = p.algo, T = u.SHA256, u = u.SHA224 = T.extend({ _doReset: function() {
          this._hash = new j.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
        }, _doFinalize: function() {
          var t3 = T._doFinalize.call(this);
          return t3.sigBytes -= 4, t3;
        } }), p.SHA224 = T._createHelper(u), p.HmacSHA224 = T._createHmacHelper(u), i), H1 = p.lib.Hasher, y = (u = p.x64).Word, C1 = u.WordArray, u = p.algo;
        function g() {
          return y.create.apply(y, arguments);
        }
        for (var R1 = [g(1116352408, 3609767458), g(1899447441, 602891725), g(3049323471, 3964484399), g(3921009573, 2173295548), g(961987163, 4081628472), g(1508970993, 3053834265), g(2453635748, 2937671579), g(2870763221, 3664609560), g(3624381080, 2734883394), g(310598401, 1164996542), g(607225278, 1323610764), g(1426881987, 3590304994), g(1925078388, 4068182383), g(2162078206, 991336113), g(2614888103, 633803317), g(3248222580, 3479774868), g(3835390401, 2666613458), g(4022224774, 944711139), g(264347078, 2341262773), g(604807628, 2007800933), g(770255983, 1495990901), g(1249150122, 1856431235), g(1555081692, 3175218132), g(1996064986, 2198950837), g(2554220882, 3999719339), g(2821834349, 766784016), g(2952996808, 2566594879), g(3210313671, 3203337956), g(3336571891, 1034457026), g(3584528711, 2466948901), g(113926993, 3758326383), g(338241895, 168717936), g(666307205, 1188179964), g(773529912, 1546045734), g(1294757372, 1522805485), g(1396182291, 2643833823), g(1695183700, 2343527390), g(1986661051, 1014477480), g(2177026350, 1206759142), g(2456956037, 344077627), g(2730485921, 1290863460), g(2820302411, 3158454273), g(3259730800, 3505952657), g(3345764771, 106217008), g(3516065817, 3606008344), g(3600352804, 1432725776), g(4094571909, 1467031594), g(275423344, 851169720), g(430227734, 3100823752), g(506948616, 1363258195), g(659060556, 3750685593), g(883997877, 3785050280), g(958139571, 3318307427), g(1322822218, 3812723403), g(1537002063, 2003034995), g(1747873779, 3602036899), g(1955562222, 1575990012), g(2024104815, 1125592928), g(2227730452, 2716904306), g(2361852424, 442776044), g(2428436474, 593698344), g(2756734187, 3733110249), g(3204031479, 2999351573), g(3329325298, 3815920427), g(3391569614, 3928383900), g(3515267271, 566280711), g(3940187606, 3454069534), g(4118630271, 4000239992), g(116418474, 1914138554), g(174292421, 2731055270), g(289380356, 3203993006), g(460393269, 320620315), g(685471733, 587496836), g(852142971, 1086792851), g(1017036298, 365543100), g(1126000580, 2618297676), g(1288033470, 3409855158), g(1501505948, 4234509866), g(1607167915, 987167468), g(1816402316, 1246189591)], D1 = [], E1 = 0; E1 < 80; E1++) D1[E1] = g();
        u = u.SHA512 = H1.extend({ _doReset: function() {
          this._hash = new C1.init([new y.init(1779033703, 4089235720), new y.init(3144134277, 2227873595), new y.init(1013904242, 4271175723), new y.init(2773480762, 1595750129), new y.init(1359893119, 2917565137), new y.init(2600822924, 725511199), new y.init(528734635, 4215389547), new y.init(1541459225, 327033209)]);
        }, _doProcessBlock: function(W2, O2) {
          for (var t3 = this._hash.words, e3 = t3[0], r3 = t3[1], i3 = t3[2], o3 = t3[3], n3 = t3[4], s3 = t3[5], c3 = t3[6], t3 = t3[7], I2 = e3.high, a3 = e3.low, U2 = r3.high, h3 = r3.low, K2 = i3.high, l3 = i3.low, X2 = o3.high, f3 = o3.low, L2 = n3.high, d3 = n3.low, j2 = s3.high, u3 = s3.low, T2 = c3.high, p3 = c3.low, N2 = t3.high, _3 = t3.low, y3 = I2, g3 = a3, v3 = U2, B3 = h3, w3 = K2, k3 = l3, q2 = X2, x3 = f3, b3 = L2, m3 = d3, Z2 = j2, S3 = u3, V2 = T2, G2 = p3, J2 = N2, Q2 = _3, A3 = 0; A3 < 80; A3++) var z3, H3, C3 = D1[A3], R3 = (A3 < 16 ? (H3 = C3.high = 0 | W2[O2 + 2 * A3], z3 = C3.low = 0 | W2[O2 + 2 * A3 + 1]) : (F = (P2 = D1[A3 - 15]).high, P2 = P2.low, M2 = (E2 = D1[A3 - 2]).high, E2 = E2.low, D2 = (R3 = D1[A3 - 7]).high, R3 = R3.low, $3 = (Y2 = D1[A3 - 16]).high, H3 = (H3 = ((F >>> 1 | P2 << 31) ^ (F >>> 8 | P2 << 24) ^ F >>> 7) + D2 + ((z3 = (D2 = (P2 >>> 1 | F << 31) ^ (P2 >>> 8 | F << 24) ^ (P2 >>> 7 | F << 25)) + R3) >>> 0 < D2 >>> 0 ? 1 : 0)) + ((M2 >>> 19 | E2 << 13) ^ (M2 << 3 | E2 >>> 29) ^ M2 >>> 6) + ((z3 += P2 = (E2 >>> 19 | M2 << 13) ^ (E2 << 3 | M2 >>> 29) ^ (E2 >>> 6 | M2 << 26)) >>> 0 < P2 >>> 0 ? 1 : 0), z3 += F = Y2.low, C3.high = H3 = H3 + $3 + (z3 >>> 0 < F >>> 0 ? 1 : 0), C3.low = z3), b3 & Z2 ^ ~b3 & V2), D2 = m3 & S3 ^ ~m3 & G2, E2 = y3 & v3 ^ y3 & w3 ^ v3 & w3, M2 = (g3 >>> 28 | y3 << 4) ^ (g3 << 30 | y3 >>> 2) ^ (g3 << 25 | y3 >>> 7), P2 = R1[A3], Y2 = P2.high, $3 = P2.low, F = Q2 + ((m3 >>> 14 | b3 << 18) ^ (m3 >>> 18 | b3 << 14) ^ (m3 << 23 | b3 >>> 9)), C3 = J2 + ((b3 >>> 14 | m3 << 18) ^ (b3 >>> 18 | m3 << 14) ^ (b3 << 23 | m3 >>> 9)) + (F >>> 0 < Q2 >>> 0 ? 1 : 0), t12 = M2 + (g3 & B3 ^ g3 & k3 ^ B3 & k3), J2 = V2, Q2 = G2, V2 = Z2, G2 = S3, Z2 = b3, S3 = m3, b3 = q2 + (C3 = C3 + R3 + ((F = F + D2) >>> 0 < D2 >>> 0 ? 1 : 0) + Y2 + ((F = F + $3) >>> 0 < $3 >>> 0 ? 1 : 0) + H3 + ((F = F + z3) >>> 0 < z3 >>> 0 ? 1 : 0)) + ((m3 = x3 + F | 0) >>> 0 < x3 >>> 0 ? 1 : 0) | 0, q2 = w3, x3 = k3, w3 = v3, k3 = B3, v3 = y3, B3 = g3, y3 = C3 + (((y3 >>> 28 | g3 << 4) ^ (y3 << 30 | g3 >>> 2) ^ (y3 << 25 | g3 >>> 7)) + E2 + (t12 >>> 0 < M2 >>> 0 ? 1 : 0)) + ((g3 = F + t12 | 0) >>> 0 < F >>> 0 ? 1 : 0) | 0;
          a3 = e3.low = a3 + g3, e3.high = I2 + y3 + (a3 >>> 0 < g3 >>> 0 ? 1 : 0), h3 = r3.low = h3 + B3, r3.high = U2 + v3 + (h3 >>> 0 < B3 >>> 0 ? 1 : 0), l3 = i3.low = l3 + k3, i3.high = K2 + w3 + (l3 >>> 0 < k3 >>> 0 ? 1 : 0), f3 = o3.low = f3 + x3, o3.high = X2 + q2 + (f3 >>> 0 < x3 >>> 0 ? 1 : 0), d3 = n3.low = d3 + m3, n3.high = L2 + b3 + (d3 >>> 0 < m3 >>> 0 ? 1 : 0), u3 = s3.low = u3 + S3, s3.high = j2 + Z2 + (u3 >>> 0 < S3 >>> 0 ? 1 : 0), p3 = c3.low = p3 + G2, c3.high = T2 + V2 + (p3 >>> 0 < G2 >>> 0 ? 1 : 0), _3 = t3.low = _3 + Q2, t3.high = N2 + J2 + (_3 >>> 0 < Q2 >>> 0 ? 1 : 0);
        }, _doFinalize: function() {
          var t3 = this._data, e3 = t3.words, r3 = 8 * this._nDataBytes, i3 = 8 * t3.sigBytes;
          return e3[i3 >>> 5] |= 128 << 24 - i3 % 32, e3[30 + (128 + i3 >>> 10 << 5)] = Math.floor(r3 / 4294967296), e3[31 + (128 + i3 >>> 10 << 5)] = r3, t3.sigBytes = 4 * e3.length, this._process(), this._hash.toX32();
        }, clone: function() {
          var t3 = H1.clone.call(this);
          return t3._hash = this._hash.clone(), t3;
        }, blockSize: 32 }), p.SHA512 = H1._createHelper(u), p.HmacSHA512 = H1._createHmacHelper(u), u = (p = i).x64, t = u.Word, N = u.WordArray, u = p.algo, q = u.SHA512, u = u.SHA384 = q.extend({ _doReset: function() {
          this._hash = new N.init([new t.init(3418070365, 3238371032), new t.init(1654270250, 914150663), new t.init(2438529370, 812702999), new t.init(355462360, 4144912697), new t.init(1731405415, 4290775857), new t.init(2394180231, 1750603025), new t.init(3675008525, 1694076839), new t.init(1203062813, 3204075428)]);
        }, _doFinalize: function() {
          var t3 = q._doFinalize.call(this);
          return t3.sigBytes -= 16, t3;
        } }), p.SHA384 = q._createHelper(u), p.HmacSHA384 = q._createHmacHelper(u);
        for (var M1 = Math, p = i, P1 = (u = p.lib).WordArray, F1 = u.Hasher, W1 = p.x64.Word, u = p.algo, O1 = [], I1 = [], U1 = [], v = 1, B = 0, K1 = 0; K1 < 24; K1++) {
          O1[v + 5 * B] = (K1 + 1) * (K1 + 2) / 2 % 64;
          var X1 = (2 * v + 3 * B) % 5;
          v = B % 5, B = X1;
        }
        for (v = 0; v < 5; v++) for (B = 0; B < 5; B++) I1[v + 5 * B] = B + (2 * v + 3 * B) % 5 * 5;
        for (var L1 = 1, j1 = 0; j1 < 24; j1++) {
          for (var T1, N1 = 0, q1 = 0, Z1 = 0; Z1 < 7; Z1++) 1 & L1 && ((T1 = (1 << Z1) - 1) < 32 ? q1 ^= 1 << T1 : N1 ^= 1 << T1 - 32), 128 & L1 ? L1 = L1 << 1 ^ 113 : L1 <<= 1;
          U1[j1] = W1.create(N1, q1);
        }
        for (var D = [], V1 = 0; V1 < 25; V1++) D[V1] = W1.create();
        function G1(t3, e3, r3) {
          return t3 & e3 | ~t3 & r3;
        }
        function J1(t3, e3, r3) {
          return t3 & r3 | e3 & ~r3;
        }
        function Q1(t3, e3) {
          return t3 << e3 | t3 >>> 32 - e3;
        }
        function Y1(t3) {
          return "string" == typeof t3 ? f1 : o;
        }
        function $1(t3, e3, r3) {
          var i3, o3 = this._iv;
          o3 ? (i3 = o3, this._iv = void 0) : i3 = this._prevBlock;
          for (var n3 = 0; n3 < r3; n3++) t3[e3 + n3] ^= i3[n3];
        }
        function t2(t3, e3, r3, i3) {
          var o3, n3 = this._iv;
          n3 ? (o3 = n3.slice(0), this._iv = void 0) : o3 = this._prevBlock, i3.encryptBlock(o3, 0);
          for (var s3 = 0; s3 < r3; s3++) t3[e3 + s3] ^= o3[s3];
        }
        function e2(t3) {
          var e3, r3, i3;
          return 255 == (t3 >> 24 & 255) ? (r3 = t3 >> 8 & 255, i3 = 255 & t3, 255 === (e3 = t3 >> 16 & 255) ? (e3 = 0, 255 === r3 ? (r3 = 0, 255 === i3 ? i3 = 0 : ++i3) : ++r3) : ++e3, t3 = 0, t3 = (t3 += e3 << 16) + (r3 << 8) + i3) : t3 += 1 << 24, t3;
        }
        u = u.SHA3 = F1.extend({ cfg: F1.cfg.extend({ outputLength: 512 }), _doReset: function() {
          for (var t3 = this._state = [], e3 = 0; e3 < 25; e3++) t3[e3] = new W1.init();
          this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
        }, _doProcessBlock: function(t3, e3) {
          for (var r3 = this._state, i3 = this.blockSize / 2, o3 = 0; o3 < i3; o3++) {
            var n3 = t3[e3 + 2 * o3], s3 = t3[e3 + 2 * o3 + 1], n3 = 16711935 & (n3 << 8 | n3 >>> 24) | 4278255360 & (n3 << 24 | n3 >>> 8);
            (x3 = r3[o3]).high ^= 16711935 & (s3 << 8 | s3 >>> 24) | 4278255360 & (s3 << 24 | s3 >>> 8), x3.low ^= n3;
          }
          for (var c3 = 0; c3 < 24; c3++) {
            for (var a3 = 0; a3 < 5; a3++) {
              for (var h3 = 0, l3 = 0, f3 = 0; f3 < 5; f3++) h3 ^= (x3 = r3[a3 + 5 * f3]).high, l3 ^= x3.low;
              var d3 = D[a3];
              d3.high = h3, d3.low = l3;
            }
            for (a3 = 0; a3 < 5; a3++) for (var u3 = D[(a3 + 4) % 5], p3 = D[(a3 + 1) % 5], _3 = p3.high, p3 = p3.low, h3 = u3.high ^ (_3 << 1 | p3 >>> 31), l3 = u3.low ^ (p3 << 1 | _3 >>> 31), f3 = 0; f3 < 5; f3++) (x3 = r3[a3 + 5 * f3]).high ^= h3, x3.low ^= l3;
            for (var y3 = 1; y3 < 25; y3++) {
              var g3 = (x3 = r3[y3]).high, v3 = x3.low, B3 = O1[y3], g3 = (l3 = B3 < 32 ? (h3 = g3 << B3 | v3 >>> 32 - B3, v3 << B3 | g3 >>> 32 - B3) : (h3 = v3 << B3 - 32 | g3 >>> 64 - B3, g3 << B3 - 32 | v3 >>> 64 - B3), D[I1[y3]]);
              g3.high = h3, g3.low = l3;
            }
            var w3 = D[0], k3 = r3[0];
            w3.high = k3.high, w3.low = k3.low;
            for (a3 = 0; a3 < 5; a3++) for (f3 = 0; f3 < 5; f3++) {
              var x3 = r3[y3 = a3 + 5 * f3], b3 = D[y3], m3 = D[(a3 + 1) % 5 + 5 * f3], S3 = D[(a3 + 2) % 5 + 5 * f3];
              x3.high = b3.high ^ ~m3.high & S3.high, x3.low = b3.low ^ ~m3.low & S3.low;
            }
            x3 = r3[0], w3 = U1[c3];
            x3.high ^= w3.high, x3.low ^= w3.low;
          }
        }, _doFinalize: function() {
          for (var t3 = this._data, e3 = t3.words, r3 = (this._nDataBytes, 8 * t3.sigBytes), i3 = 32 * this.blockSize, o3 = (e3[r3 >>> 5] |= 1 << 24 - r3 % 32, e3[(M1.ceil((1 + r3) / i3) * i3 >>> 5) - 1] |= 128, t3.sigBytes = 4 * e3.length, this._process(), this._state), r3 = this.cfg.outputLength / 8, n3 = r3 / 8, s3 = [], c3 = 0; c3 < n3; c3++) {
            var a3 = o3[c3], h3 = a3.high, a3 = a3.low, h3 = 16711935 & (h3 << 8 | h3 >>> 24) | 4278255360 & (h3 << 24 | h3 >>> 8);
            s3.push(16711935 & (a3 << 8 | a3 >>> 24) | 4278255360 & (a3 << 24 | a3 >>> 8)), s3.push(h3);
          }
          return new P1.init(s3, r3);
        }, clone: function() {
          for (var t3 = F1.clone.call(this), e3 = t3._state = this._state.slice(0), r3 = 0; r3 < 25; r3++) e3[r3] = e3[r3].clone();
          return t3;
        } }), p.SHA3 = F1._createHelper(u), p.HmacSHA3 = F1._createHmacHelper(u), Math, u = (p = i).lib, e = u.WordArray, Z = u.Hasher, u = p.algo, V = e.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]), G = e.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]), J = e.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]), Q = e.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]), Y = e.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), $2 = e.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), u = u.RIPEMD160 = Z.extend({ _doReset: function() {
          this._hash = e.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
        }, _doProcessBlock: function(t3, e3) {
          for (var r3 = 0; r3 < 16; r3++) {
            var i3 = e3 + r3, o3 = t3[i3];
            t3[i3] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8);
          }
          for (var n3, s3, c3, a3, h3, l3, f3 = this._hash.words, d3 = Y.words, u3 = $2.words, p3 = V.words, _3 = G.words, y3 = J.words, g3 = Q.words, v3 = n3 = f3[0], B3 = s3 = f3[1], w3 = c3 = f3[2], k3 = a3 = f3[3], x3 = h3 = f3[4], r3 = 0; r3 < 80; r3 += 1) l3 = (l3 = Q1(l3 = (l3 = n3 + t3[e3 + p3[r3]] | 0) + (r3 < 16 ? (s3 ^ c3 ^ a3) + d3[0] : r3 < 32 ? G1(s3, c3, a3) + d3[1] : r3 < 48 ? ((s3 | ~c3) ^ a3) + d3[2] : r3 < 64 ? J1(s3, c3, a3) + d3[3] : (s3 ^ (c3 | ~a3)) + d3[4]) | 0, y3[r3])) + h3 | 0, n3 = h3, h3 = a3, a3 = Q1(c3, 10), c3 = s3, s3 = l3, l3 = (l3 = Q1(l3 = (l3 = v3 + t3[e3 + _3[r3]] | 0) + (r3 < 16 ? (B3 ^ (w3 | ~k3)) + u3[0] : r3 < 32 ? J1(B3, w3, k3) + u3[1] : r3 < 48 ? ((B3 | ~w3) ^ k3) + u3[2] : r3 < 64 ? G1(B3, w3, k3) + u3[3] : (B3 ^ w3 ^ k3) + u3[4]) | 0, g3[r3])) + x3 | 0, v3 = x3, x3 = k3, k3 = Q1(w3, 10), w3 = B3, B3 = l3;
          l3 = f3[1] + c3 + k3 | 0, f3[1] = f3[2] + a3 + x3 | 0, f3[2] = f3[3] + h3 + v3 | 0, f3[3] = f3[4] + n3 + B3 | 0, f3[4] = f3[0] + s3 + w3 | 0, f3[0] = l3;
        }, _doFinalize: function() {
          for (var t3 = this._data, e3 = t3.words, r3 = 8 * this._nDataBytes, i3 = 8 * t3.sigBytes, i3 = (e3[i3 >>> 5] |= 128 << 24 - i3 % 32, e3[14 + (64 + i3 >>> 9 << 4)] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8), t3.sigBytes = 4 * (e3.length + 1), this._process(), this._hash), o3 = i3.words, n3 = 0; n3 < 5; n3++) {
            var s3 = o3[n3];
            o3[n3] = 16711935 & (s3 << 8 | s3 >>> 24) | 4278255360 & (s3 << 24 | s3 >>> 8);
          }
          return i3;
        }, clone: function() {
          var t3 = Z.clone.call(this);
          return t3._hash = this._hash.clone(), t3;
        } }), p.RIPEMD160 = Z._createHelper(u), p.HmacRIPEMD160 = Z._createHmacHelper(u), u = (p = i).lib.Base, t1 = p.enc.Utf8, p.algo.HMAC = u.extend({ init: function(t3, e3) {
          t3 = this._hasher = new t3.init(), "string" == typeof e3 && (e3 = t1.parse(e3));
          for (var r3 = t3.blockSize, i3 = 4 * r3, t3 = ((e3 = e3.sigBytes > i3 ? t3.finalize(e3) : e3).clamp(), this._oKey = e3.clone()), e3 = this._iKey = e3.clone(), o3 = t3.words, n3 = e3.words, s3 = 0; s3 < r3; s3++) o3[s3] ^= 1549556828, n3[s3] ^= 909522486;
          t3.sigBytes = e3.sigBytes = i3, this.reset();
        }, reset: function() {
          var t3 = this._hasher;
          t3.reset(), t3.update(this._iKey);
        }, update: function(t3) {
          return this._hasher.update(t3), this;
        }, finalize: function(t3) {
          var e3 = this._hasher, t3 = e3.finalize(t3);
          return e3.reset(), e3.finalize(this._oKey.clone().concat(t3));
        } }), u = (p = i).lib, w = u.Base, e1 = u.WordArray, u = p.algo, P = u.SHA256, r1 = u.HMAC, i1 = u.PBKDF2 = w.extend({ cfg: w.extend({ keySize: 4, hasher: P, iterations: 25e4 }), init: function(t3) {
          this.cfg = this.cfg.extend(t3);
        }, compute: function(t3, e3) {
          for (var r3 = this.cfg, i3 = r1.create(r3.hasher, t3), o3 = e1.create(), n3 = e1.create([1]), s3 = o3.words, c3 = n3.words, a3 = r3.keySize, h3 = r3.iterations; s3.length < a3; ) {
            for (var l3 = i3.update(e3).finalize(n3), f3 = (i3.reset(), l3.words), d3 = f3.length, u3 = l3, p3 = 1; p3 < h3; p3++) {
              u3 = i3.finalize(u3), i3.reset();
              for (var _3 = u3.words, y3 = 0; y3 < d3; y3++) f3[y3] ^= _3[y3];
            }
            o3.concat(l3), c3[0]++;
          }
          return o3.sigBytes = 4 * a3, o3;
        } }), p.PBKDF2 = function(t3, e3, r3) {
          return i1.create(r3).compute(t3, e3);
        }, w = (u = i).lib, P = w.Base, o1 = w.WordArray, w = u.algo, p = w.MD5, n1 = w.EvpKDF = P.extend({ cfg: P.extend({ keySize: 4, hasher: p, iterations: 1 }), init: function(t3) {
          this.cfg = this.cfg.extend(t3);
        }, compute: function(t3, e3) {
          for (var r3, i3 = this.cfg, o3 = i3.hasher.create(), n3 = o1.create(), s3 = n3.words, c3 = i3.keySize, a3 = i3.iterations; s3.length < c3; ) {
            r3 && o3.update(r3), r3 = o3.update(t3).finalize(e3), o3.reset();
            for (var h3 = 1; h3 < a3; h3++) r3 = o3.finalize(r3), o3.reset();
            n3.concat(r3);
          }
          return n3.sigBytes = 4 * c3, n3;
        } }), u.EvpKDF = function(t3, e3, r3) {
          return n1.create(r3).compute(t3, e3);
        }, i.lib.Cipher || (P = (w = i).lib, p = P.Base, s = P.WordArray, s1 = P.BufferedBlockAlgorithm, (u = w.enc).Utf8, c1 = u.Base64, a1 = w.algo.EvpKDF, h1 = P.Cipher = s1.extend({ cfg: p.extend(), createEncryptor: function(t3, e3) {
          return this.create(this._ENC_XFORM_MODE, t3, e3);
        }, createDecryptor: function(t3, e3) {
          return this.create(this._DEC_XFORM_MODE, t3, e3);
        }, init: function(t3, e3, r3) {
          this.cfg = this.cfg.extend(r3), this._xformMode = t3, this._key = e3, this.reset();
        }, reset: function() {
          s1.reset.call(this), this._doReset();
        }, process: function(t3) {
          return this._append(t3), this._process();
        }, finalize: function(t3) {
          return t3 && this._append(t3), this._doFinalize();
        }, keySize: 4, ivSize: 4, _ENC_XFORM_MODE: 1, _DEC_XFORM_MODE: 2, _createHelper: function(i3) {
          return { encrypt: function(t3, e3, r3) {
            return Y1(e3).encrypt(i3, t3, e3, r3);
          }, decrypt: function(t3, e3, r3) {
            return Y1(e3).decrypt(i3, t3, e3, r3);
          } };
        } }), P.StreamCipher = h1.extend({ _doFinalize: function() {
          return this._process(true);
        }, blockSize: 1 }), u = w.mode = {}, r = P.BlockCipherMode = p.extend({ createEncryptor: function(t3, e3) {
          return this.Encryptor.create(t3, e3);
        }, createDecryptor: function(t3, e3) {
          return this.Decryptor.create(t3, e3);
        }, init: function(t3, e3) {
          this._cipher = t3, this._iv = e3;
        } }), r = u.CBC = ((u = r.extend()).Encryptor = u.extend({ processBlock: function(t3, e3) {
          var r3 = this._cipher, i3 = r3.blockSize;
          $1.call(this, t3, e3, i3), r3.encryptBlock(t3, e3), this._prevBlock = t3.slice(e3, e3 + i3);
        } }), u.Decryptor = u.extend({ processBlock: function(t3, e3) {
          var r3 = this._cipher, i3 = r3.blockSize, o3 = t3.slice(e3, e3 + i3);
          r3.decryptBlock(t3, e3), $1.call(this, t3, e3, i3), this._prevBlock = o3;
        } }), u), u = (w.pad = {}).Pkcs7 = { pad: function(t3, e3) {
          for (var e3 = 4 * e3, r3 = e3 - t3.sigBytes % e3, i3 = r3 << 24 | r3 << 16 | r3 << 8 | r3, o3 = [], n3 = 0; n3 < r3; n3 += 4) o3.push(i3);
          e3 = s.create(o3, r3);
          t3.concat(e3);
        }, unpad: function(t3) {
          var e3 = 255 & t3.words[t3.sigBytes - 1 >>> 2];
          t3.sigBytes -= e3;
        } }, P.BlockCipher = h1.extend({ cfg: h1.cfg.extend({ mode: r, padding: u }), reset: function() {
          h1.reset.call(this);
          var t3, e3 = this.cfg, r3 = e3.iv, e3 = e3.mode;
          this._xformMode == this._ENC_XFORM_MODE ? t3 = e3.createEncryptor : (t3 = e3.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == t3 ? this._mode.init(this, r3 && r3.words) : (this._mode = t3.call(e3, this, r3 && r3.words), this._mode.__creator = t3);
        }, _doProcessBlock: function(t3, e3) {
          this._mode.processBlock(t3, e3);
        }, _doFinalize: function() {
          var t3, e3 = this.cfg.padding;
          return this._xformMode == this._ENC_XFORM_MODE ? (e3.pad(this._data, this.blockSize), t3 = this._process(true)) : (t3 = this._process(true), e3.unpad(t3)), t3;
        }, blockSize: 4 }), l1 = P.CipherParams = p.extend({ init: function(t3) {
          this.mixIn(t3);
        }, toString: function(t3) {
          return (t3 || this.formatter).stringify(this);
        } }), r = (w.format = {}).OpenSSL = { stringify: function(t3) {
          var e3 = t3.ciphertext, t3 = t3.salt, t3 = t3 ? s.create([1398893684, 1701076831]).concat(t3).concat(e3) : e3;
          return t3.toString(c1);
        }, parse: function(t3) {
          var e3, t3 = c1.parse(t3), r3 = t3.words;
          return 1398893684 == r3[0] && 1701076831 == r3[1] && (e3 = s.create(r3.slice(2, 4)), r3.splice(0, 4), t3.sigBytes -= 16), l1.create({ ciphertext: t3, salt: e3 });
        } }, o = P.SerializableCipher = p.extend({ cfg: p.extend({ format: r }), encrypt: function(t3, e3, r3, i3) {
          i3 = this.cfg.extend(i3);
          var o3 = t3.createEncryptor(r3, i3), e3 = o3.finalize(e3), o3 = o3.cfg;
          return l1.create({ ciphertext: e3, key: r3, iv: o3.iv, algorithm: t3, mode: o3.mode, padding: o3.padding, blockSize: t3.blockSize, formatter: i3.format });
        }, decrypt: function(t3, e3, r3, i3) {
          return i3 = this.cfg.extend(i3), e3 = this._parse(e3, i3.format), t3.createDecryptor(r3, i3).finalize(e3.ciphertext);
        }, _parse: function(t3, e3) {
          return "string" == typeof t3 ? e3.parse(t3, this) : t3;
        } }), u = (w.kdf = {}).OpenSSL = { execute: function(t3, e3, r3, i3, o3) {
          i3 = i3 || s.random(8), o3 = (o3 ? a1.create({ keySize: e3 + r3, hasher: o3 }) : a1.create({ keySize: e3 + r3 })).compute(t3, i3);
          t3 = s.create(o3.words.slice(e3), 4 * r3);
          return o3.sigBytes = 4 * e3, l1.create({ key: o3, iv: t3, salt: i3 });
        } }, f1 = P.PasswordBasedCipher = o.extend({ cfg: o.cfg.extend({ kdf: u }), encrypt: function(t3, e3, r3, i3) {
          r3 = (i3 = this.cfg.extend(i3)).kdf.execute(r3, t3.keySize, t3.ivSize, i3.salt, i3.hasher), i3.iv = r3.iv, t3 = o.encrypt.call(this, t3, e3, r3.key, i3);
          return t3.mixIn(r3), t3;
        }, decrypt: function(t3, e3, r3, i3) {
          i3 = this.cfg.extend(i3), e3 = this._parse(e3, i3.format);
          r3 = i3.kdf.execute(r3, t3.keySize, t3.ivSize, e3.salt, i3.hasher);
          return i3.iv = r3.iv, o.decrypt.call(this, t3, e3, r3.key, i3);
        } })), i.mode.CFB = ((p = i.lib.BlockCipherMode.extend()).Encryptor = p.extend({ processBlock: function(t3, e3) {
          var r3 = this._cipher, i3 = r3.blockSize;
          t2.call(this, t3, e3, i3, r3), this._prevBlock = t3.slice(e3, e3 + i3);
        } }), p.Decryptor = p.extend({ processBlock: function(t3, e3) {
          var r3 = this._cipher, i3 = r3.blockSize, o3 = t3.slice(e3, e3 + i3);
          t2.call(this, t3, e3, i3, r3), this._prevBlock = o3;
        } }), p), i.mode.CTR = (r = i.lib.BlockCipherMode.extend(), w = r.Encryptor = r.extend({ processBlock: function(t3, e3) {
          var r3 = this._cipher, i3 = r3.blockSize, o3 = this._iv, n3 = this._counter, s3 = (o3 && (n3 = this._counter = o3.slice(0), this._iv = void 0), n3.slice(0));
          r3.encryptBlock(s3, 0), n3[i3 - 1] = n3[i3 - 1] + 1 | 0;
          for (var c3 = 0; c3 < i3; c3++) t3[e3 + c3] ^= s3[c3];
        } }), r.Decryptor = w, r), i.mode.CTRGladman = (P = i.lib.BlockCipherMode.extend(), u = P.Encryptor = P.extend({ processBlock: function(t3, e3) {
          var r3 = this._cipher, i3 = r3.blockSize, o3 = this._iv, n3 = this._counter, s3 = (o3 && (n3 = this._counter = o3.slice(0), this._iv = void 0), 0 === ((o3 = n3)[0] = e2(o3[0])) && (o3[1] = e2(o3[1])), n3.slice(0));
          r3.encryptBlock(s3, 0);
          for (var c3 = 0; c3 < i3; c3++) t3[e3 + c3] ^= s3[c3];
        } }), P.Decryptor = u, P), i.mode.OFB = (p = i.lib.BlockCipherMode.extend(), w = p.Encryptor = p.extend({ processBlock: function(t3, e3) {
          var r3 = this._cipher, i3 = r3.blockSize, o3 = this._iv, n3 = this._keystream;
          o3 && (n3 = this._keystream = o3.slice(0), this._iv = void 0), r3.encryptBlock(n3, 0);
          for (var s3 = 0; s3 < i3; s3++) t3[e3 + s3] ^= n3[s3];
        } }), p.Decryptor = w, p), i.mode.ECB = ((u = i.lib.BlockCipherMode.extend()).Encryptor = u.extend({ processBlock: function(t3, e3) {
          this._cipher.encryptBlock(t3, e3);
        } }), u.Decryptor = u.extend({ processBlock: function(t3, e3) {
          this._cipher.decryptBlock(t3, e3);
        } }), u), i.pad.AnsiX923 = { pad: function(t3, e3) {
          var r3 = t3.sigBytes, e3 = 4 * e3, e3 = e3 - r3 % e3, r3 = r3 + e3 - 1;
          t3.clamp(), t3.words[r3 >>> 2] |= e3 << 24 - r3 % 4 * 8, t3.sigBytes += e3;
        }, unpad: function(t3) {
          var e3 = 255 & t3.words[t3.sigBytes - 1 >>> 2];
          t3.sigBytes -= e3;
        } }, i.pad.Iso10126 = { pad: function(t3, e3) {
          e3 *= 4, e3 -= t3.sigBytes % e3;
          t3.concat(i.lib.WordArray.random(e3 - 1)).concat(i.lib.WordArray.create([e3 << 24], 1));
        }, unpad: function(t3) {
          var e3 = 255 & t3.words[t3.sigBytes - 1 >>> 2];
          t3.sigBytes -= e3;
        } }, i.pad.Iso97971 = { pad: function(t3, e3) {
          t3.concat(i.lib.WordArray.create([2147483648], 1)), i.pad.ZeroPadding.pad(t3, e3);
        }, unpad: function(t3) {
          i.pad.ZeroPadding.unpad(t3), t3.sigBytes--;
        } }, i.pad.ZeroPadding = { pad: function(t3, e3) {
          e3 *= 4;
          t3.clamp(), t3.sigBytes += e3 - (t3.sigBytes % e3 || e3);
        }, unpad: function(t3) {
          for (var e3 = t3.words, r3 = t3.sigBytes - 1, r3 = t3.sigBytes - 1; 0 <= r3; r3--) if (e3[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255) {
            t3.sigBytes = r3 + 1;
            break;
          }
        } }, i.pad.NoPadding = { pad: function() {
        }, unpad: function() {
        } }, d1 = (P = i).lib.CipherParams, u1 = P.enc.Hex, P.format.Hex = { stringify: function(t3) {
          return t3.ciphertext.toString(u1);
        }, parse: function(t3) {
          t3 = u1.parse(t3);
          return d1.create({ ciphertext: t3 });
        } };
        for (var w = i, p = w.lib.BlockCipher, u = w.algo, k = [], r2 = [], i2 = [], o2 = [], n2 = [], s2 = [], c2 = [], a2 = [], h2 = [], l2 = [], x = [], b = 0; b < 256; b++) x[b] = b < 128 ? b << 1 : b << 1 ^ 283;
        for (var m = 0, S = 0, b = 0; b < 256; b++) {
          var E = S ^ S << 1 ^ S << 2 ^ S << 3 ^ S << 4, f2 = (k[m] = E = E >>> 8 ^ 255 & E ^ 99, x[r2[E] = m]), d2 = x[f2], u2 = x[d2], M = 257 * x[E] ^ 16843008 * E;
          i2[m] = M << 24 | M >>> 8, o2[m] = M << 16 | M >>> 16, n2[m] = M << 8 | M >>> 24, s2[m] = M, c2[E] = (M = 16843009 * u2 ^ 65537 * d2 ^ 257 * f2 ^ 16843008 * m) << 24 | M >>> 8, a2[E] = M << 16 | M >>> 16, h2[E] = M << 8 | M >>> 24, l2[E] = M, m ? (m = f2 ^ x[x[x[u2 ^ f2]]], S ^= x[x[S]]) : m = S = 1;
        }
        var p2 = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], u = u.AES = p.extend({ _doReset: function() {
          if (!this._nRounds || this._keyPriorReset !== this._key) {
            for (var t3 = this._keyPriorReset = this._key, e3 = t3.words, r3 = t3.sigBytes / 4, i3 = 4 * (1 + (this._nRounds = 6 + r3)), o3 = this._keySchedule = [], n3 = 0; n3 < i3; n3++) n3 < r3 ? o3[n3] = e3[n3] : (a3 = o3[n3 - 1], n3 % r3 ? 6 < r3 && n3 % r3 == 4 && (a3 = k[a3 >>> 24] << 24 | k[a3 >>> 16 & 255] << 16 | k[a3 >>> 8 & 255] << 8 | k[255 & a3]) : (a3 = k[(a3 = a3 << 8 | a3 >>> 24) >>> 24] << 24 | k[a3 >>> 16 & 255] << 16 | k[a3 >>> 8 & 255] << 8 | k[255 & a3], a3 ^= p2[n3 / r3 | 0] << 24), o3[n3] = o3[n3 - r3] ^ a3);
            for (var s3 = this._invKeySchedule = [], c3 = 0; c3 < i3; c3++) {
              var a3, n3 = i3 - c3;
              a3 = c3 % 4 ? o3[n3] : o3[n3 - 4], s3[c3] = c3 < 4 || n3 <= 4 ? a3 : c2[k[a3 >>> 24]] ^ a2[k[a3 >>> 16 & 255]] ^ h2[k[a3 >>> 8 & 255]] ^ l2[k[255 & a3]];
            }
          }
        }, encryptBlock: function(t3, e3) {
          this._doCryptBlock(t3, e3, this._keySchedule, i2, o2, n2, s2, k);
        }, decryptBlock: function(t3, e3) {
          var r3 = t3[e3 + 1], r3 = (t3[e3 + 1] = t3[e3 + 3], t3[e3 + 3] = r3, this._doCryptBlock(t3, e3, this._invKeySchedule, c2, a2, h2, l2, r2), t3[e3 + 1]);
          t3[e3 + 1] = t3[e3 + 3], t3[e3 + 3] = r3;
        }, _doCryptBlock: function(t3, e3, r3, i3, o3, n3, s3, c3) {
          for (var a3 = this._nRounds, h3 = t3[e3] ^ r3[0], l3 = t3[e3 + 1] ^ r3[1], f3 = t3[e3 + 2] ^ r3[2], d3 = t3[e3 + 3] ^ r3[3], u3 = 4, p3 = 1; p3 < a3; p3++) var _3 = i3[h3 >>> 24] ^ o3[l3 >>> 16 & 255] ^ n3[f3 >>> 8 & 255] ^ s3[255 & d3] ^ r3[u3++], y3 = i3[l3 >>> 24] ^ o3[f3 >>> 16 & 255] ^ n3[d3 >>> 8 & 255] ^ s3[255 & h3] ^ r3[u3++], g3 = i3[f3 >>> 24] ^ o3[d3 >>> 16 & 255] ^ n3[h3 >>> 8 & 255] ^ s3[255 & l3] ^ r3[u3++], v3 = i3[d3 >>> 24] ^ o3[h3 >>> 16 & 255] ^ n3[l3 >>> 8 & 255] ^ s3[255 & f3] ^ r3[u3++], h3 = _3, l3 = y3, f3 = g3, d3 = v3;
          _3 = (c3[h3 >>> 24] << 24 | c3[l3 >>> 16 & 255] << 16 | c3[f3 >>> 8 & 255] << 8 | c3[255 & d3]) ^ r3[u3++], y3 = (c3[l3 >>> 24] << 24 | c3[f3 >>> 16 & 255] << 16 | c3[d3 >>> 8 & 255] << 8 | c3[255 & h3]) ^ r3[u3++], g3 = (c3[f3 >>> 24] << 24 | c3[d3 >>> 16 & 255] << 16 | c3[h3 >>> 8 & 255] << 8 | c3[255 & l3]) ^ r3[u3++], v3 = (c3[d3 >>> 24] << 24 | c3[h3 >>> 16 & 255] << 16 | c3[l3 >>> 8 & 255] << 8 | c3[255 & f3]) ^ r3[u3++];
          t3[e3] = _3, t3[e3 + 1] = y3, t3[e3 + 2] = g3, t3[e3 + 3] = v3;
        }, keySize: 8 }), P = (w.AES = p._createHelper(u), i), _2 = (w = P.lib).WordArray, w = w.BlockCipher, p = P.algo, y2 = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4], g2 = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32], v2 = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], B2 = [{ 0: 8421888, 268435456: 32768, 536870912: 8421378, 805306368: 2, 1073741824: 512, 1342177280: 8421890, 1610612736: 8389122, 1879048192: 8388608, 2147483648: 514, 2415919104: 8389120, 2684354560: 33280, 2952790016: 8421376, 3221225472: 32770, 3489660928: 8388610, 3758096384: 0, 4026531840: 33282, 134217728: 0, 402653184: 8421890, 671088640: 33282, 939524096: 32768, 1207959552: 8421888, 1476395008: 512, 1744830464: 8421378, 2013265920: 2, 2281701376: 8389120, 2550136832: 33280, 2818572288: 8421376, 3087007744: 8389122, 3355443200: 8388610, 3623878656: 32770, 3892314112: 514, 4160749568: 8388608, 1: 32768, 268435457: 2, 536870913: 8421888, 805306369: 8388608, 1073741825: 8421378, 1342177281: 33280, 1610612737: 512, 1879048193: 8389122, 2147483649: 8421890, 2415919105: 8421376, 2684354561: 8388610, 2952790017: 33282, 3221225473: 514, 3489660929: 8389120, 3758096385: 32770, 4026531841: 0, 134217729: 8421890, 402653185: 8421376, 671088641: 8388608, 939524097: 512, 1207959553: 32768, 1476395009: 8388610, 1744830465: 2, 2013265921: 33282, 2281701377: 32770, 2550136833: 8389122, 2818572289: 514, 3087007745: 8421888, 3355443201: 8389120, 3623878657: 0, 3892314113: 33280, 4160749569: 8421378 }, { 0: 1074282512, 16777216: 16384, 33554432: 524288, 50331648: 1074266128, 67108864: 1073741840, 83886080: 1074282496, 100663296: 1073758208, 117440512: 16, 134217728: 540672, 150994944: 1073758224, 167772160: 1073741824, 184549376: 540688, 201326592: 524304, 218103808: 0, 234881024: 16400, 251658240: 1074266112, 8388608: 1073758208, 25165824: 540688, 41943040: 16, 58720256: 1073758224, 75497472: 1074282512, 92274688: 1073741824, 109051904: 524288, 125829120: 1074266128, 142606336: 524304, 159383552: 0, 176160768: 16384, 192937984: 1074266112, 209715200: 1073741840, 226492416: 540672, 243269632: 1074282496, 260046848: 16400, 268435456: 0, 285212672: 1074266128, 301989888: 1073758224, 318767104: 1074282496, 335544320: 1074266112, 352321536: 16, 369098752: 540688, 385875968: 16384, 402653184: 16400, 419430400: 524288, 436207616: 524304, 452984832: 1073741840, 469762048: 540672, 486539264: 1073758208, 503316480: 1073741824, 520093696: 1074282512, 276824064: 540688, 293601280: 524288, 310378496: 1074266112, 327155712: 16384, 343932928: 1073758208, 360710144: 1074282512, 377487360: 16, 394264576: 1073741824, 411041792: 1074282496, 427819008: 1073741840, 444596224: 1073758224, 461373440: 524304, 478150656: 0, 494927872: 16400, 511705088: 1074266128, 528482304: 540672 }, { 0: 260, 1048576: 0, 2097152: 67109120, 3145728: 65796, 4194304: 65540, 5242880: 67108868, 6291456: 67174660, 7340032: 67174400, 8388608: 67108864, 9437184: 67174656, 10485760: 65792, 11534336: 67174404, 12582912: 67109124, 13631488: 65536, 14680064: 4, 15728640: 256, 524288: 67174656, 1572864: 67174404, 2621440: 0, 3670016: 67109120, 4718592: 67108868, 5767168: 65536, 6815744: 65540, 7864320: 260, 8912896: 4, 9961472: 256, 11010048: 67174400, 12058624: 65796, 13107200: 65792, 14155776: 67109124, 15204352: 67174660, 16252928: 67108864, 16777216: 67174656, 17825792: 65540, 18874368: 65536, 19922944: 67109120, 20971520: 256, 22020096: 67174660, 23068672: 67108868, 24117248: 0, 25165824: 67109124, 26214400: 67108864, 27262976: 4, 28311552: 65792, 29360128: 67174400, 30408704: 260, 31457280: 65796, 32505856: 67174404, 17301504: 67108864, 18350080: 260, 19398656: 67174656, 20447232: 0, 21495808: 65540, 22544384: 67109120, 23592960: 256, 24641536: 67174404, 25690112: 65536, 26738688: 67174660, 27787264: 65796, 28835840: 67108868, 29884416: 67109124, 30932992: 67174400, 31981568: 4, 33030144: 65792 }, { 0: 2151682048, 65536: 2147487808, 131072: 4198464, 196608: 2151677952, 262144: 0, 327680: 4198400, 393216: 2147483712, 458752: 4194368, 524288: 2147483648, 589824: 4194304, 655360: 64, 720896: 2147487744, 786432: 2151678016, 851968: 4160, 917504: 4096, 983040: 2151682112, 32768: 2147487808, 98304: 64, 163840: 2151678016, 229376: 2147487744, 294912: 4198400, 360448: 2151682112, 425984: 0, 491520: 2151677952, 557056: 4096, 622592: 2151682048, 688128: 4194304, 753664: 4160, 819200: 2147483648, 884736: 4194368, 950272: 4198464, 1015808: 2147483712, 1048576: 4194368, 1114112: 4198400, 1179648: 2147483712, 1245184: 0, 1310720: 4160, 1376256: 2151678016, 1441792: 2151682048, 1507328: 2147487808, 1572864: 2151682112, 1638400: 2147483648, 1703936: 2151677952, 1769472: 4198464, 1835008: 2147487744, 1900544: 4194304, 1966080: 64, 2031616: 4096, 1081344: 2151677952, 1146880: 2151682112, 1212416: 0, 1277952: 4198400, 1343488: 4194368, 1409024: 2147483648, 1474560: 2147487808, 1540096: 64, 1605632: 2147483712, 1671168: 4096, 1736704: 2147487744, 1802240: 2151678016, 1867776: 4160, 1933312: 2151682048, 1998848: 4194304, 2064384: 4198464 }, { 0: 128, 4096: 17039360, 8192: 262144, 12288: 536870912, 16384: 537133184, 20480: 16777344, 24576: 553648256, 28672: 262272, 32768: 16777216, 36864: 537133056, 40960: 536871040, 45056: 553910400, 49152: 553910272, 53248: 0, 57344: 17039488, 61440: 553648128, 2048: 17039488, 6144: 553648256, 10240: 128, 14336: 17039360, 18432: 262144, 22528: 537133184, 26624: 553910272, 30720: 536870912, 34816: 537133056, 38912: 0, 43008: 553910400, 47104: 16777344, 51200: 536871040, 55296: 553648128, 59392: 16777216, 63488: 262272, 65536: 262144, 69632: 128, 73728: 536870912, 77824: 553648256, 81920: 16777344, 86016: 553910272, 90112: 537133184, 94208: 16777216, 98304: 553910400, 102400: 553648128, 106496: 17039360, 110592: 537133056, 114688: 262272, 118784: 536871040, 122880: 0, 126976: 17039488, 67584: 553648256, 71680: 16777216, 75776: 17039360, 79872: 537133184, 83968: 536870912, 88064: 17039488, 92160: 128, 96256: 553910272, 100352: 262272, 104448: 553910400, 108544: 0, 112640: 553648128, 116736: 16777344, 120832: 262144, 124928: 537133056, 129024: 536871040 }, { 0: 268435464, 256: 8192, 512: 270532608, 768: 270540808, 1024: 268443648, 1280: 2097152, 1536: 2097160, 1792: 268435456, 2048: 0, 2304: 268443656, 2560: 2105344, 2816: 8, 3072: 270532616, 3328: 2105352, 3584: 8200, 3840: 270540800, 128: 270532608, 384: 270540808, 640: 8, 896: 2097152, 1152: 2105352, 1408: 268435464, 1664: 268443648, 1920: 8200, 2176: 2097160, 2432: 8192, 2688: 268443656, 2944: 270532616, 3200: 0, 3456: 270540800, 3712: 2105344, 3968: 268435456, 4096: 268443648, 4352: 270532616, 4608: 270540808, 4864: 8200, 5120: 2097152, 5376: 268435456, 5632: 268435464, 5888: 2105344, 6144: 2105352, 6400: 0, 6656: 8, 6912: 270532608, 7168: 8192, 7424: 268443656, 7680: 270540800, 7936: 2097160, 4224: 8, 4480: 2105344, 4736: 2097152, 4992: 268435464, 5248: 268443648, 5504: 8200, 5760: 270540808, 6016: 270532608, 6272: 270540800, 6528: 270532616, 6784: 8192, 7040: 2105352, 7296: 2097160, 7552: 0, 7808: 268435456, 8064: 268443656 }, { 0: 1048576, 16: 33555457, 32: 1024, 48: 1049601, 64: 34604033, 80: 0, 96: 1, 112: 34603009, 128: 33555456, 144: 1048577, 160: 33554433, 176: 34604032, 192: 34603008, 208: 1025, 224: 1049600, 240: 33554432, 8: 34603009, 24: 0, 40: 33555457, 56: 34604032, 72: 1048576, 88: 33554433, 104: 33554432, 120: 1025, 136: 1049601, 152: 33555456, 168: 34603008, 184: 1048577, 200: 1024, 216: 34604033, 232: 1, 248: 1049600, 256: 33554432, 272: 1048576, 288: 33555457, 304: 34603009, 320: 1048577, 336: 33555456, 352: 34604032, 368: 1049601, 384: 1025, 400: 34604033, 416: 1049600, 432: 1, 448: 0, 464: 34603008, 480: 33554433, 496: 1024, 264: 1049600, 280: 33555457, 296: 34603009, 312: 1, 328: 33554432, 344: 1048576, 360: 1025, 376: 34604032, 392: 33554433, 408: 34603008, 424: 0, 440: 34604033, 456: 1049601, 472: 1024, 488: 33555456, 504: 1048577 }, { 0: 134219808, 1: 131072, 2: 134217728, 3: 32, 4: 131104, 5: 134350880, 6: 134350848, 7: 2048, 8: 134348800, 9: 134219776, 10: 133120, 11: 134348832, 12: 2080, 13: 0, 14: 134217760, 15: 133152, 2147483648: 2048, 2147483649: 134350880, 2147483650: 134219808, 2147483651: 134217728, 2147483652: 134348800, 2147483653: 133120, 2147483654: 133152, 2147483655: 32, 2147483656: 134217760, 2147483657: 2080, 2147483658: 131104, 2147483659: 134350848, 2147483660: 0, 2147483661: 134348832, 2147483662: 134219776, 2147483663: 131072, 16: 133152, 17: 134350848, 18: 32, 19: 2048, 20: 134219776, 21: 134217760, 22: 134348832, 23: 131072, 24: 0, 25: 131104, 26: 134348800, 27: 134219808, 28: 134350880, 29: 133120, 30: 2080, 31: 134217728, 2147483664: 131072, 2147483665: 2048, 2147483666: 134348832, 2147483667: 133152, 2147483668: 32, 2147483669: 134348800, 2147483670: 134217728, 2147483671: 134219808, 2147483672: 134350880, 2147483673: 134217760, 2147483674: 134219776, 2147483675: 0, 2147483676: 133120, 2147483677: 2080, 2147483678: 131104, 2147483679: 134350848 }], w2 = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679], k2 = p.DES = w.extend({ _doReset: function() {
          for (var t3 = this._key.words, e3 = [], r3 = 0; r3 < 56; r3++) {
            var i3 = y2[r3] - 1;
            e3[r3] = t3[i3 >>> 5] >>> 31 - i3 % 32 & 1;
          }
          for (var o3 = this._subKeys = [], n3 = 0; n3 < 16; n3++) {
            for (var s3 = o3[n3] = [], c3 = v2[n3], r3 = 0; r3 < 24; r3++) s3[r3 / 6 | 0] |= e3[(g2[r3] - 1 + c3) % 28] << 31 - r3 % 6, s3[4 + (r3 / 6 | 0)] |= e3[28 + (g2[r3 + 24] - 1 + c3) % 28] << 31 - r3 % 6;
            s3[0] = s3[0] << 1 | s3[0] >>> 31;
            for (r3 = 1; r3 < 7; r3++) s3[r3] = s3[r3] >>> 4 * (r3 - 1) + 3;
            s3[7] = s3[7] << 5 | s3[7] >>> 27;
          }
          for (var a3 = this._invSubKeys = [], r3 = 0; r3 < 16; r3++) a3[r3] = o3[15 - r3];
        }, encryptBlock: function(t3, e3) {
          this._doCryptBlock(t3, e3, this._subKeys);
        }, decryptBlock: function(t3, e3) {
          this._doCryptBlock(t3, e3, this._invSubKeys);
        }, _doCryptBlock: function(t3, e3, r3) {
          this._lBlock = t3[e3], this._rBlock = t3[e3 + 1], x2.call(this, 4, 252645135), x2.call(this, 16, 65535), b2.call(this, 2, 858993459), b2.call(this, 8, 16711935), x2.call(this, 1, 1431655765);
          for (var i3 = 0; i3 < 16; i3++) {
            for (var o3 = r3[i3], n3 = this._lBlock, s3 = this._rBlock, c3 = 0, a3 = 0; a3 < 8; a3++) c3 |= B2[a3][((s3 ^ o3[a3]) & w2[a3]) >>> 0];
            this._lBlock = s3, this._rBlock = n3 ^ c3;
          }
          var h3 = this._lBlock;
          this._lBlock = this._rBlock, this._rBlock = h3, x2.call(this, 1, 1431655765), b2.call(this, 8, 16711935), b2.call(this, 2, 858993459), x2.call(this, 16, 65535), x2.call(this, 4, 252645135), t3[e3] = this._lBlock, t3[e3 + 1] = this._rBlock;
        }, keySize: 2, ivSize: 2, blockSize: 2 });
        function x2(t3, e3) {
          e3 = (this._lBlock >>> t3 ^ this._rBlock) & e3;
          this._rBlock ^= e3, this._lBlock ^= e3 << t3;
        }
        function b2(t3, e3) {
          e3 = (this._rBlock >>> t3 ^ this._lBlock) & e3;
          this._lBlock ^= e3, this._rBlock ^= e3 << t3;
        }
        P.DES = w._createHelper(k2), p = p.TripleDES = w.extend({ _doReset: function() {
          var t3 = this._key.words;
          if (2 !== t3.length && 4 !== t3.length && t3.length < 6) throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
          var e3 = t3.slice(0, 2), r3 = t3.length < 4 ? t3.slice(0, 2) : t3.slice(2, 4), t3 = t3.length < 6 ? t3.slice(0, 2) : t3.slice(4, 6);
          this._des1 = k2.createEncryptor(_2.create(e3)), this._des2 = k2.createEncryptor(_2.create(r3)), this._des3 = k2.createEncryptor(_2.create(t3));
        }, encryptBlock: function(t3, e3) {
          this._des1.encryptBlock(t3, e3), this._des2.decryptBlock(t3, e3), this._des3.encryptBlock(t3, e3);
        }, decryptBlock: function(t3, e3) {
          this._des3.decryptBlock(t3, e3), this._des2.encryptBlock(t3, e3), this._des1.decryptBlock(t3, e3);
        }, keySize: 6, ivSize: 2, blockSize: 2 }), P.TripleDES = w._createHelper(p);
        var u = i, P = u.lib.StreamCipher, w = u.algo, m2 = w.RC4 = P.extend({ _doReset: function() {
          for (var t3 = this._key, e3 = t3.words, r3 = t3.sigBytes, i3 = this._S = [], o3 = 0; o3 < 256; o3++) i3[o3] = o3;
          for (var o3 = 0, n3 = 0; o3 < 256; o3++) {
            var s3 = o3 % r3, s3 = e3[s3 >>> 2] >>> 24 - s3 % 4 * 8 & 255, n3 = (n3 + i3[o3] + s3) % 256, s3 = i3[o3];
            i3[o3] = i3[n3], i3[n3] = s3;
          }
          this._i = this._j = 0;
        }, _doProcessBlock: function(t3, e3) {
          t3[e3] ^= S2.call(this);
        }, keySize: 8, ivSize: 0 });
        function S2() {
          for (var t3 = this._S, e3 = this._i, r3 = this._j, i3 = 0, o3 = 0; o3 < 4; o3++) {
            var r3 = (r3 + t3[e3 = (e3 + 1) % 256]) % 256, n3 = t3[e3];
            t3[e3] = t3[r3], t3[r3] = n3, i3 |= t3[(t3[e3] + t3[r3]) % 256] << 24 - 8 * o3;
          }
          return this._i = e3, this._j = r3, i3;
        }
        function A2() {
          for (var t3 = this._X, e3 = this._C, r3 = 0; r3 < 8; r3++) c[r3] = e3[r3];
          e3[0] = e3[0] + 1295307597 + this._b | 0, e3[1] = e3[1] + 3545052371 + (e3[0] >>> 0 < c[0] >>> 0 ? 1 : 0) | 0, e3[2] = e3[2] + 886263092 + (e3[1] >>> 0 < c[1] >>> 0 ? 1 : 0) | 0, e3[3] = e3[3] + 1295307597 + (e3[2] >>> 0 < c[2] >>> 0 ? 1 : 0) | 0, e3[4] = e3[4] + 3545052371 + (e3[3] >>> 0 < c[3] >>> 0 ? 1 : 0) | 0, e3[5] = e3[5] + 886263092 + (e3[4] >>> 0 < c[4] >>> 0 ? 1 : 0) | 0, e3[6] = e3[6] + 1295307597 + (e3[5] >>> 0 < c[5] >>> 0 ? 1 : 0) | 0, e3[7] = e3[7] + 3545052371 + (e3[6] >>> 0 < c[6] >>> 0 ? 1 : 0) | 0, this._b = e3[7] >>> 0 < c[7] >>> 0 ? 1 : 0;
          for (r3 = 0; r3 < 8; r3++) {
            var i3 = t3[r3] + e3[r3], o3 = 65535 & i3, n3 = i3 >>> 16;
            a[r3] = ((o3 * o3 >>> 17) + o3 * n3 >>> 15) + n3 * n3 ^ ((4294901760 & i3) * i3 | 0) + ((65535 & i3) * i3 | 0);
          }
          t3[0] = a[0] + (a[7] << 16 | a[7] >>> 16) + (a[6] << 16 | a[6] >>> 16) | 0, t3[1] = a[1] + (a[0] << 8 | a[0] >>> 24) + a[7] | 0, t3[2] = a[2] + (a[1] << 16 | a[1] >>> 16) + (a[0] << 16 | a[0] >>> 16) | 0, t3[3] = a[3] + (a[2] << 8 | a[2] >>> 24) + a[1] | 0, t3[4] = a[4] + (a[3] << 16 | a[3] >>> 16) + (a[2] << 16 | a[2] >>> 16) | 0, t3[5] = a[5] + (a[4] << 8 | a[4] >>> 24) + a[3] | 0, t3[6] = a[6] + (a[5] << 16 | a[5] >>> 16) + (a[4] << 16 | a[4] >>> 16) | 0, t3[7] = a[7] + (a[6] << 8 | a[6] >>> 24) + a[5] | 0;
        }
        function z2() {
          for (var t3 = this._X, e3 = this._C, r3 = 0; r3 < 8; r3++) f[r3] = e3[r3];
          e3[0] = e3[0] + 1295307597 + this._b | 0, e3[1] = e3[1] + 3545052371 + (e3[0] >>> 0 < f[0] >>> 0 ? 1 : 0) | 0, e3[2] = e3[2] + 886263092 + (e3[1] >>> 0 < f[1] >>> 0 ? 1 : 0) | 0, e3[3] = e3[3] + 1295307597 + (e3[2] >>> 0 < f[2] >>> 0 ? 1 : 0) | 0, e3[4] = e3[4] + 3545052371 + (e3[3] >>> 0 < f[3] >>> 0 ? 1 : 0) | 0, e3[5] = e3[5] + 886263092 + (e3[4] >>> 0 < f[4] >>> 0 ? 1 : 0) | 0, e3[6] = e3[6] + 1295307597 + (e3[5] >>> 0 < f[5] >>> 0 ? 1 : 0) | 0, e3[7] = e3[7] + 3545052371 + (e3[6] >>> 0 < f[6] >>> 0 ? 1 : 0) | 0, this._b = e3[7] >>> 0 < f[7] >>> 0 ? 1 : 0;
          for (r3 = 0; r3 < 8; r3++) {
            var i3 = t3[r3] + e3[r3], o3 = 65535 & i3, n3 = i3 >>> 16;
            d[r3] = ((o3 * o3 >>> 17) + o3 * n3 >>> 15) + n3 * n3 ^ ((4294901760 & i3) * i3 | 0) + ((65535 & i3) * i3 | 0);
          }
          t3[0] = d[0] + (d[7] << 16 | d[7] >>> 16) + (d[6] << 16 | d[6] >>> 16) | 0, t3[1] = d[1] + (d[0] << 8 | d[0] >>> 24) + d[7] | 0, t3[2] = d[2] + (d[1] << 16 | d[1] >>> 16) + (d[0] << 16 | d[0] >>> 16) | 0, t3[3] = d[3] + (d[2] << 8 | d[2] >>> 24) + d[1] | 0, t3[4] = d[4] + (d[3] << 16 | d[3] >>> 16) + (d[2] << 16 | d[2] >>> 16) | 0, t3[5] = d[5] + (d[4] << 8 | d[4] >>> 24) + d[3] | 0, t3[6] = d[6] + (d[5] << 16 | d[5] >>> 16) + (d[4] << 16 | d[4] >>> 16) | 0, t3[7] = d[7] + (d[6] << 8 | d[6] >>> 24) + d[5] | 0;
        }
        u.RC4 = P._createHelper(m2), w = w.RC4Drop = m2.extend({ cfg: m2.cfg.extend({ drop: 192 }), _doReset: function() {
          m2._doReset.call(this);
          for (var t3 = this.cfg.drop; 0 < t3; t3--) S2.call(this);
        } }), u.RC4Drop = P._createHelper(w), u = (p = i).lib.StreamCipher, P = p.algo, n = [], c = [], a = [], P = P.Rabbit = u.extend({ _doReset: function() {
          for (var t3 = this._key.words, e3 = this.cfg.iv, r3 = 0; r3 < 4; r3++) t3[r3] = 16711935 & (t3[r3] << 8 | t3[r3] >>> 24) | 4278255360 & (t3[r3] << 24 | t3[r3] >>> 8);
          for (var i3 = this._X = [t3[0], t3[3] << 16 | t3[2] >>> 16, t3[1], t3[0] << 16 | t3[3] >>> 16, t3[2], t3[1] << 16 | t3[0] >>> 16, t3[3], t3[2] << 16 | t3[1] >>> 16], o3 = this._C = [t3[2] << 16 | t3[2] >>> 16, 4294901760 & t3[0] | 65535 & t3[1], t3[3] << 16 | t3[3] >>> 16, 4294901760 & t3[1] | 65535 & t3[2], t3[0] << 16 | t3[0] >>> 16, 4294901760 & t3[2] | 65535 & t3[3], t3[1] << 16 | t3[1] >>> 16, 4294901760 & t3[3] | 65535 & t3[0]], r3 = this._b = 0; r3 < 4; r3++) A2.call(this);
          for (r3 = 0; r3 < 8; r3++) o3[r3] ^= i3[r3 + 4 & 7];
          if (e3) {
            var e3 = e3.words, n3 = e3[0], e3 = e3[1], n3 = 16711935 & (n3 << 8 | n3 >>> 24) | 4278255360 & (n3 << 24 | n3 >>> 8), e3 = 16711935 & (e3 << 8 | e3 >>> 24) | 4278255360 & (e3 << 24 | e3 >>> 8), s3 = n3 >>> 16 | 4294901760 & e3, c3 = e3 << 16 | 65535 & n3;
            o3[0] ^= n3, o3[1] ^= s3, o3[2] ^= e3, o3[3] ^= c3, o3[4] ^= n3, o3[5] ^= s3, o3[6] ^= e3, o3[7] ^= c3;
            for (r3 = 0; r3 < 4; r3++) A2.call(this);
          }
        }, _doProcessBlock: function(t3, e3) {
          var r3 = this._X;
          A2.call(this), n[0] = r3[0] ^ r3[5] >>> 16 ^ r3[3] << 16, n[1] = r3[2] ^ r3[7] >>> 16 ^ r3[5] << 16, n[2] = r3[4] ^ r3[1] >>> 16 ^ r3[7] << 16, n[3] = r3[6] ^ r3[3] >>> 16 ^ r3[1] << 16;
          for (var i3 = 0; i3 < 4; i3++) n[i3] = 16711935 & (n[i3] << 8 | n[i3] >>> 24) | 4278255360 & (n[i3] << 24 | n[i3] >>> 8), t3[e3 + i3] ^= n[i3];
        }, blockSize: 4, ivSize: 2 }), p.Rabbit = u._createHelper(P), p = (w = i).lib.StreamCipher, u = w.algo, h = [], f = [], d = [], u = u.RabbitLegacy = p.extend({ _doReset: function() {
          for (var t3 = this._key.words, e3 = this.cfg.iv, r3 = this._X = [t3[0], t3[3] << 16 | t3[2] >>> 16, t3[1], t3[0] << 16 | t3[3] >>> 16, t3[2], t3[1] << 16 | t3[0] >>> 16, t3[3], t3[2] << 16 | t3[1] >>> 16], i3 = this._C = [t3[2] << 16 | t3[2] >>> 16, 4294901760 & t3[0] | 65535 & t3[1], t3[3] << 16 | t3[3] >>> 16, 4294901760 & t3[1] | 65535 & t3[2], t3[0] << 16 | t3[0] >>> 16, 4294901760 & t3[2] | 65535 & t3[3], t3[1] << 16 | t3[1] >>> 16, 4294901760 & t3[3] | 65535 & t3[0]], o3 = this._b = 0; o3 < 4; o3++) z2.call(this);
          for (o3 = 0; o3 < 8; o3++) i3[o3] ^= r3[o3 + 4 & 7];
          if (e3) {
            var t3 = e3.words, e3 = t3[0], t3 = t3[1], e3 = 16711935 & (e3 << 8 | e3 >>> 24) | 4278255360 & (e3 << 24 | e3 >>> 8), t3 = 16711935 & (t3 << 8 | t3 >>> 24) | 4278255360 & (t3 << 24 | t3 >>> 8), n3 = e3 >>> 16 | 4294901760 & t3, s3 = t3 << 16 | 65535 & e3;
            i3[0] ^= e3, i3[1] ^= n3, i3[2] ^= t3, i3[3] ^= s3, i3[4] ^= e3, i3[5] ^= n3, i3[6] ^= t3, i3[7] ^= s3;
            for (o3 = 0; o3 < 4; o3++) z2.call(this);
          }
        }, _doProcessBlock: function(t3, e3) {
          var r3 = this._X;
          z2.call(this), h[0] = r3[0] ^ r3[5] >>> 16 ^ r3[3] << 16, h[1] = r3[2] ^ r3[7] >>> 16 ^ r3[5] << 16, h[2] = r3[4] ^ r3[1] >>> 16 ^ r3[7] << 16, h[3] = r3[6] ^ r3[3] >>> 16 ^ r3[1] << 16;
          for (var i3 = 0; i3 < 4; i3++) h[i3] = 16711935 & (h[i3] << 8 | h[i3] >>> 24) | 4278255360 & (h[i3] << 24 | h[i3] >>> 8), t3[e3 + i3] ^= h[i3];
        }, blockSize: 4, ivSize: 2 }), w.RabbitLegacy = p._createHelper(u);
        {
          let C22 = function(t3, e3) {
            var r3 = t3.sbox[0][e3 >> 24 & 255] + t3.sbox[1][e3 >> 16 & 255];
            return r3 = (r3 ^= t3.sbox[2][e3 >> 8 & 255]) + t3.sbox[3][255 & e3];
          }, R22 = function(e3, t3, r3) {
            let i3 = t3, o3 = r3, n3;
            for (let t4 = 0; t4 < F; ++t4) i3 ^= e3.pbox[t4], o3 = C22(e3, i3) ^ o3, n3 = i3, i3 = o3, o3 = n3;
            return n3 = i3, i3 = o3, o3 = n3, o3 ^= e3.pbox[F], { left: i3 ^= e3.pbox[F + 1], right: o3 };
          };
          var C2 = C22, R2 = R22;
          w = (P = i).lib.BlockCipher, p = P.algo;
          const F = 16, D2 = [608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832, 137296536, 3964562569, 1160258022, 953160567, 3193202383, 887688300, 3232508343, 3380367581, 1065670069, 3041331479, 2450970073, 2306472731], E2 = [[3509652390, 2564797868, 805139163, 3491422135, 3101798381, 1780907670, 3128725573, 4046225305, 614570311, 3012652279, 134345442, 2240740374, 1667834072, 1901547113, 2757295779, 4103290238, 227898511, 1921955416, 1904987480, 2182433518, 2069144605, 3260701109, 2620446009, 720527379, 3318853667, 677414384, 3393288472, 3101374703, 2390351024, 1614419982, 1822297739, 2954791486, 3608508353, 3174124327, 2024746970, 1432378464, 3864339955, 2857741204, 1464375394, 1676153920, 1439316330, 715854006, 3033291828, 289532110, 2706671279, 2087905683, 3018724369, 1668267050, 732546397, 1947742710, 3462151702, 2609353502, 2950085171, 1814351708, 2050118529, 680887927, 999245976, 1800124847, 3300911131, 1713906067, 1641548236, 4213287313, 1216130144, 1575780402, 4018429277, 3917837745, 3693486850, 3949271944, 596196993, 3549867205, 258830323, 2213823033, 772490370, 2760122372, 1774776394, 2652871518, 566650946, 4142492826, 1728879713, 2882767088, 1783734482, 3629395816, 2517608232, 2874225571, 1861159788, 326777828, 3124490320, 2130389656, 2716951837, 967770486, 1724537150, 2185432712, 2364442137, 1164943284, 2105845187, 998989502, 3765401048, 2244026483, 1075463327, 1455516326, 1322494562, 910128902, 469688178, 1117454909, 936433444, 3490320968, 3675253459, 1240580251, 122909385, 2157517691, 634681816, 4142456567, 3825094682, 3061402683, 2540495037, 79693498, 3249098678, 1084186820, 1583128258, 426386531, 1761308591, 1047286709, 322548459, 995290223, 1845252383, 2603652396, 3431023940, 2942221577, 3202600964, 3727903485, 1712269319, 422464435, 3234572375, 1170764815, 3523960633, 3117677531, 1434042557, 442511882, 3600875718, 1076654713, 1738483198, 4213154764, 2393238008, 3677496056, 1014306527, 4251020053, 793779912, 2902807211, 842905082, 4246964064, 1395751752, 1040244610, 2656851899, 3396308128, 445077038, 3742853595, 3577915638, 679411651, 2892444358, 2354009459, 1767581616, 3150600392, 3791627101, 3102740896, 284835224, 4246832056, 1258075500, 768725851, 2589189241, 3069724005, 3532540348, 1274779536, 3789419226, 2764799539, 1660621633, 3471099624, 4011903706, 913787905, 3497959166, 737222580, 2514213453, 2928710040, 3937242737, 1804850592, 3499020752, 2949064160, 2386320175, 2390070455, 2415321851, 4061277028, 2290661394, 2416832540, 1336762016, 1754252060, 3520065937, 3014181293, 791618072, 3188594551, 3933548030, 2332172193, 3852520463, 3043980520, 413987798, 3465142937, 3030929376, 4245938359, 2093235073, 3534596313, 375366246, 2157278981, 2479649556, 555357303, 3870105701, 2008414854, 3344188149, 4221384143, 3956125452, 2067696032, 3594591187, 2921233993, 2428461, 544322398, 577241275, 1471733935, 610547355, 4027169054, 1432588573, 1507829418, 2025931657, 3646575487, 545086370, 48609733, 2200306550, 1653985193, 298326376, 1316178497, 3007786442, 2064951626, 458293330, 2589141269, 3591329599, 3164325604, 727753846, 2179363840, 146436021, 1461446943, 4069977195, 705550613, 3059967265, 3887724982, 4281599278, 3313849956, 1404054877, 2845806497, 146425753, 1854211946], [1266315497, 3048417604, 3681880366, 3289982499, 290971e4, 1235738493, 2632868024, 2414719590, 3970600049, 1771706367, 1449415276, 3266420449, 422970021, 1963543593, 2690192192, 3826793022, 1062508698, 1531092325, 1804592342, 2583117782, 2714934279, 4024971509, 1294809318, 4028980673, 1289560198, 2221992742, 1669523910, 35572830, 157838143, 1052438473, 1016535060, 1802137761, 1753167236, 1386275462, 3080475397, 2857371447, 1040679964, 2145300060, 2390574316, 1461121720, 2956646967, 4031777805, 4028374788, 33600511, 2920084762, 1018524850, 629373528, 3691585981, 3515945977, 2091462646, 2486323059, 586499841, 988145025, 935516892, 3367335476, 2599673255, 2839830854, 265290510, 3972581182, 2759138881, 3795373465, 1005194799, 847297441, 406762289, 1314163512, 1332590856, 1866599683, 4127851711, 750260880, 613907577, 1450815602, 3165620655, 3734664991, 3650291728, 3012275730, 3704569646, 1427272223, 778793252, 1343938022, 2676280711, 2052605720, 1946737175, 3164576444, 3914038668, 3967478842, 3682934266, 1661551462, 3294938066, 4011595847, 840292616, 3712170807, 616741398, 312560963, 711312465, 1351876610, 322626781, 1910503582, 271666773, 2175563734, 1594956187, 70604529, 3617834859, 1007753275, 1495573769, 4069517037, 2549218298, 2663038764, 504708206, 2263041392, 3941167025, 2249088522, 1514023603, 1998579484, 1312622330, 694541497, 2582060303, 2151582166, 1382467621, 776784248, 2618340202, 3323268794, 2497899128, 2784771155, 503983604, 4076293799, 907881277, 423175695, 432175456, 1378068232, 4145222326, 3954048622, 3938656102, 3820766613, 2793130115, 2977904593, 26017576, 3274890735, 3194772133, 1700274565, 1756076034, 4006520079, 3677328699, 720338349, 1533947780, 354530856, 688349552, 3973924725, 1637815568, 332179504, 3949051286, 53804574, 2852348879, 3044236432, 1282449977, 3583942155, 3416972820, 4006381244, 1617046695, 2628476075, 3002303598, 1686838959, 431878346, 2686675385, 1700445008, 1080580658, 1009431731, 832498133, 3223435511, 2605976345, 2271191193, 2516031870, 1648197032, 4164389018, 2548247927, 300782431, 375919233, 238389289, 3353747414, 2531188641, 2019080857, 1475708069, 455242339, 2609103871, 448939670, 3451063019, 1395535956, 2413381860, 1841049896, 1491858159, 885456874, 4264095073, 4001119347, 1565136089, 3898914787, 1108368660, 540939232, 1173283510, 2745871338, 3681308437, 4207628240, 3343053890, 4016749493, 1699691293, 1103962373, 3625875870, 2256883143, 3830138730, 1031889488, 3479347698, 1535977030, 4236805024, 3251091107, 2132092099, 1774941330, 1199868427, 1452454533, 157007616, 2904115357, 342012276, 595725824, 1480756522, 206960106, 497939518, 591360097, 863170706, 2375253569, 3596610801, 1814182875, 2094937945, 3421402208, 1082520231, 3463918190, 2785509508, 435703966, 3908032597, 1641649973, 2842273706, 3305899714, 1510255612, 2148256476, 2655287854, 3276092548, 4258621189, 236887753, 3681803219, 274041037, 1734335097, 3815195456, 3317970021, 1899903192, 1026095262, 4050517792, 356393447, 2410691914, 3873677099, 3682840055], [3913112168, 2491498743, 4132185628, 2489919796, 1091903735, 1979897079, 3170134830, 3567386728, 3557303409, 857797738, 1136121015, 1342202287, 507115054, 2535736646, 337727348, 3213592640, 1301675037, 2528481711, 1895095763, 1721773893, 3216771564, 62756741, 2142006736, 835421444, 2531993523, 1442658625, 3659876326, 2882144922, 676362277, 1392781812, 170690266, 3921047035, 1759253602, 3611846912, 1745797284, 664899054, 1329594018, 3901205900, 3045908486, 2062866102, 2865634940, 3543621612, 3464012697, 1080764994, 553557557, 3656615353, 3996768171, 991055499, 499776247, 1265440854, 648242737, 3940784050, 980351604, 3713745714, 1749149687, 3396870395, 4211799374, 3640570775, 1161844396, 3125318951, 1431517754, 545492359, 4268468663, 3499529547, 1437099964, 2702547544, 3433638243, 2581715763, 2787789398, 1060185593, 1593081372, 2418618748, 4260947970, 69676912, 2159744348, 86519011, 2512459080, 3838209314, 1220612927, 3339683548, 133810670, 1090789135, 1078426020, 1569222167, 845107691, 3583754449, 4072456591, 1091646820, 628848692, 1613405280, 3757631651, 526609435, 236106946, 48312990, 2942717905, 3402727701, 1797494240, 859738849, 992217954, 4005476642, 2243076622, 3870952857, 3732016268, 765654824, 3490871365, 2511836413, 1685915746, 3888969200, 1414112111, 2273134842, 3281911079, 4080962846, 172450625, 2569994100, 980381355, 4109958455, 2819808352, 2716589560, 2568741196, 3681446669, 3329971472, 1835478071, 660984891, 3704678404, 4045999559, 3422617507, 3040415634, 1762651403, 1719377915, 3470491036, 2693910283, 3642056355, 3138596744, 1364962596, 2073328063, 1983633131, 926494387, 3423689081, 2150032023, 4096667949, 1749200295, 3328846651, 309677260, 2016342300, 1779581495, 3079819751, 111262694, 1274766160, 443224088, 298511866, 1025883608, 3806446537, 1145181785, 168956806, 3641502830, 3584813610, 1689216846, 3666258015, 3200248200, 1692713982, 2646376535, 4042768518, 1618508792, 1610833997, 3523052358, 4130873264, 2001055236, 3610705100, 2202168115, 4028541809, 2961195399, 1006657119, 2006996926, 3186142756, 1430667929, 3210227297, 1314452623, 4074634658, 4101304120, 2273951170, 1399257539, 3367210612, 3027628629, 1190975929, 2062231137, 2333990788, 2221543033, 2438960610, 1181637006, 548689776, 2362791313, 3372408396, 3104550113, 3145860560, 296247880, 1970579870, 3078560182, 3769228297, 1714227617, 3291629107, 3898220290, 166772364, 1251581989, 493813264, 448347421, 195405023, 2709975567, 677966185, 3703036547, 1463355134, 2715995803, 1338867538, 1343315457, 2802222074, 2684532164, 233230375, 2599980071, 2000651841, 3277868038, 1638401717, 4028070440, 3237316320, 6314154, 819756386, 300326615, 590932579, 1405279636, 3267499572, 3150704214, 2428286686, 3959192993, 3461946742, 1862657033, 1266418056, 963775037, 2089974820, 2263052895, 1917689273, 448879540, 3550394620, 3981727096, 150775221, 3627908307, 1303187396, 508620638, 2975983352, 2726630617, 1817252668, 1876281319, 1457606340, 908771278, 3720792119, 3617206836, 2455994898, 1729034894, 1080033504], [976866871, 3556439503, 2881648439, 1522871579, 1555064734, 1336096578, 3548522304, 2579274686, 3574697629, 3205460757, 3593280638, 3338716283, 3079412587, 564236357, 2993598910, 1781952180, 1464380207, 3163844217, 3332601554, 1699332808, 1393555694, 1183702653, 3581086237, 1288719814, 691649499, 2847557200, 2895455976, 3193889540, 2717570544, 1781354906, 1676643554, 2592534050, 3230253752, 1126444790, 2770207658, 2633158820, 2210423226, 2615765581, 2414155088, 3127139286, 673620729, 2805611233, 1269405062, 4015350505, 3341807571, 4149409754, 1057255273, 2012875353, 2162469141, 2276492801, 2601117357, 993977747, 3918593370, 2654263191, 753973209, 36408145, 2530585658, 25011837, 3520020182, 2088578344, 530523599, 2918365339, 1524020338, 1518925132, 3760827505, 3759777254, 1202760957, 3985898139, 3906192525, 674977740, 4174734889, 2031300136, 2019492241, 3983892565, 4153806404, 3822280332, 352677332, 2297720250, 60907813, 90501309, 3286998549, 1016092578, 2535922412, 2839152426, 457141659, 509813237, 4120667899, 652014361, 1966332200, 2975202805, 55981186, 2327461051, 676427537, 3255491064, 2882294119, 3433927263, 1307055953, 942726286, 933058658, 2468411793, 3933900994, 4215176142, 1361170020, 2001714738, 2830558078, 3274259782, 1222529897, 1679025792, 2729314320, 3714953764, 1770335741, 151462246, 3013232138, 1682292957, 1483529935, 471910574, 1539241949, 458788160, 3436315007, 1807016891, 3718408830, 978976581, 1043663428, 3165965781, 1927990952, 4200891579, 2372276910, 3208408903, 3533431907, 1412390302, 2931980059, 4132332400, 1947078029, 3881505623, 4168226417, 2941484381, 1077988104, 1320477388, 886195818, 18198404, 3786409e3, 2509781533, 112762804, 3463356488, 1866414978, 891333506, 18488651, 661792760, 1628790961, 3885187036, 3141171499, 876946877, 2693282273, 1372485963, 791857591, 2686433993, 3759982718, 3167212022, 3472953795, 2716379847, 445679433, 3561995674, 3504004811, 3574258232, 54117162, 3331405415, 2381918588, 3769707343, 4154350007, 1140177722, 4074052095, 668550556, 3214352940, 367459370, 261225585, 2610173221, 4209349473, 3468074219, 3265815641, 314222801, 3066103646, 3808782860, 282218597, 3406013506, 3773591054, 379116347, 1285071038, 846784868, 2669647154, 3771962079, 3550491691, 2305946142, 453669953, 1268987020, 3317592352, 3279303384, 3744833421, 2610507566, 3859509063, 266596637, 3847019092, 517658769, 3462560207, 3443424879, 370717030, 4247526661, 2224018117, 4143653529, 4112773975, 2788324899, 2477274417, 1456262402, 2901442914, 1517677493, 1846949527, 2295493580, 3734397586, 2176403920, 1280348187, 1908823572, 3871786941, 846861322, 1172426758, 3287448474, 3383383037, 1655181056, 3139813346, 901632758, 1897031941, 2986607138, 3066810236, 3447102507, 1393639104, 373351379, 950779232, 625454576, 3124240540, 4148612726, 2007998917, 544563296, 2244738638, 2330496472, 2058025392, 1291430526, 424198748, 50039436, 29584100, 3605783033, 2429876329, 2791104160, 1057563949, 3255363231, 3075367218, 3463963227, 1469046755, 985887462]];
          var H2 = { pbox: [], sbox: [] };
          p = p.Blowfish = w.extend({ _doReset: function() {
            if (this._keyPriorReset !== this._key) {
              var t3 = this._keyPriorReset = this._key, n3 = t3.words, t3 = t3.sigBytes / 4;
              {
                var s3 = H2, c3 = n3, a3 = t3;
                for (let e4 = 0; e4 < 4; e4++) {
                  s3.sbox[e4] = [];
                  for (let t4 = 0; t4 < 256; t4++) s3.sbox[e4][t4] = E2[e4][t4];
                }
                let e3 = 0;
                for (let t4 = 0; t4 < F + 2; t4++) s3.pbox[t4] = D2[t4] ^ c3[e3], ++e3 >= a3 && (e3 = 0);
                let r3 = 0, i3 = 0, o3 = 0;
                for (let t4 = 0; t4 < F + 2; t4 += 2) o3 = R22(s3, r3, i3), r3 = o3.left, i3 = o3.right, s3.pbox[t4] = r3, s3.pbox[t4 + 1] = i3;
                for (let e4 = 0; e4 < 4; e4++) for (let t4 = 0; t4 < 256; t4 += 2) o3 = R22(s3, r3, i3), r3 = o3.left, i3 = o3.right, s3.sbox[e4][t4] = r3, s3.sbox[e4][t4 + 1] = i3;
              }
            }
          }, encryptBlock: function(t3, e3) {
            var r3 = R22(H2, t3[e3], t3[e3 + 1]);
            t3[e3] = r3.left, t3[e3 + 1] = r3.right;
          }, decryptBlock: function(t3, e3) {
            var r3 = function(e4, t4, r4) {
              let i3 = t4, o3 = r4, n3;
              for (let t5 = F + 1; 1 < t5; --t5) i3 ^= e4.pbox[t5], o3 = C22(e4, i3) ^ o3, n3 = i3, i3 = o3, o3 = n3;
              return n3 = i3, i3 = o3, o3 = n3, o3 ^= e4.pbox[1], { left: i3 ^= e4.pbox[0], right: o3 };
            }(H2, t3[e3], t3[e3 + 1]);
            t3[e3] = r3.left, t3[e3 + 1] = r3.right;
          }, blockSize: 2, keySize: 4, ivSize: 2 }), P.Blowfish = w._createHelper(p);
        }
        return i;
      });
    }
  });

  // node_modules/entities/lib/generated/decode-data-html.js
  var require_decode_data_html = __commonJS({
    "node_modules/entities/lib/generated/decode-data-html.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = new Uint16Array(
        // prettier-ignore
        '\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\u{1D504}rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\u{1D538}plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\u{1D49C}ign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\u{1D505}pf;\uC000\u{1D539}eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\u{1D49E}p\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\u{1D507}\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\u{1D53B}\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\u{1D49F}rok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\u{1D508}rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\u{1D53C}silon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\u{1D509}lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\u{1D53D}All;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\u{1D50A};\u62D9pf;\uC000\u{1D53E}eater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\u{1D4A2};\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\u{1D540}a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\u{1D50D}pf;\uC000\u{1D541}\u01E3\u07C7\0\u07CCr;\uC000\u{1D4A5}rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\u{1D50E}pf;\uC000\u{1D542}cr;\uC000\u{1D4A6}\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\u{1D50F}\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\u{1D543}er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\u{1D510}nusPlus;\u6213pf;\uC000\u{1D544}c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\u{1D511}\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\u{1D4A9}ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\u{1D512}rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\u{1D546}enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\u{1D4AA}ash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\u{1D513}i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\u{1D4AB};\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\u{1D514}pf;\u611Acr;\uC000\u{1D4AC}\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\u{1D516}ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\u{1D54A}\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\u{1D4AE}ar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\u{1D517}\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\u{1D54B}ipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\u{1D4AF}rok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\u{1D518}rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\u{1D54C}\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\u{1D4B0}ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\u{1D519}pf;\uC000\u{1D54D}cr;\uC000\u{1D4B1}dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\u{1D51A}pf;\uC000\u{1D54E}cr;\uC000\u{1D4B2}\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\u{1D51B};\u439Epf;\uC000\u{1D54F}cr;\uC000\u{1D4B3}\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\u{1D51C}pf;\uC000\u{1D550}cr;\uC000\u{1D4B4}ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\u{1D4B5}\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\u{1D51E}rave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\u{1D552}\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\u{1D4B6};\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\u{1D51F}g\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\u{1D553}\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\u{1D4B7}mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\u{1D520}\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\u{1D554}o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\u{1D4B8}\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\u{1D521}ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\u{1D555}\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\u{1D4B9};\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\u{1D522}\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\u{1D556}\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\u{1D523}lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\u{1D557}\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\u{1D4BB}\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\u{1D524}\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\u{1D558}\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\u{1D525}s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\u{1D559}bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\u{1D4BD}as\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\u{1D526}rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\u{1D55A}a;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\u{1D4BE}n\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\u{1D527}ath;\u4237pf;\uC000\u{1D55B}\u01E3\u23EC\0\u23F1r;\uC000\u{1D4BF}rcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\u{1D528}reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\u{1D55C}cr;\uC000\u{1D4C0}\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\u{1D529}\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\u{1D55D}us;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\u{1D4C1}m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\u{1D52A}o;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\u{1D55E}\u0100ct\u28F8\u28FDr;\uC000\u{1D4C2}pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\u{1D52B}\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\u{1D55F}\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\u{1D4C3}ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\u{1D52C}\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\u{1D560}\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\u{1D52D}\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\u{1D561}nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\u{1D4C5};\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\u{1D52E}pf;\uC000\u{1D562}rime;\u6057cr;\uC000\u{1D4C6}\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\u{1D52F}\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\u{1D563}us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\u{1D4C7}\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\u{1D530}\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\u{1D564}a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\u{1D4C8}tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\u{1D531}\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\u{1D565}rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\u{1D4C9};\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\u{1D532}rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\u{1D566}\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\u{1D4CA}\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\u{1D533}tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\u{1D567}ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\u{1D4CB}\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\u{1D534}pf;\uC000\u{1D568}\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\u{1D4CC}\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\u{1D535}\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\u{1D569}im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\u{1D4CD}\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\u{1D536}cy;\u4457pf;\uC000\u{1D56A}cr;\uC000\u{1D4CE}\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\u{1D537}cy;\u4436grarr;\u61DDpf;\uC000\u{1D56B}cr;\uC000\u{1D4CF}\u0100jn\u3B85\u3B87;\u600Dj;\u600C'.split("").map(function(c) {
          return c.charCodeAt(0);
        })
      );
    }
  });

  // node_modules/entities/lib/generated/decode-data-xml.js
  var require_decode_data_xml = __commonJS({
    "node_modules/entities/lib/generated/decode-data-xml.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = new Uint16Array(
        // prettier-ignore
        "\u0200aglq	\x1B\u026D\0\0p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022".split("").map(function(c) {
          return c.charCodeAt(0);
        })
      );
    }
  });

  // node_modules/entities/lib/decode_codepoint.js
  var require_decode_codepoint = __commonJS({
    "node_modules/entities/lib/decode_codepoint.js"(exports) {
      "use strict";
      var _a;
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.replaceCodePoint = exports.fromCodePoint = void 0;
      var decodeMap = /* @__PURE__ */ new Map([
        [0, 65533],
        // C1 Unicode control character reference replacements
        [128, 8364],
        [130, 8218],
        [131, 402],
        [132, 8222],
        [133, 8230],
        [134, 8224],
        [135, 8225],
        [136, 710],
        [137, 8240],
        [138, 352],
        [139, 8249],
        [140, 338],
        [142, 381],
        [145, 8216],
        [146, 8217],
        [147, 8220],
        [148, 8221],
        [149, 8226],
        [150, 8211],
        [151, 8212],
        [152, 732],
        [153, 8482],
        [154, 353],
        [155, 8250],
        [156, 339],
        [158, 382],
        [159, 376]
      ]);
      exports.fromCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
      (_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function(codePoint) {
        var output = "";
        if (codePoint > 65535) {
          codePoint -= 65536;
          output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        output += String.fromCharCode(codePoint);
        return output;
      };
      function replaceCodePoint(codePoint) {
        var _a2;
        if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
          return 65533;
        }
        return (_a2 = decodeMap.get(codePoint)) !== null && _a2 !== void 0 ? _a2 : codePoint;
      }
      exports.replaceCodePoint = replaceCodePoint;
      function decodeCodePoint(codePoint) {
        return (0, exports.fromCodePoint)(replaceCodePoint(codePoint));
      }
      exports.default = decodeCodePoint;
    }
  });

  // node_modules/entities/lib/decode.js
  var require_decode = __commonJS({
    "node_modules/entities/lib/decode.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.decodeXML = exports.decodeHTMLStrict = exports.decodeHTMLAttribute = exports.decodeHTML = exports.determineBranch = exports.EntityDecoder = exports.DecodingMode = exports.BinTrieFlags = exports.fromCodePoint = exports.replaceCodePoint = exports.decodeCodePoint = exports.xmlDecodeTree = exports.htmlDecodeTree = void 0;
      var decode_data_html_js_1 = __importDefault(require_decode_data_html());
      exports.htmlDecodeTree = decode_data_html_js_1.default;
      var decode_data_xml_js_1 = __importDefault(require_decode_data_xml());
      exports.xmlDecodeTree = decode_data_xml_js_1.default;
      var decode_codepoint_js_1 = __importStar(require_decode_codepoint());
      exports.decodeCodePoint = decode_codepoint_js_1.default;
      var decode_codepoint_js_2 = require_decode_codepoint();
      Object.defineProperty(exports, "replaceCodePoint", { enumerable: true, get: function() {
        return decode_codepoint_js_2.replaceCodePoint;
      } });
      Object.defineProperty(exports, "fromCodePoint", { enumerable: true, get: function() {
        return decode_codepoint_js_2.fromCodePoint;
      } });
      var CharCodes;
      (function(CharCodes2) {
        CharCodes2[CharCodes2["NUM"] = 35] = "NUM";
        CharCodes2[CharCodes2["SEMI"] = 59] = "SEMI";
        CharCodes2[CharCodes2["EQUALS"] = 61] = "EQUALS";
        CharCodes2[CharCodes2["ZERO"] = 48] = "ZERO";
        CharCodes2[CharCodes2["NINE"] = 57] = "NINE";
        CharCodes2[CharCodes2["LOWER_A"] = 97] = "LOWER_A";
        CharCodes2[CharCodes2["LOWER_F"] = 102] = "LOWER_F";
        CharCodes2[CharCodes2["LOWER_X"] = 120] = "LOWER_X";
        CharCodes2[CharCodes2["LOWER_Z"] = 122] = "LOWER_Z";
        CharCodes2[CharCodes2["UPPER_A"] = 65] = "UPPER_A";
        CharCodes2[CharCodes2["UPPER_F"] = 70] = "UPPER_F";
        CharCodes2[CharCodes2["UPPER_Z"] = 90] = "UPPER_Z";
      })(CharCodes || (CharCodes = {}));
      var TO_LOWER_BIT = 32;
      var BinTrieFlags;
      (function(BinTrieFlags2) {
        BinTrieFlags2[BinTrieFlags2["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
        BinTrieFlags2[BinTrieFlags2["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
        BinTrieFlags2[BinTrieFlags2["JUMP_TABLE"] = 127] = "JUMP_TABLE";
      })(BinTrieFlags = exports.BinTrieFlags || (exports.BinTrieFlags = {}));
      function isNumber(code) {
        return code >= CharCodes.ZERO && code <= CharCodes.NINE;
      }
      function isHexadecimalCharacter(code) {
        return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_F || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_F;
      }
      function isAsciiAlphaNumeric(code) {
        return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_Z || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_Z || isNumber(code);
      }
      function isEntityInAttributeInvalidEnd(code) {
        return code === CharCodes.EQUALS || isAsciiAlphaNumeric(code);
      }
      var EntityDecoderState;
      (function(EntityDecoderState2) {
        EntityDecoderState2[EntityDecoderState2["EntityStart"] = 0] = "EntityStart";
        EntityDecoderState2[EntityDecoderState2["NumericStart"] = 1] = "NumericStart";
        EntityDecoderState2[EntityDecoderState2["NumericDecimal"] = 2] = "NumericDecimal";
        EntityDecoderState2[EntityDecoderState2["NumericHex"] = 3] = "NumericHex";
        EntityDecoderState2[EntityDecoderState2["NamedEntity"] = 4] = "NamedEntity";
      })(EntityDecoderState || (EntityDecoderState = {}));
      var DecodingMode;
      (function(DecodingMode2) {
        DecodingMode2[DecodingMode2["Legacy"] = 0] = "Legacy";
        DecodingMode2[DecodingMode2["Strict"] = 1] = "Strict";
        DecodingMode2[DecodingMode2["Attribute"] = 2] = "Attribute";
      })(DecodingMode = exports.DecodingMode || (exports.DecodingMode = {}));
      var EntityDecoder = (
        /** @class */
        function() {
          function EntityDecoder2(decodeTree, emitCodePoint, errors) {
            this.decodeTree = decodeTree;
            this.emitCodePoint = emitCodePoint;
            this.errors = errors;
            this.state = EntityDecoderState.EntityStart;
            this.consumed = 1;
            this.result = 0;
            this.treeIndex = 0;
            this.excess = 1;
            this.decodeMode = DecodingMode.Strict;
          }
          EntityDecoder2.prototype.startEntity = function(decodeMode) {
            this.decodeMode = decodeMode;
            this.state = EntityDecoderState.EntityStart;
            this.result = 0;
            this.treeIndex = 0;
            this.excess = 1;
            this.consumed = 1;
          };
          EntityDecoder2.prototype.write = function(str, offset) {
            switch (this.state) {
              case EntityDecoderState.EntityStart: {
                if (str.charCodeAt(offset) === CharCodes.NUM) {
                  this.state = EntityDecoderState.NumericStart;
                  this.consumed += 1;
                  return this.stateNumericStart(str, offset + 1);
                }
                this.state = EntityDecoderState.NamedEntity;
                return this.stateNamedEntity(str, offset);
              }
              case EntityDecoderState.NumericStart: {
                return this.stateNumericStart(str, offset);
              }
              case EntityDecoderState.NumericDecimal: {
                return this.stateNumericDecimal(str, offset);
              }
              case EntityDecoderState.NumericHex: {
                return this.stateNumericHex(str, offset);
              }
              case EntityDecoderState.NamedEntity: {
                return this.stateNamedEntity(str, offset);
              }
            }
          };
          EntityDecoder2.prototype.stateNumericStart = function(str, offset) {
            if (offset >= str.length) {
              return -1;
            }
            if ((str.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X) {
              this.state = EntityDecoderState.NumericHex;
              this.consumed += 1;
              return this.stateNumericHex(str, offset + 1);
            }
            this.state = EntityDecoderState.NumericDecimal;
            return this.stateNumericDecimal(str, offset);
          };
          EntityDecoder2.prototype.addToNumericResult = function(str, start, end, base) {
            if (start !== end) {
              var digitCount = end - start;
              this.result = this.result * Math.pow(base, digitCount) + parseInt(str.substr(start, digitCount), base);
              this.consumed += digitCount;
            }
          };
          EntityDecoder2.prototype.stateNumericHex = function(str, offset) {
            var startIdx = offset;
            while (offset < str.length) {
              var char = str.charCodeAt(offset);
              if (isNumber(char) || isHexadecimalCharacter(char)) {
                offset += 1;
              } else {
                this.addToNumericResult(str, startIdx, offset, 16);
                return this.emitNumericEntity(char, 3);
              }
            }
            this.addToNumericResult(str, startIdx, offset, 16);
            return -1;
          };
          EntityDecoder2.prototype.stateNumericDecimal = function(str, offset) {
            var startIdx = offset;
            while (offset < str.length) {
              var char = str.charCodeAt(offset);
              if (isNumber(char)) {
                offset += 1;
              } else {
                this.addToNumericResult(str, startIdx, offset, 10);
                return this.emitNumericEntity(char, 2);
              }
            }
            this.addToNumericResult(str, startIdx, offset, 10);
            return -1;
          };
          EntityDecoder2.prototype.emitNumericEntity = function(lastCp, expectedLength) {
            var _a;
            if (this.consumed <= expectedLength) {
              (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
              return 0;
            }
            if (lastCp === CharCodes.SEMI) {
              this.consumed += 1;
            } else if (this.decodeMode === DecodingMode.Strict) {
              return 0;
            }
            this.emitCodePoint((0, decode_codepoint_js_1.replaceCodePoint)(this.result), this.consumed);
            if (this.errors) {
              if (lastCp !== CharCodes.SEMI) {
                this.errors.missingSemicolonAfterCharacterReference();
              }
              this.errors.validateNumericCharacterReference(this.result);
            }
            return this.consumed;
          };
          EntityDecoder2.prototype.stateNamedEntity = function(str, offset) {
            var decodeTree = this.decodeTree;
            var current = decodeTree[this.treeIndex];
            var valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
            for (; offset < str.length; offset++, this.excess++) {
              var char = str.charCodeAt(offset);
              this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
              if (this.treeIndex < 0) {
                return this.result === 0 || // If we are parsing an attribute
                this.decodeMode === DecodingMode.Attribute && // We shouldn't have consumed any characters after the entity,
                (valueLength === 0 || // And there should be no invalid characters.
                isEntityInAttributeInvalidEnd(char)) ? 0 : this.emitNotTerminatedNamedEntity();
              }
              current = decodeTree[this.treeIndex];
              valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
              if (valueLength !== 0) {
                if (char === CharCodes.SEMI) {
                  return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
                }
                if (this.decodeMode !== DecodingMode.Strict) {
                  this.result = this.treeIndex;
                  this.consumed += this.excess;
                  this.excess = 0;
                }
              }
            }
            return -1;
          };
          EntityDecoder2.prototype.emitNotTerminatedNamedEntity = function() {
            var _a;
            var _b = this, result = _b.result, decodeTree = _b.decodeTree;
            var valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
            this.emitNamedEntityData(result, valueLength, this.consumed);
            (_a = this.errors) === null || _a === void 0 ? void 0 : _a.missingSemicolonAfterCharacterReference();
            return this.consumed;
          };
          EntityDecoder2.prototype.emitNamedEntityData = function(result, valueLength, consumed) {
            var decodeTree = this.decodeTree;
            this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~BinTrieFlags.VALUE_LENGTH : decodeTree[result + 1], consumed);
            if (valueLength === 3) {
              this.emitCodePoint(decodeTree[result + 2], consumed);
            }
            return consumed;
          };
          EntityDecoder2.prototype.end = function() {
            var _a;
            switch (this.state) {
              case EntityDecoderState.NamedEntity: {
                return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
              }
              case EntityDecoderState.NumericDecimal: {
                return this.emitNumericEntity(0, 2);
              }
              case EntityDecoderState.NumericHex: {
                return this.emitNumericEntity(0, 3);
              }
              case EntityDecoderState.NumericStart: {
                (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
                return 0;
              }
              case EntityDecoderState.EntityStart: {
                return 0;
              }
            }
          };
          return EntityDecoder2;
        }()
      );
      exports.EntityDecoder = EntityDecoder;
      function getDecoder(decodeTree) {
        var ret = "";
        var decoder = new EntityDecoder(decodeTree, function(str) {
          return ret += (0, decode_codepoint_js_1.fromCodePoint)(str);
        });
        return function decodeWithTrie(str, decodeMode) {
          var lastIndex = 0;
          var offset = 0;
          while ((offset = str.indexOf("&", offset)) >= 0) {
            ret += str.slice(lastIndex, offset);
            decoder.startEntity(decodeMode);
            var len = decoder.write(
              str,
              // Skip the "&"
              offset + 1
            );
            if (len < 0) {
              lastIndex = offset + decoder.end();
              break;
            }
            lastIndex = offset + len;
            offset = len === 0 ? lastIndex + 1 : lastIndex;
          }
          var result = ret + str.slice(lastIndex);
          ret = "";
          return result;
        };
      }
      function determineBranch(decodeTree, current, nodeIdx, char) {
        var branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
        var jumpOffset = current & BinTrieFlags.JUMP_TABLE;
        if (branchCount === 0) {
          return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
        }
        if (jumpOffset) {
          var value = char - jumpOffset;
          return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIdx + value] - 1;
        }
        var lo = nodeIdx;
        var hi = lo + branchCount - 1;
        while (lo <= hi) {
          var mid = lo + hi >>> 1;
          var midVal = decodeTree[mid];
          if (midVal < char) {
            lo = mid + 1;
          } else if (midVal > char) {
            hi = mid - 1;
          } else {
            return decodeTree[mid + branchCount];
          }
        }
        return -1;
      }
      exports.determineBranch = determineBranch;
      var htmlDecoder = getDecoder(decode_data_html_js_1.default);
      var xmlDecoder = getDecoder(decode_data_xml_js_1.default);
      function decodeHTML(str, mode) {
        if (mode === void 0) {
          mode = DecodingMode.Legacy;
        }
        return htmlDecoder(str, mode);
      }
      exports.decodeHTML = decodeHTML;
      function decodeHTMLAttribute(str) {
        return htmlDecoder(str, DecodingMode.Attribute);
      }
      exports.decodeHTMLAttribute = decodeHTMLAttribute;
      function decodeHTMLStrict(str) {
        return htmlDecoder(str, DecodingMode.Strict);
      }
      exports.decodeHTMLStrict = decodeHTMLStrict;
      function decodeXML(str) {
        return xmlDecoder(str, DecodingMode.Strict);
      }
      exports.decodeXML = decodeXML;
    }
  });

  // node_modules/entities/lib/generated/encode-html.js
  var require_encode_html = __commonJS({
    "node_modules/entities/lib/generated/encode-html.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function restoreDiff(arr) {
        for (var i = 1; i < arr.length; i++) {
          arr[i][0] += arr[i - 1][0] + 1;
        }
        return arr;
      }
      exports.default = new Map(/* @__PURE__ */ restoreDiff([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(/* @__PURE__ */ restoreDiff([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(/* @__PURE__ */ restoreDiff([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(/* @__PURE__ */ restoreDiff([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
    }
  });

  // node_modules/entities/lib/escape.js
  var require_escape = __commonJS({
    "node_modules/entities/lib/escape.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.escapeText = exports.escapeAttribute = exports.escapeUTF8 = exports.escape = exports.encodeXML = exports.getCodePoint = exports.xmlReplacer = void 0;
      exports.xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
      var xmlCodeMap = /* @__PURE__ */ new Map([
        [34, "&quot;"],
        [38, "&amp;"],
        [39, "&apos;"],
        [60, "&lt;"],
        [62, "&gt;"]
      ]);
      exports.getCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      String.prototype.codePointAt != null ? function(str, index) {
        return str.codePointAt(index);
      } : (
        // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        function(c, index) {
          return (c.charCodeAt(index) & 64512) === 55296 ? (c.charCodeAt(index) - 55296) * 1024 + c.charCodeAt(index + 1) - 56320 + 65536 : c.charCodeAt(index);
        }
      );
      function encodeXML(str) {
        var ret = "";
        var lastIdx = 0;
        var match;
        while ((match = exports.xmlReplacer.exec(str)) !== null) {
          var i = match.index;
          var char = str.charCodeAt(i);
          var next = xmlCodeMap.get(char);
          if (next !== void 0) {
            ret += str.substring(lastIdx, i) + next;
            lastIdx = i + 1;
          } else {
            ret += "".concat(str.substring(lastIdx, i), "&#x").concat((0, exports.getCodePoint)(str, i).toString(16), ";");
            lastIdx = exports.xmlReplacer.lastIndex += Number((char & 64512) === 55296);
          }
        }
        return ret + str.substr(lastIdx);
      }
      exports.encodeXML = encodeXML;
      exports.escape = encodeXML;
      function getEscaper(regex, map) {
        return function escape2(data) {
          var match;
          var lastIdx = 0;
          var result = "";
          while (match = regex.exec(data)) {
            if (lastIdx !== match.index) {
              result += data.substring(lastIdx, match.index);
            }
            result += map.get(match[0].charCodeAt(0));
            lastIdx = match.index + 1;
          }
          return result + data.substring(lastIdx);
        };
      }
      exports.escapeUTF8 = getEscaper(/[&<>'"]/g, xmlCodeMap);
      exports.escapeAttribute = getEscaper(/["&\u00A0]/g, /* @__PURE__ */ new Map([
        [34, "&quot;"],
        [38, "&amp;"],
        [160, "&nbsp;"]
      ]));
      exports.escapeText = getEscaper(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
        [38, "&amp;"],
        [60, "&lt;"],
        [62, "&gt;"],
        [160, "&nbsp;"]
      ]));
    }
  });

  // node_modules/entities/lib/encode.js
  var require_encode = __commonJS({
    "node_modules/entities/lib/encode.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.encodeNonAsciiHTML = exports.encodeHTML = void 0;
      var encode_html_js_1 = __importDefault(require_encode_html());
      var escape_js_1 = require_escape();
      var htmlReplacer = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;
      function encodeHTML(data) {
        return encodeHTMLTrieRe(htmlReplacer, data);
      }
      exports.encodeHTML = encodeHTML;
      function encodeNonAsciiHTML(data) {
        return encodeHTMLTrieRe(escape_js_1.xmlReplacer, data);
      }
      exports.encodeNonAsciiHTML = encodeNonAsciiHTML;
      function encodeHTMLTrieRe(regExp, str) {
        var ret = "";
        var lastIdx = 0;
        var match;
        while ((match = regExp.exec(str)) !== null) {
          var i = match.index;
          ret += str.substring(lastIdx, i);
          var char = str.charCodeAt(i);
          var next = encode_html_js_1.default.get(char);
          if (typeof next === "object") {
            if (i + 1 < str.length) {
              var nextChar = str.charCodeAt(i + 1);
              var value = typeof next.n === "number" ? next.n === nextChar ? next.o : void 0 : next.n.get(nextChar);
              if (value !== void 0) {
                ret += value;
                lastIdx = regExp.lastIndex += 1;
                continue;
              }
            }
            next = next.v;
          }
          if (next !== void 0) {
            ret += next;
            lastIdx = i + 1;
          } else {
            var cp = (0, escape_js_1.getCodePoint)(str, i);
            ret += "&#x".concat(cp.toString(16), ";");
            lastIdx = regExp.lastIndex += Number(cp !== char);
          }
        }
        return ret + str.substr(lastIdx);
      }
    }
  });

  // node_modules/entities/lib/index.js
  var require_lib2 = __commonJS({
    "node_modules/entities/lib/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLAttribute = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.DecodingMode = exports.EntityDecoder = exports.encodeHTML5 = exports.encodeHTML4 = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.escapeText = exports.escapeAttribute = exports.escapeUTF8 = exports.escape = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = exports.EncodingMode = exports.EntityLevel = void 0;
      var decode_js_1 = require_decode();
      var encode_js_1 = require_encode();
      var escape_js_1 = require_escape();
      var EntityLevel;
      (function(EntityLevel2) {
        EntityLevel2[EntityLevel2["XML"] = 0] = "XML";
        EntityLevel2[EntityLevel2["HTML"] = 1] = "HTML";
      })(EntityLevel = exports.EntityLevel || (exports.EntityLevel = {}));
      var EncodingMode;
      (function(EncodingMode2) {
        EncodingMode2[EncodingMode2["UTF8"] = 0] = "UTF8";
        EncodingMode2[EncodingMode2["ASCII"] = 1] = "ASCII";
        EncodingMode2[EncodingMode2["Extensive"] = 2] = "Extensive";
        EncodingMode2[EncodingMode2["Attribute"] = 3] = "Attribute";
        EncodingMode2[EncodingMode2["Text"] = 4] = "Text";
      })(EncodingMode = exports.EncodingMode || (exports.EncodingMode = {}));
      function decode(data, options) {
        if (options === void 0) {
          options = EntityLevel.XML;
        }
        var level = typeof options === "number" ? options : options.level;
        if (level === EntityLevel.HTML) {
          var mode = typeof options === "object" ? options.mode : void 0;
          return (0, decode_js_1.decodeHTML)(data, mode);
        }
        return (0, decode_js_1.decodeXML)(data);
      }
      exports.decode = decode;
      function decodeStrict(data, options) {
        var _a;
        if (options === void 0) {
          options = EntityLevel.XML;
        }
        var opts = typeof options === "number" ? { level: options } : options;
        (_a = opts.mode) !== null && _a !== void 0 ? _a : opts.mode = decode_js_1.DecodingMode.Strict;
        return decode(data, opts);
      }
      exports.decodeStrict = decodeStrict;
      function encode(data, options) {
        if (options === void 0) {
          options = EntityLevel.XML;
        }
        var opts = typeof options === "number" ? { level: options } : options;
        if (opts.mode === EncodingMode.UTF8)
          return (0, escape_js_1.escapeUTF8)(data);
        if (opts.mode === EncodingMode.Attribute)
          return (0, escape_js_1.escapeAttribute)(data);
        if (opts.mode === EncodingMode.Text)
          return (0, escape_js_1.escapeText)(data);
        if (opts.level === EntityLevel.HTML) {
          if (opts.mode === EncodingMode.ASCII) {
            return (0, encode_js_1.encodeNonAsciiHTML)(data);
          }
          return (0, encode_js_1.encodeHTML)(data);
        }
        return (0, escape_js_1.encodeXML)(data);
      }
      exports.encode = encode;
      var escape_js_2 = require_escape();
      Object.defineProperty(exports, "encodeXML", { enumerable: true, get: function() {
        return escape_js_2.encodeXML;
      } });
      Object.defineProperty(exports, "escape", { enumerable: true, get: function() {
        return escape_js_2.escape;
      } });
      Object.defineProperty(exports, "escapeUTF8", { enumerable: true, get: function() {
        return escape_js_2.escapeUTF8;
      } });
      Object.defineProperty(exports, "escapeAttribute", { enumerable: true, get: function() {
        return escape_js_2.escapeAttribute;
      } });
      Object.defineProperty(exports, "escapeText", { enumerable: true, get: function() {
        return escape_js_2.escapeText;
      } });
      var encode_js_2 = require_encode();
      Object.defineProperty(exports, "encodeHTML", { enumerable: true, get: function() {
        return encode_js_2.encodeHTML;
      } });
      Object.defineProperty(exports, "encodeNonAsciiHTML", { enumerable: true, get: function() {
        return encode_js_2.encodeNonAsciiHTML;
      } });
      Object.defineProperty(exports, "encodeHTML4", { enumerable: true, get: function() {
        return encode_js_2.encodeHTML;
      } });
      Object.defineProperty(exports, "encodeHTML5", { enumerable: true, get: function() {
        return encode_js_2.encodeHTML;
      } });
      var decode_js_2 = require_decode();
      Object.defineProperty(exports, "EntityDecoder", { enumerable: true, get: function() {
        return decode_js_2.EntityDecoder;
      } });
      Object.defineProperty(exports, "DecodingMode", { enumerable: true, get: function() {
        return decode_js_2.DecodingMode;
      } });
      Object.defineProperty(exports, "decodeXML", { enumerable: true, get: function() {
        return decode_js_2.decodeXML;
      } });
      Object.defineProperty(exports, "decodeHTML", { enumerable: true, get: function() {
        return decode_js_2.decodeHTML;
      } });
      Object.defineProperty(exports, "decodeHTMLStrict", { enumerable: true, get: function() {
        return decode_js_2.decodeHTMLStrict;
      } });
      Object.defineProperty(exports, "decodeHTMLAttribute", { enumerable: true, get: function() {
        return decode_js_2.decodeHTMLAttribute;
      } });
      Object.defineProperty(exports, "decodeHTML4", { enumerable: true, get: function() {
        return decode_js_2.decodeHTML;
      } });
      Object.defineProperty(exports, "decodeHTML5", { enumerable: true, get: function() {
        return decode_js_2.decodeHTML;
      } });
      Object.defineProperty(exports, "decodeHTML4Strict", { enumerable: true, get: function() {
        return decode_js_2.decodeHTMLStrict;
      } });
      Object.defineProperty(exports, "decodeHTML5Strict", { enumerable: true, get: function() {
        return decode_js_2.decodeHTMLStrict;
      } });
      Object.defineProperty(exports, "decodeXMLStrict", { enumerable: true, get: function() {
        return decode_js_2.decodeXML;
      } });
    }
  });

  // src/BatoTo/BatoTo.ts
  var BatoTo_exports = {};
  __export(BatoTo_exports, {
    BatoTo: () => BatoTo,
    BatoToInfo: () => BatoToInfo
  });
  var import_types2 = __toESM(require_lib());

  // src/BatoTo/BatoToParser.ts
  var import_types = __toESM(require_lib());

  // src/BatoTo/BatoToHelper.ts
  var BTGenresClass = class {
    constructor() {
      this.Genres = [
        { name: "Artbook", param: "artbook" },
        { name: "Cartoon", param: "cartoon" },
        { name: "Comic", param: "comic" },
        { name: "Doujinshi", param: "doujinshi" },
        { name: "Imageset", param: "imageset" },
        { name: "Manga", param: "manga" },
        { name: "Manhua", param: "manhua" },
        { name: "Manhwa", param: "manhwa" },
        { name: "Webtoon", param: "webtoon" },
        { name: "Western", param: "western" },
        { name: "Shoujo(G)", param: "shoujo" },
        { name: "Shounen(B)", param: "shounen" },
        { name: "Josei(W)", param: "josei" },
        { name: "Seinen(M)", param: "seinen" },
        { name: "Yuri(GL)", param: "yuri" },
        { name: "Yaoi(BL)", param: "yaoi" },
        { name: "Futa(WL)", param: "futa" },
        { name: "Bara(ML)", param: "bara" },
        { name: "Gore", param: "gore" },
        { name: "Bloody", param: "bloody" },
        { name: "Violence", param: "violence" },
        { name: "Ecchi", param: "ecchi" },
        { name: "Adult", param: "adult" },
        { name: "Mature", param: "mature" },
        { name: "Smut", param: "smut" },
        { name: "Hentai", param: "hentai" },
        { name: "4-Koma", param: "_4_koma" },
        { name: "Action", param: "action" },
        { name: "Adaptation", param: "adaptation" },
        { name: "Adventure", param: "adventure" },
        { name: "Age", param: "age_gap" },
        { name: "Aliens", param: "aliens" },
        { name: "Animals", param: "animals" },
        { name: "Anthology", param: "anthology" },
        { name: "Beasts", param: "beasts" },
        { name: "Bodyswap", param: "bodyswap" },
        { name: "cars", param: "cars" },
        { name: "Cheating/Infidelity", param: "cheating_infidelity" },
        { name: "Childhood", param: "childhood_friends" },
        { name: "College", param: "college_life" },
        { name: "Comedy", param: "comedy" },
        { name: "Contest", param: "contest_winning" },
        { name: "Cooking", param: "cooking" },
        { name: "crime", param: "crime" },
        { name: "Crossdressing", param: "crossdressing" },
        { name: "Delinquents", param: "delinquents" },
        { name: "Dementia", param: "dementia" },
        { name: "Demons", param: "demons" },
        { name: "Drama", param: "drama" },
        { name: "Dungeons", param: "dungeons" },
        { name: "Emperor's daughte", param: "emperor_daughte" },
        { name: "Fantasy", param: "fantasy" },
        { name: "Fan-Colored", param: "fan_colored" },
        { name: "Fetish", param: "fetish" },
        { name: "Full", param: "full_color" },
        { name: "Game", param: "game" },
        { name: "Gender", param: "gender_bender" },
        { name: "Genderswap", param: "genderswap" },
        { name: "Ghosts", param: "ghosts" },
        { name: "Gyaru", param: "gyaru" },
        { name: "Harem", param: "harem" },
        { name: "Harlequin", param: "harlequin" },
        { name: "Historical", param: "historical" },
        { name: "Horror", param: "horror" },
        { name: "Incest", param: "incest" },
        { name: "Isekai", param: "isekai" },
        { name: "Kids", param: "kids" },
        { name: "Loli", param: "loli" },
        { name: "Magic", param: "magic" },
        { name: "Magical", param: "magical_girls" },
        { name: "Martial", param: "martial_arts" },
        { name: "Mecha", param: "mecha" },
        { name: "Medical", param: "medical" },
        { name: "Military", param: "military" },
        { name: "Monster", param: "monster_girls" },
        { name: "Monsters", param: "monsters" },
        { name: "Music", param: "music" },
        { name: "Mystery", param: "mystery" },
        { name: "Netorare/NTR", param: "netorare" },
        { name: "Ninja", param: "ninja" },
        { name: "Office", param: "office_workers" },
        { name: "Omegaverse", param: "omegaverse" },
        { name: "Oneshot", param: "oneshot" },
        { name: "parody", param: "parody" },
        { name: "Philosophical", param: "philosophical" },
        { name: "Police", param: "police" },
        { name: "Post-Apocalyptic", param: "post_apocalyptic" },
        { name: "Psychological", param: "psychological" },
        { name: "Regression", param: "regression" },
        { name: "Reincarnation", param: "reincarnation" },
        { name: "Reverse", param: "reverse_isekai" },
        { name: "Romance", param: "romance" },
        { name: "Royal", param: "royal_family" },
        { name: "Royalty", param: "royalty" },
        { name: "Samurai", param: "samurai" },
        { name: "School", param: "school_life" },
        { name: "Sci-Fi", param: "sci_fi" },
        { name: "Shota", param: "shota" },
        { name: "Shoujo", param: "shoujo_ai" },
        { name: "Shounen", param: "shounen_ai" },
        { name: "Showbiz", param: "showbiz" },
        { name: "Slice", param: "slice_of_life" },
        { name: "SM/BDSM/SUB-DOM", param: "sm_bdsm" },
        { name: "Space", param: "space" },
        { name: "Sports", param: "sports" },
        { name: "Super", param: "super_power" },
        { name: "Superhero", param: "superhero" },
        { name: "Supernatural", param: "supernatural" },
        { name: "Survival", param: "survival" },
        { name: "Thriller", param: "thriller" },
        { name: "Time", param: "time_travel" },
        { name: "Tower", param: "tower_climbing" },
        { name: "Traditional", param: "traditional_games" },
        { name: "Tragedy", param: "tragedy" },
        { name: "Transmigration", param: "transmigration" },
        { name: "Vampires", param: "vampires" },
        { name: "Villainess", param: "villainess" },
        { name: "Video", param: "video_games" },
        { name: "Virtual", param: "virtual_reality" },
        { name: "Wuxia", param: "wuxia" },
        { name: "Xianxia", param: "xianxia" },
        { name: "Xuanhuan", param: "xuanhuan" },
        { name: "Zombies", param: "zombies" },
        { name: "shotacon", param: "shotacon" },
        { name: "lolicon", param: "lolicon" },
        { name: "Award", param: "award_winning" },
        { name: "Youkai", param: "youkai" },
        { name: "Uncategorized", param: "uncategorized" }
      ];
      this.Genres = this.Genres.sort((a, b) => a.name > b.name ? 1 : -1);
    }
    getGenresList() {
      return this.Genres.map((Genre) => Genre.name);
    }
    getParam(name) {
      return this.Genres.filter((Genre) => Genre.name == name)[0]?.param;
    }
  };
  var BTGenres = new BTGenresClass();
  var BTLanguagesClass = class {
    constructor() {
      this.Languages = [
        {
          name: "English",
          BTCode: "en,en_us",
          lang: "\u{1F1EC}\u{1F1E7}",
          default: true
        },
        {
          name: "Arabic",
          BTCode: "ar",
          lang: "\u{1F1F8}\u{1F1E6}"
        },
        {
          name: "Bulgarian",
          BTCode: "bg",
          lang: "\u{1F1E7}\u{1F1EC}"
        },
        {
          name: "Chinese",
          BTCode: "zh",
          lang: "\u{1F1E8}\u{1F1F3}"
        },
        {
          name: "Czech",
          BTCode: "cs",
          lang: "\u{1F1E8}\u{1F1FF}"
        },
        {
          name: "Danish",
          BTCode: "da",
          lang: "\u{1F1E9}\u{1F1F0}"
        },
        {
          name: "Dutch",
          BTCode: "nl",
          lang: "\u{1F1F3}\u{1F1F1}"
        },
        {
          name: "Filipino",
          BTCode: "fil",
          lang: "\u{1F1F5}\u{1F1ED}"
        },
        {
          name: "Finnish",
          BTCode: "fi",
          lang: "\u{1F1EB}\u{1F1EE}"
        },
        {
          name: "French",
          BTCode: "fr",
          lang: "\u{1F1EB}\u{1F1F7}"
        },
        {
          name: "German",
          BTCode: "de",
          lang: "\u{1F1E9}\u{1F1EA}"
        },
        {
          name: "Greek",
          BTCode: "el",
          lang: "\u{1F1EC}\u{1F1F7}"
        },
        {
          name: "Hebrew",
          BTCode: "he",
          lang: "\u{1F1EE}\u{1F1F1}"
        },
        {
          name: "Hindi",
          BTCode: "hi",
          lang: "\u{1F1EE}\u{1F1F3}"
        },
        {
          name: "Hungarian",
          BTCode: "hu",
          lang: "\u{1F1ED}\u{1F1FA}"
        },
        {
          name: "Indonesian",
          BTCode: "id",
          lang: "\u{1F1EE}\u{1F1E9}"
        },
        {
          name: "Italian",
          BTCode: "it",
          lang: "\u{1F1EE}\u{1F1F9}"
        },
        {
          name: "Japanese",
          BTCode: "ja",
          lang: "\u{1F1EF}\u{1F1F5}"
        },
        {
          name: "Korean",
          BTCode: "ko",
          lang: "\u{1F1F0}\u{1F1F7}"
        },
        {
          name: "Malay",
          BTCode: "ms",
          lang: "\u{1F1F2}\u{1F1FE}"
        },
        {
          name: "Polish",
          BTCode: "pl",
          lang: "\u{1F1F5}\u{1F1F1}"
        },
        {
          name: "Portuguese",
          BTCode: "pt",
          lang: "\u{1F1F5}\u{1F1F9}"
        },
        {
          name: "Portuguese (Brazil)",
          BTCode: "pt_br",
          lang: "\u{1F1E7}\u{1F1F7}"
        },
        {
          name: "Romanian",
          BTCode: "ro",
          lang: "\u{1F1F7}\u{1F1F4}"
        },
        {
          name: "Russian",
          BTCode: "ru",
          lang: "\u{1F1F7}\u{1F1FA}"
        },
        {
          name: "Spanish",
          BTCode: "es",
          lang: "\u{1F1EA}\u{1F1F8}"
        },
        {
          name: "Spanish (Latin America)",
          BTCode: "es_419",
          lang: "\u{1F30E}"
        },
        {
          name: "Swedish",
          BTCode: "sv",
          lang: "\u{1F1F8}\u{1F1EA}"
        },
        {
          name: "Thai",
          BTCode: "th",
          lang: "\u{1F1F9}\u{1F1ED}"
        },
        {
          name: "Turkish",
          BTCode: "tr",
          lang: "\u{1F1F9}\u{1F1F7}"
        },
        {
          name: "Ukrainian",
          BTCode: "uk",
          lang: "\u{1F1FA}\u{1F1E6}"
        },
        {
          name: "Vietnamese",
          BTCode: "vi",
          lang: "\u{1F1FB}\u{1F1F3}"
        },
        {
          name: "Afrikaans",
          BTCode: "af",
          lang: "\u{1F1FF}\u{1F1E6}"
        },
        {
          name: "Albanian",
          BTCode: "sq",
          lang: "\u{1F1E6}\u{1F1F1}"
        },
        {
          name: "Amharic",
          BTCode: "am",
          lang: "\u{1F1EA}\u{1F1F9}"
        },
        {
          name: "Armenian",
          BTCode: "hy",
          lang: "\u{1F1E6}\u{1F1F2}"
        },
        {
          name: "Azerbaijani",
          BTCode: "az",
          lang: "\u{1F1E6}\u{1F1FF}"
        },
        {
          name: "Belarusian",
          BTCode: "be",
          lang: "\u{1F1E7}\u{1F1FE}"
        },
        {
          name: "Bengali",
          BTCode: "bn",
          lang: "\u{1F1E7}\u{1F1E9}"
        },
        {
          name: "Bosnian",
          BTCode: "bs",
          lang: "\u{1F1E7}\u{1F1E6}"
        },
        {
          name: "Burmese",
          BTCode: "my",
          lang: "\u{1F1F2}\u{1F1F2}"
        },
        {
          name: "Cambodian",
          BTCode: "km",
          lang: "\u{1F1F0}\u{1F1ED}"
        },
        {
          name: "Catalan",
          BTCode: "ca",
          lang: "\u{1F1EA}\u{1F1F8}"
        },
        {
          name: "Cebuano",
          BTCode: "ceb",
          lang: "\u{1F1F5}\u{1F1ED}"
        },
        {
          name: "Chinese (Cantonese)",
          BTCode: "zh_hk",
          lang: "\u{1F1ED}\u{1F1F0}"
        },
        {
          name: "Chinese (Traditional)",
          BTCode: "zh_tw",
          lang: "\u{1F1F9}\u{1F1FC}"
        },
        {
          name: "Croatian",
          BTCode: "hr",
          lang: "\u{1F1ED}\u{1F1F7}"
        },
        {
          name: "Esperanto",
          BTCode: "eo",
          lang: "\u{1F30D}"
        },
        {
          name: "Estonian",
          BTCode: "et",
          lang: "\u{1F1EA}\u{1F1EA}"
        },
        {
          name: "Faroese",
          BTCode: "fo",
          lang: "\u{1F1EB}\u{1F1F4}"
        },
        {
          name: "Georgian",
          BTCode: "ka",
          lang: "\u{1F1EC}\u{1F1EA}"
        },
        {
          name: "Guarani",
          BTCode: "gn",
          lang: "\u{1F1F5}\u{1F1FE}"
        },
        {
          name: "Gujarati",
          BTCode: "gu",
          lang: "\u{1F1EE}\u{1F1F3}"
        },
        {
          name: "Haitian Creole",
          BTCode: "ht",
          lang: "\u{1F1ED}\u{1F1F9}"
        },
        {
          name: "Hausa",
          BTCode: "ha",
          lang: "\u{1F1F3}\u{1F1EC}"
        },
        {
          name: "Icelandic",
          BTCode: "is",
          lang: "\u{1F1EE}\u{1F1F8}"
        },
        {
          name: "Igbo",
          BTCode: "ig",
          lang: "\u{1F1F3}\u{1F1EC}"
        },
        {
          name: "Irish",
          BTCode: "ga",
          lang: "\u{1F1EE}\u{1F1EA}"
        },
        {
          name: "Javanese",
          BTCode: "jv",
          lang: "\u{1F1EE}\u{1F1E9}"
        },
        {
          name: "Kannada",
          BTCode: "kn",
          lang: "\u{1F1EE}\u{1F1F3}"
        },
        {
          name: "Kazakh",
          BTCode: "kk",
          lang: "\u{1F1F0}\u{1F1FF}"
        },
        {
          name: "Kurdish",
          BTCode: "ku",
          lang: "\u{1F1EE}\u{1F1F6}"
        },
        {
          name: "Kyrgyz",
          BTCode: "ky",
          lang: "\u{1F1F0}\u{1F1EC}"
        },
        {
          name: "Laothian",
          BTCode: "lo",
          lang: "\u{1F1F1}\u{1F1E6}"
        },
        {
          name: "Latvian",
          BTCode: "lv",
          lang: "\u{1F1F1}\u{1F1FB}"
        },
        {
          name: "Lithuanian",
          BTCode: "lt",
          lang: "\u{1F1F1}\u{1F1F9}"
        },
        {
          name: "Luxembourgish",
          BTCode: "lb",
          lang: "\u{1F1F1}\u{1F1FA}"
        },
        {
          name: "Macedonian",
          BTCode: "mk",
          lang: "\u{1F1F2}\u{1F1F0}"
        },
        {
          name: "Malagasy",
          BTCode: "mg",
          lang: "\u{1F1F2}\u{1F1EC}"
        },
        {
          name: "Malayalam",
          BTCode: "ml",
          lang: "\u{1F1EE}\u{1F1F3}"
        },
        {
          name: "Maltese",
          BTCode: "mt",
          lang: "\u{1F1F2}\u{1F1F9}"
        },
        {
          name: "Maori",
          BTCode: "mi",
          lang: "\u{1F1F3}\u{1F1FF}"
        },
        {
          name: "Marathi",
          BTCode: "mr",
          lang: "\u{1F1EE}\u{1F1F3}"
        },
        {
          name: "Moldavian",
          BTCode: "mo",
          lang: "\u{1F1F2}\u{1F1E9}"
        },
        {
          name: "Mongolian",
          BTCode: "mn",
          lang: "\u{1F1F2}\u{1F1F3}"
        },
        {
          name: "Nepali",
          BTCode: "ne",
          lang: "\u{1F1F3}\u{1F1F5}"
        },
        {
          name: "Norwegian",
          BTCode: "no",
          lang: "\u{1F1F3}\u{1F1F4}"
        },
        {
          name: "Nyanja",
          BTCode: "ny",
          lang: "\u{1F1F2}\u{1F1FC}"
        },
        {
          name: "Pashto",
          BTCode: "ps",
          lang: "\u{1F1E6}\u{1F1EB}"
        },
        {
          name: "Persian",
          BTCode: "fa",
          lang: "\u{1F1EE}\u{1F1F7}"
        },
        {
          name: "Romansh",
          BTCode: "rm",
          lang: "\u{1F1E8}\u{1F1ED}"
        },
        {
          name: "Samoan",
          BTCode: "sm",
          lang: "\u{1F1FC}\u{1F1F8}"
        },
        {
          name: "Serbian",
          BTCode: "sr",
          lang: "\u{1F1F7}\u{1F1F8}"
        },
        {
          name: "Serbo-Croatian",
          BTCode: "sh",
          lang: "\u{1F1E7}\u{1F1E6}"
        },
        {
          name: "Sesotho",
          BTCode: "st",
          lang: "\u{1F1F1}\u{1F1F8}"
        },
        {
          name: "Shona",
          BTCode: "sn",
          lang: "\u{1F1FF}\u{1F1FC}"
        },
        {
          name: "Sindhi",
          BTCode: "sd",
          lang: "\u{1F1F5}\u{1F1F0}"
        },
        {
          name: "Sinhalese",
          BTCode: "si",
          lang: "\u{1F1F1}\u{1F1F0}"
        },
        {
          name: "Slovak",
          BTCode: "sk",
          lang: "\u{1F1F8}\u{1F1F0}"
        },
        {
          name: "Slovenian",
          BTCode: "sl",
          lang: "\u{1F1F8}\u{1F1EE}"
        },
        {
          name: "Somali",
          BTCode: "so",
          lang: "\u{1F1F8}\u{1F1F4}"
        },
        {
          name: "Swahili",
          BTCode: "sw",
          lang: "\u{1F1F9}\u{1F1FF}"
        },
        {
          name: "Tajik",
          BTCode: "tg",
          lang: "\u{1F1F9}\u{1F1EF}"
        },
        {
          name: "Tamil",
          BTCode: "ta",
          lang: "\u{1F1EE}\u{1F1F3}"
        },
        {
          name: "Tigrinya",
          BTCode: "ti",
          lang: "\u{1F1EA}\u{1F1F7}"
        },
        {
          name: "Tonga",
          BTCode: "to",
          lang: "\u{1F1F9}\u{1F1F4}"
        },
        {
          name: "Turkmen",
          BTCode: "tk",
          lang: "\u{1F1F9}\u{1F1F2}"
        },
        {
          name: "Urdu",
          BTCode: "ur",
          lang: "\u{1F1F5}\u{1F1F0}"
        },
        {
          name: "Uzbek",
          BTCode: "uz",
          lang: "\u{1F1FA}\u{1F1FF}"
        },
        {
          name: "Yoruba",
          BTCode: "yo",
          lang: "\u{1F1F3}\u{1F1EC}"
        },
        {
          name: "Zulu",
          BTCode: "zu",
          lang: "\u{1F1FF}\u{1F1E6}"
        },
        {
          name: "Other",
          BTCode: "_t",
          lang: "\u{1F30D}"
        },
        {
          name: "Basque",
          BTCode: "eu",
          lang: "\u{1F1EA}\u{1F1FA}"
        },
        {
          name: "Portuguese (Portugal)",
          BTCode: "pt-PT",
          lang: "\u{1F1F5}\u{1F1F9}"
        }
      ];
      this.Languages = this.Languages.sort((a, b) => a.name > b.name ? 1 : -1);
    }
    getBTCodeList() {
      return this.Languages.map((Language) => Language.BTCode);
    }
    getName(BTCode) {
      return this.Languages.filter((Language) => Language.BTCode == BTCode)[0]?.name ?? "Unknown";
    }
    getLangCode(BTCode) {
      return this.Languages.filter((Language) => Language.BTCode == BTCode)[0]?.lang ?? "Unknown";
    }
    getDefault() {
      return this.Languages.filter((Language) => Language.default).map((Language) => Language.BTCode);
    }
  };
  var BTLanguages = new BTLanguagesClass();

  // src/BatoTo/BatoToParser.ts
  var CryptoJS = __toESM(require_crypto_js_min());
  var entities = require_lib2();
  var parseMangaDetails = ($2, mangaId2) => {
    const titles = [];
    titles.push(decodeHTMLEntity($2("a", $2(".item-title")).text().trim() ?? ""));
    const altTitles = $2(".alias-set").text().trim().split("/");
    for (const title of altTitles) {
      titles.push(decodeHTMLEntity(title));
    }
    const description = decodeHTMLEntity($2(".limit-html").text().trim() ?? "");
    const authorElement = $2('div.attr-item b:contains("Authors")').next("span");
    const author = authorElement.length ? authorElement.children().map((_, e) => {
      return $2(e).text().trim();
    }).toArray().join(", ") : "";
    const artistElement = $2('div.attr-item b:contains("Artists")').next("span");
    const artist = artistElement.length ? artistElement.children().map((_, e) => {
      return $2(e).text().trim();
    }).toArray().join(", ") : "";
    const arrayTags = [];
    for (const tag of $2('div.attr-item b:contains("Genres")').next("span").children().toArray()) {
      const label = $2(tag).text().trim();
      const id = encodeURI(BTGenres.getParam(label) ?? label);
      if (!id || !label) continue;
      arrayTags.push({ id, label });
    }
    const tagSections = [App.createTagSection({ id: "0", label: "genres", tags: arrayTags.map((x) => App.createTag(x)) })];
    const rawStatus = $2('div.attr-item b:contains("Upload status")').next("span").text().trim();
    let status = "ONGOING";
    switch (rawStatus.toUpperCase()) {
      case "ONGOING":
        status = "Ongoing";
        break;
      case "COMPLETED":
        status = "Completed";
        break;
      case "HIATUS":
        status = "Hiatus";
        break;
      default:
        status = "Ongoing";
        break;
    }
    return App.createSourceManga({
      id: mangaId2,
      mangaInfo: App.createMangaInfo({
        titles,
        image: `mangaId=${mangaId2}`,
        status,
        author,
        artist,
        tags: tagSections,
        desc: description
      })
    });
  };
  var parseChapterList = ($2, mangaId2) => {
    const chapters = [];
    let sortingIndex = 0;
    for (const chapter of $2("div.episode-list div.main .item").toArray()) {
      const title = $2("b", chapter).text().trim();
      const chapterId2 = $2("a", chapter).attr("href")?.replace(/\/$/, "")?.split("/").pop() ?? "";
      const group = $2("a.ps-3 > span", chapter).text().trim();
      if (!chapterId2) continue;
      let language = BTLanguages.getLangCode($2("em").attr("data-lang") ?? "");
      if (language === "Unknown") language = "\u{1F1EC}\u{1F1E7}";
      const timeAgo = $2("i.ps-3", chapter).text().trim().split(" ");
      const chapNumRegex = title.match(/(\d+)(?:[-.]\d+)?/);
      let date = new Date(Date.now());
      if (timeAgo[1] == "secs") date = new Date(Date.now() - 1e3 * Number(timeAgo[0]));
      if (timeAgo[1] == "mins") date = new Date(Date.now() - 1e3 * 60 * Number(timeAgo[0]));
      if (timeAgo[1] == "hours") date = new Date(Date.now() - 1e3 * 3600 * Number(timeAgo[0]));
      if (timeAgo[1] == "days") date = new Date(Date.now() - 1e3 * 3600 * 24 * Number(timeAgo[0]));
      let chapNum = chapNumRegex && chapNumRegex[1] ? Number(chapNumRegex[1].replace("-", ".")) : 0;
      if (isNaN(chapNum)) chapNum = 0;
      chapters.push({
        id: chapterId2,
        name: title,
        langCode: language,
        chapNum,
        time: date,
        sortingIndex,
        volume: 0,
        group
      });
      sortingIndex--;
    }
    if (chapters.length == 0) {
      throw new Error(`Couldn't find any chapters for mangaId: ${mangaId2}!`);
    }
    return chapters.map((chapter) => {
      chapter.sortingIndex += chapters.length;
      return App.createChapter(chapter);
    });
  };
  var parseChapterDetails = ($, mangaId, chapterId) => {
    const scriptObj = $("script").toArray().find((obj) => {
      const data = obj.children[0]?.data ?? "";
      return data.includes("batoPass") && data.includes("batoWord");
    });
    const script = scriptObj?.children[0]?.data ?? "";
    const batoPass = eval(script.match(/const\s+batoPass\s*=\s*(.*?);/)?.[1] ?? "").toString();
    const batoWord = script.match(/const\s+batoWord\s*=\s*"(.*)";/)?.[1] ?? "";
    const imgHttps = script.match(/const\s+imgHttps\s*=\s*(.*?);/)?.[1] ?? "";
    const imgList = JSON.parse(imgHttps);
    const tknList = JSON.parse(CryptoJS.AES.decrypt(batoWord, batoPass).toString(CryptoJS.enc.Utf8));
    const pages = imgList.map((value, index) => `${value}?${tknList[index]}`);
    const chapterDetails = App.createChapterDetails({
      id: chapterId,
      mangaId,
      pages
    });
    return chapterDetails;
  };
  var parseHomeSections = ($2, sectionCallback) => {
    const popularSection = App.createHomeSection({
      id: "popular_updates",
      title: "Popular Updates",
      containsMoreItems: true,
      type: import_types.HomeSectionType.singleRowLarge
    });
    const latestSection = App.createHomeSection({
      id: "latest_releases",
      title: "Latest Releases",
      containsMoreItems: true,
      type: import_types.HomeSectionType.singleRowNormal
    });
    const popularSection_Array = [];
    for (const manga of $2(".home-popular .col.item").toArray()) {
      const image = $2("img", manga).first().attr("src") ?? "";
      const title = $2(".item-title", manga).text().trim() ?? "";
      const id = $2("a", manga).attr("href")?.replace("/series/", "")?.trim().split("/")[0] ?? "";
      const btcode = $2("em", manga).attr("data-lang");
      const lang = btcode ? BTLanguages.getLangCode(btcode) : "\u{1F1EC}\u{1F1E7}";
      const subtitle = lang + " " + $2(".item-volch", manga).text().trim();
      if (!id || !title) continue;
      popularSection_Array.push(App.createPartialSourceManga({
        image,
        title: decodeHTMLEntity(title),
        mangaId: id,
        subtitle: decodeHTMLEntity(subtitle)
      }));
    }
    popularSection.items = popularSection_Array;
    sectionCallback(popularSection);
    const latestSection_Array = [];
    for (const manga of $2(".series-list .col.item").toArray()) {
      const image = $2("img", manga).attr("src") ?? "";
      const title = $2(".item-title", manga).text().trim() ?? "";
      const id = $2("a", manga).attr("href")?.replace("/series/", "")?.trim().split("/")[0] ?? "";
      const btcode = $2("em", manga).attr("data-lang");
      const lang = btcode ? BTLanguages.getLangCode(btcode) : "\u{1F1EC}\u{1F1E7}";
      const subtitle = lang + " " + $2(".item-volch a", manga).text().trim();
      if (!id || !title) continue;
      latestSection_Array.push(App.createPartialSourceManga({
        image,
        title: decodeHTMLEntity(title),
        mangaId: id,
        subtitle: decodeHTMLEntity(subtitle)
      }));
    }
    latestSection.items = latestSection_Array;
    sectionCallback(latestSection);
  };
  var parseViewMore = ($2) => {
    const manga = [];
    const collectedIds = [];
    for (const obj of $2(".item", "#series-list").toArray()) {
      const id = $2("a", obj).attr("href")?.replace("/series/", "").trim().split("/")[0] ?? "";
      const title = $2(".item-title", obj).text();
      const btcode = $2("em", obj).attr("data-lang");
      const lang = btcode ? BTLanguages.getLangCode(btcode) : "\u{1F1EC}\u{1F1E7}";
      const subtitle = lang + " " + $2(".visited", obj).text().trim();
      const image = $2("img", obj).attr("src") ?? "";
      if (!id || !title || collectedIds.includes(id)) continue;
      manga.push(App.createPartialSourceManga({
        image,
        title: decodeHTMLEntity(title),
        mangaId: id,
        subtitle: decodeHTMLEntity(subtitle)
      }));
      collectedIds.push(id);
    }
    return manga;
  };
  var parseTags = () => {
    const arrayTags = [];
    for (const label of BTGenres.getGenresList()) {
      const id = encodeURI(BTGenres.getParam(label) ?? label);
      if (!id || !label) continue;
      arrayTags.push({ id, label });
    }
    const tagSections = [App.createTagSection({ id: "0", label: "genres", tags: arrayTags.map((x) => App.createTag(x)) })];
    return tagSections;
  };
  var parseSearch = ($2, langFilter, langs) => {
    const mangas = [];
    for (const obj of $2(".item", "#series-list").toArray()) {
      const id = $2(".item-cover", obj).attr("href")?.replace("/series/", "")?.trim().split("/")[0] ?? "";
      const title = $2(".item-title", obj).text() ?? "";
      const btcode = $2("em", obj).attr("data-lang") ?? "en,en_us";
      const lang = btcode ? BTLanguages.getLangCode(btcode) : "\u{1F1EC}\u{1F1E7}";
      const subtitle = lang + " " + $2(".visited", obj).text().trim();
      const image = $2("img", obj).attr("src") ?? "";
      if (!id || !title) continue;
      if (langFilter && !langs.includes(btcode)) continue;
      mangas.push(App.createPartialSourceManga({
        image,
        title: decodeHTMLEntity(title),
        mangaId: id,
        subtitle
      }));
    }
    return mangas;
  };
  var parseThumbnailUrl = ($2) => {
    return $2("div.attr-cover img").attr("src") ?? "";
  };
  var isLastPage = ($2) => {
    return $2(".page-item").last().hasClass("disabled");
  };
  var decodeHTMLEntity = (str) => {
    return entities.decodeHTML(str);
  };

  // src/BatoTo/BatoToSettings.ts
  var getLanguages = async (stateManager) => {
    return await stateManager.retrieve("languages") ?? BTLanguages.getDefault();
  };
  var getLanguageHomeFilter = async (stateManager) => {
    return await stateManager.retrieve("language_home_filter") ?? false;
  };
  var getLanguageSearchFilter = async (stateManager) => {
    return await stateManager.retrieve("language_search_filter") ?? false;
  };
  var languageSettings = (stateManager) => {
    return App.createDUINavigationButton({
      id: "language_settings",
      label: "Language Settings",
      form: App.createDUIForm({
        sections: async () => [
          App.createDUISection({
            id: "content",
            footer: "When enabled, mangas will be filtered by the selected languages.",
            isHidden: false,
            rows: async () => [
              App.createDUISelect({
                id: "languages",
                label: "Languages",
                options: BTLanguages.getBTCodeList(),
                labelResolver: async (option) => BTLanguages.getName(option),
                value: App.createDUIBinding({
                  get: () => getLanguages(stateManager),
                  set: async (newValue) => await stateManager.store("languages", newValue)
                }),
                allowsMultiselect: true
              }),
              App.createDUISwitch({
                id: "language_home_filter",
                label: "Filter Homepage Language",
                value: App.createDUIBinding({
                  get: () => getLanguageHomeFilter(stateManager),
                  set: async (newValue) => await stateManager.store("language_home_filter", newValue)
                })
              }),
              App.createDUISwitch({
                id: "language_search_filter",
                label: "Filter Search Language",
                value: App.createDUIBinding({
                  get: () => getLanguageSearchFilter(stateManager),
                  set: async (newValue) => await stateManager.store("language_search_filter", newValue)
                })
              })
            ]
          })
        ]
      })
    });
  };
  var resetSettings = (stateManager) => {
    return App.createDUIButton({
      id: "reset",
      label: "Reset to Default",
      onTap: async () => {
        await Promise.all([
          stateManager.store("languages", BTLanguages.getDefault()),
          stateManager.store("language_home_filter", false),
          stateManager.store("language_search_filter", false)
        ]);
      }
    });
  };

  // src/BatoTo/BatoTo.ts
  var BATO_DOMAIN = "https://bato.to";
  var BatoToInfo = {
    version: "3.1.2",
    name: "BatoTo",
    icon: "icon.png",
    author: "niclimcy",
    authorWebsite: "https://github.com/niclimcy",
    description: "Extension that pulls manga from bato.to",
    contentRating: import_types2.ContentRating.MATURE,
    websiteBaseURL: BATO_DOMAIN,
    sourceTags: [
      {
        text: "Multi Language",
        type: import_types2.BadgeColor.BLUE
      }
    ],
    intents: import_types2.SourceIntents.MANGA_CHAPTERS | import_types2.SourceIntents.HOMEPAGE_SECTIONS | import_types2.SourceIntents.SETTINGS_UI | import_types2.SourceIntents.CLOUDFLARE_BYPASS_REQUIRED
  };
  var BatoTo = class _BatoTo {
    constructor(cheerio) {
      this.cheerio = cheerio;
      this.requestManager = App.createRequestManager({
        requestsPerSecond: 4,
        requestTimeout: 15e3,
        interceptor: {
          interceptRequest: async (request) => {
            request.headers = {
              ...request.headers ?? {},
              ...{
                "referer": `${BATO_DOMAIN}/`,
                "user-agent": await this.requestManager.getDefaultUserAgent()
              }
            };
            if (request.url.includes("mangaId=")) {
              const mangaId2 = request.url.replace("mangaId=", "");
              if (mangaId2) request.url = await this.getThumbnailUrl(mangaId2);
            }
            return request;
          },
          interceptResponse: async (response) => {
            return response;
          }
        }
      });
      this.stateManager = App.createSourceStateManager();
    }
    async getSourceMenu() {
      return Promise.resolve(App.createDUISection({
        id: "main",
        header: "Source Settings",
        isHidden: false,
        rows: async () => [
          languageSettings(this.stateManager),
          resetSettings(this.stateManager)
        ]
      }));
    }
    getMangaShareUrl(mangaId2) {
      return `${BATO_DOMAIN}/series/${mangaId2}`;
    }
    async getMangaDetails(mangaId2) {
      const request = App.createRequest({
        url: `${BATO_DOMAIN}/series/${mangaId2}`,
        method: "GET"
      });
      const response = await this.requestManager.schedule(request, 1);
      this.CloudFlareError(response.status);
      const $2 = this.cheerio.load(response.data);
      return parseMangaDetails($2, mangaId2);
    }
    async getChapters(mangaId2) {
      const request = App.createRequest({
        url: `${BATO_DOMAIN}/series/${mangaId2}`,
        method: "GET"
      });
      const response = await this.requestManager.schedule(request, 1);
      this.CloudFlareError(response.status);
      const $2 = this.cheerio.load(response.data);
      return parseChapterList($2, mangaId2);
    }
    async getChapterDetails(mangaId2, chapterId2) {
      const request = App.createRequest({
        url: `${BATO_DOMAIN}/chapter/${chapterId2}`,
        method: "GET"
      });
      const response = await this.requestManager.schedule(request, 1);
      this.CloudFlareError(response.status);
      const $2 = this.cheerio.load(response.data);
      return parseChapterDetails($2, mangaId2, chapterId2);
    }
    async getHomePageSections(sectionCallback) {
      const request = App.createRequest({
        url: `${BATO_DOMAIN}`,
        method: "GET"
      });
      const response = await this.requestManager.schedule(request, 1);
      this.CloudFlareError(response.status);
      const $2 = this.cheerio.load(response.data);
      parseHomeSections($2, sectionCallback);
    }
    async getViewMoreItems(homepageSectionId, metadata) {
      const page = metadata?.page ?? 1;
      let param = "";
      switch (homepageSectionId) {
        case "popular_updates":
          param = `?sort=views_d.za&page=${page}`;
          break;
        case "latest_releases":
          param = `?sort=update.za&page=${page}`;
          break;
        default:
          throw new Error("Requested to getViewMoreItems for a section ID which doesn't exist");
      }
      const langHomeFilter = await this.stateManager.retrieve("language_home_filter") ?? false;
      const langs = await this.stateManager.retrieve("languages") ?? BTLanguages.getDefault();
      param += langHomeFilter ? `&langs=${langs.join(",")}` : "";
      const request = App.createRequest({
        url: `${BATO_DOMAIN}/browse`,
        method: "GET",
        param
      });
      const response = await this.requestManager.schedule(request, 1);
      this.CloudFlareError(response.status);
      const $2 = this.cheerio.load(response.data);
      const manga = parseViewMore($2);
      metadata = !isLastPage($2) ? { page: page + 1 } : void 0;
      return App.createPagedResults({
        results: manga,
        metadata
      });
    }
    async getSearchResults(query, metadata) {
      const page = metadata?.page ?? 1;
      let request;
      if (query.title) {
        request = App.createRequest({
          url: `${BATO_DOMAIN}/search?word=${encodeURI(query.title ?? "")}&page=${page}`,
          method: "GET"
        });
      } else {
        request = App.createRequest({
          url: `${BATO_DOMAIN}/browse?genres=${query?.includedTags?.map((x) => x.id)[0]}&page=${page}`,
          method: "GET"
        });
      }
      const langSearchFilter = await this.stateManager.retrieve("language_search_filter") ?? false;
      const langs = await this.stateManager.retrieve("languages") ?? BTLanguages.getDefault();
      const response = await this.requestManager.schedule(request, 1);
      const $2 = this.cheerio.load(response.data);
      const manga = parseSearch($2, langSearchFilter, langs);
      metadata = !isLastPage($2) ? { page: page + 1 } : void 0;
      return App.createPagedResults({
        results: manga,
        metadata
      });
    }
    async getSearchTags() {
      return parseTags();
    }
    async getThumbnailUrl(mangaId2) {
      const request = App.createRequest({
        url: `${BATO_DOMAIN}/series/${mangaId2}`,
        method: "GET"
      });
      const response = await this.requestManager.schedule(request, 1);
      this.CloudFlareError(response.status);
      const $2 = this.cheerio.load(response.data);
      return parseThumbnailUrl($2);
    }
    CloudFlareError(status) {
      if (status == 503 || status == 403) {
        throw new Error(`CLOUDFLARE BYPASS ERROR:
Please go to the homepage of <${_BatoTo.name}> and press the cloud icon.`);
      }
    }
    async getCloudflareBypassRequestAsync() {
      return App.createRequest({
        url: BATO_DOMAIN,
        method: "GET",
        headers: {
          "referer": `${BATO_DOMAIN}/`,
          "user-agent": await this.requestManager.getDefaultUserAgent()
        }
      });
    }
  };
  return __toCommonJS(BatoTo_exports);
})();
return source;} this.Sources = compat(); if (typeof exports === 'object' && typeof module !== 'undefined') {module.exports = this.Sources;}
