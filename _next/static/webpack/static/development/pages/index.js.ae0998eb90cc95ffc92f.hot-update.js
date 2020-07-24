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
  }; // define update function

  var update = function update(data) {
    var paths = d3__WEBPACK_IMPORTED_MODULE_1__["select"](graph.ref.current).selectAll("path").data(data); // set scale domains

    scales.x.domain(d3__WEBPACK_IMPORTED_MODULE_1__["extent"](data, function (d) {
      return new Date(d.date);
    }));
    scales.y.domain([0, d3__WEBPACK_IMPORTED_MODULE_1__["max"](data, function (d) {
      return d.distance;
    })]); // set axis

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
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx("g", {
    ref: axis.x.ref,
    className: "graph-axis graph-axis-x",
    transform: "translate(".concat(margin.left, ", ").concat(graph.height, ")"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dyYXBoLnRzeCJdLCJuYW1lcyI6WyJHcmFwaCIsImRhdGEiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJncmFwaCIsInJlZiIsInVzZVJlZiIsInNjYWxlcyIsIngiLCJkMyIsInJhbmdlIiwieSIsImF4aXMiLCJ0aWNrcyIsImZvcm1hdCIsImQiLCJ1cGRhdGUiLCJwYXRocyIsImN1cnJlbnQiLCJzZWxlY3RBbGwiLCJkb21haW4iLCJEYXRlIiwiZGF0ZSIsImRpc3RhbmNlIiwiY2FsbCIsInRpY2tGb3JtYXQiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQXFCQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUlJO0FBQUE7O0FBQUEsTUFIaEJDLElBR2dCLFFBSGhCQSxJQUdnQjtBQUFBLDZCQUZoQkMsVUFFZ0I7QUFBQSxNQUZoQkEsVUFFZ0IsZ0NBRkg7QUFBRUMsU0FBSyxFQUFFLEdBQVQ7QUFBY0MsVUFBTSxFQUFFO0FBQXRCLEdBRUc7QUFBQSx5QkFEaEJDLE1BQ2dCO0FBQUEsTUFEaEJBLE1BQ2dCLDRCQURQO0FBQUVDLE9BQUcsRUFBRSxFQUFQO0FBQVdDLFNBQUssRUFBRSxFQUFsQjtBQUFzQkMsVUFBTSxFQUFFLEVBQTlCO0FBQWtDQyxRQUFJLEVBQUU7QUFBeEMsR0FDTztBQUNoQjtBQUNBLE1BQU1DLEtBQUssR0FBRztBQUNaUCxTQUFLLEVBQUVELFVBQVUsQ0FBQ0MsS0FBWCxHQUFtQkUsTUFBTSxDQUFDSSxJQUExQixHQUFpQ0osTUFBTSxDQUFDRSxLQURuQztBQUVaSCxVQUFNLEVBQUVGLFVBQVUsQ0FBQ0UsTUFBWCxHQUFvQkMsTUFBTSxDQUFDQyxHQUEzQixHQUFpQ0QsTUFBTSxDQUFDRyxNQUZwQztBQUdaRyxPQUFHLEVBQUVDLG9EQUFNO0FB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SSxDQUFDRCxDQUFMLENBQU9OLEdBQWY7QUFBb0IsYUFBUywyQkFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRixDQURGO0FBb0JELENBakVEOztHQUFNWCxLOztLQUFBQSxLO0FBbUVTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYWUwOTk4ZWI5MGNjOTVmZmM5MmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5cbmludGVyZmFjZSBEYXRhIHtcbiAgZGF0ZTogc3RyaW5nO1xuICBkaXN0YW5jZTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgR3JhcGhQcm9wcyB7XG4gIGRhdGE6IERhdGFbXTtcbiAgZGltZW5zaW9ucz86IHtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICB9O1xuICBtYXJnaW4/OiB7XG4gICAgdG9wOiBudW1iZXI7XG4gICAgcmlnaHQ6IG51bWJlcjtcbiAgICBib3R0b206IG51bWJlcjtcbiAgICBsZWZ0OiBudW1iZXI7XG4gIH07XG59XG5cbmNvbnN0IEdyYXBoID0gKHtcbiAgZGF0YSxcbiAgZGltZW5zaW9ucyA9IHsgd2lkdGg6IDU2MCwgaGVpZ2h0OiA0MDAgfSxcbiAgbWFyZ2luID0geyB0b3A6IDQwLCByaWdodDogMjAsIGJvdHRvbTogNTAsIGxlZnQ6IDEwMCB9LFxufTogR3JhcGhQcm9wcykgPT4ge1xuICAvLyBkZWZpbmUgZ3JhcGhcbiAgY29uc3QgZ3JhcGggPSB7XG4gICAgd2lkdGg6IGRpbWVuc2lvbnMud2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodCxcbiAgICBoZWlnaHQ6IGRpbWVuc2lvbnMuaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b20sXG4gICAgcmVmOiB1c2VSZWYoKSxcbiAgfTtcblxuICAvLyBkZWZpbmUgc2NhbGVzXG4gIGNvbnN0IHNjYWxlcyA9IHtcbiAgICB4OiBkMy5zY2FsZVRpbWUoKS5yYW5nZShbMCwgZ3JhcGgud2lkdGhdKSxcbiAgICB5OiBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtncmFwaC5oZWlnaHQsIDBdKSxcbiAgfTtcblxuICAvLyBkZWZpbmUgYXhpc1xuICBjb25zdCBheGlzID0ge1xuICAgIHg6IHsgcmVmOiB1c2VSZWYoKSwgdGlja3M6IDQsIGZvcm1hdDogZDMudGltZUZvcm1hdChgJWIgJWRgKSB9LFxuICAgIHk6IHsgcmVmOiB1c2VSZWYoKSwgdGlja3M6IDQsIGZvcm1hdDogKGQpID0+IGAke2R9bWAgfSxcbiAgfTtcblxuICAvLyBkZWZpbmUgdXBkYXRlIGZ1bmN0aW9uXG4gIGNvbnN0IHVwZGF0ZSA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgcGF0aHMgPSBkMy5zZWxlY3QoZ3JhcGgucmVmLmN1cnJlbnQpLnNlbGVjdEFsbChcInBhdGhcIikuZGF0YShkYXRhKTtcblxuICAgIC8vIHNldCBzY2FsZSBkb21haW5zXG4gICAgc2NhbGVzLnguZG9tYWluKGQzLmV4dGVudChkYXRhLCAoZDogRGF0YSkgPT4gbmV3IERhdGUoZC5kYXRlKSkpO1xuICAgIHNjYWxlcy55LmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIChkOiBEYXRhKSA9PiBkLmRpc3RhbmNlKV0pO1xuXG4gICAgLy8gc2V0IGF4aXNcbiAgICBkMy5zZWxlY3QoYXhpcy54LnJlZi5jdXJyZW50KS5jYWxsKFxuICAgICAgZDMuYXhpc0JvdHRvbShzY2FsZXMueCkudGlja3MoYXhpcy54LnRpY2tzKS50aWNrRm9ybWF0KGF4aXMueC5mb3JtYXQpXG4gICAgKTtcbiAgICBkMy5zZWxlY3QoYXhpcy55LnJlZi5jdXJyZW50KS5jYWxsKFxuICAgICAgZDMuYXhpc0xlZnQoc2NhbGVzLnkpLnRpY2tzKGF4aXMueS50aWNrcykudGlja0Zvcm1hdChheGlzLnkuZm9ybWF0KVxuICAgICk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1cGRhdGUoZGF0YSk7XG4gIH0sIFtkYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD17ZGltZW5zaW9ucy53aWR0aH1cbiAgICAgIGhlaWdodD17ZGltZW5zaW9ucy5oZWlnaHR9XG4gICAgICBjbGFzc05hbWU9e2BncmFwaGB9XG4gICAgPlxuICAgICAgey8qPGcqL31cbiAgICAgIHsvKiAgcmVmPXtncmFwaC5yZWZ9Ki99XG4gICAgICB7LyogIHdpZHRoPXtncmFwaC53aWR0aH0qL31cbiAgICAgIHsvKiAgaGVpZ2h0PXtncmFwaC5oZWlnaHR9Ki99XG4gICAgICB7LyogIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwgJHttYXJnaW4udG9wfSlgfSovfVxuICAgICAgey8qLz4qL31cbiAgICAgIDxnXG4gICAgICAgIHJlZj17YXhpcy54LnJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtgZ3JhcGgtYXhpcyBncmFwaC1heGlzLXhgfVxuICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sICR7Z3JhcGguaGVpZ2h0fSlgfVxuICAgICAgLz5cbiAgICAgIDxnIHJlZj17YXhpcy55LnJlZn0gY2xhc3NOYW1lPXtgZ3JhcGgtYXhpcyBncmFwaC1heGlzLXlgfSAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JhcGg7XG4iXSwic291cmNlUm9vdCI6IiJ9