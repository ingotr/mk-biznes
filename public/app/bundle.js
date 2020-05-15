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
/******/ 	__webpack_require__.p = "/app";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function getApiPath(obj, template) {
  let result = ``;
  let buffer = ``;

  let objKeys = Object.keys(obj);

  objKeys.map((key) => {
    const objRegExp = new RegExp(`%${key}%`);

    buffer = result;

    if (result === ``) {
      buffer = template.replace(objRegExp, obj[key]);
    } else {
      buffer = result.replace(objRegExp, obj[key]);
    }

    result = buffer;
    buffer = ``;
  });

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (getApiPath);


/***/ }),

/***/ "./src/data/apiTemplatesSet1.js":
/*!**************************************!*\
  !*** ./src/data/apiTemplatesSet1.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const apiTemplatesSet1 = [
  `/api/items/%id%/%name%`,
  `/api/items/%id%/%role%`,
  `/api/items/%id%/%salary%`,
];

/* harmony default export */ __webpack_exports__["default"] = (apiTemplatesSet1);


/***/ }),

/***/ "./src/data/user.js":
/*!**************************!*\
  !*** ./src/data/user.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const user = {
  id: 20,
  name: `John Dow`,
  role: `QA`,
  salary: 100
};

/* harmony default export */ __webpack_exports__["default"] = (user);


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/index.js */ "./src/api/index.js");
/* harmony import */ var _mock_mock_user_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock/mock-user.js */ "./src/mock/mock-user.js");
/* harmony import */ var _mock_mock_templates_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock/mock-templates.js */ "./src/mock/mock-templates.js");
/* harmony import */ var _data_user_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/user.js */ "./src/data/user.js");
/* harmony import */ var _data_apiTemplatesSet1_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/apiTemplatesSet1.js */ "./src/data/apiTemplatesSet1.js");







// eslint-disable-next-line no-console
console.log(`Mock template is ${_mock_mock_templates_js__WEBPACK_IMPORTED_MODULE_2__["default"]}`);
// eslint-disable-next-line no-console
console.log(`\n`);

const testApiPathes = _mock_mock_templates_js__WEBPACK_IMPORTED_MODULE_2__["default"].map((apiPathTemplate) => {
  return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_mock_mock_user_js__WEBPACK_IMPORTED_MODULE_1__["default"], apiPathTemplate);
});

// eslint-disable-next-line no-console
console.log(`Test apiPathes resulst is ${JSON.stringify(testApiPathes)}`);


// eslint-disable-next-line no-console
console.log(`Data template is ${_data_apiTemplatesSet1_js__WEBPACK_IMPORTED_MODULE_4__["default"]}`);
// eslint-disable-next-line no-console
console.log(`\n`);

const apiPathes = _data_apiTemplatesSet1_js__WEBPACK_IMPORTED_MODULE_4__["default"].map((apiPathTemplate) => {
  return Object(_api_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_data_user_js__WEBPACK_IMPORTED_MODULE_3__["default"], apiPathTemplate);
});

// eslint-disable-next-line no-console
console.log(JSON.stringify(apiPathes));


/***/ }),

/***/ "./src/mock/mock-templates.js":
/*!************************************!*\
  !*** ./src/mock/mock-templates.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const testTemplate = [`/api/items/%id%/%type_id%`];

/* harmony default export */ __webpack_exports__["default"] = (testTemplate);


/***/ }),

/***/ "./src/mock/mock-user.js":
/*!*******************************!*\
  !*** ./src/mock/mock-user.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const testUser = {
  id: 20,
  // eslint-disable-next-line camelcase
  type_id: `test`,
};

/* harmony default export */ __webpack_exports__["default"] = (testUser);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map