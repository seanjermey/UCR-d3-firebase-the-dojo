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

  var line = d3__WEBPACK_IMPORTED_MODULE_1__["line"]().x(function (d) {
    return scales.x(new Date(d.date));
  }).y(function (d) {
    return scales.y(d.distance);
  }); // define update function

  var update = function update(data) {
    var circles = d3__WEBPACK_IMPORTED_MODULE_1__["select"](graph.ref.current).selectAll("circle").data(data); // set scale domains

    scales.x.domain(d3__WEBPACK_IMPORTED_MODULE_1__["extent"](data, function (d) {
      return new Date(d.date);
    }));
    scales.y.domain([0, d3__WEBPACK_IMPORTED_MODULE_1__["max"](data, function (d) {
      return d.distance;
    })]); // set exit points

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
      lineNumber: 92,
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
      lineNumber: 97,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: axis.x.ref,
    className: "graph-axis graph-axis-x",
    transform: "translate(".concat(margin.left, ", ").concat(graph.height + margin.top, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: axis.y.ref,
    className: "graph-axis graph-axis-y",
    transform: "translate(".concat(margin.left, ", ").concat(margin.top, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dyYXBoLnRzeCJdLCJuYW1lcyI6WyJHcmFwaCIsImRhdGEiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJncmFwaCIsInJlZiIsInVzZVJlZiIsInNjYWxlcyIsIngiLCJkMyIsInJhbmdlIiwieSIsImF4aXMiLCJ0aWNrcyIsImZvcm1hdCIsImQiLCJsaW5lIiwiRGF0ZSIsImRhdGUiLCJkaXN0YW5jZSIsInVwZGF0ZSIsImNpcmNsZXMiLCJjdXJyZW50Iiwic2VsZWN0QWxsIiwiZG9tYWluIiwiZXhpdCIsInJlbW92ZSIsImF0dHIiLCJlbnRlciIsImFwcGVuZCIsImNhbGwiLCJ0aWNrRm9ybWF0IiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFxQkEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FJSTtBQUFBOztBQUFBLE1BSGhCQyxJQUdnQixRQUhoQkEsSUFHZ0I7QUFBQSw2QkFGaEJDLFVBRWdCO0FBQUEsTUFGaEJBLFVBRWdCLGdDQUZIO0FBQUVDLFNBQUssRUFBRSxHQUFUO0FBQWNDLFVBQU0sRUFBRTtBQUF0QixHQUVHO0FBQUEseUJBRGhCQyxNQUNnQjtBQUFBLE1BRGhCQSxNQUNnQiw0QkFEUDtBQUFFQyxPQUFHLEVBQUUsRUFBUDtBQUFXQyxTQUFLLEVBQUUsRUFBbEI7QUFBc0JDLFVBQU0sRUFBRSxFQUE5QjtBQUFrQ0MsUUFBSSxFQUFFO0FBQXhDLEdBQ087QUFDaEI7QUFDQSxNQUFNQyxLQUFLLEdBQUc7QUFDWlAsU0FBSyxFQUFFRCxVQUFVLENBQUNDLEtBQVgsR0FBbUJFLE1BQU0sQ0FBQ0ksSUFBMUIsR0FBaUNKLE1BQU0sQ0FBQ0UsS0FEbkM7QUFFWkgsVUFBTSxFQUFFRixVQUFVLENBQUNFLE1BQVgsR0FBb0JDLE1BQU0sQ0FBQ0MsR0FBM0Is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QUFDSSxJQUF0QixlQUErQkosTUFBTSxDQUFDQyxHQUF0QyxNQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQVlFO0FBQ0UsT0FBRyxFQUFFWSxJQUFJLENBQUNKLENBQUwsQ0FBT0gsR0FEZDtBQUVFLGFBQVMsMkJBRlg7QUFHRSxhQUFTLHNCQUFlTixNQUFNLENBQUNJLElBQXRCLGVBQStCQyxLQUFLLENBQUNOLE1BQU4sR0FBZUMsTUFBTSxDQUFDQyxHQUFyRCxNQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixFQWlCRTtBQUNFLE9BQUcsRUFBRVksSUFBSSxDQUFDRCxDQUFMLENBQU9OLEdBRGQ7QUFFRSxhQUFTLDJCQUZYO0FBR0UsYUFBUyxzQkFBZU4sTUFBTSxDQUFDSSxJQUF0QixlQUErQkosTUFBTSxDQUFDQyxHQUF0QyxNQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkYsQ0FERjtBQXlCRCxDQTdGRDs7R0FBTU4sSzs7S0FBQUEsSztBQStGU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjI5NGMxZjE4MjQwZGY0NGZhYTk2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuXG5pbnRlcmZhY2UgRGF0YSB7XG4gIGRhdGU6IHN0cmluZztcbiAgZGlzdGFuY2U6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIEdyYXBoUHJvcHMge1xuICBkYXRhOiBEYXRhW107XG4gIGRpbWVuc2lvbnM/OiB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgfTtcbiAgbWFyZ2luPzoge1xuICAgIHRvcDogbnVtYmVyO1xuICAgIHJpZ2h0OiBudW1iZXI7XG4gICAgYm90dG9tOiBudW1iZXI7XG4gICAgbGVmdDogbnVtYmVyO1xuICB9O1xufVxuXG5jb25zdCBHcmFwaCA9ICh7XG4gIGRhdGEsXG4gIGRpbWVuc2lvbnMgPSB7IHdpZHRoOiA1NjAsIGhlaWdodDogNDAwIH0sXG4gIG1hcmdpbiA9IHsgdG9wOiA0MCwgcmlnaHQ6IDIwLCBib3R0b206IDUwLCBsZWZ0OiAxMDAgfSxcbn06IEdyYXBoUHJvcHMpID0+IHtcbiAgLy8gZGVmaW5lIGdyYXBoXG4gIGNvbnN0IGdyYXBoID0ge1xuICAgIHdpZHRoOiBkaW1lbnNpb25zLndpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQsXG4gICAgaGVpZ2h0OiBkaW1lbnNpb25zLmhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tLFxuICAgIHJlZjogdXNlUmVmKCksXG4gIH07XG5cbiAgLy8gZGVmaW5lIHNjYWxlc1xuICBjb25zdCBzY2FsZXMgPSB7XG4gICAgeDogZDMuc2NhbGVUaW1lKCkucmFuZ2UoWzAsIGdyYXBoLndpZHRoXSksXG4gICAgeTogZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbZ3JhcGguaGVpZ2h0LCAwXSksXG4gIH07XG5cbiAgLy8gZGVmaW5lIGF4aXNcbiAgY29uc3QgYXhpcyA9IHtcbiAgICB4OiB7IHJlZjogdXNlUmVmKCksIHRpY2tzOiA0LCBmb3JtYXQ6IGQzLnRpbWVGb3JtYXQoYCViICVkYCkgfSxcbiAgICB5OiB7IHJlZjogdXNlUmVmKCksIHRpY2tzOiA0LCBmb3JtYXQ6IChkKSA9PiBgJHtkfW1gIH0sXG4gIH07XG5cbiAgLy8gZGVmaW5lIGxpbmVcbiAgY29uc3QgbGluZSA9IGQzXG4gICAgLmxpbmUoKVxuICAgIC54KChkOiBEYXRhKSA9PiBzY2FsZXMueChuZXcgRGF0ZShkLmRhdGUpKSlcbiAgICAueSgoZDogRGF0YSkgPT4gc2NhbGVzLnkoZC5kaXN0YW5jZSkpO1xuXG4gIC8vIGRlZmluZSB1cGRhdGUgZnVuY3Rpb25cbiAgY29uc3QgdXBkYXRlID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCBjaXJjbGVzID0gZDMuc2VsZWN0KGdyYXBoLnJlZi5jdXJyZW50KS5zZWxlY3RBbGwoXCJjaXJjbGVcIikuZGF0YShkYXRhKTtcblxuICAgIC8vIHNldCBzY2FsZSBkb21haW5zXG4gICAgc2NhbGVzLnguZG9tYWluKGQzLmV4dGVudChkYXRhLCAoZDogRGF0YSkgPT4gbmV3IERhdGUoZC5kYXRlKSkpO1xuICAgIHNjYWxlcy55LmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIChkOiBEYXRhKSA9PiBkLmRpc3RhbmNlKV0pO1xuXG4gICAgLy8gc2V0IGV4aXQgcG9pbnRzXG4gICAgY2lyY2xlcy5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICAvLyBzZXQgdXBkYXRlIHBvaW50c1xuICAgIGNpcmNsZXNcbiAgICAgIC5hdHRyKFwiY3hcIiwgKGQ6IERhdGEpID0+IHNjYWxlcy54KG5ldyBEYXRlKGQuZGF0ZSkpKVxuICAgICAgLmF0dHIoXCJjeVwiLCAoZDogRGF0YSkgPT4gc2NhbGVzLnkoZC5kaXN0YW5jZSkpO1xuXG4gICAgLy8gc2V0IGVudGVyIHBvaW50c1xuICAgIGNpcmNsZXNcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAuYXR0cihcInJcIiwgNClcbiAgICAgIC5hdHRyKFwiY3hcIiwgKGQ6IERhdGEpID0+IHNjYWxlcy54KG5ldyBEYXRlKGQuZGF0ZSkpKVxuICAgICAgLmF0dHIoXCJjeVwiLCAoZDogRGF0YSkgPT4gc2NhbGVzLnkoZC5kaXN0YW5jZSkpXG4gICAgICAuYXR0cihcImZpbGxcIiwgXCIjY2NjXCIpO1xuXG4gICAgLy8gc2V0IGF4aXNcbiAgICBkMy5zZWxlY3QoYXhpcy54LnJlZi5jdXJyZW50KS5jYWxsKFxuICAgICAgZDMuYXhpc0JvdHRvbShzY2FsZXMueCkudGlja3MoYXhpcy54LnRpY2tzKS50aWNrRm9ybWF0KGF4aXMueC5mb3JtYXQpXG4gICAgKTtcbiAgICBkMy5zZWxlY3QoYXhpcy55LnJlZi5jdXJyZW50KS5jYWxsKFxuICAgICAgZDMuYXhpc0xlZnQoc2NhbGVzLnkpLnRpY2tzKGF4aXMueS50aWNrcykudGlja0Zvcm1hdChheGlzLnkuZm9ybWF0KVxuICAgICk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1cGRhdGUoZGF0YSk7XG4gIH0sIFtkYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD17ZGltZW5zaW9ucy53aWR0aH1cbiAgICAgIGhlaWdodD17ZGltZW5zaW9ucy5oZWlnaHR9XG4gICAgICBjbGFzc05hbWU9e2BncmFwaGB9XG4gICAgPlxuICAgICAgPGdcbiAgICAgICAgcmVmPXtncmFwaC5yZWZ9XG4gICAgICAgIGNsYXNzTmFtZT17YGdyYXBoLWJvZHlgfVxuICAgICAgICB3aWR0aD17Z3JhcGgud2lkdGh9XG4gICAgICAgIGhlaWdodD17Z3JhcGguaGVpZ2h0fVxuICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sICR7bWFyZ2luLnRvcH0pYH1cbiAgICAgIC8+XG4gICAgICA8Z1xuICAgICAgICByZWY9e2F4aXMueC5yZWZ9XG4gICAgICAgIGNsYXNzTmFtZT17YGdyYXBoLWF4aXMgZ3JhcGgtYXhpcy14YH1cbiAgICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCAke2dyYXBoLmhlaWdodCArIG1hcmdpbi50b3B9KWB9XG4gICAgICAvPlxuICAgICAgPGdcbiAgICAgICAgcmVmPXtheGlzLnkucmVmfVxuICAgICAgICBjbGFzc05hbWU9e2BncmFwaC1heGlzIGdyYXBoLWF4aXMteWB9XG4gICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwgJHttYXJnaW4udG9wfSlgfVxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXBoO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==