webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/PostLink.js":
/*!************************************!*\
  !*** ./src/components/PostLink.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/jayveebasco/Documents/Projects/next/src/components/PostLink.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const PostLink = props => {
  const {
    post
  } = props;
  console.log(post);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, post.map((postItem, index) => __jsx("li", {
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("a", {
    href: "/post?title=".concat(postItem.title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, postItem.title))))));
};

/* harmony default export */ __webpack_exports__["default"] = (PostLink);

/***/ })

})
//# sourceMappingURL=index.js.09e10b4908a3205cbee6.hot-update.js.map