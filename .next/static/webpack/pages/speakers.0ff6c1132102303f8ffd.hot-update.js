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

/***/ "./src/Speakers.js":
/*!*************************!*\
  !*** ./src/Speakers.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_aqibshaik_Documents_pluralsight_react_hooks_eslint_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./src/Header.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpeakerData */ \"./src/SpeakerData.js\");\n/* harmony import */ var _SpeakerDetail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SpeakerDetail */ \"./src/SpeakerDetail.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/aqibshaik/Documents/pluralsight-react-hooks-eslint/src/Speakers.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Speakers = function Speakers(_ref) {\n  _s();\n\n  (0,_Users_aqibshaik_Documents_pluralsight_react_hooks_eslint_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref);\n\n  //const [speakerList, setSpeakerList] = useState([]);\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(function (state, action) {\n    return action;\n  }, []),\n      speakerList = _useReducer[0],\n      setSpeakerlist = _useReducer[1];\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      isLoading = _useState[0],\n      setIsLoading = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      speakingSaturday = _useState2[0],\n      setSpeakingSaturday = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      speakingSunday = _useState3[0],\n      setSpeakingSunday = _useState3[1];\n\n  var context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_App__WEBPACK_IMPORTED_MODULE_6__.ConfigContext);\n\n  var handleChangeSaturday = function handleChangeSaturday() {\n    setSpeakingSaturday(!speakingSaturday);\n  };\n\n  var handleChangeSunday = function handleChangeSunday() {\n    setSpeakingSunday(!speakingSunday);\n  };\n\n  var speakerListFiltered = speakerList.filter(function (_ref2) {\n    var sat = _ref2.sat,\n        sun = _ref2.sun;\n    return speakingSaturday && sat || speakingSunday && sun;\n  }).sort(function (a, b) {\n    if (a.firstName < b.firstName) {\n      return -1;\n    }\n\n    if (a.firstName > b.firstName) {\n      return 1;\n    }\n\n    return 0;\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setIsLoading(true);\n    new Promise(function (resolve) {\n      setTimeout(function () {\n        resolve();\n      }, 1000);\n    }).then(function () {\n      setIsLoading(false);\n    });\n    setSpeakerList(_SpeakerData__WEBPACK_IMPORTED_MODULE_4__.default);\n    return function () {\n      console.log(\"cleanup\");\n    };\n  }, []);\n\n  var heartFavoriteHandler = function heartFavoriteHandler(e, favoriteValue) {\n    e.preventDefault();\n  };\n\n  if (isLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n    children: \"Loading....\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 63,\n    columnNumber: 25\n  }, _this);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_3__.Menu, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      className: \"container\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        className: \"btn-toolbar  margintopbottom5 checkbox-bigger\",\n        children: context.showSpeakerSpeakingDays === false ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          className: \"hide\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n            className: \"form-check-inline\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"label\", {\n              className: \"form-check-label\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                className: \"form-check-input\",\n                onChange: handleChangeSaturday,\n                checked: speakingSaturday\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 75,\n                columnNumber: 19\n              }, _this), \"Saturday Speakers\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 74,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n            className: \"form-check-inline\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"label\", {\n              className: \"form-check-label\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                className: \"form-check-input\",\n                onChange: handleChangeSunday,\n                checked: speakingSunday\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 86,\n                columnNumber: 19\n              }, _this), \"Sunday Speakers\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 85,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        className: \"row\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          className: \"card-deck\",\n          children: speakerListFiltered.map(function (_ref3) {\n            var id = _ref3.id,\n                firstName = _ref3.firstName,\n                lastName = _ref3.lastName,\n                bio = _ref3.bio,\n                favorite = _ref3.favorite;\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_SpeakerDetail__WEBPACK_IMPORTED_MODULE_5__.default, {\n              id: id,\n              favorite: favorite,\n              onHeartFavoriteHandler: heartFavoriteHandler,\n              firstName: firstName,\n              lastName: lastName,\n              bio: bio\n            }, id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 101,\n              columnNumber: 17\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Speakers, \"4rPH4b8B8lDBFWJ+VmKlKDAWcw0=\");\n\n_c = Speakers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);\n\nvar _c;\n\n$RefreshReg$(_c, \"Speakers\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtBQUFBLGdCQUFmQyxRQUFlLFNBQWZBLFFBQWU7QUFDdkUsZ0NBQ0UsOERBQUMsbURBQUQ7QUFFRSxnQkFBRSxFQUFFSCxFQUZOO0FBR0Usc0JBQVEsRUFBRUcsUUFIWjtBQUlFLG9DQUFzQixFQUFFVCxvQkFKMUI7QUFLRSx1QkFBUyxFQUFFUixTQUxiO0FBTUUsc0JBQVEsRUFBRWUsUUFOWjtBQU9FLGlCQUFHLEVBQUVDO0FBUFAsZUFDT0YsRUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBV0QsV0FaQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0RELENBekdEOztHQUFNbkM7O0tBQUFBO0FBMkdOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9TcGVha2Vycy5qcz8yOTUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gXCIuL01lbnVcIjtcblxuaW1wb3J0IHNwZWFrZXJEYXRhIGZyb20gXCIuL1NwZWFrZXJEYXRhXCI7XG5cbmltcG9ydCBTcGVha2VyRGV0YWlsIGZyb20gXCIuL1NwZWFrZXJEZXRhaWxcIjtcblxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gXCIuL0FwcFwiO1xuXG5jb25zdCBTcGVha2VycyA9ICh7fSkgPT4ge1xuICAvL2NvbnN0IFtzcGVha2VyTGlzdCwgc2V0U3BlYWtlckxpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc3BlYWtlckxpc3QsIHNldFNwZWFrZXJsaXN0XSA9IHVzZVJlZHVjZXIoKHN0YXRlLGFjdGlvbik9PiBhY3Rpb24sW10pXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBbc3BlYWtpbmdTYXR1cmRheSwgc2V0U3BlYWtpbmdTYXR1cmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3NwZWFraW5nU3VuZGF5LCBzZXRTcGVha2luZ1N1bmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVNhdHVyZGF5ID0gKCkgPT4ge1xuICAgIHNldFNwZWFraW5nU2F0dXJkYXkoIXNwZWFraW5nU2F0dXJkYXkpO1xuICB9O1xuICBjb25zdCBoYW5kbGVDaGFuZ2VTdW5kYXkgPSAoKSA9PiB7XG4gICAgc2V0U3BlYWtpbmdTdW5kYXkoIXNwZWFraW5nU3VuZGF5KTtcbiAgfTtcblxuICBjb25zdCBzcGVha2VyTGlzdEZpbHRlcmVkID0gc3BlYWtlckxpc3RcbiAgLmZpbHRlcihcbiAgICAgICh7c2F0LHN1bn0pID0+XG4gICAgICAoc3BlYWtpbmdTYXR1cmRheSAmJiBzYXQpIHx8IChzcGVha2luZ1N1bmRheSAmJiBzdW4pXG4gIClcbiAgLnNvcnQoKGEsYik9PntcbiAgICAgIGlmKGEuZmlyc3ROYW1lIDwgYi5maXJzdE5hbWUpe1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGlmKGEuZmlyc3ROYW1lID4gYi5maXJzdE5hbWUpe1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gICAgc2V0U3BlYWtlckxpc3Qoc3BlYWtlckRhdGEpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImNsZWFudXBcIik7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhlYXJ0RmF2b3JpdGVIYW5kbGVyID0gKGUsIGZhdm9yaXRlVmFsdWUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLi48L2Rpdj47XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPE1lbnUgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLXRvb2xiYXIgIG1hcmdpbnRvcGJvdHRvbTUgY2hlY2tib3gtYmlnZ2VyXCI+XG4gICAgICAgICAgICB7Y29udGV4dC5zaG93U3BlYWtlclNwZWFraW5nRGF5cyA9PT0gZmFsc2UgPyBudWxsIDooXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTYXR1cmRheX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3BlYWtpbmdTYXR1cmRheX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICBTYXR1cmRheSBTcGVha2Vyc1xuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVN1bmRheX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3BlYWtpbmdTdW5kYXl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgU3VuZGF5IFNwZWFrZXJzXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGVja1wiPlxuICAgICAgICAgICAge3NwZWFrZXJMaXN0RmlsdGVyZWQubWFwKCh7IGlkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBiaW8sIGZhdm9yaXRlIH0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8U3BlYWtlckRldGFpbFxuICAgICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgICAgICAgIGZhdm9yaXRlPXtmYXZvcml0ZX1cbiAgICAgICAgICAgICAgICAgIG9uSGVhcnRGYXZvcml0ZUhhbmRsZXI9e2hlYXJ0RmF2b3JpdGVIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lPXtmaXJzdE5hbWV9XG4gICAgICAgICAgICAgICAgICBsYXN0TmFtZT17bGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgICBiaW89e2Jpb31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGVha2VycztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWR1Y2VyIiwidXNlU3RhdGUiLCJIZWFkZXIiLCJNZW51Iiwic3BlYWtlckRhdGEiLCJTcGVha2VyRGV0YWlsIiwiQ29uZmlnQ29udGV4dCIsIlNwZWFrZXJzIiwic3RhdGUiLCJhY3Rpb24iLCJzcGVha2VyTGlzdCIsInNldFNwZWFrZXJsaXN0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwic3BlYWtpbmdTYXR1cmRheSIsInNldFNwZWFraW5nU2F0dXJkYXkiLCJzcGVha2luZ1N1bmRheSIsInNldFNwZWFraW5nU3VuZGF5IiwiY29udGV4dCIsImhhbmRsZUNoYW5nZVNhdHVyZGF5IiwiaGFuZGxlQ2hhbmdlU3VuZGF5Iiwic3BlYWtlckxpc3RGaWx0ZXJlZCIsImZpbHRlciIsInNhdCIsInN1biIsInNvcnQiLCJhIiwiYiIsImZpcnN0TmFtZSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInRoZW4iLCJzZXRTcGVha2VyTGlzdCIsImNvbnNvbGUiLCJsb2ciLCJoZWFydEZhdm9yaXRlSGFuZGxlciIsImUiLCJmYXZvcml0ZVZhbHVlIiwicHJldmVudERlZmF1bHQiLCJzaG93U3BlYWtlclNwZWFraW5nRGF5cyIsIm1hcCIsImlkIiwibGFzdE5hbWUiLCJiaW8iLCJmYXZvcml0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Speakers.js\n");

/***/ })

});