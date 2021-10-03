"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/speakers",{

/***/ "./src/SpeakerDetail.js":
/*!******************************!*\
  !*** ./src/SpeakerDetail.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageToggleOnScroll */ \"./src/ImageToggleOnScroll.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/aqibshaik/Documents/pluralsight-react-hooks-eslint/src/SpeakerDetail.js\",\n    _this = undefined;\n\n\n\n\nvar SpeakerDetail = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(_c = function _c(_ref) {\n  var id = _ref.id,\n      firstName = _ref.firstName,\n      lastName = _ref.lastName,\n      favorite = _ref.favorite,\n      bio = _ref.bio,\n      onHeartFavoriteHandler = _ref.onHeartFavoriteHandler;\n  console.log(\"SpeakerDetail:\".concat(id, \" \").concat(firstName, \" \").concat(lastName, \" \").concat(favorite));\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"card col-4 cardmin\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__.default, {\n      className: \"card-img-top\",\n      primaryImg: \"/static/speakers/bw/Speaker-\".concat(id, \".jpg\"),\n      secondaryImg: \"/static/speakers/Speaker-\".concat(id, \".jpg\"),\n      alt: \"{firstName} {lastName}\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"card-body\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h4\", {\n        className: \"card-title\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n          \"data-sessionid\": id,\n          className: favorite ? 'heartredbutton' : 'heartdarkbutton',\n          onClick: function onClick(e) {\n            onHeartFavoriteHandler(e, !favorite);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n          children: [firstName, \" \", lastName]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n        children: bio\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 7\n  }, _this);\n});\n_c2 = SpeakerDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerDetail);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"SpeakerDetail$React.memo\");\n$RefreshReg$(_c2, \"SpeakerDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU3BlYWtlckRldGFpbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNRSxhQUFhLGdCQUFHRixpREFBQSxNQUNwQixrQkFBd0U7QUFBQSxNQUFyRUksRUFBcUUsUUFBckVBLEVBQXFFO0FBQUEsTUFBakVDLFNBQWlFLFFBQWpFQSxTQUFpRTtBQUFBLE1BQXREQyxRQUFzRCxRQUF0REEsUUFBc0Q7QUFBQSxNQUE1Q0MsUUFBNEMsUUFBNUNBLFFBQTRDO0FBQUEsTUFBbENDLEdBQWtDLFFBQWxDQSxHQUFrQztBQUFBLE1BQTdCQyxzQkFBNkIsUUFBN0JBLHNCQUE2QjtBQUN0RUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLHlCQUE2QlAsRUFBN0IsY0FBbUNDLFNBQW5DLGNBQWdEQyxRQUFoRCxjQUE0REMsUUFBNUQ7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBLDRCQUNFLDhEQUFDLHlEQUFEO0FBQ0UsZUFBUyxFQUFDLGNBRFo7QUFFRSxnQkFBVSx3Q0FBaUNILEVBQWpDLFNBRlo7QUFHRSxrQkFBWSxxQ0FBOEJBLEVBQTlCLFNBSGQ7QUFJRSxTQUFHLEVBQUM7QUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLFlBQWQ7QUFBQSxnQ0FDRTtBQUNFLDRCQUFnQkEsRUFEbEI7QUFFRSxtQkFBUyxFQUFFRyxRQUFRLEdBQUcsZ0JBQUgsR0FBc0IsaUJBRjNDO0FBR0UsaUJBQU8sRUFBRSxpQkFBQ0ssQ0FBRCxFQUFPO0FBQ2RILFlBQUFBLHNCQUFzQixDQUFDRyxDQUFELEVBQUksQ0FBQ0wsUUFBTCxDQUF0QjtBQUNEO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVFFO0FBQUEscUJBQ0dGLFNBREgsT0FDZUMsUUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFjRTtBQUFBLGtCQUFPRTtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBCRCxDQTlCbUIsQ0FBdEI7TUFBTU47QUFpQ04sK0RBQWVBLGFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJEZXRhaWwuanM/OTY1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlVG9nZ2xlT25TY3JvbGwgZnJvbSAnLi9JbWFnZVRvZ2dsZU9uU2Nyb2xsJztcblxuY29uc3QgU3BlYWtlckRldGFpbCA9IFJlYWN0Lm1lbW8oXG4gICh7IGlkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBmYXZvcml0ZSwgYmlvLCBvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyIH0pID0+IHtcbiAgICBjb25zb2xlLmxvZyhgU3BlYWtlckRldGFpbDoke2lkfSAke2ZpcnN0TmFtZX0gJHtsYXN0TmFtZX0gJHtmYXZvcml0ZX1gKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY29sLTQgY2FyZG1pblwiPlxuICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbFxuICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiXG4gICAgICAgICAgcHJpbWFyeUltZz17YC9zdGF0aWMvc3BlYWtlcnMvYncvU3BlYWtlci0ke2lkfS5qcGdgfVxuICAgICAgICAgIHNlY29uZGFyeUltZz17YC9zdGF0aWMvc3BlYWtlcnMvU3BlYWtlci0ke2lkfS5qcGdgfVxuICAgICAgICAgIGFsdD1cIntmaXJzdE5hbWV9IHtsYXN0TmFtZX1cIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGRhdGEtc2Vzc2lvbmlkPXtpZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtmYXZvcml0ZSA/ICdoZWFydHJlZGJ1dHRvbicgOiAnaGVhcnRkYXJrYnV0dG9uJ31cbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyKGUsICFmYXZvcml0ZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIHtmaXJzdE5hbWV9IHtsYXN0TmFtZX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2g0PlxuXG4gICAgICAgICAgPHNwYW4+e2Jpb308L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJEZXRhaWw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZVRvZ2dsZU9uU2Nyb2xsIiwiU3BlYWtlckRldGFpbCIsIm1lbW8iLCJpZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZmF2b3JpdGUiLCJiaW8iLCJvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyIiwiY29uc29sZSIsImxvZyIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/SpeakerDetail.js\n");

/***/ })

});