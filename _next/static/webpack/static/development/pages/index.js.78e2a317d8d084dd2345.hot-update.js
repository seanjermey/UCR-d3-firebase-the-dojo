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
      lineNumber: 170,
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
      lineNumber: 175,
      columnNumber: 7
    }
  }, __jsx("path", {
    ref: line.ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 9
    }
  }), __jsx("g", {
    ref: guidelines.ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 9
    }
  })), __jsx("g", {
    ref: axis.x.ref,
    className: "graph-axis graph-axis-x",
    transform: "translate(".concat(margin.left, ", ").concat(graph.height + margin.top, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: axis.y.ref,
    className: "graph-axis graph-axis-y",
    transform: "translate(".concat(margin.left, ", ").concat(margin.top, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dyYXBoLnRzeCJdLCJuYW1lcyI6WyJHcmFwaCIsImRhdGEiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJncmFwaCIsInJlZiIsInVzZVJlZiIsInNjYWxlcyIsIngiLCJkMyIsInJhbmdlIiwieSIsImF4aXMiLCJ0aWNrcyIsImZvcm1hdCIsImQiLCJsaW5lIiwiRGF0ZSIsImRhdGUiLCJkaXN0YW5jZSIsImd1aWRlbGluZXMiLCJhcHBlbmQiLCJhdHRyIiwidXBkYXRlIiwic29ydCIsImEiLCJiIiwiZ2V0VGltZSIsImRvbWFpbiIsImN1cnJlbnQiLCJjaXJjbGVzIiwic2VsZWN0QWxsIiwiZXhpdCIsInJlbW92ZSIsImVudGVyIiwib24iLCJpIiwibiIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNhbGwiLCJ0aWNrRm9ybWF0IiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFxQkEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FJSTtBQUFBOztBQUFBLE1BSGhCQyxJQUdnQixRQUhoQkEsSUFHZ0I7QUFBQSw2QkFGaEJDLFVBRWdCO0FBQUEsTUFGaEJBLFVBRWdCLGdDQUZIO0FBQUVDLFNBQUssRUFBRSxHQUFUO0FBQWNDLFVBQU0sRUFBRTtBQUF0QixHQUVHO0FBQUEseUJBRGhCQyxNQUNnQjtBQUFBLE1BRGhCQSxNQUNnQiw0QkFEUDtBQUFFQyxPQUFHLEVBQUUsRUFBUDtBQUFXQyxTQUFLLEVBQUUsRUFBbEI7QUFBc0JDLFVBQU0sRUFBRSxFQUE5QjtBQUFrQ0MsUUFBSSxFQUFFO0FBQXhDLEdBQ087QUFDaEI7QUFDQSxNQUFNQyxLQUFLLEdBQUc7QUFDWlAsU0FBSyxFQUFFRCxVQUFVLENBQUNDLEtBQVgsR0FBbUJFLE1BQU0sQ0FBQ0ksSUFBMUIsR0FBaUNK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QVMsU0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFDRSxPQUFHLEVBQUVNLEtBQUssQ0FBQ0MsR0FEYjtBQUVFLGFBQVMsY0FGWDtBQUdFLFNBQUssRUFBRUQsS0FBSyxDQUFDUCxLQUhmO0FBSUUsVUFBTSxFQUFFTyxLQUFLLENBQUNOLE1BSmhCO0FBS0UsYUFBUyxzQkFBZUMsTUFBTSxDQUFDSSxJQUF0QixlQUErQkosTUFBTSxDQUFDQyxHQUF0QyxNQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRTtBQUFNLE9BQUcsRUFBRWdCLElBQUksQ0FBQ1gsR0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBUUU7QUFBRyxPQUFHLEVBQUVlLFVBQVUsQ0FBQ2YsR0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBTEYsRUFlRTtBQUNFLE9BQUcsRUFBRU8sSUFBSSxDQUFDSixDQUFMLENBQU9ILEdBRGQ7QUFFRSxhQUFTLDJCQUZYO0FBR0UsYUFBUyxzQkFBZU4sTUFBTSxDQUFDSSxJQUF0QixlQUErQkMsS0FBSyxDQUFDTixNQUFOLEdBQWVDLE1BQU0sQ0FBQ0MsR0FBckQsTUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkYsRUFvQkU7QUFDRSxPQUFHLEVBQUVZLElBQUksQ0FBQ0QsQ0FBTCxDQUFPTixHQURkO0FBRUUsYUFBUywyQkFGWDtBQUdFLGFBQVMsc0JBQWVOLE1BQU0sQ0FBQ0ksSUFBdEIsZUFBK0JKLE1BQU0sQ0FBQ0MsR0FBdEMsTUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEJGLENBREY7QUE0QkQsQ0E5S0Q7O0dBQU1OLEs7O0tBQUFBLEs7QUFnTFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy43OGUyYTMxN2Q4ZDA4NGRkMjM0NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcblxuaW50ZXJmYWNlIERhdGEge1xuICBkYXRlOiBzdHJpbmc7XG4gIGRpc3RhbmNlOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBHcmFwaFByb3BzIHtcbiAgZGF0YTogRGF0YVtdO1xuICBkaW1lbnNpb25zPzoge1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gIH07XG4gIG1hcmdpbj86IHtcbiAgICB0b3A6IG51bWJlcjtcbiAgICByaWdodDogbnVtYmVyO1xuICAgIGJvdHRvbTogbnVtYmVyO1xuICAgIGxlZnQ6IG51bWJlcjtcbiAgfTtcbn1cblxuY29uc3QgR3JhcGggPSAoe1xuICBkYXRhLFxuICBkaW1lbnNpb25zID0geyB3aWR0aDogNTYwLCBoZWlnaHQ6IDQwMCB9LFxuICBtYXJnaW4gPSB7IHRvcDogNDAsIHJpZ2h0OiAyMCwgYm90dG9tOiA1MCwgbGVmdDogMTAwIH0sXG59OiBHcmFwaFByb3BzKSA9PiB7XG4gIC8vIGRlZmluZSBncmFwaFxuICBjb25zdCBncmFwaCA9IHtcbiAgICB3aWR0aDogZGltZW5zaW9ucy53aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0LFxuICAgIGhlaWdodDogZGltZW5zaW9ucy5oZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbSxcbiAgICByZWY6IHVzZVJlZigpLFxuICB9O1xuXG4gIC8vIGRlZmluZSBzY2FsZXNcbiAgY29uc3Qgc2NhbGVzID0ge1xuICAgIHg6IGQzLnNjYWxlVGltZSgpLnJhbmdlKFswLCBncmFwaC53aWR0aF0pLFxuICAgIHk6IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoW2dyYXBoLmhlaWdodCwgMF0pLFxuICB9O1xuXG4gIC8vIGRlZmluZSBheGlzXG4gIGNvbnN0IGF4aXMgPSB7XG4gICAgeDogeyByZWY6IHVzZVJlZigpLCB0aWNrczogNCwgZm9ybWF0OiBkMy50aW1lRm9ybWF0KGAlYiAlZGApIH0sXG4gICAgeTogeyByZWY6IHVzZVJlZigpLCB0aWNrczogNCwgZm9ybWF0OiAoZCkgPT4gYCR7ZH1tYCB9LFxuICB9O1xuXG4gIC8vIGRlZmluZSBsaW5lXG4gIGNvbnN0IGxpbmUgPSB7XG4gICAgcmVmOiB1c2VSZWYoKSxcbiAgICBkOiBkM1xuICAgICAgLmxpbmU8RGF0YT4oKVxuICAgICAgLngoKGQpID0+IHNjYWxlcy54KG5ldyBEYXRlKGQuZGF0ZSkpKVxuICAgICAgLnkoKGQpID0+IHNjYWxlcy55KGQuZGlzdGFuY2UpKSxcbiAgfTtcblxuICBjb25zdCBndWlkZWxpbmVzID0ge1xuICAgIHJlZjogdXNlUmVmKCksXG4gICAgeDogKHJlZiwgZCkgPT4ge1xuICAgICAgZDMuc2VsZWN0KHJlZilcbiAgICAgICAgLmFwcGVuZChcImxpbmVcIilcbiAgICAgICAgLmF0dHIoXCJ4MVwiLCAwKVxuICAgICAgICAuYXR0cihcInkxXCIsIHNjYWxlcy55KGQuZGlzdGFuY2UpKVxuICAgICAgICAuYXR0cihcIngyXCIsIHNjYWxlcy54KG5ldyBEYXRlKGQuZGF0ZSkpKVxuICAgICAgICAuYXR0cihcInkyXCIsIHNjYWxlcy55KGQuZGlzdGFuY2UpKVxuICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcIiNmZmZcIilcbiAgICAgICAgLmF0dHIoXCJzdHJva2UtZGFzaGFycmF5XCIsIDUpO1xuICAgIH0sXG4gICAgeTogKHJlZiwgZCkgPT4ge1xuICAgICAgZDMuc2VsZWN0KHJlZilcbiAgICAgICAgLmFwcGVuZChcImxpbmVcIilcbiAgICAgICAgLmF0dHIoXCJ4MVwiLCBzY2FsZXMueChuZXcgRGF0ZShkLmRhdGUpKSlcbiAgICAgICAgLmF0dHIoXCJ5MVwiLCBzY2FsZXMueShkLmRpc3RhbmNlKSlcbiAgICAgICAgLmF0dHIoXCJ4MlwiLCBzY2FsZXMueChuZXcgRGF0ZShkLmRhdGUpKSlcbiAgICAgICAgLmF0dHIoXCJ5MlwiLCBncmFwaC5oZWlnaHQpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiI2ZmZlwiKVxuICAgICAgICAuYXR0cihcInN0cm9rZS1kYXNoYXJyYXlcIiwgNSk7XG4gICAgfSxcbiAgfTtcblxuICAvLyBkZWZpbmUgdXBkYXRlIGZ1bmN0aW9uXG4gIGNvbnN0IHVwZGF0ZSA9IChkYXRhKSA9PiB7XG4gICAgLy8gc29ydCBkYXRhIGJ5IGRhdGVcbiAgICBkYXRhLnNvcnQoXG4gICAgICAoYTogRGF0YSwgYjogRGF0YSkgPT5cbiAgICAgICAgbmV3IERhdGUoYS5kYXRlKS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShiLmRhdGUpLmdldFRpbWUoKVxuICAgICk7XG5cbiAgICAvLyBzZXQgc2NhbGUgZG9tYWluc1xuICAgIHNjYWxlcy54LmRvbWFpbihkMy5leHRlbnQoZGF0YSwgKGQ6IERhdGEpID0+IG5ldyBEYXRlKGQuZGF0ZSkpKTtcbiAgICBzY2FsZXMueS5kb21haW4oWzAsIGQzLm1heChkYXRhLCAoZDogRGF0YSkgPT4gZC5kaXN0YW5jZSldKTtcblxuICAgIC8vIHNldCBsaW5lXG4gICAgZDMuc2VsZWN0KGxpbmUucmVmLmN1cnJlbnQpXG4gICAgICAuZGF0YShbZGF0YV0pXG4gICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAuYXR0cihcInN0cm9rZVwiLCBcIiMwMGJmYTVcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIpXG4gICAgICAuYXR0cihcImRcIiwgbGluZS5kKTtcblxuICAgIC8vIGdldCBjaXJjbGVzXG4gICAgY29uc3QgY2lyY2xlcyA9IGQzLnNlbGVjdChncmFwaC5yZWYuY3VycmVudCkuc2VsZWN0QWxsKFwiY2lyY2xlXCIpLmRhdGEoZGF0YSk7XG5cbiAgICAvLyBzZXQgY2lyY2xlcyBleGl0XG4gICAgY2lyY2xlcy5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICAvLyBzZXQgY2lyY2xlcyB1cGRhdGVcbiAgICBjaXJjbGVzXG4gICAgICAuYXR0cihcImN4XCIsIChkOiBEYXRhKSA9PiBzY2FsZXMueChuZXcgRGF0ZShkLmRhdGUpKSlcbiAgICAgIC5hdHRyKFwiY3lcIiwgKGQ6IERhdGEpID0+IHNjYWxlcy55KGQuZGlzdGFuY2UpKTtcblxuICAgIC8vIHNldCBjaXJjbGVzIGVudGVyXG4gICAgY2lyY2xlc1xuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAgIC5hdHRyKFwiclwiLCA0KVxuICAgICAgLmF0dHIoXCJjeFwiLCAoZDogRGF0YSkgPT4gc2NhbGVzLngobmV3IERhdGUoZC5kYXRlKSkpXG4gICAgICAuYXR0cihcImN5XCIsIChkOiBEYXRhKSA9PiBzY2FsZXMueShkLmRpc3RhbmNlKSlcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIiNjY2NcIik7XG5cbiAgICBjaXJjbGVzXG4gICAgICAub24oXCJtb3VzZW92ZXJcIiwgKGQ6IERhdGEsIGksIG4pID0+IHtcbiAgICAgICAgZDMuc2VsZWN0KG5baV0pXG4gICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbigxMDApXG4gICAgICAgICAgLmF0dHIoXCJyXCIsIDgpXG4gICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiI2ZmZlwiKTtcblxuICAgICAgICBkMy5zZWxlY3QoZ3VpZGVsaW5lcy5yZWYuY3VycmVudClcbiAgICAgICAgICAuYXBwZW5kKFwibGluZVwiKVxuICAgICAgICAgIC5hdHRyKFwieDFcIiwgMClcbiAgICAgICAgICAuYXR0cihcInkxXCIsIHNjYWxlcy55KGQuZGlzdGFuY2UpKVxuICAgICAgICAgIC5hdHRyKFwieDJcIiwgc2NhbGVzLngobmV3IERhdGUoZC5kYXRlKSkpXG4gICAgICAgICAgLmF0dHIoXCJ5MlwiLCBzY2FsZXMueShkLmRpc3RhbmNlKSlcbiAgICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcIiNmZmZcIilcbiAgICAgICAgICAuYXR0cihcInN0cm9rZS1kYXNoYXJyYXlcIiwgNSk7XG5cbiAgICAgICAgZDMuc2VsZWN0KGd1aWRlbGluZXMucmVmLmN1cnJlbnQpXG4gICAgICAgICAgLmFwcGVuZChcImxpbmVcIilcbiAgICAgICAgICAuYXR0cihcIngxXCIsIHNjYWxlcy54KG5ldyBEYXRlKGQuZGF0ZSkpKVxuICAgICAgICAgIC5hdHRyKFwieTFcIiwgc2NhbGVzLnkoZC5kaXN0YW5jZSkpXG4gICAgICAgICAgLmF0dHIoXCJ4MlwiLCBzY2FsZXMueChuZXcgRGF0ZShkLmRhdGUpKSlcbiAgICAgICAgICAuYXR0cihcInkyXCIsIGdyYXBoLmhlaWdodClcbiAgICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcIiNmZmZcIilcbiAgICAgICAgICAuYXR0cihcInN0cm9rZS1kYXNoYXJyYXlcIiwgNSk7XG4gICAgICB9KVxuICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCAoZCwgaSwgbikgPT4ge1xuICAgICAgICBkMy5zZWxlY3QobltpXSlcbiAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKDEwMClcbiAgICAgICAgICAuYXR0cihcInJcIiwgNClcbiAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCIjY2NjXCIpO1xuXG4gICAgICAgIGQzLnNlbGVjdChndWlkZWxpbmVzLnJlZi5jdXJyZW50KS5zZWxlY3RBbGwoXCJsaW5lXCIpLnJlbW92ZSgpO1xuICAgICAgfSk7XG5cbiAgICAvLyBzZXQgYXhpc1xuICAgIGQzLnNlbGVjdChheGlzLngucmVmLmN1cnJlbnQpLmNhbGwoXG4gICAgICBkMy5heGlzQm90dG9tKHNjYWxlcy54KS50aWNrcyhheGlzLngudGlja3MpLnRpY2tGb3JtYXQoYXhpcy54LmZvcm1hdClcbiAgICApO1xuICAgIGQzLnNlbGVjdChheGlzLnkucmVmLmN1cnJlbnQpLmNhbGwoXG4gICAgICBkMy5heGlzTGVmdChzY2FsZXMueSkudGlja3MoYXhpcy55LnRpY2tzKS50aWNrRm9ybWF0KGF4aXMueS5mb3JtYXQpXG4gICAgKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVwZGF0ZShkYXRhKTtcbiAgfSwgW2RhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPXtkaW1lbnNpb25zLndpZHRofVxuICAgICAgaGVpZ2h0PXtkaW1lbnNpb25zLmhlaWdodH1cbiAgICAgIGNsYXNzTmFtZT17YGdyYXBoYH1cbiAgICA+XG4gICAgICA8Z1xuICAgICAgICByZWY9e2dyYXBoLnJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtgZ3JhcGgtYm9keWB9XG4gICAgICAgIHdpZHRoPXtncmFwaC53aWR0aH1cbiAgICAgICAgaGVpZ2h0PXtncmFwaC5oZWlnaHR9XG4gICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwgJHttYXJnaW4udG9wfSlgfVxuICAgICAgPlxuICAgICAgICA8cGF0aCByZWY9e2xpbmUucmVmfSAvPlxuICAgICAgICA8ZyByZWY9e2d1aWRlbGluZXMucmVmfSAvPlxuICAgICAgPC9nPlxuICAgICAgPGdcbiAgICAgICAgcmVmPXtheGlzLngucmVmfVxuICAgICAgICBjbGFzc05hbWU9e2BncmFwaC1heGlzIGdyYXBoLWF4aXMteGB9XG4gICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwgJHtncmFwaC5oZWlnaHQgKyBtYXJnaW4udG9wfSlgfVxuICAgICAgLz5cbiAgICAgIDxnXG4gICAgICAgIHJlZj17YXhpcy55LnJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtgZ3JhcGgtYXhpcyBncmFwaC1heGlzLXlgfVxuICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sICR7bWFyZ2luLnRvcH0pYH1cbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcmFwaDtcbiJdLCJzb3VyY2VSb290IjoiIn0=