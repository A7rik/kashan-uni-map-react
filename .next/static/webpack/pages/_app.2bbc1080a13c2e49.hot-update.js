"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/store.jsx":
/*!*************************!*\
  !*** ./store/store.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ \"./node_modules/zustand/esm/index.mjs\");\n// store.js\n\nconst useStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({\n        roomType: null,\n        roomData: null,\n        mapFloor: __WEBPACK_EXTERNAL_MODULE__1__,\n        setRoomTypeAndData: (newRoomType, newRoomData)=>set({\n                roomType: newRoomType,\n                roomData: newRoomData\n            })\n    }));\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStore);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zdG9yZS5qc3giLCJtYXBwaW5ncyI6Ijs7QUFBQSxXQUFXO0FBQ3FCO0FBRWhDLE1BQU1DLFdBQVdELCtDQUFNQSxDQUFDLENBQUNFLE1BQVM7UUFDaENDLFVBQVU7UUFDVkMsVUFBVTtRQUNWQyxVQUFVQztRQUNWQyxvQkFBb0IsQ0FBQ0MsYUFBYUMsY0FBZ0JQLElBQUk7Z0JBQUVDLFVBQVVLO2dCQUFhSixVQUFVSztZQUFZO0lBQ3ZHO0FBR0EsK0RBQWVSLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvc3RvcmUuanN4PzM0OGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3RvcmUuanNcclxuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnenVzdGFuZCdcclxuXHJcbmNvbnN0IHVzZVN0b3JlID0gY3JlYXRlKChzZXQpID0+ICh7XHJcbiAgcm9vbVR5cGU6IG51bGwsIC8vIFN0YXRlIHRvIGhvbGQgdGhlIHNlbGVjdGVkIHJvb20gdHlwZVxyXG4gIHJvb21EYXRhOiBudWxsLCAvLyBTdGF0ZSB0byBob2xkIHRoZSBzZWxlY3RlZCByb29tIGRhdGFcclxuICBtYXBGbG9vcjogX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMV9fLFxyXG4gIHNldFJvb21UeXBlQW5kRGF0YTogKG5ld1Jvb21UeXBlLCBuZXdSb29tRGF0YSkgPT4gc2V0KHsgcm9vbVR5cGU6IG5ld1Jvb21UeXBlLCByb29tRGF0YTogbmV3Um9vbURhdGEgfSksIC8vIEFjdGlvbiB0byB1cGRhdGUgdGhlIHNlbGVjdGVkIHJvb20gdHlwZSBhbmQgZGF0YVxyXG59KSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlU3RvcmU7Il0sIm5hbWVzIjpbImNyZWF0ZSIsInVzZVN0b3JlIiwic2V0Iiwicm9vbVR5cGUiLCJyb29tRGF0YSIsIm1hcEZsb29yIiwiX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMV9fIiwic2V0Um9vbVR5cGVBbmREYXRhIiwibmV3Um9vbVR5cGUiLCJuZXdSb29tRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/store.jsx\n"));

/***/ })

});