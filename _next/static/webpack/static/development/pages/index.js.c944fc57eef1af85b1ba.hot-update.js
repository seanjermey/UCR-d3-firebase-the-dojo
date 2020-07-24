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
      ticks: 4
    },
    y: {
      ref: Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(),
      ticks: 4
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

    d3__WEBPACK_IMPORTED_MODULE_1__["select"](axis.x.ref.current).call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](scales.x).ticks(axis.x.ticks));
    d3__WEBPACK_IMPORTED_MODULE_1__["select"](axis.y.ref.current).call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](scales.y).ticks(axis.y.ticks));
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
      lineNumber: 75,
      columnNumber: 5
    }
  }, __jsx("g", {
    ref: graph.ref,
    width: graph.width,
    height: graph.height,
    transform: "translate(".concat(margin.left, ", ").concat(margin.top, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: axis.x.ref,
    className: "x-axis",
    transform: "translate(0, ".concat(graph.height, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: axis.y.ref,
    className: "y-axis",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dyYXBoLnRzeCJdLCJuYW1lcyI6WyJHcmFwaCIsImRhdGEiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJncmFwaCIsInJlZiIsInVzZVJlZiIsInNjYWxlcyIsIngiLCJkMyIsInJhbmdlIiwieSIsImF4aXMiLCJ0aWNrcyIsInVwZGF0ZSIsInBhdGhzIiwiY3VycmVudCIsInNlbGVjdEFsbCIsImRvbWFpbiIsImQiLCJEYXRlIiwiZGF0ZSIsImRpc3RhbmNlIiwiY2FsbCIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBcUJBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BSUk7QUFBQTs7QUFBQSxNQUhoQkMsSUFHZ0IsUUFIaEJBLElBR2dCO0FBQUEsNkJBRmhCQyxVQUVnQjtBQUFBLE1BRmhCQSxVQUVnQixnQ0FGSDtBQUFFQyxTQUFLLEVBQUUsR0FBVDtBQUFjQyxVQUFNLEVBQUU7QUFBdEIsR0FFRztBQUFBLHlCQURoQkMsTUFDZ0I7QUFBQSxNQURoQkEsTUFDZ0IsNEJBRFA7QUFBRUMsT0FBRyxFQUFFLEVBQVA7QUFBV0MsU0FBSyxFQUFFLEVBQWxCO0FBQXNCQyxVQUFNLEVBQUUsRUFBOUI7QUFBa0NDLFFBQUksRUFBRTtBQUF4QyxHQUNPO0FBQ2hCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHO0FBQ1pQLFNBQUssRUFBRUQsVUFBVSxDQUFDQyxLQUFYLEdBQW1CRSxNQUFNLENBQUNJLElBQTFCLEdBQWlDSixNQUFNLENBQUNFLEtBRG5DO0FBRVpILFVBQU0sRUFBRUYsVUFBVSxDQUFDRSxNQUFYLEdBQW9CQyxNQUFNLENBQUNDLEdBQTNCLEdBQWlDRCxNQUFNLENBQUNHLE1BRnBDO0FBR1pHLE9BQUcsRUFBRUMsb0RBQU07QUFIQyxHQUFkLENBRmdCLENBUWhCOztB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QixhQUFTLFVBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQkYsQ0FERjtBQW9CRCxDQXZFRDs7R0FBTVgsSzs7S0FBQUEsSztBQXlFU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmM5NDRmYzU3ZWVmMWFmODViMWJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuXG5pbnRlcmZhY2UgRGF0YSB7XG4gIGRhdGU6IHN0cmluZztcbiAgZGlzdGFuY2U6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIEdyYXBoUHJvcHMge1xuICBkYXRhOiBEYXRhW107XG4gIGRpbWVuc2lvbnM/OiB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgfTtcbiAgbWFyZ2luPzoge1xuICAgIHRvcDogbnVtYmVyO1xuICAgIHJpZ2h0OiBudW1iZXI7XG4gICAgYm90dG9tOiBudW1iZXI7XG4gICAgbGVmdDogbnVtYmVyO1xuICB9O1xufVxuXG5jb25zdCBHcmFwaCA9ICh7XG4gIGRhdGEsXG4gIGRpbWVuc2lvbnMgPSB7IHdpZHRoOiA1NjAsIGhlaWdodDogNDAwIH0sXG4gIG1hcmdpbiA9IHsgdG9wOiA0MCwgcmlnaHQ6IDIwLCBib3R0b206IDUwLCBsZWZ0OiAxMDAgfSxcbn06IEdyYXBoUHJvcHMpID0+IHtcbiAgLy8gZGVmaW5lIGdyYXBoXG4gIGNvbnN0IGdyYXBoID0ge1xuICAgIHdpZHRoOiBkaW1lbnNpb25zLndpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQsXG4gICAgaGVpZ2h0OiBkaW1lbnNpb25zLmhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tLFxuICAgIHJlZjogdXNlUmVmKCksXG4gIH07XG5cbiAgLy8gZGVmaW5lIHNjYWxlc1xuICBjb25zdCBzY2FsZXMgPSB7XG4gICAgeDogZDMuc2NhbGVUaW1lKCkucmFuZ2UoWzAsIGdyYXBoLndpZHRoXSksXG4gICAgeTogZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbZ3JhcGguaGVpZ2h0LCAwXSksXG4gIH07XG5cbiAgLy8gZGVmaW5lIGF4aXNcbiAgY29uc3QgYXhpcyA9IHtcbiAgICB4OiB7XG4gICAgICByZWY6IHVzZVJlZigpLFxuICAgICAgdGlja3M6IDQsXG4gICAgfSxcbiAgICB5OiB7XG4gICAgICByZWY6IHVzZVJlZigpLFxuICAgICAgdGlja3M6IDQsXG4gICAgfSxcbiAgfTtcblxuICAvLyBkZWZpbmUgdXBkYXRlIGZ1bmN0aW9uXG4gIGNvbnN0IHVwZGF0ZSA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgcGF0aHMgPSBkMy5zZWxlY3QoZ3JhcGgucmVmLmN1cnJlbnQpLnNlbGVjdEFsbChcInBhdGhcIikuZGF0YShkYXRhKTtcblxuICAgIC8vIHNldCBzY2FsZSBkb21haW5zXG4gICAgc2NhbGVzLnguZG9tYWluKGQzLmV4dGVudChkYXRhLCAoZDogRGF0YSkgPT4gbmV3IERhdGUoZC5kYXRlKSkpO1xuICAgIHNjYWxlcy55LmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIChkOiBEYXRhKSA9PiBkLmRpc3RhbmNlKV0pO1xuXG4gICAgLy8gc2V0IGF4aXNcbiAgICBkMy5zZWxlY3QoYXhpcy54LnJlZi5jdXJyZW50KS5jYWxsKFxuICAgICAgZDMuYXhpc0JvdHRvbShzY2FsZXMueCkudGlja3MoYXhpcy54LnRpY2tzKVxuICAgICk7XG4gICAgZDMuc2VsZWN0KGF4aXMueS5yZWYuY3VycmVudCkuY2FsbChcbiAgICAgIGQzLmF4aXNMZWZ0KHNjYWxlcy55KS50aWNrcyhheGlzLnkudGlja3MpXG4gICAgKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVwZGF0ZShkYXRhKTtcbiAgfSwgW2RhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPXtkaW1lbnNpb25zLndpZHRofVxuICAgICAgaGVpZ2h0PXtkaW1lbnNpb25zLmhlaWdodH1cbiAgICAgIGNsYXNzTmFtZT17YGdyYXBoYH1cbiAgICA+XG4gICAgICA8Z1xuICAgICAgICByZWY9e2dyYXBoLnJlZn1cbiAgICAgICAgd2lkdGg9e2dyYXBoLndpZHRofVxuICAgICAgICBoZWlnaHQ9e2dyYXBoLmhlaWdodH1cbiAgICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCAke21hcmdpbi50b3B9KWB9XG4gICAgICAvPlxuICAgICAgPGdcbiAgICAgICAgcmVmPXtheGlzLngucmVmfVxuICAgICAgICBjbGFzc05hbWU9e2B4LWF4aXNgfVxuICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoMCwgJHtncmFwaC5oZWlnaHR9KWB9XG4gICAgICAvPlxuICAgICAgPGcgcmVmPXtheGlzLnkucmVmfSBjbGFzc05hbWU9e2B5LWF4aXNgfSAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JhcGg7XG4iXSwic291cmNlUm9vdCI6IiJ9