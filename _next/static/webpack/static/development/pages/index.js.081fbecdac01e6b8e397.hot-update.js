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
      ticks: 4,
      format: d3__WEBPACK_IMPORTED_MODULE_1__["timeFormat"]("%b %d")
    },
    y: {
      ref: Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(),
      ticks: 4,
      format: function format(d) {
        return "".concat(d, "m");
      }
    }
  }; // define line

  var line = {
    ref: Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(),
    d: d3__WEBPACK_IMPORTED_MODULE_1__["line"]().x(function (d) {
      return scales.x(new Date(d.date));
    }).y(function (d) {
      return scales.y(d.distance);
    })
  }; // define update function

  var update = function update(data) {
    // set scale domains
    scales.x.domain(d3__WEBPACK_IMPORTED_MODULE_1__["extent"](data, function (d) {
      return new Date(d.date);
    }));
    scales.y.domain([0, d3__WEBPACK_IMPORTED_MODULE_1__["max"](data, function (d) {
      return d.distance;
    })]); // set line points

    d3__WEBPACK_IMPORTED_MODULE_1__["select"](line.ref.current).data([data]).attr("fill", "none").attr("stroke", "#00bfa5").attr("stroke-width", 2).attr("d", line.d);
    var circles = d3__WEBPACK_IMPORTED_MODULE_1__["select"](graph.ref.current).selectAll("circle").data(data); // set exit points

    circles.exit().remove(); // set update points

    circles.attr("cx", function (d) {
      return scales.x(new Date(d.date));
    }).attr("cy", function (d) {
      return scales.y(d.distance);
    }); // set enter points

    circles.enter().append("circle").attr("r", 4).attr("cx", function (d) {
      return scales.x(new Date(d.date));
    }).attr("cy", function (d) {
      return scales.y(d.distance);
    }).attr("fill", "#ccc"); // set axis

    d3__WEBPACK_IMPORTED_MODULE_1__["select"](axis.x.ref.current).call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](scales.x).ticks(axis.x.ticks).tickFormat(axis.x.format));
    d3__WEBPACK_IMPORTED_MODULE_1__["select"](axis.y.ref.current).call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](scales.y).ticks(axis.y.ticks).tickFormat(axis.y.format));
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
      lineNumber: 103,
      columnNumber: 5
    }
  }, __jsx("g", {
    ref: graph.ref,
    className: "graph-body",
    width: graph.width,
    height: graph.height,
    transform: "translate(".concat(margin.left, ", ").concat(margin.top, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, __jsx("path", {
    ref: line.ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  })), __jsx("g", {
    ref: axis.x.ref,
    className: "graph-axis graph-axis-x",
    transform: "translate(".concat(margin.left, ", ").concat(graph.height + margin.top, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: axis.y.ref,
    className: "graph-axis graph-axis-y",
    transform: "translate(".concat(margin.left, ", ").concat(margin.top, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }));
};

_s(Graph, "fJ0fTaWyjtBgMxV0UoUHiXAAp3U=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dyYXBoLnRzeCJdLCJuYW1lcyI6WyJHcmFwaCIsImRhdGEiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJncmFwaCIsInJlZiIsInVzZVJlZiIsInNjYWxlcyIsIngiLCJkMyIsInJhbmdlIiwieSIsImF4aXMiLCJ0aWNrcyIsImZvcm1hdCIsImQiLCJsaW5lIiwiRGF0ZSIsImRhdGUiLCJkaXN0YW5jZSIsInVwZGF0ZSIsImRvbWFpbiIsImN1cnJlbnQiLCJhdHRyIiwiY2lyY2xlcyIsInNlbGVjdEFsbCIsImV4aXQiLCJyZW1vdmUiLCJlbnRlciIsImFwcGVuZCIsImNhbGwiLCJ0aWNrRm9ybWF0IiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFxQkEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FJSTtBQUFBOztBQUFBLE1BSGhCQyxJQUdnQixRQUhoQkEsSUFHZ0I7QUFBQSw2QkFGaEJDLFVBRWdCO0FBQUEsTUFGaEJBLFVBRWdCLGdDQUZIO0FBQUVDLFNBQUssRUFBRSxHQUFUO0FBQWNDLFVBQU0sRUFBRTtBQUF0QixHQUVHO0FBQUEseUJBRGhCQyxNQUNnQjtBQUFBLE1BRGhCQSxNQUNnQiw0QkFEUDtBQUFFQyxPQUFHLEVBQUUsRUFBUDtBQUFXQyxTQUFLLEVBQUUsRUFBbEI7QUFBc0JDLFVBQU0sRUFBRSxFQUE5QjtBQUFrQ0MsUUFBSSxFQUFFO0FBQXhDLEdBQ087QUFDaEI7QUFDQSxNQUFNQyxLQUFLLEdBQUc7QUFDWlAsU0FBSyxFQUFFRCxVQUFVLENBQUNDLEtBQVgsR0FBbUJFLE1BQU0sQ0FBQ0ksSUFBMUIsR0FBaUNKLE1BQU0sQ0FBQ0UsS0FEbkM7QUFFWkgsVUFBTSxFQUFFRixVQUFVLENBQUNFLE1BQVgsR0FBb0JDLE1BQU0sQ0FBQ0MsR0FBM0Is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ZXguanMuMDgxZmJlY2RhYzAxZTZiOGUzOTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5cbmludGVyZmFjZSBEYXRhIHtcbiAgZGF0ZTogc3RyaW5nO1xuICBkaXN0YW5jZTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgR3JhcGhQcm9wcyB7XG4gIGRhdGE6IERhdGFbXTtcbiAgZGltZW5zaW9ucz86IHtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICB9O1xuICBtYXJnaW4/OiB7XG4gICAgdG9wOiBudW1iZXI7XG4gICAgcmlnaHQ6IG51bWJlcjtcbiAgICBib3R0b206IG51bWJlcjtcbiAgICBsZWZ0OiBudW1iZXI7XG4gIH07XG59XG5cbmNvbnN0IEdyYXBoID0gKHtcbiAgZGF0YSxcbiAgZGltZW5zaW9ucyA9IHsgd2lkdGg6IDU2MCwgaGVpZ2h0OiA0MDAgfSxcbiAgbWFyZ2luID0geyB0b3A6IDQwLCByaWdodDogMjAsIGJvdHRvbTogNTAsIGxlZnQ6IDEwMCB9LFxufTogR3JhcGhQcm9wcykgPT4ge1xuICAvLyBkZWZpbmUgZ3JhcGhcbiAgY29uc3QgZ3JhcGggPSB7XG4gICAgd2lkdGg6IGRpbWVuc2lvbnMud2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodCxcbiAgICBoZWlnaHQ6IGRpbWVuc2lvbnMuaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b20sXG4gICAgcmVmOiB1c2VSZWYoKSxcbiAgfTtcblxuICAvLyBkZWZpbmUgc2NhbGVzXG4gIGNvbnN0IHNjYWxlcyA9IHtcbiAgICB4OiBkMy5zY2FsZVRpbWUoKS5yYW5nZShbMCwgZ3JhcGgud2lkdGhdKSxcbiAgICB5OiBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtncmFwaC5oZWlnaHQsIDBdKSxcbiAgfTtcblxuICAvLyBkZWZpbmUgYXhpc1xuICBjb25zdCBheGlzID0ge1xuICAgIHg6IHsgcmVmOiB1c2VSZWYoKSwgdGlja3M6IDQsIGZvcm1hdDogZDMudGltZUZvcm1hdChgJWIgJWRgKSB9LFxuICAgIHk6IHsgcmVmOiB1c2VSZWYoKSwgdGlja3M6IDQsIGZvcm1hdDogKGQpID0+IGAke2R9bWAgfSxcbiAgfTtcblxuICAvLyBkZWZpbmUgbGluZVxuICBjb25zdCBsaW5lID0ge1xuICAgIHJlZjogdXNlUmVmKCksXG4gICAgZDogZDNcbiAgICAgIC5saW5lPERhdGE+KClcbiAgICAgIC54KChkKSA9PiBzY2FsZXMueChuZXcgRGF0ZShkLmRhdGUpKSlcbiAgICAgIC55KChkKSA9PiBzY2FsZXMueShkLmRpc3RhbmNlKSksXG4gIH07XG5cbiAgLy8gZGVmaW5lIHVwZGF0ZSBmdW5jdGlvblxuICBjb25zdCB1cGRhdGUgPSAoZGF0YSkgPT4ge1xuICAgIC8vIHNldCBzY2FsZSBkb21haW5zXG4gICAgc2NhbGVzLnguZG9tYWluKGQzLmV4dGVudChkYXRhLCAoZDogRGF0YSkgPT4gbmV3IERhdGUoZC5kYXRlKSkpO1xuICAgIHNjYWxlcy55LmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIChkOiBEYXRhKSA9PiBkLmRpc3RhbmNlKV0pO1xuXG4gICAgLy8gc2V0IGxpbmUgcG9pbnRzXG4gICAgZDMuc2VsZWN0KGxpbmUucmVmLmN1cnJlbnQpXG4gICAgICAuZGF0YShbZGF0YV0pXG4gICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAuYXR0cihcInN0cm9rZVwiLCBcIiMwMGJmYTVcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIpXG4gICAgICAuYXR0cihcImRcIiwgbGluZS5kKTtcblxuICAgIGNvbnN0IGNpcmNsZXMgPSBkMy5zZWxlY3QoZ3JhcGgucmVmLmN1cnJlbnQpLnNlbGVjdEFsbChcImNpcmNsZVwiKS5kYXRhKGRhdGEpO1xuXG4gICAgLy8gc2V0IGV4aXQgcG9pbnRzXG4gICAgY2lyY2xlcy5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICAvLyBzZXQgdXBkYXRlIHBvaW50c1xuICAgIGNpcmNsZXNcbiAgICAgIC5hdHRyKFwiY3hcIiwgKGQ6IERhdGEpID0+IHNjYWxlcy54KG5ldyBEYXRlKGQuZGF0ZSkpKVxuICAgICAgLmF0dHIoXCJjeVwiLCAoZDogRGF0YSkgPT4gc2NhbGVzLnkoZC5kaXN0YW5jZSkpO1xuXG4gICAgLy8gc2V0IGVudGVyIHBvaW50c1xuICAgIGNpcmNsZXNcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAuYXR0cihcInJcIiwgNClcbiAgICAgIC5hdHRyKFwiY3hcIiwgKGQ6IERhdGEpID0+IHNjYWxlcy54KG5ldyBEYXRlKGQuZGF0ZSkpKVxuICAgICAgLmF0dHIoXCJjeVwiLCAoZDogRGF0YSkgPT4gc2NhbGVzLnkoZC5kaXN0YW5jZSkpXG4gICAgICAuYXR0cihcImZpbGxcIiwgXCIjY2NjXCIpO1xuXG4gICAgLy8gc2V0IGF4aXNcbiAgICBkMy5zZWxlY3QoYXhpcy54LnJlZi5jdXJyZW50KS5jYWxsKFxuICAgICAgZDMuYXhpc0JvdHRvbShzY2FsZXMueCkudGlja3MoYXhpcy54LnRpY2tzKS50aWNrRm9ybWF0KGF4aXMueC5mb3JtYXQpXG4gICAgKTtcbiAgICBkMy5zZWxlY3QoYXhpcy55LnJlZi5jdXJyZW50KS5jYWxsKFxuICAgICAgZDMuYXhpc0xlZnQoc2NhbGVzLnkpLnRpY2tzKGF4aXMueS50aWNrcykudGlja0Zvcm1hdChheGlzLnkuZm9ybWF0KVxuICAgICk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1cGRhdGUoZGF0YSk7XG4gIH0sIFtkYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD17ZGltZW5zaW9ucy53aWR0aH1cbiAgICAgIGhlaWdodD17ZGltZW5zaW9ucy5oZWlnaHR9XG4gICAgICBjbGFzc05hbWU9e2BncmFwaGB9XG4gICAgPlxuICAgICAgPGdcbiAgICAgICAgcmVmPXtncmFwaC5yZWZ9XG4gICAgICAgIGNsYXNzTmFtZT17YGdyYXBoLWJvZHlgfVxuICAgICAgICB3aWR0aD17Z3JhcGgud2lkdGh9XG4gICAgICAgIGhlaWdodD17Z3JhcGguaGVpZ2h0fVxuICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sICR7bWFyZ2luLnRvcH0pYH1cbiAgICAgID5cbiAgICAgICAgPHBhdGggcmVmPXtsaW5lLnJlZn0gLz5cbiAgICAgIDwvZz5cbiAgICAgIDxnXG4gICAgICAgIHJlZj17YXhpcy54LnJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtgZ3JhcGgtYXhpcyBncmFwaC1heGlzLXhgfVxuICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sICR7Z3JhcGguaGVpZ2h0ICsgbWFyZ2luLnRvcH0pYH1cbiAgICAgIC8+XG4gICAgICA8Z1xuICAgICAgICByZWY9e2F4aXMueS5yZWZ9XG4gICAgICAgIGNsYXNzTmFtZT17YGdyYXBoLWF4aXMgZ3JhcGgtYXhpcy15YH1cbiAgICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCAke21hcmdpbi50b3B9KWB9XG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JhcGg7XG4iXSwic291cmNlUm9vdCI6IiJ9