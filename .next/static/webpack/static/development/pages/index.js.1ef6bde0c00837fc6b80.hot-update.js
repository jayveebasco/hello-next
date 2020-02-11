webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/post.js":
/*!*************************!*\
  !*** ./src/lib/post.js ***!
  \*************************/
/*! exports provided: blogs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blogs", function() { return blogs; });
const blogs = [{
  title: 'Hello Next.js'
}, {
  title: 'Learn Next.js is awesome'
}, {
  title: 'Deploy apps with Zeit'
}];

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PostLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PostLink */ "./src/components/PostLink.js");
/* harmony import */ var _lib_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/post */ "./src/lib/post.js");
var _jsxFileName = "/home/jayveebasco/Documents/Projects/next/src/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Index = () => {
  console.log(_lib_post__WEBPACK_IMPORTED_MODULE_2__["blogs"]);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "My Blog"), __jsx(_components_PostLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    post: _lib_post__WEBPACK_IMPORTED_MODULE_2__["blogs"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.1ef6bde0c00837fc6b80.hot-update.js.map