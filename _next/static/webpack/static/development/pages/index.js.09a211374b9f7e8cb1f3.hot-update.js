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
    plot: function plot(ref, d) {
      d3__WEBPACK_IMPORTED_MODULE_1__["select"](ref).append("line").attr("x1", 0).attr("y1", scales.y(d.distance)).attr("x2", scales.x(new Date(d.date))).attr("y2", scales.y(d.distance)).attr("stroke", "#aaa").attr("stroke-width", 1).attr("stroke-dasharray", 4);
      d3__WEBPACK_IMPORTED_MODULE_1__["select"](ref).append("line").attr("x1", scales.x(new Date(d.date))).attr("y1", scales.y(d.distance)).attr("x2", scales.x(new Date(d.date))).attr("y2", graph.height).attr("stroke", "#aaa").attr("stroke-width", 1).attr("stroke-dasharray", 4);
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
      guidelines.plot(guidelines.ref.current, d);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dyYXBoLnRzeCJdLCJuYW1lcyI6WyJHcmFwaCIsImRhdGEiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJncmFwaCIsInJlZiIsInVzZVJlZiIsInNjYWxlcyIsIngiLCJkMyIsInJhbmdlIiwieSIsImF4aXMiLCJ0aWNrcyIsImZvcm1hdCIsImQiLCJsaW5lIiwiRGF0ZSIsImRhdGUiLCJkaXN0YW5jZSIsImd1aWRlbGluZXMiLCJwbG90IiwiYXBwZW5kIiwiYXR0ciIsInJlbW92ZSIsInNlbGVjdEFsbCIsInVwZGF0ZSIsInNvcnQiLCJhIiwiYiIsImdldFRpbWUiLCJkb21haW4iLCJjdXJyZW50IiwiY2lyY2xlcyIsImV4aXQiLCJlbnRlciIsIm9uIiwiaSIsIm4iLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjYWxsIiwidGlja0Zvcm1hdCIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBcUJBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BSUk7QUFBQTs7QUFBQSxNQUhoQkMsSUFHZ0IsUUFIaEJBLElBR2dCO0FBQUEsNkJBRmhCQyxVQUVnQjtBQUFBLE1BRmhCQSxVQUVnQixnQ0FGSDtBQUFFQyxTQUFLLEVBQUUsR0FBVDtBQUFjQyxVQUFNLEVBQUU7QUFBdEIsR0FFRztBQUFBLHlCQURoQkMsTUFDZ0I7QUFBQSxNQURoQkEsTUFDZ0IsNEJBRFA7QUFBRUMsT0FBRyxFQUFFLEVBQVA7QUFBV0MsU0FBSyxFQUFFLEVBQWxCO0FBQXNCQyxVQUFNLEVBQUUsRUFBOUI7QUFBa0NDLFFBQUksRUFBRTtBQUF4QyxHQUNPO0FBQ2hCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHO0FBQ1pQLFNBQUssRUFBRUQsVUFBVSxDQUFDQyxLQUFYLEdBQW1CRSxNQUFNLENBQUNJLElBQTFCLEdBQWlDSixNQUFNLENBQUNFLEtBRG5DO0FBRVpILFVBQU0sRUFBRUYsVUFBVSxDQUFDRSxNQUFYLEdBQW9CQyxNQUFNLENBQUNDLEdBQTNCLEdBQWlDRCxNQUFNLENBQUNHLE1BRnBDO0FBR1pHLE9BQUcsRUFBRUMsb0RBQU07QUFIQyxHQUFkLENBRmdCLENBUWhCOztBQUNBLE1BQU1DLE1BQU0sR0FBRztBQUNiQyxLQUFDLEVBQUVDLDRDQUFBLEdBQWVDLEtBQWYsQ0FBcUIsQ0FBQyxDQUFELEVBQUlOLEtBQUssQ0FBQ1AsS0FBVixDQUFyQixDQURVO0FBRWJjLEtBQUMsRUFBRUYsOENBQUEsR0FBaUJDLEtBQWpCLENBQXVCLENBQUNOLEtBQUssQ0FBQ04sTUFBUCxFQUFlLENBQWYsQ0FBdkI7QUFGVSxHQUFmLENBVGdCLENBY2hCOztBQUNBLE1BQU1jLElBQUksR0FBRztBQUNYSixLQUFDLEVBQUU7QUFBRUgsU0FBRyxFQUFFQyxvREFBTSxFQUFiO0FBQWlCTyxXQUFLLEVBQUUsQ0FBeEI7QUFBMkJDLFlBQU0sRUFBRUwsNkNBQUE7QUFBbkMsS0FEUTtBQUVYRSxLQUFDLEVBQUU7QUFBRU4sU0FBRyxFQUFFQyxvREFBTSxFQUFiO0FBQWlCTyxXQUFLLEVBQUUsQ0FBeEI7QUFBMkJDLFlBQU0sRUFBRSxnQkFBQ0MsQ0FBRDtBQUFBLHlCQUFVQSxDQUFWO0FBQUE7QUFBbkM7QUFGUSxHQUFiLENBZmdCLENBb0JoQjs7QUFDQSxNQUFNQyxJQUFJLEdBQUc7QUFDWFgsT0FBRyxFQUFFQyxvREFBTSxFQURBO0FBRVhTLEtBQUMsRUFBRU4sdUNBQUEsR0FFQUQsQ0FGQSxDQUVFLFVBQUNPLENBQUQ7QUFBQSxhQUFPUixNQUFNLENBQUNDLENBQVAsQ0FBUyxJQUFJUyxJQUFKLENBQVNGLENBQUMsQ0FBQ0csSUFBWCxDQUFULENBQVA7QUFBQSxLQUZGLEVBR0FQLENBSEEsQ0FHRSxVQUFDSSxDQUFEO0FBQUEsYUFBT1IsTUFBTSxDQUFDSSxDQUFQLENBQVNJLENBQUMsQ0FBQ0ksUUFBWCxDQUFQO0FBQUEsS0FIRjtBQUZRLEdBQWI7QUFRQSxNQUFNQyxVQUFVLEdBQUc7QUFDakJmLE9BQUcsRUFBRUMsb0RBQU0sRUFETTtBQUVqQmUsUUFBSSxFQUFFLGNBQUNoQixHQUFELEVBQU1VLENBQU4sRUFBWTtBQUNoQk4sK0NBQUEsQ0FBVUosR0FBVixFQUNHaUIsTUFESCxDQUNVLE1BRFYsRUFFR0MsSUFGSCxDQUVRLElBRlIsRUFFYyxDQUZkLEVBR0dBLElBSEgsQ0FHUSxJQUhSLEVBR2NoQixNQUFNLENBQUNJLENBQVAsQ0FBU0ksQ0FBQyxDQUFDSSxRQUFYLENBSGQsRUFJR0ksSUFKSCxDQUlRLElBSlIsRUFJY2hCLE1BQU0sQ0FBQ0MsQ0FBUCxDQUFTLElBQUlTLElBQUosQ0FBU0YsQ0FBQyxDQUFDRyxJQUFYLENBQVQsQ0FKZCxFQUtHSyxJQUxILENBS1EsSUFMUixFQUtjaEIsTUFBTSxDQUFDSSxDQUFQLENBQVNJLENBQUMsQ0FBQ0ksUUFBWCxDQUxkLEVBTUdJLElBTkgsQ0FNUSxRQU5SLEVBTWtCLE1BTmxCLEVBT0dBLElBUEgsQ0FPUSxjQVBSLEVBT3dCLENBUHhCLEVBUUdBLElBUkgsQ0FRUSxrQkFSUixFQVE0QixDQVI1QjtBQVVBZCwrQ0FBQSxDQUFVSixHQUFWLEVBQ0dpQixNQURILENBQ1UsTUFEVixFQUVHQyxJQUZILENBRVEsSUFGUixFQUVjaEIsTUFBTSxDQUFDQyxDQUFQLENBQVMsSUFBSVMsSUFBSixDQUFTRixDQUFDLENBQUNHLElBQVgsQ0FBVCxDQUZkLEVBR0dLLElBSEgsQ0FHUSxJQUhSLEVBR2NoQixNQUFNLENBQUNJLENBQVAsQ0FBU0ksQ0FBQyxDQUFDSSxRQUFYLENBSGQsRUFJR0ksSUFKSCxDQUlRLElBSlIsRUFJY2hCLE1BQU0sQ0FBQ0MsQ0FBUCxDQUFTLElBQUlTLElBQUosQ0FBU0YsQ0FBQyxDQUFDRyxJQUFYLENBQVQsQ0FKZCxFQUtHSyxJQUxILENBS1EsSUFMUixFQUtjbkIsS0FBSyxDQUFDTixNQUxwQixFQU1HeUIsSUFOSCxDQU1RLFFBTlIsRUFNa0IsTUFObEIsRUFPR0EsSUFQSCxDQU9RLGNBUFIsRUFPd0IsQ0FQeEIsRUFRR0EsSUFSSCxDQVFRLGtCQVJSLEVBUTRCLENBUjVCO0FBU0QsS0F0QmdCO0FBdUJqQkMsVUFBTSxFQUFFLGdCQUFDbkIsR0FBRCxFQUFTO0FBQ2ZJLCtDQUFBLENBQVVKLEdBQVYsRUFBZW9CLFNBQWYsQ0FBeUIsTUFBekIsRUFBaUNELE1BQWpDO0FBQ0Q7QUF6QmdCLEdBQW5CLENBN0JnQixDQXlEaEI7O0FBQ0EsTUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQy9CLElBQUQsRUFBVTtBQUN2QjtBQUNBQSxRQUFJLENBQUNnQyxJQUFMLENBQ0UsVUFBQ0MsQ0FBRCxFQUFVQyxDQUFWO0FBQUEsYUFDRSxJQUFJWixJQUFKLENBQVNXLENBQUMsQ0FBQ1YsSUFBWCxFQUFpQlksT0FBakIsS0FBNkIsSUFBSWIsSUFBSixDQUFTWSxDQUFDLENBQUNYLElBQVgsRUFBaUJZLE9BQWpCLEVBRC9CO0FBQUEsS0FERixFQUZ1QixDQU92Qjs7QUFDQXZCLFVBQU0sQ0FBQ0MsQ0FBUCxDQUFTdUIsTUFBVCxDQUFnQnRCLHlDQUFBLENBQVVkLElBQVYsRUFBZ0IsVUFBQ29CLENBQUQ7QUFBQSxhQUFhLElBQUlFLElBQUosQ0FBU0YsQ0FBQyxDQUFDRyxJQUFYLENBQWI7QUFBQSxLQUFoQixDQUFoQjtBQUNBWCxVQUFNLENBQUNJLENBQVAsQ0FBU29CLE1BQVQsQ0FBZ0IsQ0FBQyxDQUFELEVBQUl0QixzQ0FBQSxDQUFPZCxJQUFQLEVBQWEsVUFBQ29CLENBQUQ7QUFBQSxhQUFhQSxDQUFDLENBQUNJLFFBQWY7QUFBQSxLQUFiLENBQUosQ0FBaEIsRUFUdUIsQ0FXdkI7O0FBQ0FWLDZDQUFBLENBQVVPLElBQUksQ0FBQ1gsR0FBTCxDQUFTMkIsT0FBbkIsRUFDR3JDLElBREgsQ0FDUSxDQUFDQSxJQUFELENBRFIsRUFFRzRCLElBRkgsQ0FFUSxNQUZSLEVBRWdCLE1BRmhCLEVBR0dBLElBSEgsQ0FHUSxRQUhSLEVBR2tCLFNBSGxCLEVBSUdBLElBSkgsQ0FJUSxjQUpSLEVBSXdCLENBSnhCLEVBS0dBLElBTEgsQ0FLUSxHQUxSLEVBS2FQLElBQUksQ0FBQ0QsQ0FMbEIsRUFadUIsQ0FtQnZCOztBQUNBLFFBQU1rQixPQUFPLEdBQUd4Qix5Q0FBQSxDQUFVTCxLQUFLLENBQUNDLEdBQU4sQ0FBVTJCLE9BQXBCLEVBQTZCUCxTQUE3QixDQUF1QyxRQUF2QyxFQUFpRDlCLElBQWpELENBQXNEQSxJQUF0RCxDQUFoQixDQXBCdUIsQ0FzQnZCOztBQUNBc0MsV0FBTyxDQUFDQyxJQUFSLEdBQWVWLE1BQWYsR0F2QnVCLENBeUJ2Qjs7QUFDQVMsV0FBTyxDQUNKVixJQURILENBQ1EsSUFEUixFQUNjLFVBQUNSLENBQUQ7QUFBQSxhQUFhUixNQUFNLENBQUNDLENBQVAsQ0FBUyxJQUFJUyxJQUFKLENBQVNGLENBQUMsQ0FBQ0csSUFBWCxDQUFULENBQWI7QUFBQSxLQURkLEVBRUdLLElBRkgsQ0FFUSxJQUZSLEVBRWMsVUFBQ1IsQ0FBRDtBQUFBLGFBQWFSLE1BQU0sQ0FBQ0ksQ0FBUCxDQUFTSSxDQUFDLENBQUNJLFFBQVgsQ0FBYjtBQUFBLEtBRmQsRUExQnVCLENBOEJ2Qjs7QUFDQWMsV0FBTyxDQUNKRSxLQURILEdBRUdiLE1BRkgsQ0FFVSxRQUZWLEVBR0dDLElBSEgsQ0FHUSxHQUhSLEVBR2EsQ0FIYixFQUlHQSxJQUpILENBSVEsSUFKUixFQUljLFVBQUNSLENBQUQ7QUFBQSxhQUFhUixNQUFNLENBQUNDLENBQVAsQ0FBUyxJQUFJUyxJQUFKLENBQVNGLENBQUMsQ0FBQ0csSUFBWCxDQUFULENBQWI7QUFBQSxLQUpkLEVBS0dLLElBTEgsQ0FLUSxJQUxSLEVBS2MsVUFBQ1IsQ0FBRDtBQUFBLGFBQWFSLE1BQU0sQ0FBQ0ksQ0FBUCxDQUFTSSxDQUFDLENBQUNJLFFBQVgsQ0FBYjtBQUFBLEtBTGQsRUFNR0ksSUFOSCxDQU1RLE1BTlIsRUFNZ0IsTUFOaEI7QUFRQVUsV0FBTyxDQUNKRyxFQURILENBQ00sV0FETixFQUNtQixVQUFDckIsQ0FBRCxFQUFVc0IsQ0FBVixFQUFhQyxDQUFiLEVBQW1CO0FBQ2xDN0IsK0NBQUEsQ0FBVTZCLENBQUMsQ0FBQ0QsQ0FBRCxDQUFYLEVBQ0dFLFVBREgsR0FFR0MsUUFGSCxDQUVZLEdBRlosRUFHR2pCLElBSEgsQ0FHUSxHQUhSLEVBR2EsQ0FIYixFQUlHQSxJQUpILENBSVEsTUFKUixFQUlnQixNQUpoQjtBQU1BSCxnQkFBVSxDQUFDQyxJQUFYLENBQWdCRCxVQUFVLENBQUNmLEdBQVgsQ0FBZTJCLE9BQS9CLEVBQXdDakIsQ0FBeEM7QUFDRCxLQVRILEVBVUdxQixFQVZILENBVU0sWUFWTixFQVVvQixVQUFDckIsQ0FBRCxFQUFJc0IsQ0FBSixFQUFPQyxDQUFQLEVBQWE7QUFDN0I3QiwrQ0FBQSxDQUFVNkIsQ0FBQyxDQUFDRCxDQUFELENBQVgsRUFDR0UsVUFESCxHQUVHQyxRQUZILENBRVksR0FGWixFQUdHakIsSUFISCxDQUdRLEdBSFIsRUFHYSxDQUhiLEVBSUdBLElBSkgsQ0FJUSxNQUpSLEVBSWdCLE1BSmhCO0FBTUFILGdCQUFVLENBQUNJLE1BQVgsQ0FBa0JKLFVBQVUsQ0FBQ2YsR0FBWCxDQUFlMkIsT0FBakM7QUFDRCxLQWxCSCxFQXZDdUIsQ0EyRHZCOztBQUNBdkIsNkNBQUEsQ0FBVUcsSUFBSSxDQUFDSixDQUFMLENBQU9ILEdBQVAsQ0FBVzJCLE9BQXJCLEVBQThCUyxJQUE5QixDQUNFaEMsNkNBQUEsQ0FBY0YsTUFBTSxDQUFDQyxDQUFyQixFQUF3QkssS0FBeEIsQ0FBOEJELElBQUksQ0FBQ0osQ0FBTCxDQUFPSyxLQUFyQyxFQUE0QzZCLFVBQTVDLENBQXVEOUIsSUFBSSxDQUFDSixDQUFMLENBQU9NLE1BQTlELENBREY7QUFHQUwsNkNBQUEsQ0FBVUcsSUFBSSxDQUFDRCxDQUFMLENBQU9OLEdBQVAsQ0FBVzJCLE9BQXJCLEVBQThCUyxJQUE5QixDQUNFaEMsMkNBQUEsQ0FBWUYsTUFBTSxDQUFDSSxDQUFuQixFQUFzQkUsS0FBdEIsQ0FBNEJELElBQUksQ0FBQ0QsQ0FBTCxDQUFPRSxLQUFuQyxFQUEwQzZCLFVBQTFDLENBQXFEOUIsSUFBSSxDQUFDRCxDQUFMLENBQU9HLE1BQTVELENBREY7QUFHRCxHQWxFRDs7QUFvRUE2Qix5REFBUyxDQUFDLFlBQU07QUFDZGpCLFVBQU0sQ0FBQy9CLElBQUQsQ0FBTjtBQUNELEdBRlEsRUFFTixDQUFDQSxJQUFELENBRk0sQ0FBVDtBQUlBLFNBQ0U7QUFDRSxTQUFLLEVBQUVDLFVBQVUsQ0FBQ0MsS0FEcEI7QUFFRSxVQUFNLEVBQUVELFVBQVUsQ0FBQ0UsTUFGckI7QUFHRSxhQUFTLFNBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQ0UsT0FBRyxFQUFFTSxLQUFLLENBQUNDLEdBRGI7QUFFRSxhQUFTLGNBRlg7QUFHRSxTQUFLLEVBQUVELEtBQUssQ0FBQ1AsS0FIZjtBQUlFLFVBQU0sRUFBRU8sS0FBSyxDQUFDTixNQUpoQjtBQUtFLGFBQVMsc0JBQWVDLE1BQU0sQ0FBQ0ksSUFBdEIsZUFBK0JKLE1BQU0sQ0FBQ0MsR0FBdEMsTUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0U7QUFBTSxPQUFHLEVBQUVnQixJQUFJLENBQUNYLEdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixFQVFFO0FBQUcsT0FBRyxFQUFFZSxVQUFVLENBQUNmLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixDQUxGLEVBZUU7QUFDRSxPQUFHLEVBQUVPLElBQUksQ0FBQ0osQ0FBTCxDQUFPSCxHQURkO0FBRUUsYUFBUywyQkFGWDtBQUdFLGFBQVMsc0JBQWVOLE1BQU0sQ0FBQ0ksSUFBdEIsZUFBK0JDLEtBQUssQ0FBQ04sTUFBTixHQUFlQyxNQUFNLENBQUNDLEdBQXJELE1BSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZGLEVBb0JFO0FBQ0UsT0FBRyxFQUFFWSxJQUFJLENBQUNELENBQUwsQ0FBT04sR0FEZDtBQUVFLGFBQVMsMkJBRlg7QUFHRSxhQUFTLHNCQUFlTixNQUFNLENBQUNJLElBQXRCLGVBQStCSixNQUFNLENBQUNDLEdBQXRDLE1BSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBCRixDQURGO0FBNEJELENBbEtEOztHQUFNTixLOztLQUFBQSxLO0FBb0tTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMDlhMjExMzc0YjlmN2U4Y2IxZjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5cbmludGVyZmFjZSBEYXRhIHtcbiAgZGF0ZTogc3RyaW5nO1xuICBkaXN0YW5jZTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgR3JhcGhQcm9wcyB7XG4gIGRhdGE6IERhdGFbXTtcbiAgZGltZW5zaW9ucz86IHtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICB9O1xuICBtYXJnaW4/OiB7XG4gICAgdG9wOiBudW1iZXI7XG4gICAgcmlnaHQ6IG51bWJlcjtcbiAgICBib3R0b206IG51bWJlcjtcbiAgICBsZWZ0OiBudW1iZXI7XG4gIH07XG59XG5cbmNvbnN0IEdyYXBoID0gKHtcbiAgZGF0YSxcbiAgZGltZW5zaW9ucyA9IHsgd2lkdGg6IDU2MCwgaGVpZ2h0OiA0MDAgfSxcbiAgbWFyZ2luID0geyB0b3A6IDQwLCByaWdodDogMjAsIGJvdHRvbTogNTAsIGxlZnQ6IDEwMCB9LFxufTogR3JhcGhQcm9wcykgPT4ge1xuICAvLyBkZWZpbmUgZ3JhcGhcbiAgY29uc3QgZ3JhcGggPSB7XG4gICAgd2lkdGg6IGRpbWVuc2lvbnMud2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodCxcbiAgICBoZWlnaHQ6IGRpbWVuc2lvbnMuaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b20sXG4gICAgcmVmOiB1c2VSZWYoKSxcbiAgfTtcblxuICAvLyBkZWZpbmUgc2NhbGVzXG4gIGNvbnN0IHNjYWxlcyA9IHtcbiAgICB4OiBkMy5zY2FsZVRpbWUoKS5yYW5nZShbMCwgZ3JhcGgud2lkdGhdKSxcbiAgICB5OiBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtncmFwaC5oZWlnaHQsIDBdKSxcbiAgfTtcblxuICAvLyBkZWZpbmUgYXhpc1xuICBjb25zdCBheGlzID0ge1xuICAgIHg6IHsgcmVmOiB1c2VSZWYoKSwgdGlja3M6IDQsIGZvcm1hdDogZDMudGltZUZvcm1hdChgJWIgJWRgKSB9LFxuICAgIHk6IHsgcmVmOiB1c2VSZWYoKSwgdGlja3M6IDQsIGZvcm1hdDogKGQpID0+IGAke2R9bWAgfSxcbiAgfTtcblxuICAvLyBkZWZpbmUgbGluZVxuICBjb25zdCBsaW5lID0ge1xuICAgIHJlZjogdXNlUmVmKCksXG4gICAgZDogZDNcbiAgICAgIC5saW5lPERhdGE+KClcbiAgICAgIC54KChkKSA9PiBzY2FsZXMueChuZXcgRGF0ZShkLmRhdGUpKSlcbiAgICAgIC55KChkKSA9PiBzY2FsZXMueShkLmRpc3RhbmNlKSksXG4gIH07XG5cbiAgY29uc3QgZ3VpZGVsaW5lcyA9IHtcbiAgICByZWY6IHVzZVJlZigpLFxuICAgIHBsb3Q6IChyZWYsIGQpID0+IHtcbiAgICAgIGQzLnNlbGVjdChyZWYpXG4gICAgICAgIC5hcHBlbmQoXCJsaW5lXCIpXG4gICAgICAgIC5hdHRyKFwieDFcIiwgMClcbiAgICAgICAgLmF0dHIoXCJ5MVwiLCBzY2FsZXMueShkLmRpc3RhbmNlKSlcbiAgICAgICAgLmF0dHIoXCJ4MlwiLCBzY2FsZXMueChuZXcgRGF0ZShkLmRhdGUpKSlcbiAgICAgICAgLmF0dHIoXCJ5MlwiLCBzY2FsZXMueShkLmRpc3RhbmNlKSlcbiAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCIjYWFhXCIpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDEpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlLWRhc2hhcnJheVwiLCA0KTtcblxuICAgICAgZDMuc2VsZWN0KHJlZilcbiAgICAgICAgLmFwcGVuZChcImxpbmVcIilcbiAgICAgICAgLmF0dHIoXCJ4MVwiLCBzY2FsZXMueChuZXcgRGF0ZShkLmRhdGUpKSlcbiAgICAgICAgLmF0dHIoXCJ5MVwiLCBzY2FsZXMueShkLmRpc3RhbmNlKSlcbiAgICAgICAgLmF0dHIoXCJ4MlwiLCBzY2FsZXMueChuZXcgRGF0ZShkLmRhdGUpKSlcbiAgICAgICAgLmF0dHIoXCJ5MlwiLCBncmFwaC5oZWlnaHQpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiI2FhYVwiKVxuICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAxKVxuICAgICAgICAuYXR0cihcInN0cm9rZS1kYXNoYXJyYXlcIiwgNCk7XG4gICAgfSxcbiAgICByZW1vdmU6IChyZWYpID0+IHtcbiAgICAgIGQzLnNlbGVjdChyZWYpLnNlbGVjdEFsbChcImxpbmVcIikucmVtb3ZlKCk7XG4gICAgfSxcbiAgfTtcblxuICAvLyBkZWZpbmUgdXBkYXRlIGZ1bmN0aW9uXG4gIGNvbnN0IHVwZGF0ZSA9IChkYXRhKSA9PiB7XG4gICAgLy8gc29ydCBkYXRhIGJ5IGRhdGVcbiAgICBkYXRhLnNvcnQoXG4gICAgICAoYTogRGF0YSwgYjogRGF0YSkgPT5cbiAgICAgICAgbmV3IERhdGUoYS5kYXRlKS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShiLmRhdGUpLmdldFRpbWUoKVxuICAgICk7XG5cbiAgICAvLyBzZXQgc2NhbGUgZG9tYWluc1xuICAgIHNjYWxlcy54LmRvbWFpbihkMy5leHRlbnQoZGF0YSwgKGQ6IERhdGEpID0+IG5ldyBEYXRlKGQuZGF0ZSkpKTtcbiAgICBzY2FsZXMueS5kb21haW4oWzAsIGQzLm1heChkYXRhLCAoZDogRGF0YSkgPT4gZC5kaXN0YW5jZSldKTtcblxuICAgIC8vIHNldCBsaW5lXG4gICAgZDMuc2VsZWN0KGxpbmUucmVmLmN1cnJlbnQpXG4gICAgICAuZGF0YShbZGF0YV0pXG4gICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAuYXR0cihcInN0cm9rZVwiLCBcIiMwMGJmYTVcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIpXG4gICAgICAuYXR0cihcImRcIiwgbGluZS5kKTtcblxuICAgIC8vIGdldCBjaXJjbGVzXG4gICAgY29uc3QgY2lyY2xlcyA9IGQzLnNlbGVjdChncmFwaC5yZWYuY3VycmVudCkuc2VsZWN0QWxsKFwiY2lyY2xlXCIpLmRhdGEoZGF0YSk7XG5cbiAgICAvLyBzZXQgY2lyY2xlcyBleGl0XG4gICAgY2lyY2xlcy5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICAvLyBzZXQgY2lyY2xlcyB1cGRhdGVcbiAgICBjaXJjbGVzXG4gICAgICAuYXR0cihcImN4XCIsIChkOiBEYXRhKSA9PiBzY2FsZXMueChuZXcgRGF0ZShkLmRhdGUpKSlcbiAgICAgIC5hdHRyKFwiY3lcIiwgKGQ6IERhdGEpID0+IHNjYWxlcy55KGQuZGlzdGFuY2UpKTtcblxuICAgIC8vIHNldCBjaXJjbGVzIGVudGVyXG4gICAgY2lyY2xlc1xuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAgIC5hdHRyKFwiclwiLCA0KVxuICAgICAgLmF0dHIoXCJjeFwiLCAoZDogRGF0YSkgPT4gc2NhbGVzLngobmV3IERhdGUoZC5kYXRlKSkpXG4gICAgICAuYXR0cihcImN5XCIsIChkOiBEYXRhKSA9PiBzY2FsZXMueShkLmRpc3RhbmNlKSlcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIiNjY2NcIik7XG5cbiAgICBjaXJjbGVzXG4gICAgICAub24oXCJtb3VzZW92ZXJcIiwgKGQ6IERhdGEsIGksIG4pID0+IHtcbiAgICAgICAgZDMuc2VsZWN0KG5baV0pXG4gICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbigxMDApXG4gICAgICAgICAgLmF0dHIoXCJyXCIsIDgpXG4gICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiI2ZmZlwiKTtcblxuICAgICAgICBndWlkZWxpbmVzLnBsb3QoZ3VpZGVsaW5lcy5yZWYuY3VycmVudCwgZCk7XG4gICAgICB9KVxuICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCAoZCwgaSwgbikgPT4ge1xuICAgICAgICBkMy5zZWxlY3QobltpXSlcbiAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKDEwMClcbiAgICAgICAgICAuYXR0cihcInJcIiwgNClcbiAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCIjY2NjXCIpO1xuXG4gICAgICAgIGd1aWRlbGluZXMucmVtb3ZlKGd1aWRlbGluZXMucmVmLmN1cnJlbnQpO1xuICAgICAgfSk7XG5cbiAgICAvLyBzZXQgYXhpc1xuICAgIGQzLnNlbGVjdChheGlzLngucmVmLmN1cnJlbnQpLmNhbGwoXG4gICAgICBkMy5heGlzQm90dG9tKHNjYWxlcy54KS50aWNrcyhheGlzLngudGlja3MpLnRpY2tGb3JtYXQoYXhpcy54LmZvcm1hdClcbiAgICApO1xuICAgIGQzLnNlbGVjdChheGlzLnkucmVmLmN1cnJlbnQpLmNhbGwoXG4gICAgICBkMy5heGlzTGVmdChzY2FsZXMueSkudGlja3MoYXhpcy55LnRpY2tzKS50aWNrRm9ybWF0KGF4aXMueS5mb3JtYXQpXG4gICAgKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVwZGF0ZShkYXRhKTtcbiAgfSwgW2RhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPXtkaW1lbnNpb25zLndpZHRofVxuICAgICAgaGVpZ2h0PXtkaW1lbnNpb25zLmhlaWdodH1cbiAgICAgIGNsYXNzTmFtZT17YGdyYXBoYH1cbiAgICA+XG4gICAgICA8Z1xuICAgICAgICByZWY9e2dyYXBoLnJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtgZ3JhcGgtYm9keWB9XG4gICAgICAgIHdpZHRoPXtncmFwaC53aWR0aH1cbiAgICAgICAgaGVpZ2h0PXtncmFwaC5oZWlnaHR9XG4gICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwgJHttYXJnaW4udG9wfSlgfVxuICAgICAgPlxuICAgICAgICA8cGF0aCByZWY9e2xpbmUucmVmfSAvPlxuICAgICAgICA8ZyByZWY9e2d1aWRlbGluZXMucmVmfSAvPlxuICAgICAgPC9nPlxuICAgICAgPGdcbiAgICAgICAgcmVmPXtheGlzLngucmVmfVxuICAgICAgICBjbGFzc05hbWU9e2BncmFwaC1heGlzIGdyYXBoLWF4aXMteGB9XG4gICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwgJHtncmFwaC5oZWlnaHQgKyBtYXJnaW4udG9wfSlgfVxuICAgICAgLz5cbiAgICAgIDxnXG4gICAgICAgIHJlZj17YXhpcy55LnJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtgZ3JhcGgtYXhpcyBncmFwaC1heGlzLXlgfVxuICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sICR7bWFyZ2luLnRvcH0pYH1cbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcmFwaDtcbiJdLCJzb3VyY2VSb290IjoiIn0=