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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dyYXBoLnRzeCJdLCJuYW1lcyI6WyJHcmFwaCIsImRhdGEiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJncmFwaCIsInJlZiIsInVzZVJlZiIsInNjYWxlcyIsIngiLCJkMyIsInJhbmdlIiwieSIsImF4aXMiLCJ0aWNrcyIsImZvcm1hdCIsImQiLCJ1cGRhdGUiLCJwYXRocyIsImN1cnJlbnQiLCJzZWxlY3RBbGwiLCJkb21haW4iLCJEYXRlIiwiZGF0ZSIsImRpc3RhbmNlIiwiY2FsbCIsInRpY2tGb3JtYXQiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQXFCQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUlJO0FBQUE7O0FBQUEsTUFIaEJDLElBR2dCLFFBSGhCQSxJQUdnQjtBQUFBLDZCQUZoQkMsVUFFZ0I7QUFBQSxNQUZoQkEsVUFFZ0IsZ0NBRkg7QUFBRUMsU0FBSyxFQUFFLEdBQVQ7QUFBY0MsVUFBTSxFQUFFO0FBQXRCLEdBRUc7QUFBQSx5QkFEaEJDLE1BQ2dCO0FBQUEsTUFEaEJBLE1BQ2dCLDRCQURQO0FBQUVDLE9BQUcsRUFBRSxFQUFQO0FBQVdDLFNBQUssRUFBRSxFQUFsQjtBQUFzQkMsVUFBTSxFQUFFLEVBQTlCO0FBQWtDQyxRQUFJLEVBQUU7QUFBeEMsR0FDTztBQUNoQjtBQUNBLE1BQU1DLEtBQUssR0FBRztBQUNaUCxTQUFLLEVBQUVELFVBQVUsQ0FBQ0MsS0FBWCxHQUFtQkUsTUFBTSxDQUFDSSxJQUExQixHQUFpQ0osTUFBTSxDQUFDRSxLQURuQztBQUVaSCxVQUFNLEVBQUVGLFVBQVUsQ0FBQ0UsTUFBWCxHQUFvQkMsTUFBTSxDQUFDQyxHQUEzQixHQUFpQ0QsTUFBTSxDQUFDRyxNQUZwQztBQUdaRyxPQUFHLEVBQUVDLG9EQUFNO0FB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O0FBQW9CLGFBQVMsMkJBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQkYsQ0FERjtBQW9CRCxDQWpFRDs7R0FBTVgsSzs7S0FBQUEsSztBQW1FU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmQ5YmUzMjdmNjBmZTVhZWExYzMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuXG5pbnRlcmZhY2UgRGF0YSB7XG4gIGRhdGU6IHN0cmluZztcbiAgZGlzdGFuY2U6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIEdyYXBoUHJvcHMge1xuICBkYXRhOiBEYXRhW107XG4gIGRpbWVuc2lvbnM/OiB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgfTtcbiAgbWFyZ2luPzoge1xuICAgIHRvcDogbnVtYmVyO1xuICAgIHJpZ2h0OiBudW1iZXI7XG4gICAgYm90dG9tOiBudW1iZXI7XG4gICAgbGVmdDogbnVtYmVyO1xuICB9O1xufVxuXG5jb25zdCBHcmFwaCA9ICh7XG4gIGRhdGEsXG4gIGRpbWVuc2lvbnMgPSB7IHdpZHRoOiA1NjAsIGhlaWdodDogNDAwIH0sXG4gIG1hcmdpbiA9IHsgdG9wOiA0MCwgcmlnaHQ6IDIwLCBib3R0b206IDUwLCBsZWZ0OiAxMDAgfSxcbn06IEdyYXBoUHJvcHMpID0+IHtcbiAgLy8gZGVmaW5lIGdyYXBoXG4gIGNvbnN0IGdyYXBoID0ge1xuICAgIHdpZHRoOiBkaW1lbnNpb25zLndpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQsXG4gICAgaGVpZ2h0OiBkaW1lbnNpb25zLmhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tLFxuICAgIHJlZjogdXNlUmVmKCksXG4gIH07XG5cbiAgLy8gZGVmaW5lIHNjYWxlc1xuICBjb25zdCBzY2FsZXMgPSB7XG4gICAgeDogZDMuc2NhbGVUaW1lKCkucmFuZ2UoWzAsIGdyYXBoLndpZHRoXSksXG4gICAgeTogZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbZ3JhcGguaGVpZ2h0LCAwXSksXG4gIH07XG5cbiAgLy8gZGVmaW5lIGF4aXNcbiAgY29uc3QgYXhpcyA9IHtcbiAgICB4OiB7IHJlZjogdXNlUmVmKCksIHRpY2tzOiA0LCBmb3JtYXQ6IGQzLnRpbWVGb3JtYXQoYCViICVkYCkgfSxcbiAgICB5OiB7IHJlZjogdXNlUmVmKCksIHRpY2tzOiA0LCBmb3JtYXQ6IChkKSA9PiBgJHtkfW1gIH0sXG4gIH07XG5cbiAgLy8gZGVmaW5lIHVwZGF0ZSBmdW5jdGlvblxuICBjb25zdCB1cGRhdGUgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHBhdGhzID0gZDMuc2VsZWN0KGdyYXBoLnJlZi5jdXJyZW50KS5zZWxlY3RBbGwoXCJwYXRoXCIpLmRhdGEoZGF0YSk7XG5cbiAgICAvLyBzZXQgc2NhbGUgZG9tYWluc1xuICAgIHNjYWxlcy54LmRvbWFpbihkMy5leHRlbnQoZGF0YSwgKGQ6IERhdGEpID0+IG5ldyBEYXRlKGQuZGF0ZSkpKTtcbiAgICBzY2FsZXMueS5kb21haW4oWzAsIGQzLm1heChkYXRhLCAoZDogRGF0YSkgPT4gZC5kaXN0YW5jZSldKTtcblxuICAgIC8vIHNldCBheGlzXG4gICAgZDMuc2VsZWN0KGF4aXMueC5yZWYuY3VycmVudCkuY2FsbChcbiAgICAgIGQzLmF4aXNCb3R0b20oc2NhbGVzLngpLnRpY2tzKGF4aXMueC50aWNrcykudGlja0Zvcm1hdChheGlzLnguZm9ybWF0KVxuICAgICk7XG4gICAgZDMuc2VsZWN0KGF4aXMueS5yZWYuY3VycmVudCkuY2FsbChcbiAgICAgIGQzLmF4aXNMZWZ0KHNjYWxlcy55KS50aWNrcyhheGlzLnkudGlja3MpLnRpY2tGb3JtYXQoYXhpcy55LmZvcm1hdClcbiAgICApO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdXBkYXRlKGRhdGEpO1xuICB9LCBbZGF0YV0pO1xuXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9e2RpbWVuc2lvbnMud2lkdGh9XG4gICAgICBoZWlnaHQ9e2RpbWVuc2lvbnMuaGVpZ2h0fVxuICAgICAgY2xhc3NOYW1lPXtgZ3JhcGhgfVxuICAgID5cbiAgICAgIHsvKjxnKi99XG4gICAgICB7LyogIHJlZj17Z3JhcGgucmVmfSovfVxuICAgICAgey8qICB3aWR0aD17Z3JhcGgud2lkdGh9Ki99XG4gICAgICB7LyogIGhlaWdodD17Z3JhcGguaGVpZ2h0fSovfVxuICAgICAgey8qICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sICR7bWFyZ2luLnRvcH0pYH0qL31cbiAgICAgIHsvKi8+Ki99XG4gICAgICA8Z1xuICAgICAgICByZWY9e2F4aXMueC5yZWZ9XG4gICAgICAgIGNsYXNzTmFtZT17YGdyYXBoLWF4aXMgZ3JhcGgtYXhpcy14YH1cbiAgICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKDAsICR7Z3JhcGguaGVpZ2h0fSlgfVxuICAgICAgLz5cbiAgICAgIDxnIHJlZj17YXhpcy55LnJlZn0gY2xhc3NOYW1lPXtgZ3JhcGgtYXhpcyBncmFwaC1heGlzLXlgfSAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JhcGg7XG4iXSwic291cmNlUm9vdCI6IiJ9