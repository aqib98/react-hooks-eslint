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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageToggleOnScroll */ \"./src/ImageToggleOnScroll.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/aqibshaik/Documents/pluralsight-react-hooks-eslint/src/SpeakerDetail.js\",\n    _this = undefined;\n\n\n\n\nvar SpeakerDetail = function SpeakerDetail(_ref) {\n  var id = _ref.id,\n      favorite = _ref.favorite,\n      onHeartFavoriteHandler = _ref.onHeartFavoriteHandler,\n      firstName = _ref.firstName,\n      lastName = _ref.lastName,\n      bio = _ref.bio;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"card col4 cardadmin\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_0__.default, {\n      className: \"card-img-top\",\n      primaryImg: \"static/speakers/bw/Speaker-\".concat(id, \".jpg\"),\n      secondaryImg: \"static/speakers/Speaker-\".concat(id, \".jpg\"),\n      alt: \"\".concat(firstName, \" \").concat(lastName)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"card-body\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n        className: \"card-title\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n          \"data-sessionid\": id,\n          className: favorite ? 'heartedbutton' : 'heartdarkbutton',\n          onClick: function onClick(e) {\n            onHeartFavoriteHandler(e, !favorite);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n          children: [firstName, \" \", lastName]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n        children: bio\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = SpeakerDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerDetail);\n\nvar _c;\n\n$RefreshReg$(_c, \"SpeakerDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU3BlYWtlckRldGFpbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7QUFFQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BTVQ7QUFBQSxNQUxUQyxFQUtTLFFBTFRBLEVBS1M7QUFBQSxNQUpUQyxRQUlTLFFBSlRBLFFBSVM7QUFBQSxNQUhUQyxzQkFHUyxRQUhUQSxzQkFHUztBQUFBLE1BRlRDLFNBRVMsUUFGVEEsU0FFUztBQUFBLE1BRFRDLFFBQ1MsUUFEVEEsUUFDUztBQUFBLE1BQVRDLEdBQVMsUUFBVEEsR0FBUztBQUNULHNCQUNJO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUEsNEJBQ0ksOERBQUMseURBQUQ7QUFDSSxlQUFTLEVBQUcsY0FEaEI7QUFFSSxnQkFBVSx1Q0FBa0NMLEVBQWxDLFNBRmQ7QUFHSSxrQkFBWSxvQ0FBK0JBLEVBQS9CLFNBSGhCO0FBSUksU0FBRyxZQUFLRyxTQUFMLGNBQWtCQyxRQUFsQjtBQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQU9JO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMsWUFBZDtBQUFBLGdDQUNJO0FBQ0ksNEJBQWdCSixFQURwQjtBQUVJLG1CQUFTLEVBQUVDLFFBQVEsR0FBRyxlQUFILEdBQXFCLGlCQUY1QztBQUdJLGlCQUFPLEVBQUUsaUJBQUNLLENBQUQsRUFBTztBQUNaSixZQUFBQSxzQkFBc0IsQ0FBQ0ksQ0FBRCxFQUFHLENBQUNMLFFBQUosQ0FBdEI7QUFDSDtBQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFRSTtBQUFBLHFCQUNLRSxTQURMLE9BQ2lCQyxRQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFjSTtBQUFBLGtCQUFPQztBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTBCSCxDQWpDRDs7S0FBTU47QUFtQ04sK0RBQWVBLGFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJEZXRhaWwuanM/OTY1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2VUb2dnbGVPblNjcm9sbCBmcm9tIFwiLi9JbWFnZVRvZ2dsZU9uU2Nyb2xsXCI7XG5cbmNvbnN0IFNwZWFrZXJEZXRhaWwgPSAoe1xuICAgIGlkLFxuICAgIGZhdm9yaXRlLFxuICAgIG9uSGVhcnRGYXZvcml0ZUhhbmRsZXIsXG4gICAgZmlyc3ROYW1lLFxuICAgIGxhc3ROYW1lLFxuICAgIGJpb30pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZCBjb2w0IGNhcmRhZG1pbic+XG4gICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9ICdjYXJkLWltZy10b3AnXG4gICAgICAgICAgICAgICAgcHJpbWFyeUltZyA9IHtgc3RhdGljL3NwZWFrZXJzL2J3L1NwZWFrZXItJHtpZH0uanBnYH1cbiAgICAgICAgICAgICAgICBzZWNvbmRhcnlJbWcgPSB7YHN0YXRpYy9zcGVha2Vycy9TcGVha2VyLSR7aWR9LmpwZ2B9XG4gICAgICAgICAgICAgICAgYWx0PXtgJHtmaXJzdE5hbWV9ICR7bGFzdE5hbWV9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1ib2R5Jz5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdjYXJkLXRpdGxlJz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zZXNzaW9uaWQ9e2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtmYXZvcml0ZSA/ICdoZWFydGVkYnV0dG9uJyA6ICdoZWFydGRhcmtidXR0b24nfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyKGUsIWZhdm9yaXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Zmlyc3ROYW1lfSB7bGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2g0PlxuXG4gICAgICAgICAgICAgICAgPHNwYW4+e2Jpb308L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyRGV0YWlsIl0sIm5hbWVzIjpbIkltYWdlVG9nZ2xlT25TY3JvbGwiLCJTcGVha2VyRGV0YWlsIiwiaWQiLCJmYXZvcml0ZSIsIm9uSGVhcnRGYXZvcml0ZUhhbmRsZXIiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImJpbyIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/SpeakerDetail.js\n");

/***/ })

});