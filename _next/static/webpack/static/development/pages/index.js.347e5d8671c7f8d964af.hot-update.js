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
    })]); // set exit points

    circles.exit().remove(); // set update points

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
      lineNumber: 88,
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
      lineNumber: 93,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: axis.x.ref,
    className: "graph-axis graph-axis-x",
    transform: "translate(".concat(margin.left, ", ").concat(graph.height + margin.top, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: axis.y.ref,
    className: "graph-axis graph-axis-y",
    transform: "translate(".concat(margin.left, ", ").concat(margin.top, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dyYXBoLnRzeCJdLCJuYW1lcyI6WyJHcmFwaCIsImRhdGEiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJncmFwaCIsInJlZiIsInVzZVJlZiIsInNjYWxlcyIsIngiLCJkMyIsInJhbmdlIiwieSIsImF4aXMiLCJ0aWNrcyIsImZvcm1hdCIsImQiLCJ1cGRhdGUiLCJjaXJjbGVzIiwiY3VycmVudCIsInNlbGVjdEFsbCIsImRvbWFpbiIsIkRhdGUiLCJkYXRlIiwiZGlzdGFuY2UiLCJleGl0IiwicmVtb3ZlIiwiYXR0ciIsImVudGVyIiwiYXBwZW5kIiwiY2FsbCIsInRpY2tGb3JtYXQiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQXFCQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUlJO0FBQUE7O0FBQUEsTUFIaEJDLElBR2dCLFFBSGhCQSxJQUdnQjtBQUFBLDZCQUZoQkMsVUFFZ0I7QUFBQSxNQUZoQkEsVUFFZ0IsZ0NBRkg7QUFBRUMsU0FBSyxFQUFFLEdBQVQ7QUFBY0MsVUFBTSxFQUFFO0FBQXRCLEdBRUc7QUFBQSx5QkFEaEJDLE1BQ2dCO0FBQUEsTUFEaEJBLE1BQ2dCLDRCQURQO0FBQUVDLE9BQUcsRUFBRSxFQUFQO0FBQVdDLFNBQUssRUFBRSxFQUFsQjtBQUFzQkMsVUFBTSxFQUFFLEVBQTlCO0FBQWtDQyxRQUFJLEVBQUU7QUFBeEMsR0FDTztBQUNoQjtBQUNBLE1BQU1DLEtBQUssR0FBRztBQUNaUCxTQUFLLEVBQUVELFVBQVUsQ0FBQ0MsS0FBWCxHQUFtQkUsTUFBTSxDQUFDSSxJQUExQixHQUFpQ0osTUFBTSxDQUFDRSxLQURuQztBQUVaSCxVQUFNLEVBQUVGLFVBQVUsQ0FBQ0UsTUFBWCxHQUFvQkMsTUFBTSxDQUFDQyxHQUEzQixHQUFpQ0QsTUFBTSxDQUFDRyxNQUZwQztBQUdaRyxPQUFHLEVBQUVDLG9EQUFNO0FBSEMsR0FBZCxDQUZnQixDQVFoQjs7QUFDQSxNQUFNQyxNQUFNLEdBQUc7QUFDYkMsS0FBQyxFQUFFQyw0Q0FBQSxHQUFlQyxLQUFmLENBQXFCLENBQUMsQ0FBRCxFQUFJTixLQUFLLENBQUNQLEtBQVYsQ0FBckIsQ0FEVTtBQUViYyxLQUFDLEVBQUVGLDhDQUFBLEdBQWlCQyxLQUFqQixDQUF1QixDQUFDTixLQUFLLENBQUNOLE1BQVAsRUFBZSxDQUFmLENBQXZCO0FBRlUsR0FBZixDQVRnQixDQWNoQjs7QUFDQSxNQUFNYyxJQUFJLEdBQUc7QUFDWEosS0FBQyxFQUFFO0FBQUVILFNBQUcsRUFBRUMsb0RBQU0sRUFBYjtBQUFpQk8sV0FBSyxFQUFFLENBQXhCO0FBQTJCQyxZQUFNLEVBQUVMLDZDQUFBO0FBQW5DLEtBRFE7QUFFWEUsS0FBQyxFQUFFO0FBQUVOLFNBQUcsRUFBRUMsb0RBQU0sRUFBYjtBQUFpQk8sV0FBSyxFQUFFLENBQXhCO0FBQTJCQyxZQUFNLEVBQUUsZ0JBQUNDLENBQUQ7QUFBQSx5QkFBVUEsQ0FBVjtBQUFBO0FBQW5DO0FBRlEsR0FBYixDQWZnQixDQW9CaEI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ3JCLElBQUQsRUFBVTtBQUN2QixRQUFNc0IsT0FBTyxHQUFHUix5Q0FBQSxDQUFVTCxLQUFLLENBQUNDLEdBQU4sQ0FBVWEsT0FBcEIsRUFBNkJDLFNBQTdCLENBQXVDLFFBQXZDLEVBQWlEeEIsSUFBakQsQ0FBc0RBLElBQXRELENBQWhCLENBRHVCLENBR3ZCOztBQUNBWSxVQUFNLENBQUNDLENBQVAsQ0FBU1ksTUFBVCxDQUFnQlgseUNBQUEsQ0FBVWQsSUFBVixFQUFnQixVQUFDb0IsQ0FBRDtBQUFBLGFBQWEsSUFBSU0sSUFBSixDQUFTTixDQUFDLENBQUNPLElBQVgsQ0FBYjtBQUFBLEtBQWhCLENBQWhCO0FBQ0FmLFVBQU0sQ0FBQ0ksQ0FBUCxDQUFTUyxNQUFULENBQWdCLENBQUMsQ0FBRCxFQUFJWCxzQ0FBQSxDQUFPZCxJQUFQLEVBQWEsVUFBQ29CLENBQUQ7QUFBQSxhQUFhQSxDQUFDLENBQUNRLFFBQWY7QUFBQSxLQUFiLENBQUosQ0FBaEIsRUFMdUIsQ0FPdkI7O0FBQ0FOLFdBQU8sQ0FBQ08sSUFBUixHQUFlQyxNQUFmLEdBUnVCLENBVXZCOztBQUNBUixXQUFPLENBQ0pTLElBREgsQ0FDUSxHQURSLEVBQ2EsQ0FEYixFQUVHQSxJQUZILENBRVEsSUFGUixFQUVjLFVBQUNYLENBQUQ7QUFBQSxhQUFhUixNQUFNLENBQUNDLENBQVAsQ0FBUyxJQUFJYSxJQUFKLENBQVNOLENBQUMsQ0FBQ08sSUFBWCxDQUFULENBQWI7QUFBQSxLQUZkLEVBR0dJLElBSEgsQ0FHUSxJQUhSLEVBR2MsVUFBQ1gsQ0FBRDtBQUFBLGFBQWFSLE1BQU0sQ0FBQ0ksQ0FBUCxDQUFTSSxDQUFDLENBQUNRLFFBQVgsQ0FBYjtBQUFBLEtBSGQsRUFJR0csSUFKSCxDQUlRLE1BSlIsRUFJZ0IsTUFKaEIsRUFYdUIsQ0FpQnZCOztBQUNBVCxXQUFPLENBQ0pVLEtBREgsR0FFR0MsTUFGSCxDQUVVLFFBRlYsRUFHR0YsSUFISCxDQUdRLEdBSFIsRUFHYSxDQUhiLEVBSUdBLElBSkgsQ0FJUSxJQUpSLEVBSWMsVUFBQ1gsQ0FBRDtBQUFBLGFBQWFSLE1BQU0sQ0FBQ0MsQ0FBUCxDQUFTLElBQUlhLElBQUosQ0FBU04sQ0FBQyxDQUFDTyxJQUFYLENBQVQsQ0FBYjtBQUFBLEtBSmQsRUFLR0ksSUFMSCxDQUtRLElBTFIsRUFLYyxVQUFDWCxDQUFEO0FBQUEsYUFBYVIsTUFBTSxDQUFDSSxDQUFQLENBQVNJLENBQUMsQ0FBQ1EsUUFBWCxDQUFiO0FBQUEsS0FMZCxFQU1HRyxJQU5ILENBTVEsTUFOUixFQU1nQixNQU5oQixFQWxCdUIsQ0EwQnZCOztBQUNBakIsNkNBQUEsQ0FBVUcsSUFBSSxDQUFDSixDQUFMLENBQU9ILEdBQVAsQ0FBV2EsT0FBckIsRUFBOEJXLElBQTlCLENBQ0VwQiw2Q0FBQSxDQUFjRixNQUFNLENBQUNDLENBQXJCLEVBQXdCSyxLQUF4QixDQUE4QkQsSUFBSSxDQUFDSixDQUFMLENBQU9LLEtBQXJDLEVBQTRDaUIsVUFBNUMsQ0FBdURsQixJQUFJLENBQUNKLENBQUwsQ0FBT00sTUFBOUQsQ0FERjtBQUdBTCw2Q0FBQSxDQUFVRyxJQUFJLENBQUNELENBQUwsQ0FBT04sR0FBUCxDQUFXYSxPQUFyQixFQUE4QlcsSUFBOUIsQ0FDRXBCLDJDQUFBLENBQVlGLE1BQU0sQ0FBQ0ksQ0FBbkIsRUFBc0JFLEtBQXRCLENBQTRCRCxJQUFJLENBQUNELENBQUwsQ0FBT0UsS0FBbkMsRUFBMENpQixVQUExQyxDQUFxRGxCLElBQUksQ0FBQ0QsQ0FBTCxDQUFPRyxNQUE1RCxDQURGO0FBR0QsR0FqQ0Q7O0FBbUNBaUIseURBQVMsQ0FBQyxZQUFNO0FBQ2RmLFVBQU0sQ0FBQ3JCLElBQUQsQ0FBTjtBQUNELEdBRlEsRUFFTixDQUFDQSxJQUFELENBRk0sQ0FBVDtBQUlBLFNBQ0U7QUFDRSxTQUFLLEVBQUVDLFVBQVUsQ0FBQ0MsS0FEcEI7QUFFRSxVQUFNLEVBQUVELFVBQVUsQ0FBQ0UsTUFGckI7QUFHRSxhQUFTLFNBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQ0UsT0FBRyxFQUFFTSxLQUFLLENBQUNDLEdBRGI7QUFFRSxhQUFTLGNBRlg7QUFHRSxTQUFLLEVBQUVELEtBQUssQ0FBQ1AsS0FIZjtBQUlFLFVBQU0sRUFBRU8sS0FBSyxDQUFDTixNQUpoQjtBQUtFLGFBQVMsc0JBQWVDLE1BQU0sQ0FBQ0ksSUFBdEIsZUFBK0JKLE1BQU0sQ0FBQ0MsR0FBdEMsTUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFZRTtBQUNFLE9BQUcsRUFBRVksSUFBSSxDQUFDSixDQUFMLENBQU9ILEdBRGQ7QUFFRSxhQUFTLDJCQUZYO0FBR0UsYUFBUyxzQkFBZU4sTUFBTSxDQUFDSSxJQUF0QixlQUErQkMsS0FBSyxDQUFDTixNQUFOLEdBQWVDLE1BQU0sQ0FBQ0MsR0FBckQsTUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsRUFpQkU7QUFDRSxPQUFHLEVBQUVZLElBQUksQ0FBQ0QsQ0FBTCxDQUFPTixHQURkO0FBRUUsYUFBUywyQkFGWDtBQUdFLGFBQVMsc0JBQWVOLE1BQU0sQ0FBQ0ksSUFBdEIsZUFBK0JKLE1BQU0sQ0FBQ0MsR0FBdEMsTUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakJGLENBREY7QUF5QkQsQ0F6RkQ7O0dBQU1OLEs7O0tBQUFBLEs7QUEyRlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4zNDdlNWQ4NjcxYzdmOGQ5NjRhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcblxuaW50ZXJmYWNlIERhdGEge1xuICBkYXRlOiBzdHJpbmc7XG4gIGRpc3RhbmNlOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBHcmFwaFByb3BzIHtcbiAgZGF0YTogRGF0YVtdO1xuICBkaW1lbnNpb25zPzoge1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gIH07XG4gIG1hcmdpbj86IHtcbiAgICB0b3A6IG51bWJlcjtcbiAgICByaWdodDogbnVtYmVyO1xuICAgIGJvdHRvbTogbnVtYmVyO1xuICAgIGxlZnQ6IG51bWJlcjtcbiAgfTtcbn1cblxuY29uc3QgR3JhcGggPSAoe1xuICBkYXRhLFxuICBkaW1lbnNpb25zID0geyB3aWR0aDogNTYwLCBoZWlnaHQ6IDQwMCB9LFxuICBtYXJnaW4gPSB7IHRvcDogNDAsIHJpZ2h0OiAyMCwgYm90dG9tOiA1MCwgbGVmdDogNDAgfSxcbn06IEdyYXBoUHJvcHMpID0+IHtcbiAgLy8gZGVmaW5lIGdyYXBoXG4gIGNvbnN0IGdyYXBoID0ge1xuICAgIHdpZHRoOiBkaW1lbnNpb25zLndpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQsXG4gICAgaGVpZ2h0OiBkaW1lbnNpb25zLmhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tLFxuICAgIHJlZjogdXNlUmVmKCksXG4gIH07XG5cbiAgLy8gZGVmaW5lIHNjYWxlc1xuICBjb25zdCBzY2FsZXMgPSB7XG4gICAgeDogZDMuc2NhbGVUaW1lKCkucmFuZ2UoWzAsIGdyYXBoLndpZHRoXSksXG4gICAgeTogZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbZ3JhcGguaGVpZ2h0LCAwXSksXG4gIH07XG5cbiAgLy8gZGVmaW5lIGF4aXNcbiAgY29uc3QgYXhpcyA9IHtcbiAgICB4OiB7IHJlZjogdXNlUmVmKCksIHRpY2tzOiA0LCBmb3JtYXQ6IGQzLnRpbWVGb3JtYXQoYCViICVkYCkgfSxcbiAgICB5OiB7IHJlZjogdXNlUmVmKCksIHRpY2tzOiA0LCBmb3JtYXQ6IChkKSA9PiBgJHtkfW1gIH0sXG4gIH07XG5cbiAgLy8gZGVmaW5lIHVwZGF0ZSBmdW5jdGlvblxuICBjb25zdCB1cGRhdGUgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IGNpcmNsZXMgPSBkMy5zZWxlY3QoZ3JhcGgucmVmLmN1cnJlbnQpLnNlbGVjdEFsbChcImNpcmNsZVwiKS5kYXRhKGRhdGEpO1xuXG4gICAgLy8gc2V0IHNjYWxlIGRvbWFpbnNcbiAgICBzY2FsZXMueC5kb21haW4oZDMuZXh0ZW50KGRhdGEsIChkOiBEYXRhKSA9PiBuZXcgRGF0ZShkLmRhdGUpKSk7XG4gICAgc2NhbGVzLnkuZG9tYWluKFswLCBkMy5tYXgoZGF0YSwgKGQ6IERhdGEpID0+IGQuZGlzdGFuY2UpXSk7XG5cbiAgICAvLyBzZXQgZXhpdCBwb2ludHNcbiAgICBjaXJjbGVzLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIC8vIHNldCB1cGRhdGUgcG9pbnRzXG4gICAgY2lyY2xlc1xuICAgICAgLmF0dHIoXCJyXCIsIDQpXG4gICAgICAuYXR0cihcImN4XCIsIChkOiBEYXRhKSA9PiBzY2FsZXMueChuZXcgRGF0ZShkLmRhdGUpKSlcbiAgICAgIC5hdHRyKFwiY3lcIiwgKGQ6IERhdGEpID0+IHNjYWxlcy55KGQuZGlzdGFuY2UpKVxuICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiI2NjY1wiKTtcblxuICAgIC8vIHNldCBlbnRlciBwb2ludHNcbiAgICBjaXJjbGVzXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgLmF0dHIoXCJyXCIsIDQpXG4gICAgICAuYXR0cihcImN4XCIsIChkOiBEYXRhKSA9PiBzY2FsZXMueChuZXcgRGF0ZShkLmRhdGUpKSlcbiAgICAgIC5hdHRyKFwiY3lcIiwgKGQ6IERhdGEpID0+IHNjYWxlcy55KGQuZGlzdGFuY2UpKVxuICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiI2NjY1wiKTtcblxuICAgIC8vIHNldCBheGlzXG4gICAgZDMuc2VsZWN0KGF4aXMueC5yZWYuY3VycmVudCkuY2FsbChcbiAgICAgIGQzLmF4aXNCb3R0b20oc2NhbGVzLngpLnRpY2tzKGF4aXMueC50aWNrcykudGlja0Zvcm1hdChheGlzLnguZm9ybWF0KVxuICAgICk7XG4gICAgZDMuc2VsZWN0KGF4aXMueS5yZWYuY3VycmVudCkuY2FsbChcbiAgICAgIGQzLmF4aXNMZWZ0KHNjYWxlcy55KS50aWNrcyhheGlzLnkudGlja3MpLnRpY2tGb3JtYXQoYXhpcy55LmZvcm1hdClcbiAgICApO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdXBkYXRlKGRhdGEpO1xuICB9LCBbZGF0YV0pO1xuXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9e2RpbWVuc2lvbnMud2lkdGh9XG4gICAgICBoZWlnaHQ9e2RpbWVuc2lvbnMuaGVpZ2h0fVxuICAgICAgY2xhc3NOYW1lPXtgZ3JhcGhgfVxuICAgID5cbiAgICAgIDxnXG4gICAgICAgIHJlZj17Z3JhcGgucmVmfVxuICAgICAgICBjbGFzc05hbWU9e2BncmFwaC1ib2R5YH1cbiAgICAgICAgd2lkdGg9e2dyYXBoLndpZHRofVxuICAgICAgICBoZWlnaHQ9e2dyYXBoLmhlaWdodH1cbiAgICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCAke21hcmdpbi50b3B9KWB9XG4gICAgICAvPlxuICAgICAgPGdcbiAgICAgICAgcmVmPXtheGlzLngucmVmfVxuICAgICAgICBjbGFzc05hbWU9e2BncmFwaC1heGlzIGdyYXBoLWF4aXMteGB9XG4gICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwgJHtncmFwaC5oZWlnaHQgKyBtYXJnaW4udG9wfSlgfVxuICAgICAgLz5cbiAgICAgIDxnXG4gICAgICAgIHJlZj17YXhpcy55LnJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtgZ3JhcGgtYXhpcyBncmFwaC1heGlzLXlgfVxuICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sICR7bWFyZ2luLnRvcH0pYH1cbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcmFwaDtcbiJdLCJzb3VyY2VSb290IjoiIn0=