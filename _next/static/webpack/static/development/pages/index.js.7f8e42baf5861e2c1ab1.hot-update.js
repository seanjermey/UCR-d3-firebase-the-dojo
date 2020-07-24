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
      "class": "x-axis",
      ticks: 4
    },
    y: {
      ref: Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(),
      "class": "y-axis",
      ticks: 4
    }
  }; // define update function

  var update = function update(data) {
    var paths = d3__WEBPACK_IMPORTED_MODULE_1__["select"](graph.ref.current).select("path").data(data); // set scale domains

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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
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
      lineNumber: 78,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: axis.x.ref,
    className: axis.x["class"],
    transform: "translate(0, ".concat(graph.height, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: axis.y.ref,
    className: axis.y["class"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dyYXBoLnRzeCJdLCJuYW1lcyI6WyJHcmFwaCIsImRhdGEiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJncmFwaCIsInJlZiIsInVzZVJlZiIsInNjYWxlcyIsIngiLCJkMyIsInJhbmdlIiwieSIsImF4aXMiLCJ0aWNrcyIsInVwZGF0ZSIsInBhdGhzIiwiY3VycmVudCIsInNlbGVjdCIsImRvbWFpbiIsImQiLCJEYXRlIiwiZGF0ZSIsImRpc3RhbmNlIiwiY2FsbCIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBcUJBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BSUk7QUFBQTs7QUFBQSxNQUhoQkMsSUFHZ0IsUUFIaEJBLElBR2dCO0FBQUEsNkJBRmhCQyxVQUVnQjtBQUFBLE1BRmhCQSxVQUVnQixnQ0FGSDtBQUFFQyxTQUFLLEVBQUUsR0FBVDtBQUFjQyxVQUFNLEVBQUU7QUFBdEIsR0FFRztBQUFBLHlCQURoQkMsTUFDZ0I7QUFBQSxNQURoQkEsTUFDZ0IsNEJBRFA7QUFBRUMsT0FBRyxFQUFFLEVBQVA7QUFBV0MsU0FBSyxFQUFFLEVBQWxCO0FBQXNCQyxVQUFNLEVBQUUsRUFBOUI7QUFBa0NDLFFBQUksRUFBRTtBQUF4QyxHQUNPO0FBQ2hCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHO0FBQ1pQLFNBQUssRUFBRUQsVUFBVSxDQUFDQyxLQUFYLEdBQW1CRSxNQUFNLENBQUNJLElBQTFCLEdBQWlDSixNQUFNLENBQUNFLEtBRG5DO0FBRVpILFVBQU0sRUFBRUYsVUFBVSxDQUFDRSxNQUFYLEdBQW9CQyxNQUFNLENBQUNDLEdBQTNCLEdBQWlDRCxNQUFNLENBQUNHLE1BRnBDO0FBR1pHLE9BQUcsRUFBRUMsb0RBQU07QUFIQyxHQUFkLENBRmdCLENBUWhCOztBQUNB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RWMsSUFBSSxDQUFDRCxDQUFMLENBQU9OLEdBQWY7QUFBb0IsYUFBUyxFQUFFTyxJQUFJLENBQUNELENBQUwsU0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLENBREY7QUFnQkQsQ0FyRUQ7O0dBQU1qQixLOztLQUFBQSxLO0FBdUVTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuN2Y4ZTQyYmFmNTg2MWUyYzFhYjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5cbmludGVyZmFjZSBEYXRhIHtcbiAgZGF0ZTogc3RyaW5nO1xuICBkaXN0YW5jZTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgR3JhcGhQcm9wcyB7XG4gIGRhdGE6IERhdGFbXTtcbiAgZGltZW5zaW9ucz86IHtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICB9O1xuICBtYXJnaW4/OiB7XG4gICAgdG9wOiBudW1iZXI7XG4gICAgcmlnaHQ6IG51bWJlcjtcbiAgICBib3R0b206IG51bWJlcjtcbiAgICBsZWZ0OiBudW1iZXI7XG4gIH07XG59XG5cbmNvbnN0IEdyYXBoID0gKHtcbiAgZGF0YSxcbiAgZGltZW5zaW9ucyA9IHsgd2lkdGg6IDU2MCwgaGVpZ2h0OiA0MDAgfSxcbiAgbWFyZ2luID0geyB0b3A6IDQwLCByaWdodDogMjAsIGJvdHRvbTogNTAsIGxlZnQ6IDEwMCB9LFxufTogR3JhcGhQcm9wcykgPT4ge1xuICAvLyBkZWZpbmUgZ3JhcGhcbiAgY29uc3QgZ3JhcGggPSB7XG4gICAgd2lkdGg6IGRpbWVuc2lvbnMud2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodCxcbiAgICBoZWlnaHQ6IGRpbWVuc2lvbnMuaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b20sXG4gICAgcmVmOiB1c2VSZWYoKSxcbiAgfTtcblxuICAvLyBkZWZpbmUgc2NhbGVzXG4gIGNvbnN0IHNjYWxlcyA9IHtcbiAgICB4OiBkMy5zY2FsZVRpbWUoKS5yYW5nZShbMCwgZ3JhcGgud2lkdGhdKSxcbiAgICB5OiBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtncmFwaC5oZWlnaHQsIDBdKSxcbiAgfTtcblxuICAvLyBkZWZpbmUgYXhpc1xuICBjb25zdCBheGlzID0ge1xuICAgIHg6IHtcbiAgICAgIHJlZjogdXNlUmVmKCksXG4gICAgICBjbGFzczogXCJ4LWF4aXNcIixcbiAgICAgIHRpY2tzOiA0LFxuICAgIH0sXG4gICAgeToge1xuICAgICAgcmVmOiB1c2VSZWYoKSxcbiAgICAgIGNsYXNzOiBcInktYXhpc1wiLFxuICAgICAgdGlja3M6IDQsXG4gICAgfSxcbiAgfTtcblxuICAvLyBkZWZpbmUgdXBkYXRlIGZ1bmN0aW9uXG4gIGNvbnN0IHVwZGF0ZSA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgcGF0aHMgPSBkMy5zZWxlY3QoZ3JhcGgucmVmLmN1cnJlbnQpLnNlbGVjdChcInBhdGhcIikuZGF0YShkYXRhKTtcblxuICAgIC8vIHNldCBzY2FsZSBkb21haW5zXG4gICAgc2NhbGVzLnguZG9tYWluKGQzLmV4dGVudChkYXRhLCAoZDogRGF0YSkgPT4gbmV3IERhdGUoZC5kYXRlKSkpO1xuICAgIHNjYWxlcy55LmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIChkOiBEYXRhKSA9PiBkLmRpc3RhbmNlKV0pO1xuXG4gICAgLy8gc2V0IGF4aXNcbiAgICBkMy5zZWxlY3QoYXhpcy54LnJlZi5jdXJyZW50KS5jYWxsKFxuICAgICAgZDMuYXhpc0JvdHRvbShzY2FsZXMueCkudGlja3MoYXhpcy54LnRpY2tzKVxuICAgICk7XG4gICAgZDMuc2VsZWN0KGF4aXMueS5yZWYuY3VycmVudCkuY2FsbChcbiAgICAgIGQzLmF4aXNMZWZ0KHNjYWxlcy55KS50aWNrcyhheGlzLnkudGlja3MpXG4gICAgKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVwZGF0ZShkYXRhKTtcbiAgfSwgW2RhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDxzdmcgd2lkdGg9e2RpbWVuc2lvbnMud2lkdGh9IGhlaWdodD17ZGltZW5zaW9ucy5oZWlnaHR9PlxuICAgICAgPGdcbiAgICAgICAgcmVmPXtncmFwaC5yZWZ9XG4gICAgICAgIHdpZHRoPXtncmFwaC53aWR0aH1cbiAgICAgICAgaGVpZ2h0PXtncmFwaC5oZWlnaHR9XG4gICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwgJHttYXJnaW4udG9wfSlgfVxuICAgICAgLz5cbiAgICAgIDxnXG4gICAgICAgIHJlZj17YXhpcy54LnJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtheGlzLnguY2xhc3N9XG4gICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgwLCAke2dyYXBoLmhlaWdodH0pYH1cbiAgICAgIC8+XG4gICAgICA8ZyByZWY9e2F4aXMueS5yZWZ9IGNsYXNzTmFtZT17YXhpcy55LmNsYXNzfSAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JhcGg7XG4iXSwic291cmNlUm9vdCI6IiJ9