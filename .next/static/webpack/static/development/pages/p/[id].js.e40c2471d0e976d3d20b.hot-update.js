webpackHotUpdate("static\\development\\pages\\p\\[id].js",{

/***/ "./src/pages/p/[id].js":
/*!*****************************!*\
  !*** ./src/pages/p/[id].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ "./src/components/Layout.js");
var _jsxFileName = "C:\\Users\\Jayvee Basco\\OneDrive\\Documents\\Projects\\Next\\hello-next\\src\\pages\\p\\[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Post = props => {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, props.show.name), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, props.show.summary.replace(/<[/]?[pb]>/g, '')), props.show.image ? __jsx("img", {
    src: props.show.image.medium,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }) : null));
};

Post.getInitialProps = async function (context) {
  const {
    id
  } = context.query;
  const res = await fetch("https://api.tvmaze.com/shows/".concat(id));
  const show = await res.json();
  console.log("Fetched show: ".concat(show.name));
  return {
    show
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=[id].js.e40c2471d0e976d3d20b.hot-update.js.map