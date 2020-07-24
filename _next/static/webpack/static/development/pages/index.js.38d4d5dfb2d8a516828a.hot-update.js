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
    left: 40
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
    var circles = d3__WEBPACK_IMPORTED_MODULE_1__["select"](graph.ref.current).selectAll("circle").data(data); // set scale domains

    scales.x.domain(d3__WEBPACK_IMPORTED_MODULE_1__["extent"](data, function (d) {
      return new Date(d.date);
    }));
    scales.y.domain([0, d3__WEBPACK_IMPORTED_MODULE_1__["max"](data, function (d) {
      return d.distance;
    })]); // set update points

    circles.attr("r", 4).attr("cx", function (d) {
      return scales.x(new Date(d.date));
    }).attr("cy", function (d) {
      return scales.y(d.distance);
    }).attr("fill", "#ccc"); // set enter points

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
      lineNumber: 85,
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
      lineNumber: 90,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: axis.x.ref,
    className: "graph-axis graph-axis-x",
    transform: "translate(".concat(margin.left, ", ").concat(graph.height + margin.top, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: axis.y.ref,
    className: "graph-axis graph-axis-y",
    transform: "translate(".concat(margin.left, ", ").concat(margin.top, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dyYXBoLnRzeCJdLCJuYW1lcyI6WyJHcmFwaCIsImRhdGEiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJncmFwaCIsInJlZiIsInVzZVJlZiIsInNjYWxlcyIsIngiLCJkMyIsInJhbmdlIiwieSIsImF4aXMiLCJ0aWNrcyIsImZvcm1hdCIsImQiLCJ1cGRhdGUiLCJjaXJjbGVzIiwiY3VycmVudCIsInNlbGVjdEFsbCIsImRvbWFpbiIsIkRhdGUiLCJkYXRlIiwiZGlzdGFuY2UiLCJhdHRyIiwiZW50ZXIiLCJhcHBlbmQiLCJjYWxsIiwidGlja0Zvcm1hdCIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBcUJBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BSUk7QUFBQTs7QUFBQSxNQUhoQkMsSUFHZ0IsUUFIaEJBLElBR2dCO0FBQUEsNkJBRmhCQyxVQUVnQjtBQUFBLE1BRmhCQSxVQUVnQixnQ0FGSDtBQUFFQyxTQUFLLEVBQUUsR0FBVDtBQUFjQyxVQUFNLEVBQUU7QUFBdEIsR0FFRztBQUFBLHlCQURoQkMsTUFDZ0I7QUFBQSxNQURoQkEsTUFDZ0IsNEJBRFA7QUFBRUMsT0FBRyxFQUFFLEVBQVA7QUFBV0MsU0FBSyxFQUFFLEVBQWxCO0FBQXNCQyxVQUFNLEVBQUUsRUFBOUI7QUFBa0NDLFFBQUksRUFBRTtBQUF4QyxHQUNPO0FBQ2hCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHO0FBQ1pQLFNBQUssRUFBRUQsVUFBVSxDQUFDQyxLQUFYLEdBQW1CRSxNQUFNLENBQUNJLElBQTFCLEdBQWlDSixNQUFNLENBQUNFLEtBRG5DO0FBRVpILFVBQU0sRUFBRUYsVUFBVSxDQUFDRSxNQUFYLEdBQW9CQyxNQUFNLENBQUNDLEdBQTNCLEdBQWlDRCxNQUFNLENBQUNHLE1BRnBD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QVpGLEVBaUJFO0FBQ0UsT0FBRyxFQUFFWSxJQUFJLENBQUNELENBQUwsQ0FBT04sR0FEZDtBQUVFLGFBQVMsMkJBRlg7QUFHRSxhQUFTLHNCQUFlTixNQUFNLENBQUNJLElBQXRCLGVBQStCSixNQUFNLENBQUNDLEdBQXRDLE1BSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCRixDQURGO0FBeUJELENBdEZEOztHQUFNTixLOztLQUFBQSxLO0FBd0ZTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMzhkNGQ1ZGZiMmQ4YTUxNjgyOGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5cbmludGVyZmFjZSBEYXRhIHtcbiAgZGF0ZTogc3RyaW5nO1xuICBkaXN0YW5jZTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgR3JhcGhQcm9wcyB7XG4gIGRhdGE6IERhdGFbXTtcbiAgZGltZW5zaW9ucz86IHtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICB9O1xuICBtYXJnaW4/OiB7XG4gICAgdG9wOiBudW1iZXI7XG4gICAgcmlnaHQ6IG51bWJlcjtcbiAgICBib3R0b206IG51bWJlcjtcbiAgICBsZWZ0OiBudW1iZXI7XG4gIH07XG59XG5cbmNvbnN0IEdyYXBoID0gKHtcbiAgZGF0YSxcbiAgZGltZW5zaW9ucyA9IHsgd2lkdGg6IDU2MCwgaGVpZ2h0OiA0MDAgfSxcbiAgbWFyZ2luID0geyB0b3A6IDQwLCByaWdodDogMjAsIGJvdHRvbTogNTAsIGxlZnQ6IDQwIH0sXG59OiBHcmFwaFByb3BzKSA9PiB7XG4gIC8vIGRlZmluZSBncmFwaFxuICBjb25zdCBncmFwaCA9IHtcbiAgICB3aWR0aDogZGltZW5zaW9ucy53aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0LFxuICAgIGhlaWdodDogZGltZW5zaW9ucy5oZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbSxcbiAgICByZWY6IHVzZVJlZigpLFxuICB9O1xuXG4gIC8vIGRlZmluZSBzY2FsZXNcbiAgY29uc3Qgc2NhbGVzID0ge1xuICAgIHg6IGQzLnNjYWxlVGltZSgpLnJhbmdlKFswLCBncmFwaC53aWR0aF0pLFxuICAgIHk6IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoW2dyYXBoLmhlaWdodCwgMF0pLFxuICB9O1xuXG4gIC8vIGRlZmluZSBheGlzXG4gIGNvbnN0IGF4aXMgPSB7XG4gICAgeDogeyByZWY6IHVzZVJlZigpLCB0aWNrczogNCwgZm9ybWF0OiBkMy50aW1lRm9ybWF0KGAlYiAlZGApIH0sXG4gICAgeTogeyByZWY6IHVzZVJlZigpLCB0aWNrczogNCwgZm9ybWF0OiAoZCkgPT4gYCR7ZH1tYCB9LFxuICB9O1xuXG4gIC8vIGRlZmluZSB1cGRhdGUgZnVuY3Rpb25cbiAgY29uc3QgdXBkYXRlID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCBjaXJjbGVzID0gZDMuc2VsZWN0KGdyYXBoLnJlZi5jdXJyZW50KS5zZWxlY3RBbGwoXCJjaXJjbGVcIikuZGF0YShkYXRhKTtcblxuICAgIC8vIHNldCBzY2FsZSBkb21haW5zXG4gICAgc2NhbGVzLnguZG9tYWluKGQzLmV4dGVudChkYXRhLCAoZDogRGF0YSkgPT4gbmV3IERhdGUoZC5kYXRlKSkpO1xuICAgIHNjYWxlcy55LmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIChkOiBEYXRhKSA9PiBkLmRpc3RhbmNlKV0pO1xuXG4gICAgLy8gc2V0IHVwZGF0ZSBwb2ludHNcbiAgICBjaXJjbGVzXG4gICAgICAuYXR0cihcInJcIiwgNClcbiAgICAgIC5hdHRyKFwiY3hcIiwgKGQ6IERhdGEpID0+IHNjYWxlcy54KG5ldyBEYXRlKGQuZGF0ZSkpKVxuICAgICAgLmF0dHIoXCJjeVwiLCAoZDogRGF0YSkgPT4gc2NhbGVzLnkoZC5kaXN0YW5jZSkpXG4gICAgICAuYXR0cihcImZpbGxcIiwgXCIjY2NjXCIpO1xuXG4gICAgLy8gc2V0IGVudGVyIHBvaW50c1xuICAgIGNpcmNsZXNcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAuYXR0cihcInJcIiwgNClcbiAgICAgIC5hdHRyKFwiY3hcIiwgKGQ6IERhdGEpID0+IHNjYWxlcy54KG5ldyBEYXRlKGQuZGF0ZSkpKVxuICAgICAgLmF0dHIoXCJjeVwiLCAoZDogRGF0YSkgPT4gc2NhbGVzLnkoZC5kaXN0YW5jZSkpXG4gICAgICAuYXR0cihcImZpbGxcIiwgXCIjY2NjXCIpO1xuXG4gICAgLy8gc2V0IGF4aXNcbiAgICBkMy5zZWxlY3QoYXhpcy54LnJlZi5jdXJyZW50KS5jYWxsKFxuICAgICAgZDMuYXhpc0JvdHRvbShzY2FsZXMueCkudGlja3MoYXhpcy54LnRpY2tzKS50aWNrRm9ybWF0KGF4aXMueC5mb3JtYXQpXG4gICAgKTtcbiAgICBkMy5zZWxlY3QoYXhpcy55LnJlZi5jdXJyZW50KS5jYWxsKFxuICAgICAgZDMuYXhpc0xlZnQoc2NhbGVzLnkpLnRpY2tzKGF4aXMueS50aWNrcykudGlja0Zvcm1hdChheGlzLnkuZm9ybWF0KVxuICAgICk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1cGRhdGUoZGF0YSk7XG4gIH0sIFtkYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD17ZGltZW5zaW9ucy53aWR0aH1cbiAgICAgIGhlaWdodD17ZGltZW5zaW9ucy5oZWlnaHR9XG4gICAgICBjbGFzc05hbWU9e2BncmFwaGB9XG4gICAgPlxuICAgICAgPGdcbiAgICAgICAgcmVmPXtncmFwaC5yZWZ9XG4gICAgICAgIGNsYXNzTmFtZT17YGdyYXBoLWJvZHlgfVxuICAgICAgICB3aWR0aD17Z3JhcGgud2lkdGh9XG4gICAgICAgIGhlaWdodD17Z3JhcGguaGVpZ2h0fVxuICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sICR7bWFyZ2luLnRvcH0pYH1cbiAgICAgIC8+XG4gICAgICA8Z1xuICAgICAgICByZWY9e2F4aXMueC5yZWZ9XG4gICAgICAgIGNsYXNzTmFtZT17YGdyYXBoLWF4aXMgZ3JhcGgtYXhpcy14YH1cbiAgICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCAke2dyYXBoLmhlaWdodCArIG1hcmdpbi50b3B9KWB9XG4gICAgICAvPlxuICAgICAgPGdcbiAgICAgICAgcmVmPXtheGlzLnkucmVmfVxuICAgICAgICBjbGFzc05hbWU9e2BncmFwaC1heGlzIGdyYXBoLWF4aXMteWB9XG4gICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwgJHttYXJnaW4udG9wfSlgfVxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXBoO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==