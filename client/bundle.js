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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = renderView;
/**
 * Core component to the framework
 * 
 * @param templatePath
 * @param data
 */
function renderView(templatePath, data) {
    //window.location.reload();
    $.ajax({
        url: templatePath,
        success: function(content){
            document.getElementById('app').innerHTML = content;
        },
        timeout: 1000 //in milliseconds
    });
}



/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_helpers__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_pages_about_controller__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_pages_contact_controller__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_account_account_controller__ = __webpack_require__(9);
// Composition Root





//import PageNotFoundController from './controllers/not-found-page.controller';

init();

function init() {
    if (!location.hash) {
        location.hash = "#home";
    }

    app();

    window.addEventListener("hashchange", app, true);

    function app() {

        let router = new __WEBPACK_IMPORTED_MODULE_1__core_router__["a" /* default */]({});

        router.add({
            name: 'home',
            controller: () => {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_helpers__["a" /* default */])('js/views/home.html', {
                    first_name: 'John'
                });
            }
        });
        router.add({
            name: 'about',
            controller: __WEBPACK_IMPORTED_MODULE_2__modules_pages_about_controller__["a" /* default */]
        });
        router.add({
            name: 'contact',
            controller: __WEBPACK_IMPORTED_MODULE_3__modules_pages_contact_controller__["a" /* default */]
        });
        router.add({
            name: 'account/:id/test/:test',
            controller: __WEBPACK_IMPORTED_MODULE_4__modules_account_account_controller__["a" /* default */]
        });

        /**
         * for route not found pages
         */
        router.notFound({
            controller: () => {
                console.log('404');
                document.getElementById('app').innerHTML = 'PAGE NOT FOUND BRO!';
            }
        });

        let fragmentId = location.hash.substr(1);

        router.action(fragmentId);
    }
}

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = Router;
/**
 *
 * @param config
 * @constructor
 */
function Router(config) {
    var self = this;
    var routeNames = [];

    self.add = function (routeName) {
        routeNames.push(routeName);
    };

    self.action = function (fragmentName) {

        var at_least_one_route_exists = false;
        for (let i = 0; i < routeNames.length; i++) {
            let fragments = fragmentName.split("/");
            let named_urls = routeNames[i]['name'].split("/");

            var parameters = [];
            for (let i = 0; i < named_urls.length; i++) {
                if (named_urls[i].charAt(0) == ':') {
                    let parameter = fragments.splice(i, 1);
                    named_urls.splice(i, 1);
                    parameters = parameters.concat(parameter);
                }
            }

            if (arraysEqual(fragments, named_urls)) {
                console.log('fragment', fragments);
                console.log('named url', named_urls);
                console.log('parameters', parameters);
                console.log(arraysEqual(fragments, named_urls));

                //let param = routeNames[i]['name'].split("/")[1];
                routeNames[i]['controller'].apply(null, parameters);

                at_least_one_route_exists = true;
            }
        }

        if (! at_least_one_route_exists) {

            console.log('404 page, cuz no routes match');
            try {
                self.notFound();
            }
            catch (e) {

            }
        }
    };

    self.getAllRoutes = function() {
        return routeNames;
    };

    self.notFound = (obj) => {
        obj.controller();
    };

    function arraysEqual(arr1, arr2) {
        if(arr1.length !== arr2.length)
            return false;
        for(var i = arr1.length; i--;) {
            if(arr1[i] !== arr2[i])
                return false;
        }

        return true;
    }
}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ },
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
throw new Error("Cannot find module \"../utilities/helpers\"");
/* harmony export (immutable) */ exports["a"] = AboutController;


function AboutController () {
    __WEBPACK_IMPORTED_MODULE_0__utilities_helpers___default()('js/views/about.html', {
        first_name: 'John'
    });
}



/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
throw new Error("Cannot find module \"../utilities/helpers\"");
/* harmony export (immutable) */ exports["a"] = AccountController;


function AccountController (param1, param2) {
    "use strict";

    console.log('account controller', param1, param2);

    __WEBPACK_IMPORTED_MODULE_0__utilities_helpers___default()('js/views/account.html', {
        first_name: 'John'
    });

}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
throw new Error("Cannot find module \"../utilities/helpers\"");
/* harmony export (immutable) */ exports["a"] = ContactController;


function ContactController (parameter) {

    console.log('contact controller', parameter);

    __WEBPACK_IMPORTED_MODULE_0__utilities_helpers___default()('js/views/contact.html', {
        first_name: 'John'
    });
    
}

/***/ }
/******/ ]);