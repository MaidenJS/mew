/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/client";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_account_model__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_about_controller__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utilities_helpers__ = __webpack_require__(4);
// Composition Root




//import init from './app';

init();

function init() {
    if (!location.hash) {
        location.hash = "#home";
    }

    app();

    window.addEventListener("hashchange", app, true);

    function app() {

        let router = new __WEBPACK_IMPORTED_MODULE_2__core_router__["a" /* default */]({});

        router.add({
            name: 'home',
            controller: function () {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utilities_helpers__["a" /* default */])('js/views/home.html', {
                    first_name: 'John'
                });
            }
        });
        router.add({
            name: 'about',
            controller: 'AboutController'
        });
        router.add({
            name: 'contact',
            controller: 'ContactController'
        });
        router.add({
            name: 'profiles',
            controller: 'ProfileController'
        });

        let fragmentId = location.hash.substr(1);

        router.action(fragmentId);
    }


}


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* unused harmony export default */
function PagesController () {

    this.home = function () {

        var data = {
            name: 'John Doe'
        };

        $.get("templates/home.html", function (content) {
            $("#content").html(content);
        })
    };

}

function AboutController () {
    renderView('js/views/about.html', {
        first_name: 'John'
    });
}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = Router;
function Router(config) {
    var self = this;
    var routeNames = [];

    self.add = function (routeName) {
        routeNames.push(routeName);
    };

    self.action = function (fragementName) {
        for (let i = 0; i < routeNames.length; i++) {
            if (routeNames[i]['name'] == fragementName) {
                //console.log(routeNames[i]['name'], ' is defined');
                if ( typeof routeNames[i]['controller'] == 'string' ) {
                    window[routeNames[i]['controller']]();
                }
                else {
                    routeNames[i]['controller']();
                }
            }
        }
    };

    self.getAllRoutes = function() {
        return routeNames;
    };
}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* unused harmony export account */
function account() {
    "use strict";

}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = renderView;
function renderView(templatePath, data) {
    $.get(templatePath, function (content) {
        $("#content").html(content);
    });
}



/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ }
/******/ ]);