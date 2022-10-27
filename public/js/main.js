/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const mobileMenu = __webpack_require__(/*! ./modules/mobileMenu */ \"./src/js/modules/mobileMenu.js\");\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    mobileMenu();\r\n});\r\n\n\n//# sourceURL=webpack://volnov/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/mobileMenu.js":
/*!**************************************!*\
  !*** ./src/js/modules/mobileMenu.js ***!
  \**************************************/
/***/ (function(module) {

eval("module.exports = () => {\r\n    const trigger = document.getElementById(\"hamburger\");\r\n    let isClosed = true;\r\n\r\n    trigger.addEventListener(\"click\", ()=>{\r\n        if (isClosed == true) {\r\n            trigger.classList.remove(\"is-open\");\r\n            trigger.classList.add(\"is-closed\");\r\n            isClosed = false;\r\n        } else {\r\n            trigger.classList.remove(\"is-closed\");\r\n            trigger.classList.add(\"is-open\");\r\n            isClosed = true;\r\n        }\r\n    });\r\n};\n\n//# sourceURL=webpack://volnov/./src/js/modules/mobileMenu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;