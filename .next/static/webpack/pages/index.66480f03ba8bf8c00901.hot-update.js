"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ConfigContext\": function() { return /* binding */ ConfigContext; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.js */ \"./src/Home.js\");\n/* harmony import */ var _Speakers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Speakers.js */ \"./src/Speakers.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/aqibshaik/Documents/pluralsight-react-hooks-eslint/src/App.js\",\n    _this = undefined;\n\n\n\n\n\nvar ConfigContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();\n\nvar pageToShow = function pageToShow(pageName) {\n  if (pageName === 'Home') return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Home_js__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 36\n  }, _this);\n  if (pageName === 'Speakers') return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Speakers_js__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 40\n  }, _this);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    children: \"Not found\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 12\n  }, _this);\n};\n\nvar configValue = {\n  showSignMeUp: false,\n  showSpeakerSpeakingDays: false\n};\n\nvar App = function App(_ref) {\n  var pageName = _ref.pageName;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(ConfigContext.Provider, {\n    value: configValue,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: pageToShow(pageName)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVPLElBQU1HLGFBQWEsZ0JBQUdILDBEQUFBLEVBQXRCOztBQUVQLElBQU1LLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLFFBQUQsRUFBYztBQUM3QixNQUFHQSxRQUFRLEtBQUssTUFBaEIsRUFBd0Isb0JBQU8sOERBQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ3hCLE1BQUdBLFFBQVEsS0FBSyxVQUFoQixFQUE0QixvQkFBTyw4REFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDNUIsc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNBLENBSko7O0FBTUEsSUFBTUMsV0FBVyxHQUFHO0FBQ2hCQyxFQUFBQSxZQUFZLEVBQUcsS0FEQztBQUVoQkMsRUFBQUEsdUJBQXVCLEVBQUc7QUFGVixDQUFwQjs7QUFLQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFnQjtBQUFBLE1BQWRKLFFBQWMsUUFBZEEsUUFBYztBQUN4QixzQkFDSSw4REFBQyxhQUFELENBQWUsUUFBZjtBQUF3QixTQUFLLEVBQUVDLFdBQS9CO0FBQUEsMkJBQ0k7QUFBQSxnQkFBTUYsVUFBVSxDQUFDQyxRQUFEO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFLSCxDQU5EOztLQUFNSTtBQVFOLCtEQUFlQSxHQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9BcHAuanM/YmU5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lLmpzJztcbmltcG9ydCBTcGVha2VycyBmcm9tICcuL1NwZWFrZXJzLmpzJztcblxuZXhwb3J0IGNvbnN0IENvbmZpZ0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmNvbnN0IHBhZ2VUb1Nob3cgPSAocGFnZU5hbWUpID0+IHtcbiAgICBpZihwYWdlTmFtZSA9PT0gJ0hvbWUnKSByZXR1cm4gPEhvbWU+PC9Ib21lPjtcbiAgICBpZihwYWdlTmFtZSA9PT0gJ1NwZWFrZXJzJykgcmV0dXJuIDxTcGVha2Vycz48L1NwZWFrZXJzPjtcbiAgICByZXR1cm4gPGRpdj5Ob3QgZm91bmQ8L2Rpdj5cbiAgIH1cblxuY29uc3QgY29uZmlnVmFsdWUgPSB7XG4gICAgc2hvd1NpZ25NZVVwIDogZmFsc2UsXG4gICAgc2hvd1NwZWFrZXJTcGVha2luZ0RheXMgOiBmYWxzZVxufVxuXG5jb25zdCBBcHAgPSAoe3BhZ2VOYW1lfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxDb25maWdDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb25maWdWYWx1ZX0+XG4gICAgICAgICAgICA8ZGl2PntwYWdlVG9TaG93KHBhZ2VOYW1lKX08L2Rpdj5cbiAgICAgICAgPC9Db25maWdDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhvbWUiLCJTcGVha2VycyIsIkNvbmZpZ0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwicGFnZVRvU2hvdyIsInBhZ2VOYW1lIiwiY29uZmlnVmFsdWUiLCJzaG93U2lnbk1lVXAiLCJzaG93U3BlYWtlclNwZWFraW5nRGF5cyIsIkFwcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/App.js\n");

/***/ })

});