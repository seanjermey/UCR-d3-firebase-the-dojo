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
    var circles = d3__WEBPACK_IMPORTED_MODULE_1__["select"](graph.ref.current).selectAll("circle").data(data); // set scale domains

    scales.x.domain(d3__WEBPACK_IMPORTED_MODULE_1__["extent"](data, function (d) {
      return new Date(d.date);
    }));
    scales.y.domain([0, d3__WEBPACK_IMPORTED_MODULE_1__["max"](data, function (d) {
      return d.distance;
    })]); // set line points

    d3__WEBPACK_IMPORTED_MODULE_1__["select"](line.ref.current).data([data]).attr("fill", "none").attr("stroke", "#00bfa5").attr("stroke-width", 2).attr("d", line.d); // set exit points

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dyYXBoLnRzeCJdLCJuYW1lcyI6WyJHcmFwaCIsImRhdGEiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJncmFwaCIsInJlZiIsInVzZVJlZiIsInNjYWxlcyIsIngiLCJkMyIsInJhbmdlIiwieSIsImF4aXMiLCJ0aWNrcyIsImZvcm1hdCIsImQiLCJsaW5lIiwiRGF0ZSIsImRhdGUiLCJkaXN0YW5jZSIsInVwZGF0ZSIsImNpcmNsZXMiLCJjdXJyZW50Iiwic2VsZWN0QWxsIiwiZG9tYWluIiwiYXR0ciIsImV4aXQiLCJyZW1vdmUiLCJlbnRlciIsImFwcGVuZCIsImNhbGwiLCJ0aWNrRm9ybWF0IiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFxQkEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FJSTtBQUFBOztBQUFBLE1BSGhCQyxJQUdnQixRQUhoQkEsSUFHZ0I7QUFBQSw2QkFGaEJDLFVBRWdCO0FBQUEsTUFGaEJBLFVBRWdCLGdDQUZIO0FBQUVDLFNBQUssRUFBRSxHQUFUO0FBQWNDLFVBQU0sRUFBRTtBQUF0QixHQUVHO0FBQUEseUJBRGhCQyxNQUNnQjtBQUFBLE1BRGhCQSxNQUNnQiw0QkFEUDtBQUFFQyxPQUFHLEVBQUUsRUFBUDtBQUFXQyxTQUFLLEVBQUUsRUFBbEI7QUFBc0JDLFVBQU0sRUFBRSxFQUE5QjtBQUFrQ0MsUUFBSSxFQUFFO0FBQXhDLEdBQ087QUFDaEI7QUFDQSxNQUFNQyxLQUFLLEdBQUc7QUFDWlAsU0FBSyxFQUFFRCxVQUFVLENBQUNDLEtBQVgsR0FBbUJFLE1BQU0sQ0FBQ0ksSUFBMUIsR0FBaUNKLE1BQU0sQ0FBQ0UsS0FEbkM7QUFFWkgsVUFBTSxFQUFFRixVQUFVLENBQUNFLE1BQVgsR0FBb0JDLE1BQU0sQ0FBQ0MsR0FBM0Is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cGFnZXNcXGluZGV4LmpzLmUyM2I5ZTVjYTk2NDE4NTRiYTU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuXG5pbnRlcmZhY2UgRGF0YSB7XG4gIGRhdGU6IHN0cmluZztcbiAgZGlzdGFuY2U6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIEdyYXBoUHJvcHMge1xuICBkYXRhOiBEYXRhW107XG4gIGRpbWVuc2lvbnM/OiB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgfTtcbiAgbWFyZ2luPzoge1xuICAgIHRvcDogbnVtYmVyO1xuICAgIHJpZ2h0OiBudW1iZXI7XG4gICAgYm90dG9tOiBudW1iZXI7XG4gICAgbGVmdDogbnVtYmVyO1xuICB9O1xufVxuXG5jb25zdCBHcmFwaCA9ICh7XG4gIGRhdGEsXG4gIGRpbWVuc2lvbnMgPSB7IHdpZHRoOiA1NjAsIGhlaWdodDogNDAwIH0sXG4gIG1hcmdpbiA9IHsgdG9wOiA0MCwgcmlnaHQ6IDIwLCBib3R0b206IDUwLCBsZWZ0OiAxMDAgfSxcbn06IEdyYXBoUHJvcHMpID0+IHtcbiAgLy8gZGVmaW5lIGdyYXBoXG4gIGNvbnN0IGdyYXBoID0ge1xuICAgIHdpZHRoOiBkaW1lbnNpb25zLndpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQsXG4gICAgaGVpZ2h0OiBkaW1lbnNpb25zLmhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tLFxuICAgIHJlZjogdXNlUmVmKCksXG4gIH07XG5cbiAgLy8gZGVmaW5lIHNjYWxlc1xuICBjb25zdCBzY2FsZXMgPSB7XG4gICAgeDogZDMuc2NhbGVUaW1lKCkucmFuZ2UoWzAsIGdyYXBoLndpZHRoXSksXG4gICAgeTogZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbZ3JhcGguaGVpZ2h0LCAwXSksXG4gIH07XG5cbiAgLy8gZGVmaW5lIGF4aXNcbiAgY29uc3QgYXhpcyA9IHtcbiAgICB4OiB7IHJlZjogdXNlUmVmKCksIHRpY2tzOiA0LCBmb3JtYXQ6IGQzLnRpbWVGb3JtYXQoYCViICVkYCkgfSxcbiAgICB5OiB7IHJlZjogdXNlUmVmKCksIHRpY2tzOiA0LCBmb3JtYXQ6IChkKSA9PiBgJHtkfW1gIH0sXG4gIH07XG5cbiAgLy8gZGVmaW5lIGxpbmVcbiAgY29uc3QgbGluZSA9IHtcbiAgICByZWY6IHVzZVJlZigpLFxuICAgIGQ6IGQzXG4gICAgICAubGluZTxEYXRhPigpXG4gICAgICAueCgoZCkgPT4gc2NhbGVzLngobmV3IERhdGUoZC5kYXRlKSkpXG4gICAgICAueSgoZCkgPT4gc2NhbGVzLnkoZC5kaXN0YW5jZSkpLFxuICB9O1xuXG4gIC8vIGRlZmluZSB1cGRhdGUgZnVuY3Rpb25cbiAgY29uc3QgdXBkYXRlID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCBjaXJjbGVzID0gZDMuc2VsZWN0KGdyYXBoLnJlZi5jdXJyZW50KS5zZWxlY3RBbGwoXCJjaXJjbGVcIikuZGF0YShkYXRhKTtcblxuICAgIC8vIHNldCBzY2FsZSBkb21haW5zXG4gICAgc2NhbGVzLnguZG9tYWluKGQzLmV4dGVudChkYXRhLCAoZDogRGF0YSkgPT4gbmV3IERhdGUoZC5kYXRlKSkpO1xuICAgIHNjYWxlcy55LmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIChkOiBEYXRhKSA9PiBkLmRpc3RhbmNlKV0pO1xuXG4gICAgLy8gc2V0IGxpbmUgcG9pbnRzXG4gICAgZDMuc2VsZWN0KGxpbmUucmVmLmN1cnJlbnQpXG4gICAgICAuZGF0YShbZGF0YV0pXG4gICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAuYXR0cihcInN0cm9rZVwiLCBcIiMwMGJmYTVcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIpXG4gICAgICAuYXR0cihcImRcIiwgbGluZS5kKTtcblxuICAgIC8vIHNldCBleGl0IHBvaW50c1xuICAgIGNpcmNsZXMuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgLy8gc2V0IHVwZGF0ZSBwb2ludHNcbiAgICBjaXJjbGVzXG4gICAgICAuYXR0cihcImN4XCIsIChkOiBEYXRhKSA9PiBzY2FsZXMueChuZXcgRGF0ZShkLmRhdGUpKSlcbiAgICAgIC5hdHRyKFwiY3lcIiwgKGQ6IERhdGEpID0+IHNjYWxlcy55KGQuZGlzdGFuY2UpKTtcblxuICAgIC8vIHNldCBlbnRlciBwb2ludHNcbiAgICBjaXJjbGVzXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgLmF0dHIoXCJyXCIsIDQpXG4gICAgICAuYXR0cihcImN4XCIsIChkOiBEYXRhKSA9PiBzY2FsZXMueChuZXcgRGF0ZShkLmRhdGUpKSlcbiAgICAgIC5hdHRyKFwiY3lcIiwgKGQ6IERhdGEpID0+IHNjYWxlcy55KGQuZGlzdGFuY2UpKVxuICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiI2NjY1wiKTtcblxuICAgIC8vIHNldCBheGlzXG4gICAgZDMuc2VsZWN0KGF4aXMueC5yZWYuY3VycmVudCkuY2FsbChcbiAgICAgIGQzLmF4aXNCb3R0b20oc2NhbGVzLngpLnRpY2tzKGF4aXMueC50aWNrcykudGlja0Zvcm1hdChheGlzLnguZm9ybWF0KVxuICAgICk7XG4gICAgZDMuc2VsZWN0KGF4aXMueS5yZWYuY3VycmVudCkuY2FsbChcbiAgICAgIGQzLmF4aXNMZWZ0KHNjYWxlcy55KS50aWNrcyhheGlzLnkudGlja3MpLnRpY2tGb3JtYXQoYXhpcy55LmZvcm1hdClcbiAgICApO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdXBkYXRlKGRhdGEpO1xuICB9LCBbZGF0YV0pO1xuXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9e2RpbWVuc2lvbnMud2lkdGh9XG4gICAgICBoZWlnaHQ9e2RpbWVuc2lvbnMuaGVpZ2h0fVxuICAgICAgY2xhc3NOYW1lPXtgZ3JhcGhgfVxuICAgID5cbiAgICAgIDxnXG4gICAgICAgIHJlZj17Z3JhcGgucmVmfVxuICAgICAgICBjbGFzc05hbWU9e2BncmFwaC1ib2R5YH1cbiAgICAgICAgd2lkdGg9e2dyYXBoLndpZHRofVxuICAgICAgICBoZWlnaHQ9e2dyYXBoLmhlaWdodH1cbiAgICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCAke21hcmdpbi50b3B9KWB9XG4gICAgICA+XG4gICAgICAgIDxwYXRoIHJlZj17bGluZS5yZWZ9IC8+XG4gICAgICA8L2c+XG4gICAgICA8Z1xuICAgICAgICByZWY9e2F4aXMueC5yZWZ9XG4gICAgICAgIGNsYXNzTmFtZT17YGdyYXBoLWF4aXMgZ3JhcGgtYXhpcy14YH1cbiAgICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCAke2dyYXBoLmhlaWdodCArIG1hcmdpbi50b3B9KWB9XG4gICAgICAvPlxuICAgICAgPGdcbiAgICAgICAgcmVmPXtheGlzLnkucmVmfVxuICAgICAgICBjbGFzc05hbWU9e2BncmFwaC1heGlzIGdyYXBoLWF4aXMteWB9XG4gICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwgJHttYXJnaW4udG9wfSlgfVxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXBoO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==