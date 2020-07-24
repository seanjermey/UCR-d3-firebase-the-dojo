webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/graph.tsx":
/*!******************************!*\
  !*** ./components/graph.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Courses\\build-data-uis-with-d3-firebase\\the-dojo\\components\\graph.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Graph = function Graph(_ref) {
  _s();

  var data = _ref.data,
      _ref$dimensions = _ref.dimensions,
      dimensions = _ref$dimensions === void 0 ? {
    width: 560,
    height: 400
  } : _ref$dimensions,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? {
    top: 40,
    right: 20,
    bottom: 50,
    left: 100
  } : _ref$margin;
  // define graph
  var graph = {
    width: dimensions.width - margin.left - margin.right,
    height: dimensions.height - margin.top - margin.bottom,
    ref: Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])()
  }; // define scales

  var scales = {
    x: d3__WEBPACK_IMPORTED_MODULE_1__["scaleTime"]().range([0, graph.width]),
    y: d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().range([graph.height, 0])
  }; // define axis

  var axis = {
    x: {
      ref: Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(),
      ticks: 4
    },
    y: {
      ref: Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(),
      ticks: 4
    }
  }; // define update function

  var update = function update(data) {
    var paths = d3__WEBPACK_IMPORTED_MODULE_1__["select"](graph.ref.current).selectAll("path").data(data); // set scale domains

    scales.x.domain(d3__WEBPACK_IMPORTED_MODULE_1__["extent"](data, function (d) {
      return new Date(d.date);
    }));
    scales.y.domain([0, 50]); // set axis

    d3__WEBPACK_IMPORTED_MODULE_1__["select"](axis.x.ref.current).call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](scales.x).ticks(axis.x.ticks));
    d3__WEBPACK_IMPORTED_MODULE_1__["select"](axis.y.ref.current).call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](scales.y).ticks(axis.y.ticks));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    update(data);
  }, [data]);
  return __jsx("svg", {
    width: dimensions.width,
    height: dimensions.height,
    className: "graph",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx("g", {
    ref: graph.ref,
    width: graph.width,
    height: graph.height,
    transform: "translate(".concat(margin.left, ", ").concat(margin.top, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: axis.x.ref,
    className: "graph-axis graph-axis-x",
    transform: "translate(0, ".concat(graph.height, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: axis.y.ref,
    className: "graph-axis graph-axis-y",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }));
};

_s(Graph, "gbKQKwN3j32FFJ75HNOvAiw6j8o=");

_c = Graph;
/* harmony default export */ __webpack_exports__["default"] = (Graph);

var _c;

$RefreshReg$(_c, "Graph");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dyYXBoLnRzeCJdLCJuYW1lcyI6WyJHcmFwaCIsImRhdGEiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJncmFwaCIsInJlZiIsInVzZVJlZiIsInNjYWxlcyIsIngiLCJkMyIsInJhbmdlIiwieSIsImF4aXMiLCJ0aWNrcyIsInVwZGF0ZSIsInBhdGhzIiwiY3VycmVudCIsInNlbGVjdEFsbCIsImRvbWFpbiIsImQiLCJEYXRlIiwiZGF0ZSIsImNhbGwiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQXFCQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUlJO0FBQUE7O0FBQUEsTUFIaEJDLElBR2dCLFFBSGhCQSxJQUdnQjtBQUFBLDZCQUZoQkMsVUFFZ0I7QUFBQSxNQUZoQkEsVUFFZ0IsZ0NBRkg7QUFBRUMsU0FBSyxFQUFFLEdBQVQ7QUFBY0MsVUFBTSxFQUFFO0FBQXRCLEdBRUc7QUFBQSx5QkFEaEJDLE1BQ2dCO0FBQUEsTUFEaEJBLE1BQ2dCLDRCQURQO0FBQUVDLE9BQUcsRUFBRSxFQUFQO0FBQVdDLFNBQUssRUFBRSxFQUFsQjtBQUFzQkMsVUFBTSxFQUFFLEVBQTlCO0FBQWtDQyxRQUFJLEVBQUU7QUFBeEMsR0FDTztBQUNoQjtBQUNBLE1BQU1DLEtBQUssR0FBRztBQUNaUCxTQUFLLEVBQUVELFVBQVUsQ0FBQ0MsS0FBWCxHQUFtQkUsTUFBTSxDQUFDSSxJQUExQixHQUFpQ0osTUFBTSxDQUFDRSxLQURuQztBQUVaSCxVQUFNLEVBQUVGLFVBQVUsQ0FBQ0UsTUFBWCxHQUFvQkMsTUFBTSxDQUFDQyxHQUEzQixHQUFpQ0QsTUFBTSxDQUFDRyxNQUZwQztBQUdaRyxPQUFHLEVBQUVDLG9EQUFNO0FBSEMsR0FBZCxDQUZnQixDQVFoQjs7QUFDQSxNQUFNQyxN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LEs7O0tBQUFBLEs7QUFtRVNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5hMjZmNjM0YzAwOGM5YmIwNGFkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcblxuaW50ZXJmYWNlIERhdGEge1xuICBkYXRlOiBzdHJpbmc7XG4gIGRpc3RhbmNlOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBHcmFwaFByb3BzIHtcbiAgZGF0YTogRGF0YVtdO1xuICBkaW1lbnNpb25zPzoge1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gIH07XG4gIG1hcmdpbj86IHtcbiAgICB0b3A6IG51bWJlcjtcbiAgICByaWdodDogbnVtYmVyO1xuICAgIGJvdHRvbTogbnVtYmVyO1xuICAgIGxlZnQ6IG51bWJlcjtcbiAgfTtcbn1cblxuY29uc3QgR3JhcGggPSAoe1xuICBkYXRhLFxuICBkaW1lbnNpb25zID0geyB3aWR0aDogNTYwLCBoZWlnaHQ6IDQwMCB9LFxuICBtYXJnaW4gPSB7IHRvcDogNDAsIHJpZ2h0OiAyMCwgYm90dG9tOiA1MCwgbGVmdDogMTAwIH0sXG59OiBHcmFwaFByb3BzKSA9PiB7XG4gIC8vIGRlZmluZSBncmFwaFxuICBjb25zdCBncmFwaCA9IHtcbiAgICB3aWR0aDogZGltZW5zaW9ucy53aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0LFxuICAgIGhlaWdodDogZGltZW5zaW9ucy5oZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbSxcbiAgICByZWY6IHVzZVJlZigpLFxuICB9O1xuXG4gIC8vIGRlZmluZSBzY2FsZXNcbiAgY29uc3Qgc2NhbGVzID0ge1xuICAgIHg6IGQzLnNjYWxlVGltZSgpLnJhbmdlKFswLCBncmFwaC53aWR0aF0pLFxuICAgIHk6IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoW2dyYXBoLmhlaWdodCwgMF0pLFxuICB9O1xuXG4gIC8vIGRlZmluZSBheGlzXG4gIGNvbnN0IGF4aXMgPSB7XG4gICAgeDogeyByZWY6IHVzZVJlZigpLCB0aWNrczogNCB9LFxuICAgIHk6IHsgcmVmOiB1c2VSZWYoKSwgdGlja3M6IDQgfSxcbiAgfTtcblxuICAvLyBkZWZpbmUgdXBkYXRlIGZ1bmN0aW9uXG4gIGNvbnN0IHVwZGF0ZSA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgcGF0aHMgPSBkMy5zZWxlY3QoZ3JhcGgucmVmLmN1cnJlbnQpLnNlbGVjdEFsbChcInBhdGhcIikuZGF0YShkYXRhKTtcblxuICAgIC8vIHNldCBzY2FsZSBkb21haW5zXG4gICAgc2NhbGVzLnguZG9tYWluKGQzLmV4dGVudChkYXRhLCAoZDogRGF0YSkgPT4gbmV3IERhdGUoZC5kYXRlKSkpO1xuICAgIHNjYWxlcy55LmRvbWFpbihbMCwgNTBdKTtcblxuICAgIC8vIHNldCBheGlzXG4gICAgZDMuc2VsZWN0KGF4aXMueC5yZWYuY3VycmVudCkuY2FsbChcbiAgICAgIGQzLmF4aXNCb3R0b20oc2NhbGVzLngpLnRpY2tzKGF4aXMueC50aWNrcylcbiAgICApO1xuICAgIGQzLnNlbGVjdChheGlzLnkucmVmLmN1cnJlbnQpLmNhbGwoXG4gICAgICBkMy5heGlzTGVmdChzY2FsZXMueSkudGlja3MoYXhpcy55LnRpY2tzKVxuICAgICk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1cGRhdGUoZGF0YSk7XG4gIH0sIFtkYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD17ZGltZW5zaW9ucy53aWR0aH1cbiAgICAgIGhlaWdodD17ZGltZW5zaW9ucy5oZWlnaHR9XG4gICAgICBjbGFzc05hbWU9e2BncmFwaGB9XG4gICAgPlxuICAgICAgPGdcbiAgICAgICAgcmVmPXtncmFwaC5yZWZ9XG4gICAgICAgIHdpZHRoPXtncmFwaC53aWR0aH1cbiAgICAgICAgaGVpZ2h0PXtncmFwaC5oZWlnaHR9XG4gICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwgJHttYXJnaW4udG9wfSlgfVxuICAgICAgLz5cbiAgICAgIDxnXG4gICAgICAgIHJlZj17YXhpcy54LnJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtgZ3JhcGgtYXhpcyBncmFwaC1heGlzLXhgfVxuICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoMCwgJHtncmFwaC5oZWlnaHR9KWB9XG4gICAgICAvPlxuICAgICAgPGcgcmVmPXtheGlzLnkucmVmfSBjbGFzc05hbWU9e2BncmFwaC1heGlzIGdyYXBoLWF4aXMteWB9IC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcmFwaDtcbiJdLCJzb3VyY2VSb290IjoiIn0=