webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/post.js":
false,

/***/ "./src/lib/postData.js":
/*!*****************************!*\
  !*** ./src/lib/postData.js ***!
  \*****************************/
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
/* harmony import */ var _lib_postData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/postData */ "./src/lib/postData.js");
var _jsxFileName = "/home/jayveebasco/Documents/Projects/next/src/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Index = () => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "My Blog"), __jsx(_components_PostLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    post: _lib_postData__WEBPACK_IMPORTED_MODULE_2__["blogs"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.9601935dd190c6e550c7.hot-update.js.map