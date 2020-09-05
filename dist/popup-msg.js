/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/popup.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/popup.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".popup-container {\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  position: fixed;\n  z-index: 1000;\n  top: 5%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.popup-wrapper {\n  box-sizing: border-box;\n  height: 0px;\n  overflow: hidden;\n  transition: height 0.5s, margin-top 0.5s;\n}\n.popup-wrapper--show {\n  overflow: visible;\n  animation: popup 0.5s;\n  margin-top: 5px;\n}\n.popup-wrapper--hide {\n  opacity: 0;\n  margin-top: 0px;\n  animation: popuphide 0.5s reverse;\n}\n\n@keyframes popup {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes popuphide {\n  0% {\n    margin-top: 0px;\n    opacity: 0;\n    transform: scale(0);\n  }\n  50% {\n    margin-top: 5px;\n    opacity: 0;\n    transform: scale(0);\n  }\n  100% {\n    margin-top: 5px;\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.popup {\n  box-sizing: border-box;\n  border: 1px solid transparent;\n  padding: 5px 10px;\n  border-radius: calc(0.5em + 10px);\n  cursor: default;\n  display: flex;\n  align-items: center;\n  box-shadow: 0 0 5px 1px rgba(150, 150, 150, 0.5);\n}\n.popup__message {\n  flex: 1;\n  margin: 0 1em;\n}\n.popup__close {\n  position: relative;\n  height: 1em;\n  width: 1em;\n  cursor: pointer;\n}\n.popup__close:after, .popup__close:before {\n  position: absolute;\n  content: \"\";\n  left: calc(0.5em - 2px);\n  height: 1em;\n  width: 2px;\n  background-color: currentColor;\n}\n.popup__close:after {\n  transform: rotate(45deg);\n}\n.popup__close:before {\n  transform: rotate(-45deg);\n}\n.popup--primary, .popup--success {\n  background-color: dodgerblue;\n  border-color: #0a86ff;\n  color: white;\n}\n.popup--info {\n  background-color: white;\n  border-color: gainsboro;\n  color: gray;\n  box-shadow: 0 0 5px 1px rgba(150, 150, 150, 0.2);\n}\n.popup--warn {\n  background-color: orange;\n  border-color: #eb9800;\n  color: white;\n}\n.popup--error {\n  background-color: orangered;\n  border-color: #eb3f00;\n  color: white;\n}", "",{"version":3,"sources":["webpack://src/popup.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,eAAA;EACA,aAAA;EACA,OAAA;EACA,SAAA;EACA,2BAAA;AACJ;;AAEA;EACI,sBAAA;EACA,WAAA;EACA,gBAAA;EACA,wCAAA;AACJ;AACI;EACI,iBAAA;EACA,qBAAA;EACA,eAAA;AACR;AAEI;EACI,UAAA;EACA,eAAA;EACA,iCAAA;AAAR;;AAIA;EACI;IACI,UAAA;IACA,mBAAA;EADN;EAIE;IACI,UAAA;IACA,mBAAA;EAFN;AACF;AAKA;EACI;IACI,eAAA;IACA,UAAA;IACA,mBAAA;EAHN;EAME;IACI,eAAA;IACA,UAAA;IACA,mBAAA;EAJN;EAOE;IACI,eAAA;IACA,UAAA;IACA,mBAAA;EALN;AACF;AAQA;EACI,sBAAA;EACA,6BAAA;EACA,iBAAA;EACA,iCAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,gDAAA;AANJ;AAQI;EACI,OAAA;EACA,aAAA;AANR;AASI;EACI,kBAAA;EACA,WAAA;EACA,UAAA;EACA,eAAA;AAPR;AASQ;EACI,kBAAA;EACA,WAAA;EACA,uBAAA;EACA,WAAA;EACA,UAAA;EACA,8BAAA;AAPZ;AAUQ;EACI,wBAAA;AARZ;AAWQ;EACI,yBAAA;AATZ;AAaI;EACI,4BAAA;EACA,qBAAA;EACA,YAAA;AAXR;AAcI;EACI,uBAAA;EACA,uBAAA;EACA,WAAA;EACA,gDAAA;AAZR;AAeI;EACI,wBAAA;EACA,qBAAA;EACA,YAAA;AAbR;AAgBI;EACI,2BAAA;EACA,qBAAA;EACA,YAAA;AAdR","sourcesContent":[".popup-container {\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n    align-items: center;\r\n    position: fixed;\r\n    z-index: 1000;\r\n    top: 5%;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n}\r\n\r\n.popup-wrapper {\r\n    box-sizing: border-box;\r\n    height: 0px;\r\n    overflow: hidden;\r\n    transition: height 0.5s, margin-top 0.5s;\r\n\r\n    &--show {\r\n        overflow: visible;\r\n        animation: popup 0.5s;\r\n        margin-top: 5px;\r\n    }\r\n\r\n    &--hide {\r\n        opacity: 0;\r\n        margin-top: 0px;\r\n        animation: popuphide 0.5s reverse;\r\n    }\r\n}\r\n\r\n@keyframes popup {\r\n    0% {\r\n        opacity: 0;\r\n        transform: scale(0);\r\n    }\r\n\r\n    100% {\r\n        opacity: 1;\r\n        transform: scale(1);\r\n    }\r\n}\r\n\r\n@keyframes popuphide {\r\n    0% {\r\n        margin-top: 0px;\r\n        opacity: 0;\r\n        transform: scale(0);\r\n    }\r\n\r\n    50% {\r\n        margin-top: 5px;\r\n        opacity: 0;\r\n        transform: scale(0);\r\n    }\r\n\r\n    100% {\r\n        margin-top: 5px;\r\n        opacity: 1;\r\n        transform: scale(1);\r\n    }\r\n}\r\n\r\n.popup {\r\n    box-sizing: border-box;\r\n    border: 1px solid transparent;\r\n    padding: 5px 10px;\r\n    border-radius: calc(0.5em + 10px);\r\n    cursor: default;\r\n    display: flex;\r\n    align-items: center;\r\n    box-shadow: 0 0 5px 1px rgba(150, 150, 150, 0.5);\r\n\r\n    &__message {\r\n        flex: 1;\r\n        margin: 0 1em;\r\n    }\r\n\r\n    &__close {\r\n        position: relative;\r\n        height: 1em;\r\n        width: 1em;\r\n        cursor: pointer;\r\n\r\n        &:after, &:before {\r\n            position: absolute;\r\n            content: '';\r\n            left: calc(0.5em - 2px);\r\n            height: 1em;\r\n            width: 2px;\r\n            background-color: currentColor;\r\n        }\r\n\r\n        &:after {\r\n            transform: rotate(45deg);\r\n        }\r\n\r\n        &:before {\r\n            transform: rotate(-45deg);\r\n        }\r\n    }\r\n\r\n    &--primary, &--success {\r\n        background-color: dodgerblue;\r\n        border-color: darken(dodgerblue, 4);\r\n        color: white;\r\n    }\r\n\r\n    &--info {\r\n        background-color: white;\r\n        border-color: gainsboro;\r\n        color: gray;\r\n        box-shadow: 0 0 5px 1px rgba(150, 150, 150, 0.2);\r\n    }\r\n\r\n    &--warn {\r\n        background-color: orange;\r\n        border-color: darken(orange, 4);\r\n        color: white;\r\n    }\r\n\r\n    &--error {\r\n        background-color: orangered;\r\n        border-color: darken(orangered, 4);\r\n        color: white;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup */ "./src/popup.js");
/* harmony import */ var _popup_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.scss */ "./src/popup.scss");
/* harmony import */ var _popup_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_popup_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.js");



var isInitialized = false;
var manager = null;
/**
 * 
 * @param {Options} options 
 * @return {PopupManager}
 */

window.getOrCreatePopupManager = function (options) {
  if (isInitialized) {
    options && manager.updateOptions(options);
    return manager;
  }

  isInitialized = true;
  var el = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createEl"])({
    classes: ["popup-container"]
  });
  document.body.appendChild(el);
  manager = new _popup__WEBPACK_IMPORTED_MODULE_0__["default"](el, options);
  return manager;
};

/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PopupManager; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * @typedef Options
 * @type {Object}
 * @property {string} position
 * @property {number} duration メッセージが非表示になるまでの時間(msec)
 */

var defaultOptions = {
  mode: "primary",
  duration: 4000
};

var Popup = /*#__PURE__*/function () {
  /**
   * @param {String} message 
   * @param {Options} options 
   */
  function Popup(message, options) {
    var _this = this;

    _classCallCheck(this, Popup);

    /**
     * @type {boolean}
     */
    this.removed = false;
    var popupEl = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createEl"])({
      classes: ["popup-wrapper"],
      children: [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createEl"])({
        classes: ["popup", "popup--".concat(options.mode)],
        children: [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createEl"])({
          tag: "span",
          classes: ["popup__message"]
        }, function (el) {
          return el.textContent = message;
        }), Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createEl"])({
          classes: ["popup__close"]
        })]
      })]
    });
    /**
     * @type {HTMLElement} popup element.
     */

    this.el = popupEl;
    var close = this.el.querySelector(".popup__close");

    if (close) {
      close.addEventListener("click", function () {
        _this.hide();
      });
    }
  }

  _createClass(Popup, [{
    key: "show",
    value: function show() {
      var inner = this.el.querySelector(".popup");

      if (inner) {
        // console.log(inner.scrollHeight)
        // console.log(Math.ceil(inner.getBoundingClientRect().height))
        this.el.style.height = inner.getBoundingClientRect().height + "px";
      }

      this.el.classList.add("popup-wrapper--show");
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this2 = this;

      if (this.removed) return;
      this.removed = true;
      this.el.style.height = null;
      this.el.addEventListener("animationend", function () {
        _this2.el.remove();
      }, {
        once: true
      });
      this.el.classList.add("popup-wrapper--hide");
    }
  }]);

  return Popup;
}();

var PopupManager = /*#__PURE__*/function () {
  /**
   * 
   * @param {Options} options 
   */
  function PopupManager(containerEl, options) {
    _classCallCheck(this, PopupManager);

    /**
     * @type {HTMLElement}
     */
    this.popupContainerEl = containerEl;
    /**
     * @type Options
     */

    this.globalOptions = Object.assign({}, defaultOptions, options);
  }
  /**
   * 指定されたメッセージをポップアップ表示します。
   * @param {String} message 
   * @param {Options} options 
   */


  _createClass(PopupManager, [{
    key: "showMessage",
    value: function showMessage() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var localOptions = Object.assign({}, this.globalOptions, options);
      var popup = new Popup(message, localOptions);
      this.popupContainerEl.appendChild(popup.el);
      popup.show();
      setTimeout(function () {
        popup.hide();
      }, localOptions.duration);
    }
    /**
     * 
     * @param {Options} options 
     */

  }, {
    key: "updateOptions",
    value: function updateOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.globalOptions = Object.assign({}, this.globalOptions, options);
    }
  }]);

  return PopupManager;
}();



/***/ }),

/***/ "./src/popup.scss":
/*!************************!*\
  !*** ./src/popup.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./popup.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/popup.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: createEl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEl", function() { return createEl; });
/**
 * html要素を作成する。
 * @param {Object} elementOptions
 * @param {String} elementOptions.tag
 * @param {String[]} elementOptions.classes 
 * @param {HTMLElement[]} elementOptions.children
 * @param {onCreate} onCreate
 * 
 * @return {HTMLElement} 
 */
function createEl(_ref, onCreate) {
  var _ref$tag = _ref.tag,
      tag = _ref$tag === void 0 ? "div" : _ref$tag,
      _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? [] : _ref$classes,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? [] : _ref$children;
  var el = document.createElement(tag);
  classes.forEach(function (clazz) {
    el.classList.add(clazz);
  });
  children.forEach(function (child) {
    el.appendChild(child);
  });
  onCreate && onCreate(el);
  return el;
}
/**
 * @callback onCreate
 * @param {HTMLElement} element
 * @return {void}
 */

/***/ })

/******/ });
//# sourceMappingURL=popup-msg.js.map