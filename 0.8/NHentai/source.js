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

  // src/NHentai/NHentai.ts
  var NHentai_exports = {};
  __export(NHentai_exports, {
    NHentai: () => NHentai,
    NHentaiInfo: () => NHentaiInfo
  });
  var import_types = __toESM(require_lib());

  // src/NHentai/NHentaiHelper.ts
  var NHLanguagesClass = class {
    constructor() {
      this.Languages = [
        // Include all langauages
        {
          name: "Include All",
          NHCode: "",
          lang: "Unknown",
          default: true
        },
        {
          // English
          name: "English",
          NHCode: "english",
          lang: "\u{1F1EC}\u{1F1E7}"
        },
        {
          // Japanese
          name: "Japanese",
          NHCode: "japanese",
          lang: "\u{1F1EF}\u{1F1F5}"
        },
        {
          // Chinese (Simplified)
          name: "Chinese",
          NHCode: "chinese",
          lang: "\u{1F1E8}\u{1F1F3}"
        }
      ];
      this.Languages = this.Languages.sort((a, b) => a.name > b.name ? 1 : -1);
    }
    getNHCodeList() {
      return this.Languages.map((Language) => Language.NHCode);
    }
    getName(NHCode) {
      return this.Languages.filter((Language) => Language.NHCode == NHCode)[0]?.name ?? "Unknown";
    }
    getLangCode(NHCode) {
      return this.Languages.filter((Language) => Language.NHCode == NHCode)[0]?.lang ?? "Unknown";
    }
    getDefault() {
      return this.Languages.filter((Language) => Language.default).map((Language) => Language.NHCode);
    }
  };
  var NHLanguages = new NHLanguagesClass();
  var NHSortOrderClass = class {
    constructor() {
      this.sortOrders = [
        {
          // Sort by popular
          name: "Popular All-Time",
          NHCode: "popular",
          shortcuts: ["s:p", "s:popular", "sort:p", "sort:popular"],
          default: true
        },
        {
          // Sort by popular this week
          name: "Popular This Week",
          NHCode: "popular-week",
          shortcuts: ["s:pw", "s:w", "s:popular-week", "sort:pw", "sort:w", "sort:popular-week"]
        },
        {
          // Sort by popular today
          name: "Popular Today",
          NHCode: "popular-today",
          shortcuts: ["s:pt", "s:t", "s:popular-today", "sort:pt", "sort:t", "sort:popular-today"]
        },
        {
          // Sort by recent
          name: "Most Recent",
          NHCode: "date",
          shortcuts: ["s:r", "s:recent", "sort:r", "sort:recent"]
        }
      ];
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
      return ["", ""];
    }
    getNHCodeList() {
      return this.sortOrders.map((SortOrder) => SortOrder.NHCode);
    }
    getName(NHCode) {
      return this.sortOrders.filter((SortOrder) => SortOrder.NHCode == NHCode)[0]?.name ?? "Unknown";
    }
    getDefault() {
      return this.sortOrders.filter((SortOrder) => SortOrder.default).map((SortOrder) => SortOrder.NHCode);
    }
  };
  var NHSortOrders = new NHSortOrderClass();
  function hasNoResults(data) {
    console.log(data);
    if (data.error) {
      console.error(data.error);
      return true;
    }
    return false;
  }

  // src/NHentai/NHentaiParser.ts
  var parseMangaDetails = (data) => {
    const artist = getArtist(data);
    const tags = [];
    for (const tag of data.tags) {
      if (tag.type !== "tag") continue;
      tags.push(App.createTag({ id: tag.name, label: capitalizeTags(tag.name) }));
    }
    return App.createSourceManga({
      id: data.id.toString(),
      mangaInfo: App.createMangaInfo({
        titles: Object.values(data.title).filter((title) => title !== null),
        artist,
        author: artist,
        image: `https://t.nhentai.net/galleries/${data.media_id}/cover.${typeOfImage(data.images.cover)}`,
        status: "Completed",
        tags: [App.createTagSection({ id: "tags", label: "Tags", tags })],
        desc: `Pages: ${data.num_pages}`
      })
    });
  };
  var parseChapters = (data, mangaId) => {
    return App.createChapter({
      id: mangaId,
      chapNum: 1,
      name: data.title.english,
      langCode: NHLanguages.getLangCode(getLanguage(data)),
      time: new Date(data.upload_date * 1e3)
    });
  };
  var parseChapterDetails = (data, mangaId) => {
    return App.createChapterDetails({
      id: mangaId,
      mangaId,
      pages: data.images.pages.map((image, i) => {
        const type = typeOfImage(image);
        return `https://i.nhentai.net/galleries/${data.media_id}/${i + 1}.${type}`;
      })
    });
  };
  var parseSearch = (data) => {
    const tiles = [];
    const collectedIds = [];
    if (!data?.result) {
      console.log(JSON.stringify(data));
      throw new Error("JSON NO RESULT ERROR!\n\nYou've like set too many additional arguments in this source's settings, remove some to see results!\nSo search with tags you need to use arguments like shown in the sourc's settings!");
    }
    for (const gallery of data.result) {
      if (collectedIds.includes(gallery.id.toString())) continue;
      tiles.push(App.createPartialSourceManga({
        image: `https://t.nhentai.net/galleries/${gallery.media_id}/cover.${typeOfImage(gallery.images.cover)}`,
        title: gallery.title.pretty,
        mangaId: gallery.id.toString(),
        subtitle: NHLanguages.getName(getLanguage(gallery))
      }));
      collectedIds.push(gallery.id.toString());
    }
    return tiles;
  };
  function capitalizeTags(str) {
    return str.split(" ").map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }
  var typeMap = { "j": "jpg", "p": "png", "g": "gif" };
  var typeOfImage = (image) => {
    return typeMap[image.t] ?? "";
  };
  var getArtist = (gallery) => {
    const tags = gallery.tags;
    for (const tag of tags) {
      if (tag.type === "artist") {
        return tag.name;
      }
    }
    return "";
  };
  var getLanguage = (gallery) => {
    const tags = gallery.tags;
    for (const tag of tags) {
      if (tag.type === "language" && tag.name !== "translated") {
        return tag.name;
      }
    }
    return "";
  };

  // src/NHentai/NHentaiSettings.ts
  var getLanguages = async (stateManager) => {
    return await stateManager.retrieve("languages") ?? NHLanguages.getDefault();
  };
  var getSortOrders = async (stateManager) => {
    return await stateManager.retrieve("sort_order") ?? NHSortOrders.getDefault();
  };
  var getExtraArgs = async (stateManager) => {
    return await stateManager.retrieve("extra_args") ?? "-lolicon -shotacon -yaoi";
  };
  var settings = (stateManager) => {
    return App.createDUINavigationButton({
      id: "settings",
      label: "Content Settings",
      form: App.createDUIForm({
        sections: () => {
          return Promise.resolve([
            App.createDUISection({
              id: "content",
              footer: 'Tags with a space or "-" in them need to be double quoted. \nExample: "love-saber" and -"big breasts"\nTo exclude tags, add a "-" in the front. To include, add a "+".',
              rows: async () => {
                await Promise.all([
                  getLanguages(stateManager),
                  getSortOrders(stateManager),
                  getExtraArgs(stateManager)
                ]);
                return await [
                  App.createDUISelect({
                    id: "languages",
                    label: "Languages",
                    options: NHLanguages.getNHCodeList(),
                    labelResolver: async (option) => NHLanguages.getName(option),
                    value: App.createDUIBinding({
                      get: () => getLanguages(stateManager),
                      set: async (newValue) => await stateManager.store("languages", newValue)
                    }),
                    allowsMultiselect: false
                  }),
                  App.createDUISelect({
                    id: "sort_order",
                    label: "Default search sort order",
                    options: NHSortOrders.getNHCodeList(),
                    labelResolver: async (option) => NHSortOrders.getName(option),
                    value: App.createDUIBinding({
                      get: () => getSortOrders(stateManager),
                      set: async (newValue) => await stateManager.store("sort_order", newValue)
                    }),
                    allowsMultiselect: false
                  }),
                  App.createDUIInputField({
                    id: "extra_args",
                    label: "Additional arguments",
                    value: App.createDUIBinding({
                      get: () => getExtraArgs(stateManager),
                      set: async (newValue) => {
                        await stateManager.store(
                          "extra_args",
                          newValue.replaceAll(/‘|’/g, "'").replaceAll(/“|”/g, '"')
                        );
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
  var resetSettings = (stateManager) => {
    return App.createDUIButton({
      id: "reset",
      label: "Reset to Default",
      onTap: async () => {
        await Promise.all([
          stateManager.store("languages", null),
          stateManager.store("sort_order", null),
          stateManager.store("extra_args", null)
        ]);
      }
    });
  };

  // src/NHentai/tags.json
  var popularTags = [
    {
      id: "big-breasts",
      label: "Big Breasts"
    },
    {
      id: "solo-female",
      label: "Solo Female"
    },
    {
      id: "sole-male",
      label: "Solo Male"
    },
    {
      id: "anal",
      label: "Anal"
    },
    {
      id: "stockings",
      label: "Stockings"
    },
    {
      id: "schoolgirl-uniform",
      label: "Schoolgirl Uniform"
    },
    {
      id: "nakadashi",
      label: "Nakadashi"
    },
    {
      id: "blowjob",
      label: "Blowjob"
    },
    {
      id: "bondage",
      label: "Bondage"
    },
    {
      id: "mosaic-censorship",
      label: "Mosaic Censorship"
    },
    {
      id: "ahegao",
      label: "Ahegao"
    },
    {
      id: "males-only",
      label: "Males Only"
    },
    {
      id: "dark-skin",
      label: "Dark Skin"
    },
    {
      id: "double-penetration",
      label: "Double Penetration"
    },
    {
      id: "tankoubon",
      label: "Tankoubon"
    },
    {
      id: "futanari",
      label: "Futanari"
    },
    {
      id: "defloration",
      label: "Defloration"
    },
    {
      id: "multi-work-series",
      label: "Multi Work Series"
    },
    {
      id: "sex-toys",
      label: "Sex Toys"
    },
    {
      id: "swimsuit",
      label: "Swimsuit"
    },
    {
      id: "ffm-threesome",
      label: "FFM Threesome"
    },
    {
      id: "full-censorship",
      label: "Full Censorship"
    },
    {
      id: "femdom",
      label: "Femdom"
    },
    {
      id: "dilf",
      label: "DILF"
    },
    {
      id: "twintails",
      label: "Twintails"
    },
    {
      id: "pantyhose",
      label: "Pantyhose"
    },
    {
      id: "sister",
      label: "Sister"
    },
    {
      id: "crossdressing",
      label: "Crossdressing"
    },
    {
      id: "tentacles",
      label: "Tentacles"
    },
    {
      id: "mind-break",
      label: "Mind Break"
    },
    {
      id: "bikini",
      label: "Bikini"
    },
    {
      id: "schoolboy-uniform",
      label: "Schoolboy Uniform"
    },
    {
      id: "story-arc",
      label: "Story Arc"
    },
    {
      id: "tomgirl",
      label: "Tomgirl"
    },
    {
      id: "big-ass",
      label: "Big Sss"
    },
    {
      id: "sweating",
      label: "Sweating"
    },
    {
      id: "mmf-threesome",
      label: "MMF Threesome"
    },
    {
      id: "teacher",
      label: "Teacher"
    },
    {
      id: "exhibitionism",
      label: "Exhibitionism"
    },
    {
      id: "uncensored",
      label: "Uncensored"
    },
    {
      id: "females-only",
      label: "Females Only"
    },
    {
      id: "lingerie",
      label: "Lingerie"
    },
    {
      id: "unusual-pupils",
      label: "Unusual Pupils"
    },
    {
      id: "footjob",
      label: "Footjob"
    },
    {
      id: "mother",
      label: "Mother"
    },
    {
      id: "huge-breasts",
      label: "Huge-breasts"
    },
    {
      id: "gender-bender",
      label: "Gender Bender"
    },
    {
      id: "catgirl",
      label: "Catgirl"
    },
    {
      id: "demon-girl",
      label: "Demon Girl"
    },
    {
      id: "kimono",
      label: "Kimono"
    },
    {
      id: "prostitution",
      label: "Prostitution"
    },
    {
      id: "stomach-deformation",
      label: "Stomach Deformation"
    },
    {
      id: "horns",
      label: "Horns"
    },
    {
      id: "webtoon",
      label: "Webtoon"
    },
    {
      id: "monster-girl",
      label: "Monster Girl"
    },
    {
      id: "latex",
      label: "Latex"
    },
    {
      id: "fox-girl",
      label: "Fox Girl"
    },
    {
      id: "yandere",
      label: "Yandere"
    },
    {
      id: "milking",
      label: "Milking"
    }
  ];

  // src/NHentai/NHentai.ts
  var NHENTAI_URL = "https://nhentai.net";
  var NHentaiInfo = {
    version: "4.0.7",
    name: "nhentai",
    icon: "icon.png",
    author: "NotMarek & Netsky",
    authorWebsite: "https://github.com/TheNetsky",
    description: "Extension which pulls content from nHentai.",
    contentRating: import_types.ContentRating.ADULT,
    websiteBaseURL: NHENTAI_URL,
    intents: import_types.SourceIntents.MANGA_CHAPTERS | import_types.SourceIntents.HOMEPAGE_SECTIONS | import_types.SourceIntents.CLOUDFLARE_BYPASS_REQUIRED | import_types.SourceIntents.SETTINGS_UI,
    sourceTags: [
      {
        text: "18+",
        type: import_types.BadgeColor.YELLOW
      }
    ]
  };
  var NHentai = class _NHentai {
    constructor() {
      this.requestManager = App.createRequestManager({
        requestsPerSecond: 3,
        requestTimeout: 15e3,
        interceptor: {
          interceptRequest: async (request) => {
            request.headers = {
              ...request.headers ?? {},
              ...{
                "referer": `${NHENTAI_URL}/`,
                "user-agent": await this.requestManager.getDefaultUserAgent()
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
        id: "main",
        header: "Source Settings",
        rows: () => Promise.resolve([
          settings(this.stateManager),
          resetSettings(this.stateManager)
        ]),
        isHidden: false
      }));
    }
    getMangaShareUrl(mangaId) {
      return `${NHENTAI_URL}/g/${mangaId}`;
    }
    async getMangaDetails(mangaId) {
      const request = App.createRequest({
        url: `${NHENTAI_URL}/api/gallery/${mangaId}`,
        method: "GET"
      });
      const response = await this.requestManager.schedule(request, 1);
      this.CloudFlareError(response.status);
      const jsonData = this.parseJson(response);
      return parseMangaDetails(jsonData);
    }
    async getChapters(mangaId) {
      const request = App.createRequest({
        url: `${NHENTAI_URL}/api/gallery/${mangaId}`,
        method: "GET"
      });
      const response = await this.requestManager.schedule(request, 1);
      this.CloudFlareError(response.status);
      const jsonData = this.parseJson(response);
      return [parseChapters(jsonData, mangaId)];
    }
    async getChapterDetails(mangaId) {
      const request = App.createRequest({
        url: `${NHENTAI_URL}/api/gallery/${mangaId}`,
        method: "GET"
      });
      const response = await this.requestManager.schedule(request, 1);
      this.CloudFlareError(response.status);
      const jsonData = this.parseJson(response);
      return parseChapterDetails(jsonData, mangaId);
    }
    async getSearchTags() {
      const arrayTags = [];
      for (const tag of popularTags) {
        const label = tag.label;
        const id = tag.id;
        arrayTags.push({ id, label });
      }
      const tagSections = [App.createTagSection({ id: "0", label: "Tags", tags: arrayTags.map((x) => App.createTag(x)) })];
      return tagSections;
    }
    async getSearchResults(query, metadata) {
      const page = metadata?.page ?? 1;
      const title = query.title ?? "";
      if (metadata?.stopSearch ?? false) {
        return App.createPagedResults({
          results: [],
          metadata: {
            stopSearch: true
          }
        });
      }
      if (/^\d+$/.test(title)) {
        const request = App.createRequest({
          url: `${NHENTAI_URL}/api/gallery/${title}`,
          method: "GET"
        });
        const response = await this.requestManager.schedule(request, 1);
        this.CloudFlareError(response.status);
        const jsonData = this.parseJson(response);
        return App.createPagedResults({
          results: parseSearch({ result: [jsonData], num_pages: 1, per_page: 1 }),
          metadata: {
            page: page + 1,
            stopSearch: true
          }
        });
      } else {
        const q = encodeURIComponent(`${title} ${query?.includedTags?.map((x) => ` +${x.id}`)} `) + await this.generateQuery();
        const request = App.createRequest({
          url: `${NHENTAI_URL}/api/galleries/search?query=${q}&page=${page}&sort=${await this.sortOrder(this.stateManager)}`,
          method: "GET"
        });
        const response = await this.requestManager.schedule(request, 1);
        this.CloudFlareError(response.status);
        const jsonData = this.parseJson(response);
        return App.createPagedResults({
          results: parseSearch(jsonData),
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
            method: "GET"
          }),
          sectionID: App.createHomeSection({
            id: "date",
            title: "New Uploads",
            containsMoreItems: true,
            type: import_types.HomeSectionType.singleRowNormal
          })
        },
        {
          request: App.createRequest({
            url: `${NHENTAI_URL}/api/galleries/search?query=${await this.generateQuery()}&sort=popular-today`,
            method: "GET"
          }),
          sectionID: App.createHomeSection({
            id: "popular-today",
            title: "Popular Today",
            containsMoreItems: true,
            type: import_types.HomeSectionType.singleRowNormal
          })
        },
        {
          request: App.createRequest({
            url: `${NHENTAI_URL}/api/galleries/search?query=${await this.generateQuery()}&sort=popular-week`,
            method: "GET"
          }),
          sectionID: App.createHomeSection({
            id: "popular-week",
            title: "Popular Weekly",
            containsMoreItems: true,
            type: import_types.HomeSectionType.singleRowNormal
          })
        }
      ];
      const promises = [];
      for (const section of sections) {
        sectionCallback(section.sectionID);
        promises.push(
          this.requestManager.schedule(section.request, 1).then((response) => {
            this.CloudFlareError(response.status);
            const jsonData = this.parseJson(response);
            if (hasNoResults(jsonData)) {
              return;
            }
            section.sectionID.items = parseSearch(jsonData);
            sectionCallback(section.sectionID);
          })
        );
      }
      await Promise.all(promises);
    }
    async getViewMoreItems(homepageSectionId, metadata) {
      let page = metadata?.page ?? 1;
      const request = App.createRequest({
        url: `${NHENTAI_URL}/api/galleries/search?query=${await this.generateQuery()}&sort=${homepageSectionId}&page=${page}`,
        method: "GET"
      });
      const response = await this.requestManager.schedule(request, 1);
      this.CloudFlareError(response.status);
      const jsonData = this.parseJson(response);
      page++;
      return App.createPagedResults({
        results: parseSearch(jsonData),
        metadata: {
          page
        }
      });
    }
    CloudFlareError(status) {
      if (status == 503 || status == 403) {
        throw new Error(`CLOUDFLARE BYPASS ERROR:
Please go to the homepage of <${_NHentai.name}> and press the cloud icon.`);
      }
    }
    async getCloudflareBypassRequestAsync() {
      return App.createRequest({
        url: NHENTAI_URL,
        method: "GET",
        headers: {
          "referer": `${NHENTAI_URL}/`,
          "user-agent": await this.requestManager.getDefaultUserAgent()
        }
      });
    }
    // Utility
    parseJson(response) {
      try {
        return typeof response.data == "string" ? JSON.parse(response.data) : response.data;
      } catch (error) {
        console.log(JSON.stringify(error));
        throw new Error("JSON PARSE ERROR!\n\nYou've like set too many filters in this source's settings, remove some to see results!");
      }
    }
    async generateQuery() {
      const query = await this.language(this.stateManager) + await this.extraArgs(this.stateManager);
      return encodeURIComponent(query);
    }
    async language(stateManager) {
      const lang = await stateManager.retrieve("languages") ?? "";
      if (lang == "") {
        return '""';
      } else {
        return `language:${lang}`;
      }
    }
    async sortOrder(stateManager) {
      const sortOrder = await stateManager.retrieve("sort_order") ?? NHSortOrders.getDefault();
      return sortOrder;
    }
    async extraArgs(stateManager) {
      const args = await getExtraArgs(stateManager);
      return ` ${args}`;
    }
  };
  return __toCommonJS(NHentai_exports);
})();
return source;} this.Sources = compat(); if (typeof exports === 'object' && typeof module !== 'undefined') {module.exports = this.Sources;}
