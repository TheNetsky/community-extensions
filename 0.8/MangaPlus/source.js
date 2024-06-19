function compat() {
"use strict";
var source = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
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
      var BadgeColor;
      (function(BadgeColor2) {
        BadgeColor2["BLUE"] = "default";
        BadgeColor2["GREEN"] = "success";
        BadgeColor2["GREY"] = "info";
        BadgeColor2["YELLOW"] = "warning";
        BadgeColor2["RED"] = "danger";
      })(BadgeColor = exports.BadgeColor || (exports.BadgeColor = {}));
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

  // src/MangaPlus/MangaPlus.ts
  var MangaPlus_exports = {};
  __export(MangaPlus_exports, {
    MangaPlus: () => MangaPlus,
    MangaPlusInfo: () => MangaPlusInfo
  });
  var import_types = __toESM(require_lib());

  // src/MangaPlus/MangaPlusHelper.ts
  var Title = class {
    constructor(titleId, name, portraitImageUrl, landscapeImageUrl, author) {
      this.viewCount = 0;
      this.language = "ENGLISH" /* ENGLISH */;
      this.titleId = titleId;
      this.name = name;
      this.portraitImageUrl = portraitImageUrl;
      this.landscapeImageUrl = landscapeImageUrl;
      if (author) this.author = author;
    }
  };
  var TitleDetailView = class _TitleDetailView {
    constructor() {
      this.nextTimeStamp = 0;
      this.viewingPeriodDescription = "";
      this.nonAppearanceInfo = "";
      this.chapterListGroup = [];
      this.firstChapterList = [];
      this.lastChapterList = [];
      this.isSimulReleased = false;
      this.chaptersDescending = true;
    }
    get isWebtoon() {
      return this.firstChapterList.every((chapter) => chapter.isVerticalOnly) && this.lastChapterList.every((chapter) => chapter.isVerticalOnly);
    }
    get isOneShot() {
      return this.chapterCount == 1 && this.firstChapterList.at(0)?.name?.localeCompare("one-shot", void 0, { "sensitivity": "base" }) == 0;
    }
    get chapterCount() {
      return this.firstChapterList?.length + this.lastChapterList?.length;
    }
    get isReEdition() {
      return this.viewingPeriodDescription?.search(_TitleDetailView.REEDITION_REGEX) != 0;
    }
    get isCompleted() {
      return this.nonAppearanceInfo?.search(_TitleDetailView.COMPLETED_REGEX) != 0 || this.isOneShot;
    }
    get isOnHiatus() {
      return this.nonAppearanceInfo?.search(_TitleDetailView.HIATUS_REGEX) != 0;
    }
    get genres() {
      const genres = [];
      if (this.isSimulReleased && !this.isReEdition && !this.isOneShot) genres.push("Simulrelease");
      if (this.isOneShot) genres.push("One-shot");
      if (this.isReEdition) genres.push("Re-edition");
      if (this.isWebtoon) genres.push("Webtoon");
      return genres;
    }
    static fromJson(str) {
      const bopp = JSON.parse(str);
      if (bopp.success?.titleDetailView === void 0) throw Error("Cannot find manga");
      const json = bopp.success.titleDetailView;
      const obj = new _TitleDetailView();
      if (json.title === void 0) {
        throw Error("Cannot find title");
      }
      const title = json.title;
      obj.title = new Title(title.titleId, title.name, title.portraitImageUrl, title.landscapeImageUrl, title.author);
      obj.titleImageUrl = json.titleImageUrl;
      obj.overview = json.overview;
      obj.backgroundImageUrl = json.backgroundImageUrl;
      obj.nextTimeStamp = json.nextTimeStamp;
      obj.viewingPeriodDescription = json.viewingPeriodDescription;
      obj.nonAppearanceInfo = json.nonAppearanceInfo;
      obj.firstChapterList = json.chapterListGroup?.flatMap((a) => a.firstChapterList ?? []).map((chapter) => Object.assign(new Chapter(1, 1, "", 1, 1), chapter));
      obj.lastChapterList = json.chapterListGroup?.flatMap((a) => a.lastChapterList ?? []).map((chapter) => Object.assign(new Chapter(1, 1, "", 1, 1), chapter));
      return obj;
    }
    toSourceManga() {
      const authors = this.title?.author?.split("/");
      return App.createSourceManga({
        id: this.title?.titleId.toString() ?? "",
        mangaInfo: App.createMangaInfo({
          image: "imageMangaId=" + this.title?.titleId,
          titles: [this.title?.name ?? ""],
          author: authors ? authors[0]?.trimEnd() : this.title?.author ?? "",
          artist: authors ? authors[1]?.trimStart() : this.title?.author ?? "",
          desc: (this.overview ?? "") + "\n\n" + (this.viewingPeriodDescription ?? ""),
          tags: [
            App.createTagSection({
              id: "0",
              label: "genres",
              tags: this.genres.map((genre) => App.createTag({ id: genre, label: genre }))
            })
          ],
          status: this.isCompleted ? "Completed" : this.isOnHiatus ? "On hiatus" : "Ongoing"
        })
      });
    }
    static {
      this.COMPLETED_REGEX = /completado|complete|completo/;
    }
    static {
      this.HIATUS_REGEX = /on a hiatus/i;
    }
    static {
      this.REEDITION_REGEX = /revival|remasterizada/;
    }
  };
  var Chapter = class {
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
      const chapNum = parseFloat(this.name.slice(this.name.lastIndexOf("#") + 1));
      return App.createChapter({
        id: this.chapterId.toString(),
        name: this.subTitle ? this.subTitle : "",
        chapNum: isNaN(chapNum) ? 0 : chapNum,
        sortingIndex: isNaN(chapNum) ? -1 : chapNum,
        time: new Date(this.startTimeStamp * 1e3)
      });
    }
  };

  // src/MangaPlus/MangaPlusSettings.ts
  var getLanguages = async (stateManager) => {
    return await stateManager.retrieve("languages") ?? ["ENGLISH" /* ENGLISH */];
  };
  var getSplitImages = async (stateManager) => {
    return await stateManager.retrieve("split_images") ?? "yes";
  };
  var getResolution = async (stateManager) => {
    return await stateManager.retrieve("image_resolution") ?? "high";
  };
  var contentSettings = (stateManager) => {
    return App.createDUINavigationButton({
      id: "content_settings",
      label: "Content Settings",
      form: App.createDUIForm({
        sections: async () => [
          App.createDUISection({
            isHidden: false,
            id: "content",
            rows: async () => {
              await Promise.all([
                getLanguages(stateManager),
                getSplitImages(stateManager),
                getResolution(stateManager)
              ]);
              return await [
                App.createDUISelect({
                  id: "languages",
                  label: "Languages",
                  options: ["ENGLISH" /* ENGLISH */, "FRENCH" /* FRENCH */, "INDONESIAN" /* INDONESIAN */, "PORTUGUESE_BR" /* PORTUGUESE_BR */, "RUSSIAN" /* RUSSIAN */, "SPANISH" /* SPANISH */, "THAI" /* THAI */, "VIETNAMESE" /* VIETNAMESE */],
                  labelResolver: async (option) => {
                    switch (option) {
                      case "ENGLISH" /* ENGLISH */:
                        return "English";
                      case "SPANISH" /* SPANISH */:
                        return "Espa\xF1ol";
                      case "FRENCH" /* FRENCH */:
                        return "Fran\xE7ais";
                      case "INDONESIAN" /* INDONESIAN */:
                        return "Bahasa (IND)";
                      case "PORTUGUESE_BR" /* PORTUGUESE_BR */:
                        return "Portug\xFBes (BR)";
                      case "RUSSIAN" /* RUSSIAN */:
                        return "\u0420\u0443\u0441\u0441\u043A\u0438\u0439";
                      case "THAI" /* THAI */:
                        return "\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22";
                      case "VIETNAMESE" /* VIETNAMESE */:
                        return "Ti\u1EBFng Vi\u1EC7t";
                      default:
                        return "";
                    }
                  },
                  value: App.createDUIBinding({
                    get: async () => getLanguages(stateManager),
                    set: async (value) => {
                      await stateManager.store("languages", value);
                    }
                  }),
                  allowsMultiselect: true
                }),
                App.createDUISwitch({
                  id: "split_images",
                  label: "Split double pages",
                  value: App.createDUIBinding({
                    get: async () => await getSplitImages(stateManager) == "yes",
                    set: async (value) => {
                      await stateManager.store("split_images", value ? "yes" : "no");
                    }
                  })
                }),
                App.createDUISelect({
                  id: "image_resolution",
                  label: "Image resolution",
                  options: ["low", "high", "super_high"],
                  value: App.createDUIBinding({
                    get: async () => [await getResolution(stateManager)],
                    set: async (value) => {
                      await stateManager.store("image_resolution", value[0]);
                    }
                  }),
                  allowsMultiselect: false,
                  labelResolver: async (option) => {
                    switch (option) {
                      case "low":
                        return "Low";
                      case "high":
                        return "High";
                      case "super_high":
                        return "Super High";
                      default:
                        return "";
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
  function resetSettings(stateManager) {
    return App.createDUIButton({
      id: "reset",
      label: "Reset to Default",
      onTap: async () => {
        await stateManager.store("languages", ["ENGLISH" /* ENGLISH */]), await stateManager.store("split_images", "yes"), await stateManager.store("image_resolution", "high");
      }
    });
  }

  // src/MangaPlus/MangaPlus.ts
  var BASE_URL = "https://mangaplus.shueisha.co.jp";
  var API_URL = "https://jumpg-webapi.tokyo-cdn.com/api";
  var langCode = "ENGLISH" /* ENGLISH */;
  var MangaPlusInfo = {
    version: "2.0.3",
    name: "MangaPlus",
    icon: "icon.png",
    author: "Rinto-kun",
    authorWebsite: "https://github.com/Rinto-kun",
    description: "Extension that pulls manga from Manga+ by Shueisha",
    contentRating: import_types.ContentRating.EVERYONE,
    websiteBaseURL: BASE_URL,
    sourceTags: [],
    intents: import_types.SourceIntents.MANGA_CHAPTERS | import_types.SourceIntents.HOMEPAGE_SECTIONS | import_types.SourceIntents.CLOUDFLARE_BYPASS_REQUIRED | import_types.SourceIntents.SETTINGS_UI
  };
  var MangaPlus = class {
    constructor() {
      this.stateManager = App.createSourceStateManager();
      this.requestManager = App.createRequestManager({
        requestsPerSecond: 10,
        requestTimeout: 2e4,
        interceptor: {
          interceptRequest: async (request) => {
            request.headers = {
              ...request.headers ?? {},
              "Referer": `${BASE_URL}/`,
              "user-agent": await this.requestManager.getDefaultUserAgent()
            };
            if (request.url.startsWith("imageMangaId=")) {
              const mangaId = request.url.replace("imageMangaId=", "");
              request.url = await this.getThumbnailUrl(mangaId);
            }
            return request;
          },
          interceptResponse: async (response) => {
            if (!response.request.url.includes("encryptionKey") && response.headers["Content-Type"] !== "image/jpeg") {
              return response;
            }
            if (response.request.url.includes("title_thumbnail_portrait_list")) {
              return response;
            }
            const encryptionKey = response.request.url.substring(response.request.url.lastIndexOf("#") + 1) ?? "";
            response.rawData = App.createRawData(this.decodeXoRCipher(App.createByteArray(response.rawData ?? new Uint8Array()), encryptionKey));
            return response;
          }
        }
      });
    }
    async getSourceMenu() {
      return App.createDUISection(
        {
          id: "main",
          header: "Source Settings",
          rows: async () => {
            return [
              contentSettings(this.stateManager),
              resetSettings(this.stateManager)
            ];
          },
          isHidden: false
        }
      );
    }
    getMangaShareUrl(mangaId) {
      return `${BASE_URL}/titles/${mangaId}`;
    }
    async getMangaDetails(mangaId) {
      const request = App.createRequest({
        url: `${API_URL}/title_detailV3?title_id=${mangaId}&format=json`,
        method: "GET"
      });
      const response = await this.requestManager.schedule(request, 1);
      const result = TitleDetailView.fromJson(response.data);
      return result.toSourceManga();
    }
    async getThumbnailUrl(mangaId) {
      const request = App.createRequest({
        url: `${API_URL}/title_detailV3?title_id=${mangaId}&format=json`,
        method: "GET"
      });
      const response = await this.requestManager.schedule(request, 1);
      const result = TitleDetailView.fromJson(response.data);
      return result.title?.portraitImageUrl ?? "";
    }
    async getChapters(mangaId) {
      const request = App.createRequest({
        url: `${API_URL}/title_detailV3?title_id=${mangaId}&format=json`,
        method: "GET"
      });
      const response = await this.requestManager.schedule(request, 1);
      const result = TitleDetailView.fromJson(response.data);
      return [...result.firstChapterList ?? [], ...result.lastChapterList ?? []].reverse().filter((chapter) => !chapter.isExpired).map((chapter) => chapter.toSChapter());
    }
    async getChapterDetails(mangaId, chapterId) {
      const request = App.createRequest({
        url: `${API_URL}/manga_viewer?chapter_id=${chapterId}&split=${await this.stateManager.retrieve("split_images") ?? "no"}&img_quality=${await this.stateManager.retrieve("image_resolution") ?? "high"}&format=json`,
        method: "GET"
      });
      const response = await this.requestManager.schedule(request, 1);
      const result = JSON.parse(response.data);
      if (result.success === void 0) {
        throw new Error(result.error?.langPopup("ENGLISH" /* ENGLISH */)?.body ?? "Unknown error");
      }
      const pages = result.success.mangaViewer?.pages.map((page) => page.mangaPage).filter((page) => page).map((page) => page?.encryptionKey ? `${page?.imageUrl}#${page?.encryptionKey}` : "");
      return App.createChapterDetails({
        id: chapterId,
        mangaId,
        pages: pages ?? []
      });
    }
    async getFeaturedTitles() {
      const request = App.createRequest({
        url: `${API_URL}/featuredV2?lang=eng&clang=eng&format=json`,
        method: "GET"
      });
      const response = await this.requestManager.schedule(request, 1);
      const result = JSON.parse(response.data);
      if (result.success === void 0) {
        throw new Error(result.error?.langPopup("ENGLISH" /* ENGLISH */)?.body ?? "Unknown error");
      }
      const languages = await getLanguages(this.stateManager);
      const results = result.success?.featuredTitlesViewV2?.contents?.find((x) => x.titleList && x.titleList.listName == "WEEKLY SHONEN JUMP")?.titleList.featuredTitles.filter((title) => languages.includes(title.language ?? "ENGLISH" /* ENGLISH */));
      const titles = [];
      const collectedIds = [];
      for (const item of results ?? []) {
        const mangaId = item.titleId.toString();
        const title = item.name;
        const author = item.author;
        const image = item.portraitImageUrl;
        if (!mangaId || !title || collectedIds.includes(mangaId)) continue;
        titles.push(App.createPartialSourceManga({
          mangaId,
          title,
          subtitle: author,
          image
        }));
      }
      return titles;
    }
    async getPopularTitles() {
      const request = App.createRequest({
        url: `${API_URL}/title_list/ranking?format=json`,
        method: "GET"
      });
      const response = await this.requestManager.schedule(request, 1);
      const result = JSON.parse(response.data);
      if (result.success === void 0) {
        throw new Error(result.error?.langPopup("ENGLISH" /* ENGLISH */)?.body ?? "Unknown error");
      }
      const languages = await getLanguages(this.stateManager);
      const results = result.success?.titleRankingView?.titles.filter((title) => languages.includes(title.language ?? "ENGLISH" /* ENGLISH */));
      const titles = [];
      const collectedIds = [];
      for (const item of results ?? []) {
        const mangaId = item.titleId.toString();
        const title = item.name;
        const author = item.author;
        const image = item.portraitImageUrl;
        if (!mangaId || !title || collectedIds.includes(mangaId)) continue;
        titles.push(App.createPartialSourceManga({
          mangaId,
          title,
          subtitle: author,
          image
        }));
      }
      return titles;
    }
    async getLatestUpdates() {
      function latestUpdatesRequest() {
        return App.createRequest({
          url: `${API_URL}/web/web_homeV4?lang=eng&format=json`,
          method: "GET"
        });
      }
      const request = latestUpdatesRequest();
      const response = await this.requestManager.schedule(request, 1);
      const result = JSON.parse(response.data);
      if (result.success === void 0) {
        throw new Error(result.error?.langPopup(langCode)?.body ?? "Unknown error");
      }
      const languages = await getLanguages(this.stateManager);
      const results = result.success.webHomeViewV4?.groups.flatMap((ex) => ex.titleGroups).flatMap((ex) => ex.titles).map((title) => title.title).filter((title) => languages.includes(title.language ?? "ENGLISH" /* ENGLISH */));
      const titles = [];
      const collectedIds = [];
      for (const item of results ?? []) {
        const mangaId = item.titleId.toString();
        const title = item.name;
        const author = item.author;
        const image = item.portraitImageUrl;
        if (!mangaId || !title || collectedIds.includes(mangaId)) continue;
        titles.push(App.createPartialSourceManga({
          mangaId,
          title,
          subtitle: author,
          image
        }));
      }
      return titles;
    }
    async getHomePageSections(sectionCallback) {
      const featuredSection = App.createHomeSection({
        id: "featured",
        title: "Deatured",
        containsMoreItems: true,
        type: import_types.HomeSectionType.featured,
        items: await this.getFeaturedTitles()
      });
      sectionCallback(featuredSection);
      const popularSection = App.createHomeSection({
        id: "popular",
        title: "Popular",
        containsMoreItems: true,
        type: import_types.HomeSectionType.singleRowNormal,
        items: await this.getPopularTitles()
      });
      sectionCallback(popularSection);
      const latestUpdatesSection = App.createHomeSection({
        id: "latest_updates",
        title: "Latest Updates",
        containsMoreItems: true,
        type: import_types.HomeSectionType.singleRowNormal,
        items: await this.getLatestUpdates()
      });
      sectionCallback(latestUpdatesSection);
    }
    async getViewMoreItems(homepageSectionId, metadata) {
      let items = [];
      switch (homepageSectionId) {
        case "featured":
          items = await this.getFeaturedTitles();
          break;
        case "popular":
          items = await this.getPopularTitles();
          break;
        case "latest_updates":
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
      const title = query.title ?? "";
      const request = App.createRequest(
        {
          url: `${API_URL}/title_list/allV2?format=JSON&${title ? "filter=" + encodeURI(title) + "&" : ""}format=json`,
          method: "GET"
        }
      );
      const response = await this.requestManager.schedule(request, 1);
      const result = JSON.parse(response.data);
      if (result.success === void 0) {
        throw new Error(result.error?.langPopup("ENGLISH" /* ENGLISH */)?.body ?? "Unknown error");
      }
      const ltitle = query.title?.toLowerCase() ?? "";
      const languages = await getLanguages(this.stateManager);
      const results = result.success?.allTitlesViewV2?.AllTitlesGroup.flatMap((group) => group.titles).filter((title2) => languages.includes(title2.language ?? "ENGLISH" /* ENGLISH */)).filter((title2) => title2.author?.toLowerCase().includes(ltitle) || title2.name.toLowerCase().includes(ltitle));
      const titles = [];
      const collectedIds = [];
      for (const item of results ?? []) {
        const mangaId = item.titleId.toString();
        const title2 = item.name;
        const author = item.author;
        const image = item.portraitImageUrl;
        if (!mangaId || !title2 || collectedIds.includes(mangaId)) continue;
        titles.push(App.createPartialSourceManga({
          mangaId,
          title: title2,
          subtitle: author,
          image
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
  };
  return __toCommonJS(MangaPlus_exports);
})();
return source;} this.Sources = compat(); if (typeof exports === 'object' && typeof module !== 'undefined') {module.exports = this.Sources;}
