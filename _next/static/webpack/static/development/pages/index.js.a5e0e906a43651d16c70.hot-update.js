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
    ref: Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(),
    x: function x(ref, d) {
      d3__WEBPACK_IMPORTED_MODULE_1__["select"](ref).append("line").attr("x1", 0).attr("y1", scales.y(d.distance)).attr("x2", scales.x(new Date(d.date))).attr("y2", scales.y(d.distance)).attr("stroke", "#fff").attr("stroke-dasharray", 5);
    },
    y: function y(ref, d) {
      d3__WEBPACK_IMPORTED_MODULE_1__["select"](ref).append("line").attr("x1", scales.x(new Date(d.date))).attr("y1", scales.y(d.distance)).attr("x2", scales.x(new Date(d.date))).attr("y2", graph.height).attr("stroke", "#fff").attr("stroke-dasharray", 5);
    },
    remove: function remove(ref) {
      d3__WEBPACK_IMPORTED_MODULE_1__["select"](ref).selectAll("line").remove();
    }
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
      guidelines.x(guidelines.ref.current, d);
      guidelines.y(guidelines.ref.current, d);
    }).on("mouseleave", function (d, i, n) {
      d3__WEBPACK_IMPORTED_MODULE_1__["select"](n[i]).transition().duration(100).attr("r", 4).attr("fill", "#ccc");
      guidelines.remove(guidelines.ref.current);
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
      lineNumber: 158,
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
      lineNumber: 163,
      columnNumber: 7
    }
  }, __jsx("path", {
    ref: line.ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }
  }), __jsx("g", {
    ref: guidelines.ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }
  })), __jsx("g", {
    ref: axis.x.ref,
    className: "graph-axis graph-axis-x",
    transform: "translate(".concat(margin.left, ", ").concat(graph.height + margin.top, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: axis.y.ref,
    className: "graph-axis graph-axis-y",
    transform: "translate(".concat(margin.left, ", ").concat(margin.top, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dyYXBoLnRzeCJdLCJuYW1lcyI6WyJHcmFwaCIsImRhdGEiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJncmFwaCIsInJlZiIsInVzZVJlZiIsInNjYWxlcyIsIngiLCJkMyIsInJhbmdlIiwieSIsImF4aXMiLCJ0aWNrcyIsImZvcm1hdCIsImQiLCJsaW5lIiwiRGF0ZSIsImRhdGUiLCJkaXN0YW5jZSIsImd1aWRlbGluZXMiLCJhcHBlbmQiLCJhdHRyIiwicmVtb3ZlIiwic2VsZWN0QWxsIiwidXBkYXRlIiwic29ydCIsImEiLCJiIiwiZ2V0VGltZSIsImRvbWFpbiIsImN1cnJlbnQiLCJjaXJjbGVzIiwiZXhpdCIsImVudGVyIiwib24iLCJpIiwibiIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNhbGwiLCJ0aWNrRm9ybWF0IiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFxQkEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FJSTtBQUFBOztBQUFBLE1BSGhCQyxJQUdnQixRQUhoQkEsSUFHZ0I7QUFBQSw2QkFGaEJDLFVBRWdCO0FBQUEsTUFGaEJBLFVBRWdCLGdDQUZIO0FBQUVDLFNBQUssRUFBRSxHQUFUO0FBQWNDLFVBQU0sRUFBRTtBQUF0QixHQUVHO0FBQUEseUJBRGhCQyxNQUNnQjtBQUFBLE1BRGhCQSxNQUNnQiw0QkFEUDtBQUFFQyxPQUFHLEVBQUUsRUFBUDtBQUFXQyxTQUFLLEVBQUUsRUFBbEI7QUFBc0JDLFVBQU0sRUFBRSxFQUE5QjtBQUFrQ0MsUUFBSSxFQUFFO0FBQXhDLEdBQ087QUFDaEI7QUFDQSxNQUFNQyxLQUFLLEdBQUc7QUFDWlAsU0FBSyxFQUFFRCxVQUFVLENBQUNDLEtBQVgsR0FBbUJFLE1BQU0sQ0FBQ0ksSUFBMUIsR0FBaUNK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LEVBb0JFO0FBQ0UsT0FBRyxFQUFFWSxJQUFJLENBQUNELENBQUwsQ0FBT04sR0FEZDtBQUVFLGFBQVMsMkJBRlg7QUFHRSxhQUFTLHNCQUFlTixNQUFNLENBQUNJLElBQXRCLGVBQStCSixNQUFNLENBQUNDLEdBQXRDLE1BSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBCRixDQURGO0FBNEJELENBbEtEOztHQUFNTixLOztLQUFBQSxLO0FBb0tTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYTVlMGU5MDZhNDM2NTFkMTZjNzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5cbmludGVyZmFjZSBEYXRhIHtcbiAgZGF0ZTogc3RyaW5nO1xuICBkaXN0YW5jZTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgR3JhcGhQcm9wcyB7XG4gIGRhdGE6IERhdGFbXTtcbiAgZGltZW5zaW9ucz86IHtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICB9O1xuICBtYXJnaW4/OiB7XG4gICAgdG9wOiBudW1iZXI7XG4gICAgcmlnaHQ6IG51bWJlcjtcbiAgICBib3R0b206IG51bWJlcjtcbiAgICBsZWZ0OiBudW1iZXI7XG4gIH07XG59XG5cbmNvbnN0IEdyYXBoID0gKHtcbiAgZGF0YSxcbiAgZGltZW5zaW9ucyA9IHsgd2lkdGg6IDU2MCwgaGVpZ2h0OiA0MDAgfSxcbiAgbWFyZ2luID0geyB0b3A6IDQwLCByaWdodDogMjAsIGJvdHRvbTogNTAsIGxlZnQ6IDEwMCB9LFxufTogR3JhcGhQcm9wcykgPT4ge1xuICAvLyBkZWZpbmUgZ3JhcGhcbiAgY29uc3QgZ3JhcGggPSB7XG4gICAgd2lkdGg6IGRpbWVuc2lvbnMud2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodCxcbiAgICBoZWlnaHQ6IGRpbWVuc2lvbnMuaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b20sXG4gICAgcmVmOiB1c2VSZWYoKSxcbiAgfTtcblxuICAvLyBkZWZpbmUgc2NhbGVzXG4gIGNvbnN0IHNjYWxlcyA9IHtcbiAgICB4OiBkMy5zY2FsZVRpbWUoKS5yYW5nZShbMCwgZ3JhcGgud2lkdGhdKSxcbiAgICB5OiBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtncmFwaC5oZWlnaHQsIDBdKSxcbiAgfTtcblxuICAvLyBkZWZpbmUgYXhpc1xuICBjb25zdCBheGlzID0ge1xuICAgIHg6IHsgcmVmOiB1c2VSZWYoKSwgdGlja3M6IDQsIGZvcm1hdDogZDMudGltZUZvcm1hdChgJWIgJWRgKSB9LFxuICAgIHk6IHsgcmVmOiB1c2VSZWYoKSwgdGlja3M6IDQsIGZvcm1hdDogKGQpID0+IGAke2R9bWAgfSxcbiAgfTtcblxuICAvLyBkZWZpbmUgbGluZVxuICBjb25zdCBsaW5lID0ge1xuICAgIHJlZjogdXNlUmVmKCksXG4gICAgZDogZDNcbiAgICAgIC5saW5lPERhdGE+KClcbiAgICAgIC54KChkKSA9PiBzY2FsZXMueChuZXcgRGF0ZShkLmRhdGUpKSlcbiAgICAgIC55KChkKSA9PiBzY2FsZXMueShkLmRpc3RhbmNlKSksXG4gIH07XG5cbiAgY29uc3QgZ3VpZGVsaW5lcyA9IHtcbiAgICByZWY6IHVzZVJlZigpLFxuICAgIHg6IChyZWYsIGQpID0+IHtcbiAgICAgIGQzLnNlbGVjdChyZWYpXG4gICAgICAgIC5hcHBlbmQoXCJsaW5lXCIpXG4gICAgICAgIC5hdHRyKFwieDFcIiwgMClcbiAgICAgICAgLmF0dHIoXCJ5MVwiLCBzY2FsZXMueShkLmRpc3RhbmNlKSlcbiAgICAgICAgLmF0dHIoXCJ4MlwiLCBzY2FsZXMueChuZXcgRGF0ZShkLmRhdGUpKSlcbiAgICAgICAgLmF0dHIoXCJ5MlwiLCBzY2FsZXMueShkLmRpc3RhbmNlKSlcbiAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCIjZmZmXCIpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlLWRhc2hhcnJheVwiLCA1KTtcbiAgICB9LFxuICAgIHk6IChyZWYsIGQpID0+IHtcbiAgICAgIGQzLnNlbGVjdChyZWYpXG4gICAgICAgIC5hcHBlbmQoXCJsaW5lXCIpXG4gICAgICAgIC5hdHRyKFwieDFcIiwgc2NhbGVzLngobmV3IERhdGUoZC5kYXRlKSkpXG4gICAgICAgIC5hdHRyKFwieTFcIiwgc2NhbGVzLnkoZC5kaXN0YW5jZSkpXG4gICAgICAgIC5hdHRyKFwieDJcIiwgc2NhbGVzLngobmV3IERhdGUoZC5kYXRlKSkpXG4gICAgICAgIC5hdHRyKFwieTJcIiwgZ3JhcGguaGVpZ2h0KVxuICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcIiNmZmZcIilcbiAgICAgICAgLmF0dHIoXCJzdHJva2UtZGFzaGFycmF5XCIsIDUpO1xuICAgIH0sXG4gICAgcmVtb3ZlOiAocmVmKSA9PiB7XG4gICAgICBkMy5zZWxlY3QocmVmKS5zZWxlY3RBbGwoXCJsaW5lXCIpLnJlbW92ZSgpO1xuICAgIH0sXG4gIH07XG5cbiAgLy8gZGVmaW5lIHVwZGF0ZSBmdW5jdGlvblxuICBjb25zdCB1cGRhdGUgPSAoZGF0YSkgPT4ge1xuICAgIC8vIHNvcnQgZGF0YSBieSBkYXRlXG4gICAgZGF0YS5zb3J0KFxuICAgICAgKGE6IERhdGEsIGI6IERhdGEpID0+XG4gICAgICAgIG5ldyBEYXRlKGEuZGF0ZSkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYi5kYXRlKS5nZXRUaW1lKClcbiAgICApO1xuXG4gICAgLy8gc2V0IHNjYWxlIGRvbWFpbnNcbiAgICBzY2FsZXMueC5kb21haW4oZDMuZXh0ZW50KGRhdGEsIChkOiBEYXRhKSA9PiBuZXcgRGF0ZShkLmRhdGUpKSk7XG4gICAgc2NhbGVzLnkuZG9tYWluKFswLCBkMy5tYXgoZGF0YSwgKGQ6IERhdGEpID0+IGQuZGlzdGFuY2UpXSk7XG5cbiAgICAvLyBzZXQgbGluZVxuICAgIGQzLnNlbGVjdChsaW5lLnJlZi5jdXJyZW50KVxuICAgICAgLmRhdGEoW2RhdGFdKVxuICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxuICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCIjMDBiZmE1XCIpXG4gICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAyKVxuICAgICAgLmF0dHIoXCJkXCIsIGxpbmUuZCk7XG5cbiAgICAvLyBnZXQgY2lyY2xlc1xuICAgIGNvbnN0IGNpcmNsZXMgPSBkMy5zZWxlY3QoZ3JhcGgucmVmLmN1cnJlbnQpLnNlbGVjdEFsbChcImNpcmNsZVwiKS5kYXRhKGRhdGEpO1xuXG4gICAgLy8gc2V0IGNpcmNsZXMgZXhpdFxuICAgIGNpcmNsZXMuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgLy8gc2V0IGNpcmNsZXMgdXBkYXRlXG4gICAgY2lyY2xlc1xuICAgICAgLmF0dHIoXCJjeFwiLCAoZDogRGF0YSkgPT4gc2NhbGVzLngobmV3IERhdGUoZC5kYXRlKSkpXG4gICAgICAuYXR0cihcImN5XCIsIChkOiBEYXRhKSA9PiBzY2FsZXMueShkLmRpc3RhbmNlKSk7XG5cbiAgICAvLyBzZXQgY2lyY2xlcyBlbnRlclxuICAgIGNpcmNsZXNcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAuYXR0cihcInJcIiwgNClcbiAgICAgIC5hdHRyKFwiY3hcIiwgKGQ6IERhdGEpID0+IHNjYWxlcy54KG5ldyBEYXRlKGQuZGF0ZSkpKVxuICAgICAgLmF0dHIoXCJjeVwiLCAoZDogRGF0YSkgPT4gc2NhbGVzLnkoZC5kaXN0YW5jZSkpXG4gICAgICAuYXR0cihcImZpbGxcIiwgXCIjY2NjXCIpO1xuXG4gICAgY2lyY2xlc1xuICAgICAgLm9uKFwibW91c2VvdmVyXCIsIChkOiBEYXRhLCBpLCBuKSA9PiB7XG4gICAgICAgIGQzLnNlbGVjdChuW2ldKVxuICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oMTAwKVxuICAgICAgICAgIC5hdHRyKFwiclwiLCA4KVxuICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIiNmZmZcIik7XG5cbiAgICAgICAgZ3VpZGVsaW5lcy54KGd1aWRlbGluZXMucmVmLmN1cnJlbnQsIGQpO1xuICAgICAgICBndWlkZWxpbmVzLnkoZ3VpZGVsaW5lcy5yZWYuY3VycmVudCwgZCk7XG4gICAgICB9KVxuICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCAoZCwgaSwgbikgPT4ge1xuICAgICAgICBkMy5zZWxlY3QobltpXSlcbiAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKDEwMClcbiAgICAgICAgICAuYXR0cihcInJcIiwgNClcbiAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCIjY2NjXCIpO1xuXG4gICAgICAgIGd1aWRlbGluZXMucmVtb3ZlKGd1aWRlbGluZXMucmVmLmN1cnJlbnQpO1xuICAgICAgfSk7XG5cbiAgICAvLyBzZXQgYXhpc1xuICAgIGQzLnNlbGVjdChheGlzLngucmVmLmN1cnJlbnQpLmNhbGwoXG4gICAgICBkMy5heGlzQm90dG9tKHNjYWxlcy54KS50aWNrcyhheGlzLngudGlja3MpLnRpY2tGb3JtYXQoYXhpcy54LmZvcm1hdClcbiAgICApO1xuICAgIGQzLnNlbGVjdChheGlzLnkucmVmLmN1cnJlbnQpLmNhbGwoXG4gICAgICBkMy5heGlzTGVmdChzY2FsZXMueSkudGlja3MoYXhpcy55LnRpY2tzKS50aWNrRm9ybWF0KGF4aXMueS5mb3JtYXQpXG4gICAgKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVwZGF0ZShkYXRhKTtcbiAgfSwgW2RhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPXtkaW1lbnNpb25zLndpZHRofVxuICAgICAgaGVpZ2h0PXtkaW1lbnNpb25zLmhlaWdodH1cbiAgICAgIGNsYXNzTmFtZT17YGdyYXBoYH1cbiAgICA+XG4gICAgICA8Z1xuICAgICAgICByZWY9e2dyYXBoLnJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtgZ3JhcGgtYm9keWB9XG4gICAgICAgIHdpZHRoPXtncmFwaC53aWR0aH1cbiAgICAgICAgaGVpZ2h0PXtncmFwaC5oZWlnaHR9XG4gICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwgJHttYXJnaW4udG9wfSlgfVxuICAgICAgPlxuICAgICAgICA8cGF0aCByZWY9e2xpbmUucmVmfSAvPlxuICAgICAgICA8ZyByZWY9e2d1aWRlbGluZXMucmVmfSAvPlxuICAgICAgPC9nPlxuICAgICAgPGdcbiAgICAgICAgcmVmPXtheGlzLngucmVmfVxuICAgICAgICBjbGFzc05hbWU9e2BncmFwaC1heGlzIGdyYXBoLWF4aXMteGB9XG4gICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwgJHtncmFwaC5oZWlnaHQgKyBtYXJnaW4udG9wfSlgfVxuICAgICAgLz5cbiAgICAgIDxnXG4gICAgICAgIHJlZj17YXhpcy55LnJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtgZ3JhcGgtYXhpcyBncmFwaC1heGlzLXlgfVxuICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sICR7bWFyZ2luLnRvcH0pYH1cbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcmFwaDtcbiJdLCJzb3VyY2VSb290IjoiIn0=