webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_create_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/create-firestore */ "./utils/create-firestore.ts");
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/navigation */ "./components/navigation.tsx");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/form */ "./components/form.tsx");
/* harmony import */ var _components_graph__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/graph */ "./components/graph.tsx");





var _this = undefined,
    _jsxFileName = "C:\\Courses\\build-data-uis-with-d3-firebase\\the-dojo\\pages\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var LandingPage = function LandingPage(_ref) {
  _s();

  var activities = _ref.activities;
  var collectionPath = "activities";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(activities[0]),
      activity = _useState[0],
      setActivity = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      data = _useState2[0],
      setData = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    _utils_create_firestore__WEBPACK_IMPORTED_MODULE_5__["db"].collection(collectionPath).onSnapshot( /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                res.docChanges().forEach(function (change) {
                  var doc = _objectSpread(_objectSpread({}, change.doc.data()), {}, {
                    id: change.doc.id
                  });

                  switch (change.type) {
                    case "added":
                      return setData(function (data) {
                        return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(data), [doc]);
                      });

                    case "modified":
                      return setData(function (data) {
                        return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(data.map(function (d) {
                          return d.id === doc.id ? doc : d;
                        }));
                      });

                    case "removed":
                      return setData(function (data) {
                        return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(data.filter(function (d) {
                          return d.id !== doc.id;
                        }));
                      });
                  }
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "nav z-depth-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "section center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "white-text center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "- The Dojo -"))), __jsx("div", {
    className: "section center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "grey-text flow-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, "A fitness tracker for ninjas")), __jsx("div", {
    className: "container section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col s12 l5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_6__["default"], {
    selected: activity,
    options: activities,
    onChange: function onChange(option) {
      return setActivity(option);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col s12 l6 push-l1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx(_components_graph__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: data.filter(function (d) {
      return d.activity === activity;
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_7__["default"], {
    activity: activity,
    onSubmit: /*#__PURE__*/function () {
      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(d) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _utils_create_firestore__WEBPACK_IMPORTED_MODULE_5__["db"].collection(collectionPath).add(_objectSpread(_objectSpread({}, d), {}, {
                  date: new Date().toString()
                })));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }))));
};

_s(LandingPage, "7Sw8/2ninnNwIfT8XFSo3EkgCEs=");

_c = LandingPage;

LandingPage.getInitialProps = function (ctx) {
  return {
    activities: ["cycling", "running", "swimming", "walking"]
  };
};

/* harmony default export */ __webpack_exports__["default"] = (LandingPage);

var _c;

$RefreshReg$(_c, "LandingPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiTGFuZGluZ1BhZ2UiLCJhY3Rpdml0aWVzIiwiY29sbGVjdGlvblBhdGgiLCJ1c2VTdGF0ZSIsImFjdGl2aXR5Iiwic2V0QWN0aXZpdHkiLCJkYXRhIiwic2V0RGF0YSIsInVzZUVmZmVjdCIsImRiIiwiY29sbGVjdGlvbiIsIm9uU25hcHNob3QiLCJyZXMiLCJkb2NDaGFuZ2VzIiwiZm9yRWFjaCIsImNoYW5nZSIsImRvYyIsImlkIiwidHlwZSIsIm1hcCIsImQiLCJmaWx0ZXIiLCJvcHRpb24iLCJhZGQiLCJkYXRlIiwiRGF0ZSIsInRvU3RyaW5nIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFvQjtBQUFBOztBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDdEMsTUFBTUMsY0FBYyxHQUFHLFlBQXZCOztBQURzQyxrQkFFTkMsc0RBQVEsQ0FBQ0YsVUFBVSxDQUFDLENBQUQsQ0FBWCxDQUZGO0FBQUEsTUFFL0JHLFFBRitCO0FBQUEsTUFFckJDLFdBRnFCOztBQUFBLG1CQUdkRixzREFBUSxDQUFDLEVBQUQsQ0FITTtBQUFBLE1BRy9CRyxJQUgrQjtBQUFBLE1BR3pCQyxPQUh5Qjs7QUFLdENDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyw4REFBRSxDQUFDQyxVQUFILENBQWNSLGNBQWQsRUFBOEJTLFVBQTlCO0FBQUEsbU1BQXlDLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdkNBLG1CQUFHLENBQUNDLFVBQUosR0FBaUJDLE9BQWpCLENBQXlCLFVBQUNDLE1BQUQsRUFBWTtBQUNuQyxzQkFBTUMsR0FBRyxtQ0FBUUQsTUFBTSxDQUFDQyxHQUFQLENBQVdW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SCxDQUZaO0FBRWVJLHNCQUFJLEVBQUUsSUFBSUMsSUFBSixHQUFXQyxRQUFYO0FBRnJCLG1CQURROztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FiRixDQVhGLENBREY7QUFzQ0QsQ0FoRUQ7O0dBQU0xQixXOztLQUFBQSxXOztBQWtFTkEsV0FBVyxDQUFDMkIsZUFBWixHQUE4QixVQUFDQyxHQUFELEVBQVM7QUFDckMsU0FBTztBQUNMM0IsY0FBVSxFQUFFLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsVUFBdkIsRUFBbUMsU0FBbkM7QUFEUCxHQUFQO0FBR0QsQ0FKRDs7QUFNZUQsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjQ3MDBmYmZlN2E0NjQyNGNhOGZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vdXRpbHMvY3JlYXRlLWZpcmVzdG9yZVwiO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2aWdhdGlvblwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybVwiO1xuaW1wb3J0IEdyYXBoIGZyb20gXCIuLi9jb21wb25lbnRzL2dyYXBoXCI7XG5cbmNvbnN0IExhbmRpbmdQYWdlID0gKHsgYWN0aXZpdGllcyB9KSA9PiB7XG4gIGNvbnN0IGNvbGxlY3Rpb25QYXRoID0gXCJhY3Rpdml0aWVzXCI7XG4gIGNvbnN0IFthY3Rpdml0eSwgc2V0QWN0aXZpdHldID0gdXNlU3RhdGUoYWN0aXZpdGllc1swXSk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRiLmNvbGxlY3Rpb24oY29sbGVjdGlvblBhdGgpLm9uU25hcHNob3QoYXN5bmMgKHJlcykgPT4ge1xuICAgICAgcmVzLmRvY0NoYW5nZXMoKS5mb3JFYWNoKChjaGFuZ2UpID0+IHtcbiAgICAgICAgY29uc3QgZG9jID0geyAuLi5jaGFuZ2UuZG9jLmRhdGEoKSwgaWQ6IGNoYW5nZS5kb2MuaWQgfTtcblxuICAgICAgICBzd2l0Y2ggKGNoYW5nZS50eXBlKSB7XG4gICAgICAgICAgY2FzZSBcImFkZGVkXCI6XG4gICAgICAgICAgICByZXR1cm4gc2V0RGF0YSgoZGF0YSkgPT4gWy4uLmRhdGEsIGRvY10pO1xuXG4gICAgICAgICAgY2FzZSBcIm1vZGlmaWVkXCI6XG4gICAgICAgICAgICByZXR1cm4gc2V0RGF0YSgoZGF0YSkgPT4gW1xuICAgICAgICAgICAgICAuLi5kYXRhLm1hcCgoZCkgPT4gKGQuaWQgPT09IGRvYy5pZCA/IGRvYyA6IGQpKSxcbiAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgY2FzZSBcInJlbW92ZWRcIjpcbiAgICAgICAgICAgIHJldHVybiBzZXREYXRhKChkYXRhKSA9PiBbLi4uZGF0YS5maWx0ZXIoKGQpID0+IGQuaWQgIT09IGRvYy5pZCldKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdiB6LWRlcHRoLTBgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzZWN0aW9uIGNlbnRlcmB9PlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9e2B3aGl0ZS10ZXh0IGNlbnRlcmB9PntgLSBUaGUgRG9qbyAtYH08L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BzZWN0aW9uIGNlbnRlcmB9PlxuICAgICAgICA8cCBjbGFzc05hbWU9e2BncmV5LXRleHQgZmxvdy10ZXh0YH0+XG4gICAgICAgICAge2BBIGZpdG5lc3MgdHJhY2tlciBmb3IgbmluamFzYH1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbnRhaW5lciBzZWN0aW9uYH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcm93YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2wgczEyIGw1YH0+XG4gICAgICAgICAgICA8TmF2aWdhdGlvblxuICAgICAgICAgICAgICBzZWxlY3RlZD17YWN0aXZpdHl9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e2FjdGl2aXRpZXN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsob3B0aW9uKSA9PiBzZXRBY3Rpdml0eShvcHRpb24pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbCBzMTIgbDYgcHVzaC1sMWB9PlxuICAgICAgICAgICAgPEdyYXBoIGRhdGE9e2RhdGEuZmlsdGVyKChkKSA9PiBkLmFjdGl2aXR5ID09PSBhY3Rpdml0eSl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHJvd2B9PlxuICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICBhY3Rpdml0eT17YWN0aXZpdHl9XG4gICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKGQpID0+XG4gICAgICAgICAgICAgIGRiXG4gICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oY29sbGVjdGlvblBhdGgpXG4gICAgICAgICAgICAgICAgLmFkZCh7IC4uLmQsIGRhdGU6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5MYW5kaW5nUGFnZS5nZXRJbml0aWFsUHJvcHMgPSAoY3R4KSA9PiB7XG4gIHJldHVybiB7XG4gICAgYWN0aXZpdGllczogW1wiY3ljbGluZ1wiLCBcInJ1bm5pbmdcIiwgXCJzd2ltbWluZ1wiLCBcIndhbGtpbmdcIl0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=