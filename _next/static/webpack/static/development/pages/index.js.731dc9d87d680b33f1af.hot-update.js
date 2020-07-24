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
      d3__WEBPACK_IMPORTED_MODULE_1__["select"](graph.ref.current).append("path").attr("x1", 0).attr("y1", scales.y(d.distance)).attr("x2", scales.x(new Date(d.date))).attr("y2", scales.y(d.distance)).attr("stroke", "#fff");
    }).on("mouseleave", function (d, i, n) {
      d3__WEBPACK_IMPORTED_MODULE_1__["select"](n[i]).transition().duration(100).attr("r", 4).attr("fill", "#ccc");
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
      lineNumber: 134,
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
      lineNumber: 139,
      columnNumber: 7
    }
  }, __jsx("path", {
    ref: line.ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  })), __jsx("g", {
    ref: axis.x.ref,
    className: "graph-axis graph-axis-x",
    transform: "translate(".concat(margin.left, ", ").concat(graph.height + margin.top, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: axis.y.ref,
    className: "graph-axis graph-axis-y",
    transform: "translate(".concat(margin.left, ", ").concat(margin.top, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dyYXBoLnRzeCJdLCJuYW1lcyI6WyJHcmFwaCIsImRhdGEiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJncmFwaCIsInJlZiIsInVzZVJlZiIsInNjYWxlcyIsIngiLCJkMyIsInJhbmdlIiwieSIsImF4aXMiLCJ0aWNrcyIsImZvcm1hdCIsImQiLCJsaW5lIiwiRGF0ZSIsImRhdGUiLCJkaXN0YW5jZSIsInVwZGF0ZSIsInNvcnQiLCJhIiwiYiIsImdldFRpbWUiLCJkb21haW4iLCJjdXJyZW50IiwiYXR0ciIsImNpcmNsZXMiLCJzZWxlY3RBbGwiLCJleGl0IiwicmVtb3ZlIiwiZW50ZXIiLCJhcHBlbmQiLCJvbiIsImkiLCJuIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiY2FsbCIsInRpY2tGb3JtYXQiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQXFCQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUlJO0FBQUE7O0FBQUEsTUFIaEJDLElBR2dCLFFBSGhCQSxJQUdnQjtBQUFBLDZCQUZoQkMsVUFFZ0I7QUFBQSxNQUZoQkEsVUFFZ0IsZ0NBRkg7QUFBRUMsU0FBSyxFQUFFLEdBQVQ7QUFBY0MsVUFBTSxFQUFFO0FBQXRCLEdBRUc7QUFBQSx5QkFEaEJDLE1BQ2dCO0FBQUEsTUFEaEJBLE1BQ2dCLDRCQURQO0FBQUVDLE9BQUcsRUFBRSxFQUFQO0FBQVdDLFNBQUssRUFBRSxFQUFsQjtBQUFzQkMsVUFBTSxFQUFFLEVBQTlCO0FBQWtDQyxRQUFJLEVBQUU7QUFBeEMsR0FDTztBQUNoQjtBQUNBLE1BQU1DLEtBQUssR0FBRztBQUNaUCxTQUFLLEVBQUVELFVBQVUsQ0FBQ0MsS0FBWCxHQUFtQkUsTUFBTSxDQUFDSSxJQUExQixHQUFpQ0osTUFBTSxDQUFDRSxL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TSxDQUFDSSxJQUF0QixlQUErQkosTUFBTSxDQUFDQyxHQUF0QyxNQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQkYsQ0FERjtBQTJCRCxDQXpJRDs7R0FBTU4sSzs7S0FBQUEsSztBQTJJU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjczMWRjOWQ4N2Q2ODBiMzNmMWFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuXG5pbnRlcmZhY2UgRGF0YSB7XG4gIGRhdGU6IHN0cmluZztcbiAgZGlzdGFuY2U6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIEdyYXBoUHJvcHMge1xuICBkYXRhOiBEYXRhW107XG4gIGRpbWVuc2lvbnM/OiB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgfTtcbiAgbWFyZ2luPzoge1xuICAgIHRvcDogbnVtYmVyO1xuICAgIHJpZ2h0OiBudW1iZXI7XG4gICAgYm90dG9tOiBudW1iZXI7XG4gICAgbGVmdDogbnVtYmVyO1xuICB9O1xufVxuXG5jb25zdCBHcmFwaCA9ICh7XG4gIGRhdGEsXG4gIGRpbWVuc2lvbnMgPSB7IHdpZHRoOiA1NjAsIGhlaWdodDogNDAwIH0sXG4gIG1hcmdpbiA9IHsgdG9wOiA0MCwgcmlnaHQ6IDIwLCBib3R0b206IDUwLCBsZWZ0OiAxMDAgfSxcbn06IEdyYXBoUHJvcHMpID0+IHtcbiAgLy8gZGVmaW5lIGdyYXBoXG4gIGNvbnN0IGdyYXBoID0ge1xuICAgIHdpZHRoOiBkaW1lbnNpb25zLndpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQsXG4gICAgaGVpZ2h0OiBkaW1lbnNpb25zLmhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tLFxuICAgIHJlZjogdXNlUmVmKCksXG4gIH07XG5cbiAgLy8gZGVmaW5lIHNjYWxlc1xuICBjb25zdCBzY2FsZXMgPSB7XG4gICAgeDogZDMuc2NhbGVUaW1lKCkucmFuZ2UoWzAsIGdyYXBoLndpZHRoXSksXG4gICAgeTogZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbZ3JhcGguaGVpZ2h0LCAwXSksXG4gIH07XG5cbiAgLy8gZGVmaW5lIGF4aXNcbiAgY29uc3QgYXhpcyA9IHtcbiAgICB4OiB7IHJlZjogdXNlUmVmKCksIHRpY2tzOiA0LCBmb3JtYXQ6IGQzLnRpbWVGb3JtYXQoYCViICVkYCkgfSxcbiAgICB5OiB7IHJlZjogdXNlUmVmKCksIHRpY2tzOiA0LCBmb3JtYXQ6IChkKSA9PiBgJHtkfW1gIH0sXG4gIH07XG5cbiAgLy8gZGVmaW5lIGxpbmVcbiAgY29uc3QgbGluZSA9IHtcbiAgICByZWY6IHVzZVJlZigpLFxuICAgIGQ6IGQzXG4gICAgICAubGluZTxEYXRhPigpXG4gICAgICAueCgoZCkgPT4gc2NhbGVzLngobmV3IERhdGUoZC5kYXRlKSkpXG4gICAgICAueSgoZCkgPT4gc2NhbGVzLnkoZC5kaXN0YW5jZSkpLFxuICB9O1xuXG4gIC8vIGRlZmluZSB1cGRhdGUgZnVuY3Rpb25cbiAgY29uc3QgdXBkYXRlID0gKGRhdGEpID0+IHtcbiAgICAvLyBzb3J0IGRhdGEgYnkgZGF0ZVxuICAgIGRhdGEuc29ydChcbiAgICAgIChhOiBEYXRhLCBiOiBEYXRhKSA9PlxuICAgICAgICBuZXcgRGF0ZShhLmRhdGUpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGIuZGF0ZSkuZ2V0VGltZSgpXG4gICAgKTtcblxuICAgIC8vIHNldCBzY2FsZSBkb21haW5zXG4gICAgc2NhbGVzLnguZG9tYWluKGQzLmV4dGVudChkYXRhLCAoZDogRGF0YSkgPT4gbmV3IERhdGUoZC5kYXRlKSkpO1xuICAgIHNjYWxlcy55LmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIChkOiBEYXRhKSA9PiBkLmRpc3RhbmNlKV0pO1xuXG4gICAgLy8gc2V0IGxpbmVcbiAgICBkMy5zZWxlY3QobGluZS5yZWYuY3VycmVudClcbiAgICAgIC5kYXRhKFtkYXRhXSlcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiIzAwYmZhNVwiKVxuICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMilcbiAgICAgIC5hdHRyKFwiZFwiLCBsaW5lLmQpO1xuXG4gICAgLy8gZ2V0IGNpcmNsZXNcbiAgICBjb25zdCBjaXJjbGVzID0gZDMuc2VsZWN0KGdyYXBoLnJlZi5jdXJyZW50KS5zZWxlY3RBbGwoXCJjaXJjbGVcIikuZGF0YShkYXRhKTtcblxuICAgIC8vIHNldCBjaXJjbGVzIGV4aXRcbiAgICBjaXJjbGVzLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIC8vIHNldCBjaXJjbGVzIHVwZGF0ZVxuICAgIGNpcmNsZXNcbiAgICAgIC5hdHRyKFwiY3hcIiwgKGQ6IERhdGEpID0+IHNjYWxlcy54KG5ldyBEYXRlKGQuZGF0ZSkpKVxuICAgICAgLmF0dHIoXCJjeVwiLCAoZDogRGF0YSkgPT4gc2NhbGVzLnkoZC5kaXN0YW5jZSkpO1xuXG4gICAgLy8gc2V0IGNpcmNsZXMgZW50ZXJcbiAgICBjaXJjbGVzXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgLmF0dHIoXCJyXCIsIDQpXG4gICAgICAuYXR0cihcImN4XCIsIChkOiBEYXRhKSA9PiBzY2FsZXMueChuZXcgRGF0ZShkLmRhdGUpKSlcbiAgICAgIC5hdHRyKFwiY3lcIiwgKGQ6IERhdGEpID0+IHNjYWxlcy55KGQuZGlzdGFuY2UpKVxuICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiI2NjY1wiKTtcblxuICAgIGNpcmNsZXNcbiAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCAoZDogRGF0YSwgaSwgbikgPT4ge1xuICAgICAgICBkMy5zZWxlY3QobltpXSlcbiAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKDEwMClcbiAgICAgICAgICAuYXR0cihcInJcIiwgOClcbiAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCIjZmZmXCIpO1xuXG4gICAgICAgIGQzLnNlbGVjdChncmFwaC5yZWYuY3VycmVudClcbiAgICAgICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgIC5hdHRyKFwieDFcIiwgMClcbiAgICAgICAgICAuYXR0cihcInkxXCIsIHNjYWxlcy55KGQuZGlzdGFuY2UpKVxuICAgICAgICAgIC5hdHRyKFwieDJcIiwgc2NhbGVzLngobmV3IERhdGUoZC5kYXRlKSkpXG4gICAgICAgICAgLmF0dHIoXCJ5MlwiLCBzY2FsZXMueShkLmRpc3RhbmNlKSlcbiAgICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcIiNmZmZcIik7XG4gICAgICB9KVxuICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCAoZCwgaSwgbikgPT4ge1xuICAgICAgICBkMy5zZWxlY3QobltpXSlcbiAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKDEwMClcbiAgICAgICAgICAuYXR0cihcInJcIiwgNClcbiAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCIjY2NjXCIpO1xuICAgICAgfSk7XG5cbiAgICAvLyBzZXQgYXhpc1xuICAgIGQzLnNlbGVjdChheGlzLngucmVmLmN1cnJlbnQpLmNhbGwoXG4gICAgICBkMy5heGlzQm90dG9tKHNjYWxlcy54KS50aWNrcyhheGlzLngudGlja3MpLnRpY2tGb3JtYXQoYXhpcy54LmZvcm1hdClcbiAgICApO1xuICAgIGQzLnNlbGVjdChheGlzLnkucmVmLmN1cnJlbnQpLmNhbGwoXG4gICAgICBkMy5heGlzTGVmdChzY2FsZXMueSkudGlja3MoYXhpcy55LnRpY2tzKS50aWNrRm9ybWF0KGF4aXMueS5mb3JtYXQpXG4gICAgKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVwZGF0ZShkYXRhKTtcbiAgfSwgW2RhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPXtkaW1lbnNpb25zLndpZHRofVxuICAgICAgaGVpZ2h0PXtkaW1lbnNpb25zLmhlaWdodH1cbiAgICAgIGNsYXNzTmFtZT17YGdyYXBoYH1cbiAgICA+XG4gICAgICA8Z1xuICAgICAgICByZWY9e2dyYXBoLnJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtgZ3JhcGgtYm9keWB9XG4gICAgICAgIHdpZHRoPXtncmFwaC53aWR0aH1cbiAgICAgICAgaGVpZ2h0PXtncmFwaC5oZWlnaHR9XG4gICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwgJHttYXJnaW4udG9wfSlgfVxuICAgICAgPlxuICAgICAgICA8cGF0aCByZWY9e2xpbmUucmVmfSAvPlxuICAgICAgPC9nPlxuICAgICAgPGdcbiAgICAgICAgcmVmPXtheGlzLngucmVmfVxuICAgICAgICBjbGFzc05hbWU9e2BncmFwaC1heGlzIGdyYXBoLWF4aXMteGB9XG4gICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwgJHtncmFwaC5oZWlnaHQgKyBtYXJnaW4udG9wfSlgfVxuICAgICAgLz5cbiAgICAgIDxnXG4gICAgICAgIHJlZj17YXhpcy55LnJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtgZ3JhcGgtYXhpcyBncmFwaC1heGlzLXlgfVxuICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sICR7bWFyZ2luLnRvcH0pYH1cbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcmFwaDtcbiJdLCJzb3VyY2VSb290IjoiIn0=