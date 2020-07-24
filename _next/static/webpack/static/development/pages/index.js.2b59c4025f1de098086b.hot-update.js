webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/form.tsx":
/*!*****************************!*\
  !*** ./components/form.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Courses\\build-data-uis-with-d3-firebase\\the-dojo\\components\\form.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Form = function Form(_ref) {
  _s();

  var activity = _ref.activity,
      _onSubmit = _ref.onSubmit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      distance = _useState[0],
      setDistance = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      error = _useState2[0],
      setError = _useState2[1];

  return __jsx("form", {
    className: "col m6 push-m3",
    onSubmit: function onSubmit(e) {
      e.preventDefault();

      if (!distance || isNaN(parseInt(distance))) {
        return setError("Distance must be a number");
      }

      _onSubmit({
        distance: parseInt(distance),
        activity: activity
      }).then(function () {
        setDistance("");
        setError("");
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "flow-text grey-text center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, "How much ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 18
    }
  }, activity), " have you done today?"), __jsx("input", {
    type: "text",
    className: "grey-text",
    id: activity,
    value: distance,
    placeholder: "Distance in m",
    onChange: function onChange(e) {
      return setDistance(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), __jsx("p", {
    className: "center pink-text error text-lighten-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, error));
};

_s(Form, "veZdwHYu8Zg0jLKKW39hvZGJ8S8=");

_c = Form;
/* harmony default export */ __webpack_exports__["default"] = (Form);

var _c;

$RefreshReg$(_c, "Form");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm0udHN4Il0sIm5hbWVzIjpbIkZvcm0iLCJhY3Rpdml0eSIsIm9uU3VibWl0IiwidXNlU3RhdGUiLCJkaXN0YW5jZSIsInNldERpc3RhbmNlIiwiZXJyb3IiLCJzZXRFcnJvciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlzTmFOIiwicGFyc2VJbnQiLCJ0aGVuIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQU9BLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQTRCO0FBQUE7O0FBQUEsTUFBekJDLFFBQXlCLFFBQXpCQSxRQUF5QjtBQUFBLE1BQWZDLFNBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDUEMsc0RBQVEsQ0FBQyxFQUFELENBREQ7QUFBQSxNQUNoQ0MsUUFEZ0M7QUFBQSxNQUN0QkMsV0FEc0I7O0FBQUEsbUJBRWJGLHNEQUFRLENBQUMsRUFBRCxDQUZLO0FBQUEsTUFFaENHLEtBRmdDO0FBQUEsTUFFekJDLFFBRnlCOztBQUl2QyxTQUNFO0FBQ0UsYUFBUyxrQkFEWDtBQUVFLFlBQVEsRUFBRSxrQkFBQ0MsQ0FBRCxFQUFPO0FBQ2ZBLE9BQUMsQ0FBQ0MsY0FBRjs7QUFFQSxVQUFJLENBQUNMLFFBQUQsSUFBYU0sS0FBSyxDQUFDQyxRQUFRLENBQUNQLFFBQUQsQ0FBVCxDQUF0QixFQUE0QztBQUMxQyxlQUFPRyxRQUFRLENBQUMsMkJBQUQsQ0FBZjtBQUNEOztBQUVETCxlQUFRLENBQUM7QUFDUEUsZ0JBQVEsRUFBRU8sUUFBUSxDQUFDUCxRQUFELENBRFg7QUFFUEgsZ0JBQVEsRUFBUkE7QUFGTyxPQUFELENBQVIsQ0FHR1csSUFISCxDQUdRLFlBQU07QUFDWlAsbUJBQVcsQ0FBQyxFQUFELENBQVg7QUFDQUUsZ0JBQVEsQ0FBQyxFQUFELENBQVI7QUFDRCxPQU5EO0FBT0QsS0FoQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWtCRTtBQUFHLGFBQVMsOEJBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9OLFFBQVAsQ0FEWCwwQkFsQkYsRUFxQkU7QUFDRSxRQUFJLFFBRE47QUFFRSxhQUFTLGFBRlg7QUFHRSxNQUFFLEVBQUVBLFFBSE47QUFJRSxTQUFLLEVBQUVHLFFBSlQ7QUFLRSxlQUFXLGlCQUxiO0FBTUUsWUFBUSxFQUFFLGtCQUFDSSxDQUFEO0FBQUEsYUFBT0gsV0FBVyxDQUFDRyxDQUFDLENBQUNLLE1BQUYsQ0FBU0MsS0FBVixDQUFsQjtBQUFBLEtBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJCRixFQTZCRTtBQUFHLGFBQVMsRUFBQyx1Q0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNEUixLQUF0RCxDQTdCRixDQURGO0FBaUNELENBckNEOztHQUFNTixJOztLQUFBQSxJO0FBdUNTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMmI1OWM0MDI1ZjFkZTA5ODA4NmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIEZvcm1Qcm9wcyB7XHJcbiAgYWN0aXZpdHk6IHN0cmluZztcclxuICBvblN1Ym1pdDogKHsgYWN0aXZpdHk6IHN0cmluZywgZGlzdGFuY2U6IG51bWJlciB9KSA9PiBQcm9taXNlPGFueT47XHJcbn1cclxuXHJcbmNvbnN0IEZvcm0gPSAoeyBhY3Rpdml0eSwgb25TdWJtaXQgfSkgPT4ge1xyXG4gIGNvbnN0IFtkaXN0YW5jZSwgc2V0RGlzdGFuY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtXHJcbiAgICAgIGNsYXNzTmFtZT17YGNvbCBtNiBwdXNoLW0zYH1cclxuICAgICAgb25TdWJtaXQ9eyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoIWRpc3RhbmNlIHx8IGlzTmFOKHBhcnNlSW50KGRpc3RhbmNlKSkpIHtcclxuICAgICAgICAgIHJldHVybiBzZXRFcnJvcihcIkRpc3RhbmNlIG11c3QgYmUgYSBudW1iZXJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvblN1Ym1pdCh7XHJcbiAgICAgICAgICBkaXN0YW5jZTogcGFyc2VJbnQoZGlzdGFuY2UpLFxyXG4gICAgICAgICAgYWN0aXZpdHksXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBzZXREaXN0YW5jZShcIlwiKTtcclxuICAgICAgICAgIHNldEVycm9yKFwiXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8cCBjbGFzc05hbWU9e2BmbG93LXRleHQgZ3JleS10ZXh0IGNlbnRlcmB9PlxyXG4gICAgICAgIEhvdyBtdWNoIDxzcGFuPnthY3Rpdml0eX08L3NwYW4+IGhhdmUgeW91IGRvbmUgdG9kYXk/XHJcbiAgICAgIDwvcD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT17YHRleHRgfVxyXG4gICAgICAgIGNsYXNzTmFtZT17YGdyZXktdGV4dGB9XHJcbiAgICAgICAgaWQ9e2FjdGl2aXR5fVxyXG4gICAgICAgIHZhbHVlPXtkaXN0YW5jZX1cclxuICAgICAgICBwbGFjZWhvbGRlcj17YERpc3RhbmNlIGluIG1gfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGlzdGFuY2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAvPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJjZW50ZXIgcGluay10ZXh0IGVycm9yIHRleHQtbGlnaHRlbi0xXCI+e2Vycm9yfTwvcD5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==