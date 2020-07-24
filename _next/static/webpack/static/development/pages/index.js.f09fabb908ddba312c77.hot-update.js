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
  };
  var guidelines = {
    ref: Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])()
  }; // define update function

  var update = function update(data) {
    // sort data by date
    data.sort(function (a, b) {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }); // set scale domains

    scales.x.domain(d3__WEBPACK_IMPORTED_MODULE_1__["extent"](data, function (d) {
      return new Date(d.date);
    }));
    scales.y.domain([0, d3__WEBPACK_IMPORTED_MODULE_1__["max"](data, function (d) {
      return d.distance;
    })]); // set line

    d3__WEBPACK_IMPORTED_MODULE_1__["select"](line.ref.current).data([data]).attr("fill", "none").attr("stroke", "#00bfa5").attr("stroke-width", 2).attr("d", line.d); // get circles

    var circles = d3__WEBPACK_IMPORTED_MODULE_1__["select"](graph.ref.current).selectAll("circle").data(data); // set circles exit

    circles.exit().remove(); // set circles update

    circles.attr("cx", function (d) {
      return scales.x(new Date(d.date));
    }).attr("cy", function (d) {
      return scales.y(d.distance);
    }); // set circles enter

    circles.enter().append("circle").attr("r", 4).attr("cx", function (d) {
      return scales.x(new Date(d.date));
    }).attr("cy", function (d) {
      return scales.y(d.distance);
    }).attr("fill", "#ccc");
    circles.on("mouseover", function (d, i, n) {
      d3__WEBPACK_IMPORTED_MODULE_1__["select"](n[i]).transition().duration(100).attr("r", 8).attr("fill", "#fff");
      d3__WEBPACK_IMPORTED_MODULE_1__["select"](guidelines.ref.current).append("line").attr("x1", 0).attr("y1", scales.y(d.distance)).attr("x2", scales.x(new Date(d.date))).attr("y2", scales.y(d.distance)).attr("stroke", "#fff").attr("stroke-dasharray", 5);
      d3__WEBPACK_IMPORTED_MODULE_1__["select"](guidelines.ref.current).append("line").attr("x1", scales.x(new Date(d.date))).attr("y1", scales.y(d.distance)).attr("x2", scales.x(new Date(d.date))).attr("y2", graph.height).attr("stroke", "#fff").attr("stroke-dasharray", 5);
    }).on("mouseleave", function (d, i, n) {
      d3__WEBPACK_IMPORTED_MODULE_1__["select"](n[i]).transition().duration(100).attr("r", 4).attr("fill", "#ccc");
      d3__WEBPACK_IMPORTED_MODULE_1__["select"](guidelines.ref.current).selectAll("line").remove();
    }); // set axis

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
      lineNumber: 150,
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
      lineNumber: 155,
      columnNumber: 7
    }
  }, __jsx("path", {
    ref: line.ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  }), __jsx("g", {
    ref: guidelines.ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  })), __jsx("g", {
    ref: axis.x.ref,
    className: "graph-axis graph-axis-x",
    transform: "translate(".concat(margin.left, ", ").concat(graph.height + margin.top, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: axis.y.ref,
    className: "graph-axis graph-axis-y",
    transform: "translate(".concat(margin.left, ", ").concat(margin.top, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }
  }));
};

_s(Graph, "DvyG0GGh3xB9x8Q+tuZyndJ4BMg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dyYXBoLnRzeCJdLCJuYW1lcyI6WyJHcmFwaCIsImRhdGEiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJncmFwaCIsInJlZiIsInVzZVJlZiIsInNjYWxlcyIsIngiLCJkMyIsInJhbmdlIiwieSIsImF4aXMiLCJ0aWNrcyIsImZvcm1hdCIsImQiLCJsaW5lIiwiRGF0ZSIsImRhdGUiLCJkaXN0YW5jZSIsImd1aWRlbGluZXMiLCJ1cGRhdGUiLCJzb3J0IiwiYSIsImIiLCJnZXRUaW1lIiwiZG9tYWluIiwiY3VycmVudCIsImF0dHIiLCJjaXJjbGVzIiwic2VsZWN0QWxsIiwiZXhpdCIsInJlbW92ZSIsImVudGVyIiwiYXBwZW5kIiwib24iLCJpIiwibiIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNhbGwiLCJ0aWNrRm9ybWF0IiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFxQkEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FJSTtBQUFBOztBQUFBLE1BSGhCQyxJQUdnQixRQUhoQkEsSUFHZ0I7QUFBQSw2QkFGaEJDLFVBRWdCO0FBQUEsTUFGaEJBLFVBRWdCLGdDQUZIO0FBQUVDLFNBQUssRUFBRSxHQUFUO0FBQWNDLFVBQU0sRUFBRTtBQUF0QixHQUVHO0FBQUEseUJBRGhCQyxNQUNnQjtBQUFBLE1BRGhCQSxNQUNnQiw0QkFEUDtBQUFFQyxPQUFHLEVBQUUsRUFBUDtBQUFXQyxTQUFLLEVBQUUsRUFBbEI7QUFBc0JDLFVBQU0sRUFBRSxFQUE5QjtBQUFrQ0MsUUFBSSxFQUFFO0FBQXhDLEdBQ087QUFDaEI7QUFDQSxNQUFNQyxLQUFLLEdBQUc7QUFDWlAsU0FBSyxFQUFFRCxVQUFVLENBQUNDLEtBQVgsR0FBbUJFLE1BQU0sQ0FBQ0ksSUFBMUIsR0FBaUNK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OWZhYmI5MDhkZGJhMzEyYzc3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuXG5pbnRlcmZhY2UgRGF0YSB7XG4gIGRhdGU6IHN0cmluZztcbiAgZGlzdGFuY2U6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIEdyYXBoUHJvcHMge1xuICBkYXRhOiBEYXRhW107XG4gIGRpbWVuc2lvbnM/OiB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgfTtcbiAgbWFyZ2luPzoge1xuICAgIHRvcDogbnVtYmVyO1xuICAgIHJpZ2h0OiBudW1iZXI7XG4gICAgYm90dG9tOiBudW1iZXI7XG4gICAgbGVmdDogbnVtYmVyO1xuICB9O1xufVxuXG5jb25zdCBHcmFwaCA9ICh7XG4gIGRhdGEsXG4gIGRpbWVuc2lvbnMgPSB7IHdpZHRoOiA1NjAsIGhlaWdodDogNDAwIH0sXG4gIG1hcmdpbiA9IHsgdG9wOiA0MCwgcmlnaHQ6IDIwLCBib3R0b206IDUwLCBsZWZ0OiAxMDAgfSxcbn06IEdyYXBoUHJvcHMpID0+IHtcbiAgLy8gZGVmaW5lIGdyYXBoXG4gIGNvbnN0IGdyYXBoID0ge1xuICAgIHdpZHRoOiBkaW1lbnNpb25zLndpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQsXG4gICAgaGVpZ2h0OiBkaW1lbnNpb25zLmhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tLFxuICAgIHJlZjogdXNlUmVmKCksXG4gIH07XG5cbiAgLy8gZGVmaW5lIHNjYWxlc1xuICBjb25zdCBzY2FsZXMgPSB7XG4gICAgeDogZDMuc2NhbGVUaW1lKCkucmFuZ2UoWzAsIGdyYXBoLndpZHRoXSksXG4gICAgeTogZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbZ3JhcGguaGVpZ2h0LCAwXSksXG4gIH07XG5cbiAgLy8gZGVmaW5lIGF4aXNcbiAgY29uc3QgYXhpcyA9IHtcbiAgICB4OiB7IHJlZjogdXNlUmVmKCksIHRpY2tzOiA0LCBmb3JtYXQ6IGQzLnRpbWVGb3JtYXQoYCViICVkYCkgfSxcbiAgICB5OiB7IHJlZjogdXNlUmVmKCksIHRpY2tzOiA0LCBmb3JtYXQ6IChkKSA9PiBgJHtkfW1gIH0sXG4gIH07XG5cbiAgLy8gZGVmaW5lIGxpbmVcbiAgY29uc3QgbGluZSA9IHtcbiAgICByZWY6IHVzZVJlZigpLFxuICAgIGQ6IGQzXG4gICAgICAubGluZTxEYXRhPigpXG4gICAgICAueCgoZCkgPT4gc2NhbGVzLngobmV3IERhdGUoZC5kYXRlKSkpXG4gICAgICAueSgoZCkgPT4gc2NhbGVzLnkoZC5kaXN0YW5jZSkpLFxuICB9O1xuXG4gIGNvbnN0IGd1aWRlbGluZXMgPSB7XG4gICAgcmVmOiB1c2VSZWYoKSxcbiAgfTtcblxuICAvLyBkZWZpbmUgdXBkYXRlIGZ1bmN0aW9uXG4gIGNvbnN0IHVwZGF0ZSA9IChkYXRhKSA9PiB7XG4gICAgLy8gc29ydCBkYXRhIGJ5IGRhdGVcbiAgICBkYXRhLnNvcnQoXG4gICAgICAoYTogRGF0YSwgYjogRGF0YSkgPT5cbiAgICAgICAgbmV3IERhdGUoYS5kYXRlKS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShiLmRhdGUpLmdldFRpbWUoKVxuICAgICk7XG5cbiAgICAvLyBzZXQgc2NhbGUgZG9tYWluc1xuICAgIHNjYWxlcy54LmRvbWFpbihkMy5leHRlbnQoZGF0YSwgKGQ6IERhdGEpID0+IG5ldyBEYXRlKGQuZGF0ZSkpKTtcbiAgICBzY2FsZXMueS5kb21haW4oWzAsIGQzLm1heChkYXRhLCAoZDogRGF0YSkgPT4gZC5kaXN0YW5jZSldKTtcblxuICAgIC8vIHNldCBsaW5lXG4gICAgZDMuc2VsZWN0KGxpbmUucmVmLmN1cnJlbnQpXG4gICAgICAuZGF0YShbZGF0YV0pXG4gICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAuYXR0cihcInN0cm9rZVwiLCBcIiMwMGJmYTVcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIpXG4gICAgICAuYXR0cihcImRcIiwgbGluZS5kKTtcblxuICAgIC8vIGdldCBjaXJjbGVzXG4gICAgY29uc3QgY2lyY2xlcyA9IGQzLnNlbGVjdChncmFwaC5yZWYuY3VycmVudCkuc2VsZWN0QWxsKFwiY2lyY2xlXCIpLmRhdGEoZGF0YSk7XG5cbiAgICAvLyBzZXQgY2lyY2xlcyBleGl0XG4gICAgY2lyY2xlcy5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICAvLyBzZXQgY2lyY2xlcyB1cGRhdGVcbiAgICBjaXJjbGVzXG4gICAgICAuYXR0cihcImN4XCIsIChkOiBEYXRhKSA9PiBzY2FsZXMueChuZXcgRGF0ZShkLmRhdGUpKSlcbiAgICAgIC5hdHRyKFwiY3lcIiwgKGQ6IERhdGEpID0+IHNjYWxlcy55KGQuZGlzdGFuY2UpKTtcblxuICAgIC8vIHNldCBjaXJjbGVzIGVudGVyXG4gICAgY2lyY2xlc1xuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAgIC5hdHRyKFwiclwiLCA0KVxuICAgICAgLmF0dHIoXCJjeFwiLCAoZDogRGF0YSkgPT4gc2NhbGVzLngobmV3IERhdGUoZC5kYXRlKSkpXG4gICAgICAuYXR0cihcImN5XCIsIChkOiBEYXRhKSA9PiBzY2FsZXMueShkLmRpc3RhbmNlKSlcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIiNjY2NcIik7XG5cbiAgICBjaXJjbGVzXG4gICAgICAub24oXCJtb3VzZW92ZXJcIiwgKGQ6IERhdGEsIGksIG4pID0+IHtcbiAgICAgICAgZDMuc2VsZWN0KG5baV0pXG4gICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbigxMDApXG4gICAgICAgICAgLmF0dHIoXCJyXCIsIDgpXG4gICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiI2ZmZlwiKTtcblxuICAgICAgICBkMy5zZWxlY3QoZ3VpZGVsaW5lcy5yZWYuY3VycmVudClcbiAgICAgICAgICAuYXBwZW5kKFwibGluZVwiKVxuICAgICAgICAgIC5hdHRyKFwieDFcIiwgMClcbiAgICAgICAgICAuYXR0cihcInkxXCIsIHNjYWxlcy55KGQuZGlzdGFuY2UpKVxuICAgICAgICAgIC5hdHRyKFwieDJcIiwgc2NhbGVzLngobmV3IERhdGUoZC5kYXRlKSkpXG4gICAgICAgICAgLmF0dHIoXCJ5MlwiLCBzY2FsZXMueShkLmRpc3RhbmNlKSlcbiAgICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcIiNmZmZcIilcbiAgICAgICAgICAuYXR0cihcInN0cm9rZS1kYXNoYXJyYXlcIiwgNSk7XG5cbiAgICAgICAgZDMuc2VsZWN0KGd1aWRlbGluZXMucmVmLmN1cnJlbnQpXG4gICAgICAgICAgLmFwcGVuZChcImxpbmVcIilcbiAgICAgICAgICAuYXR0cihcIngxXCIsIHNjYWxlcy54KG5ldyBEYXRlKGQuZGF0ZSkpKVxuICAgICAgICAgIC5hdHRyKFwieTFcIiwgc2NhbGVzLnkoZC5kaXN0YW5jZSkpXG4gICAgICAgICAgLmF0dHIoXCJ4MlwiLCBzY2FsZXMueChuZXcgRGF0ZShkLmRhdGUpKSlcbiAgICAgICAgICAuYXR0cihcInkyXCIsIGdyYXBoLmhlaWdodClcbiAgICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcIiNmZmZcIilcbiAgICAgICAgICAuYXR0cihcInN0cm9rZS1kYXNoYXJyYXlcIiwgNSk7XG4gICAgICB9KVxuICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCAoZCwgaSwgbikgPT4ge1xuICAgICAgICBkMy5zZWxlY3QobltpXSlcbiAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKDEwMClcbiAgICAgICAgICAuYXR0cihcInJcIiwgNClcbiAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCIjY2NjXCIpO1xuXG4gICAgICAgIGQzLnNlbGVjdChndWlkZWxpbmVzLnJlZi5jdXJyZW50KS5zZWxlY3RBbGwoXCJsaW5lXCIpLnJlbW92ZSgpO1xuICAgICAgfSk7XG5cbiAgICAvLyBzZXQgYXhpc1xuICAgIGQzLnNlbGVjdChheGlzLngucmVmLmN1cnJlbnQpLmNhbGwoXG4gICAgICBkMy5heGlzQm90dG9tKHNjYWxlcy54KS50aWNrcyhheGlzLngudGlja3MpLnRpY2tGb3JtYXQoYXhpcy54LmZvcm1hdClcbiAgICApO1xuICAgIGQzLnNlbGVjdChheGlzLnkucmVmLmN1cnJlbnQpLmNhbGwoXG4gICAgICBkMy5heGlzTGVmdChzY2FsZXMueSkudGlja3MoYXhpcy55LnRpY2tzKS50aWNrRm9ybWF0KGF4aXMueS5mb3JtYXQpXG4gICAgKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVwZGF0ZShkYXRhKTtcbiAgfSwgW2RhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPXtkaW1lbnNpb25zLndpZHRofVxuICAgICAgaGVpZ2h0PXtkaW1lbnNpb25zLmhlaWdodH1cbiAgICAgIGNsYXNzTmFtZT17YGdyYXBoYH1cbiAgICA+XG4gICAgICA8Z1xuICAgICAgICByZWY9e2dyYXBoLnJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtgZ3JhcGgtYm9keWB9XG4gICAgICAgIHdpZHRoPXtncmFwaC53aWR0aH1cbiAgICAgICAgaGVpZ2h0PXtncmFwaC5oZWlnaHR9XG4gICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwgJHttYXJnaW4udG9wfSlgfVxuICAgICAgPlxuICAgICAgICA8cGF0aCByZWY9e2xpbmUucmVmfSAvPlxuICAgICAgICA8ZyByZWY9e2d1aWRlbGluZXMucmVmfSAvPlxuICAgICAgPC9nPlxuICAgICAgPGdcbiAgICAgICAgcmVmPXtheGlzLngucmVmfVxuICAgICAgICBjbGFzc05hbWU9e2BncmFwaC1heGlzIGdyYXBoLWF4aXMteGB9XG4gICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwgJHtncmFwaC5oZWlnaHQgKyBtYXJnaW4udG9wfSlgfVxuICAgICAgLz5cbiAgICAgIDxnXG4gICAgICAgIHJlZj17YXhpcy55LnJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtgZ3JhcGgtYXhpcyBncmFwaC1heGlzLXlgfVxuICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sICR7bWFyZ2luLnRvcH0pYH1cbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcmFwaDtcbiJdLCJzb3VyY2VSb290IjoiIn0=