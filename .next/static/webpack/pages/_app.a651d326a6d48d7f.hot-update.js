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

/***/ "./components/SideBar/desktopDrawer.jsx":
/*!**********************************************!*\
  !*** ./components/SideBar/desktopDrawer.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PermanentDrawerRight; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Drawer */ \"./node_modules/@mui/material/Drawer/index.js\");\n/* harmony import */ var _sideBarContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sideBarContent */ \"./components/SideBar/sideBarContent.jsx\");\n\n\n\n\n\nconst drawerWidth = 240;\nfunction PermanentDrawerRight(props) {\n    const { content } = props;\n    return(//<Box sx={{ display: \"flex\" }} className=\"desktop-drawer\">\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: \"desktop-drawer\",\n        sx: {\n            width: drawerWidth,\n            flexShrink: 0,\n            \"& .MuiDrawer-paper\": {\n                width: drawerWidth,\n                boxSizing: \"border-box\"\n            }\n        },\n        variant: \"permanent\",\n        anchor: \"right\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sideBarContent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            ...props\n        }, void 0, false, {\n            fileName: \"D:\\\\Project\\\\uni website project\\\\react\\\\kashan-uni-map-react\\\\components\\\\SideBar\\\\desktopDrawer.jsx\",\n            lineNumber: 24,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Project\\\\uni website project\\\\react\\\\kashan-uni-map-react\\\\components\\\\SideBar\\\\desktopDrawer.jsx\",\n        lineNumber: 11,\n        columnNumber: 7\n    }, this));\n}\n_c = PermanentDrawerRight;\nvar _c;\n$RefreshReg$(_c, \"PermanentDrawerRight\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGVCYXIvZGVza3RvcERyYXdlci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0I7QUFDSztBQUNNO0FBQ0k7QUFFOUMsTUFBTUksY0FBYztBQUNMLFNBQVNDLHFCQUFxQkMsS0FBSztJQUNoRCxNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHRDtJQUNwQixPQUNFLDJEQUEyRDtrQkFDekQsOERBQUNKLDREQUFNQTtRQUNMTSxXQUFVO1FBQ1ZDLElBQUk7WUFDRkMsT0FBT047WUFDUE8sWUFBWTtZQUNaLHNCQUFzQjtnQkFDcEJELE9BQU9OO2dCQUNQUSxXQUFXO1lBQ2I7UUFDRjtRQUNBQyxTQUFRO1FBQ1JDLFFBQU87a0JBRVAsNEVBQUNYLHVEQUFjQTtZQUFFLEdBQUdHLEtBQUs7Ozs7Ozs7Ozs7O0FBSWpDO0tBckJ3QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlQmFyL2Rlc2t0b3BEcmF3ZXIuanN4P2JlNzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XHJcbmltcG9ydCBEcmF3ZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvRHJhd2VyXCI7XHJcbmltcG9ydCBTaWRlQmFyQ29udGVudCBmcm9tIFwiLi9zaWRlQmFyQ29udGVudFwiO1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBlcm1hbmVudERyYXdlclJpZ2h0KHByb3BzKSB7XHJcbiAgY29uc3QgeyBjb250ZW50IH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgLy88Qm94IHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiIH19IGNsYXNzTmFtZT1cImRlc2t0b3AtZHJhd2VyXCI+XHJcbiAgICAgIDxEcmF3ZXJcclxuICAgICAgICBjbGFzc05hbWU9XCJkZXNrdG9wLWRyYXdlclwiXHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICAgICAgICBcIiYgLk11aURyYXdlci1wYXBlclwiOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfX1cclxuICAgICAgICB2YXJpYW50PVwicGVybWFuZW50XCJcclxuICAgICAgICBhbmNob3I9XCJyaWdodFwiXHJcbiAgICAgID5cclxuICAgICAgICA8U2lkZUJhckNvbnRlbnQgey4uLnByb3BzfSAvPlxyXG4gICAgICA8L0RyYXdlcj5cclxuICAgIC8vPC9Cb3g+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJEcmF3ZXIiLCJTaWRlQmFyQ29udGVudCIsImRyYXdlcldpZHRoIiwiUGVybWFuZW50RHJhd2VyUmlnaHQiLCJwcm9wcyIsImNvbnRlbnQiLCJjbGFzc05hbWUiLCJzeCIsIndpZHRoIiwiZmxleFNocmluayIsImJveFNpemluZyIsInZhcmlhbnQiLCJhbmNob3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SideBar/desktopDrawer.jsx\n"));

/***/ })

});