(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["spritejs"] = factory();
	else
		root["spritejs"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 296);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "glMatrix", function() { return _common_js__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _mat2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat2", function() { return _mat2_js__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _mat2d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat2d", function() { return _mat2d_js__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _mat3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat3", function() { return _mat3_js__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _mat4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat4", function() { return _mat4_js__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var _quat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "quat", function() { return _quat_js__WEBPACK_IMPORTED_MODULE_5__; });
/* harmony import */ var _quat2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "quat2", function() { return _quat2_js__WEBPACK_IMPORTED_MODULE_6__; });
/* harmony import */ var _vec2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec2", function() { return _vec2_js__WEBPACK_IMPORTED_MODULE_7__; });
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec3", function() { return _vec3_js__WEBPACK_IMPORTED_MODULE_8__; });
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec4", function() { return _vec4_js__WEBPACK_IMPORTED_MODULE_9__; });












/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPSILON", function() { return EPSILON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARRAY_TYPE", function() { return ARRAY_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RANDOM", function() { return RANDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMatrixArrayType", function() { return setMatrixArrayType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRadian", function() { return toRadian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var RANDOM = Math.random;
/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */

function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */

function toRadian(a) {
  return a * degree;
}
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */

function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}
if (!Math.hypot) Math.hypot = function () {
  var y = 0,
      i = arguments.length;

  while (i--) {
    y += arguments[i] * arguments[i];
  }

  return Math.sqrt(y);
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjoint", function() { return adjoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LDU", function() { return LDU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * 2x2 Matrix
 * @module mat2
 */

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
  }

  out[0] = 1;
  out[3] = 1;
  return out;
}
/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {mat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */

function fromValues(m00, m01, m10, m11) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}
/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */

function set(out, m00, m01, m10, m11) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}
/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache
  // some values
  if (out === a) {
    var a1 = a[1];
    out[1] = a[2];
    out[2] = a1;
  } else {
    out[0] = a[0];
    out[1] = a[2];
    out[2] = a[1];
    out[3] = a[3];
  }

  return out;
}
/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */

function invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3]; // Calculate the determinant

  var det = a0 * a3 - a2 * a1;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = a3 * det;
  out[1] = -a1 * det;
  out[2] = -a2 * det;
  out[3] = a0 * det;
  return out;
}
/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */

function adjoint(out, a) {
  // Caching this value is nessecary if out == a
  var a0 = a[0];
  out[0] = a[3];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a0;
  return out;
}
/**
 * Calculates the determinant of a mat2
 *
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  return a[0] * a[3] - a[2] * a[1];
}
/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */

function multiply(out, a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  return out;
}
/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */

function rotate(out, a, rad) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  return out;
}
/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/

function scale(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  return out;
}
/**
 * Returns a string representation of a mat2
 *
 * @param {mat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}
/**
 * Returns Frobenius norm of a mat2
 *
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3]);
}
/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {mat2} L the lower triangular matrix
 * @param {mat2} D the diagonal matrix
 * @param {mat2} U the upper triangular matrix
 * @param {mat2} a the input matrix to factorize
 */

function LDU(L, D, U, a) {
  L[2] = a[2] / a[0];
  U[0] = a[0];
  U[1] = a[1];
  U[3] = a[3] - L[2] * U[1];
  return [L, D, U];
}
/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}
/**
 * Alias for {@link mat2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat2.subtract}
 * @function
 */

var sub = subtract;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * 2x3 Matrix
 * @module mat2d
 *
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, b, c,
 *  d, tx, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, b, 0,
 *  c, d, 0,
 *  tx, ty, 1]
 * </pre>
 * The last column is ignored so the array is shorter and operations are faster.
 */

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](6);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[4] = 0;
    out[5] = 0;
  }

  out[0] = 1;
  out[3] = 1;
  return out;
}
/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {mat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](6);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}
/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}
/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */

function fromValues(a, b, c, d, tx, ty) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](6);
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}
/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */

function set(out, a, b, c, d, tx, ty) {
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}
/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */

function invert(out, a) {
  var aa = a[0],
      ab = a[1],
      ac = a[2],
      ad = a[3];
  var atx = a[4],
      aty = a[5];
  var det = aa * ad - ab * ac;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = ad * det;
  out[1] = -ab * det;
  out[2] = -ac * det;
  out[3] = aa * det;
  out[4] = (ac * aty - ad * atx) * det;
  out[5] = (ab * atx - aa * aty) * det;
  return out;
}
/**
 * Calculates the determinant of a mat2d
 *
 * @param {mat2d} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  return a[0] * a[3] - a[1] * a[2];
}
/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */

function multiply(out, a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  out[4] = a0 * b4 + a2 * b5 + a4;
  out[5] = a1 * b4 + a3 * b5 + a5;
  return out;
}
/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */

function rotate(out, a, rad) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  out[4] = a4;
  out[5] = a5;
  return out;
}
/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/

function scale(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  out[4] = a4;
  out[5] = a5;
  return out;
}
/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/

function translate(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0;
  out[1] = a1;
  out[2] = a2;
  out[3] = a3;
  out[4] = a0 * v0 + a2 * v1 + a4;
  out[5] = a1 * v0 + a3 * v1 + a5;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2d} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat2d} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = v[0];
  out[5] = v[1];
  return out;
}
/**
 * Returns a string representation of a mat2d
 *
 * @param {mat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ')';
}
/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {mat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], 1);
}
/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  return out;
}
/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5));
}
/**
 * Alias for {@link mat2d.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat2d.subtract}
 * @function
 */

var sub = subtract;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat4", function() { return fromMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjoint", function() { return adjoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat2d", function() { return fromMat2d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat", function() { return fromQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalFromMat4", function() { return normalFromMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projection", function() { return projection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](9);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }

  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}
/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */

function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}
/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */

function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */

function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}
/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20; // Calculate the determinant

  var det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  out[0] = a11 * a22 - a12 * a21;
  out[1] = a02 * a21 - a01 * a22;
  out[2] = a01 * a12 - a02 * a11;
  out[3] = a12 * a20 - a10 * a22;
  out[4] = a00 * a22 - a02 * a20;
  out[5] = a02 * a10 - a00 * a12;
  out[6] = a10 * a21 - a11 * a20;
  out[7] = a01 * a20 - a00 * a21;
  out[8] = a00 * a11 - a01 * a10;
  return out;
}
/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b00 = b[0],
      b01 = b[1],
      b02 = b[2];
  var b10 = b[3],
      b11 = b[4],
      b12 = b[5];
  var b20 = b[6],
      b21 = b[7],
      b22 = b[8];
  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;
  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;
  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}
/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */

function translate(out, a, v) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      x = v[0],
      y = v[1];
  out[0] = a00;
  out[1] = a01;
  out[2] = a02;
  out[3] = a10;
  out[4] = a11;
  out[5] = a12;
  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}
/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function rotate(out, a, rad) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;
  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;
  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
}
;
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1];
  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];
  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat3} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = -s;
  out[4] = c;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat3} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/

function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;
  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;
  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}
/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;
  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;
  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;
  return out;
}
/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/

function normalFromMat4(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  return out;
}
/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */

function projection(out, width, height) {
  out[0] = 2 / width;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}
/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ')';
}
/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
}
/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}
/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7],
      a8 = a[8];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7],
      b8 = b[8];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a8), Math.abs(b8));
}
/**
 * Alias for {@link mat3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat3.subtract}
 * @function
 */

var sub = subtract;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjoint", function() { return adjoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromXRotation", function() { return fromXRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromYRotation", function() { return fromYRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromZRotation", function() { return fromZRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslation", function() { return fromRotationTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat2", function() { return fromQuat2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslation", function() { return getTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScaling", function() { return getScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRotation", function() { return getRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslationScale", function() { return fromRotationTranslationScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslationScaleOrigin", function() { return fromRotationTranslationScaleOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat", function() { return fromQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frustum", function() { return frustum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perspective", function() { return perspective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perspectiveFromFieldOfView", function() { return perspectiveFromFieldOfView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ortho", function() { return ortho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookAt", function() { return lookAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetTo", function() { return targetTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](16);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }

  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */

function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */

function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a12 = a[6],
        a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}
/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15]; // Cache only the current line of the second matrix

  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */

function translate(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function rotate(out, a, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11]; // Construct the elements of the rotation matrix

  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  return out;
}
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Scaling vector
 * @returns {mat4} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function fromRotation(out, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c; // Perform rotation-specific matrix multiplication

  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */

function fromRotationTranslation(out, q, v) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {quat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */

function fromQuat2(out, a) {
  var translation = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense

  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }

  fromRotationTranslation(out, a, translation);
  return out;
}
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */

function getRotation(out, mat) {
  var scaling = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  getScaling(scaling, mat);
  var is1 = 1 / scaling[0];
  var is2 = 1 / scaling[1];
  var is3 = 1 / scaling[2];
  var sm11 = mat[0] * is1;
  var sm12 = mat[1] * is2;
  var sm13 = mat[2] * is3;
  var sm21 = mat[4] * is1;
  var sm22 = mat[5] * is2;
  var sm23 = mat[6] * is3;
  var sm31 = mat[8] * is1;
  var sm32 = mat[9] * is2;
  var sm33 = mat[10] * is3;
  var trace = sm11 + sm22 + sm33;
  var S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (sm23 - sm32) / S;
    out[1] = (sm31 - sm13) / S;
    out[2] = (sm12 - sm21) / S;
  } else if (sm11 > sm22 && sm11 > sm33) {
    S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
    out[3] = (sm23 - sm32) / S;
    out[0] = 0.25 * S;
    out[1] = (sm12 + sm21) / S;
    out[2] = (sm31 + sm13) / S;
  } else if (sm22 > sm33) {
    S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
    out[3] = (sm31 - sm13) / S;
    out[0] = (sm12 + sm21) / S;
    out[1] = 0.25 * S;
    out[2] = (sm23 + sm32) / S;
  } else {
    S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
    out[3] = (sm12 - sm21) / S;
    out[0] = (sm31 + sm13) / S;
    out[1] = (sm23 + sm32) / S;
    out[2] = 0.25 * S;
  }

  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */

function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @param {vec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */

function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  var ox = o[0];
  var oy = o[1];
  var oz = o[2];
  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;
  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;
  return out;
}
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */

function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}
/**
 * Generates a perspective projection matrix with the given bounds.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspective(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;

  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }

  return out;
}
/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
  var xScale = 2.0 / (leftTan + rightTan);
  var yScale = 2.0 / (upTan + downTan);
  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = far * near / (near - far);
  out[15] = 0.0;
  return out;
}
/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function ortho(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */

function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];

  if (Math.abs(eyex - centerx) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] && Math.abs(eyey - centery) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] && Math.abs(eyez - centerz) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    return identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len = 1 / Math.hypot(z0, z1, z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.hypot(x0, x1, x2);

  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len = Math.hypot(y0, y1, y2);

  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */

function targetTo(out, eye, target, up) {
  var eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];
  var z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];
  var len = z0 * z0 + z1 * z1 + z2 * z2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  var x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;
  len = x0 * x0 + x1 * x1 + x2 * x2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}
;
/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
}
/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}
/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  out[9] = a[9] + b[9] * scale;
  out[10] = a[10] + b[10] * scale;
  out[11] = a[11] + b[11] * scale;
  out[12] = a[12] + b[12] * scale;
  out[13] = a[13] + b[13] * scale;
  out[14] = a[14] + b[14] * scale;
  out[15] = a[15] + b[15] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var a8 = a[8],
      a9 = a[9],
      a10 = a[10],
      a11 = a[11];
  var a12 = a[12],
      a13 = a[13],
      a14 = a[14],
      a15 = a[15];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  var b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  var b8 = b[8],
      b9 = b[9],
      b10 = b[10],
      b11 = b[11];
  var b12 = b[12],
      b13 = b[13],
      b14 = b[14],
      b15 = b[15];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}
/**
 * Alias for {@link mat4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat4.subtract}
 * @function
 */

var sub = subtract;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAxisAngle", function() { return setAxisAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAxisAngle", function() { return getAxisAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAngle", function() { return getAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateW", function() { return calculateW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exp", function() { return exp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ln", function() { return ln; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pow", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slerp", function() { return slerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conjugate", function() { return conjugate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat3", function() { return fromMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEuler", function() { return fromEuler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotationTo", function() { return rotationTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqlerp", function() { return sqlerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAxes", function() { return setAxes; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);




/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  out[3] = 1;
  return out;
}
/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/

function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  var s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}
/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {quat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */

function getAxisAngle(out_axis, q) {
  var rad = Math.acos(q[3]) * 2.0;
  var s = Math.sin(rad / 2.0);

  if (s > _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }

  return rad;
}
/**
 * Gets the angular distance between two unit quaternions
 *
 * @param  {quat} a     Origin unit quaternion 
 * @param  {quat} b     Destination unit quaternion
 * @return {Number}     Angle, in radians, between the two quaternions
 */

function getAngle(a, b) {
  var dotproduct = dot(a, b);
  return Math.acos(2 * dotproduct * dotproduct - 1);
}
/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */

function multiply(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateX(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateY(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var by = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateZ(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bz = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}
/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */

function calculateW(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}
/**
 * Calculate the exponential of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate the exponential of
 * @returns {quat} out
 */

function exp(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var et = Math.exp(w);
  var s = r > 0 ? et * Math.sin(r) / r : 0;
  out[0] = x * s;
  out[1] = y * s;
  out[2] = z * s;
  out[3] = et * Math.cos(r);
  return out;
}
/**
 * Calculate the natural logarithm of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate the exponential of
 * @returns {quat} out
 */

function ln(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var t = r > 0 ? Math.atan2(r, w) / r : 0;
  out[0] = x * t;
  out[1] = y * t;
  out[2] = z * t;
  out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
  return out;
}
/**
 * Calculate the scalar power of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate the exponential of
 * @param {Number} b amount to scale the quaternion by
 * @returns {quat} out
 */

function pow(out, a, b) {
  ln(out, a);
  scale(out, out, b);
  exp(out, out);
  return out;
}
/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  var omega, cosom, sinom, scale0, scale1; // calc cosine

  cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)

  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  } // calculate coefficients


  if (1.0 - cosom > _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    // standard case (slerp)
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  } // calculate final values


  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}
/**
 * Generates a random unit quaternion
 * 
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function random(out) {
  // Implementation of http://planning.cs.uiuc.edu/node198.html
  // TODO: Calling random 3 times is probably not the fastest solution
  var u1 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]();
  var u2 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]();
  var u3 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]();
  var sqrt1MinusU1 = Math.sqrt(1 - u1);
  var sqrtU1 = Math.sqrt(u1);
  out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
  out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
  out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
  out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
  return out;
}
/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */

function invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  var invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}
/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */

function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */

function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  var fTrace = m[0] + m[4] + m[8];
  var fRoot;

  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0); // 2w

    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot; // 1/(4w)

    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    // |w| <= 1/2
    var i = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[i * 3 + i]) i = 2;
    var j = (i + 1) % 3;
    var k = (i + 2) % 3;
    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }

  return out;
}
/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */

function fromEuler(out, x, y, z) {
  var halfToRad = 0.5 * Math.PI / 180.0;
  x *= halfToRad;
  y *= halfToRad;
  z *= halfToRad;
  var sx = Math.sin(x);
  var cx = Math.cos(x);
  var sy = Math.sin(y);
  var cy = Math.cos(y);
  var sz = Math.sin(z);
  var cz = Math.cos(z);
  out[0] = sx * cy * cz - cx * sy * sz;
  out[1] = cx * sy * cz + sx * cy * sz;
  out[2] = cx * cy * sz - sx * sy * cz;
  out[3] = cx * cy * cz + sx * sy * sz;
  return out;
}
/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */

var clone = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["clone"];
/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */

var fromValues = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["fromValues"];
/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */

var copy = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["copy"];
/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */

var set = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["set"];
/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */

var add = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["add"];
/**
 * Alias for {@link quat.multiply}
 * @function
 */

var mul = multiply;
/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */

var scale = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["scale"];
/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

var dot = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["dot"];
/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 * @function
 */

var lerp = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["lerp"];
/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 */

var length = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["length"];
/**
 * Alias for {@link quat.length}
 * @function
 */

var len = length;
/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

var squaredLength = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["squaredLength"];
/**
 * Alias for {@link quat.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */

var normalize = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["normalize"];
/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat} a The first quaternion.
 * @param {quat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var exactEquals = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["exactEquals"];
/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {quat} a The first vector.
 * @param {quat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var equals = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["equals"];
/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */

var rotationTo = function () {
  var tmpvec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["create"]();
  var xUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["fromValues"](1, 0, 0);
  var yUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["fromValues"](0, 1, 0);
  return function (out, a, b) {
    var dot = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["dot"](a, b);

    if (dot < -0.999999) {
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__["cross"](tmpvec3, xUnitVec3, a);
      if (_vec3_js__WEBPACK_IMPORTED_MODULE_2__["len"](tmpvec3) < 0.000001) _vec3_js__WEBPACK_IMPORTED_MODULE_2__["cross"](tmpvec3, yUnitVec3, a);
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__["normalize"](tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__["cross"](tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      return normalize(out, out);
    }
  };
}();
/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {quat} c the third operand
 * @param {quat} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

var sqlerp = function () {
  var temp1 = create();
  var temp2 = create();
  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));
    return out;
  };
}();
/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */

var setAxes = function () {
  var matr = _mat3_js__WEBPACK_IMPORTED_MODULE_1__["create"]();
  return function (out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];
    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];
    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];
    return normalize(out, fromMat3(out, matr));
  };
}();

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hermite", function() { return hermite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bezier", function() { return bezier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat3", function() { return transformMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformQuat", function() { return transformQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zero", function() { return zero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  return out;
}
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.hypot(x, y, z);
}
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */

function fromValues(x, y, z) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */

function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to ceil
 * @returns {vec3} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}
/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to floor
 * @returns {vec3} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}
/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}
/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}
/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to round
 * @returns {vec3} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.hypot(x, y, z);
}
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}
/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2];
  var bx = b[0],
      by = b[1],
      bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2.0 * Math.PI;
  var z = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2.0 - 1.0;
  var zScale = Math.sqrt(1.0 - z * z) * scale;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */

function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];
  var x = a[0],
      y = a[1],
      z = a[2]; // var qvec = [qx, qy, qz];
  // var uv = vec3.cross([], qvec, a);

  var uvx = qy * z - qz * y,
      uvy = qz * x - qx * z,
      uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);

  var uuvx = qy * uvz - qz * uvy,
      uuvy = qz * uvx - qx * uvz,
      uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);

  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2; // vec3.scale(uuv, uuv, 2);

  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));

  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */

function rotateX(out, a, b, c) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0];
  r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c);
  r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */

function rotateY(out, a, b, c) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */

function rotateZ(out, a, b, c) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c);
  r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c);
  r[2] = p[2]; //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var tempA = fromValues(a[0], a[1], a[2]);
  var tempB = fromValues(b[0], b[1], b[2]);
  normalize(tempA, tempA);
  normalize(tempB, tempB);
  var cosine = dot(tempA, tempB);

  if (cosine > 1.0) {
    return 0;
  } else if (cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}
/**
 * Set the components of a vec3 to zero
 *
 * @param {vec3} out the receiving vector
 * @returns {vec3} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {vec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}
/**
 * Alias for {@link vec3.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec3.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec3.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec3.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 3;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }

    return a;
  };
}();

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformQuat", function() { return transformQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zero", function() { return zero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
  }

  return out;
}
/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */

function fromValues(x, y, z, w) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */

function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}
/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}
/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to ceil
 * @returns {vec4} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}
/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to floor
 * @returns {vec4} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}
/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}
/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}
/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to round
 * @returns {vec4} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}
/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return Math.hypot(x, y, z, w);
}
/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return Math.hypot(x, y, z, w);
}
/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}
/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
}
/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  var len = x * x + y * y + z * z + w * w;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }

  out[0] = x * len;
  out[1] = y * len;
  out[2] = z * len;
  out[3] = w * len;
  return out;
}
/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
/**
 * Returns the cross-product of three vectors in a 4-dimensional space
 *
 * @param {vec4} result the receiving vector
 * @param {vec4} U the first vector
 * @param {vec4} V the second vector
 * @param {vec4} W the third vector
 * @returns {vec4} result
 */

function cross(out, u, v, w) {
  var A = v[0] * w[1] - v[1] * w[0],
      B = v[0] * w[2] - v[2] * w[0],
      C = v[0] * w[3] - v[3] * w[0],
      D = v[1] * w[2] - v[2] * w[1],
      E = v[1] * w[3] - v[3] * w[1],
      F = v[2] * w[3] - v[3] * w[2];
  var G = u[0];
  var H = u[1];
  var I = u[2];
  var J = u[3];
  out[0] = H * F - I * E + J * D;
  out[1] = -(G * F) + I * C - J * B;
  out[2] = G * E - H * C + J * A;
  out[3] = -(G * D) + H * B - I * A;
  return out;
}
;
/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec4} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  var aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */

function random(out, scale) {
  scale = scale || 1.0; // Marsaglia, George. Choosing a Point from the Surface of a
  // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
  // http://projecteuclid.org/euclid.aoms/1177692644;

  var v1, v2, v3, v4;
  var s1, s2;

  do {
    v1 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
    v2 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
    s1 = v1 * v1 + v2 * v2;
  } while (s1 >= 1);

  do {
    v3 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
    v4 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
    s2 = v3 * v3 + v4 * v4;
  } while (s2 >= 1);

  var d = Math.sqrt((1 - s1) / s2);
  out[0] = scale * v1;
  out[1] = scale * v2;
  out[2] = scale * v3 * d;
  out[3] = scale * v4 * d;
  return out;
}
/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}
/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */

function transformQuat(out, a, q) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3]; // calculate quat * vec

  var ix = qw * x + qy * z - qz * y;
  var iy = qw * y + qz * x - qx * z;
  var iz = qw * z + qx * y - qy * x;
  var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to zero
 *
 * @param {vec4} out the receiving vector
 * @returns {vec4} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {vec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
/**
 * Alias for {@link vec4.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec4.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec4.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec4.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 4;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      vec[3] = a[i + 3];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
      a[i + 3] = vec[3];
    }

    return a;
  };
}();

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslationValues", function() { return fromRotationTranslationValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslation", function() { return fromRotationTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat4", function() { return fromMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReal", function() { return getReal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDual", function() { return getDual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setReal", function() { return setReal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDual", function() { return setDual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslation", function() { return getTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateByQuatAppend", function() { return rotateByQuatAppend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateByQuatPrepend", function() { return rotateByQuatPrepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateAroundAxis", function() { return rotateAroundAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conjugate", function() { return conjugate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _quat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _mat4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);



/**
 * Dual Quaternion<br>
 * Format: [real, dual]<br>
 * Quaternion format: XYZW<br>
 * Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.<br>
 * @module quat2
 */

/**
 * Creates a new identity dual quat
 *
 * @returns {quat2} a new dual quaternion [real -> rotation, dual -> translation]
 */

function create() {
  var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](8);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    dq[0] = 0;
    dq[1] = 0;
    dq[2] = 0;
    dq[4] = 0;
    dq[5] = 0;
    dq[6] = 0;
    dq[7] = 0;
  }

  dq[3] = 1;
  return dq;
}
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat2} a dual quaternion to clone
 * @returns {quat2} new dual quaternion
 * @function
 */

function clone(a) {
  var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](8);
  dq[0] = a[0];
  dq[1] = a[1];
  dq[2] = a[2];
  dq[3] = a[3];
  dq[4] = a[4];
  dq[5] = a[5];
  dq[6] = a[6];
  dq[7] = a[7];
  return dq;
}
/**
 * Creates a new dual quat initialized with the given values
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} new dual quaternion
 * @function
 */

function fromValues(x1, y1, z1, w1, x2, y2, z2, w2) {
  var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  dq[4] = x2;
  dq[5] = y2;
  dq[6] = z2;
  dq[7] = w2;
  return dq;
}
/**
 * Creates a new dual quat from the given values (quat and translation)
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component (translation)
 * @param {Number} y2 Y component (translation)
 * @param {Number} z2 Z component (translation)
 * @returns {quat2} new dual quaternion
 * @function
 */

function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
  var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  var ax = x2 * 0.5,
      ay = y2 * 0.5,
      az = z2 * 0.5;
  dq[4] = ax * w1 + ay * z1 - az * y1;
  dq[5] = ay * w1 + az * x1 - ax * z1;
  dq[6] = az * w1 + ax * y1 - ay * x1;
  dq[7] = -ax * x1 - ay * y1 - az * z1;
  return dq;
}
/**
 * Creates a dual quat from a quaternion and a translation
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {quat} q a normalized quaternion
 * @param {vec3} t tranlation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function fromRotationTranslation(out, q, t) {
  var ax = t[0] * 0.5,
      ay = t[1] * 0.5,
      az = t[2] * 0.5,
      bx = q[0],
      by = q[1],
      bz = q[2],
      bw = q[3];
  out[0] = bx;
  out[1] = by;
  out[2] = bz;
  out[3] = bw;
  out[4] = ax * bw + ay * bz - az * by;
  out[5] = ay * bw + az * bx - ax * bz;
  out[6] = az * bw + ax * by - ay * bx;
  out[7] = -ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Creates a dual quat from a translation
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {vec3} t translation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function fromTranslation(out, t) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = t[0] * 0.5;
  out[5] = t[1] * 0.5;
  out[6] = t[2] * 0.5;
  out[7] = 0;
  return out;
}
/**
 * Creates a dual quat from a quaternion
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {quat} q the quaternion
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function fromRotation(out, q) {
  out[0] = q[0];
  out[1] = q[1];
  out[2] = q[2];
  out[3] = q[3];
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}
/**
 * Creates a new dual quat from a matrix (4x4)
 *
 * @param {quat2} out the dual quaternion
 * @param {mat4} a the matrix
 * @returns {quat2} dual quat receiving operation result
 * @function
 */

function fromMat4(out, a) {
  //TODO Optimize this
  var outer = _quat_js__WEBPACK_IMPORTED_MODULE_1__["create"]();
  _mat4_js__WEBPACK_IMPORTED_MODULE_2__["getRotation"](outer, a);
  var t = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  _mat4_js__WEBPACK_IMPORTED_MODULE_2__["getTranslation"](t, a);
  fromRotationTranslation(out, outer, t);
  return out;
}
/**
 * Copy the values from one dual quat to another
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the source dual quaternion
 * @returns {quat2} out
 * @function
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  return out;
}
/**
 * Set a dual quat to the identity dual quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @returns {quat2} out
 */

function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}
/**
 * Set the components of a dual quat to the given values
 *
 * @param {quat2} out the receiving quaternion
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} out
 * @function
 */

function set(out, x1, y1, z1, w1, x2, y2, z2, w2) {
  out[0] = x1;
  out[1] = y1;
  out[2] = z1;
  out[3] = w1;
  out[4] = x2;
  out[5] = y2;
  out[6] = z2;
  out[7] = w2;
  return out;
}
/**
 * Gets the real part of a dual quat
 * @param  {quat} out real part
 * @param  {quat2} a Dual Quaternion
 * @return {quat} real part
 */

var getReal = _quat_js__WEBPACK_IMPORTED_MODULE_1__["copy"];
/**
 * Gets the dual part of a dual quat
 * @param  {quat} out dual part
 * @param  {quat2} a Dual Quaternion
 * @return {quat} dual part
 */

function getDual(out, a) {
  out[0] = a[4];
  out[1] = a[5];
  out[2] = a[6];
  out[3] = a[7];
  return out;
}
/**
 * Set the real component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat} q a quaternion representing the real part
 * @returns {quat2} out
 * @function
 */

var setReal = _quat_js__WEBPACK_IMPORTED_MODULE_1__["copy"];
/**
 * Set the dual component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat} q a quaternion representing the dual part
 * @returns {quat2} out
 * @function
 */

function setDual(out, q) {
  out[4] = q[0];
  out[5] = q[1];
  out[6] = q[2];
  out[7] = q[3];
  return out;
}
/**
 * Gets the translation of a normalized dual quat
 * @param  {vec3} out translation
 * @param  {quat2} a Dual Quaternion to be decomposed
 * @return {vec3} translation
 */

function getTranslation(out, a) {
  var ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3];
  out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
  out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
  out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  return out;
}
/**
 * Translates a dual quat by the given vector
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to translate
 * @param {vec3} v vector to translate by
 * @returns {quat2} out
 */

function translate(out, a, v) {
  var ax1 = a[0],
      ay1 = a[1],
      az1 = a[2],
      aw1 = a[3],
      bx1 = v[0] * 0.5,
      by1 = v[1] * 0.5,
      bz1 = v[2] * 0.5,
      ax2 = a[4],
      ay2 = a[5],
      az2 = a[6],
      aw2 = a[7];
  out[0] = ax1;
  out[1] = ay1;
  out[2] = az1;
  out[3] = aw1;
  out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
  out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
  out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
  out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
  return out;
}
/**
 * Rotates a dual quat around the X axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function rotateX(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  _quat_js__WEBPACK_IMPORTED_MODULE_1__["rotateX"](out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat around the Y axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function rotateY(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  _quat_js__WEBPACK_IMPORTED_MODULE_1__["rotateY"](out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat around the Z axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function rotateZ(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  _quat_js__WEBPACK_IMPORTED_MODULE_1__["rotateZ"](out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat by a given quaternion (a * q)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {quat} q quaternion to rotate by
 * @returns {quat2} out
 */

function rotateByQuatAppend(out, a, q) {
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3],
      ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  out[0] = ax * qw + aw * qx + ay * qz - az * qy;
  out[1] = ay * qw + aw * qy + az * qx - ax * qz;
  out[2] = az * qw + aw * qz + ax * qy - ay * qx;
  out[3] = aw * qw - ax * qx - ay * qy - az * qz;
  ax = a[4];
  ay = a[5];
  az = a[6];
  aw = a[7];
  out[4] = ax * qw + aw * qx + ay * qz - az * qy;
  out[5] = ay * qw + aw * qy + az * qx - ax * qz;
  out[6] = az * qw + aw * qz + ax * qy - ay * qx;
  out[7] = aw * qw - ax * qx - ay * qy - az * qz;
  return out;
}
/**
 * Rotates a dual quat by a given quaternion (q * a)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat} q quaternion to rotate by
 * @param {quat2} a the dual quaternion to rotate
 * @returns {quat2} out
 */

function rotateByQuatPrepend(out, q, a) {
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3],
      bx = a[0],
      by = a[1],
      bz = a[2],
      bw = a[3];
  out[0] = qx * bw + qw * bx + qy * bz - qz * by;
  out[1] = qy * bw + qw * by + qz * bx - qx * bz;
  out[2] = qz * bw + qw * bz + qx * by - qy * bx;
  out[3] = qw * bw - qx * bx - qy * by - qz * bz;
  bx = a[4];
  by = a[5];
  bz = a[6];
  bw = a[7];
  out[4] = qx * bw + qw * bx + qy * bz - qz * by;
  out[5] = qy * bw + qw * by + qz * bx - qx * bz;
  out[6] = qz * bw + qw * bz + qx * by - qy * bx;
  out[7] = qw * bw - qx * bx - qy * by - qz * bz;
  return out;
}
/**
 * Rotates a dual quat around a given axis. Does the normalisation automatically
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {vec3} axis the axis to rotate around
 * @param {Number} rad how far the rotation should be
 * @returns {quat2} out
 */

function rotateAroundAxis(out, a, axis, rad) {
  //Special case for rad = 0
  if (Math.abs(rad) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    return copy(out, a);
  }

  var axisLength = Math.hypot(axis[0], axis[1], axis[2]);
  rad = rad * 0.5;
  var s = Math.sin(rad);
  var bx = s * axis[0] / axisLength;
  var by = s * axis[1] / axisLength;
  var bz = s * axis[2] / axisLength;
  var bw = Math.cos(rad);
  var ax1 = a[0],
      ay1 = a[1],
      az1 = a[2],
      aw1 = a[3];
  out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  var ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  out[4] = ax * bw + aw * bx + ay * bz - az * by;
  out[5] = ay * bw + aw * by + az * bx - ax * bz;
  out[6] = az * bw + aw * bz + ax * by - ay * bx;
  out[7] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Adds two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {quat2} out
 * @function
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  return out;
}
/**
 * Multiplies two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {quat2} out
 */

function multiply(out, a, b) {
  var ax0 = a[0],
      ay0 = a[1],
      az0 = a[2],
      aw0 = a[3],
      bx1 = b[4],
      by1 = b[5],
      bz1 = b[6],
      bw1 = b[7],
      ax1 = a[4],
      ay1 = a[5],
      az1 = a[6],
      aw1 = a[7],
      bx0 = b[0],
      by0 = b[1],
      bz0 = b[2],
      bw0 = b[3];
  out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
  out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
  out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
  out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
  out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
  out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
  out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
  out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
  return out;
}
/**
 * Alias for {@link quat2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Scales a dual quat by a scalar number
 *
 * @param {quat2} out the receiving dual quat
 * @param {quat2} a the dual quat to scale
 * @param {Number} b amount to scale the dual quat by
 * @returns {quat2} out
 * @function
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  return out;
}
/**
 * Calculates the dot product of two dual quat's (The dot product of the real parts)
 *
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

var dot = _quat_js__WEBPACK_IMPORTED_MODULE_1__["dot"];
/**
 * Performs a linear interpolation between two dual quats's
 * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
 *
 * @param {quat2} out the receiving dual quat
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat2} out
 */

function lerp(out, a, b, t) {
  var mt = 1 - t;
  if (dot(a, b) < 0) t = -t;
  out[0] = a[0] * mt + b[0] * t;
  out[1] = a[1] * mt + b[1] * t;
  out[2] = a[2] * mt + b[2] * t;
  out[3] = a[3] * mt + b[3] * t;
  out[4] = a[4] * mt + b[4] * t;
  out[5] = a[5] * mt + b[5] * t;
  out[6] = a[6] * mt + b[6] * t;
  out[7] = a[7] * mt + b[7] * t;
  return out;
}
/**
 * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a dual quat to calculate inverse of
 * @returns {quat2} out
 */

function invert(out, a) {
  var sqlen = squaredLength(a);
  out[0] = -a[0] / sqlen;
  out[1] = -a[1] / sqlen;
  out[2] = -a[2] / sqlen;
  out[3] = a[3] / sqlen;
  out[4] = -a[4] / sqlen;
  out[5] = -a[5] / sqlen;
  out[6] = -a[6] / sqlen;
  out[7] = a[7] / sqlen;
  return out;
}
/**
 * Calculates the conjugate of a dual quat
 * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat2} a quat to calculate conjugate of
 * @returns {quat2} out
 */

function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  out[4] = -a[4];
  out[5] = -a[5];
  out[6] = -a[6];
  out[7] = a[7];
  return out;
}
/**
 * Calculates the length of a dual quat
 *
 * @param {quat2} a dual quat to calculate length of
 * @returns {Number} length of a
 * @function
 */

var length = _quat_js__WEBPACK_IMPORTED_MODULE_1__["length"];
/**
 * Alias for {@link quat2.length}
 * @function
 */

var len = length;
/**
 * Calculates the squared length of a dual quat
 *
 * @param {quat2} a dual quat to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

var squaredLength = _quat_js__WEBPACK_IMPORTED_MODULE_1__["squaredLength"];
/**
 * Alias for {@link quat2.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Normalize a dual quat
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a dual quaternion to normalize
 * @returns {quat2} out
 * @function
 */

function normalize(out, a) {
  var magnitude = squaredLength(a);

  if (magnitude > 0) {
    magnitude = Math.sqrt(magnitude);
    var a0 = a[0] / magnitude;
    var a1 = a[1] / magnitude;
    var a2 = a[2] / magnitude;
    var a3 = a[3] / magnitude;
    var b0 = a[4];
    var b1 = a[5];
    var b2 = a[6];
    var b3 = a[7];
    var a_dot_b = a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;
    out[0] = a0;
    out[1] = a1;
    out[2] = a2;
    out[3] = a3;
    out[4] = (b0 - a0 * a_dot_b) / magnitude;
    out[5] = (b1 - a1 * a_dot_b) / magnitude;
    out[6] = (b2 - a2 * a_dot_b) / magnitude;
    out[7] = (b3 - a3 * a_dot_b) / magnitude;
  }

  return out;
}
/**
 * Returns a string representation of a dual quatenion
 *
 * @param {quat2} a dual quaternion to represent as a string
 * @returns {String} string representation of the dual quat
 */

function str(a) {
  return 'quat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ')';
}
/**
 * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat2} a the first dual quaternion.
 * @param {quat2} b the second dual quaternion.
 * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
}
/**
 * Returns whether or not the dual quaternions have approximately the same elements in the same position.
 *
 * @param {quat2} a the first dual quat.
 * @param {quat2} b the second dual quat.
 * @returns {Boolean} true if the dual quats are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a7), Math.abs(b7));
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat2", function() { return transformMat2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat2d", function() { return transformMat2d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat3", function() { return transformMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zero", function() { return zero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](2);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
  }

  return out;
}
/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */

function fromValues(x, y) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](2);
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */

function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}
/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}
/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}
/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to ceil
 * @returns {vec2} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
}
/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to floor
 * @returns {vec2} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
}
/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
}
/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
}
/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to round
 * @returns {vec2} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
}
/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}
/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return x * x + y * y;
}
/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0],
      y = a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0],
      y = a[1];
  return x * x + y * y;
}
/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}
/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
}
/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */

function normalize(out, a) {
  var x = a[0],
      y = a[1];
  var len = x * x + y * y;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  return out;
}
/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}
/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
}
/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec2} out
 */

function lerp(out, a, b, t) {
  var ax = a[0],
      ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
}
/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}
/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2d(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}
/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}
/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat4(out, a, m) {
  var x = a[0];
  var y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}
/**
 * Rotate a 2D vector
 * @param {vec2} out The receiving vec2
 * @param {vec2} a The vec2 point to rotate
 * @param {vec2} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec2} out
 */

function rotate(out, a, b, c) {
  //Translate point to the origin
  var p0 = a[0] - b[0],
      p1 = a[1] - b[1],
      sinC = Math.sin(c),
      cosC = Math.cos(c); //perform rotation and translate to correct position

  out[0] = p0 * cosC - p1 * sinC + b[0];
  out[1] = p0 * sinC + p1 * cosC + b[1];
  return out;
}
/**
 * Get the angle between two 2D vectors
 * @param {vec2} a The first operand
 * @param {vec2} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var x1 = a[0],
      y1 = a[1],
      x2 = b[0],
      y2 = b[1];
  var len1 = x1 * x1 + y1 * y1;

  if (len1 > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len1 = 1 / Math.sqrt(len1);
  }

  var len2 = x2 * x2 + y2 * y2;

  if (len2 > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len2 = 1 / Math.sqrt(len2);
  }

  var cosine = (x1 * x2 + y1 * y2) * len1 * len2;

  if (cosine > 1.0) {
    return 0;
  } else if (cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}
/**
 * Set the components of a vec2 to zero
 *
 * @param {vec2} out the receiving vector
 * @returns {vec2} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {vec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return 'vec2(' + a[0] + ', ' + a[1] + ')';
}
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1];
  var b0 = b[0],
      b1 = b[1];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1));
}
/**
 * Alias for {@link vec2.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec2.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec2.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec2.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 2;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
    }

    return a;
  };
}();

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return _renderer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _figure2d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Figure2D", function() { return _figure2d__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _mesh2d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mesh2D", function() { return _mesh2d__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _mesh_cloud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeshCloud", function() { return _mesh_cloud__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _utils_create_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createText", function() { return _utils_create_text__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _utils_parse_font__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseFont", function() { return _utils_parse_font__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _utils_parse_color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseColor", function() { return _utils_parse_color__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _utils_env__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ENV", function() { return _utils_env__WEBPACK_IMPORTED_MODULE_7__["default"]; });

__webpack_require__(1).glMatrix.setMatrixArrayType(Array);











/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Renderer; });
/* harmony import */ var gl_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _canvas_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _utils_compress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
/* harmony import */ var _utils_create_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40);
/* harmony import */ var _utils_canvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23);
/* harmony import */ var _figure2d__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41);
/* harmony import */ var _mesh2d__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57);
/* harmony import */ var _mesh_cloud__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29);
/* harmony import */ var _utils_transform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(66);
/* harmony import */ var _utils_env__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(21);
/* harmony import */ var _utils_shader_creator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);













const defaultOpts = {
  autoUpdate: false,
  // premultipliedAlpha: true,
  preserveDrawingBuffer: false,
  // depth: false,
  // antialias: false,
  bufferSize: 1500
};

const _glRenderer = Symbol('glRenderer');

const _canvasRenderer = Symbol('canvasRenderer');

const _options = Symbol('options');

const _globalTransform = Symbol('globalTransform');

const _applyGlobalTransform = Symbol('applyGlobalTransform');

const _canvas = Symbol('canvas');

function drawFilterContext(renderer, filterContext, width, height) {
  const filterTexture = renderer.createTexture(filterContext.canvas);
  const contours = [[[0, 0], [width, 0], [width, height], [0, height], [0, 0]]];
  contours.closed = true;
  const filterMesh = new _mesh2d__WEBPACK_IMPORTED_MODULE_7__["default"]({
    contours
  }, {
    width,
    height
  });
  filterMesh.setTexture(filterTexture);
  renderer.setMeshData([filterMesh.meshData]);

  renderer._draw();

  filterTexture.delete();
  filterContext.clearRect(0, 0, width, height);
  delete filterContext._filter;
}

class Renderer {
  constructor(canvas, opts = {}) {
    let contextType = opts.contextType;

    if (!contextType) {
      if (typeof WebGL2RenderingContext === 'function') {
        contextType = 'webgl2';
      } else if (typeof WebGLRenderingContext === 'function') {
        contextType = 'webgl';
      } else {
        contextType = '2d';
      }
    }

    if (!canvas.getContext) {
      // 小程序
      const context = canvas;
      canvas = {
        getContext() {
          return context;
        },

        width: opts.width,
        height: opts.height
      };
      context.canvas = canvas;
      contextType = '2d';
    }

    this[_canvas] = canvas;

    if (contextType !== 'webgl' && contextType !== 'webgl2' && contextType !== '2d') {
      throw new Error(`Unknown context type ${contextType}`);
    }

    opts.contextType = contextType;
    this[_options] = Object.assign({}, defaultOpts, opts);

    if (contextType === 'webgl' || contextType === 'webgl2') {
      if (contextType === 'webgl2') this[_options].webgl2 = true;
      const renderer = new gl_renderer__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, this[_options]);
      Object(_utils_shader_creator__WEBPACK_IMPORTED_MODULE_11__["createShaders"])(renderer);
      Object(_utils_shader_creator__WEBPACK_IMPORTED_MODULE_11__["applyShader"])(renderer);
      Object(_utils_shader_creator__WEBPACK_IMPORTED_MODULE_11__["createCloudShaders"])(renderer);
      const gl = renderer.gl; // gl.clearColor(1.0, 1.0, 1.0, 1.0);
      // gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ZERO, gl.ONE);

      gl.clearColor(0.0, 0.0, 0.0, 0.0);
      gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      this[_glRenderer] = renderer;
    } else {
      this[_canvasRenderer] = new _canvas_renderer__WEBPACK_IMPORTED_MODULE_2__["default"](canvas, this[_options]);
    }

    this[_globalTransform] = [1, 0, 0, 1, 0, 0];
  }

  get canvas() {
    return this[_canvas];
  }

  get canvasRenderer() {
    return this[_canvasRenderer];
  }

  get glRenderer() {
    return this[_glRenderer];
  }

  get isWebGL2() {
    return this[_glRenderer] && this[_glRenderer].isWebGL2;
  }

  get options() {
    return this[_options];
  }

  get globalTransformMatrix() {
    return this[_globalTransform];
  }

  [_applyGlobalTransform](m) {
    const renderer = this[_glRenderer] || this[_canvasRenderer];

    if (this[_glRenderer]) {
      const {
        width,
        height
      } = this.canvas;
      renderer.uniforms.u_globalTransform = [...m.slice(0, 3), width, ...m.slice(3), height];
    } else {
      renderer.setTransform(m);
    }
  }

  createTexture(img) {
    const renderer = this[_glRenderer] || this[_canvasRenderer];
    return renderer.createTexture(img);
  }
  /* async */


  loadTexture(textureURL, {
    useImageBitmap = false
  } = {}) {
    const renderer = this[_glRenderer] || this[_canvasRenderer];
    return renderer.loadTexture(textureURL, {
      useImageBitmap
    });
  }

  createText(text, {
    font = '16px arial',
    fillColor = null,
    strokeColor = null,
    strokeWidth = 1
  } = {}) {
    if (this[_glRenderer]) {
      const img = Object(_utils_create_text__WEBPACK_IMPORTED_MODULE_4__["default"])(text, {
        font,
        fillColor,
        strokeColor
      });
      return {
        image: this.createTexture(img.image),
        rect: img.rect
      };
    }

    return {
      _img: {
        font,
        fillColor,
        strokeColor,
        text
      }
    };
  }

  deleteTexture(texture) {
    const renderer = this[_glRenderer] || this[_canvasRenderer];
    return renderer.deleteTexture(texture);
  }

  clear(...rect) {
    if (this[_glRenderer]) {
      const gl = this[_glRenderer].gl;
      gl.clear(gl.COLOR_BUFFER_BIT);
    } else {
      this[_canvasRenderer].clear(...rect);
    }
  }

  drawMeshCloud(cloud, {
    clear = false,
    program = null,
    attributeOptions = {}
  } = {}) {
    const renderer = this[_glRenderer] || this[_canvasRenderer]; // if(!this.isWebGL2) throw new Error('Only webgl2 context support drawMeshCloud.');

    if (this[_glRenderer]) {
      const gl = renderer.gl;
      if (clear) gl.clear(gl.COLOR_BUFFER_BIT);

      if (!program) {
        const mesh = cloud.mesh.meshData;
        const hasTexture = !!mesh.uniforms.u_texSampler;
        const hasFilter = !!mesh.uniforms.u_filterFlag;
        const hasGradient = !!mesh.uniforms.u_radialGradientVector;
        const hasGlobalTransform = !Object(_utils_transform__WEBPACK_IMPORTED_MODULE_9__["isUnitTransform"])(this[_globalTransform]);
        const hasCloudColor = cloud.hasCloudColor;
        const hasCloudFilter = cloud.hasCloudFilter;
        Object(_utils_shader_creator__WEBPACK_IMPORTED_MODULE_11__["applyCloudShader"])(renderer, {
          hasTexture,
          hasFilter,
          hasGradient,
          hasGlobalTransform,
          hasCloudColor,
          hasCloudFilter
        });
      } else if (renderer.program !== program) {
        renderer.useProgram(program, Object.assign({
          a_color: {
            type: 'UNSIGNED_BYTE',
            normalize: true
          },
          a_fillCloudColor: {
            type: 'UNSIGNED_BYTE',
            normalize: true
          },
          a_strokeCloudColor: {
            type: 'UNSIGNED_BYTE',
            normalize: true
          }
        }, attributeOptions));
      }

      this[_applyGlobalTransform](this[_globalTransform]);

      renderer.setMeshData([cloud.meshData]);
      if (cloud.beforeRender) cloud.beforeRender(gl, cloud);

      renderer._draw();

      if (cloud.afterRender) cloud.afterRender(gl, cloud);
    } else {
      renderer.setTransform(this[_globalTransform]);
      renderer.drawMeshCloud(cloud, {
        clear,
        hook: false
      });
    }
  }

  drawMeshes(meshes, {
    clear = false,
    program = null,
    attributeOptions = {}
  } = {}) {
    // eslint-disable-line complexity
    const renderer = this[_glRenderer] || this[_canvasRenderer];

    if (this[_glRenderer]) {
      const meshData = Object(_utils_compress__WEBPACK_IMPORTED_MODULE_3__["default"])(this, meshes, program == null);
      const gl = renderer.gl;
      if (clear) gl.clear(gl.COLOR_BUFFER_BIT);
      const hasGlobalTransform = !Object(_utils_transform__WEBPACK_IMPORTED_MODULE_9__["isUnitTransform"])(this[_globalTransform]);
      this._drawCalls = 0;

      for (const mesh of meshData) {
        // eslint-disable-line no-restricted-syntax
        this._drawCalls++;

        if (mesh instanceof _mesh_cloud__WEBPACK_IMPORTED_MODULE_8__["default"]) {
          this.drawMeshCloud(mesh, {
            clear,
            program,
            attributeOptions
          }); // continue; // eslint-disable-line no-continue
        } else {
          if (mesh.beforeRender) mesh.beforeRender(gl, mesh);

          if (!program && mesh.filterCanvas) {
            // 有一些滤镜用shader不好实现：blur、drop-shadow、url
            Object(_utils_shader_creator__WEBPACK_IMPORTED_MODULE_11__["applyShader"])(renderer, {
              hasTexture: true
            });
            const {
              width,
              height
            } = this.canvas;
            let filterContext = this.filterContext;

            if (!filterContext) {
              const canvas = _utils_env__WEBPACK_IMPORTED_MODULE_10__["default"].createCanvas(width, height);
              filterContext = canvas.getContext('2d');
              this.filterContext = filterContext;
            }

            const originalMesh = meshes[mesh.packIndex];
            const currentFilter = originalMesh.filter;
            const nextMesh = meshes[mesh.packIndex + 1];
            const previousMesh = meshes[mesh.packIndex - 1];

            if ((!previousMesh || !previousMesh.filterCanvas || previousMesh.filter !== currentFilter) && (!nextMesh || !nextMesh.filterCanvas || nextMesh.filter !== currentFilter)) {
              if (hasGlobalTransform) {
                filterContext.save();
                filterContext.transform(...this[_globalTransform]);
                Object(_utils_canvas__WEBPACK_IMPORTED_MODULE_5__["drawMesh2D"])(originalMesh, filterContext, false);
                filterContext.restore();
                Object(_utils_canvas__WEBPACK_IMPORTED_MODULE_5__["applyFilter"])(filterContext, currentFilter);
              } else {
                Object(_utils_canvas__WEBPACK_IMPORTED_MODULE_5__["drawMesh2D"])(originalMesh, filterContext, true);
              }

              drawFilterContext(renderer, filterContext, width, height);
            } else {
              if (hasGlobalTransform) {
                filterContext.save();
                filterContext.transform(...this[_globalTransform]);
              }

              Object(_utils_canvas__WEBPACK_IMPORTED_MODULE_5__["drawMesh2D"])(originalMesh, filterContext, false);

              if (hasGlobalTransform) {
                filterContext.restore();
              }

              if (!nextMesh || !nextMesh.filterCanvas || originalMesh.filter !== nextMesh.filter) {
                Object(_utils_canvas__WEBPACK_IMPORTED_MODULE_5__["applyFilter"])(filterContext, currentFilter);
                drawFilterContext(renderer, filterContext, width, height);
              }
            }
          } else {
            if (!program) {
              const hasTexture = !!mesh.uniforms.u_texSampler;
              const hasFilter = !!mesh.uniforms.u_filterFlag;
              const hasGradient = !!mesh.uniforms.u_radialGradientVector;
              Object(_utils_shader_creator__WEBPACK_IMPORTED_MODULE_11__["applyShader"])(renderer, {
                hasTexture,
                hasFilter,
                hasGradient,
                hasGlobalTransform
              });
            } else if (renderer.program !== program) {
              renderer.useProgram(program, Object.assign({
                a_color: {
                  type: 'UNSIGNED_BYTE',
                  normalize: true
                }
              }, attributeOptions));
            }

            if (mesh.filterCanvas) {
              console.warn('User program ignored some filter effects.');
            }

            this[_applyGlobalTransform](this[_globalTransform]);

            renderer.setMeshData([mesh]);

            renderer._draw();
          }

          if (mesh.afterRender) mesh.afterRender(gl, mesh);
        }
      }
    } else {
      renderer.setTransform(this[_globalTransform]);
      renderer.drawMeshes(meshes, {
        clear
      });
    }
  }

  drawImage(image, ...args) {
    const argLength = args.length;

    if (argLength < 2) {
      throw new TypeError(`Failed to execute 'drawImage' on 'Renderer': 3 arguments required, but only ${args.length + 1} present.`);
    }

    if (argLength !== 2 && argLength !== 4 && argLength !== 8) {
      throw new TypeError(`Failed to execute 'drawImage' on 'Renderer': Valid arities are: [3, 5, 9], but ${args.length + 1} arguments provided.`);
    }

    let rect = null;
    let srcRect = null;

    if (argLength === 2) {
      // drawImage(image, dx, dy)
      rect = [args[0], args[1], image.width, image.height];
    } else if (argLength === 4) {
      // drawImage(image, dx, dy, dWidth, dHeight)
      rect = args;
    } else if (argLength === 8) {
      // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
      srcRect = args.slice(0, 4);
      rect = args.slice(4);
    }

    const texture = this.createTexture(image);
    const {
      width,
      height
    } = this.canvas;
    const figure = new _figure2d__WEBPACK_IMPORTED_MODULE_6__["default"]();
    figure.rect(rect[0], rect[1], width, height);
    const mesh = new _mesh2d__WEBPACK_IMPORTED_MODULE_7__["default"](figure, {
      width,
      height
    });
    mesh.setTexture(texture, {
      rect,
      srcRect
    });
    this.drawMeshes([mesh]);
    this.deleteTexture(texture);
  }

  setGlobalTransform(...m) {
    const transform = this[_globalTransform];

    if (!gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat2d"].equals(m, transform)) {
      this[_globalTransform] = m;
      m = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat2d"].multiply(Array.of(0, 0, 0, 0, 0, 0), m, gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat2d"].invert(Array.of(0, 0, 0, 0, 0, 0), transform));

      this[_applyGlobalTransform](m);
    }

    return this;
  }

  globalTransform(...m) {
    const transform = this[_globalTransform];
    this[_globalTransform] = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat2d"].multiply(Array.of(0, 0, 0, 0, 0, 0), m, transform);

    this[_applyGlobalTransform](m);

    return this;
  }

  globalTranslate(x, y) {
    let m = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat2d"].create();
    m = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat2d"].translate(Array.of(0, 0, 0, 0, 0, 0), m, [x, y]);
    return this.globalTransform(...m);
  }

  globalRotate(rad, [ox, oy] = [0, 0]) {
    let m = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat2d"].create();
    m = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat2d"].translate(Array.of(0, 0, 0, 0, 0, 0), m, [ox, oy]);
    m = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat2d"].rotate(Array.of(0, 0, 0, 0, 0, 0), m, rad);
    m = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat2d"].translate(Array.of(0, 0, 0, 0, 0, 0), m, [-ox, -oy]);
    return this.globalTransform(...m);
  }

  globalScale(x, y = x, [ox, oy] = [0, 0]) {
    let m = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat2d"].create();
    m = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat2d"].translate(Array.of(0, 0, 0, 0, 0, 0), m, [ox, oy]);
    m = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat2d"].scale(Array.of(0, 0, 0, 0, 0, 0), m, [x, y]);
    m = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat2d"].translate(Array.of(0, 0, 0, 0, 0, 0), m, [-ox, -oy]);
    return this.globalTransform(...m);
  }

  globalSkew(x, y = x, [ox, oy] = [0, 0]) {
    let m = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat2d"].create();
    m = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat2d"].translate(Array.of(0, 0, 0, 0, 0, 0), m, [ox, oy]);
    m = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat2d"].multiply(Array.of(0, 0, 0, 0, 0, 0), m, gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat2d"].fromValues(1, Math.tan(y), Math.tan(x), 1, 0, 0));
    m = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat2d"].translate(Array.of(0, 0, 0, 0, 0, 0), m, [-ox, -oy]);
    return this.globalTransform(...m);
  }

  transformPoint(x, y, matrix) {
    let m = this[_globalTransform];
    if (matrix) m = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["mat2d"].multiply(Array.of(0, 0, 0, 0, 0, 0), m, matrix);
    const newX = x * m[0] + y * m[2] + m[4];
    const newY = x * m[1] + y * m[3] + m[5];
    return [newX, newY];
  }

}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);


/* harmony default export */ __webpack_exports__["default"] = (_renderer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Renderer; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _default_vert_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _default_frag_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _default_feeback_vert_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const GLSL_LIBS = {};

const _renderFrameID = Symbol('renderFrameID');

function mapTextureCoordinate(positions, size = 3) {
  const texVertexData = [];
  const len = positions.length;

  for (let i = 0; i < len; i++) {
    if (i % size < 2) texVertexData.push(0.5 * (positions[i] + 1));
  }

  return texVertexData;
}

function clearBuffers(gl, program) {
  const buffers = program._buffers;
  Object.values(buffers).forEach(buffer => {
    gl.deleteBuffer(buffer);
  });
  program._buffers = {};
}

function bindTexture(gl, texture, i) {
  gl.activeTexture(gl.TEXTURE0 + i);
  gl.bindTexture(gl.TEXTURE_2D, texture);
  return texture;
}

const uniformTypeMap = {
  int: '1i',
  ivec2: '2i',
  ivec3: '3i',
  ivec4: '4i',
  float: '1f',
  vec2: '2f',
  vec3: '3f',
  vec4: '4f',
  mat2: 'Matrix2fv',
  mat3: 'Matrix3fv',
  mat4: 'Matrix4fv',
  sampler2D: 'sampler2D'
};
class Renderer {
  static addLibs(libs = {}) {
    Object.assign(GLSL_LIBS, libs);
  }

  static FLOAT(points, buffer) {
    return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["pointsToBuffer"])(points, Float32Array, buffer);
  }

  static UNSIGNED_BYTE(points, buffer) {
    return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["pointsToBuffer"])(points, Uint8Array, buffer);
  }

  static UNSIGNED_SHORT(points, buffer) {
    return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["pointsToBuffer"])(points, Uint16Array, buffer);
  }

  static BYTE(points, buffer) {
    return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["pointsToBuffer"])(points, Int8Array, buffer);
  }

  static SHORT(points, buffer) {
    return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["pointsToBuffer"])(points, Int16Array, buffer);
  }

  constructor(canvas, opts = {}) {
    this.options = Object.assign({}, Renderer.defaultOptions, opts);
    this.canvas = canvas;
    let gl;

    if (this.options.webgl2) {
      gl = canvas.getContext('webgl2', this.options);
    } else {
      gl = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["setupWebGL"])(canvas, this.options);
      this.aia_ext = gl.getExtension('ANGLE_instanced_arrays');
    }

    this.gl = gl;
    gl.viewport(0, 0, canvas.width, canvas.height); // gl.clearColor(1.0, 1.0, 1.0, 1.0);
    // gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    gl.clearColor(0.0, 0.0, 0.0, 0.0);
    gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    this.programs = [];
    this._events = {};
  }

  get program() {
    const gl = this.gl;
    return gl.getParameter(gl.CURRENT_PROGRAM);
  } // WebGLRenderingContext.uniform[1234][fi][v]()
  // WebGLRenderingContext.uniformMatrix[234]fv()


  _declareUniform(program, name, type = '1f') {
    const gl = this.gl;
    const uniform = gl.getUniformLocation(program, name);
    let value;
    const that = this;

    if (type === 'sampler2D') {
      const samplerMap = program._samplerMap;
      const textures = program._bindTextures;
      Object.defineProperty(program.uniforms, name, {
        get() {
          return value;
        },

        set(v) {
          value = v;
          const idx = samplerMap[name] != null ? samplerMap[name] : textures.length;
          textures[idx] = v;
          bindTexture(gl, v, idx);

          if (!samplerMap[name]) {
            samplerMap[name] = idx;
            gl.uniform1i(uniform, idx);
          }

          if (that.options.autoUpdate) that.update();
        },

        configurable: false,
        enumerable: true
      });
    } else {
      const isMatrix = type.indexOf('Matrix') === 0;
      const isTypeV = !isMatrix && /v$/.test(type);
      const setUniform = gl[`uniform${type}`].bind(gl);
      Object.defineProperty(program.uniforms, name, {
        get() {
          return value;
        },

        set(v) {
          value = v;

          if (typeof v === 'number') {
            v = [v];
          }

          if (isMatrix) setUniform(uniform, false, v);else if (isTypeV) setUniform(uniform, v);else setUniform(uniform, ...v);
          if (that.options.autoUpdate) that.update();
        },

        configurable: false,
        enumerable: true
      });
    }
  }

  _draw() {
    const program = this.program;
    program.meshData.forEach((meshData, meshIndex) => {
      const {
        positions,
        cells,
        instanceCount,
        cellsCount,
        attributes,
        uniforms,
        textureCoord,
        enableBlend
      } = meshData;
      const gl = this.gl;
      if (enableBlend) gl.enable(gl.BLEND);else gl.disable(gl.BLEND);
      gl.bindBuffer(gl.ARRAY_BUFFER, program._buffers.verticesBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, program._buffers.cellsBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, cells, gl.STATIC_DRAW);
      const locations = [];

      if (attributes) {
        Object.values(attributes).forEach(({
          name,
          data,
          divisor
        }) => {
          gl.bindBuffer(gl.ARRAY_BUFFER, program._buffers[name]);
          gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

          if (divisor != null) {
            const location = gl.getAttribLocation(program, name);

            if (location >= 0) {
              gl.enableVertexAttribArray(location);
              locations.push(location);

              if (gl.vertexAttribDivisor) {
                gl.vertexAttribDivisor(location, divisor);
              } else if (this.aia_ext) {
                this.aia_ext.vertexAttribDivisorANGLE(location, divisor);
              }
            }
          }
        });
      }

      if (uniforms) {
        Object.entries(uniforms).forEach(([key, value]) => {
          this.uniforms[key] = value;
        });
      }

      if (program._enableTextures && program._buffers.texCoordBuffer) {
        const texVertexData = textureCoord || mapTextureCoordinate(positions, program._dimension);
        gl.bindBuffer(gl.ARRAY_BUFFER, program._buffers.texCoordBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, Renderer.FLOAT(texVertexData), gl.STATIC_DRAW);
      }

      if (instanceCount != null) {
        if (gl.drawElementsInstanced) {
          gl.drawElementsInstanced(gl.TRIANGLES, cellsCount, gl.UNSIGNED_SHORT, 0, instanceCount);
        } else if (this.aia_ext) {
          this.aia_ext.drawElementsInstancedANGLE(gl.TRIANGLES, cellsCount, gl.UNSIGNED_SHORT, 0, instanceCount);
        }

        locations.forEach(location => {
          gl.vertexAttribDivisor(location, null);
        });
      } else {
        gl.drawElements(gl.TRIANGLES, cellsCount, gl.UNSIGNED_SHORT, 0);
      }
    });
  }

  get isWebGL2() {
    return typeof WebGL2RenderingContext !== 'undefined' && this.gl instanceof WebGL2RenderingContext;
  }

  get enableTextures() {
    return this.program && this.program._enableTextures;
  }

  get uniforms() {
    const program = this.program;

    if (!program || !program.uniforms) {
      throw Error('No avaliable program.');
    }

    return program.uniforms;
  }

  deleteProgram(program) {
    const gl = this.gl;

    if (this.program === program) {
      this.startRender = false;

      if (this[_renderFrameID]) {
        cancelAnimationFrame(this[_renderFrameID]);
        delete this[_renderFrameID];
      }

      gl.useProgram(null);
    }

    const idx = this.programs.indexOf(program);

    if (idx >= 0) {
      this.programs.splice(idx, 1);
    }

    clearBuffers(gl, program);
    gl.deleteProgram(program);
  }
  /**
    [{
      positions: ...
      cells: ...
      textureCoord: ...
      attributes: {name: {data:..., normalize: true}},
      uniforms: ...
    }]
   */


  setMeshData(data) {
    if (!Array.isArray(data)) {
      data = [data];
    }

    const program = this.program;
    program.meshData = data.map(({
      positions,
      instanceCount,
      cells,
      cellsCount,
      attributes,
      uniforms,
      textureCoord,
      enableBlend
    }) => {
      const meshData = {
        positions: Renderer.FLOAT(positions),
        cells: Renderer.USHORT(cells),
        uniforms,
        enableBlend: !!enableBlend,
        textureCoord: Renderer.FLOAT(textureCoord)
      };
      meshData.cellsCount = cellsCount || meshData.cells.length;

      if (instanceCount != null) {
        if (!this.isWebGL2 && !this.aia_ext) throw new Error('Cannot use instanceCount in this rendering context, use webgl2 context instead.');else meshData.instanceCount = instanceCount;
      }

      if (attributes) {
        const copied = {};
        Object.entries(attributes).forEach(([key, value]) => {
          if (!program._attribute[key]) {
            // throw new Error(`Invalid attribute ${key}.`);
            if (false) {}
            program._attribute[key] = 'ignored';
          } else if (program._attribute[key] !== 'ignored') {
            const {
              name,
              type
            } = program._attribute[key];
            let buffer = value.data || value;

            if (Array.isArray(buffer)) {
              buffer = Renderer[type](buffer);
            }

            copied[key] = {
              name,
              data: buffer
            };

            if (value.divisor != null) {
              if (!this.isWebGL2 && !this.aia_ext) throw new Error('Cannot use divisor in this rendering context, use webgl2 context instead.');else copied[key].divisor = value.divisor;
            }
          }
        });
        meshData.attributes = copied;
      }

      return meshData;
    });
    if (this.options.autoUpdate) this.update();
  }

  createProgram(fragmentShader, vertexShader) {
    // this.deleteProgram();
    // this._events = {};
    const enableTextures = /^\s*uniform\s+sampler2D/mg.test(fragmentShader);
    if (fragmentShader == null) fragmentShader = _default_frag_glsl__WEBPACK_IMPORTED_MODULE_2__["default"];
    if (vertexShader == null) vertexShader = enableTextures ? _default_feeback_vert_glsl__WEBPACK_IMPORTED_MODULE_3__["default"] : _default_vert_glsl__WEBPACK_IMPORTED_MODULE_1__["default"];
    const gl = this.gl;
    const program = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createProgram"])(gl, vertexShader, fragmentShader);
    program.shaderText = {
      vertexShader,
      fragmentShader
    };
    program._buffers = {};
    program._attribute = {};
    program.uniforms = {};
    program._samplerMap = {};
    program._bindTextures = [];
    program._enableTextures = enableTextures; // console.log(vertexShader);

    const pattern = new RegExp(`attribute vec(\\d) ${this.options.vertexPosition}`, 'im');
    let matched = vertexShader.match(pattern);

    if (matched) {
      program._dimension = Number(matched[1]);
    }

    const texCoordPattern = new RegExp(`attribute vec(\\d) ${this.options.vertexTextureCoord}`, 'im');
    matched = vertexShader.match(texCoordPattern);

    if (matched) {
      program._texCoordSize = Number(matched[1]);
    }

    const attributePattern = /^\s*attribute (\w+?)(\d*) (\w+)/gim;
    matched = vertexShader.match(attributePattern);

    if (matched) {
      for (let i = 0; i < matched.length; i++) {
        const patt = /^\s*attribute (\w+?)(\d*) (\w+)/im;

        const _matched = matched[i].match(patt);

        if (_matched && _matched[3] !== this.options.vertexPosition && _matched[3] !== this.options.vertexTextureCoord) {
          let [, type, size, name] = _matched;
          if (type === 'mat') size **= 2;
          program._buffers[name] = gl.createBuffer();
          program._attribute[name] = {
            name,
            type,
            size: Number(size) || 1
          };
        }
      }
    }

    const uniformPattern = /^\s*uniform\s+(\w+)\s+(\w+)(\[\d+\])?/mg;
    matched = vertexShader.match(uniformPattern) || [];
    matched = matched.concat(fragmentShader.match(uniformPattern) || []);
    matched.forEach(m => {
      const _matched = m.match(/^\s*uniform\s+(\w+)\s+(\w+)(\[\d+\])?/);

      let [type, name, isTypeV] = _matched.slice(1);

      type = uniformTypeMap[type];
      isTypeV = !!isTypeV;

      if (type.indexOf('Matrix') !== 0 && isTypeV) {
        type += 'v';
      }

      this._declareUniform(program, name, type);
    });
    program._buffers.verticesBuffer = gl.createBuffer();
    program._buffers.cellsBuffer = gl.createBuffer();

    if (program._enableTextures) {
      program._buffers.texCoordBuffer = gl.createBuffer();
    }

    this.programs.push(program);
    return program;
  }

  useProgram(program, attrOptions = {}) {
    this.startRender = false;

    if (this[_renderFrameID]) {
      cancelAnimationFrame(this[_renderFrameID]);
      delete this[_renderFrameID];
    }

    const gl = this.gl;
    gl.useProgram(program); // this.program = program;

    const dimension = program._dimension;
    gl.bindBuffer(gl.ARRAY_BUFFER, program._buffers.verticesBuffer);
    const vPosition = gl.getAttribLocation(program, this.options.vertexPosition);
    gl.vertexAttribPointer(vPosition, dimension, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);

    if (program._enableTextures) {
      gl.bindBuffer(gl.ARRAY_BUFFER, program._buffers.texCoordBuffer);
      const vTexCoord = gl.getAttribLocation(program, this.options.vertexTextureCoord);
      gl.vertexAttribPointer(vTexCoord, program._texCoordSize || 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(vTexCoord);
    }

    Object.entries(program._attribute).forEach(([name, item]) => {
      if (item !== 'ignored') {
        const size = item.size;
        const options = attrOptions[name] || {};
        const normalize = !!options.normalize;
        let bufferType = options.type || 'FLOAT';
        const key = options.key || name;
        if (bufferType === 'UBYTE') bufferType = 'UNSIGNED_BYTE';
        if (bufferType === 'USHORT') bufferType = 'UNSIGNED_SHORT';
        item.type = bufferType;

        if (key && key !== name) {
          program._attribute[key] = item;
        }

        gl.bindBuffer(gl.ARRAY_BUFFER, program._buffers[name]);
        const attrib = gl.getAttribLocation(program, name); // console.log(size, gl[bufferType]);

        if (attrib >= 0) {
          gl.vertexAttribPointer(attrib, size, gl[bufferType], normalize, 0, 0);
          gl.enableVertexAttribArray(attrib);
        }
      }
    });

    if (!program.meshData) {
      const positions = [[-1, -1, 0, 1].slice(0, dimension), [1, -1, 0, 1].slice(0, dimension), [1, 1, 0, 1].slice(0, dimension), [-1, 1, 0, 1].slice(0, dimension)];
      const cells = [[0, 1, 3], [3, 1, 2]];
      this.setMeshData({
        positions,
        cells
      });
    }

    return program;
  }

  compileSync(frag, vert) {
    frag = frag || _default_frag_glsl__WEBPACK_IMPORTED_MODULE_2__["default"];
    const loaded = {};

    function _compile(content) {
      content = content.replace(/^\s*/mg, '');
      const includes = [];
      const matched = content.match(/^#pragma\s+include\s+.*/mg);

      if (matched) {
        // console.log(matched, url);
        for (let i = 0; i < matched.length; i++) {
          const m = matched[i];

          const _matched = m.match(/(?:<|")(.*)(?:>|")/);

          if (_matched) {
            const type = _matched[0].indexOf('<') === 0 ? 'lib' : 'link';
            let name = _matched[1];
            if (name === 'graph') name = 'graphics';

            if (!loaded[name]) {
              loaded[name] = true;

              if (type === 'lib') {
                const c = _compile(GLSL_LIBS[name]); // eslint-disable-line no-await-in-loop


                includes.push(c);
              } else if (type === 'link') {
                throw new Error('Cannot load external links synchronously. Use compile instead of compileSync.');
              }
            } else {
              includes.push(`/* included ${name} */`);
            }
          }
        }

        includes.forEach(inc => {
          content = content.replace(/^#pragma\s+include\s+.*/m, inc);
        });
      }

      return content;
    }

    const fragmentShader = _compile(frag);

    const vertexShader = vert ? _compile(vert) : null;
    const program = this.createProgram(fragmentShader, vertexShader);
    return program;
  }

  async compile(frag, vert) {
    frag = frag || _default_frag_glsl__WEBPACK_IMPORTED_MODULE_2__["default"];
    const loaded = {};

    async function _compile(content) {
      content = content.replace(/^\s*/mg, '');
      const includes = [];
      const matched = content.match(/^#pragma\s+include\s+.*/mg);

      if (matched) {
        // console.log(matched, url);
        for (let i = 0; i < matched.length; i++) {
          const m = matched[i];

          const _matched = m.match(/(?:<|")(.*)(?:>|")/);

          if (_matched) {
            const type = _matched[0].indexOf('<') === 0 ? 'lib' : 'link';
            let name = _matched[1];
            if (name === 'graph') name = 'graphics';

            if (!loaded[name]) {
              loaded[name] = true; // TODO: 这里可以优化成异步加载

              if (type === 'lib') {
                const c = await _compile(GLSL_LIBS[name]); // eslint-disable-line no-await-in-loop

                includes.push(c);
              } else if (type === 'link') {
                let c = await Renderer.fetchShader(name); // eslint-disable-line no-await-in-loop

                c = await _compile(c); // eslint-disable-line no-await-in-loop

                includes.push(c);
              }
            } else {
              includes.push(`/* included ${name} */`);
            }
          }
        }

        includes.forEach(inc => {
          content = content.replace(/^#pragma\s+include\s+.*/m, inc);
        });
      }

      return content;
    }

    const fragmentShader = await _compile(frag);
    const vertexShader = vert ? await _compile(vert) : null;
    const program = this.createProgram(fragmentShader, vertexShader);
    return program;
  }

  async load(frag, vert = null) {
    frag = await Renderer.fetchShader(frag);
    if (vert) vert = await Renderer.fetchShader(vert);
    return this.compile(frag, vert);
  }

  createTexture(img) {
    const gl = this.gl;
    gl.activeTexture(gl.TEXTURE15);
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img); // gl.NEAREST is also allowed, instead of gl.LINEAR, as neither mipmap.

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); // Prevents s-coordinate wrapping (repeating).

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); // Prevents t-coordinate wrapping (repeating).

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    texture._img = img;

    texture.delete = () => {
      this.deleteTexture(texture);
    };

    return texture;
  }

  deleteTexture(texture) {
    const image = texture._img;
    this.gl.deleteTexture(texture);

    if (typeof image.close === 'function') {
      // release ImageBitmap
      image.close();
    }
  }

  async loadTexture(source, {
    useImageBitmap = true
  } = {}) {
    const img = await Renderer.loadImage(source, {
      useImageBitmap
    });
    return this.createTexture(img);
  }

  render({
    clearBuffer = true
  } = {}) {
    this.startRender = true;
    const gl = this.gl;
    let program = this.program;

    if (!program) {
      program = this.createProgram();
      this.useProgram(program);
    }

    if (clearBuffer) gl.clear(gl.COLOR_BUFFER_BIT);
    const lastFrameID = this[_renderFrameID];

    this._draw();

    if (this[_renderFrameID] === lastFrameID) {
      this[_renderFrameID] = null;
    }
  }

  update() {
    if (!this.startRender) return;

    if (this[_renderFrameID] == null) {
      this[_renderFrameID] = requestAnimationFrame(this.render.bind(this));
    }
  }

}

_defineProperty(Renderer, "defaultOptions", {
  preserveDrawingBuffer: true,
  autoUpdate: true,
  vertexPosition: 'a_vertexPosition',
  vertexTextureCoord: 'a_vertexTextureCoord',
  webgl2: false
});

_defineProperty(Renderer, "UBYTE", Renderer.UNSIGNED_BYTE);

_defineProperty(Renderer, "USHORT", Renderer.UNSIGNED_SHORT);

_defineProperty(Renderer, "fetchShader", _helpers__WEBPACK_IMPORTED_MODULE_0__["fetchShader"]);

_defineProperty(Renderer, "loadImage", _helpers__WEBPACK_IMPORTED_MODULE_0__["loadImage"]);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupWebGL", function() { return setupWebGL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProgram", function() { return createProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointsToBuffer", function() { return pointsToBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImage", function() { return loadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchShader", function() { return fetchShader; });
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

function create3DContext(canvas, opt_attribs) {
  const names = ['webgl', 'experimental-webgl', 'webkit-3d', 'moz-webgl'];
  let context = null;

  for (let ii = 0; ii < names.length; ++ii) {
    try {
      context = canvas.getContext(names[ii], opt_attribs);
    } catch (e) {// no-empty
    }

    if (context) {
      break;
    }
  }

  return context;
}

function setupWebGL(canvas, opt_attribs) {
  const context = create3DContext(canvas, opt_attribs);

  if (!context) {
    throw new Error("Sorry, your browser doesn't support WebGL.");
  }

  return context;
}
function createProgram(gl, vertex, fragment) {
  const vertShdr = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertShdr, vertex);
  gl.compileShader(vertShdr);

  if (!gl.getShaderParameter(vertShdr, gl.COMPILE_STATUS)) {
    const msg = `Vertex shader failed to compile.  The error log is:${gl.getShaderInfoLog(vertShdr)}`;
    throw new Error(msg);
  }

  const fragShdr = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragShdr, fragment);
  gl.compileShader(fragShdr);

  if (!gl.getShaderParameter(fragShdr, gl.COMPILE_STATUS)) {
    const msg = `Fragment shader failed to compile.  The error log is:${gl.getShaderInfoLog(fragShdr)}`;
    throw new Error(msg);
  }

  const program = gl.createProgram();
  gl.attachShader(program, vertShdr);
  gl.attachShader(program, fragShdr);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const msg = `Shader program failed to link.  The error log is:${gl.getProgramInfoLog(program)}`;
    throw new Error(msg);
  }

  gl.deleteShader(vertShdr);
  gl.deleteShader(fragShdr);
  return program;
}
function pointsToBuffer(points, Type = Float32Array, buffer = null) {
  if (buffer && !(buffer instanceof Type)) throw new TypeError('Wrong buffer type.');
  if (points == null) return points;
  if (points instanceof Type) return points;

  if (points[0] == null || points[0].length == null) {
    if (buffer) {
      buffer.set(points, 0);
      return buffer;
    }

    return new Type(points);
  }

  const deminsion = points[0].length;
  const len = points.length;

  if (!buffer) {
    buffer = new Type(deminsion * len);
  }

  let idx = 0;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < deminsion; j++) {
      buffer[idx++] = points[i][j];
    }
  }

  return buffer;
}
const imageCache = {};
function loadImage(src, {
  useImageBitmap = true,
  alias = null
} = {}) {
  if (!imageCache[src]) {
    if (typeof Image === 'function') {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      imageCache[src] = new Promise(resolve => {
        img.onload = function () {
          if (useImageBitmap && typeof createImageBitmap === 'function') {
            createImageBitmap(img, {
              imageOrientation: 'flipY'
            }).then(bitmap => {
              imageCache[src] = bitmap;
              if (alias) imageCache[alias] = bitmap;
              resolve(bitmap);
            });
          } else {
            imageCache[src] = img;
            if (alias) imageCache[alias] = img;
            resolve(img);
          }
        };

        img.src = src;
      });
      if (alias) imageCache[alias] = imageCache[src];
    } else if (typeof fetch === 'function') {
      // run in worker
      return fetch(src, {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
      }).then(response => {
        return response.blob();
      }).then(blob => {
        return createImageBitmap(blob, {
          imageOrientation: 'flipY'
        }).then(bitmap => {
          imageCache[src] = bitmap;
          if (alias) imageCache[alias] = bitmap;
          return bitmap;
        });
      });
    }
  }

  return imageCache[src];
}
const shaderCache = {};
async function fetchShader(url) {
  if (shaderCache[url]) return shaderCache[url];
  const res = await fetch(url);

  if (res.status >= 200 && res.status < 300) {
    const content = await res.text();
    shaderCache[url] = content;
    return content;
  }

  throw new Error('Shader loaded error.');
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("attribute vec3 a_vertexPosition;\n\nvoid main() {\n  gl_PointSize = 1.0;\n  gl_Position = vec4(a_vertexPosition, 1);\n}");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#ifdef GL_ES\nprecision mediump float;\n#endif\n\nvoid main() {\n  gl_FragColor = vec4(0.0, 0.0, 0.0, 0.1);\n}");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("attribute vec4 a_vertexPosition;\nattribute vec2 a_vertexTextureCoord;\nvarying vec2 vTextureCoord;\n\nvoid main() {\n  gl_PointSize = 1.0;\n  gl_Position = a_vertexPosition;\n  vTextureCoord = a_vertexTextureCoord;\n}");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CanvasRenderer; });
/* harmony import */ var _utils_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _utils_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);




const _transform = Symbol('transform');

class CanvasRenderer {
  constructor(canvas, options) {
    this.context = canvas.getContext('2d');
    this.options = options;
    this[_transform] = [1, 0, 0, 1, 0, 0];
  }

  createTexture(img) {
    const texture = {
      _img: img
    };
    return texture;
  }

  async loadTexture(textureURL) {
    const image = await _utils_env__WEBPACK_IMPORTED_MODULE_0__["default"].loadImage(textureURL, {
      useImageBitmap: false
    });
    return this.createTexture(image);
  }

  deleteTexture(texture) {
    return texture;
  }

  clear(x, y, w, h) {
    const context = this.context;
    x = x || 0;
    y = y || 0;
    w = w || context.canvas.width - x;
    h = h || context.canvas.height - y;
    context.clearRect(x, y, w, h);
  }

  drawMeshCloud(cloud, {
    clear = false
  } = {}) {
    const cloudMeshes = [];

    for (let i = 0; i < cloud.amount; i++) {
      const transform = cloud.getTransform(i);
      let frame = cloud.getTextureFrame(i);
      if (frame) frame = frame._img;
      const filter = cloud.getFilter(i);
      const {
        fill,
        stroke
      } = cloud.getCloudRGBA(i);
      cloudMeshes.push({
        mesh: cloud.mesh,
        _cloudOptions: [fill, stroke, frame, transform, filter]
      }); // console.log(transform, colorTransform, frame);
    }

    if (cloud.beforeRender) cloud.beforeRender(this.context, cloud);
    this.drawMeshes(cloudMeshes, {
      clear,
      hook: false
    });
    if (cloud.afterRender) cloud.afterRender(this.context, cloud);
  }

  drawMeshes(meshes, {
    clear = false,
    hook = true
  } = {}) {
    const context = this.context;

    if (clear) {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    }

    let lastFilter = null;
    const {
      width,
      height
    } = context.canvas;
    const len = meshes.length;
    meshes.forEach((mesh, i) => {
      let fill, stroke, frame, transform, cloudFilter;
      if (hook && mesh.beforeRender) mesh.beforeRender(context, mesh);

      if (mesh._cloudOptions) {
        [fill, stroke, frame, transform, cloudFilter] = mesh._cloudOptions;
        mesh = mesh.mesh;
      }

      let filter = mesh.filter;
      if (cloudFilter) filter = filter ? `${filter} ${cloudFilter}` : cloudFilter;

      if (filter && this.filterBuffer !== false) {
        const canvas = _utils_env__WEBPACK_IMPORTED_MODULE_0__["default"].createCanvas(width, height);

        if (canvas) {
          this.filterBuffer = canvas.getContext('2d');
        } else {
          this.filterBuffer = false;
        }
      }

      if (lastFilter && lastFilter !== filter) {
        Object(_utils_canvas__WEBPACK_IMPORTED_MODULE_1__["applyFilter"])(this.filterBuffer, lastFilter);
        context.drawImage(this.filterBuffer.canvas, 0, 0, width, height);
        this.filterBuffer.clearRect(0, 0, width, height);
        lastFilter = null;
      }

      if (filter && this.filterBuffer) {
        this.filterBuffer.save();
        this.filterBuffer.transform(...this[_transform]); // console.log(this[_transform]);

        Object(_utils_canvas__WEBPACK_IMPORTED_MODULE_1__["drawMesh2D"])(mesh, this.filterBuffer, false, fill, stroke, frame, transform);
        this.filterBuffer.restore();

        if (i === len - 1) {
          Object(_utils_canvas__WEBPACK_IMPORTED_MODULE_1__["applyFilter"])(this.filterBuffer, filter);
          context.drawImage(this.filterBuffer.canvas, 0, 0, width, height);
          this.filterBuffer.clearRect(0, 0, width, height);
        } else {
          lastFilter = filter;
        }
      } else {
        context.save();
        context.transform(...this[_transform]);
        Object(_utils_canvas__WEBPACK_IMPORTED_MODULE_1__["drawMesh2D"])(mesh, context, false, fill, stroke, frame, transform);
        context.restore();
      }

      if (hook && mesh.afterRender) mesh.afterRender(context, mesh);
    });
  }

  setTransform(transform) {
    this[_transform] = transform;
  }

}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var gl_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);


const ENV = {
  createCanvas(width, height, options = {}) {
    const offscreen = options.offscreen !== false;
    let canvas;

    if (typeof global.createCanvas === 'function') {
      canvas = global.createCanvas(width, height, options);
    } else if (offscreen && typeof OffscreenCanvas === 'function') {
      canvas = new OffscreenCanvas(width, height);
    } else {
      canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
    }

    return canvas;
  },

  loadImage: gl_renderer__WEBPACK_IMPORTED_MODULE_0__["default"].loadImage
};
/* harmony default export */ __webpack_exports__["default"] = (ENV);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(22)))

/***/ }),
/* 22 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyFilter", function() { return applyFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawMesh2D", function() { return drawMesh2D; });
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _vector_to_rgba__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _parse_font__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);





function applyFilter(context, filter) {
  const canvas = context.canvas;
  context.save();
  context.filter = filter;
  context.drawImage(canvas, 0, 0, canvas.width, canvas.height);
  context.restore();
}

function mixRGBA(a, b) {
  const pattern = /rgba\((\d+),(\d+),(\d+),(\d+)\)/;
  a = a.match(pattern).slice(1, 5).map(Number);
  b = b.match(pattern).slice(1, 5).map(Number);
  const c = [];
  const alpha = b[3];

  for (let i = 0; i < 4; i++) {
    c[i] = Object(_math__WEBPACK_IMPORTED_MODULE_3__["mix"])(a[i], b[i], alpha);
  }

  return `rgba(${c.join()})`;
}

function drawMesh2D(mesh, context, enableFilter = true, cloudFill = null, cloudStroke = null, cloudFrame = null, cloudTransform = null) {
  context.save();
  let stroke = false;
  let fill = false;
  context.globalAlpha = mesh.getOpacity();

  if (mesh.lineWidth) {
    let gradient = mesh.gradient && mesh.gradient.stroke;

    if (gradient) {
      const {
        vector,
        colors
      } = gradient;

      if (vector.length === 6) {
        gradient = context.createRadialGradient(...vector);
      } else if (vector.length === 4) {
        gradient = context.createLinearGradient(...vector);
      } else if (vector.length === 3) {
        gradient = context.createCircularGradient(...vector);
      } else {
        throw new TypeError('Invalid vector dimension.');
      }

      colors.forEach(({
        offset,
        color
      }) => {
        let rgba = Object(_vector_to_rgba__WEBPACK_IMPORTED_MODULE_1__["default"])(color);
        if (cloudStroke) rgba = mixRGBA(rgba, cloudStroke);
        gradient.addColorStop(offset, rgba);
      });
      context.strokeStyle = gradient;
      stroke = true;
    } else if (mesh.strokeStyle) {
      if (cloudStroke) {
        context.strokeStyle = mixRGBA(mesh.strokeStyle, cloudStroke);
      } else {
        context.strokeStyle = mesh.strokeStyle;
      }

      stroke = true;
    }
  }

  if (stroke) {
    context.lineWidth = mesh.lineWidth;
    context.lineJoin = mesh.lineJoin;
    context.lineCap = mesh.lineCap;
    context.miterLimit = mesh.miterLimit;

    if (mesh.lineDash) {
      context.setLineDash(mesh.lineDash);

      if (mesh.lineDashOffset) {
        context.lineDashOffset = mesh.lineDashOffset;
      }
    }
  }

  let gradient = mesh.gradient && mesh.gradient.fill;

  if (gradient) {
    const {
      vector,
      colors
    } = gradient;

    if (vector.length === 6) {
      gradient = context.createRadialGradient(...vector);
    } else if (vector.length === 4) {
      gradient = context.createLinearGradient(...vector);
    } else if (vector.length === 3) {
      gradient = context.createCircularGradient(...vector);
    } else {
      throw new TypeError('Invalid vector dimension.');
    }

    colors.forEach(({
      offset,
      color
    }) => {
      let rgba = Object(_vector_to_rgba__WEBPACK_IMPORTED_MODULE_1__["default"])(color);
      if (cloudStroke) rgba = mixRGBA(rgba, cloudStroke);
      gradient.addColorStop(offset, rgba);
    });
    context.fillStyle = gradient;
    fill = true;
  } else if (mesh.fillStyle) {
    if (cloudFill) {
      context.fillStyle = mixRGBA(mesh.fillStyle, cloudFill);
    } else {
      context.fillStyle = mesh.fillStyle;
    }

    fill = true;
  } // if(enableFilter) {
  //   const filter = mesh.filter;
  //   if(filter) {
  //     context.filter = filter;
  //   }
  // }


  if (cloudTransform) {
    context.transform(...cloudTransform);
  }

  context.transform(...mesh.transformMatrix);
  const count = mesh.contours.length;
  mesh.contours.forEach((points, i) => {
    // eslint-disable-line complexity
    const len = points.length;
    const closed = len > 1 && gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec2"].equals(points[0], points[len - 1]);
    const drawTexture = i === count - 1 && mesh.texture;

    if (points && len > 0) {
      if (fill || stroke || drawTexture) {
        context.beginPath();
        context.moveTo(...points[0]);

        for (let i = 1; i < len; i++) {
          if (i === len - 1 && closed) {
            context.closePath();
          } else {
            context.lineTo(...points[i]);
          }
        }
      }

      if (fill) {
        context.fill();
      }

      if (drawTexture) {
        context.clip();
        let {
          image,
          options
        } = mesh.texture;
        if (cloudFrame) image = cloudFrame;
        if (options.repeat) console.warn('Context 2D not supported image repeat yet.');

        if (image.font) {
          if (options.scale) console.warn('Context 2D not supported text scale yet.');
          if (options.srcRect) console.warn('Context 2D not supported text srcRect yet.');
          let {
            font,
            fillColor,
            strokeColor,
            text
          } = image;
          if (!fillColor && !strokeColor) fillColor = '#000';
          context.font = font;
          const {
            width
          } = context.measureText(text);
          const fontInfo = Object(_parse_font__WEBPACK_IMPORTED_MODULE_2__["default"])(font);
          const height = fontInfo.pxLineHeight;
          context.textAlign = 'center';
          context.textBaseline = 'middle';
          if (fillColor) context.fillStyle = fillColor;
          if (strokeColor) context.strokeStyle = strokeColor;
          const rect = options.rect;
          const top = rect[0] + height / 2;
          const left = rect[1] + width / 2;
          context.scale(rect[2] / width, rect[3] / height);
          context.fillText(text, left, top);
        } else {
          let rect = options.rect;
          const srcRect = options.srcRect;

          if (options.scale) {
            rect = [0, 0, context.canvas.width, context.canvas.height];
          }

          if (options.rotated && rect) {
            rect = [-rect[1], rect[0], rect[3], rect[2]];
          }

          if (srcRect) {
            rect = rect || [0, 0, srcRect[2], srcRect[3]];
          }

          if (options.rotated) {
            context.save();
            context.translate(0, rect ? rect[2] : image.width);
            context.rotate(-0.5 * Math.PI);
          }

          if (srcRect) {
            context.drawImage(image, ...srcRect, ...rect);
          } else if (rect) {
            context.drawImage(image, ...rect);
          } else {
            context.drawImage(image, 0, 0);
          }

          if (options.rotated) {
            context.restore();
          }
        }
      }

      if (stroke) {
        context.stroke();
      }
    }
  });
  context.restore();

  if (enableFilter) {
    const filter = mesh.filter;

    if (filter) {
      applyFilter(context, filter);
    }
  }
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return vectorToRGBA; });
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

function vectorToRGBA(vector) {
  return `rgba(${vector.map((c, i) => {
    if (i < 3) return Math.round(c * 255);
    return c;
  }).join()})`;
}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseFont; });
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

function sizeToPixel(value, defaultWidth) {
  // eslint-disable-line complexity
  if (typeof value === 'string') {
    const matched = value.trim().match(/^([\d.]+)(px|pt|pc|in|cm|mm|em|ex|rem|q|vw|vh|vmax|vmin|%)$/);

    if (matched) {
      value = {
        size: parseFloat(matched[1]),
        unit: matched[2]
      };
    } else {
      value = {
        size: parseInt(value, 10),
        unit: 'px'
      };
    }
  }

  let {
    size,
    unit
  } = value;

  if (unit === 'pt') {
    size /= 0.75;
  } else if (unit === 'pc') {
    size *= 16;
  } else if (unit === 'in') {
    size *= 96;
  } else if (unit === 'cm') {
    size *= 96.0 / 2.54;
  } else if (unit === 'mm') {
    size *= 96.0 / 25.4;
  } else if (unit === 'em' || unit === 'rem' || unit === 'ex') {
    if (!defaultWidth && typeof getComputedStyle === 'function' && typeof document !== 'undefined') {
      const root = getComputedStyle(document.documentElement).fontSize;
      defaultWidth = sizeToPixel(root, 16);
    }

    size *= defaultWidth;
    if (unit === 'ex') size /= 2;
  } else if (unit === 'q') {
    size *= 96.0 / 25.4 / 4;
  } else if (unit === 'vw' || unit === 'vh') {
    if (typeof document !== 'undefined') {
      const val = unit === 'vw' ? document.documentElement.clientWidth : document.documentElement.clientHeight;
      size *= val / 100;
    }
  } else if (unit === 'vmax' || unit === 'vmin') {
    if (typeof document !== 'undefined') {
      const width = document.documentElement.clientWidth;
      const height = document.documentElement.clientHeight;

      if (unit === 'vmax') {
        size *= Math.max(width, height) / 100;
      } else {
        size *= Math.min(width, height) / 100;
      }
    }
  }

  return size;
} // borrow from node-canvas (https://github.com/Automattic/node-canvas)

/**
 * Font RegExp helpers.
 */


const weights = 'bold|bolder|lighter|[1-9]00',
      styles = 'italic|oblique',
      variants = 'small-caps',
      stretches = 'ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded',
      units = 'px|pt|pc|in|cm|mm|em|ex|rem|q|vw|vh|vmax|vmin|%',
      string = '\'([^\']+)\'|"([^"]+)"|([\\w-]|[\u4e00-\u9fa5])+'; // [ [ <‘font-style’> || <font-variant-css21> || <‘font-weight’> || <‘font-stretch’> ]?
//    <‘font-size’> [ / <‘line-height’> ]? <‘font-family’> ]
// https://drafts.csswg.org/css-fonts-3/#font-prop

const weightRe = new RegExp(`(${weights}) +`, 'i');
const styleRe = new RegExp(`(${styles}) +`, 'i');
const variantRe = new RegExp(`(${variants}) +`, 'i');
const stretchRe = new RegExp(`(${stretches}) +`, 'i');
/* eslint-disable prefer-template */

const sizeFamilyRe = new RegExp('([\\d\\.]+)(' + units + ')(?:\\/([\\d\\.]+)(' + units + '))? *' + '((?:' + string + ')( *, *(?:' + string + '))*)');
/* eslint-enable prefer-template */

/**
 * Parse font `str`.
 *
 * @param {String} str
 * @return {Object} Parsed font. `size` is in device units. `unit` is the unit
 *   appearing in the input string.
 * @api private
 */

function parseFont(str, defaultHeight) {
  // Try for required properties first.
  const sizeFamily = sizeFamilyRe.exec(str);
  if (!sizeFamily) return; // invalid

  const lineHeight = parseFloat(sizeFamily[3]); // Default values and required properties

  const font = {
    weight: 'normal',
    style: 'normal',
    stretch: 'normal',
    variant: 'normal',
    size: parseFloat(sizeFamily[1]),
    unit: sizeFamily[2],
    lineHeight: Number.isFinite(lineHeight) ? lineHeight : undefined,
    lineHeightUnit: sizeFamily[4],
    family: sizeFamily[5].replace(/ *, */g, ',')
  }; // Stop search at `sizeFamily.index`

  const substr = str.substring(0, sizeFamily.index); // Optional, unordered properties.

  const weight = weightRe.exec(substr),
        style = styleRe.exec(substr),
        variant = variantRe.exec(substr),
        stretch = stretchRe.exec(substr);
  if (weight) font.weight = weight[1];
  if (style) font.style = style[1];
  if (variant) font.variant = variant[1];
  if (stretch) font.stretch = stretch[1];
  font.pxHeight = sizeToPixel({
    size: font.size,
    unit: font.unit
  }, defaultHeight);
  font.pxLineHeight = sizeToPixel({
    size: font.lineHeight || font.size,
    unit: font.lineHeightUnit || font.unit
  }, defaultHeight);
  return font;
}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mix", function() { return mix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformPoint", function() { return transformPoint; });
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

function clamp(value, min, max) {
  if (min > max) [min, max] = [max, min];
  if (value < min) return min;
  if (value > max) return max;
  return value;
}
function mix(src, dest, p) {
  return src * (1 - p) + dest * p;
}
function transformPoint(p, m) {
  const [x, y] = p;
  return [x * m[0] + y * m[2] + m[4], x * m[1] + y * m[3] + m[5]];
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return compress; });
/* harmony import */ var _flatten_meshes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _mesh_cloud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);




function compareUniform(a, b, temp) {
  const ua = a.uniforms || {};
  const ub = b.uniforms || {};
  if (ua.u_texSampler && ub.u_texSampler && ua.u_texSampler !== ub.u_texSampler) return false;
  const keysA = Object.keys(ua),
        keysB = Object.keys(ub); // console.log(keysA, keysB);

  const idx1 = keysA.indexOf('u_texSampler');
  const idx2 = keysB.indexOf('u_texSampler');
  if (idx1 >= 0) keysA.splice(idx1, 1);
  if (idx2 >= 0) keysB.splice(idx2, 1);
  if (keysA.length !== keysB.length) return false;
  const ret = keysA.every(key => {
    const va = ua[key],
          vb = ub[key];
    if (va === vb) return true;

    if (va.length && vb.length && va.length === vb.length) {
      for (let i = 0; i < va.length; i++) {
        if (va[i] !== vb[i]) return false;
      }

      return true;
    }

    return false;
  });

  if (ret) {
    if (ua.u_texSampler && !ub.u_texSampler) {
      b.setTexture(ua.u_texSampler, {
        hidden: true
      });
    } else if (!ua.u_texSampler && ub.u_texSampler) {
      // a.setTexture(ub.u_texSampler, {hidden: true});
      for (let i = 0; i < temp.length; i++) {
        temp[i].setTexture(ub.u_texSampler, {
          hidden: true
        });
      }
    }
  }

  return ret;
}

const bufferCache = {};

function packData(temp, enableBlend) {
  if (temp.length) {
    const meshData = Object(_flatten_meshes__WEBPACK_IMPORTED_MODULE_0__["default"])(temp, bufferCache);
    meshData.enableBlend = enableBlend;

    if (temp[0].filterCanvas) {
      meshData.filterCanvas = true;
    }

    meshData.packIndex = temp[0].packIndex;
    meshData.packLength = temp.length;
    meshData.beforeRender = temp[0].beforeRender;
    meshData.afterRender = temp[temp.length - 1].afterRender;
    temp.length = 0;
    return meshData;
  }
}

function* compress(renderer, meshes, ignoreTrasnparent = false) {
  const temp = [];
  const maxSize = renderer.options.bufferSize;
  let size = 0;
  let enableBlend = false;

  for (let i = 0; i < meshes.length; i++) {
    const mesh = meshes[i];

    if (mesh instanceof _mesh_cloud__WEBPACK_IMPORTED_MODULE_1__["default"]) {
      if (temp.length) yield packData(temp, enableBlend);
      size = 0;
      enableBlend = false;
      yield mesh;
    } else {
      const meshData = mesh.meshData;
      let len = 0;

      if ((!ignoreTrasnparent || !mesh.canIgnore()) && meshData && meshData.positions.length) {
        mesh.packIndex = i;
        const filterCanvas = mesh.filterCanvas;
        len = meshData.positions.length;

        if (filterCanvas || size + len > maxSize) {
          // cannot merge
          if (temp.length) yield packData(temp, enableBlend);
          size = 0;
          enableBlend = false;
        } else if (size) {
          const lastMesh = temp[temp.length - 1];

          if (lastMesh && (lastMesh.filterCanvas || lastMesh.afterRender || mesh.beforeRender || !compareUniform(lastMesh, mesh, temp))) {
            yield packData(temp, enableBlend);
            size = 0;
            enableBlend = false;
          }
        }

        temp.push(mesh);
        enableBlend = enableBlend || mesh.enableBlend;
        size += len;
      }

      if (i === meshes.length - 1) {
        if (temp.length) {
          yield packData(temp, enableBlend);
        }
      }
    }
  }
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return flattenMeshes; });
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

function allocateBuffer(meshes, bufferCache) {
  let positionsCount = 0;
  let cellsCount = 0;
  let textureCoordCount = 0;
  let sourceRectCount = 0;
  let colorCount = 0;

  for (let i = 0; i < meshes.length; i++) {
    const mesh = meshes[i].meshData;

    if (mesh) {
      const dimension = mesh.positions[0].length;
      positionsCount += mesh.positions.length * dimension;
      cellsCount += mesh.cells.length * 3;
      colorCount += mesh.attributes.a_color.length * 4;
      const _textureCoord = mesh.textureCoord;

      if (_textureCoord) {
        textureCoordCount += _textureCoord.length * _textureCoord[0].length;
      }

      const _sourceRect = mesh.attributes.a_sourceRect;

      if (_sourceRect) {
        sourceRectCount += _sourceRect.length * 4;
      }
    }
  }

  if (!bufferCache.positions || bufferCache.positions.length < positionsCount) {
    bufferCache.positions = new Float32Array(positionsCount);
  }

  if (!bufferCache.cells || bufferCache.cells.length < cellsCount) {
    bufferCache.cells = new Uint16Array(cellsCount);
  }

  if (textureCoordCount) {
    if (!bufferCache.textureCoord || bufferCache.textureCoord.length < textureCoordCount) {
      bufferCache.textureCoord = new Float32Array(textureCoordCount);
    }
  }

  if (!bufferCache.a_color || bufferCache.a_color.length < colorCount) {
    bufferCache.a_color = new Uint8Array(colorCount);
  }

  if (sourceRectCount) {
    if (!bufferCache.a_sourceRect || bufferCache.a_sourceRect.length < sourceRectCount) {
      bufferCache.a_sourceRect = new Float32Array(sourceRectCount);
    }
  }

  return bufferCache;
}

function flattenMeshes(meshes, bufferCache) {
  let positions = [];
  let cells = [];
  let textureCoord = [];
  let a_color = [];
  let a_sourceRect = [];
  let idx = 0;
  let cidx = 0;
  const uniforms = meshes[0] ? meshes[0].uniforms || {} : {};

  if (bufferCache) {
    allocateBuffer(meshes, bufferCache);
    cells = bufferCache.cells;
    positions = bufferCache.positions;
    textureCoord = bufferCache.textureCoord;
    a_color = bufferCache.a_color;
    a_sourceRect = bufferCache.a_sourceRect;
  }

  for (let i = 0; i < meshes.length; i++) {
    let mesh = meshes[i];

    if (mesh) {
      if (mesh.meshData) mesh = mesh.meshData;

      if (bufferCache) {
        const _positions = mesh.positions;

        for (let j = 0; j < _positions.length; j++) {
          const p = _positions[j];
          const o = 3 * (idx + j);

          for (let k = 0; k < p.length; k++) {
            positions[o + k] = p[k];
          }
        }
      } else {
        positions.push(...mesh.positions);
      }

      const _cells = mesh.cells;

      for (let j = 0; j < _cells.length; j++) {
        const cell = _cells[j];

        if (bufferCache) {
          const o = 3 * (cidx + j);
          cells[o] = cell[0] + idx;
          cells[o + 1] = cell[1] + idx;
          cells[o + 2] = cell[2] + idx;
        } else {
          cells.push([cell[0] + idx, cell[1] + idx, cell[2] + idx]);
        }
      } // cells.push(...mesh.cells.map(cell => cell.map(c => c + idx)));


      if (bufferCache) {
        const _colors = mesh.attributes.a_color;

        for (let j = 0; j < _colors.length; j++) {
          const c = _colors[j];
          const o = 4 * (idx + j);
          a_color[o] = c[0];
          a_color[o + 1] = c[1];
          a_color[o + 2] = c[2];
          a_color[o + 3] = c[3];
        }
      } else {
        a_color.push(...mesh.attributes.a_color);
      }

      if (mesh.attributes.a_sourceRect) {
        if (bufferCache) {
          const _sourceRect = mesh.attributes.a_sourceRect;

          for (let j = 0; j < _sourceRect.length; j++) {
            const s = _sourceRect[j];
            const o = 4 * (idx + j);
            a_sourceRect[o] = s[0];
            a_sourceRect[o + 1] = s[1];
            a_sourceRect[o + 2] = s[2];
            a_sourceRect[o + 3] = s[3];
          }
        } else {
          a_sourceRect.push(...mesh.attributes.a_sourceRect);
        }
      }

      if (mesh.textureCoord) {
        if (bufferCache) {
          const _textureCoord = mesh.textureCoord;

          for (let j = 0; j < _textureCoord.length; j++) {
            const t = _textureCoord[j];
            const o = 3 * (idx + j);

            for (let k = 0; k < t.length; k++) {
              textureCoord[o + k] = t[k];
            }
          }
        } else {
          textureCoord.push(...mesh.textureCoord);
        }
      }

      idx += mesh.positions.length;
      cidx += mesh.cells.length;
    }
  }

  const attributes = {
    a_color
  };
  if (a_sourceRect && a_sourceRect.length > 0) attributes.a_sourceRect = a_sourceRect;
  const ret = {
    positions,
    cells,
    attributes,
    uniforms,
    cellsCount: cidx * 3
  };

  if (textureCoord && textureCoord.length) {
    ret.textureCoord = textureCoord;
  }

  return ret;
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _utils_color_matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var _utils_parse_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const _mesh = Symbol('mesh');

const _count = Symbol('count');

const _transform0 = Symbol('transform');

const _transform1 = Symbol('transform');

const _color0 = Symbol('color');

const _color1 = Symbol('color');

const _color2 = Symbol('color');

const _color3 = Symbol('color');

const _color4 = Symbol('color');

const _blend = Symbol('blend');

const _filters = Symbol('filter');

const _textures = Symbol('textures');

const _textureOptions = Symbol('textureOptions');

const _frameIndex = Symbol('frameIndex');

const _fillColor = Symbol('fillColor');

const _strokeColor = Symbol('strokeColor');

const _hasCloudColor = Symbol('cloudColor');

const _hasCloudFilter = Symbol('cloudFilter');

/* harmony default export */ __webpack_exports__["default"] = (class {
  constructor(mesh, amount = 1) {
    this[_count] = amount;
    this[_mesh] = mesh;
    this[_transform0] = [];
    this[_transform1] = [];
    this[_color0] = [];
    this[_color1] = [];
    this[_color2] = [];
    this[_color3] = [];
    this[_color4] = [];
    this[_textures] = [];
    this[_frameIndex] = [];
    this[_filters] = [];
    this[_fillColor] = [];
    this[_strokeColor] = [];
    this[_hasCloudColor] = false;
    this[_hasCloudFilter] = false;
    this[_blend] = false;
    const {
      width,
      height
    } = mesh;

    for (let i = 0; i < amount; i++) {
      this[_transform0].push([1, 0, 0, width]);

      this[_transform1].push([1, 0, 0, height]);

      this[_frameIndex].push([-1]);

      this[_filters].push([]);

      this[_fillColor].push([0, 0, 0, 0]);

      this[_strokeColor].push([0, 0, 0, 0]);

      this.setColorTransform(i, null);
    }
  }

  get mesh() {
    return this[_mesh];
  }

  set mesh(mesh) {
    this[_mesh] = mesh;

    if (this[_textures]) {
      this.setTextureFrames(this[_textures], this[_textureOptions]);
    }
  }

  get hasCloudColor() {
    return this[_hasCloudColor];
  }

  get hasCloudFilter() {
    return this[_hasCloudFilter];
  }

  getFilter(idx) {
    return this[_filters][idx].join(' ');
  }

  get enableBlend() {
    return this[_mesh].enableBlend || this[_blend];
  }

  canIgnore() {
    return this[_mesh].canIgnore();
  }

  setColorTransform(idx, m) {
    if (m != null) {
      if (idx >= this[_count] || idx < 0) throw new Error('Out of range.');
      this[_color0][idx] = [m[0], m[5], m[10], m[15]];
      this[_color1][idx] = [m[1], m[6], m[11], m[16]];
      this[_color2][idx] = [m[2], m[7], m[12], m[17]];
      this[_color3][idx] = [m[3], m[8], m[13], m[18]];
      this[_color4][idx] = [m[4], m[9], m[14], m[19]];
      this[_blend] = this[_blend] || m[18] < 1.0;
      this[_hasCloudFilter] = true;
    } else {
      this[_color0][idx] = [1, 0, 0, 0];
      this[_color1][idx] = [0, 1, 0, 0];
      this[_color2][idx] = [0, 0, 1, 0];
      this[_color3][idx] = [0, 0, 0, 1];
      this[_color4][idx] = [0, 0, 0, 0];
    }

    return this;
  }

  getColorTransform(idx) {
    if (idx >= this[_count] || idx < 0) throw new Error('Out of range.');
    return [this[_color0][idx][0], this[_color1][idx][0], this[_color2][idx][0], this[_color3][idx][0], this[_color4][idx][0], this[_color0][idx][1], this[_color1][idx][1], this[_color2][idx][1], this[_color3][idx][1], this[_color4][idx][1], this[_color0][idx][2], this[_color1][idx][2], this[_color2][idx][2], this[_color3][idx][2], this[_color4][idx][2], this[_color0][idx][3], this[_color1][idx][3], this[_color2][idx][3], this[_color3][idx][3], this[_color4][idx][3]];
  }

  transformColor(idx, m) {
    let transform = this.getColorTransform(idx);
    transform = Object(_utils_color_matrix__WEBPACK_IMPORTED_MODULE_1__["multiply"])(transform, m);
    this.setColorTransform(idx, transform);
    return this;
  }

  setFillColor(idx, color) {
    if (typeof color === 'string') color = Object(_utils_parse_color__WEBPACK_IMPORTED_MODULE_3__["default"])(color);
    if (color[3] > 0.0) this[_hasCloudColor] = true;
    this[_fillColor][idx] = color.map(c => Math.round(255 * c));
  }

  setStrokeColor(idx, color) {
    if (typeof color === 'string') color = Object(_utils_parse_color__WEBPACK_IMPORTED_MODULE_3__["default"])(color);
    if (color[3] > 0.0) this[_hasCloudColor] = true;
    this[_strokeColor][idx] = color.map(c => Math.round(255 * c));
  }

  getCloudRGBA(idx) {
    const fillColor = [...this[_fillColor][idx]];
    const strokeColor = [...this[_strokeColor][idx]];
    fillColor[3] /= 255;
    strokeColor[3] /= 255;
    return {
      fill: `rgba(${fillColor.join()})`,
      stroke: `rgba(${strokeColor.join()})`
    };
  }

  grayscale(idx, p) {
    this.transformColor(idx, Object(_utils_color_matrix__WEBPACK_IMPORTED_MODULE_1__["grayscale"])(p));

    this[_filters][idx].push(`grayscale(${100 * p}%)`);
  }

  brightness(idx, p) {
    this.transformColor(idx, Object(_utils_color_matrix__WEBPACK_IMPORTED_MODULE_1__["brightness"])(p));

    this[_filters][idx].push(`brightness(${100 * p}%)`);
  }

  saturate(idx, p) {
    this.transformColor(idx, Object(_utils_color_matrix__WEBPACK_IMPORTED_MODULE_1__["saturate"])(p));

    this[_filters][idx].push(`saturate(${100 * p}%)`);
  }

  contrast(idx, p) {
    this.transformColor(idx, Object(_utils_color_matrix__WEBPACK_IMPORTED_MODULE_1__["contrast"])(p));

    this[_filters][idx].push(`contrast(${100 * p}%)`);
  }

  invert(idx, p) {
    this.transformColor(idx, Object(_utils_color_matrix__WEBPACK_IMPORTED_MODULE_1__["invert"])(p));

    this[_filters][idx].push(`invert(${100 * p}%)`);
  }

  sepia(idx, p) {
    this.transformColor(idx, Object(_utils_color_matrix__WEBPACK_IMPORTED_MODULE_1__["sepia"])(p));

    this[_filters][idx].push(`sepia(${100 * p}%)`);
  }

  opacity(idx, p) {
    this.transformColor(idx, Object(_utils_color_matrix__WEBPACK_IMPORTED_MODULE_1__["opacity"])(p));

    this[_filters][idx].push(`opacity(${100 * p}%)`);
  }

  hueRotate(idx, deg) {
    this.transformColor(idx, Object(_utils_color_matrix__WEBPACK_IMPORTED_MODULE_1__["hueRotate"])(deg));

    this[_filters][idx].push(`hue-rotate(${deg}deg)`);
  }

  setTransform(idx, m) {
    if (idx >= this[_count] || idx < 0) throw new Error('Out of range.');
    if (m == null) m = [1, 0, 0, 1, 0, 0];
    this[_transform0][idx][0] = m[0];
    this[_transform0][idx][1] = m[1];
    this[_transform0][idx][2] = m[2];
    this[_transform1][idx][0] = m[3];
    this[_transform1][idx][1] = m[4];
    this[_transform1][idx][2] = m[5];
    return this;
  }

  getTransform(idx) {
    if (idx >= this[_count] || idx < 0) throw new Error('Out of range.');
    const m = [...this[_transform0][idx].slice(0, 3), ...this[_transform1][idx].slice(0, 3)];
    return m;
  }

  getTextureFrame(idx) {
    return this[_textures][this[_frameIndex][idx]];
  }

  setTextureFrames(frames = [], options = {}) {
    if (frames.length > 12) {
      throw new Error('Max frames exceed. Allow 12 frames.');
    }

    if (frames.length) {
      const mesh = this[_mesh];
      mesh.setTexture(frames[0], options);
    }

    this[_textures] = frames;
    this[_textureOptions] = options;
  }

  setFrameIndex(idx, frameIndex) {
    if (idx >= this[_count] || idx < 0) throw new Error('Out of range.');
    const len = this[_textures].length;
    if (len <= 0) throw new Error('No frames');
    this[_frameIndex][idx] = frameIndex % len;
  }

  get amount() {
    return this[_count];
  }

  set amount(value) {
    const amount = this[_count];
    if (value === amount) return;

    if (value < amount) {
      this[_transform0].length = value;
      this[_transform1].length = value;
      this[_frameIndex].length = value;
      this[_filters].length = value;
      this[_fillColor].length = value;
      this[_strokeColor].length = value;
      this[_color0].length = value;
      this[_color1].length = value;
      this[_color2].length = value;
      this[_color3].length = value;
      this[_color4].length = value;
    } else {
      const {
        width,
        height
      } = this[_mesh];

      for (let i = amount; i < value; i++) {
        this[_transform0].push([1, 0, 0, width]);

        this[_transform1].push([1, 0, 0, height]);

        this[_frameIndex].push([-1]);

        this[_filters].push([]);

        this[_fillColor].push([0, 0, 0, 0]);

        this[_strokeColor].push([0, 0, 0, 0]);

        this.setColorTransform(i, null);
      }
    }

    this[_count] = value;
  }

  delete(idx) {
    if (idx >= this[_count] || idx < 0) throw new Error('Out of range.');

    this[_transform0].splice(idx, 1);

    this[_transform1].splice(idx, 1);

    this[_frameIndex].splice(idx, 1);

    this[_filters].splice(idx, 1);

    this[_fillColor].splice(idx, 1);

    this[_strokeColor].splice(idx, 1);

    this[_color0].splice(idx, 1);

    this[_color1].splice(idx, 1);

    this[_color2].splice(idx, 1);

    this[_color3].splice(idx, 1);

    this[_color4].splice(idx, 1);

    this[_count]--;
  }

  get meshData() {
    const {
      attributes,
      cells,
      positions,
      textureCoord,
      uniforms
    } = this[_mesh].meshData;
    const frames = this[_textures];
    const meshData = {
      attributes: _objectSpread({}, attributes),
      cells,
      positions,
      textureCoord,
      uniforms: _objectSpread({}, uniforms),
      instanceCount: this[_count],
      enableBlend: this.enableBlend
    };

    if (frames.length) {
      frames.forEach((frame, i) => {
        meshData.uniforms[`u_texFrame${i}`] = frame;
      });
    }

    if (this[_mesh].uniforms.u_texSampler) {
      meshData.attributes.a_frameIndex = {
        data: this[_frameIndex],
        divisor: 1
      };
    } // console.log(this[_mesh].meshData)


    meshData.attributes.a_transform0 = {
      data: this[_transform0],
      divisor: 1
    };
    meshData.attributes.a_transform1 = {
      data: this[_transform1],
      divisor: 1
    };
    meshData.attributes.a_colorCloud0 = {
      data: this[_color0],
      divisor: 1
    };
    meshData.attributes.a_colorCloud1 = {
      data: this[_color1],
      divisor: 1
    };
    meshData.attributes.a_colorCloud2 = {
      data: this[_color2],
      divisor: 1
    };
    meshData.attributes.a_colorCloud3 = {
      data: this[_color3],
      divisor: 1
    };
    meshData.attributes.a_colorCloud4 = {
      data: this[_color4],
      divisor: 1
    };

    if (this.hasCloudColor) {
      meshData.attributes.a_fillCloudColor = {
        data: this[_fillColor],
        divisor: 1
      };
      meshData.attributes.a_strokeCloudColor = {
        data: this[_strokeColor],
        divisor: 1
      };
    }

    return meshData;
  }

  transform(idx, m) {
    const transform = this.getTransform(idx);
    m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].multiply(Array.of(0, 0, 0, 0, 0, 0), m, transform);
    this.setTransform(idx, m);
    return this;
  }

  translate(idx, [x, y]) {
    let m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].create();
    m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].translate(Array.of(0, 0, 0, 0, 0, 0), m, [x, y]);
    return this.transform(idx, m);
  }

  rotate(idx, rad, [ox, oy] = [0, 0]) {
    let m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].create();
    m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].translate(Array.of(0, 0, 0, 0, 0, 0), m, [ox, oy]);
    m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].rotate(Array.of(0, 0, 0, 0, 0, 0), m, rad);
    m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].translate(Array.of(0, 0, 0, 0, 0, 0), m, [-ox, -oy]);
    return this.transform(idx, m);
  }

  scale(idx, [x, y = x], [ox, oy] = [0, 0]) {
    let m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].create();
    m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].translate(Array.of(0, 0, 0, 0, 0, 0), m, [ox, oy]);
    m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].scale(Array.of(0, 0, 0, 0, 0, 0), m, [x, y]);
    m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].translate(Array.of(0, 0, 0, 0, 0, 0), m, [-ox, -oy]);
    return this.transform(idx, m);
  }

  skew(idx, [x, y = x], [ox, oy] = [0, 0]) {
    let m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].create();
    m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].translate(Array.of(0, 0, 0, 0, 0, 0), m, [ox, oy]);
    m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].multiply(Array.of(0, 0, 0, 0, 0, 0), m, gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].fromValues(1, Math.tan(y), Math.tan(x), 1, 0, 0));
    m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].translate(Array.of(0, 0, 0, 0, 0, 0), m, [-ox, -oy]);
    return this.transform(idx, m);
  }

  isPointCollision(idx, [x, y], type = 'both') {
    const m = this.getTransform(idx);
    const p = Object(_utils_math__WEBPACK_IMPORTED_MODULE_2__["transformPoint"])([x, y], gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].invert(Array.of(0, 0, 0, 0, 0, 0), m));
    return this[_mesh].isPointCollision(...p, type);
  }

  isPointInPath(idx, [x, y]) {
    return this.isPointCollision(idx, [x, y], 'fill');
  }

  isPointInStroke(idx, [x, y]) {
    return this.isPointCollision(idx, [x, y], 'stroke');
  }

});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grayscale", function() { return grayscale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brightness", function() { return brightness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saturate", function() { return saturate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contrast", function() { return contrast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sepia", function() { return sepia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opacity", function() { return opacity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hueRotate", function() { return hueRotate; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);


function multiply(a, b) {
  const out = [];
  const a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a04 = a[4]; // eslint-disable-line one-var-declaration-per-line

  const a10 = a[5],
        a11 = a[6],
        a12 = a[7],
        a13 = a[8],
        a14 = a[9]; // eslint-disable-line one-var-declaration-per-line

  const a20 = a[10],
        a21 = a[11],
        a22 = a[12],
        a23 = a[13],
        a24 = a[14]; // eslint-disable-line one-var-declaration-per-line

  const a30 = a[15],
        a31 = a[16],
        a32 = a[17],
        a33 = a[18],
        a34 = a[19]; // eslint-disable-line one-var-declaration-per-line
  // Cache only the current line of the second matrix

  let b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4]; // eslint-disable-line one-var-declaration-per-line

  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  out[4] = b0 * a04 + b1 * a14 + b2 * a24 + b3 * a34 + b4;
  b0 = b[5];
  b1 = b[6];
  b2 = b[7];
  b3 = b[8];
  b4 = b[9];
  out[5] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[6] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[7] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[8] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  out[9] = b0 * a04 + b1 * a14 + b2 * a24 + b3 * a34 + b4;
  b0 = b[10];
  b1 = b[11];
  b2 = b[12];
  b3 = b[13];
  b4 = b[14];
  out[10] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[11] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[12] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[13] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  out[14] = b0 * a04 + b1 * a14 + b2 * a24 + b3 * a34 + b4;
  b0 = b[15];
  b1 = b[16];
  b2 = b[17];
  b3 = b[18];
  b4 = b[19];
  out[15] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[16] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[17] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[18] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  out[19] = b0 * a04 + b1 * a14 + b2 * a24 + b3 * a34 + b4;
  return out;
} // export function transformColor(color, m) {
//   const [r, g, b, a] = color;
//   color[0] = m[0] * r + m[1] * g + m[2] * b + m[3] * a + m[4];
//   color[1] = m[5] * r + m[6] * g + m[7] * b + m[8] * a + m[9];
//   color[2] = m[10] * r + m[11] * g + m[12] * b + m[13] * a + m[14];
//   color[3] = m[15] * r + m[16] * g + m[17] * b + m[18] * a + m[19];
//   return color;
// }

function grayscale(p) {
  p = Object(_math__WEBPACK_IMPORTED_MODULE_0__["clamp"])(0, 1, p);
  const r = 0.212 * p;
  const g = 0.714 * p;
  const b = 0.074 * p;
  return [r + 1 - p, g, b, 0, 0, r, g + 1 - p, b, 0, 0, r, g, b + 1 - p, 0, 0, 0, 0, 0, 1, 0];
}
function brightness(p) {
  return [p, 0, 0, 0, 0, 0, p, 0, 0, 0, 0, 0, p, 0, 0, 0, 0, 0, 1, 0];
}
function saturate(p) {
  p = Object(_math__WEBPACK_IMPORTED_MODULE_0__["clamp"])(0, 1, p);
  const r = 0.212 * (1 - p);
  const g = 0.714 * (1 - p);
  const b = 0.074 * (1 - p);
  return [r + p, g, b, 0, 0, r, g + p, b, 0, 0, r, g, b + p, 0, 0, 0, 0, 0, 1, 0];
}
function contrast(p) {
  const d = 0.5 * (1 - p);
  return [p, 0, 0, 0, d, 0, p, 0, 0, d, 0, 0, p, 0, d, 0, 0, 0, 1, 0];
}
function invert(p) {
  const d = 1 - 2 * p;
  return [d, 0, 0, 0, p, 0, d, 0, 0, p, 0, 0, d, 0, p, 0, 0, 0, 1, 0];
}
function sepia(p) {
  return [1 - 0.607 * p, 0.769 * p, 0.189 * p, 0, 0, 0.349 * p, 1 - 0.314 * p, 0.168 * p, 0, 0, 0.272 * p, 0.534 * p, 1 - 0.869 * p, 0, 0, 0, 0, 0, 1, 0];
}
function opacity(p) {
  return [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, p, 0];
}
function hueRotate(deg) {
  const rotation = deg / 180 * Math.PI;
  const cos = Math.cos(rotation),
        sin = Math.sin(rotation),
        lumR = 0.213,
        lumG = 0.715,
        lumB = 0.072;
  return [lumR + cos * (1 - lumR) + sin * -lumR, lumG + cos * -lumG + sin * -lumG, lumB + cos * -lumB + sin * (1 - lumB), 0, 0, lumR + cos * -lumR + sin * 0.143, lumG + cos * (1 - lumG) + sin * 0.140, lumB + cos * -lumB + sin * -0.283, 0, 0, lumR + cos * -lumR + sin * -(1 - lumR), lumG + cos * -lumG + sin * lumG, lumB + cos * (1 - lumB) + sin * lumB, 0, 0, 0, 0, 0, 1, 0];
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseColor; });
/* harmony import */ var color_rgba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var color_rgba__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(color_rgba__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);


function parseColor(colorStr) {
  const ret = color_rgba__WEBPACK_IMPORTED_MODULE_0___default()(colorStr);
  if (!ret || !ret.length) throw new TypeError('Invalid color value.');
  return [ret[0] / 255, ret[1] / 255, ret[2] / 255, ret[3]];
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @module  color-rgba */



var parse = __webpack_require__(33)
var hsl = __webpack_require__(37)
var clamp = __webpack_require__(39)

module.exports = function rgba (color) {
	var values, i, l

	//attempt to parse non-array arguments
	var parsed = parse(color)

	if (!parsed.space) return []

	values = Array(3)
	values[0] = clamp(parsed.values[0], 0, 255)
	values[1] = clamp(parsed.values[1], 0, 255)
	values[2] = clamp(parsed.values[2], 0, 255)

	if (parsed.space[0] === 'h') {
		values = hsl.rgb(values)
	}

	values.push(clamp(parsed.alpha, 0, 1))

	return values
}


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**
 * @module color-parse
 */



var names = __webpack_require__(34)
var isObject = __webpack_require__(35)
var defined = __webpack_require__(36)

module.exports = parse

/**
 * Base hues
 * http://dev.w3.org/csswg/css-color/#typedef-named-hue
 */
//FIXME: use external hue detector
var baseHues = {
	red: 0,
	orange: 60,
	yellow: 120,
	green: 180,
	blue: 240,
	purple: 300
}

/**
 * Parse color from the string passed
 *
 * @return {Object} A space indicator `space`, an array `values` and `alpha`
 */
function parse (cstr) {
	var m, parts = [], alpha = 1, space

	if (typeof cstr === 'string') {
		//keyword
		if (names[cstr]) {
			parts = names[cstr].slice()
			space = 'rgb'
		}

		//reserved words
		else if (cstr === 'transparent') {
			alpha = 0
			space = 'rgb'
			parts = [0,0,0]
		}

		//hex
		else if (/^#[A-Fa-f0-9]+$/.test(cstr)) {
			var base = cstr.slice(1)
			var size = base.length
			var isShort = size <= 4
			alpha = 1

			if (isShort) {
				parts = [
					parseInt(base[0] + base[0], 16),
					parseInt(base[1] + base[1], 16),
					parseInt(base[2] + base[2], 16)
				]
				if (size === 4) {
					alpha = parseInt(base[3] + base[3], 16) / 255
				}
			}
			else {
				parts = [
					parseInt(base[0] + base[1], 16),
					parseInt(base[2] + base[3], 16),
					parseInt(base[4] + base[5], 16)
				]
				if (size === 8) {
					alpha = parseInt(base[6] + base[7], 16) / 255
				}
			}

			if (!parts[0]) parts[0] = 0
			if (!parts[1]) parts[1] = 0
			if (!parts[2]) parts[2] = 0

			space = 'rgb'
		}

		//color space
		else if (m = /^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(cstr)) {
			var name = m[1]
			var isRGB = name === 'rgb'
			var base = name.replace(/a$/, '')
			space = base
			var size = base === 'cmyk' ? 4 : base === 'gray' ? 1 : 3
			parts = m[2].trim()
				.split(/\s*,\s*/)
				.map(function (x, i) {
					//<percentage>
					if (/%$/.test(x)) {
						//alpha
						if (i === size)	return parseFloat(x) / 100
						//rgb
						if (base === 'rgb') return parseFloat(x) * 255 / 100
						return parseFloat(x)
					}
					//hue
					else if (base[i] === 'h') {
						//<deg>
						if (/deg$/.test(x)) {
							return parseFloat(x)
						}
						//<base-hue>
						else if (baseHues[x] !== undefined) {
							return baseHues[x]
						}
					}
					return parseFloat(x)
				})

			if (name === base) parts.push(1)
			alpha = (isRGB) ? 1 : (parts[size] === undefined) ? 1 : parts[size]
			parts = parts.slice(0, size)
		}

		//named channels case
		else if (cstr.length > 10 && /[0-9](?:\s|\/)/.test(cstr)) {
			parts = cstr.match(/([0-9]+)/g).map(function (value) {
				return parseFloat(value)
			})

			space = cstr.match(/([a-z])/ig).join('').toLowerCase()
		}
	}

	//numeric case
	else if (!isNaN(cstr)) {
		space = 'rgb'
		parts = [cstr >>> 16, (cstr & 0x00ff00) >>> 8, cstr & 0x0000ff]
	}

	//object case - detects css cases of rgb and hsl
	else if (isObject(cstr)) {
		var r = defined(cstr.r, cstr.red, cstr.R, null)

		if (r !== null) {
			space = 'rgb'
			parts = [
				r,
				defined(cstr.g, cstr.green, cstr.G),
				defined(cstr.b, cstr.blue, cstr.B)
			]
		}
		else {
			space = 'hsl'
			parts = [
				defined(cstr.h, cstr.hue, cstr.H),
				defined(cstr.s, cstr.saturation, cstr.S),
				defined(cstr.l, cstr.lightness, cstr.L, cstr.b, cstr.brightness)
			]
		}

		alpha = defined(cstr.a, cstr.alpha, cstr.opacity, 1)

		if (cstr.opacity != null) alpha /= 100
	}

	//array
	else if (Array.isArray(cstr) || global.ArrayBuffer && ArrayBuffer.isView && ArrayBuffer.isView(cstr)) {
		parts = [cstr[0], cstr[1], cstr[2]]
		space = 'rgb'
		alpha = cstr.length === 4 ? cstr[3] : 1
	}

	return {
		space: space,
		values: parts,
		alpha: alpha
	}
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(22)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toString = Object.prototype.toString;

module.exports = function (x) {
	var prototype;
	return toString.call(x) === '[object Object]' && (prototype = Object.getPrototypeOf(x), prototype === null || prototype === Object.getPrototypeOf({}));
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = function () {
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] !== undefined) return arguments[i];
    }
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @module color-space/hsl
 */


var rgb = __webpack_require__(38);

module.exports = {
	name: 'hsl',
	min: [0,0,0],
	max: [360,100,100],
	channel: ['hue', 'saturation', 'lightness'],
	alias: ['HSL'],

	rgb: function(hsl) {
		var h = hsl[0] / 360,
				s = hsl[1] / 100,
				l = hsl[2] / 100,
				t1, t2, t3, rgb, val;

		if (s === 0) {
			val = l * 255;
			return [val, val, val];
		}

		if (l < 0.5) {
			t2 = l * (1 + s);
		}
		else {
			t2 = l + s - l * s;
		}
		t1 = 2 * l - t2;

		rgb = [0, 0, 0];
		for (var i = 0; i < 3; i++) {
			t3 = h + 1 / 3 * - (i - 1);
			if (t3 < 0) {
				t3++;
			}
			else if (t3 > 1) {
				t3--;
			}

			if (6 * t3 < 1) {
				val = t1 + (t2 - t1) * 6 * t3;
			}
			else if (2 * t3 < 1) {
				val = t2;
			}
			else if (3 * t3 < 2) {
				val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
			}
			else {
				val = t1;
			}

			rgb[i] = val * 255;
		}

		return rgb;
	}
};


//extend rgb
rgb.hsl = function(rgb) {
	var r = rgb[0]/255,
			g = rgb[1]/255,
			b = rgb[2]/255,
			min = Math.min(r, g, b),
			max = Math.max(r, g, b),
			delta = max - min,
			h, s, l;

	if (max === min) {
		h = 0;
	}
	else if (r === max) {
		h = (g - b) / delta;
	}
	else if (g === max) {
		h = 2 + (b - r) / delta;
	}
	else if (b === max) {
		h = 4 + (r - g)/ delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	}
	else if (l <= 0.5) {
		s = delta / (max + min);
	}
	else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * RGB space.
 *
 * @module  color-space/rgb
 */


module.exports = {
	name: 'rgb',
	min: [0,0,0],
	max: [255,255,255],
	channel: ['red', 'green', 'blue'],
	alias: ['RGB']
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = clamp

function clamp(value, min, max) {
  return min < max
    ? (value < min ? min : value > max ? max : value)
    : (value < max ? max : value > min ? min : value)
}


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createText; });
/* harmony import */ var _parse_font__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var _vector_to_rgba__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);




const cacheMap = {};

function fontEx(info, ratio) {
  const {
    style,
    variant,
    weight,
    stretch,
    size,
    pxLineHeight,
    family
  } = info;
  return `${style} ${variant} ${weight} ${stretch} ${size * ratio}px/${pxLineHeight * ratio}px ${family}`;
}

function createText(text, {
  font,
  fillColor,
  strokeColor,
  strokeWidth
}) {
  const key = [text, font, String(fillColor), String(strokeColor)].join('###');
  let textCanvas = cacheMap[key];
  if (textCanvas) return textCanvas; // cannot use offscreen canvas because use offscreen canvas as texture will fail in early versions of Chrome.

  textCanvas = _env__WEBPACK_IMPORTED_MODULE_1__["default"].createCanvas(1, 1, {
    offscreen: false
  });
  const textContext = textCanvas.getContext('2d');
  textContext.save();
  textContext.font = font;
  let {
    width
  } = textContext.measureText(text);
  textContext.restore();
  const fontInfo = Object(_parse_font__WEBPACK_IMPORTED_MODULE_0__["default"])(font);
  const height = Math.max(fontInfo.pxLineHeight, fontInfo.pxHeight * 1.13);

  if (/italic|oblique/.test(font)) {
    width += height * Math.tan(15 * Math.PI / 180);
  }

  if (!fillColor && !strokeColor) fillColor = '#000';
  const canvas = textContext.canvas;
  const w = Math.ceil(width);
  const h = Math.ceil(height);
  const ratio = 2;
  canvas.width = w * ratio;
  canvas.height = h * ratio;
  textContext.save();
  textContext.font = fontEx(fontInfo, ratio);
  textContext.textAlign = 'center';
  textContext.textBaseline = 'middle';
  const top = canvas.height * 0.57;
  const left = canvas.width * 0.5;

  if (fillColor) {
    if (Array.isArray(fillColor)) fillColor = Object(_vector_to_rgba__WEBPACK_IMPORTED_MODULE_2__["default"])(fillColor);else if (fillColor.vector) {
      let gradient;
      const {
        vector,
        colors
      } = fillColor;

      if (vector.length === 6) {
        gradient = textContext.createRadialGradient(...vector);
      } else {
        gradient = textContext.createLinearGradient(...vector);
      }

      colors.forEach(({
        offset,
        color
      }) => {
        gradient.addColorStop(offset, color);
      });
      fillColor = gradient;
    }
    textContext.fillStyle = fillColor;
    textContext.fillText(text, left, top);
  }

  if (strokeColor) {
    textContext.lineWidth = strokeWidth;
    if (Array.isArray(strokeColor)) strokeColor = Object(_vector_to_rgba__WEBPACK_IMPORTED_MODULE_2__["default"])(strokeColor);else if (strokeColor.vector) {
      let gradient;
      const {
        vector,
        colors
      } = strokeColor;

      if (vector.length === 6) {
        gradient = textContext.createRadialGradient(...vector);
      } else {
        gradient = textContext.createLinearGradient(...vector);
      }

      colors.forEach(({
        offset,
        color
      }) => {
        gradient.addColorStop(offset, color);
      });
      strokeColor = gradient;
    }
    textContext.strokeStyle = strokeColor;
    textContext.strokeText(text, left, top);
  }

  textContext.restore();
  cacheMap[key] = {
    image: textCanvas,
    rect: [0, 0, w, h]
  };
  return cacheMap[key];
}

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Figure2D; });
/* harmony import */ var parse_svg_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var parse_svg_path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parse_svg_path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bound_points__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);
/* harmony import */ var bound_points__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bound_points__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var abs_svg_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44);
/* harmony import */ var abs_svg_path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(abs_svg_path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _normalize_svg_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45);
/* harmony import */ var _svg_path_contours__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47);
/* harmony import */ var _svg_path_contours__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_svg_path_contours__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_contours__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54);
/* harmony import */ var _utils_ellipse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);









const _contours = Symbol('contours');

const _path = Symbol('path');

const _simplify = Symbol('simplify');

const _scale = Symbol('scale');

class Figure2D {
  constructor(options = {}) {
    if (typeof options === 'string') options = {
      path: options
    };
    if (options.path) this[_path] = parse_svg_path__WEBPACK_IMPORTED_MODULE_0___default()(options.path);else this[_path] = [];
    this[_contours] = null;
    this[_simplify] = options.simplify || 0;
    this[_scale] = options.scale || 1;
  }

  get contours() {
    let ret = null;

    if (!this[_contours] && this[_path]) {
      const path = Object(_normalize_svg_path__WEBPACK_IMPORTED_MODULE_3__["default"])(abs_svg_path__WEBPACK_IMPORTED_MODULE_2___default()(this[_path]));
      this[_contours] = _svg_path_contours__WEBPACK_IMPORTED_MODULE_4___default()(path, this[_scale], this[_simplify]);
      this[_contours].path = path;
      this[_contours].simplify = this[_simplify];
      this[_contours].scale = this[_scale];
    }

    if (this[_contours]) {
      ret = this[_contours].map(c => [...c]);
      ret.path = this[_contours].path;
      ret.simplify = this[_contours].simplify;
      ret.scale = this[_contours].scale;
    }

    return ret;
  }

  get path() {
    return this[_path];
  }

  get simplify() {
    return this[_simplify];
  }

  get boundingBox() {
    const contours = this.contours;

    if (contours && contours.length) {
      const points = contours.reduce((a, b) => [...a, ...b]);
      return bound_points__WEBPACK_IMPORTED_MODULE_1___default()(points);
    }

    return [[0, 0], [0, 0]];
  }

  get boundingCenter() {
    const bound = this.boundingBox;

    if (bound) {
      return [0.5 * (bound[0][0] + bound[1][0]), 0.5 * (bound[0][1] + bound[1][1])];
    }

    return [0, 0];
  }

  normalize(x0 = 0, y0 = 0) {
    const path = Object(_normalize_svg_path__WEBPACK_IMPORTED_MODULE_3__["default"])(abs_svg_path__WEBPACK_IMPORTED_MODULE_2___default()(this[_path])).map(([cmd, ...args]) => {
      const transformed = [cmd];

      for (let i = 0; i < args.length; i += 2) {
        const x = args[i] - x0,
              y = args[i + 1] - y0;
        transformed.push(x, y);
      }

      return transformed;
    });
    this.beginPath();

    this[_path].push(...path);

    return this;
  }

  getPointAtLength(length) {
    if (this.contours) {
      return Object(_utils_contours__WEBPACK_IMPORTED_MODULE_5__["getPointAtLength"])(this[_contours], length);
    }

    return null;
  }

  getTotalLength() {
    if (this.contours) {
      return Object(_utils_contours__WEBPACK_IMPORTED_MODULE_5__["getTotalLength"])(this[_contours]);
    }

    return 0;
  }

  addPath(path) {
    this[_contours] = null;
    if (typeof path === 'string') path = parse_svg_path__WEBPACK_IMPORTED_MODULE_0___default()(path);

    this[_path].push(...path);
  }

  beginPath() {
    this[_path] = [];
    this[_contours] = null;
  }

  clear() {
    this.beginPath();
  }

  ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise = 0) {
    startAngle += rotation;
    endAngle += rotation;
    if (radiusX <= 0 || radiusY <= 0 || endAngle === startAngle) return;
    const PI2 = 2 * Math.PI;

    if (endAngle < startAngle) {
      endAngle = startAngle + PI2 + (endAngle - startAngle) % PI2;
    }

    if (endAngle - startAngle > PI2) {
      endAngle = startAngle + PI2;
    }

    const delta = endAngle - startAngle;
    let path = this[_path].length > 0 && delta < PI2 ? 'L' : 'M';
    const direction = anticlockwise ? -1 : 1;
    const startPoint = Object(_utils_ellipse__WEBPACK_IMPORTED_MODULE_6__["getPoint"])(x, y, radiusX, radiusY, startAngle);
    const endPoint = Object(_utils_ellipse__WEBPACK_IMPORTED_MODULE_6__["getPoint"])(x, y, radiusX, radiusY, endAngle);
    const sweepFlag = Number(!anticlockwise);
    let largeArcFlag = delta > Math.PI ? 1 : 0;
    if (anticlockwise) largeArcFlag = 1 - largeArcFlag;

    if (delta >= PI2) {
      endPoint[1] -= direction * 1e-2;
    }

    path += startPoint.join(' ');
    path += `A${radiusX} ${radiusY} 0 ${largeArcFlag} ${sweepFlag} ${endPoint.join(' ')}`;

    if (delta >= PI2) {
      path += 'Z';
    }

    this.addPath(path);
  }

  arc(x, y, radius, startAngle, endAngle, anticlockwise = 0) {
    return this.ellipse(x, y, radius, radius, 0, startAngle, endAngle, anticlockwise);
  }

  arcTo(rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y) {
    this[_contours] = null;

    this[_path].push(['A', rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y]);
  }

  moveTo(x, y) {
    this[_contours] = null;

    this[_path].push(['M', x, y]);
  }

  lineTo(x, y) {
    this[_contours] = null;

    this[_path].push(['L', x, y]);
  }

  bezierCurveTo(x1, y1, x2, y2, x, y) {
    this[_contours] = null;

    this[_path].push(['C', x1, y1, x2, y2, x, y]);
  }

  quadraticCurveTo(x1, y1, x, y) {
    this[_contours] = null;

    this[_path].push(['Q', x1, y1, x, y]);
  }

  rect(x, y, width, height) {
    const path = `M${x} ${y}L${x + width} ${y}L${x + width} ${y + height}L${x} ${y + height}Z`;
    this.addPath(path);
  }

  closePath() {
    this[_contours] = null;
    let lastPath = [];
    const len = this[_path].length;

    if (len > 0) {
      lastPath = this[_path][len - 1];
    }

    if (lastPath[0] !== 'Z' && lastPath[0] !== 'z') {
      this[_path].push(['Z']);
    }
  }

}

/***/ }),
/* 42 */
/***/ (function(module, exports) {


module.exports = parse

/**
 * expected argument lengths
 * @type {Object}
 */

var length = {a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0}

/**
 * segment pattern
 * @type {RegExp}
 */

var segment = /([astvzqmhlc])([^astvzqmhlc]*)/ig

/**
 * parse an svg path data string. Generates an Array
 * of commands where each command is an Array of the
 * form `[command, arg1, arg2, ...]`
 *
 * @param {String} path
 * @return {Array}
 */

function parse(path) {
	var data = []
	path.replace(segment, function(_, command, args){
		var type = command.toLowerCase()
		args = parseValues(args)

		// overloaded moveTo
		if (type == 'm' && args.length > 2) {
			data.push([command].concat(args.splice(0, 2)))
			type = 'l'
			command = command == 'm' ? 'l' : 'L'
		}

		while (true) {
			if (args.length == length[type]) {
				args.unshift(command)
				return data.push(args)
			}
			if (args.length < length[type]) throw new Error('malformed path data')
			data.push([command].concat(args.splice(0, length[type])))
		}
	})
	return data
}

var number = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig

function parseValues(args) {
	var numbers = args.match(number)
	return numbers ? numbers.map(Number) : []
}


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = findBounds

function findBounds(points) {
  var n = points.length
  if(n === 0) {
    return [[], []]
  }
  var d = points[0].length
  var lo = points[0].slice()
  var hi = points[0].slice()
  for(var i=1; i<n; ++i) {
    var p = points[i]
    for(var j=0; j<d; ++j) {
      var x = p[j]
      lo[j] = Math.min(lo[j], x)
      hi[j] = Math.max(hi[j], x)
    }
  }
  return [lo, hi]
}

/***/ }),
/* 44 */
/***/ (function(module, exports) {


module.exports = absolutize

/**
 * redefine `path` with absolute coordinates
 *
 * @param {Array} path
 * @return {Array}
 */

function absolutize(path){
	var startX = 0
	var startY = 0
	var x = 0
	var y = 0

	return path.map(function(seg){
		seg = seg.slice()
		var type = seg[0]
		var command = type.toUpperCase()

		// is relative
		if (type != command) {
			seg[0] = command
			switch (type) {
				case 'a':
					seg[6] += x
					seg[7] += y
					break
				case 'v':
					seg[1] += y
					break
				case 'h':
					seg[1] += x
					break
				default:
					for (var i = 1; i < seg.length;) {
						seg[i++] += x
						seg[i++] += y
					}
			}
		}

		// update cursor state
		switch (command) {
			case 'Z':
				x = startX
				y = startY
				break
			case 'H':
				x = seg[1]
				break
			case 'V':
				y = seg[1]
				break
			case 'M':
				x = startX = seg[1]
				y = startY = seg[2]
				break
			default:
				x = seg[seg.length - 2]
				y = seg[seg.length - 1]
		}

		return seg
	})
}


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalize; });
/* harmony import */ var _a2c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

// https://github.com/jkroso/normalize-svg-path

/* eslint-disable */

function normalize(path) {
  // init state
  var prev;
  var result = [];
  var bezierX = 0;
  var bezierY = 0;
  var startX = 0;
  var startY = 0;
  var quadX = null;
  var quadY = null;
  var x = 0;
  var y = 0;

  for (var i = 0, len = path.length; i < len; i++) {
    var seg = path[i];
    var command = seg[0];

    switch (command) {
      case 'M':
        startX = seg[1];
        startY = seg[2];
        break;

      case 'A':
        var curves = Object(_a2c__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y, seg[6], seg[7], seg[4], seg[5], seg[1], seg[2], seg[3]);
        if (!curves.length) continue;
        curves = curves.map(curve => {
          const [x0, y0, x1, y1, x2, y2, x, y] = curve;
          return {
            x1,
            y1,
            x2,
            y2,
            x,
            y
          };
        });

        for (var j = 0, c; j < curves.length; j++) {
          c = curves[j];
          seg = ['C', c.x1, c.y1, c.x2, c.y2, c.x, c.y];
          if (j < curves.length - 1) result.push(seg);
        }

        break;

      case 'S':
        // default control point
        var cx = x;
        var cy = y;

        if (prev == 'C' || prev == 'S') {
          cx += cx - bezierX; // reflect the previous command's control

          cy += cy - bezierY; // point relative to the current point
        }

        seg = ['C', cx, cy, seg[1], seg[2], seg[3], seg[4]];
        break;

      case 'T':
        if (prev == 'Q' || prev == 'T') {
          quadX = x * 2 - quadX; // as with 'S' reflect previous control point

          quadY = y * 2 - quadY;
        } else {
          quadX = x;
          quadY = y;
        }

        seg = quadratic(x, y, quadX, quadY, seg[1], seg[2]);
        break;

      case 'Q':
        quadX = seg[1];
        quadY = seg[2];
        seg = quadratic(x, y, seg[1], seg[2], seg[3], seg[4]);
        break;

      case 'L':
        seg = line(x, y, seg[1], seg[2]);
        break;

      case 'H':
        seg = line(x, y, seg[1], y);
        break;

      case 'V':
        seg = line(x, y, x, seg[1]);
        break;

      case 'Z':
        seg = line(x, y, startX, startY);
        break;
    } // update state


    prev = command;
    x = seg[seg.length - 2];
    y = seg[seg.length - 1];

    if (seg.length > 4) {
      bezierX = seg[seg.length - 4];
      bezierY = seg[seg.length - 3];
    } else {
      bezierX = x;
      bezierY = y;
    }

    result.push(seg);
  }

  return result;
}

function line(x1, y1, x2, y2) {
  return ['C', x1, y1, x2, y2, x2, y2];
}

function quadratic(x1, y1, cx, cy, x2, y2) {
  return ['C', x1 / 3 + 2 / 3 * cx, y1 / 3 + 2 / 3 * cy, x2 / 3 + 2 / 3 * cx, y2 / 3 + 2 / 3 * cy, x2, y2];
}
/* eslint-enable */

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return a2c; });
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

// https://github.com/colinmeinke/svg-arc-to-cubic-bezier
//
// Convert an arc to a sequence of cubic bézier curves
//
const TAU = Math.PI * 2;
/* eslint-disable space-infix-ops */
// Calculate an angle between two unit vectors
//
// Since we measure angle between radii of circular arcs,
// we can use simplified math (without length normalization)
//

function unit_vector_angle(ux, uy, vx, vy) {
  const sign = ux * vy - uy * vx < 0 ? -1 : 1;
  let dot = ux * vx + uy * vy; // Add this to work with arbitrary vectors:
  // dot /= Math.sqrt(ux * ux + uy * uy) * Math.sqrt(vx * vx + vy * vy);
  // rounding errors, e.g. -1.0000000000000002 can screw up this

  if (dot > 1.0) {
    dot = 1.0;
  }

  if (dot < -1.0) {
    dot = -1.0;
  }

  return sign * Math.acos(dot);
} // Convert from endpoint to center parameterization,
// see http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
//
// Return [cx, cy, theta1, delta_theta]
//


function get_arc_center(x1, y1, x2, y2, fa, fs, rx, ry, sin_phi, cos_phi) {
  // Step 1.
  //
  // Moving an ellipse so origin will be the middlepoint between our two
  // points. After that, rotate it to line up ellipse axes with coordinate
  // axes.
  //
  const x1p = cos_phi * (x1 - x2) / 2 + sin_phi * (y1 - y2) / 2;
  const y1p = -sin_phi * (x1 - x2) / 2 + cos_phi * (y1 - y2) / 2;
  const rx_sq = rx * rx;
  const ry_sq = ry * ry;
  const x1p_sq = x1p * x1p;
  const y1p_sq = y1p * y1p; // Step 2.
  //
  // Compute coordinates of the centre of this ellipse (cx', cy')
  // in the new coordinate system.
  //

  let radicant = rx_sq * ry_sq - rx_sq * y1p_sq - ry_sq * x1p_sq;

  if (radicant < 0) {
    // due to rounding errors it might be e.g. -1.3877787807814457e-17
    radicant = 0;
  }

  radicant /= rx_sq * y1p_sq + ry_sq * x1p_sq;
  radicant = Math.sqrt(radicant) * (fa === fs ? -1 : 1);
  const cxp = radicant * rx / ry * y1p;
  const cyp = radicant * -ry / rx * x1p; // Step 3.
  //
  // Transform back to get centre coordinates (cx, cy) in the original
  // coordinate system.
  //

  const cx = cos_phi * cxp - sin_phi * cyp + (x1 + x2) / 2;
  const cy = sin_phi * cxp + cos_phi * cyp + (y1 + y2) / 2; // Step 4.
  //
  // Compute angles (theta1, delta_theta).
  //

  const v1x = (x1p - cxp) / rx;
  const v1y = (y1p - cyp) / ry;
  const v2x = (-x1p - cxp) / rx;
  const v2y = (-y1p - cyp) / ry;
  const theta1 = unit_vector_angle(1, 0, v1x, v1y);
  let delta_theta = unit_vector_angle(v1x, v1y, v2x, v2y);

  if (fs === 0 && delta_theta > 0) {
    delta_theta -= TAU;
  }

  if (fs === 1 && delta_theta < 0) {
    delta_theta += TAU;
  }

  return [cx, cy, theta1, delta_theta];
} //
// Approximate one unit arc segment with bézier curves,
// see http://math.stackexchange.com/questions/873224
//


function approximate_unit_arc(theta1, delta_theta) {
  const alpha = 4 / 3 * Math.tan(delta_theta / 4);
  const x1 = Math.cos(theta1);
  const y1 = Math.sin(theta1);
  const x2 = Math.cos(theta1 + delta_theta);
  const y2 = Math.sin(theta1 + delta_theta);
  return [x1, y1, x1 - y1 * alpha, y1 + x1 * alpha, x2 + y2 * alpha, y2 - x2 * alpha, x2, y2];
}

function a2c(x1, y1, x2, y2, fa, fs, rx, ry, phi) {
  const sin_phi = Math.sin(phi * TAU / 360);
  const cos_phi = Math.cos(phi * TAU / 360); // Make sure radii are valid
  //

  const x1p = cos_phi * (x1 - x2) / 2 + sin_phi * (y1 - y2) / 2;
  const y1p = -sin_phi * (x1 - x2) / 2 + cos_phi * (y1 - y2) / 2;

  if (x1p === 0 && y1p === 0) {
    // we're asked to draw line to itself
    return [];
  }

  if (rx === 0 || ry === 0) {
    // one of the radii is zero
    return [];
  } // Compensate out-of-range radii
  //


  rx = Math.abs(rx);
  ry = Math.abs(ry);
  const lambda = x1p * x1p / (rx * rx) + y1p * y1p / (ry * ry);

  if (lambda > 1) {
    rx *= Math.sqrt(lambda);
    ry *= Math.sqrt(lambda);
  } // Get center parameters (cx, cy, theta1, delta_theta)
  //


  const cc = get_arc_center(x1, y1, x2, y2, fa, fs, rx, ry, sin_phi, cos_phi);
  const result = [];
  let theta1 = cc[2];
  let delta_theta = cc[3]; // Split an arc to multiple segments, so each segment
  // will be less than τ/4 (= 90°)
  //

  const segments = Math.max(Math.ceil(Math.abs(delta_theta) / (TAU / 4)), 1);
  delta_theta /= segments;

  for (let i = 0; i < segments; i++) {
    result.push(approximate_unit_arc(theta1, delta_theta));
    theta1 += delta_theta;
  } // We have a bezier approximation of a unit circle,
  // now need to transform back to the original ellipse
  //


  return result.map(curve => {
    for (let i = 0; i < curve.length; i += 2) {
      let x = curve[i + 0];
      let y = curve[i + 1]; // scale

      x *= rx;
      y *= ry; // rotate

      const xp = cos_phi * x - sin_phi * y;
      const yp = sin_phi * x + cos_phi * y; // translate

      curve[i + 0] = xp + cc[0];
      curve[i + 1] = yp + cc[1];
    }

    return curve;
  });
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

// https://github.com/mattdesl/svg-path-contours

/* eslint-disable */
var bezier = __webpack_require__(48);

var vec2 = __webpack_require__(50);

var simplify = __webpack_require__(51);

function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}

var tmp1 = [0, 0],
    tmp2 = [0, 0],
    tmp3 = [0, 0];

function bezierTo(points, scale, start, seg) {
  bezier(start, set(tmp1, seg[1], seg[2]), set(tmp2, seg[3], seg[4]), set(tmp3, seg[5], seg[6]), scale, points);
}

module.exports = function contours(svg, scale, simp) {
  var paths = [];
  var points = [];
  var pen = [0, 0];
  svg.forEach(function (segment, i, self) {
    if (segment[0] === 'M') {
      vec2.copy(pen, segment.slice(1));

      if (points.length > 0) {
        paths.push(points);
        points = [];
      }
    } else if (segment[0] === 'C') {
      bezierTo(points, scale, pen, segment);
      set(pen, segment[5], segment[6]);
    } else {
      throw new Error('illegal type in SVG: ' + segment[0]);
    }
  });
  if (points.length > 0) paths.push(points);
  return paths.map(function (points) {
    return simplify(points, simp || 0);
  });
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(49)()

/***/ }),
/* 49 */
/***/ (function(module, exports) {

function clone(point) { //TODO: use gl-vec2 for this
    return [point[0], point[1]]
}

function vec2(x, y) {
    return [x, y]
}

module.exports = function createBezierBuilder(opt) {
    opt = opt||{}

    var RECURSION_LIMIT = typeof opt.recursion === 'number' ? opt.recursion : 8
    var FLT_EPSILON = typeof opt.epsilon === 'number' ? opt.epsilon : 1.19209290e-7
    var PATH_DISTANCE_EPSILON = typeof opt.pathEpsilon === 'number' ? opt.pathEpsilon : 1.0

    var curve_angle_tolerance_epsilon = typeof opt.angleEpsilon === 'number' ? opt.angleEpsilon : 0.01
    var m_angle_tolerance = opt.angleTolerance || 0
    var m_cusp_limit = opt.cuspLimit || 0

    return function bezierCurve(start, c1, c2, end, scale, points) {
        if (!points)
            points = []

        scale = typeof scale === 'number' ? scale : 1.0
        var distanceTolerance = PATH_DISTANCE_EPSILON / scale
        distanceTolerance *= distanceTolerance
        begin(start, c1, c2, end, points, distanceTolerance)
        return points
    }


    ////// Based on:
    ////// https://github.com/pelson/antigrain/blob/master/agg-2.4/src/agg_curves.cpp

    function begin(start, c1, c2, end, points, distanceTolerance) {
        points.push(clone(start))
        var x1 = start[0],
            y1 = start[1],
            x2 = c1[0],
            y2 = c1[1],
            x3 = c2[0],
            y3 = c2[1],
            x4 = end[0],
            y4 = end[1]
        recursive(x1, y1, x2, y2, x3, y3, x4, y4, points, distanceTolerance, 0)
        points.push(clone(end))
    }

    function recursive(x1, y1, x2, y2, x3, y3, x4, y4, points, distanceTolerance, level) {
        if(level > RECURSION_LIMIT) 
            return

        var pi = Math.PI

        // Calculate all the mid-points of the line segments
        //----------------------
        var x12   = (x1 + x2) / 2
        var y12   = (y1 + y2) / 2
        var x23   = (x2 + x3) / 2
        var y23   = (y2 + y3) / 2
        var x34   = (x3 + x4) / 2
        var y34   = (y3 + y4) / 2
        var x123  = (x12 + x23) / 2
        var y123  = (y12 + y23) / 2
        var x234  = (x23 + x34) / 2
        var y234  = (y23 + y34) / 2
        var x1234 = (x123 + x234) / 2
        var y1234 = (y123 + y234) / 2

        if(level > 0) { // Enforce subdivision first time
            // Try to approximate the full cubic curve by a single straight line
            //------------------
            var dx = x4-x1
            var dy = y4-y1

            var d2 = Math.abs((x2 - x4) * dy - (y2 - y4) * dx)
            var d3 = Math.abs((x3 - x4) * dy - (y3 - y4) * dx)

            var da1, da2

            if(d2 > FLT_EPSILON && d3 > FLT_EPSILON) {
                // Regular care
                //-----------------
                if((d2 + d3)*(d2 + d3) <= distanceTolerance * (dx*dx + dy*dy)) {
                    // If the curvature doesn't exceed the distanceTolerance value
                    // we tend to finish subdivisions.
                    //----------------------
                    if(m_angle_tolerance < curve_angle_tolerance_epsilon) {
                        points.push(vec2(x1234, y1234))
                        return
                    }

                    // Angle & Cusp Condition
                    //----------------------
                    var a23 = Math.atan2(y3 - y2, x3 - x2)
                    da1 = Math.abs(a23 - Math.atan2(y2 - y1, x2 - x1))
                    da2 = Math.abs(Math.atan2(y4 - y3, x4 - x3) - a23)
                    if(da1 >= pi) da1 = 2*pi - da1
                    if(da2 >= pi) da2 = 2*pi - da2

                    if(da1 + da2 < m_angle_tolerance) {
                        // Finally we can stop the recursion
                        //----------------------
                        points.push(vec2(x1234, y1234))
                        return
                    }

                    if(m_cusp_limit !== 0.0) {
                        if(da1 > m_cusp_limit) {
                            points.push(vec2(x2, y2))
                            return
                        }

                        if(da2 > m_cusp_limit) {
                            points.push(vec2(x3, y3))
                            return
                        }
                    }
                }
            }
            else {
                if(d2 > FLT_EPSILON) {
                    // p1,p3,p4 are collinear, p2 is considerable
                    //----------------------
                    if(d2 * d2 <= distanceTolerance * (dx*dx + dy*dy)) {
                        if(m_angle_tolerance < curve_angle_tolerance_epsilon) {
                            points.push(vec2(x1234, y1234))
                            return
                        }

                        // Angle Condition
                        //----------------------
                        da1 = Math.abs(Math.atan2(y3 - y2, x3 - x2) - Math.atan2(y2 - y1, x2 - x1))
                        if(da1 >= pi) da1 = 2*pi - da1

                        if(da1 < m_angle_tolerance) {
                            points.push(vec2(x2, y2))
                            points.push(vec2(x3, y3))
                            return
                        }

                        if(m_cusp_limit !== 0.0) {
                            if(da1 > m_cusp_limit) {
                                points.push(vec2(x2, y2))
                                return
                            }
                        }
                    }
                }
                else if(d3 > FLT_EPSILON) {
                    // p1,p2,p4 are collinear, p3 is considerable
                    //----------------------
                    if(d3 * d3 <= distanceTolerance * (dx*dx + dy*dy)) {
                        if(m_angle_tolerance < curve_angle_tolerance_epsilon) {
                            points.push(vec2(x1234, y1234))
                            return
                        }

                        // Angle Condition
                        //----------------------
                        da1 = Math.abs(Math.atan2(y4 - y3, x4 - x3) - Math.atan2(y3 - y2, x3 - x2))
                        if(da1 >= pi) da1 = 2*pi - da1

                        if(da1 < m_angle_tolerance) {
                            points.push(vec2(x2, y2))
                            points.push(vec2(x3, y3))
                            return
                        }

                        if(m_cusp_limit !== 0.0) {
                            if(da1 > m_cusp_limit)
                            {
                                points.push(vec2(x3, y3))
                                return
                            }
                        }
                    }
                }
                else {
                    // Collinear case
                    //-----------------
                    dx = x1234 - (x1 + x4) / 2
                    dy = y1234 - (y1 + y4) / 2
                    if(dx*dx + dy*dy <= distanceTolerance) {
                        points.push(vec2(x1234, y1234))
                        return
                    }
                }
            }
        }

        // Continue subdivision
        //----------------------
        recursive(x1, y1, x12, y12, x123, y123, x1234, y1234, points, distanceTolerance, level + 1) 
        recursive(x1234, y1234, x234, y234, x34, y34, x4, y4, points, distanceTolerance, level + 1) 
    }
}


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);



function clone(arr) {
  return [arr[0], arr[1]];
}

function create() {
  return [0, 0];
}

const copy = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec2"].copy;
const scaleAndAdd = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec2"].scaleAndAdd;
const dot = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec2"].dot;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var simplifyRadialDist = __webpack_require__(52)
var simplifyDouglasPeucker = __webpack_require__(53)

//simplifies using both algorithms
module.exports = function simplify(points, tolerance) {
    points = simplifyRadialDist(points, tolerance);
    points = simplifyDouglasPeucker(points, tolerance);
    return points;
}

module.exports.radialDistance = simplifyRadialDist;
module.exports.douglasPeucker = simplifyDouglasPeucker;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

function getSqDist(p1, p2) {
    var dx = p1[0] - p2[0],
        dy = p1[1] - p2[1];

    return dx * dx + dy * dy;
}

// basic distance-based simplification
module.exports = function simplifyRadialDist(points, tolerance) {
    if (points.length<=1)
        return points;
    tolerance = typeof tolerance === 'number' ? tolerance : 1;
    var sqTolerance = tolerance * tolerance;
    
    var prevPoint = points[0],
        newPoints = [prevPoint],
        point;

    for (var i = 1, len = points.length; i < len; i++) {
        point = points[i];

        if (getSqDist(point, prevPoint) > sqTolerance) {
            newPoints.push(point);
            prevPoint = point;
        }
    }

    if (prevPoint !== point) newPoints.push(point);

    return newPoints;
}

/***/ }),
/* 53 */
/***/ (function(module, exports) {

// square distance from a point to a segment
function getSqSegDist(p, p1, p2) {
    var x = p1[0],
        y = p1[1],
        dx = p2[0] - x,
        dy = p2[1] - y;

    if (dx !== 0 || dy !== 0) {

        var t = ((p[0] - x) * dx + (p[1] - y) * dy) / (dx * dx + dy * dy);

        if (t > 1) {
            x = p2[0];
            y = p2[1];

        } else if (t > 0) {
            x += dx * t;
            y += dy * t;
        }
    }

    dx = p[0] - x;
    dy = p[1] - y;

    return dx * dx + dy * dy;
}

function simplifyDPStep(points, first, last, sqTolerance, simplified) {
    var maxSqDist = sqTolerance,
        index;

    for (var i = first + 1; i < last; i++) {
        var sqDist = getSqSegDist(points[i], points[first], points[last]);

        if (sqDist > maxSqDist) {
            index = i;
            maxSqDist = sqDist;
        }
    }

    if (maxSqDist > sqTolerance) {
        if (index - first > 1) simplifyDPStep(points, first, index, sqTolerance, simplified);
        simplified.push(points[index]);
        if (last - index > 1) simplifyDPStep(points, index, last, sqTolerance, simplified);
    }
}

// simplification using Ramer-Douglas-Peucker algorithm
module.exports = function simplifyDouglasPeucker(points, tolerance) {
    if (points.length<=1)
        return points;
    tolerance = typeof tolerance === 'number' ? tolerance : 1;
    var sqTolerance = tolerance * tolerance;
    
    var last = points.length - 1;

    var simplified = [points[0]];
    simplifyDPStep(points, 0, last, sqTolerance, simplified);
    simplified.push(points[last]);

    return simplified;
}


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalLength", function() { return getTotalLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPointAtLength", function() { return getPointAtLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDashContours", function() { return getDashContours; });
/* harmony import */ var _positions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);


function getTotalLength(contours) {
  if (contours.totalLength != null) return contours.totalLength;
  let length = 0;
  contours.forEach(points => {
    let s = points[0];

    for (let i = 1; i < points.length; i++) {
      const p = points[i];
      length += Object(_positions__WEBPACK_IMPORTED_MODULE_0__["distance"])(s, p);
      s = p;
    }
  });
  contours.totalLength = length;
  return length;
}

function splitContours(contours, length, rest = true) {
  length = Number(length);

  if (!Number.isFinite(length)) {
    throw new TypeError('Failed to execute \'getPointAtLength\' on figure: The provided float value is non-finite.');
  }

  if (length <= 0) {
    throw new TypeError('Length must > 0');
  }

  const contoursLength = getTotalLength(contours);

  if (length >= contoursLength) {
    const points = contours[contours.length - 1];
    const p0 = points[points.length - 2];
    const p1 = points[points.length - 1];
    const angle = Math.atan2(p1[1] - p0[1], p1[0] - p0[0]);
    return {
      current: contours.map(c => [...c]),
      point: {
        x: p1[0],
        y: p1[1],
        angle
      }
    };
  }

  const current = [];

  for (let i = 0; i < contours.length; i++) {
    current[i] = [];
    const points = contours[i];
    let p0 = points[0];

    for (let j = 1; j < points.length; j++) {
      const p1 = points[j];
      const d = Object(_positions__WEBPACK_IMPORTED_MODULE_0__["distance"])(p0, p1);

      if (length < d) {
        const p = length / d;
        const angle = Math.atan2(p1[1] - p0[1], p1[0] - p0[0]);
        const point = {
          x: p0[0] * (1 - p) + p1[0] * p,
          y: p0[1] * (1 - p) + p1[1] * p,
          angle
        };
        current[i].push(p0);
        if (length > 0) current[i].push([point.x, point.y]);

        if (!rest) {
          return {
            current,
            point
          };
        }

        const restContours = [];
        const o = i;

        for (; i < contours.length; i++) {
          restContours[i - o] = [];
          if (i === o) restContours[0].push([point.x, point.y]);

          for (; j < points.length; j++) {
            restContours[i - o].push(points[j]);
          }

          j = 0;
        }

        return {
          current,
          point,
          rest: restContours
        };
      }

      length -= d;
      current[i].push(p0);
      p0 = p1;
    }
  }
}

function getPointAtLength(contours, length) {
  length = Number(length);

  if (!Number.isFinite(length)) {
    throw new TypeError('Failed to execute \'getPointAtLength\' on figure: The provided float value is non-finite.');
  }

  if (contours.length <= 0) return {
    x: 0,
    y: 0,
    angle: 0
  };

  if (length <= 0) {
    const p0 = contours[0][0];
    const p1 = contours[0][1];
    const angle = Math.atan2(p1[1] - p0[1], p1[0] - p0[0]);
    return {
      x: p0[0],
      y: p0[1],
      angle
    };
  }

  return splitContours(contours, length, false).point;
}
function getDashContours(contours, lineDash, lineDashOffset) {
  let idx = 0;
  let dash = lineDash[0];
  let rest = contours;
  const splitedContours = [];
  const lineDashLen = lineDash.length;

  if (lineDashOffset > 0) {
    do {
      lineDashOffset -= lineDash[idx % lineDashLen];
      idx++;
    } while (lineDashOffset > 0);

    if (lineDashOffset < 0) {
      dash = -lineDashOffset;
      idx--;
    }
  } else if (lineDashOffset < 0) {
    idx = -1;

    do {
      lineDashOffset += lineDash[idx % lineDashLen + lineDashLen];
      idx--;
    } while (lineDashOffset < 0);

    if (lineDashOffset > 0) {
      idx++;
      dash = lineDash[idx % lineDashLen + lineDashLen] - lineDashOffset;
    }
  }

  do {
    const splited = splitContours(rest, dash);
    rest = splited.rest;
    if (++idx % 2) splitedContours.push(...splited.current);
    let dashIndex = idx % lineDashLen;
    if (dashIndex < 0) dashIndex += lineDashLen;
    dash = lineDash[dashIndex];
  } while (rest);

  return splitedContours;
}

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "denormalize", function() { return denormalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

function normalize([x, y, z], w, h, d) {
  x = x * 2 / w - 1;
  y = 1 - y * 2 / h;

  if (Number.isFinite(d)) {
    z = z * 2 / d - 1;
    return [x, y, z];
  }

  return [x, y];
}
function denormalize([x, y, z], w, h, d) {
  x = (x + 1) * 0.5 * w;
  y = (1 - y) * 0.5 * h;

  if (Number.isFinite(d)) {
    z = (z + 1) * 0.5 * d;
    return [x, y, z];
  }

  return [x, y];
}
function distance([x1, y1, z1 = 0], [x2, y2, z2 = 0]) {
  return Math.hypot(x2 - x1, y2 - y1, z2 - z1);
}

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPoint", function() { return getPoint; });
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

// 根据椭圆旋转角度求椭圆上的点
const PI2 = Math.PI * 2;
function getPoint(x0, y0, a, b, theta) {
  theta %= PI2;
  if (theta < 0) theta += PI2;
  const k = Math.tan(theta);

  if (Math.abs(k) < 1e5) {
    // y - y0 = k (x - x0)
    // y = k x + (y0 - k x0)
    // (x - x0) ** 2 / a ** 2 + (y - y0) ** 2 / b ** 2 = 1
    const c = y0 - k * x0;
    const t = 1 / a ** 2 + k ** 2 / b ** 2;
    let d = -1;
    if (theta <= Math.PI / 2 || theta > 3 * Math.PI / 2) d = 1;
    const x = d * Math.sqrt(1 / t) + x0;
    const y = k * x + c;
    return [x, y];
  }

  if (theta < Math.PI) {
    return [x0, y0 + b];
  }

  return [x0, y0 - b];
}

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mesh2D; });
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var bound_points__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);
/* harmony import */ var bound_points__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bound_points__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _extrude_polyline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58);
/* harmony import */ var _utils_flatten_meshes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony import */ var _utils_vector_to_rgba__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);
/* harmony import */ var _utils_positions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55);
/* harmony import */ var _utils_color_matrix__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30);
/* harmony import */ var _utils_transform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(66);
/* harmony import */ var _utils_contours__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54);
/* harmony import */ var _triangulate_contours__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67);
/* harmony import */ var _triangulate_contours__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_triangulate_contours__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _svg_path_contours__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47);
/* harmony import */ var _svg_path_contours__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_svg_path_contours__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_parse_color__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(31);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const _mesh = Symbol('mesh');

const _contours = Symbol('contours');

const _stroke = Symbol('stroke');

const _fill = Symbol('fill');

const _bound = Symbol('bound');

const _strokeColor = Symbol('strokeColor');

const _fillColor = Symbol('fillColor');

const _transform = Symbol('transform');

const _uniforms = Symbol('uniforms');

const _texOptions = Symbol('texOptions');

const _blend = Symbol('blend');

const _applyTexture = Symbol('applyTexture');

const _applyTransform = Symbol('applyTransform');

const _applyGradientTransform = Symbol('applyGradientTransform');

const _gradient = Symbol('gradient');

const _filter = Symbol('filter');

const _opacity = Symbol('opacity');

function normalizePoints(points, bound) {
  const [w, h] = bound[1];

  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    point[0] = 2 * point[0] / w - 1;
    point[1] = 2 * point[1] / h - 1;
  }
}

function transformPoint(p, m, w, h, flipY) {
  const [x, y] = Object(_utils_positions__WEBPACK_IMPORTED_MODULE_5__["denormalize"])(p, w, h);
  p[0] = x * m[0] + y * m[2] + m[4];
  p[1] = x * m[1] + y * m[3] + m[5];
  if (flipY) p[1] = h - p[1];
  return p;
}

function getTexCoord([x, y], [ox, oy, w, h], {
  scale,
  repeat
}) {
  if (!scale) {
    x /= w;
    y = 1 - (1 - y) / h;
    x -= ox;
    y += oy;
  }

  return [x, y, 0];
}

function accurate(path, scale, simplify) {
  const contours = _svg_path_contours__WEBPACK_IMPORTED_MODULE_10___default()(path, scale, simplify);
  contours.path = path;
  contours.simplify = simplify;
  contours.scale = scale;
  return contours;
}

class Mesh2D {
  constructor(figure, {
    width,
    height
  } = {
    width: 300,
    height: 150
  }) {
    this[_stroke] = null;
    this[_fill] = null;
    this[_bound] = [[0, 0], [width, height]];
    this[_transform] = [1, 0, 0, 1, 0, 0];
    this[_opacity] = 1.0;
    this[_uniforms] = {};
    this[_filter] = [];
    this[_blend] = null;
    this[_texOptions] = {};
    this.contours = figure.contours;
  }

  get width() {
    return this[_bound][1][0];
  }

  get height() {
    return this[_bound][1][1];
  }

  get contours() {
    return this[_contours];
  }

  set contours(contours) {
    this[_mesh] = null;
    this[_contours] = contours;
    const scale = contours.scale;
    const acc = this.transformScale / scale;

    if (acc > 1.5 || acc < 0.67) {
      this.accurate(this.transformScale);
    }
  }

  getOpacity() {
    return this[_opacity];
  }

  setOpacity(value) {
    if (value < 0 || value > 1.0) throw new TypeError('Invalid opacity value.');

    if (this[_mesh]) {
      this[_mesh].positions.forEach(p => {
        p[2] = 1 / p[2] > 0 ? value : -value;
      });
    }

    this[_opacity] = value;
  }

  getPointAtLength(length) {
    return Object(_utils_contours__WEBPACK_IMPORTED_MODULE_8__["getPointAtLength"])(this[_contours], length);
  }

  getTotalLength() {
    return Object(_utils_contours__WEBPACK_IMPORTED_MODULE_8__["getTotalLength"])(this[_contours]);
  }

  get blend() {
    return this[_blend] == null ? 'auto' : this[_blend];
  }

  set blend(blend) {
    this[_blend] = blend;
    if (this[_mesh]) this[_mesh].enableBlend = this.enableBlend;
  }

  get boundingBox() {
    if (this[_mesh] && this[_mesh].boundingBox) return this[_mesh].boundingBox;
    const meshData = this.meshData;

    if (meshData) {
      let {
        positions
      } = meshData;
      const m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].invert(Array.of(0, 0, 0, 0, 0, 0), this[_transform]);
      const [w, h] = this[_bound][1];
      positions = positions.map(([x, y]) => {
        return transformPoint([x, y], m, w, h, false);
      });
      if (positions.length) meshData.boundingBox = bound_points__WEBPACK_IMPORTED_MODULE_1___default()(positions);else return [[0, 0], [0, 0]];
      return meshData.boundingBox;
    }

    return [[0, 0], [0, 0]];
  }

  get boundingCenter() {
    const bound = this.boundingBox;

    if (bound) {
      return [0.5 * (bound[0][0] + bound[1][0]), 0.5 * (bound[0][1] + bound[1][1])];
    }

    return [0, 0];
  }

  get lineWidth() {
    if (this[_stroke]) {
      return this[_stroke].thickness;
    }

    return 0;
  }

  get lineCap() {
    if (this[_stroke]) {
      return this[_stroke].cap;
    }

    return '';
  }

  get lineJoin() {
    if (this[_stroke]) {
      return this[_stroke].join;
    }

    return '';
  }

  get miterLimit() {
    if (this[_stroke]) {
      return this[_stroke].miterLimit;
    }

    return 0;
  }

  get strokeStyle() {
    if (this[_strokeColor] && this[_strokeColor][3] !== 0) {
      return Object(_utils_vector_to_rgba__WEBPACK_IMPORTED_MODULE_4__["default"])(this[_strokeColor]);
    }

    return '';
  }

  get lineDash() {
    if (this[_stroke]) {
      return this[_stroke].lineDash;
    }

    return null;
  }

  get lineDashOffset() {
    if (this[_stroke]) {
      return this[_stroke].lineDashOffset;
    }

    return 0;
  }

  get fillStyle() {
    if (this[_fillColor] && this[_fillColor][3] !== 0) {
      return Object(_utils_vector_to_rgba__WEBPACK_IMPORTED_MODULE_4__["default"])(this[_fillColor]);
    }

    return '';
  }

  get gradient() {
    return this[_gradient];
  }

  get texture() {
    if (this[_uniforms].u_texSampler) {
      return {
        image: this[_uniforms].u_texSampler._img,
        options: this[_texOptions]
      };
    }

    return null;
  }

  get enableBlend() {
    if (this[_blend] === true || this[_blend] === false) return this[_blend];
    return this[_opacity] < 1.0 || this[_strokeColor] != null && this[_strokeColor][3] < 1.0 || this[_fillColor] != null && this[_fillColor][3] < 1.0 || this[_uniforms].u_colorMatrix != null && this[_uniforms].u_colorMatrix[18] < 1.0 || this[_uniforms].u_radialGradientVector != null || this.beforeRender || this.afterRender;
  }

  get filterCanvas() {
    return /blur|drop-shadow|url/.test(this.filter);
  }

  get filter() {
    return this[_filter].join(' ');
  }

  get transformMatrix() {
    return this[_transform];
  }

  get transformScale() {
    const m = this[_transform];
    return Math.max(Math.hypot(m[0], m[1]), Math.hypot(m[2], m[3]));
  }

  get uniforms() {
    return this[_uniforms];
  } // {stroke, fill}


  get meshData() {
    if (this[_mesh]) {
      return this[_mesh];
    }

    if (!this[_fill] && !this[_stroke]) {
      this.setFill();
    }

    const contours = this[_contours];
    const meshes = {};

    if (contours && contours.length) {
      if (this[_fill]) {
        try {
          const mesh = _triangulate_contours__WEBPACK_IMPORTED_MODULE_9___default()(contours);
          mesh.positions = mesh.positions.map(p => {
            p[1] = this[_bound][1][1] - p[1];
            p.push(this[_opacity]);
            return p;
          });
          mesh.attributes = {
            a_color: Array.from({
              length: mesh.positions.length
            }).map(() => this[_fillColor].map(c => Math.round(255 * c))) // a_sourceRect: Array.from({length: mesh.positions.length}).map(() => [0, 0, 0, 0]),

          };
          meshes.fill = mesh;
        } catch (ex) {// ignore this[_fill]
        }
      }

      if (this[_stroke]) {
        const lineDash = this[_stroke].lineDash;
        let strokeContours = contours;

        if (lineDash) {
          const lineDashOffset = this[_stroke].lineDashOffset;
          strokeContours = Object(_utils_contours__WEBPACK_IMPORTED_MODULE_8__["getDashContours"])(contours, lineDash, lineDashOffset);
        }

        const _meshes = strokeContours.map((lines, i) => {
          const closed = lines.length > 1 && gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec2"].equals(lines[0], lines[lines.length - 1]);
          return this[_stroke].build(lines, closed);
        });

        _meshes.forEach(mesh => {
          mesh.positions = mesh.positions.map(p => {
            p[1] = this[_bound][1][1] - p[1];
            p.push(-this[_opacity]);
            return p;
          });
          mesh.attributes = {
            a_color: Array.from({
              length: mesh.positions.length
            }).map(() => this[_strokeColor].map(c => Math.round(255 * c)))
          };
        });

        meshes.stroke = Object(_utils_flatten_meshes__WEBPACK_IMPORTED_MODULE_3__["default"])(_meshes);
      }
    }

    const mesh = Object(_utils_flatten_meshes__WEBPACK_IMPORTED_MODULE_3__["default"])([meshes.fill, meshes.stroke]);
    mesh.fillPointCount = meshes.fill ? meshes.fill.positions.length : 0;
    mesh.enableBlend = this.enableBlend;
    normalizePoints(mesh.positions, this[_bound]);

    if (!this[_uniforms].u_texSampler) {// mesh.textureCoord = mesh.positions.map(() => [0, 0]);
    } else {
      this[_applyTexture](mesh, this[_texOptions], false);
    }

    mesh.uniforms = this[_uniforms]; // if(!mesh.uniforms.u_filterFlag) mesh.uniforms.u_filterFlag = 0;
    // if(!mesh.uniforms.u_radialGradientVector) mesh.uniforms.u_radialGradientVector = [0, 0, 0, 0, 0, 0];

    this[_mesh] = mesh;
    const transform = this[_transform];

    if (!Object(_utils_transform__WEBPACK_IMPORTED_MODULE_7__["isUnitTransform"])(transform)) {
      this[_applyTransform](mesh, transform);
    }

    return this[_mesh];
  }

  [_applyTransform](mesh, m) {
    const {
      positions
    } = mesh;
    const [w, h] = this[_bound][1];

    for (let i = 0; i < positions.length; i++) {
      const point = positions[i];
      transformPoint(point, m, w, h, true);
    }

    normalizePoints(positions, this[_bound]);
  }

  [_applyGradientTransform](m) {
    const h = this[_bound][1][1];
    const vector = this[_uniforms].u_radialGradientVector;

    if (vector) {
      let [x1, y1,, x2, y2] = vector;
      y1 = h - y1;
      y2 = h - y2;
      vector[0] = x1 * m[0] + y1 * m[2] + m[4];
      vector[1] = h - (x1 * m[1] + y1 * m[3] + m[5]);
      vector[3] = x2 * m[0] + y2 * m[2] + m[4];
      vector[4] = h - (x2 * m[1] + y2 * m[3] + m[5]);
      this[_uniforms].u_radialGradientVector = vector;
    }
  }

  [_applyTexture](mesh, options, transformed) {
    function compareRect(r1, r2) {
      if (r1 == null && r2 == null) return true;
      if (r1 == null || r2 == null) return false;
      return r1[0] === r2[0] && r1[1] === r2[1] && r1[2] === r2[2] && r1[3] === r2[3];
    }

    const texture = this[_uniforms].u_texSampler;
    if (!texture) return;
    const {
      width: imgWidth,
      height: imgHeight
    } = texture._img;
    const transform = this[_transform];
    const srcRect = options.srcRect;
    let rect = options.rect || [0, 0];

    if (options.rotated) {
      rect = [-rect[1], rect[0], rect[3], rect[2]];
    }

    if (rect[2] == null) rect[2] = srcRect ? srcRect[2] : imgWidth;
    if (rect[3] == null) rect[3] = srcRect ? srcRect[3] : imgHeight;
    const [w, h] = this[_bound][1];

    if (options.hidden) {
      mesh.textureCoord = mesh.positions.map(() => [-1, -1, -1]);
    } else if (!mesh.textureCoord || !compareRect(this[_texOptions].rect, options.rect) || this[_texOptions].hidden !== options.hidden || this[_texOptions].rotated !== options.rotated) {
      if (transformed && !Object(_utils_transform__WEBPACK_IMPORTED_MODULE_7__["isUnitTransform"])(transform)) {
        const m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].invert(Array.of(0, 0, 0, 0, 0, 0), transform);
        let m2 = null;

        if (options.rotated) {
          m2 = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].rotate(Array.of(0, 0, 0, 0, 0, 0), gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].fromValues(1, 0, 0, 1, 0, 0), 0.5 * Math.PI);
          m2 = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].translate(Array.of(0, 0, 0, 0, 0, 0), m2, [0, -rect[2]]);
        }

        mesh.textureCoord = mesh.positions.map(([x, y, z]) => {
          if (z > 0) {
            [x, y] = transformPoint([x, y], m, w, h, true);
            [x, y] = [x / w, y / h];

            if (options.rotated) {
              [x, y] = [2 * x - 1, 2 * y - 1];
              [x, y] = transformPoint([x, y], m2, w, h, true);
              [x, y] = [x / w, y / h];
            }

            const texCoord = getTexCoord([x, y], [rect[0] / rect[2], rect[1] / rect[3], rect[2] / w, rect[3] / h], options);
            if (options.repeat) texCoord[2] = 1;
            return texCoord;
          }

          return [-1, -1, -1];
        });
      } else {
        let m = null;

        if (options.rotated) {
          m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].rotate(Array.of(0, 0, 0, 0, 0, 0), gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].fromValues(1, 0, 0, 1, 0, 0), 0.5 * Math.PI);
          m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].translate(Array.of(0, 0, 0, 0, 0, 0), m, [0, -rect[2]]);
        }

        mesh.textureCoord = mesh.positions.map(([x, y, z]) => {
          if (z > 0) {
            // fillTag
            if (options.rotated) {
              [x, y] = transformPoint([x, y], m, w, h, true);
              [x, y] = [x / w, y / h];
            } else {
              [x, y] = [0.5 * (x + 1), 0.5 * (y + 1)];
            }

            const texCoord = getTexCoord([x, y], [rect[0] / rect[2], rect[1] / rect[3], rect[2] / w, rect[3] / h], options);
            if (options.repeat) texCoord[2] = 1;
            return texCoord;
          }

          return [-1, -1, -1];
        });
      }
    }

    if (!mesh.attributes.a_sourceRect || !compareRect(this[_texOptions].srcRect, options.srcRect)) {
      if (srcRect) {
        const sRect = [srcRect[0] / imgWidth, srcRect[1] / imgHeight, srcRect[2] / imgWidth, srcRect[3] / imgHeight];
        mesh.attributes.a_sourceRect = mesh.positions.map(() => [...sRect]);
      } else {
        mesh.attributes.a_sourceRect = mesh.positions.map(() => [0, 0, 0, 0]);
      }
    }
  }

  accurate(scale) {
    if (!this.contours) return;
    const path = this.contours.path;

    if (path) {
      const simplify = this.contours.simplify;
      const contours = accurate(this.contours.path, scale, simplify);
      this[_mesh] = null;
      this[_contours] = contours;
    }
  }

  setResolution({
    width,
    height
  }) {
    if (this[_bound][1][0] !== width || this[_bound][1][1] !== height) {
      this[_mesh] = null;
      this[_bound][1][0] = width;
      this[_bound][1][1] = height;

      if (this[_gradient]) {
        if (this[_gradient].fill) {
          this.setGradient(_objectSpread({}, this[_gradient].fill, {
            type: 'fill'
          }));
        } else if (this[_gradient].stroke) {
          this.setGradient(_objectSpread({}, this[_gradient].stroke, {
            type: 'stroke'
          }));
        }
      }
    }
  }

  canIgnore() {
    const noStroke = this[_stroke] == null || this[_stroke].thickness === 0 || this[_strokeColor][3] === 0;
    const noFill = this[_fill] == null || this[_fillColor][3] === 0;
    const noGradient = this[_uniforms].u_radialGradientVector == null;
    const noTexture = this[_uniforms].u_texSampler == null;
    return this[_opacity] === 0 || noStroke && noFill && noGradient && noTexture && !this.beforeRender && !this.afterRender;
  } // join: 'miter' or 'bevel'
  // cap: 'butt' or 'square'
  // lineDash: null
  // lineDashOffset: 0


  setStroke({
    thickness = 1,
    cap = 'butt',
    join = 'miter',
    miterLimit = 10,
    color = [0, 0, 0, 0],
    lineDash = null,
    lineDashOffset = 0
  } = {}) {
    this[_mesh] = null;
    this[_stroke] = Object(_extrude_polyline__WEBPACK_IMPORTED_MODULE_2__["default"])({
      thickness,
      cap,
      join,
      miterLimit
    });
    if (typeof color === 'string') color = Object(_utils_parse_color__WEBPACK_IMPORTED_MODULE_11__["default"])(color);
    this[_strokeColor] = color;
    this[_stroke].lineDash = lineDash;
    this[_stroke].lineDashOffset = lineDashOffset;
    return this;
  }

  setFill({
    delaunay = true,
    clean = true,
    randomization = 0,
    color = [0, 0, 0, 0]
  } = {}) {
    this[_mesh] = null;
    this[_fill] = {
      delaunay,
      clean,
      randomization
    };
    if (typeof color === 'string') color = Object(_utils_parse_color__WEBPACK_IMPORTED_MODULE_11__["default"])(color);
    this[_fillColor] = color;
    return this;
  }
  /**
    options: {
      scale: false,
      repeat: false,
      rotated: false,
      rect: [10, 10],
      srcRect: [...],
      hidden: false,
    }
   */


  setTexture(texture, options = {}) {
    if (texture && texture.image) {
      const {
        image,
        rect
      } = texture;
      texture = image;

      if (options.rect) {
        for (let i = 0; i < options.rect.length; i++) {
          rect[i] = options.rect[i];
        }
      }

      options.rect = rect;
    }

    if (!this[_fill]) {
      this.setFill();
    }

    this.setUniforms({
      u_texSampler: texture
    });

    if (this[_mesh]) {
      this[_applyTexture](this[_mesh], options, true);
    }

    this[_texOptions] = options;
    return this;
  }

  setCircularGradient({
    vector,
    colors: gradientColors,
    type = 'fill'
  } = {}) {
    if (vector.length !== 3) throw new TypeError('Invalid linearGradient.');
    this.setGradient({
      vector,
      colors: gradientColors,
      type
    });
  }

  setLinearGradient({
    vector,
    colors: gradientColors,
    type = 'fill'
  } = {}) {
    if (vector.length !== 4) throw new TypeError('Invalid linearGradient.');
    this.setGradient({
      vector,
      colors: gradientColors,
      type
    });
  }

  setRadialGradient({
    vector,
    colors: gradientColors,
    type = 'fill'
  } = {}) {
    if (vector.length !== 6) throw new TypeError('Invalid radialGradient.');
    this.setGradient({
      vector,
      colors: gradientColors,
      type
    });
  }
  /**
    vector: [x0, y0, r0, x1, y1, r1],
    colors: [{offset:0, color}, {offset:1, color}, ...],
   */


  setGradient({
    vector,
    colors: gradientColors,
    type = 'fill'
  } = {}) {
    gradientColors = gradientColors.map(({
      offset,
      color
    }) => {
      if (typeof color === 'string') color = Object(_utils_parse_color__WEBPACK_IMPORTED_MODULE_11__["default"])(color);
      return {
        offset,
        color
      };
    });
    this[_gradient] = this[_gradient] || {};
    this[_gradient][type] = {
      vector,
      colors: gradientColors
    };
    gradientColors.sort((a, b) => {
      return a.offset - b.offset;
    });
    const colorSteps = [];
    gradientColors.forEach(({
      offset,
      color
    }) => {
      colorSteps.push(offset, ...color);
    });

    let _vector;

    if (vector.length === 4) {
      // linear gradient;
      _vector = [vector[0], vector[1], 0, vector[2], vector[3], 0];
    } else {
      _vector = [...vector];
    }

    const [, h] = this[_bound][1];
    _vector[1] = h - _vector[1];
    _vector[4] = h - _vector[4];
    if (colorSteps.length < 40) colorSteps.push(-1);
    if (colorSteps.length > 40) throw new Error('Too many colors, should be less than 8 colors');
    this[_uniforms].u_radialGradientVector = _vector;
    this[_uniforms].u_colorSteps = colorSteps;
    if (type === 'fill') this[_uniforms].u_gradientType = 1;else this[_uniforms].u_gradientType = 0;

    this[_applyGradientTransform](this[_transform]);

    return this;
  }

  setUniforms(uniforms = {}) {
    Object.assign(this[_uniforms], uniforms);
    return this;
  }

  setTransform(...m) {
    const transform = this[_transform];

    if (!gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].equals(m, transform)) {
      this[_transform] = m;
      const acc = this.transformScale / this.contours.scale;

      if (acc > 1.5 || acc < 0.67) {
        this.accurate(this.transformScale);
      }

      if (this[_mesh] || this[_uniforms].u_radialGradientVector) {
        m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].multiply(Array.of(0, 0, 0, 0, 0, 0), m, gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].invert(Array.of(0, 0, 0, 0, 0, 0), transform));
      }

      if (this[_mesh]) {
        this[_applyTransform](this[_mesh], m);
      }

      if (this[_uniforms].u_radialGradientVector) {
        this[_applyGradientTransform](m);
      }
    }

    return this;
  }

  transform(...m) {
    const transform = this[_transform];
    this[_transform] = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].multiply(Array.of(0, 0, 0, 0, 0, 0), m, transform);
    const acc = this.transformScale / this.contours.scale;

    if (acc > 1.5 || acc < 0.67) {
      this.accurate(this.transformScale);
    }

    if (this[_mesh]) this[_applyTransform](this[_mesh], m);
    if (this[_uniforms].u_radialGradientVector) this[_applyGradientTransform](m);
    return this;
  }

  translate(x, y) {
    let m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].create();
    m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].translate(Array.of(0, 0, 0, 0, 0, 0), m, [x, y]);
    return this.transform(...m);
  }

  rotate(rad, [ox, oy] = [0, 0]) {
    let m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].create();
    m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].translate(Array.of(0, 0, 0, 0, 0, 0), m, [ox, oy]);
    m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].rotate(Array.of(0, 0, 0, 0, 0, 0), m, rad);
    m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].translate(Array.of(0, 0, 0, 0, 0, 0), m, [-ox, -oy]);
    return this.transform(...m);
  }

  scale(x, y = x, [ox, oy] = [0, 0]) {
    let m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].create();
    m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].translate(Array.of(0, 0, 0, 0, 0, 0), m, [ox, oy]);
    m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].scale(Array.of(0, 0, 0, 0, 0, 0), m, [x, y]);
    m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].translate(Array.of(0, 0, 0, 0, 0, 0), m, [-ox, -oy]);
    return this.transform(...m);
  }

  skew(x, y = x, [ox, oy] = [0, 0]) {
    let m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].create();
    m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].translate(Array.of(0, 0, 0, 0, 0, 0), m, [ox, oy]);
    m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].multiply(Array.of(0, 0, 0, 0, 0, 0), m, gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].fromValues(1, Math.tan(y), Math.tan(x), 1, 0, 0));
    m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].translate(Array.of(0, 0, 0, 0, 0, 0), m, [-ox, -oy]);
    return this.transform(...m);
  }

  clearFilter() {
    this.setColorTransform(null);
    this[_filter].length = 0;
    return this;
  }

  setColorTransform(...m) {
    if (m[0] === null) {
      this.setUniforms({
        u_filterFlag: 0,
        u_colorMatrix: 0
      });
    } else {
      this.setUniforms({
        u_filterFlag: 1,
        u_colorMatrix: m
      });
    }

    return this;
  } // apply linear color transform


  transformColor(...m) {
    let transform = this.uniforms.u_colorMatrix;

    if (transform) {
      transform = Object(_utils_color_matrix__WEBPACK_IMPORTED_MODULE_6__["multiply"])(transform, m);
    } else {
      transform = m;
    }

    this.setColorTransform(...transform);
    return this;
  }

  blur(length) {
    this[_filter].push(`blur(${length}px)`);

    return this;
  }

  brightness(p = 1.0) {
    this[_filter].push(`brightness(${100 * p}%)`);

    return this.transformColor(...Object(_utils_color_matrix__WEBPACK_IMPORTED_MODULE_6__["brightness"])(p));
  }

  contrast(p = 1.0) {
    this[_filter].push(`contrast(${100 * p}%)`);

    return this.transformColor(...Object(_utils_color_matrix__WEBPACK_IMPORTED_MODULE_6__["contrast"])(p));
  }

  dropShadow(offsetX, offsetY, blurRadius = 0, color = [0, 0, 0, 1]) {
    if (Array.isArray(color)) color = Object(_utils_vector_to_rgba__WEBPACK_IMPORTED_MODULE_4__["default"])(color);

    this[_filter].push(`drop-shadow(${offsetX}px ${offsetY}px ${blurRadius}px ${color})`);

    return this;
  }

  grayscale(p = 1.0) {
    this[_filter].push(`grayscale(${100 * p}%)`);

    return this.transformColor(...Object(_utils_color_matrix__WEBPACK_IMPORTED_MODULE_6__["grayscale"])(p));
  } // https://github.com/phoboslab/WebGLImageFilter/blob/master/webgl-image-filter.js#L371


  hueRotate(deg = 0) {
    this[_filter].push(`hue-rotate(${deg}deg)`);

    return this.transformColor(...Object(_utils_color_matrix__WEBPACK_IMPORTED_MODULE_6__["hueRotate"])(deg));
  }

  invert(p = 1.0) {
    this[_filter].push(`invert(${100 * p}%)`);

    return this.transformColor(...Object(_utils_color_matrix__WEBPACK_IMPORTED_MODULE_6__["invert"])(p));
  }

  opacity(p = 1.0) {
    this[_filter].push(`opacity(${100 * p}%)`);

    return this.transformColor(...Object(_utils_color_matrix__WEBPACK_IMPORTED_MODULE_6__["opacity"])(p));
  }

  saturate(p = 1.0) {
    this[_filter].push(`saturate(${100 * p}%)`);

    return this.transformColor(...Object(_utils_color_matrix__WEBPACK_IMPORTED_MODULE_6__["saturate"])(p));
  }

  sepia(p = 1.0) {
    this[_filter].push(`sepia(${100 * p}%)`);

    return this.transformColor(...Object(_utils_color_matrix__WEBPACK_IMPORTED_MODULE_6__["sepia"])(p));
  }

  url(svgFilter) {
    this[_filter].push(`url(${svgFilter})`);

    return this;
  }

  isPointCollision(x, y, type = 'both') {
    const [w, h] = this[_bound][1];
    [x, y] = Object(_utils_positions__WEBPACK_IMPORTED_MODULE_5__["normalize"])([x, y], w, h);
    const meshData = this.meshData;
    const {
      positions,
      cells
    } = meshData;

    function projectionOn([x0, y0], [x1, y1], [x2, y2]) {
      const v2x = x2 - x1;
      const v2y = y2 - y1;
      const p = ((x0 - x1) * v2x + (y0 - y1) * v2y) / (v2x ** 2 + v2y ** 2);
      return p >= 0 && p <= 1;
    }

    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i];
      if (type === 'fill' && cell[0] >= meshData.fillPointCount) break;
      if (type === 'stroke' && cell[0] < meshData.fillPointCount) continue; // eslint-disable-line no-continue

      const [[x1, y1], [x2, y2], [x3, y3]] = cell.map(idx => positions[idx]);
      const s1 = Math.sign((x - x1) * (y2 - y1) - (x2 - x1) * (y - y1));

      if (s1 === 0 && projectionOn([x, y], [x1, y1], [x2, y2])) {
        return true;
      }

      const s2 = Math.sign((x - x2) * (y3 - y2) - (x3 - x2) * (y - y2));

      if (s2 === 0 && projectionOn([x, y], [x2, y2], [x3, y3])) {
        return true;
      }

      const s3 = Math.sign((x - x3) * (y1 - y3) - (x1 - x3) * (y - y3));

      if (s3 === 0 && projectionOn([x, y], [x3, y3], [x1, y1])) {
        return true;
      }

      if (s1 === 1 && s2 === 1 && s3 === 1 || s1 === -1 && s2 === -1 && s3 === -1) {
        return true;
      }
    }

    return false;
  }

  isPointInPath(x, y) {
    return this.isPointCollision(x, y, 'fill');
  }

  isPointInStroke(x, y) {
    return this.isPointCollision(x, y, 'stroke');
  }

}

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var as_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var as_number__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(as_number__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vecutil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);



const tmp = _vecutil__WEBPACK_IMPORTED_MODULE_1__["create"]();
const capEnd = _vecutil__WEBPACK_IMPORTED_MODULE_1__["create"]();
const lineA = _vecutil__WEBPACK_IMPORTED_MODULE_1__["create"]();
const lineB = _vecutil__WEBPACK_IMPORTED_MODULE_1__["create"]();
const tangent = _vecutil__WEBPACK_IMPORTED_MODULE_1__["create"]();
const miter = _vecutil__WEBPACK_IMPORTED_MODULE_1__["create"]();

const util = __webpack_require__(60);

const computeMiter = util.computeMiter,
      normal = util.normal,
      direction = util.direction;
const MAX_MITER_VALUE = 1e20; // infinity * 0 cause NaN, fix #7

function Stroke(opt) {
  if (!(this instanceof Stroke)) return new Stroke(opt);
  opt = opt || {};
  this.miterLimit = as_number__WEBPACK_IMPORTED_MODULE_0___default()(opt.miterLimit, 10);
  this.thickness = as_number__WEBPACK_IMPORTED_MODULE_0___default()(opt.thickness, 1);
  this.join = opt.join || 'miter';
  this.cap = opt.cap || 'butt';
  this._normal = null;
  this._lastFlip = -1;
  this._started = false;
}

Stroke.prototype.mapThickness = function (point, i, points) {
  return this.thickness;
};

Stroke.prototype.build = function (points, closed = false) {
  points = [...points];
  const complex = {
    positions: [],
    cells: []
  };
  if (points.length <= 1) return complex;
  let closeNext = null;

  if (closed) {
    const [a, b] = points;
    const v = [b[0] - a[0], b[1] - a[1]];
    closeNext = _vecutil__WEBPACK_IMPORTED_MODULE_1__["scaleAndAdd"](_vecutil__WEBPACK_IMPORTED_MODULE_1__["create"](), a, v, 1e-7);
    points.unshift([...points[points.length - 2]]);
  }

  const total = points.length; // clear flags

  this._lastFlip = -1;
  this._started = false;
  this._normal = null; // join each segment

  for (let i = 1, count = 0; i < total; i++) {
    const last = points[i - 1];
    const cur = points[i];
    const next = i < points.length - 1 ? points[i + 1] : null;
    const thickness = this.mapThickness(cur, i, points);

    const amt = this._seg(complex, count, last, cur, next, thickness / 2, closed, closeNext);

    count += amt;
  }

  if (closed) {
    complex.positions = complex.positions.slice(2);
    complex.cells = complex.cells.slice(2).map(([a, b, c]) => [a - 2, b - 2, c - 2]);
  }

  return complex;
};

Stroke.prototype._seg = function (complex, index, last, cur, next, halfThick, closed, closeNext) {
  let count = 0;
  const cells = complex.cells;
  const positions = complex.positions;
  const capSquare = this.cap === 'square';
  const joinBevel = this.join === 'bevel'; // get unit direction of line

  direction(lineA, cur, last); // if we don't yet have a normal from previous join,
  // compute based on line start - end

  if (!this._normal) {
    this._normal = _vecutil__WEBPACK_IMPORTED_MODULE_1__["create"]();
    normal(this._normal, lineA);
  } // if we haven't started yet, add the first two points


  if (!this._started) {
    this._started = true; // if the end cap is type square, we can just push the verts out a bit

    if (capSquare) {
      _vecutil__WEBPACK_IMPORTED_MODULE_1__["scaleAndAdd"](capEnd, last, lineA, -halfThick);
      last = capEnd;
    }

    extrusions(complex, last, this._normal, halfThick);
  }

  cells.push([index + 0, index + 1, index + 2]);
  /*
    // now determine the type of join with next segment
     - round (TODO)
    - bevel
    - miter
    - none (i.e. no next segment, use normal)
     */

  if (!closed && !next) {
    // no next segment, simple extrusion
    // now reset normal to finish cap
    normal(this._normal, lineA); // push square end cap out a bit

    if (capSquare) {
      _vecutil__WEBPACK_IMPORTED_MODULE_1__["scaleAndAdd"](capEnd, cur, lineA, halfThick);
      cur = capEnd;
    }

    extrusions(complex, cur, this._normal, halfThick);
    cells.push(this._lastFlip === 1 ? [index, index + 2, index + 3] : [index + 2, index + 1, index + 3]);
    count += 2;
  } else {
    // we have a next segment, start with miter
    // get unit dir of next line
    if (!next) direction(lineB, closeNext, cur);else direction(lineB, next, cur); // stores tangent & miter

    let miterLen = computeMiter(tangent, miter, lineA, lineB, halfThick); // infinity * 0 cause NaN, fix #7

    miterLen = Math.min(miterLen, MAX_MITER_VALUE); // normal(tmp, lineA)
    // get orientation

    let flip = _vecutil__WEBPACK_IMPORTED_MODULE_1__["dot"](tangent, this._normal) < 0 ? -1 : 1;
    let bevel = joinBevel;

    if (!bevel && this.join === 'miter') {
      const limit = miterLen / halfThick;

      if (limit > this.miterLimit) {
        miterLen = this.miterLimit * halfThick;
        bevel = true;
      }
    }

    if (bevel) {
      // next two points in our first segment
      _vecutil__WEBPACK_IMPORTED_MODULE_1__["scaleAndAdd"](tmp, cur, this._normal, -halfThick * flip);
      positions.push(_vecutil__WEBPACK_IMPORTED_MODULE_1__["clone"](tmp));
      _vecutil__WEBPACK_IMPORTED_MODULE_1__["scaleAndAdd"](tmp, cur, miter, miterLen * flip);
      positions.push(_vecutil__WEBPACK_IMPORTED_MODULE_1__["clone"](tmp));
      cells.push(this._lastFlip !== -flip ? [index, index + 2, index + 3] : [index + 2, index + 1, index + 3]);

      if (next) {
        normal(tmp, lineB);
        _vecutil__WEBPACK_IMPORTED_MODULE_1__["copy"](this._normal, tmp); // store normal for next round

        _vecutil__WEBPACK_IMPORTED_MODULE_1__["scaleAndAdd"](tmp, cur, tmp, -halfThick * flip);
        positions.push(_vecutil__WEBPACK_IMPORTED_MODULE_1__["clone"](tmp)); // now add the bevel triangle

        cells.push([index + 2, index + 3, index + 4]);
        count++;
      } // //the miter is now the normal for our next join


      count += 2;
    } else {
      // miter
      // next two points for our miter join
      extrusions(complex, cur, miter, miterLen);
      cells.push(this._lastFlip === 1 ? [index, index + 2, index + 3] : [index + 2, index + 1, index + 3]);
      flip = -1; // the miter is now the normal for our next join

      _vecutil__WEBPACK_IMPORTED_MODULE_1__["copy"](this._normal, miter);
      count += 2;
    }

    this._lastFlip = flip;
  }

  return count;
};

function extrusions(complex, point, normal, scale) {
  const positions = complex.positions; // next two points to end our segment

  _vecutil__WEBPACK_IMPORTED_MODULE_1__["scaleAndAdd"](tmp, point, normal, -scale);
  positions.push(_vecutil__WEBPACK_IMPORTED_MODULE_1__["clone"](tmp));
  _vecutil__WEBPACK_IMPORTED_MODULE_1__["scaleAndAdd"](tmp, point, normal, scale);
  positions.push(_vecutil__WEBPACK_IMPORTED_MODULE_1__["clone"](tmp));
}

/* harmony default export */ __webpack_exports__["default"] = (Stroke);

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = function numtype(num, def) {
	return typeof num === 'number'
		? num 
		: (typeof def === 'number' ? def : 0)
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var add = __webpack_require__(61)
var set = __webpack_require__(62)
var normalize = __webpack_require__(63)
var subtract = __webpack_require__(64)
var dot = __webpack_require__(65)

var tmp = [0, 0]

module.exports.computeMiter = function computeMiter(tangent, miter, lineA, lineB, halfThick) {
    //get tangent line
    add(tangent, lineA, lineB)
    normalize(tangent, tangent)

    //get miter as a unit vector
    set(miter, -tangent[1], tangent[0])
    set(tmp, -lineA[1], lineA[0])

    //get the necessary length of our miter
    return halfThick / dot(miter, tmp)
}

module.exports.normal = function normal(out, dir) {
    //get perpendicular
    set(out, -dir[1], dir[0])
    return out
}

module.exports.direction = function direction(out, a, b) {
    //get unit dir of two lines
    subtract(out, a, b)
    normalize(out, out)
    return out
}

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = add

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function add(out, a, b) {
    out[0] = a[0] + b[0]
    out[1] = a[1] + b[1]
    return out
}

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = set

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
function set(out, x, y) {
    out[0] = x
    out[1] = y
    return out
}

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = normalize

/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */
function normalize(out, a) {
    var x = a[0],
        y = a[1]
    var len = x*x + y*y
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len)
        out[0] = a[0] * len
        out[1] = a[1] * len
    }
    return out
}

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = subtract

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function subtract(out, a, b) {
    out[0] = a[0] - b[0]
    out[1] = a[1] - b[1]
    return out
}

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = dot

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1]
}

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnitTransform", function() { return isUnitTransform; });
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

function isUnitTransform(m) {
  return m[0] === 1 && m[1] === 0 && m[2] === 0 && m[3] === 1 && m[4] === 0 && m[5] === 0;
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

// https://github.com/mattdesl/triangulate-contours

/* eslint-disable */
var Tess2 = __webpack_require__(68);

var xtend = __webpack_require__(70);

module.exports = function (contours, opt) {
  opt = opt || {};
  contours = contours.filter(function (c) {
    return c.length > 2;
  });

  if (contours.length === 0) {
    return {
      positions: [],
      cells: []
    };
  }

  if (typeof opt.vertexSize !== 'number') opt.vertexSize = contours[0][0].length; //flatten for tess2.js

  contours = contours.map(function (c) {
    return c.reduce(function (a, b) {
      return a.concat(b);
    });
  }); // Tesselate

  var res = Tess2.tesselate(xtend({
    contours: contours,
    windingRule: Tess2.WINDING_ODD,
    elementType: Tess2.POLYGONS,
    polySize: 3,
    vertexSize: 2
  }, opt));
  var positions = [];

  for (var i = 0; i < res.vertices.length; i += opt.vertexSize) {
    var pos = res.vertices.slice(i, i + opt.vertexSize);
    positions.push(pos);
  }

  var cells = [];

  for (i = 0; i < res.elements.length; i += 3) {
    var a = res.elements[i],
        b = res.elements[i + 1],
        c = res.elements[i + 2];
    cells.push([a, b, c]);
  } //return a simplicial complex


  return {
    positions: positions,
    cells: cells
  };
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(69);

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
** SGI FREE SOFTWARE LICENSE B (Version 2.0, Sept. 18, 2008) 
** Copyright (C) [dates of first publication] Silicon Graphics, Inc.
** All Rights Reserved.
**
** Permission is hereby granted, free of charge, to any person obtaining a copy
** of this software and associated documentation files (the "Software"), to deal
** in the Software without restriction, including without limitation the rights
** to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
** of the Software, and to permit persons to whom the Software is furnished to do so,
** subject to the following conditions:
** 
** The above copyright notice including the dates of first publication and either this
** permission notice or a reference to http://oss.sgi.com/projects/FreeB/ shall be
** included in all copies or substantial portions of the Software. 
**
** THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
** INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
** PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL SILICON GRAPHICS, INC.
** BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
** TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
** OR OTHER DEALINGS IN THE SOFTWARE.
** 
** Except as contained in this notice, the name of Silicon Graphics, Inc. shall not
** be used in advertising or otherwise to promote the sale, use or other dealings in
** this Software without prior written authorization from Silicon Graphics, Inc.
*/
/*
** Author: Mikko Mononen, Aug 2013.
** The code is based on GLU libtess by Eric Veach, July 1994
*/

	

	/* Public API */

	var Tess2 = {};

	module.exports = Tess2;
	
	Tess2.WINDING_ODD = 0;
	Tess2.WINDING_NONZERO = 1;
	Tess2.WINDING_POSITIVE = 2;
	Tess2.WINDING_NEGATIVE = 3;
	Tess2.WINDING_ABS_GEQ_TWO = 4;

	Tess2.POLYGONS = 0;
	Tess2.CONNECTED_POLYGONS = 1;
	Tess2.BOUNDARY_CONTOURS = 2;

	Tess2.tesselate = function(opts) {
		var debug =  opts.debug || false;
		var tess = new Tesselator();
		for (var i = 0; i < opts.contours.length; i++) {
			tess.addContour(opts.vertexSize || 2, opts.contours[i]);
		}
		tess.tesselate(opts.windingRule || Tess2.WINDING_ODD,
					   opts.elementType || Tess2.POLYGONS,
					   opts.polySize || 3,
					   opts.vertexSize || 2,
					   opts.normal || [0,0,1]);
		return {
			vertices: tess.vertices,
			vertexIndices: tess.vertexIndices,
			vertexCount: tess.vertexCount,
			elements: tess.elements,
			elementCount: tess.elementCount,
			mesh: debug ? tess.mesh : undefined
		};
	};

	/* Internal */

	var assert = function(cond) {
		if (!cond) {
			throw "Assertion Failed!";
		}
	}

	/* The mesh structure is similar in spirit, notation, and operations
	* to the "quad-edge" structure (see L. Guibas and J. Stolfi, Primitives
	* for the manipulation of general subdivisions and the computation of
	* Voronoi diagrams, ACM Transactions on Graphics, 4(2):74-123, April 1985).
	* For a simplified description, see the course notes for CS348a,
	* "Mathematical Foundations of Computer Graphics", available at the
	* Stanford bookstore (and taught during the fall quarter).
	* The implementation also borrows a tiny subset of the graph-based approach
	* use in Mantyla's Geometric Work Bench (see M. Mantyla, An Introduction
	* to Sold Modeling, Computer Science Press, Rockville, Maryland, 1988).
	*
	* The fundamental data structure is the "half-edge".  Two half-edges
	* go together to make an edge, but they point in opposite directions.
	* Each half-edge has a pointer to its mate (the "symmetric" half-edge Sym),
	* its origin vertex (Org), the face on its left side (Lface), and the
	* adjacent half-edges in the CCW direction around the origin vertex
	* (Onext) and around the left face (Lnext).  There is also a "next"
	* pointer for the global edge list (see below).
	*
	* The notation used for mesh navigation:
	*  Sym   = the mate of a half-edge (same edge, but opposite direction)
	*  Onext = edge CCW around origin vertex (keep same origin)
	*  Dnext = edge CCW around destination vertex (keep same dest)
	*  Lnext = edge CCW around left face (dest becomes new origin)
	*  Rnext = edge CCW around right face (origin becomes new dest)
	*
	* "prev" means to substitute CW for CCW in the definitions above.
	*
	* The mesh keeps global lists of all vertices, faces, and edges,
	* stored as doubly-linked circular lists with a dummy header node.
	* The mesh stores pointers to these dummy headers (vHead, fHead, eHead).
	*
	* The circular edge list is special; since half-edges always occur
	* in pairs (e and e->Sym), each half-edge stores a pointer in only
	* one direction.  Starting at eHead and following the e->next pointers
	* will visit each *edge* once (ie. e or e->Sym, but not both).
	* e->Sym stores a pointer in the opposite direction, thus it is
	* always true that e->Sym->next->Sym->next == e.
	*
	* Each vertex has a pointer to next and previous vertices in the
	* circular list, and a pointer to a half-edge with this vertex as
	* the origin (NULL if this is the dummy header).  There is also a
	* field "data" for client data.
	*
	* Each face has a pointer to the next and previous faces in the
	* circular list, and a pointer to a half-edge with this face as
	* the left face (NULL if this is the dummy header).  There is also
	* a field "data" for client data.
	*
	* Note that what we call a "face" is really a loop; faces may consist
	* of more than one loop (ie. not simply connected), but there is no
	* record of this in the data structure.  The mesh may consist of
	* several disconnected regions, so it may not be possible to visit
	* the entire mesh by starting at a half-edge and traversing the edge
	* structure.
	*
	* The mesh does NOT support isolated vertices; a vertex is deleted along
	* with its last edge.  Similarly when two faces are merged, one of the
	* faces is deleted (see tessMeshDelete below).  For mesh operations,
	* all face (loop) and vertex pointers must not be NULL.  However, once
	* mesh manipulation is finished, TESSmeshZapFace can be used to delete
	* faces of the mesh, one at a time.  All external faces can be "zapped"
	* before the mesh is returned to the client; then a NULL face indicates
	* a region which is not part of the output polygon.
	*/

	function TESSvertex() {
		this.next = null;	/* next vertex (never NULL) */
		this.prev = null;	/* previous vertex (never NULL) */
		this.anEdge = null;	/* a half-edge with this origin */

		/* Internal data (keep hidden) */
		this.coords = [0,0,0];	/* vertex location in 3D */
		this.s = 0.0;
		this.t = 0.0;			/* projection onto the sweep plane */
		this.pqHandle = 0;		/* to allow deletion from priority queue */
		this.n = 0;				/* to allow identify unique vertices */
		this.idx = 0;			/* to allow map result to original verts */
	} 

	function TESSface() {
		this.next = null;		/* next face (never NULL) */
		this.prev = null;		/* previous face (never NULL) */
		this.anEdge = null;		/* a half edge with this left face */

		/* Internal data (keep hidden) */
		this.trail = null;		/* "stack" for conversion to strips */
		this.n = 0;				/* to allow identiy unique faces */
		this.marked = false;	/* flag for conversion to strips */
		this.inside = false;	/* this face is in the polygon interior */
	};

	function TESShalfEdge(side) {
		this.next = null;		/* doubly-linked list (prev==Sym->next) */
		this.Sym = null;		/* same edge, opposite direction */
		this.Onext = null;		/* next edge CCW around origin */
		this.Lnext = null;		/* next edge CCW around left face */
		this.Org = null;		/* origin vertex (Overtex too long) */
		this.Lface = null;		/* left face */

		/* Internal data (keep hidden) */
		this.activeRegion = null;	/* a region with this upper edge (sweep.c) */
		this.winding = 0;			/* change in winding number when crossing
									   from the right face to the left face */
		this.side = side;
	};

	TESShalfEdge.prototype = {
		get Rface() { return this.Sym.Lface; },
		set Rface(v) { this.Sym.Lface = v; },
		get Dst() { return this.Sym.Org; },
		set Dst(v) { this.Sym.Org = v; },
		get Oprev() { return this.Sym.Lnext; },
		set Oprev(v) { this.Sym.Lnext = v; },
		get Lprev() { return this.Onext.Sym; },
		set Lprev(v) { this.Onext.Sym = v; },
		get Dprev() { return this.Lnext.Sym; },
		set Dprev(v) { this.Lnext.Sym = v; },
		get Rprev() { return this.Sym.Onext; },
		set Rprev(v) { this.Sym.Onext = v; },
		get Dnext() { return /*this.Rprev*/this.Sym.Onext.Sym; },  /* 3 pointers */
		set Dnext(v) { /*this.Rprev*/this.Sym.Onext.Sym = v; },  /* 3 pointers */
		get Rnext() { return /*this.Oprev*/this.Sym.Lnext.Sym; },  /* 3 pointers */
		set Rnext(v) { /*this.Oprev*/this.Sym.Lnext.Sym = v; },  /* 3 pointers */
	};



	function TESSmesh() {
		var v = new TESSvertex();
		var f = new TESSface();
		var e = new TESShalfEdge(0);
		var eSym = new TESShalfEdge(1);

		v.next = v.prev = v;
		v.anEdge = null;

		f.next = f.prev = f;
		f.anEdge = null;
		f.trail = null;
		f.marked = false;
		f.inside = false;

		e.next = e;
		e.Sym = eSym;
		e.Onext = null;
		e.Lnext = null;
		e.Org = null;
		e.Lface = null;
		e.winding = 0;
		e.activeRegion = null;

		eSym.next = eSym;
		eSym.Sym = e;
		eSym.Onext = null;
		eSym.Lnext = null;
		eSym.Org = null;
		eSym.Lface = null;
		eSym.winding = 0;
		eSym.activeRegion = null;

		this.vHead = v;		/* dummy header for vertex list */
		this.fHead = f;		/* dummy header for face list */
		this.eHead = e;		/* dummy header for edge list */
		this.eHeadSym = eSym;	/* and its symmetric counterpart */
	};

	/* The mesh operations below have three motivations: completeness,
	* convenience, and efficiency.  The basic mesh operations are MakeEdge,
	* Splice, and Delete.  All the other edge operations can be implemented
	* in terms of these.  The other operations are provided for convenience
	* and/or efficiency.
	*
	* When a face is split or a vertex is added, they are inserted into the
	* global list *before* the existing vertex or face (ie. e->Org or e->Lface).
	* This makes it easier to process all vertices or faces in the global lists
	* without worrying about processing the same data twice.  As a convenience,
	* when a face is split, the "inside" flag is copied from the old face.
	* Other internal data (v->data, v->activeRegion, f->data, f->marked,
	* f->trail, e->winding) is set to zero.
	*
	* ********************** Basic Edge Operations **************************
	*
	* tessMeshMakeEdge( mesh ) creates one edge, two vertices, and a loop.
	* The loop (face) consists of the two new half-edges.
	*
	* tessMeshSplice( eOrg, eDst ) is the basic operation for changing the
	* mesh connectivity and topology.  It changes the mesh so that
	*  eOrg->Onext <- OLD( eDst->Onext )
	*  eDst->Onext <- OLD( eOrg->Onext )
	* where OLD(...) means the value before the meshSplice operation.
	*
	* This can have two effects on the vertex structure:
	*  - if eOrg->Org != eDst->Org, the two vertices are merged together
	*  - if eOrg->Org == eDst->Org, the origin is split into two vertices
	* In both cases, eDst->Org is changed and eOrg->Org is untouched.
	*
	* Similarly (and independently) for the face structure,
	*  - if eOrg->Lface == eDst->Lface, one loop is split into two
	*  - if eOrg->Lface != eDst->Lface, two distinct loops are joined into one
	* In both cases, eDst->Lface is changed and eOrg->Lface is unaffected.
	*
	* tessMeshDelete( eDel ) removes the edge eDel.  There are several cases:
	* if (eDel->Lface != eDel->Rface), we join two loops into one; the loop
	* eDel->Lface is deleted.  Otherwise, we are splitting one loop into two;
	* the newly created loop will contain eDel->Dst.  If the deletion of eDel
	* would create isolated vertices, those are deleted as well.
	*
	* ********************** Other Edge Operations **************************
	*
	* tessMeshAddEdgeVertex( eOrg ) creates a new edge eNew such that
	* eNew == eOrg->Lnext, and eNew->Dst is a newly created vertex.
	* eOrg and eNew will have the same left face.
	*
	* tessMeshSplitEdge( eOrg ) splits eOrg into two edges eOrg and eNew,
	* such that eNew == eOrg->Lnext.  The new vertex is eOrg->Dst == eNew->Org.
	* eOrg and eNew will have the same left face.
	*
	* tessMeshConnect( eOrg, eDst ) creates a new edge from eOrg->Dst
	* to eDst->Org, and returns the corresponding half-edge eNew.
	* If eOrg->Lface == eDst->Lface, this splits one loop into two,
	* and the newly created loop is eNew->Lface.  Otherwise, two disjoint
	* loops are merged into one, and the loop eDst->Lface is destroyed.
	*
	* ************************ Other Operations *****************************
	*
	* tessMeshNewMesh() creates a new mesh with no edges, no vertices,
	* and no loops (what we usually call a "face").
	*
	* tessMeshUnion( mesh1, mesh2 ) forms the union of all structures in
	* both meshes, and returns the new mesh (the old meshes are destroyed).
	*
	* tessMeshDeleteMesh( mesh ) will free all storage for any valid mesh.
	*
	* tessMeshZapFace( fZap ) destroys a face and removes it from the
	* global face list.  All edges of fZap will have a NULL pointer as their
	* left face.  Any edges which also have a NULL pointer as their right face
	* are deleted entirely (along with any isolated vertices this produces).
	* An entire mesh can be deleted by zapping its faces, one at a time,
	* in any order.  Zapped faces cannot be used in further mesh operations!
	*
	* tessMeshCheckMesh( mesh ) checks a mesh for self-consistency.
	*/

	TESSmesh.prototype = {

		/* MakeEdge creates a new pair of half-edges which form their own loop.
		* No vertex or face structures are allocated, but these must be assigned
		* before the current edge operation is completed.
		*/
		//static TESShalfEdge *MakeEdge( TESSmesh* mesh, TESShalfEdge *eNext )
		makeEdge_: function(eNext) {
			var e = new TESShalfEdge(0);
			var eSym = new TESShalfEdge(1);

			/* Make sure eNext points to the first edge of the edge pair */
			if( eNext.Sym.side < eNext.side ) { eNext = eNext.Sym; }

			/* Insert in circular doubly-linked list before eNext.
			* Note that the prev pointer is stored in Sym->next.
			*/
			var ePrev = eNext.Sym.next;
			eSym.next = ePrev;
			ePrev.Sym.next = e;
			e.next = eNext;
			eNext.Sym.next = eSym;

			e.Sym = eSym;
			e.Onext = e;
			e.Lnext = eSym;
			e.Org = null;
			e.Lface = null;
			e.winding = 0;
			e.activeRegion = null;

			eSym.Sym = e;
			eSym.Onext = eSym;
			eSym.Lnext = e;
			eSym.Org = null;
			eSym.Lface = null;
			eSym.winding = 0;
			eSym.activeRegion = null;

			return e;
		},

		/* Splice( a, b ) is best described by the Guibas/Stolfi paper or the
		* CS348a notes (see mesh.h).  Basically it modifies the mesh so that
		* a->Onext and b->Onext are exchanged.  This can have various effects
		* depending on whether a and b belong to different face or vertex rings.
		* For more explanation see tessMeshSplice() below.
		*/
		// static void Splice( TESShalfEdge *a, TESShalfEdge *b )
		splice_: function(a, b) {
			var aOnext = a.Onext;
			var bOnext = b.Onext;
			aOnext.Sym.Lnext = b;
			bOnext.Sym.Lnext = a;
			a.Onext = bOnext;
			b.Onext = aOnext;
		},

		/* MakeVertex( newVertex, eOrig, vNext ) attaches a new vertex and makes it the
		* origin of all edges in the vertex loop to which eOrig belongs. "vNext" gives
		* a place to insert the new vertex in the global vertex list.  We insert
		* the new vertex *before* vNext so that algorithms which walk the vertex
		* list will not see the newly created vertices.
		*/
		//static void MakeVertex( TESSvertex *newVertex, TESShalfEdge *eOrig, TESSvertex *vNext )
		makeVertex_: function(newVertex, eOrig, vNext) {
			var vNew = newVertex;
			assert(vNew !== null);

			/* insert in circular doubly-linked list before vNext */
			var vPrev = vNext.prev;
			vNew.prev = vPrev;
			vPrev.next = vNew;
			vNew.next = vNext;
			vNext.prev = vNew;

			vNew.anEdge = eOrig;
			/* leave coords, s, t undefined */

			/* fix other edges on this vertex loop */
			var e = eOrig;
			do {
				e.Org = vNew;
				e = e.Onext;
			} while(e !== eOrig);
		},

		/* MakeFace( newFace, eOrig, fNext ) attaches a new face and makes it the left
		* face of all edges in the face loop to which eOrig belongs.  "fNext" gives
		* a place to insert the new face in the global face list.  We insert
		* the new face *before* fNext so that algorithms which walk the face
		* list will not see the newly created faces.
		*/
		// static void MakeFace( TESSface *newFace, TESShalfEdge *eOrig, TESSface *fNext )
		makeFace_: function(newFace, eOrig, fNext) {
			var fNew = newFace;
			assert(fNew !== null); 

			/* insert in circular doubly-linked list before fNext */
			var fPrev = fNext.prev;
			fNew.prev = fPrev;
			fPrev.next = fNew;
			fNew.next = fNext;
			fNext.prev = fNew;

			fNew.anEdge = eOrig;
			fNew.trail = null;
			fNew.marked = false;

			/* The new face is marked "inside" if the old one was.  This is a
			* convenience for the common case where a face has been split in two.
			*/
			fNew.inside = fNext.inside;

			/* fix other edges on this face loop */
			var e = eOrig;
			do {
				e.Lface = fNew;
				e = e.Lnext;
			} while(e !== eOrig);
		},

		/* KillEdge( eDel ) destroys an edge (the half-edges eDel and eDel->Sym),
		* and removes from the global edge list.
		*/
		//static void KillEdge( TESSmesh *mesh, TESShalfEdge *eDel )
		killEdge_: function(eDel) {
			/* Half-edges are allocated in pairs, see EdgePair above */
			if( eDel.Sym.side < eDel.side ) { eDel = eDel.Sym; }

			/* delete from circular doubly-linked list */
			var eNext = eDel.next;
			var ePrev = eDel.Sym.next;
			eNext.Sym.next = ePrev;
			ePrev.Sym.next = eNext;
		},


		/* KillVertex( vDel ) destroys a vertex and removes it from the global
		* vertex list.  It updates the vertex loop to point to a given new vertex.
		*/
		//static void KillVertex( TESSmesh *mesh, TESSvertex *vDel, TESSvertex *newOrg )
		killVertex_: function(vDel, newOrg) {
			var eStart = vDel.anEdge;
			/* change the origin of all affected edges */
			var e = eStart;
			do {
				e.Org = newOrg;
				e = e.Onext;
			} while(e !== eStart);

			/* delete from circular doubly-linked list */
			var vPrev = vDel.prev;
			var vNext = vDel.next;
			vNext.prev = vPrev;
			vPrev.next = vNext;
		},

		/* KillFace( fDel ) destroys a face and removes it from the global face
		* list.  It updates the face loop to point to a given new face.
		*/
		//static void KillFace( TESSmesh *mesh, TESSface *fDel, TESSface *newLface )
		killFace_: function(fDel, newLface) {
			var eStart = fDel.anEdge;

			/* change the left face of all affected edges */
			var e = eStart;
			do {
				e.Lface = newLface;
				e = e.Lnext;
			} while(e !== eStart);

			/* delete from circular doubly-linked list */
			var fPrev = fDel.prev;
			var fNext = fDel.next;
			fNext.prev = fPrev;
			fPrev.next = fNext;
		},

		/****************** Basic Edge Operations **********************/

		/* tessMeshMakeEdge creates one edge, two vertices, and a loop (face).
		* The loop consists of the two new half-edges.
		*/
		//TESShalfEdge *tessMeshMakeEdge( TESSmesh *mesh )
		makeEdge: function() {
			var newVertex1 = new TESSvertex();
			var newVertex2 = new TESSvertex();
			var newFace = new TESSface();
			var e = this.makeEdge_( this.eHead);
			this.makeVertex_( newVertex1, e, this.vHead );
			this.makeVertex_( newVertex2, e.Sym, this.vHead );
			this.makeFace_( newFace, e, this.fHead );
			return e;
		},

		/* tessMeshSplice( eOrg, eDst ) is the basic operation for changing the
		* mesh connectivity and topology.  It changes the mesh so that
		*	eOrg->Onext <- OLD( eDst->Onext )
		*	eDst->Onext <- OLD( eOrg->Onext )
		* where OLD(...) means the value before the meshSplice operation.
		*
		* This can have two effects on the vertex structure:
		*  - if eOrg->Org != eDst->Org, the two vertices are merged together
		*  - if eOrg->Org == eDst->Org, the origin is split into two vertices
		* In both cases, eDst->Org is changed and eOrg->Org is untouched.
		*
		* Similarly (and independently) for the face structure,
		*  - if eOrg->Lface == eDst->Lface, one loop is split into two
		*  - if eOrg->Lface != eDst->Lface, two distinct loops are joined into one
		* In both cases, eDst->Lface is changed and eOrg->Lface is unaffected.
		*
		* Some special cases:
		* If eDst == eOrg, the operation has no effect.
		* If eDst == eOrg->Lnext, the new face will have a single edge.
		* If eDst == eOrg->Lprev, the old face will have a single edge.
		* If eDst == eOrg->Onext, the new vertex will have a single edge.
		* If eDst == eOrg->Oprev, the old vertex will have a single edge.
		*/
		//int tessMeshSplice( TESSmesh* mesh, TESShalfEdge *eOrg, TESShalfEdge *eDst )
		splice: function(eOrg, eDst) {
			var joiningLoops = false;
			var joiningVertices = false;

			if( eOrg === eDst ) return;

			if( eDst.Org !== eOrg.Org ) {
				/* We are merging two disjoint vertices -- destroy eDst->Org */
				joiningVertices = true;
				this.killVertex_( eDst.Org, eOrg.Org );
			}
			if( eDst.Lface !== eOrg.Lface ) {
				/* We are connecting two disjoint loops -- destroy eDst->Lface */
				joiningLoops = true;
				this.killFace_( eDst.Lface, eOrg.Lface );
			}

			/* Change the edge structure */
			this.splice_( eDst, eOrg );

			if( ! joiningVertices ) {
				var newVertex = new TESSvertex();

				/* We split one vertex into two -- the new vertex is eDst->Org.
				* Make sure the old vertex points to a valid half-edge.
				*/
				this.makeVertex_( newVertex, eDst, eOrg.Org );
				eOrg.Org.anEdge = eOrg;
			}
			if( ! joiningLoops ) {
				var newFace = new TESSface();  

				/* We split one loop into two -- the new loop is eDst->Lface.
				* Make sure the old face points to a valid half-edge.
				*/
				this.makeFace_( newFace, eDst, eOrg.Lface );
				eOrg.Lface.anEdge = eOrg;
			}
		},

		/* tessMeshDelete( eDel ) removes the edge eDel.  There are several cases:
		* if (eDel->Lface != eDel->Rface), we join two loops into one; the loop
		* eDel->Lface is deleted.  Otherwise, we are splitting one loop into two;
		* the newly created loop will contain eDel->Dst.  If the deletion of eDel
		* would create isolated vertices, those are deleted as well.
		*
		* This function could be implemented as two calls to tessMeshSplice
		* plus a few calls to memFree, but this would allocate and delete
		* unnecessary vertices and faces.
		*/
		//int tessMeshDelete( TESSmesh *mesh, TESShalfEdge *eDel )
		delete: function(eDel) {
			var eDelSym = eDel.Sym;
			var joiningLoops = false;

			/* First step: disconnect the origin vertex eDel->Org.  We make all
			* changes to get a consistent mesh in this "intermediate" state.
			*/
			if( eDel.Lface !== eDel.Rface ) {
				/* We are joining two loops into one -- remove the left face */
				joiningLoops = true;
				this.killFace_( eDel.Lface, eDel.Rface );
			}

			if( eDel.Onext === eDel ) {
				this.killVertex_( eDel.Org, null );
			} else {
				/* Make sure that eDel->Org and eDel->Rface point to valid half-edges */
				eDel.Rface.anEdge = eDel.Oprev;
				eDel.Org.anEdge = eDel.Onext;

				this.splice_( eDel, eDel.Oprev );
				if( ! joiningLoops ) {
					var newFace = new TESSface();

					/* We are splitting one loop into two -- create a new loop for eDel. */
					this.makeFace_( newFace, eDel, eDel.Lface );
				}
			}

			/* Claim: the mesh is now in a consistent state, except that eDel->Org
			* may have been deleted.  Now we disconnect eDel->Dst.
			*/
			if( eDelSym.Onext === eDelSym ) {
				this.killVertex_( eDelSym.Org, null );
				this.killFace_( eDelSym.Lface, null );
			} else {
				/* Make sure that eDel->Dst and eDel->Lface point to valid half-edges */
				eDel.Lface.anEdge = eDelSym.Oprev;
				eDelSym.Org.anEdge = eDelSym.Onext;
				this.splice_( eDelSym, eDelSym.Oprev );
			}

			/* Any isolated vertices or faces have already been freed. */
			this.killEdge_( eDel );
		},

		/******************** Other Edge Operations **********************/

		/* All these routines can be implemented with the basic edge
		* operations above.  They are provided for convenience and efficiency.
		*/


		/* tessMeshAddEdgeVertex( eOrg ) creates a new edge eNew such that
		* eNew == eOrg->Lnext, and eNew->Dst is a newly created vertex.
		* eOrg and eNew will have the same left face.
		*/
		// TESShalfEdge *tessMeshAddEdgeVertex( TESSmesh *mesh, TESShalfEdge *eOrg );
		addEdgeVertex: function(eOrg) {
			var eNew = this.makeEdge_( eOrg );
			var eNewSym = eNew.Sym;

			/* Connect the new edge appropriately */
			this.splice_( eNew, eOrg.Lnext );

			/* Set the vertex and face information */
			eNew.Org = eOrg.Dst;

			var newVertex = new TESSvertex();
			this.makeVertex_( newVertex, eNewSym, eNew.Org );

			eNew.Lface = eNewSym.Lface = eOrg.Lface;

			return eNew;
		},


		/* tessMeshSplitEdge( eOrg ) splits eOrg into two edges eOrg and eNew,
		* such that eNew == eOrg->Lnext.  The new vertex is eOrg->Dst == eNew->Org.
		* eOrg and eNew will have the same left face.
		*/
		// TESShalfEdge *tessMeshSplitEdge( TESSmesh *mesh, TESShalfEdge *eOrg );
		splitEdge: function(eOrg, eDst) {
			var tempHalfEdge = this.addEdgeVertex( eOrg );
			var eNew = tempHalfEdge.Sym;

			/* Disconnect eOrg from eOrg->Dst and connect it to eNew->Org */
			this.splice_( eOrg.Sym, eOrg.Sym.Oprev );
			this.splice_( eOrg.Sym, eNew );

			/* Set the vertex and face information */
			eOrg.Dst = eNew.Org;
			eNew.Dst.anEdge = eNew.Sym;	/* may have pointed to eOrg->Sym */
			eNew.Rface = eOrg.Rface;
			eNew.winding = eOrg.winding;	/* copy old winding information */
			eNew.Sym.winding = eOrg.Sym.winding;

			return eNew;
		},


		/* tessMeshConnect( eOrg, eDst ) creates a new edge from eOrg->Dst
		* to eDst->Org, and returns the corresponding half-edge eNew.
		* If eOrg->Lface == eDst->Lface, this splits one loop into two,
		* and the newly created loop is eNew->Lface.  Otherwise, two disjoint
		* loops are merged into one, and the loop eDst->Lface is destroyed.
		*
		* If (eOrg == eDst), the new face will have only two edges.
		* If (eOrg->Lnext == eDst), the old face is reduced to a single edge.
		* If (eOrg->Lnext->Lnext == eDst), the old face is reduced to two edges.
		*/

		// TESShalfEdge *tessMeshConnect( TESSmesh *mesh, TESShalfEdge *eOrg, TESShalfEdge *eDst );
		connect: function(eOrg, eDst) {
			var joiningLoops = false;  
			var eNew = this.makeEdge_( eOrg );
			var eNewSym = eNew.Sym;

			if( eDst.Lface !== eOrg.Lface ) {
				/* We are connecting two disjoint loops -- destroy eDst->Lface */
				joiningLoops = true;
				this.killFace_( eDst.Lface, eOrg.Lface );
			}

			/* Connect the new edge appropriately */
			this.splice_( eNew, eOrg.Lnext );
			this.splice_( eNewSym, eDst );

			/* Set the vertex and face information */
			eNew.Org = eOrg.Dst;
			eNewSym.Org = eDst.Org;
			eNew.Lface = eNewSym.Lface = eOrg.Lface;

			/* Make sure the old face points to a valid half-edge */
			eOrg.Lface.anEdge = eNewSym;

			if( ! joiningLoops ) {
				var newFace = new TESSface();
				/* We split one loop into two -- the new loop is eNew->Lface */
				this.makeFace_( newFace, eNew, eOrg.Lface );
			}
			return eNew;
		},

		/* tessMeshZapFace( fZap ) destroys a face and removes it from the
		* global face list.  All edges of fZap will have a NULL pointer as their
		* left face.  Any edges which also have a NULL pointer as their right face
		* are deleted entirely (along with any isolated vertices this produces).
		* An entire mesh can be deleted by zapping its faces, one at a time,
		* in any order.  Zapped faces cannot be used in further mesh operations!
		*/
		zapFace: function( fZap )
		{
			var eStart = fZap.anEdge;
			var e, eNext, eSym;
			var fPrev, fNext;

			/* walk around face, deleting edges whose right face is also NULL */
			eNext = eStart.Lnext;
			do {
				e = eNext;
				eNext = e.Lnext;

				e.Lface = null;
				if( e.Rface === null ) {
					/* delete the edge -- see TESSmeshDelete above */

					if( e.Onext === e ) {
						this.killVertex_( e.Org, null );
					} else {
						/* Make sure that e->Org points to a valid half-edge */
						e.Org.anEdge = e.Onext;
						this.splice_( e, e.Oprev );
					}
					eSym = e.Sym;
					if( eSym.Onext === eSym ) {
						this.killVertex_( eSym.Org, null );
					} else {
						/* Make sure that eSym->Org points to a valid half-edge */
						eSym.Org.anEdge = eSym.Onext;
						this.splice_( eSym, eSym.Oprev );
					}
					this.killEdge_( e );
				}
			} while( e != eStart );

			/* delete from circular doubly-linked list */
			fPrev = fZap.prev;
			fNext = fZap.next;
			fNext.prev = fPrev;
			fPrev.next = fNext;
		},

		countFaceVerts_: function(f) {
			var eCur = f.anEdge;
			var n = 0;
			do
			{
				n++;
				eCur = eCur.Lnext;
			}
			while (eCur !== f.anEdge);
			return n;
		},

		//int tessMeshMergeConvexFaces( TESSmesh *mesh, int maxVertsPerFace )
		mergeConvexFaces: function(maxVertsPerFace) {
			var f;
			var eCur, eNext, eSym;
			var vStart;
			var curNv, symNv;

			for( f = this.fHead.next; f !== this.fHead; f = f.next )
			{
				// Skip faces which are outside the result.
				if( !f.inside )
					continue;

				eCur = f.anEdge;
				vStart = eCur.Org;
					
				while (true)
				{
					eNext = eCur.Lnext;
					eSym = eCur.Sym;

					// Try to merge if the neighbour face is valid.
					if( eSym && eSym.Lface && eSym.Lface.inside )
					{
						// Try to merge the neighbour faces if the resulting polygons
						// does not exceed maximum number of vertices.
						curNv = this.countFaceVerts_( f );
						symNv = this.countFaceVerts_( eSym.Lface );
						if( (curNv+symNv-2) <= maxVertsPerFace )
						{
							// Merge if the resulting poly is convex.
							if( Geom.vertCCW( eCur.Lprev.Org, eCur.Org, eSym.Lnext.Lnext.Org ) &&
								Geom.vertCCW( eSym.Lprev.Org, eSym.Org, eCur.Lnext.Lnext.Org ) )
							{
								eNext = eSym.Lnext;
								this.delete( eSym );
								eCur = null;
								eSym = null;
							}
						}
					}
					
					if( eCur && eCur.Lnext.Org === vStart )
						break;
						
					// Continue to next edge.
					eCur = eNext;
				}
			}
			
			return true;
		},

		/* tessMeshCheckMesh( mesh ) checks a mesh for self-consistency.
		*/
		check: function() {
			var fHead = this.fHead;
			var vHead = this.vHead;
			var eHead = this.eHead;
			var f, fPrev, v, vPrev, e, ePrev;

			fPrev = fHead;
			for( fPrev = fHead ; (f = fPrev.next) !== fHead; fPrev = f) {
				assert( f.prev === fPrev );
				e = f.anEdge;
				do {
					assert( e.Sym !== e );
					assert( e.Sym.Sym === e );
					assert( e.Lnext.Onext.Sym === e );
					assert( e.Onext.Sym.Lnext === e );
					assert( e.Lface === f );
					e = e.Lnext;
				} while( e !== f.anEdge );
			}
			assert( f.prev === fPrev && f.anEdge === null );

			vPrev = vHead;
			for( vPrev = vHead ; (v = vPrev.next) !== vHead; vPrev = v) {
				assert( v.prev === vPrev );
				e = v.anEdge;
				do {
					assert( e.Sym !== e );
					assert( e.Sym.Sym === e );
					assert( e.Lnext.Onext.Sym === e );
					assert( e.Onext.Sym.Lnext === e );
					assert( e.Org === v );
					e = e.Onext;
				} while( e !== v.anEdge );
			}
			assert( v.prev === vPrev && v.anEdge === null );

			ePrev = eHead;
			for( ePrev = eHead ; (e = ePrev.next) !== eHead; ePrev = e) {
				assert( e.Sym.next === ePrev.Sym );
				assert( e.Sym !== e );
				assert( e.Sym.Sym === e );
				assert( e.Org !== null );
				assert( e.Dst !== null );
				assert( e.Lnext.Onext.Sym === e );
				assert( e.Onext.Sym.Lnext === e );
			}
			assert( e.Sym.next === ePrev.Sym
				&& e.Sym === this.eHeadSym
				&& e.Sym.Sym === e
				&& e.Org === null && e.Dst === null
				&& e.Lface === null && e.Rface === null );
		}

	};

	var Geom = {};

	Geom.vertEq = function(u,v) {
		return (u.s === v.s && u.t === v.t);
	};

	/* Returns TRUE if u is lexicographically <= v. */
	Geom.vertLeq = function(u,v) {
		return ((u.s < v.s) || (u.s === v.s && u.t <= v.t));
	};

	/* Versions of VertLeq, EdgeSign, EdgeEval with s and t transposed. */
	Geom.transLeq = function(u,v) {
		return ((u.t < v.t) || (u.t === v.t && u.s <= v.s));
	};

	Geom.edgeGoesLeft = function(e) {
		return Geom.vertLeq( e.Dst, e.Org );
	};

	Geom.edgeGoesRight = function(e) {
		return Geom.vertLeq( e.Org, e.Dst );
	};

	Geom.vertL1dist = function(u,v) {
		return (Math.abs(u.s - v.s) + Math.abs(u.t - v.t));
	};

	//TESSreal tesedgeEval( TESSvertex *u, TESSvertex *v, TESSvertex *w )
	Geom.edgeEval = function( u, v, w ) {
		/* Given three vertices u,v,w such that VertLeq(u,v) && VertLeq(v,w),
		* evaluates the t-coord of the edge uw at the s-coord of the vertex v.
		* Returns v->t - (uw)(v->s), ie. the signed distance from uw to v.
		* If uw is vertical (and thus passes thru v), the result is zero.
		*
		* The calculation is extremely accurate and stable, even when v
		* is very close to u or w.  In particular if we set v->t = 0 and
		* let r be the negated result (this evaluates (uw)(v->s)), then
		* r is guaranteed to satisfy MIN(u->t,w->t) <= r <= MAX(u->t,w->t).
		*/
		assert( Geom.vertLeq( u, v ) && Geom.vertLeq( v, w ));

		var gapL = v.s - u.s;
		var gapR = w.s - v.s;

		if( gapL + gapR > 0.0 ) {
			if( gapL < gapR ) {
				return (v.t - u.t) + (u.t - w.t) * (gapL / (gapL + gapR));
			} else {
				return (v.t - w.t) + (w.t - u.t) * (gapR / (gapL + gapR));
			}
		}
		/* vertical line */
		return 0.0;
	};

	//TESSreal tesedgeSign( TESSvertex *u, TESSvertex *v, TESSvertex *w )
	Geom.edgeSign = function( u, v, w ) {
		/* Returns a number whose sign matches EdgeEval(u,v,w) but which
		* is cheaper to evaluate.  Returns > 0, == 0 , or < 0
		* as v is above, on, or below the edge uw.
		*/
		assert( Geom.vertLeq( u, v ) && Geom.vertLeq( v, w ));

		var gapL = v.s - u.s;
		var gapR = w.s - v.s;

		if( gapL + gapR > 0.0 ) {
			return (v.t - w.t) * gapL + (v.t - u.t) * gapR;
		}
		/* vertical line */
		return 0.0;
	};


	/***********************************************************************
	* Define versions of EdgeSign, EdgeEval with s and t transposed.
	*/

	//TESSreal testransEval( TESSvertex *u, TESSvertex *v, TESSvertex *w )
	Geom.transEval = function( u, v, w ) {
		/* Given three vertices u,v,w such that TransLeq(u,v) && TransLeq(v,w),
		* evaluates the t-coord of the edge uw at the s-coord of the vertex v.
		* Returns v->s - (uw)(v->t), ie. the signed distance from uw to v.
		* If uw is vertical (and thus passes thru v), the result is zero.
		*
		* The calculation is extremely accurate and stable, even when v
		* is very close to u or w.  In particular if we set v->s = 0 and
		* let r be the negated result (this evaluates (uw)(v->t)), then
		* r is guaranteed to satisfy MIN(u->s,w->s) <= r <= MAX(u->s,w->s).
		*/
		assert( Geom.transLeq( u, v ) && Geom.transLeq( v, w ));

		var gapL = v.t - u.t;
		var gapR = w.t - v.t;

		if( gapL + gapR > 0.0 ) {
			if( gapL < gapR ) {
				return (v.s - u.s) + (u.s - w.s) * (gapL / (gapL + gapR));
			} else {
				return (v.s - w.s) + (w.s - u.s) * (gapR / (gapL + gapR));
			}
		}
		/* vertical line */
		return 0.0;
	};

	//TESSreal testransSign( TESSvertex *u, TESSvertex *v, TESSvertex *w )
	Geom.transSign = function( u, v, w ) {
		/* Returns a number whose sign matches TransEval(u,v,w) but which
		* is cheaper to evaluate.  Returns > 0, == 0 , or < 0
		* as v is above, on, or below the edge uw.
		*/
		assert( Geom.transLeq( u, v ) && Geom.transLeq( v, w ));

		var gapL = v.t - u.t;
		var gapR = w.t - v.t;

		if( gapL + gapR > 0.0 ) {
			return (v.s - w.s) * gapL + (v.s - u.s) * gapR;
		}
		/* vertical line */
		return 0.0;
	};


	//int tesvertCCW( TESSvertex *u, TESSvertex *v, TESSvertex *w )
	Geom.vertCCW = function( u, v, w ) {
		/* For almost-degenerate situations, the results are not reliable.
		* Unless the floating-point arithmetic can be performed without
		* rounding errors, *any* implementation will give incorrect results
		* on some degenerate inputs, so the client must have some way to
		* handle this situation.
		*/
		return (u.s*(v.t - w.t) + v.s*(w.t - u.t) + w.s*(u.t - v.t)) >= 0.0;
	};

	/* Given parameters a,x,b,y returns the value (b*x+a*y)/(a+b),
	* or (x+y)/2 if a==b==0.  It requires that a,b >= 0, and enforces
	* this in the rare case that one argument is slightly negative.
	* The implementation is extremely stable numerically.
	* In particular it guarantees that the result r satisfies
	* MIN(x,y) <= r <= MAX(x,y), and the results are very accurate
	* even when a and b differ greatly in magnitude.
	*/
	Geom.interpolate = function(a,x,b,y) {
		return (a = (a < 0) ? 0 : a, b = (b < 0) ? 0 : b, ((a <= b) ? ((b == 0) ? ((x+y) / 2) : (x + (y-x) * (a/(a+b)))) : (y + (x-y) * (b/(a+b)))));
	};

	/*
	#ifndef FOR_TRITE_TEST_PROGRAM
	#define Interpolate(a,x,b,y)	RealInterpolate(a,x,b,y)
	#else

	// Claim: the ONLY property the sweep algorithm relies on is that
	// MIN(x,y) <= r <= MAX(x,y).  This is a nasty way to test that.
	#include <stdlib.h>
	extern int RandomInterpolate;

	double Interpolate( double a, double x, double b, double y)
	{
		printf("*********************%d\n",RandomInterpolate);
		if( RandomInterpolate ) {
			a = 1.2 * drand48() - 0.1;
			a = (a < 0) ? 0 : ((a > 1) ? 1 : a);
			b = 1.0 - a;
		}
		return RealInterpolate(a,x,b,y);
	}
	#endif*/

	Geom.intersect = function( o1, d1, o2, d2, v ) {
		/* Given edges (o1,d1) and (o2,d2), compute their point of intersection.
		* The computed point is guaranteed to lie in the intersection of the
		* bounding rectangles defined by each edge.
		*/
		var z1, z2;
		var t;

		/* This is certainly not the most efficient way to find the intersection
		* of two line segments, but it is very numerically stable.
		*
		* Strategy: find the two middle vertices in the VertLeq ordering,
		* and interpolate the intersection s-value from these.  Then repeat
		* using the TransLeq ordering to find the intersection t-value.
		*/

		if( ! Geom.vertLeq( o1, d1 )) { t = o1; o1 = d1; d1 = t; } //swap( o1, d1 ); }
		if( ! Geom.vertLeq( o2, d2 )) { t = o2; o2 = d2; d2 = t; } //swap( o2, d2 ); }
		if( ! Geom.vertLeq( o1, o2 )) { t = o1; o1 = o2; o2 = t; t = d1; d1 = d2; d2 = t; }//swap( o1, o2 ); swap( d1, d2 ); }

		if( ! Geom.vertLeq( o2, d1 )) {
			/* Technically, no intersection -- do our best */
			v.s = (o2.s + d1.s) / 2;
		} else if( Geom.vertLeq( d1, d2 )) {
			/* Interpolate between o2 and d1 */
			z1 = Geom.edgeEval( o1, o2, d1 );
			z2 = Geom.edgeEval( o2, d1, d2 );
			if( z1+z2 < 0 ) { z1 = -z1; z2 = -z2; }
			v.s = Geom.interpolate( z1, o2.s, z2, d1.s );
		} else {
			/* Interpolate between o2 and d2 */
			z1 = Geom.edgeSign( o1, o2, d1 );
			z2 = -Geom.edgeSign( o1, d2, d1 );
			if( z1+z2 < 0 ) { z1 = -z1; z2 = -z2; }
			v.s = Geom.interpolate( z1, o2.s, z2, d2.s );
		}

		/* Now repeat the process for t */

		if( ! Geom.transLeq( o1, d1 )) { t = o1; o1 = d1; d1 = t; } //swap( o1, d1 ); }
		if( ! Geom.transLeq( o2, d2 )) { t = o2; o2 = d2; d2 = t; } //swap( o2, d2 ); }
		if( ! Geom.transLeq( o1, o2 )) { t = o1; o1 = o2; o2 = t; t = d1; d1 = d2; d2 = t; } //swap( o1, o2 ); swap( d1, d2 ); }

		if( ! Geom.transLeq( o2, d1 )) {
			/* Technically, no intersection -- do our best */
			v.t = (o2.t + d1.t) / 2;
		} else if( Geom.transLeq( d1, d2 )) {
			/* Interpolate between o2 and d1 */
			z1 = Geom.transEval( o1, o2, d1 );
			z2 = Geom.transEval( o2, d1, d2 );
			if( z1+z2 < 0 ) { z1 = -z1; z2 = -z2; }
			v.t = Geom.interpolate( z1, o2.t, z2, d1.t );
		} else {
			/* Interpolate between o2 and d2 */
			z1 = Geom.transSign( o1, o2, d1 );
			z2 = -Geom.transSign( o1, d2, d1 );
			if( z1+z2 < 0 ) { z1 = -z1; z2 = -z2; }
			v.t = Geom.interpolate( z1, o2.t, z2, d2.t );
		}
	};



	function DictNode() {
		this.key = null;
		this.next = null;
		this.prev = null;
	};

	function Dict(frame, leq) {
		this.head = new DictNode();
		this.head.next = this.head;
		this.head.prev = this.head;
		this.frame = frame;
		this.leq = leq;
	};

	Dict.prototype = {
		min: function() {
			return this.head.next;
		},

		max: function() {
			return this.head.prev;
		},

		insert: function(k) {
			return this.insertBefore(this.head, k);
		},

		search: function(key) {
			/* Search returns the node with the smallest key greater than or equal
			* to the given key.  If there is no such key, returns a node whose
			* key is NULL.  Similarly, Succ(Max(d)) has a NULL key, etc.
			*/
			var node = this.head;
			do {
				node = node.next;
			} while( node.key !== null && ! this.leq(this.frame, key, node.key));

			return node;
		},

		insertBefore: function(node, key) {
			do {
				node = node.prev;
			} while( node.key !== null && ! this.leq(this.frame, node.key, key));

			var newNode = new DictNode();
			newNode.key = key;
			newNode.next = node.next;
			node.next.prev = newNode;
			newNode.prev = node;
			node.next = newNode;

			return newNode;
		},

		delete: function(node) {
			node.next.prev = node.prev;
			node.prev.next = node.next;
		}
	};


	function PQnode() {
		this.handle = null;
	}

	function PQhandleElem() {
		this.key = null;
		this.node = null;
	}

	function PriorityQ(size, leq) {
		this.size = 0;
		this.max = size;

		this.nodes = [];
		this.nodes.length = size+1;
		for (var i = 0; i < this.nodes.length; i++)
			this.nodes[i] = new PQnode();

		this.handles = [];
		this.handles.length = size+1;
		for (var i = 0; i < this.handles.length; i++)
			this.handles[i] = new PQhandleElem();

		this.initialized = false;
		this.freeList = 0;
		this.leq = leq;

		this.nodes[1].handle = 1;	/* so that Minimum() returns NULL */
		this.handles[1].key = null;
	};

	PriorityQ.prototype = {

		floatDown_: function( curr )
		{
			var n = this.nodes;
			var h = this.handles;
			var hCurr, hChild;
			var child;

			hCurr = n[curr].handle;
			for( ;; ) {
				child = curr << 1;
				if( child < this.size && this.leq( h[n[child+1].handle].key, h[n[child].handle].key )) {
					++child;
				}

				assert(child <= this.max);

				hChild = n[child].handle;
				if( child > this.size || this.leq( h[hCurr].key, h[hChild].key )) {
					n[curr].handle = hCurr;
					h[hCurr].node = curr;
					break;
				}
				n[curr].handle = hChild;
				h[hChild].node = curr;
				curr = child;
			}
		},

		floatUp_: function( curr )
		{
			var n = this.nodes;
			var h = this.handles;
			var hCurr, hParent;
			var parent;

			hCurr = n[curr].handle;
			for( ;; ) {
				parent = curr >> 1;
				hParent = n[parent].handle;
				if( parent == 0 || this.leq( h[hParent].key, h[hCurr].key )) {
					n[curr].handle = hCurr;
					h[hCurr].node = curr;
					break;
				}
				n[curr].handle = hParent;
				h[hParent].node = curr;
				curr = parent;
			}
		},

		init: function() {
			/* This method of building a heap is O(n), rather than O(n lg n). */
			for( var i = this.size; i >= 1; --i ) {
				this.floatDown_( i );
			}
			this.initialized = true;
		},

		min: function() {
			return this.handles[this.nodes[1].handle].key;
		},

		isEmpty: function() {
			this.size === 0;
		},

		/* really pqHeapInsert */
		/* returns INV_HANDLE iff out of memory */
		//PQhandle pqHeapInsert( TESSalloc* alloc, PriorityQHeap *pq, PQkey keyNew )
		insert: function(keyNew)
		{
			var curr;
			var free;

			curr = ++this.size;
			if( (curr*2) > this.max ) {
				this.max *= 2;
				var s;
				s = this.nodes.length;
				this.nodes.length = this.max+1;
				for (var i = s; i < this.nodes.length; i++)
					this.nodes[i] = new PQnode();

				s = this.handles.length;
				this.handles.length = this.max+1;
				for (var i = s; i < this.handles.length; i++)
					this.handles[i] = new PQhandleElem();
			}

			if( this.freeList === 0 ) {
				free = curr;
			} else {
				free = this.freeList;
				this.freeList = this.handles[free].node;
			}

			this.nodes[curr].handle = free;
			this.handles[free].node = curr;
			this.handles[free].key = keyNew;

			if( this.initialized ) {
				this.floatUp_( curr );
			}
			return free;
		},

		//PQkey pqHeapExtractMin( PriorityQHeap *pq )
		extractMin: function() {
			var n = this.nodes;
			var h = this.handles;
			var hMin = n[1].handle;
			var min = h[hMin].key;

			if( this.size > 0 ) {
				n[1].handle = n[this.size].handle;
				h[n[1].handle].node = 1;

				h[hMin].key = null;
				h[hMin].node = this.freeList;
				this.freeList = hMin;

				--this.size;
				if( this.size > 0 ) {
					this.floatDown_( 1 );
				}
			}
			return min;
		},

		delete: function( hCurr ) {
			var n = this.nodes;
			var h = this.handles;
			var curr;

			assert( hCurr >= 1 && hCurr <= this.max && h[hCurr].key !== null );

			curr = h[hCurr].node;
			n[curr].handle = n[this.size].handle;
			h[n[curr].handle].node = curr;

			--this.size;
			if( curr <= this.size ) {
				if( curr <= 1 || this.leq( h[n[curr>>1].handle].key, h[n[curr].handle].key )) {
					this.floatDown_( curr );
				} else {
					this.floatUp_( curr );
				}
			}
			h[hCurr].key = null;
			h[hCurr].node = this.freeList;
			this.freeList = hCurr;
		}
	};


	/* For each pair of adjacent edges crossing the sweep line, there is
	* an ActiveRegion to represent the region between them.  The active
	* regions are kept in sorted order in a dynamic dictionary.  As the
	* sweep line crosses each vertex, we update the affected regions.
	*/

	function ActiveRegion() {
		this.eUp = null;		/* upper edge, directed right to left */
		this.nodeUp = null;	/* dictionary node corresponding to eUp */
		this.windingNumber = 0;	/* used to determine which regions are
								* inside the polygon */
		this.inside = false;		/* is this region inside the polygon? */
		this.sentinel = false;	/* marks fake edges at t = +/-infinity */
		this.dirty = false;		/* marks regions where the upper or lower
						* edge has changed, but we haven't checked
						* whether they intersect yet */
		this.fixUpperEdge = false;	/* marks temporary edges introduced when
							* we process a "right vertex" (one without
							* any edges leaving to the right) */
	};

	var Sweep = {};

	Sweep.regionBelow = function(r) {
		return r.nodeUp.prev.key;
	}

	Sweep.regionAbove = function(r) {
		return r.nodeUp.next.key;
	}

	Sweep.debugEvent = function( tess ) {
		// empty
	}


	/*
	* Invariants for the Edge Dictionary.
	* - each pair of adjacent edges e2=Succ(e1) satisfies EdgeLeq(e1,e2)
	*   at any valid location of the sweep event
	* - if EdgeLeq(e2,e1) as well (at any valid sweep event), then e1 and e2
	*   share a common endpoint
	* - for each e, e->Dst has been processed, but not e->Org
	* - each edge e satisfies VertLeq(e->Dst,event) && VertLeq(event,e->Org)
	*   where "event" is the current sweep line event.
	* - no edge e has zero length
	*
	* Invariants for the Mesh (the processed portion).
	* - the portion of the mesh left of the sweep line is a planar graph,
	*   ie. there is *some* way to embed it in the plane
	* - no processed edge has zero length
	* - no two processed vertices have identical coordinates
	* - each "inside" region is monotone, ie. can be broken into two chains
	*   of monotonically increasing vertices according to VertLeq(v1,v2)
	*   - a non-invariant: these chains may intersect (very slightly)
	*
	* Invariants for the Sweep.
	* - if none of the edges incident to the event vertex have an activeRegion
	*   (ie. none of these edges are in the edge dictionary), then the vertex
	*   has only right-going edges.
	* - if an edge is marked "fixUpperEdge" (it is a temporary edge introduced
	*   by ConnectRightVertex), then it is the only right-going edge from
	*   its associated vertex.  (This says that these edges exist only
	*   when it is necessary.)
	*/

	/* When we merge two edges into one, we need to compute the combined
	* winding of the new edge.
	*/
	Sweep.addWinding = function(eDst,eSrc) {
		eDst.winding += eSrc.winding;
		eDst.Sym.winding += eSrc.Sym.winding;
	}


	//static int EdgeLeq( TESStesselator *tess, ActiveRegion *reg1, ActiveRegion *reg2 )
	Sweep.edgeLeq = function( tess, reg1, reg2 ) {
		/*
		* Both edges must be directed from right to left (this is the canonical
		* direction for the upper edge of each region).
		*
		* The strategy is to evaluate a "t" value for each edge at the
		* current sweep line position, given by tess->event.  The calculations
		* are designed to be very stable, but of course they are not perfect.
		*
		* Special case: if both edge destinations are at the sweep event,
		* we sort the edges by slope (they would otherwise compare equally).
		*/
		var ev = tess.event;
		var t1, t2;

		var e1 = reg1.eUp;
		var e2 = reg2.eUp;

		if( e1.Dst === ev ) {
			if( e2.Dst === ev ) {
				/* Two edges right of the sweep line which meet at the sweep event.
				* Sort them by slope.
				*/
				if( Geom.vertLeq( e1.Org, e2.Org )) {
					return Geom.edgeSign( e2.Dst, e1.Org, e2.Org ) <= 0;
				}
				return Geom.edgeSign( e1.Dst, e2.Org, e1.Org ) >= 0;
			}
			return Geom.edgeSign( e2.Dst, ev, e2.Org ) <= 0;
		}
		if( e2.Dst === ev ) {
			return Geom.edgeSign( e1.Dst, ev, e1.Org ) >= 0;
		}

		/* General case - compute signed distance *from* e1, e2 to event */
		var t1 = Geom.edgeEval( e1.Dst, ev, e1.Org );
		var t2 = Geom.edgeEval( e2.Dst, ev, e2.Org );
		return (t1 >= t2);
	}


	//static void DeleteRegion( TESStesselator *tess, ActiveRegion *reg )
	Sweep.deleteRegion = function( tess, reg ) {
		if( reg.fixUpperEdge ) {
			/* It was created with zero winding number, so it better be
			* deleted with zero winding number (ie. it better not get merged
			* with a real edge).
			*/
			assert( reg.eUp.winding === 0 );
		}
		reg.eUp.activeRegion = null;
		tess.dict.delete( reg.nodeUp );
	}

	//static int FixUpperEdge( TESStesselator *tess, ActiveRegion *reg, TESShalfEdge *newEdge )
	Sweep.fixUpperEdge = function( tess, reg, newEdge ) {
		/*
		* Replace an upper edge which needs fixing (see ConnectRightVertex).
		*/
		assert( reg.fixUpperEdge );
		tess.mesh.delete( reg.eUp );
		reg.fixUpperEdge = false;
		reg.eUp = newEdge;
		newEdge.activeRegion = reg;
	}

	//static ActiveRegion *TopLeftRegion( TESStesselator *tess, ActiveRegion *reg )
	Sweep.topLeftRegion = function( tess, reg ) {
		var org = reg.eUp.Org;
		var e;

		/* Find the region above the uppermost edge with the same origin */
		do {
			reg = Sweep.regionAbove( reg );
		} while( reg.eUp.Org === org );

		/* If the edge above was a temporary edge introduced by ConnectRightVertex,
		* now is the time to fix it.
		*/
		if( reg.fixUpperEdge ) {
			e = tess.mesh.connect( Sweep.regionBelow(reg).eUp.Sym, reg.eUp.Lnext );
			if (e === null) return null;
			Sweep.fixUpperEdge( tess, reg, e );
			reg = Sweep.regionAbove( reg );
		}
		return reg;
	}

	//static ActiveRegion *TopRightRegion( ActiveRegion *reg )
	Sweep.topRightRegion = function( reg )
	{
		var dst = reg.eUp.Dst;
		var reg = null;
		/* Find the region above the uppermost edge with the same destination */
		do {
			reg = Sweep.regionAbove( reg );
		} while( reg.eUp.Dst === dst );
		return reg;
	}

	//static ActiveRegion *AddRegionBelow( TESStesselator *tess, ActiveRegion *regAbove, TESShalfEdge *eNewUp )
	Sweep.addRegionBelow = function( tess, regAbove, eNewUp ) {
		/*
		* Add a new active region to the sweep line, *somewhere* below "regAbove"
		* (according to where the new edge belongs in the sweep-line dictionary).
		* The upper edge of the new region will be "eNewUp".
		* Winding number and "inside" flag are not updated.
		*/
		var regNew = new ActiveRegion();
		regNew.eUp = eNewUp;
		regNew.nodeUp = tess.dict.insertBefore( regAbove.nodeUp, regNew );
	//	if (regNew->nodeUp == NULL) longjmp(tess->env,1);
		regNew.fixUpperEdge = false;
		regNew.sentinel = false;
		regNew.dirty = false;

		eNewUp.activeRegion = regNew;
		return regNew;
	}

	//static int IsWindingInside( TESStesselator *tess, int n )
	Sweep.isWindingInside = function( tess, n ) {
		switch( tess.windingRule ) {
			case Tess2.WINDING_ODD:
				return (n & 1) != 0;
			case Tess2.WINDING_NONZERO:
				return (n != 0);
			case Tess2.WINDING_POSITIVE:
				return (n > 0);
			case Tess2.WINDING_NEGATIVE:
				return (n < 0);
			case Tess2.WINDING_ABS_GEQ_TWO:
				return (n >= 2) || (n <= -2);
		}
		assert( false );
		return false;
	}

	//static void ComputeWinding( TESStesselator *tess, ActiveRegion *reg )
	Sweep.computeWinding = function( tess, reg ) {
		reg.windingNumber = Sweep.regionAbove(reg).windingNumber + reg.eUp.winding;
		reg.inside = Sweep.isWindingInside( tess, reg.windingNumber );
	}


	//static void FinishRegion( TESStesselator *tess, ActiveRegion *reg )
	Sweep.finishRegion = function( tess, reg ) {
		/*
		* Delete a region from the sweep line.  This happens when the upper
		* and lower chains of a region meet (at a vertex on the sweep line).
		* The "inside" flag is copied to the appropriate mesh face (we could
		* not do this before -- since the structure of the mesh is always
		* changing, this face may not have even existed until now).
		*/
		var e = reg.eUp;
		var f = e.Lface;

		f.inside = reg.inside;
		f.anEdge = e;   /* optimization for tessMeshTessellateMonoRegion() */
		Sweep.deleteRegion( tess, reg );
	}


	//static TESShalfEdge *FinishLeftRegions( TESStesselator *tess, ActiveRegion *regFirst, ActiveRegion *regLast )
	Sweep.finishLeftRegions = function( tess, regFirst, regLast ) {
		/*
		* We are given a vertex with one or more left-going edges.  All affected
		* edges should be in the edge dictionary.  Starting at regFirst->eUp,
		* we walk down deleting all regions where both edges have the same
		* origin vOrg.  At the same time we copy the "inside" flag from the
		* active region to the face, since at this point each face will belong
		* to at most one region (this was not necessarily true until this point
		* in the sweep).  The walk stops at the region above regLast; if regLast
		* is NULL we walk as far as possible.  At the same time we relink the
		* mesh if necessary, so that the ordering of edges around vOrg is the
		* same as in the dictionary.
		*/
		var e, ePrev;
		var reg = null;
		var regPrev = regFirst;
		var ePrev = regFirst.eUp;
		while( regPrev !== regLast ) {
			regPrev.fixUpperEdge = false;	/* placement was OK */
			reg = Sweep.regionBelow( regPrev );
			e = reg.eUp;
			if( e.Org != ePrev.Org ) {
				if( ! reg.fixUpperEdge ) {
					/* Remove the last left-going edge.  Even though there are no further
					* edges in the dictionary with this origin, there may be further
					* such edges in the mesh (if we are adding left edges to a vertex
					* that has already been processed).  Thus it is important to call
					* FinishRegion rather than just DeleteRegion.
					*/
					Sweep.finishRegion( tess, regPrev );
					break;
				}
				/* If the edge below was a temporary edge introduced by
				* ConnectRightVertex, now is the time to fix it.
				*/
				e = tess.mesh.connect( ePrev.Lprev, e.Sym );
	//			if (e == NULL) longjmp(tess->env,1);
				Sweep.fixUpperEdge( tess, reg, e );
			}

			/* Relink edges so that ePrev->Onext == e */
			if( ePrev.Onext !== e ) {
				tess.mesh.splice( e.Oprev, e );
				tess.mesh.splice( ePrev, e );
			}
			Sweep.finishRegion( tess, regPrev );	/* may change reg->eUp */
			ePrev = reg.eUp;
			regPrev = reg;
		}
		return ePrev;
	}


	//static void AddRightEdges( TESStesselator *tess, ActiveRegion *regUp, TESShalfEdge *eFirst, TESShalfEdge *eLast, TESShalfEdge *eTopLeft, int cleanUp )
	Sweep.addRightEdges = function( tess, regUp, eFirst, eLast, eTopLeft, cleanUp ) {
		/*
		* Purpose: insert right-going edges into the edge dictionary, and update
		* winding numbers and mesh connectivity appropriately.  All right-going
		* edges share a common origin vOrg.  Edges are inserted CCW starting at
		* eFirst; the last edge inserted is eLast->Oprev.  If vOrg has any
		* left-going edges already processed, then eTopLeft must be the edge
		* such that an imaginary upward vertical segment from vOrg would be
		* contained between eTopLeft->Oprev and eTopLeft; otherwise eTopLeft
		* should be NULL.
		*/
		var reg, regPrev;
		var e, ePrev;
		var firstTime = true;

		/* Insert the new right-going edges in the dictionary */
		e = eFirst;
		do {
			assert( Geom.vertLeq( e.Org, e.Dst ));
			Sweep.addRegionBelow( tess, regUp, e.Sym );
			e = e.Onext;
		} while ( e !== eLast );

		/* Walk *all* right-going edges from e->Org, in the dictionary order,
		* updating the winding numbers of each region, and re-linking the mesh
		* edges to match the dictionary ordering (if necessary).
		*/
		if( eTopLeft === null ) {
			eTopLeft = Sweep.regionBelow( regUp ).eUp.Rprev;
		}
		regPrev = regUp;
		ePrev = eTopLeft;
		for( ;; ) {
			reg = Sweep.regionBelow( regPrev );
			e = reg.eUp.Sym;
			if( e.Org !== ePrev.Org ) break;

			if( e.Onext !== ePrev ) {
				/* Unlink e from its current position, and relink below ePrev */
				tess.mesh.splice( e.Oprev, e );
				tess.mesh.splice( ePrev.Oprev, e );
			}
			/* Compute the winding number and "inside" flag for the new regions */
			reg.windingNumber = regPrev.windingNumber - e.winding;
			reg.inside = Sweep.isWindingInside( tess, reg.windingNumber );

			/* Check for two outgoing edges with same slope -- process these
			* before any intersection tests (see example in tessComputeInterior).
			*/
			regPrev.dirty = true;
			if( ! firstTime && Sweep.checkForRightSplice( tess, regPrev )) {
				Sweep.addWinding( e, ePrev );
				Sweep.deleteRegion( tess, regPrev );
				tess.mesh.delete( ePrev );
			}
			firstTime = false;
			regPrev = reg;
			ePrev = e;
		}
		regPrev.dirty = true;
		assert( regPrev.windingNumber - e.winding === reg.windingNumber );

		if( cleanUp ) {
			/* Check for intersections between newly adjacent edges. */
			Sweep.walkDirtyRegions( tess, regPrev );
		}
	}


	//static void SpliceMergeVertices( TESStesselator *tess, TESShalfEdge *e1, TESShalfEdge *e2 )
	Sweep.spliceMergeVertices = function( tess, e1, e2 ) {
		/*
		* Two vertices with idential coordinates are combined into one.
		* e1->Org is kept, while e2->Org is discarded.
		*/
		tess.mesh.splice( e1, e2 ); 
	}

	//static void VertexWeights( TESSvertex *isect, TESSvertex *org, TESSvertex *dst, TESSreal *weights )
	Sweep.vertexWeights = function( isect, org, dst ) {
		/*
		* Find some weights which describe how the intersection vertex is
		* a linear combination of "org" and "dest".  Each of the two edges
		* which generated "isect" is allocated 50% of the weight; each edge
		* splits the weight between its org and dst according to the
		* relative distance to "isect".
		*/
		var t1 = Geom.vertL1dist( org, isect );
		var t2 = Geom.vertL1dist( dst, isect );
		var w0 = 0.5 * t2 / (t1 + t2);
		var w1 = 0.5 * t1 / (t1 + t2);
		isect.coords[0] += w0*org.coords[0] + w1*dst.coords[0];
		isect.coords[1] += w0*org.coords[1] + w1*dst.coords[1];
		isect.coords[2] += w0*org.coords[2] + w1*dst.coords[2];
	}


	//static void GetIntersectData( TESStesselator *tess, TESSvertex *isect, TESSvertex *orgUp, TESSvertex *dstUp, TESSvertex *orgLo, TESSvertex *dstLo )
	Sweep.getIntersectData = function( tess, isect, orgUp, dstUp, orgLo, dstLo ) {
		 /*
		 * We've computed a new intersection point, now we need a "data" pointer
		 * from the user so that we can refer to this new vertex in the
		 * rendering callbacks.
		 */
		isect.coords[0] = isect.coords[1] = isect.coords[2] = 0;
		isect.idx = -1;
		Sweep.vertexWeights( isect, orgUp, dstUp );
		Sweep.vertexWeights( isect, orgLo, dstLo );
	}

	//static int CheckForRightSplice( TESStesselator *tess, ActiveRegion *regUp )
	Sweep.checkForRightSplice = function( tess, regUp ) {
		/*
		* Check the upper and lower edge of "regUp", to make sure that the
		* eUp->Org is above eLo, or eLo->Org is below eUp (depending on which
		* origin is leftmost).
		*
		* The main purpose is to splice right-going edges with the same
		* dest vertex and nearly identical slopes (ie. we can't distinguish
		* the slopes numerically).  However the splicing can also help us
		* to recover from numerical errors.  For example, suppose at one
		* point we checked eUp and eLo, and decided that eUp->Org is barely
		* above eLo.  Then later, we split eLo into two edges (eg. from
		* a splice operation like this one).  This can change the result of
		* our test so that now eUp->Org is incident to eLo, or barely below it.
		* We must correct this condition to maintain the dictionary invariants.
		*
		* One possibility is to check these edges for intersection again
		* (ie. CheckForIntersect).  This is what we do if possible.  However
		* CheckForIntersect requires that tess->event lies between eUp and eLo,
		* so that it has something to fall back on when the intersection
		* calculation gives us an unusable answer.  So, for those cases where
		* we can't check for intersection, this routine fixes the problem
		* by just splicing the offending vertex into the other edge.
		* This is a guaranteed solution, no matter how degenerate things get.
		* Basically this is a combinatorial solution to a numerical problem.
		*/
		var regLo = Sweep.regionBelow(regUp);
		var eUp = regUp.eUp;
		var eLo = regLo.eUp;

		if( Geom.vertLeq( eUp.Org, eLo.Org )) {
			if( Geom.edgeSign( eLo.Dst, eUp.Org, eLo.Org ) > 0 ) return false;

			/* eUp->Org appears to be below eLo */
			if( ! Geom.vertEq( eUp.Org, eLo.Org )) {
				/* Splice eUp->Org into eLo */
				tess.mesh.splitEdge( eLo.Sym );
				tess.mesh.splice( eUp, eLo.Oprev );
				regUp.dirty = regLo.dirty = true;

			} else if( eUp.Org !== eLo.Org ) {
				/* merge the two vertices, discarding eUp->Org */
				tess.pq.delete( eUp.Org.pqHandle );
				Sweep.spliceMergeVertices( tess, eLo.Oprev, eUp );
			}
		} else {
			if( Geom.edgeSign( eUp.Dst, eLo.Org, eUp.Org ) < 0 ) return false;

			/* eLo->Org appears to be above eUp, so splice eLo->Org into eUp */
			Sweep.regionAbove(regUp).dirty = regUp.dirty = true;
			tess.mesh.splitEdge( eUp.Sym );
			tess.mesh.splice( eLo.Oprev, eUp );
		}
		return true;
	}

	//static int CheckForLeftSplice( TESStesselator *tess, ActiveRegion *regUp )
	Sweep.checkForLeftSplice = function( tess, regUp ) {
		/*
		* Check the upper and lower edge of "regUp", to make sure that the
		* eUp->Dst is above eLo, or eLo->Dst is below eUp (depending on which
		* destination is rightmost).
		*
		* Theoretically, this should always be true.  However, splitting an edge
		* into two pieces can change the results of previous tests.  For example,
		* suppose at one point we checked eUp and eLo, and decided that eUp->Dst
		* is barely above eLo.  Then later, we split eLo into two edges (eg. from
		* a splice operation like this one).  This can change the result of
		* the test so that now eUp->Dst is incident to eLo, or barely below it.
		* We must correct this condition to maintain the dictionary invariants
		* (otherwise new edges might get inserted in the wrong place in the
		* dictionary, and bad stuff will happen).
		*
		* We fix the problem by just splicing the offending vertex into the
		* other edge.
		*/
		var regLo = Sweep.regionBelow(regUp);
		var eUp = regUp.eUp;
		var eLo = regLo.eUp;
		var e;

		assert( ! Geom.vertEq( eUp.Dst, eLo.Dst ));

		if( Geom.vertLeq( eUp.Dst, eLo.Dst )) {
			if( Geom.edgeSign( eUp.Dst, eLo.Dst, eUp.Org ) < 0 ) return false;

			/* eLo->Dst is above eUp, so splice eLo->Dst into eUp */
			Sweep.regionAbove(regUp).dirty = regUp.dirty = true;
			e = tess.mesh.splitEdge( eUp );
			tess.mesh.splice( eLo.Sym, e );
			e.Lface.inside = regUp.inside;
		} else {
			if( Geom.edgeSign( eLo.Dst, eUp.Dst, eLo.Org ) > 0 ) return false;

			/* eUp->Dst is below eLo, so splice eUp->Dst into eLo */
			regUp.dirty = regLo.dirty = true;
			e = tess.mesh.splitEdge( eLo );
			tess.mesh.splice( eUp.Lnext, eLo.Sym );
			e.Rface.inside = regUp.inside;
		}
		return true;
	}


	//static int CheckForIntersect( TESStesselator *tess, ActiveRegion *regUp )
	Sweep.checkForIntersect = function( tess, regUp ) {
		/*
		* Check the upper and lower edges of the given region to see if
		* they intersect.  If so, create the intersection and add it
		* to the data structures.
		*
		* Returns TRUE if adding the new intersection resulted in a recursive
		* call to AddRightEdges(); in this case all "dirty" regions have been
		* checked for intersections, and possibly regUp has been deleted.
		*/
		var regLo = Sweep.regionBelow(regUp);
		var eUp = regUp.eUp;
		var eLo = regLo.eUp;
		var orgUp = eUp.Org;
		var orgLo = eLo.Org;
		var dstUp = eUp.Dst;
		var dstLo = eLo.Dst;
		var tMinUp, tMaxLo;
		var isect = new TESSvertex, orgMin;
		var e;

		assert( ! Geom.vertEq( dstLo, dstUp ));
		assert( Geom.edgeSign( dstUp, tess.event, orgUp ) <= 0 );
		assert( Geom.edgeSign( dstLo, tess.event, orgLo ) >= 0 );
		assert( orgUp !== tess.event && orgLo !== tess.event );
		assert( ! regUp.fixUpperEdge && ! regLo.fixUpperEdge );

		if( orgUp === orgLo ) return false;	/* right endpoints are the same */

		tMinUp = Math.min( orgUp.t, dstUp.t );
		tMaxLo = Math.max( orgLo.t, dstLo.t );
		if( tMinUp > tMaxLo ) return false;	/* t ranges do not overlap */

		if( Geom.vertLeq( orgUp, orgLo )) {
			if( Geom.edgeSign( dstLo, orgUp, orgLo ) > 0 ) return false;
		} else {
			if( Geom.edgeSign( dstUp, orgLo, orgUp ) < 0 ) return false;
		}

		/* At this point the edges intersect, at least marginally */
		Sweep.debugEvent( tess );

		Geom.intersect( dstUp, orgUp, dstLo, orgLo, isect );
		/* The following properties are guaranteed: */
		assert( Math.min( orgUp.t, dstUp.t ) <= isect.t );
		assert( isect.t <= Math.max( orgLo.t, dstLo.t ));
		assert( Math.min( dstLo.s, dstUp.s ) <= isect.s );
		assert( isect.s <= Math.max( orgLo.s, orgUp.s ));

		if( Geom.vertLeq( isect, tess.event )) {
			/* The intersection point lies slightly to the left of the sweep line,
			* so move it until it''s slightly to the right of the sweep line.
			* (If we had perfect numerical precision, this would never happen
			* in the first place).  The easiest and safest thing to do is
			* replace the intersection by tess->event.
			*/
			isect.s = tess.event.s;
			isect.t = tess.event.t;
		}
		/* Similarly, if the computed intersection lies to the right of the
		* rightmost origin (which should rarely happen), it can cause
		* unbelievable inefficiency on sufficiently degenerate inputs.
		* (If you have the test program, try running test54.d with the
		* "X zoom" option turned on).
		*/
		orgMin = Geom.vertLeq( orgUp, orgLo ) ? orgUp : orgLo;
		if( Geom.vertLeq( orgMin, isect )) {
			isect.s = orgMin.s;
			isect.t = orgMin.t;
		}

		if( Geom.vertEq( isect, orgUp ) || Geom.vertEq( isect, orgLo )) {
			/* Easy case -- intersection at one of the right endpoints */
			Sweep.checkForRightSplice( tess, regUp );
			return false;
		}

		if(    (! Geom.vertEq( dstUp, tess.event )
			&& Geom.edgeSign( dstUp, tess.event, isect ) >= 0)
			|| (! Geom.vertEq( dstLo, tess.event )
			&& Geom.edgeSign( dstLo, tess.event, isect ) <= 0 ))
		{
			/* Very unusual -- the new upper or lower edge would pass on the
			* wrong side of the sweep event, or through it.  This can happen
			* due to very small numerical errors in the intersection calculation.
			*/
			if( dstLo === tess.event ) {
				/* Splice dstLo into eUp, and process the new region(s) */
				tess.mesh.splitEdge( eUp.Sym );
				tess.mesh.splice( eLo.Sym, eUp );
				regUp = Sweep.topLeftRegion( tess, regUp );
	//			if (regUp == NULL) longjmp(tess->env,1);
				eUp = Sweep.regionBelow(regUp).eUp;
				Sweep.finishLeftRegions( tess, Sweep.regionBelow(regUp), regLo );
				Sweep.addRightEdges( tess, regUp, eUp.Oprev, eUp, eUp, true );
				return TRUE;
			}
			if( dstUp === tess.event ) {
				/* Splice dstUp into eLo, and process the new region(s) */
				tess.mesh.splitEdge( eLo.Sym );
				tess.mesh.splice( eUp.Lnext, eLo.Oprev ); 
				regLo = regUp;
				regUp = Sweep.topRightRegion( regUp );
				e = Sweep.regionBelow(regUp).eUp.Rprev;
				regLo.eUp = eLo.Oprev;
				eLo = Sweep.finishLeftRegions( tess, regLo, null );
				Sweep.addRightEdges( tess, regUp, eLo.Onext, eUp.Rprev, e, true );
				return true;
			}
			/* Special case: called from ConnectRightVertex.  If either
			* edge passes on the wrong side of tess->event, split it
			* (and wait for ConnectRightVertex to splice it appropriately).
			*/
			if( Geom.edgeSign( dstUp, tess.event, isect ) >= 0 ) {
				Sweep.regionAbove(regUp).dirty = regUp.dirty = true;
				tess.mesh.splitEdge( eUp.Sym );
				eUp.Org.s = tess.event.s;
				eUp.Org.t = tess.event.t;
			}
			if( Geom.edgeSign( dstLo, tess.event, isect ) <= 0 ) {
				regUp.dirty = regLo.dirty = true;
				tess.mesh.splitEdge( eLo.Sym );
				eLo.Org.s = tess.event.s;
				eLo.Org.t = tess.event.t;
			}
			/* leave the rest for ConnectRightVertex */
			return false;
		}

		/* General case -- split both edges, splice into new vertex.
		* When we do the splice operation, the order of the arguments is
		* arbitrary as far as correctness goes.  However, when the operation
		* creates a new face, the work done is proportional to the size of
		* the new face.  We expect the faces in the processed part of
		* the mesh (ie. eUp->Lface) to be smaller than the faces in the
		* unprocessed original contours (which will be eLo->Oprev->Lface).
		*/
		tess.mesh.splitEdge( eUp.Sym );
		tess.mesh.splitEdge( eLo.Sym );
		tess.mesh.splice( eLo.Oprev, eUp );
		eUp.Org.s = isect.s;
		eUp.Org.t = isect.t;
		eUp.Org.pqHandle = tess.pq.insert( eUp.Org );
		Sweep.getIntersectData( tess, eUp.Org, orgUp, dstUp, orgLo, dstLo );
		Sweep.regionAbove(regUp).dirty = regUp.dirty = regLo.dirty = true;
		return false;
	}

	//static void WalkDirtyRegions( TESStesselator *tess, ActiveRegion *regUp )
	Sweep.walkDirtyRegions = function( tess, regUp ) {
		/*
		* When the upper or lower edge of any region changes, the region is
		* marked "dirty".  This routine walks through all the dirty regions
		* and makes sure that the dictionary invariants are satisfied
		* (see the comments at the beginning of this file).  Of course
		* new dirty regions can be created as we make changes to restore
		* the invariants.
		*/
		var regLo = Sweep.regionBelow(regUp);
		var eUp, eLo;

		for( ;; ) {
			/* Find the lowest dirty region (we walk from the bottom up). */
			while( regLo.dirty ) {
				regUp = regLo;
				regLo = Sweep.regionBelow(regLo);
			}
			if( ! regUp.dirty ) {
				regLo = regUp;
				regUp = Sweep.regionAbove( regUp );
				if( regUp == null || ! regUp.dirty ) {
					/* We've walked all the dirty regions */
					return;
				}
			}
			regUp.dirty = false;
			eUp = regUp.eUp;
			eLo = regLo.eUp;

			if( eUp.Dst !== eLo.Dst ) {
				/* Check that the edge ordering is obeyed at the Dst vertices. */
				if( Sweep.checkForLeftSplice( tess, regUp )) {

					/* If the upper or lower edge was marked fixUpperEdge, then
					* we no longer need it (since these edges are needed only for
					* vertices which otherwise have no right-going edges).
					*/
					if( regLo.fixUpperEdge ) {
						Sweep.deleteRegion( tess, regLo );
						tess.mesh.delete( eLo );
						regLo = Sweep.regionBelow( regUp );
						eLo = regLo.eUp;
					} else if( regUp.fixUpperEdge ) {
						Sweep.deleteRegion( tess, regUp );
						tess.mesh.delete( eUp );
						regUp = Sweep.regionAbove( regLo );
						eUp = regUp.eUp;
					}
				}
			}
			if( eUp.Org !== eLo.Org ) {
				if(    eUp.Dst !== eLo.Dst
					&& ! regUp.fixUpperEdge && ! regLo.fixUpperEdge
					&& (eUp.Dst === tess.event || eLo.Dst === tess.event) )
				{
					/* When all else fails in CheckForIntersect(), it uses tess->event
					* as the intersection location.  To make this possible, it requires
					* that tess->event lie between the upper and lower edges, and also
					* that neither of these is marked fixUpperEdge (since in the worst
					* case it might splice one of these edges into tess->event, and
					* violate the invariant that fixable edges are the only right-going
					* edge from their associated vertex).
					*/
					if( Sweep.checkForIntersect( tess, regUp )) {
						/* WalkDirtyRegions() was called recursively; we're done */
						return;
					}
				} else {
					/* Even though we can't use CheckForIntersect(), the Org vertices
					* may violate the dictionary edge ordering.  Check and correct this.
					*/
					Sweep.checkForRightSplice( tess, regUp );
				}
			}
			if( eUp.Org === eLo.Org && eUp.Dst === eLo.Dst ) {
				/* A degenerate loop consisting of only two edges -- delete it. */
				Sweep.addWinding( eLo, eUp );
				Sweep.deleteRegion( tess, regUp );
				tess.mesh.delete( eUp );
				regUp = Sweep.regionAbove( regLo );
			}
		}
	}


	//static void ConnectRightVertex( TESStesselator *tess, ActiveRegion *regUp, TESShalfEdge *eBottomLeft )
	Sweep.connectRightVertex = function( tess, regUp, eBottomLeft ) {
		/*
		* Purpose: connect a "right" vertex vEvent (one where all edges go left)
		* to the unprocessed portion of the mesh.  Since there are no right-going
		* edges, two regions (one above vEvent and one below) are being merged
		* into one.  "regUp" is the upper of these two regions.
		*
		* There are two reasons for doing this (adding a right-going edge):
		*  - if the two regions being merged are "inside", we must add an edge
		*    to keep them separated (the combined region would not be monotone).
		*  - in any case, we must leave some record of vEvent in the dictionary,
		*    so that we can merge vEvent with features that we have not seen yet.
		*    For example, maybe there is a vertical edge which passes just to
		*    the right of vEvent; we would like to splice vEvent into this edge.
		*
		* However, we don't want to connect vEvent to just any vertex.  We don''t
		* want the new edge to cross any other edges; otherwise we will create
		* intersection vertices even when the input data had no self-intersections.
		* (This is a bad thing; if the user's input data has no intersections,
		* we don't want to generate any false intersections ourselves.)
		*
		* Our eventual goal is to connect vEvent to the leftmost unprocessed
		* vertex of the combined region (the union of regUp and regLo).
		* But because of unseen vertices with all right-going edges, and also
		* new vertices which may be created by edge intersections, we don''t
		* know where that leftmost unprocessed vertex is.  In the meantime, we
		* connect vEvent to the closest vertex of either chain, and mark the region
		* as "fixUpperEdge".  This flag says to delete and reconnect this edge
		* to the next processed vertex on the boundary of the combined region.
		* Quite possibly the vertex we connected to will turn out to be the
		* closest one, in which case we won''t need to make any changes.
		*/
		var eNew;
		var eTopLeft = eBottomLeft.Onext;
		var regLo = Sweep.regionBelow(regUp);
		var eUp = regUp.eUp;
		var eLo = regLo.eUp;
		var degenerate = false;

		if( eUp.Dst !== eLo.Dst ) {
			Sweep.checkForIntersect( tess, regUp );
		}

		/* Possible new degeneracies: upper or lower edge of regUp may pass
		* through vEvent, or may coincide with new intersection vertex
		*/
		if( Geom.vertEq( eUp.Org, tess.event )) {
			tess.mesh.splice( eTopLeft.Oprev, eUp );
			regUp = Sweep.topLeftRegion( tess, regUp );
			eTopLeft = Sweep.regionBelow( regUp ).eUp;
			Sweep.finishLeftRegions( tess, Sweep.regionBelow(regUp), regLo );
			degenerate = true;
		}
		if( Geom.vertEq( eLo.Org, tess.event )) {
			tess.mesh.splice( eBottomLeft, eLo.Oprev );
			eBottomLeft = Sweep.finishLeftRegions( tess, regLo, null );
			degenerate = true;
		}
		if( degenerate ) {
			Sweep.addRightEdges( tess, regUp, eBottomLeft.Onext, eTopLeft, eTopLeft, true );
			return;
		}

		/* Non-degenerate situation -- need to add a temporary, fixable edge.
		* Connect to the closer of eLo->Org, eUp->Org.
		*/
		if( Geom.vertLeq( eLo.Org, eUp.Org )) {
			eNew = eLo.Oprev;
		} else {
			eNew = eUp;
		}
		eNew = tess.mesh.connect( eBottomLeft.Lprev, eNew );

		/* Prevent cleanup, otherwise eNew might disappear before we've even
		* had a chance to mark it as a temporary edge.
		*/
		Sweep.addRightEdges( tess, regUp, eNew, eNew.Onext, eNew.Onext, false );
		eNew.Sym.activeRegion.fixUpperEdge = true;
		Sweep.walkDirtyRegions( tess, regUp );
	}

	/* Because vertices at exactly the same location are merged together
	* before we process the sweep event, some degenerate cases can't occur.
	* However if someone eventually makes the modifications required to
	* merge features which are close together, the cases below marked
	* TOLERANCE_NONZERO will be useful.  They were debugged before the
	* code to merge identical vertices in the main loop was added.
	*/
	//#define TOLERANCE_NONZERO	FALSE

	//static void ConnectLeftDegenerate( TESStesselator *tess, ActiveRegion *regUp, TESSvertex *vEvent )
	Sweep.connectLeftDegenerate = function( tess, regUp, vEvent ) {
		/*
		* The event vertex lies exacty on an already-processed edge or vertex.
		* Adding the new vertex involves splicing it into the already-processed
		* part of the mesh.
		*/
		var e, eTopLeft, eTopRight, eLast;
		var reg;

		e = regUp.eUp;
		if( Geom.vertEq( e.Org, vEvent )) {
			/* e->Org is an unprocessed vertex - just combine them, and wait
			* for e->Org to be pulled from the queue
			*/
			assert( false /*TOLERANCE_NONZERO*/ );
			Sweep.spliceMergeVertices( tess, e, vEvent.anEdge );
			return;
		}

		if( ! Geom.vertEq( e.Dst, vEvent )) {
			/* General case -- splice vEvent into edge e which passes through it */
			tess.mesh.splitEdge( e.Sym );
			if( regUp.fixUpperEdge ) {
				/* This edge was fixable -- delete unused portion of original edge */
				tess.mesh.delete( e.Onext );
				regUp.fixUpperEdge = false;
			}
			tess.mesh.splice( vEvent.anEdge, e );
			Sweep.sweepEvent( tess, vEvent );	/* recurse */
			return;
		}

		/* vEvent coincides with e->Dst, which has already been processed.
		* Splice in the additional right-going edges.
		*/
		assert( false /*TOLERANCE_NONZERO*/ );
		regUp = Sweep.topRightRegion( regUp );
		reg = Sweep.regionBelow( regUp );
		eTopRight = reg.eUp.Sym;
		eTopLeft = eLast = eTopRight.Onext;
		if( reg.fixUpperEdge ) {
			/* Here e->Dst has only a single fixable edge going right.
			* We can delete it since now we have some real right-going edges.
			*/
			assert( eTopLeft !== eTopRight );   /* there are some left edges too */
			Sweep.deleteRegion( tess, reg );
			tess.mesh.delete( eTopRight );
			eTopRight = eTopLeft.Oprev;
		}
		tess.mesh.splice( vEvent.anEdge, eTopRight );
		if( ! Geom.edgeGoesLeft( eTopLeft )) {
			/* e->Dst had no left-going edges -- indicate this to AddRightEdges() */
			eTopLeft = null;
		}
		Sweep.addRightEdges( tess, regUp, eTopRight.Onext, eLast, eTopLeft, true );
	}


	//static void ConnectLeftVertex( TESStesselator *tess, TESSvertex *vEvent )
	Sweep.connectLeftVertex = function( tess, vEvent ) {
		/*
		* Purpose: connect a "left" vertex (one where both edges go right)
		* to the processed portion of the mesh.  Let R be the active region
		* containing vEvent, and let U and L be the upper and lower edge
		* chains of R.  There are two possibilities:
		*
		* - the normal case: split R into two regions, by connecting vEvent to
		*   the rightmost vertex of U or L lying to the left of the sweep line
		*
		* - the degenerate case: if vEvent is close enough to U or L, we
		*   merge vEvent into that edge chain.  The subcases are:
		*	- merging with the rightmost vertex of U or L
		*	- merging with the active edge of U or L
		*	- merging with an already-processed portion of U or L
		*/
		var regUp, regLo, reg;
		var eUp, eLo, eNew;
		var tmp = new ActiveRegion();

		/* assert( vEvent->anEdge->Onext->Onext == vEvent->anEdge ); */

		/* Get a pointer to the active region containing vEvent */
		tmp.eUp = vEvent.anEdge.Sym;
		/* __GL_DICTLISTKEY */ /* tessDictListSearch */
		regUp = tess.dict.search( tmp ).key;
		regLo = Sweep.regionBelow( regUp );
		if( !regLo ) {
			// This may happen if the input polygon is coplanar.
			return;
		}
		eUp = regUp.eUp;
		eLo = regLo.eUp;

		/* Try merging with U or L first */
		if( Geom.edgeSign( eUp.Dst, vEvent, eUp.Org ) === 0.0 ) {
			Sweep.connectLeftDegenerate( tess, regUp, vEvent );
			return;
		}

		/* Connect vEvent to rightmost processed vertex of either chain.
		* e->Dst is the vertex that we will connect to vEvent.
		*/
		reg = Geom.vertLeq( eLo.Dst, eUp.Dst ) ? regUp : regLo;

		if( regUp.inside || reg.fixUpperEdge) {
			if( reg === regUp ) {
				eNew = tess.mesh.connect( vEvent.anEdge.Sym, eUp.Lnext );
			} else {
				var tempHalfEdge = tess.mesh.connect( eLo.Dnext, vEvent.anEdge);
				eNew = tempHalfEdge.Sym;
			}
			if( reg.fixUpperEdge ) {
				Sweep.fixUpperEdge( tess, reg, eNew );
			} else {
				Sweep.computeWinding( tess, Sweep.addRegionBelow( tess, regUp, eNew ));
			}
			Sweep.sweepEvent( tess, vEvent );
		} else {
			/* The new vertex is in a region which does not belong to the polygon.
			* We don''t need to connect this vertex to the rest of the mesh.
			*/
			Sweep.addRightEdges( tess, regUp, vEvent.anEdge, vEvent.anEdge, null, true );
		}
	};


	//static void SweepEvent( TESStesselator *tess, TESSvertex *vEvent )
	Sweep.sweepEvent = function( tess, vEvent ) {
		/*
		* Does everything necessary when the sweep line crosses a vertex.
		* Updates the mesh and the edge dictionary.
		*/

		tess.event = vEvent;		/* for access in EdgeLeq() */
		Sweep.debugEvent( tess );

		/* Check if this vertex is the right endpoint of an edge that is
		* already in the dictionary.  In this case we don't need to waste
		* time searching for the location to insert new edges.
		*/
		var e = vEvent.anEdge;
		while( e.activeRegion === null ) {
			e = e.Onext;
			if( e == vEvent.anEdge ) {
				/* All edges go right -- not incident to any processed edges */
				Sweep.connectLeftVertex( tess, vEvent );
				return;
			}
		}

		/* Processing consists of two phases: first we "finish" all the
		* active regions where both the upper and lower edges terminate
		* at vEvent (ie. vEvent is closing off these regions).
		* We mark these faces "inside" or "outside" the polygon according
		* to their winding number, and delete the edges from the dictionary.
		* This takes care of all the left-going edges from vEvent.
		*/
		var regUp = Sweep.topLeftRegion( tess, e.activeRegion );
		assert( regUp !== null );
	//	if (regUp == NULL) longjmp(tess->env,1);
		var reg = Sweep.regionBelow( regUp );
		var eTopLeft = reg.eUp;
		var eBottomLeft = Sweep.finishLeftRegions( tess, reg, null );

		/* Next we process all the right-going edges from vEvent.  This
		* involves adding the edges to the dictionary, and creating the
		* associated "active regions" which record information about the
		* regions between adjacent dictionary edges.
		*/
		if( eBottomLeft.Onext === eTopLeft ) {
			/* No right-going edges -- add a temporary "fixable" edge */
			Sweep.connectRightVertex( tess, regUp, eBottomLeft );
		} else {
			Sweep.addRightEdges( tess, regUp, eBottomLeft.Onext, eTopLeft, eTopLeft, true );
		}
	};


	/* Make the sentinel coordinates big enough that they will never be
	* merged with real input features.
	*/

	//static void AddSentinel( TESStesselator *tess, TESSreal smin, TESSreal smax, TESSreal t )
	Sweep.addSentinel = function( tess, smin, smax, t ) {
		/*
		* We add two sentinel edges above and below all other edges,
		* to avoid special cases at the top and bottom.
		*/
		var reg = new ActiveRegion();
		var e = tess.mesh.makeEdge();
	//	if (e == NULL) longjmp(tess->env,1);

		e.Org.s = smax;
		e.Org.t = t;
		e.Dst.s = smin;
		e.Dst.t = t;
		tess.event = e.Dst;		/* initialize it */

		reg.eUp = e;
		reg.windingNumber = 0;
		reg.inside = false;
		reg.fixUpperEdge = false;
		reg.sentinel = true;
		reg.dirty = false;
		reg.nodeUp = tess.dict.insert( reg );
	//	if (reg->nodeUp == NULL) longjmp(tess->env,1);
	}


	//static void InitEdgeDict( TESStesselator *tess )
	Sweep.initEdgeDict = function( tess ) {
		/*
		* We maintain an ordering of edge intersections with the sweep line.
		* This order is maintained in a dynamic dictionary.
		*/
		tess.dict = new Dict( tess, Sweep.edgeLeq );
	//	if (tess->dict == NULL) longjmp(tess->env,1);

		var w = (tess.bmax[0] - tess.bmin[0]);
		var h = (tess.bmax[1] - tess.bmin[1]);

		var smin = tess.bmin[0] - w;
		var smax = tess.bmax[0] + w;
		var tmin = tess.bmin[1] - h;
		var tmax = tess.bmax[1] + h;

		Sweep.addSentinel( tess, smin, smax, tmin );
		Sweep.addSentinel( tess, smin, smax, tmax );
	}


	Sweep.doneEdgeDict = function( tess )
	{
		var reg;
		var fixedEdges = 0;

		while( (reg = tess.dict.min().key) !== null ) {
			/*
			* At the end of all processing, the dictionary should contain
			* only the two sentinel edges, plus at most one "fixable" edge
			* created by ConnectRightVertex().
			*/
			if( ! reg.sentinel ) {
				assert( reg.fixUpperEdge );
				assert( ++fixedEdges == 1 );
			}
			assert( reg.windingNumber == 0 );
			Sweep.deleteRegion( tess, reg );
			/*    tessMeshDelete( reg->eUp );*/
		}
	//	dictDeleteDict( &tess->alloc, tess->dict );
	}


	Sweep.removeDegenerateEdges = function( tess ) {
		/*
		* Remove zero-length edges, and contours with fewer than 3 vertices.
		*/
		var e, eNext, eLnext;
		var eHead = tess.mesh.eHead;

		/*LINTED*/
		for( e = eHead.next; e !== eHead; e = eNext ) {
			eNext = e.next;
			eLnext = e.Lnext;

			if( Geom.vertEq( e.Org, e.Dst ) && e.Lnext.Lnext !== e ) {
				/* Zero-length edge, contour has at least 3 edges */
				Sweep.spliceMergeVertices( tess, eLnext, e );	/* deletes e->Org */
				tess.mesh.delete( e ); /* e is a self-loop */
				e = eLnext;
				eLnext = e.Lnext;
			}
			if( eLnext.Lnext === e ) {
				/* Degenerate contour (one or two edges) */
				if( eLnext !== e ) {
					if( eLnext === eNext || eLnext === eNext.Sym ) { eNext = eNext.next; }
					tess.mesh.delete( eLnext );
				}
				if( e === eNext || e === eNext.Sym ) { eNext = eNext.next; }
				tess.mesh.delete( e );
			}
		}
	}

	Sweep.initPriorityQ = function( tess ) {
		/*
		* Insert all vertices into the priority queue which determines the
		* order in which vertices cross the sweep line.
		*/
		var pq;
		var v, vHead;
		var vertexCount = 0;
		
		vHead = tess.mesh.vHead;
		for( v = vHead.next; v !== vHead; v = v.next ) {
			vertexCount++;
		}
		/* Make sure there is enough space for sentinels. */
		vertexCount += 8; //MAX( 8, tess->alloc.extraVertices );
		
		pq = tess.pq = new PriorityQ( vertexCount, Geom.vertLeq );
	//	if (pq == NULL) return 0;

		vHead = tess.mesh.vHead;
		for( v = vHead.next; v !== vHead; v = v.next ) {
			v.pqHandle = pq.insert( v );
	//		if (v.pqHandle == INV_HANDLE)
	//			break;
		}

		if (v !== vHead) {
			return false;
		}

		pq.init();

		return true;
	}


	Sweep.donePriorityQ = function( tess ) {
		tess.pq = null;
	}


	Sweep.removeDegenerateFaces = function( tess, mesh ) {
		/*
		* Delete any degenerate faces with only two edges.  WalkDirtyRegions()
		* will catch almost all of these, but it won't catch degenerate faces
		* produced by splice operations on already-processed edges.
		* The two places this can happen are in FinishLeftRegions(), when
		* we splice in a "temporary" edge produced by ConnectRightVertex(),
		* and in CheckForLeftSplice(), where we splice already-processed
		* edges to ensure that our dictionary invariants are not violated
		* by numerical errors.
		*
		* In both these cases it is *very* dangerous to delete the offending
		* edge at the time, since one of the routines further up the stack
		* will sometimes be keeping a pointer to that edge.
		*/
		var f, fNext;
		var e;

		/*LINTED*/
		for( f = mesh.fHead.next; f !== mesh.fHead; f = fNext ) {
			fNext = f.next;
			e = f.anEdge;
			assert( e.Lnext !== e );

			if( e.Lnext.Lnext === e ) {
				/* A face with only two edges */
				Sweep.addWinding( e.Onext, e );
				tess.mesh.delete( e );
			}
		}
		return true;
	}

	Sweep.computeInterior = function( tess ) {
		/*
		* tessComputeInterior( tess ) computes the planar arrangement specified
		* by the given contours, and further subdivides this arrangement
		* into regions.  Each region is marked "inside" if it belongs
		* to the polygon, according to the rule given by tess->windingRule.
		* Each interior region is guaranteed be monotone.
		*/
		var v, vNext;

		/* Each vertex defines an event for our sweep line.  Start by inserting
		* all the vertices in a priority queue.  Events are processed in
		* lexicographic order, ie.
		*
		*	e1 < e2  iff  e1.x < e2.x || (e1.x == e2.x && e1.y < e2.y)
		*/
		Sweep.removeDegenerateEdges( tess );
		if ( !Sweep.initPriorityQ( tess ) ) return false; /* if error */
		Sweep.initEdgeDict( tess );

		while( (v = tess.pq.extractMin()) !== null ) {
			for( ;; ) {
				vNext = tess.pq.min();
				if( vNext === null || ! Geom.vertEq( vNext, v )) break;

				/* Merge together all vertices at exactly the same location.
				* This is more efficient than processing them one at a time,
				* simplifies the code (see ConnectLeftDegenerate), and is also
				* important for correct handling of certain degenerate cases.
				* For example, suppose there are two identical edges A and B
				* that belong to different contours (so without this code they would
				* be processed by separate sweep events).  Suppose another edge C
				* crosses A and B from above.  When A is processed, we split it
				* at its intersection point with C.  However this also splits C,
				* so when we insert B we may compute a slightly different
				* intersection point.  This might leave two edges with a small
				* gap between them.  This kind of error is especially obvious
				* when using boundary extraction (TESS_BOUNDARY_ONLY).
				*/
				vNext = tess.pq.extractMin();
				Sweep.spliceMergeVertices( tess, v.anEdge, vNext.anEdge );
			}
			Sweep.sweepEvent( tess, v );
		}

		/* Set tess->event for debugging purposes */
		tess.event = tess.dict.min().key.eUp.Org;
		Sweep.debugEvent( tess );
		Sweep.doneEdgeDict( tess );
		Sweep.donePriorityQ( tess );

		if ( !Sweep.removeDegenerateFaces( tess, tess.mesh ) ) return false;
		tess.mesh.check();

		return true;
	}


	function Tesselator() {

		/*** state needed for collecting the input data ***/
		this.mesh = null;		/* stores the input contours, and eventually
							the tessellation itself */

		/*** state needed for projecting onto the sweep plane ***/

		this.normal = [0.0, 0.0, 0.0];	/* user-specified normal (if provided) */
		this.sUnit = [0.0, 0.0, 0.0];	/* unit vector in s-direction (debugging) */
		this.tUnit = [0.0, 0.0, 0.0];	/* unit vector in t-direction (debugging) */

		this.bmin = [0.0, 0.0];
		this.bmax = [0.0, 0.0];

		/*** state needed for the line sweep ***/
		this.windingRule = Tess2.WINDING_ODD;	/* rule for determining polygon interior */

		this.dict = null;		/* edge dictionary for sweep line */
		this.pq = null;		/* priority queue of vertex events */
		this.event = null;		/* current sweep event being processed */

		this.vertexIndexCounter = 0;
		
		this.vertices = [];
		this.vertexIndices = [];
		this.vertexCount = 0;
		this.elements = [];
		this.elementCount = 0;
	};

	Tesselator.prototype = {

		dot_: function(u, v) {
			return (u[0]*v[0] + u[1]*v[1] + u[2]*v[2]);
		},

		normalize_: function( v ) {
			var len = v[0]*v[0] + v[1]*v[1] + v[2]*v[2];
			assert( len > 0.0 );
			len = Math.sqrt( len );
			v[0] /= len;
			v[1] /= len;
			v[2] /= len;
		},

		longAxis_: function( v ) {
			var i = 0;
			if( Math.abs(v[1]) > Math.abs(v[0]) ) { i = 1; }
			if( Math.abs(v[2]) > Math.abs(v[i]) ) { i = 2; }
			return i;
		},

		computeNormal_: function( norm )
		{
			var v, v1, v2;
			var c, tLen2, maxLen2;
			var maxVal = [0,0,0], minVal = [0,0,0], d1 = [0,0,0], d2 = [0,0,0], tNorm = [0,0,0];
			var maxVert = [null,null,null], minVert = [null,null,null];
			var vHead = this.mesh.vHead;
			var i;

			v = vHead.next;
			for( i = 0; i < 3; ++i ) {
				c = v.coords[i];
				minVal[i] = c;
				minVert[i] = v;
				maxVal[i] = c;
				maxVert[i] = v;
			}

			for( v = vHead.next; v !== vHead; v = v.next ) {
				for( i = 0; i < 3; ++i ) {
					c = v.coords[i];
					if( c < minVal[i] ) { minVal[i] = c; minVert[i] = v; }
					if( c > maxVal[i] ) { maxVal[i] = c; maxVert[i] = v; }
				}
			}

			/* Find two vertices separated by at least 1/sqrt(3) of the maximum
			* distance between any two vertices
			*/
			i = 0;
			if( maxVal[1] - minVal[1] > maxVal[0] - minVal[0] ) { i = 1; }
			if( maxVal[2] - minVal[2] > maxVal[i] - minVal[i] ) { i = 2; }
			if( minVal[i] >= maxVal[i] ) {
				/* All vertices are the same -- normal doesn't matter */
				norm[0] = 0; norm[1] = 0; norm[2] = 1;
				return;
			}

			/* Look for a third vertex which forms the triangle with maximum area
			* (Length of normal == twice the triangle area)
			*/
			maxLen2 = 0;
			v1 = minVert[i];
			v2 = maxVert[i];
			d1[0] = v1.coords[0] - v2.coords[0];
			d1[1] = v1.coords[1] - v2.coords[1];
			d1[2] = v1.coords[2] - v2.coords[2];
			for( v = vHead.next; v !== vHead; v = v.next ) {
				d2[0] = v.coords[0] - v2.coords[0];
				d2[1] = v.coords[1] - v2.coords[1];
				d2[2] = v.coords[2] - v2.coords[2];
				tNorm[0] = d1[1]*d2[2] - d1[2]*d2[1];
				tNorm[1] = d1[2]*d2[0] - d1[0]*d2[2];
				tNorm[2] = d1[0]*d2[1] - d1[1]*d2[0];
				tLen2 = tNorm[0]*tNorm[0] + tNorm[1]*tNorm[1] + tNorm[2]*tNorm[2];
				if( tLen2 > maxLen2 ) {
					maxLen2 = tLen2;
					norm[0] = tNorm[0];
					norm[1] = tNorm[1];
					norm[2] = tNorm[2];
				}
			}

			if( maxLen2 <= 0 ) {
				/* All points lie on a single line -- any decent normal will do */
				norm[0] = norm[1] = norm[2] = 0;
				norm[this.longAxis_(d1)] = 1;
			}
		},

		checkOrientation_: function() {
			var area;
			var f, fHead = this.mesh.fHead;
			var v, vHead = this.mesh.vHead;
			var e;

			/* When we compute the normal automatically, we choose the orientation
			* so that the the sum of the signed areas of all contours is non-negative.
			*/
			area = 0;
			for( f = fHead.next; f !== fHead; f = f.next ) {
				e = f.anEdge;
				if( e.winding <= 0 ) continue;
				do {
					area += (e.Org.s - e.Dst.s) * (e.Org.t + e.Dst.t);
					e = e.Lnext;
				} while( e !== f.anEdge );
			}
			if( area < 0 ) {
				/* Reverse the orientation by flipping all the t-coordinates */
				for( v = vHead.next; v !== vHead; v = v.next ) {
					v.t = - v.t;
				}
				this.tUnit[0] = - this.tUnit[0];
				this.tUnit[1] = - this.tUnit[1];
				this.tUnit[2] = - this.tUnit[2];
			}
		},

	/*	#ifdef FOR_TRITE_TEST_PROGRAM
		#include <stdlib.h>
		extern int RandomSweep;
		#define S_UNIT_X	(RandomSweep ? (2*drand48()-1) : 1.0)
		#define S_UNIT_Y	(RandomSweep ? (2*drand48()-1) : 0.0)
		#else
		#if defined(SLANTED_SWEEP) */
		/* The "feature merging" is not intended to be complete.  There are
		* special cases where edges are nearly parallel to the sweep line
		* which are not implemented.  The algorithm should still behave
		* robustly (ie. produce a reasonable tesselation) in the presence
		* of such edges, however it may miss features which could have been
		* merged.  We could minimize this effect by choosing the sweep line
		* direction to be something unusual (ie. not parallel to one of the
		* coordinate axes).
		*/
	/*	#define S_UNIT_X	(TESSreal)0.50941539564955385	// Pre-normalized
		#define S_UNIT_Y	(TESSreal)0.86052074622010633
		#else
		#define S_UNIT_X	(TESSreal)1.0
		#define S_UNIT_Y	(TESSreal)0.0
		#endif
		#endif*/

		/* Determine the polygon normal and project vertices onto the plane
		* of the polygon.
		*/
		projectPolygon_: function() {
			var v, vHead = this.mesh.vHead;
			var norm = [0,0,0];
			var sUnit, tUnit;
			var i, first, computedNormal = false;

			norm[0] = this.normal[0];
			norm[1] = this.normal[1];
			norm[2] = this.normal[2];
			if( norm[0] === 0.0 && norm[1] === 0.0 && norm[2] === 0.0 ) {
				this.computeNormal_( norm );
				computedNormal = true;
			}
			sUnit = this.sUnit;
			tUnit = this.tUnit;
			i = this.longAxis_( norm );

	/*	#if defined(FOR_TRITE_TEST_PROGRAM) || defined(TRUE_PROJECT)
			// Choose the initial sUnit vector to be approximately perpendicular
			// to the normal.
			
			Normalize( norm );

			sUnit[i] = 0;
			sUnit[(i+1)%3] = S_UNIT_X;
			sUnit[(i+2)%3] = S_UNIT_Y;

			// Now make it exactly perpendicular 
			w = Dot( sUnit, norm );
			sUnit[0] -= w * norm[0];
			sUnit[1] -= w * norm[1];
			sUnit[2] -= w * norm[2];
			Normalize( sUnit );

			// Choose tUnit so that (sUnit,tUnit,norm) form a right-handed frame 
			tUnit[0] = norm[1]*sUnit[2] - norm[2]*sUnit[1];
			tUnit[1] = norm[2]*sUnit[0] - norm[0]*sUnit[2];
			tUnit[2] = norm[0]*sUnit[1] - norm[1]*sUnit[0];
			Normalize( tUnit );
		#else*/
			/* Project perpendicular to a coordinate axis -- better numerically */
			sUnit[i] = 0;
			sUnit[(i+1)%3] = 1.0;
			sUnit[(i+2)%3] = 0.0;

			tUnit[i] = 0;
			tUnit[(i+1)%3] = 0.0;
			tUnit[(i+2)%3] = (norm[i] > 0) ? 1.0 : -1.0;
	//	#endif

			/* Project the vertices onto the sweep plane */
			for( v = vHead.next; v !== vHead; v = v.next ) {
				v.s = this.dot_( v.coords, sUnit );
				v.t = this.dot_( v.coords, tUnit );
			}
			if( computedNormal ) {
				this.checkOrientation_();
			}

			/* Compute ST bounds. */
			first = true;
			for( v = vHead.next; v !== vHead; v = v.next ) {
				if (first) {
					this.bmin[0] = this.bmax[0] = v.s;
					this.bmin[1] = this.bmax[1] = v.t;
					first = false;
				} else {
					if (v.s < this.bmin[0]) this.bmin[0] = v.s;
					if (v.s > this.bmax[0]) this.bmax[0] = v.s;
					if (v.t < this.bmin[1]) this.bmin[1] = v.t;
					if (v.t > this.bmax[1]) this.bmax[1] = v.t;
				}
			}
		},

		addWinding_: function(eDst,eSrc) {
			eDst.winding += eSrc.winding;
			eDst.Sym.winding += eSrc.Sym.winding;
		},
		
		/* tessMeshTessellateMonoRegion( face ) tessellates a monotone region
		* (what else would it do??)  The region must consist of a single
		* loop of half-edges (see mesh.h) oriented CCW.  "Monotone" in this
		* case means that any vertical line intersects the interior of the
		* region in a single interval.  
		*
		* Tessellation consists of adding interior edges (actually pairs of
		* half-edges), to split the region into non-overlapping triangles.
		*
		* The basic idea is explained in Preparata and Shamos (which I don''t
		* have handy right now), although their implementation is more
		* complicated than this one.  The are two edge chains, an upper chain
		* and a lower chain.  We process all vertices from both chains in order,
		* from right to left.
		*
		* The algorithm ensures that the following invariant holds after each
		* vertex is processed: the untessellated region consists of two
		* chains, where one chain (say the upper) is a single edge, and
		* the other chain is concave.  The left vertex of the single edge
		* is always to the left of all vertices in the concave chain.
		*
		* Each step consists of adding the rightmost unprocessed vertex to one
		* of the two chains, and forming a fan of triangles from the rightmost
		* of two chain endpoints.  Determining whether we can add each triangle
		* to the fan is a simple orientation test.  By making the fan as large
		* as possible, we restore the invariant (check it yourself).
		*/
	//	int tessMeshTessellateMonoRegion( TESSmesh *mesh, TESSface *face )
		tessellateMonoRegion_: function( mesh, face ) {
			var up, lo;

			/* All edges are oriented CCW around the boundary of the region.
			* First, find the half-edge whose origin vertex is rightmost.
			* Since the sweep goes from left to right, face->anEdge should
			* be close to the edge we want.
			*/
			up = face.anEdge;
			assert( up.Lnext !== up && up.Lnext.Lnext !== up );

			for( ; Geom.vertLeq( up.Dst, up.Org ); up = up.Lprev )
				;
			for( ; Geom.vertLeq( up.Org, up.Dst ); up = up.Lnext )
				;
			lo = up.Lprev;

			while( up.Lnext !== lo ) {
				if( Geom.vertLeq( up.Dst, lo.Org )) {
					/* up->Dst is on the left.  It is safe to form triangles from lo->Org.
					* The EdgeGoesLeft test guarantees progress even when some triangles
					* are CW, given that the upper and lower chains are truly monotone.
					*/
					while( lo.Lnext !== up && (Geom.edgeGoesLeft( lo.Lnext )
						|| Geom.edgeSign( lo.Org, lo.Dst, lo.Lnext.Dst ) <= 0.0 )) {
							var tempHalfEdge = mesh.connect( lo.Lnext, lo );
							//if (tempHalfEdge == NULL) return 0;
							lo = tempHalfEdge.Sym;
					}
					lo = lo.Lprev;
				} else {
					/* lo->Org is on the left.  We can make CCW triangles from up->Dst. */
					while( lo.Lnext != up && (Geom.edgeGoesRight( up.Lprev )
						|| Geom.edgeSign( up.Dst, up.Org, up.Lprev.Org ) >= 0.0 )) {
							var tempHalfEdge = mesh.connect( up, up.Lprev );
							//if (tempHalfEdge == NULL) return 0;
							up = tempHalfEdge.Sym;
					}
					up = up.Lnext;
				}
			}

			/* Now lo->Org == up->Dst == the leftmost vertex.  The remaining region
			* can be tessellated in a fan from this leftmost vertex.
			*/
			assert( lo.Lnext !== up );
			while( lo.Lnext.Lnext !== up ) {
				var tempHalfEdge = mesh.connect( lo.Lnext, lo );
				//if (tempHalfEdge == NULL) return 0;
				lo = tempHalfEdge.Sym;
			}

			return true;
		},


		/* tessMeshTessellateInterior( mesh ) tessellates each region of
		* the mesh which is marked "inside" the polygon.  Each such region
		* must be monotone.
		*/
		//int tessMeshTessellateInterior( TESSmesh *mesh )
		tessellateInterior_: function( mesh ) {
			var f, next;

			/*LINTED*/
			for( f = mesh.fHead.next; f !== mesh.fHead; f = next ) {
				/* Make sure we don''t try to tessellate the new triangles. */
				next = f.next;
				if( f.inside ) {
					if ( !this.tessellateMonoRegion_( mesh, f ) ) return false;
				}
			}

			return true;
		},


		/* tessMeshDiscardExterior( mesh ) zaps (ie. sets to NULL) all faces
		* which are not marked "inside" the polygon.  Since further mesh operations
		* on NULL faces are not allowed, the main purpose is to clean up the
		* mesh so that exterior loops are not represented in the data structure.
		*/
		//void tessMeshDiscardExterior( TESSmesh *mesh )
		discardExterior_: function( mesh ) {
			var f, next;

			/*LINTED*/
			for( f = mesh.fHead.next; f !== mesh.fHead; f = next ) {
				/* Since f will be destroyed, save its next pointer. */
				next = f.next;
				if( ! f.inside ) {
					mesh.zapFace( f );
				}
			}
		},

		/* tessMeshSetWindingNumber( mesh, value, keepOnlyBoundary ) resets the
		* winding numbers on all edges so that regions marked "inside" the
		* polygon have a winding number of "value", and regions outside
		* have a winding number of 0.
		*
		* If keepOnlyBoundary is TRUE, it also deletes all edges which do not
		* separate an interior region from an exterior one.
		*/
	//	int tessMeshSetWindingNumber( TESSmesh *mesh, int value, int keepOnlyBoundary )
		setWindingNumber_: function( mesh, value, keepOnlyBoundary ) {
			var e, eNext;

			for( e = mesh.eHead.next; e !== mesh.eHead; e = eNext ) {
				eNext = e.next;
				if( e.Rface.inside !== e.Lface.inside ) {

					/* This is a boundary edge (one side is interior, one is exterior). */
					e.winding = (e.Lface.inside) ? value : -value;
				} else {

					/* Both regions are interior, or both are exterior. */
					if( ! keepOnlyBoundary ) {
						e.winding = 0;
					} else {
						mesh.delete( e );
					}
				}
			}
		},

		getNeighbourFace_: function(edge)
		{
			if (!edge.Rface)
				return -1;
			if (!edge.Rface.inside)
				return -1;
			return edge.Rface.n;
		},

		outputPolymesh_: function( mesh, elementType, polySize, vertexSize ) {
			var v;
			var f;
			var edge;
			var maxFaceCount = 0;
			var maxVertexCount = 0;
			var faceVerts, i;
			var elements = 0;
			var vert;

			// Assume that the input data is triangles now.
			// Try to merge as many polygons as possible
			if (polySize > 3)
			{
				mesh.mergeConvexFaces( polySize );
			}

			// Mark unused
			for ( v = mesh.vHead.next; v !== mesh.vHead; v = v.next )
				v.n = -1;

			// Create unique IDs for all vertices and faces.
			for ( f = mesh.fHead.next; f != mesh.fHead; f = f.next )
			{
				f.n = -1;
				if( !f.inside ) continue;

				edge = f.anEdge;
				faceVerts = 0;
				do
				{
					v = edge.Org;
					if ( v.n === -1 )
					{
						v.n = maxVertexCount;
						maxVertexCount++;
					}
					faceVerts++;
					edge = edge.Lnext;
				}
				while (edge !== f.anEdge);
				
				assert( faceVerts <= polySize );

				f.n = maxFaceCount;
				++maxFaceCount;
			}

			this.elementCount = maxFaceCount;
			if (elementType == Tess2.CONNECTED_POLYGONS)
				maxFaceCount *= 2;
	/*		tess.elements = (TESSindex*)tess->alloc.memalloc( tess->alloc.userData,
															  sizeof(TESSindex) * maxFaceCount * polySize );
			if (!tess->elements)
			{
				tess->outOfMemory = 1;
				return;
			}*/
			this.elements = [];
			this.elements.length = maxFaceCount * polySize;
			
			this.vertexCount = maxVertexCount;
	/*		tess->vertices = (TESSreal*)tess->alloc.memalloc( tess->alloc.userData,
															 sizeof(TESSreal) * tess->vertexCount * vertexSize );
			if (!tess->vertices)
			{
				tess->outOfMemory = 1;
				return;
			}*/
			this.vertices = [];
			this.vertices.length = maxVertexCount * vertexSize;

	/*		tess->vertexIndices = (TESSindex*)tess->alloc.memalloc( tess->alloc.userData,
																    sizeof(TESSindex) * tess->vertexCount );
			if (!tess->vertexIndices)
			{
				tess->outOfMemory = 1;
				return;
			}*/
			this.vertexIndices = [];
			this.vertexIndices.length = maxVertexCount;

			
			// Output vertices.
			for ( v = mesh.vHead.next; v !== mesh.vHead; v = v.next )
			{
				if ( v.n != -1 )
				{
					// Store coordinate
					var idx = v.n * vertexSize;
					this.vertices[idx+0] = v.coords[0];
					this.vertices[idx+1] = v.coords[1];
					if ( vertexSize > 2 )
						this.vertices[idx+2] = v.coords[2];
					// Store vertex index.
					this.vertexIndices[v.n] = v.idx;
				}
			}

			// Output indices.
			var nel = 0;
			for ( f = mesh.fHead.next; f !== mesh.fHead; f = f.next )
			{
				if ( !f.inside ) continue;
				
				// Store polygon
				edge = f.anEdge;
				faceVerts = 0;
				do
				{
					v = edge.Org;
					this.elements[nel++] = v.n;
					faceVerts++;
					edge = edge.Lnext;
				}
				while (edge !== f.anEdge);
				// Fill unused.
				for (i = faceVerts; i < polySize; ++i)
					this.elements[nel++] = -1;

				// Store polygon connectivity
				if ( elementType == Tess2.CONNECTED_POLYGONS )
				{
					edge = f.anEdge;
					do
					{
						this.elements[nel++] = this.getNeighbourFace_( edge );
						edge = edge.Lnext;
					}
					while (edge !== f.anEdge);
					// Fill unused.
					for (i = faceVerts; i < polySize; ++i)
						this.elements[nel++] = -1;
				}
			}
		},

	//	void OutputContours( TESStesselator *tess, TESSmesh *mesh, int vertexSize )
		outputContours_: function( mesh, vertexSize ) {
			var f;
			var edge;
			var start;
			var verts;
			var elements;
			var vertInds;
			var startVert = 0;
			var vertCount = 0;

			this.vertexCount = 0;
			this.elementCount = 0;

			for ( f = mesh.fHead.next; f !== mesh.fHead; f = f.next )
			{
				if ( !f.inside ) continue;

				start = edge = f.anEdge;
				do
				{
					this.vertexCount++;
					edge = edge.Lnext;
				}
				while ( edge !== start );

				this.elementCount++;
			}

	/*		tess->elements = (TESSindex*)tess->alloc.memalloc( tess->alloc.userData,
															  sizeof(TESSindex) * tess->elementCount * 2 );
			if (!tess->elements)
			{
				tess->outOfMemory = 1;
				return;
			}*/
			this.elements = [];
			this.elements.length = this.elementCount * 2;
			
	/*		tess->vertices = (TESSreal*)tess->alloc.memalloc( tess->alloc.userData,
															  sizeof(TESSreal) * tess->vertexCount * vertexSize );
			if (!tess->vertices)
			{
				tess->outOfMemory = 1;
				return;
			}*/
			this.vertices = [];
			this.vertices.length = this.vertexCount * vertexSize;

	/*		tess->vertexIndices = (TESSindex*)tess->alloc.memalloc( tess->alloc.userData,
																    sizeof(TESSindex) * tess->vertexCount );
			if (!tess->vertexIndices)
			{
				tess->outOfMemory = 1;
				return;
			}*/
			this.vertexIndices = [];
			this.vertexIndices.length = this.vertexCount;

			var nv = 0;
			var nvi = 0;
			var nel = 0;
			startVert = 0;

			for ( f = mesh.fHead.next; f !== mesh.fHead; f = f.next )
			{
				if ( !f.inside ) continue;

				vertCount = 0;
				start = edge = f.anEdge;
				do
				{
					this.vertices[nv++] = edge.Org.coords[0];
					this.vertices[nv++] = edge.Org.coords[1];
					if ( vertexSize > 2 )
						this.vertices[nv++] = edge.Org.coords[2];
					this.vertexIndices[nvi++] = edge.Org.idx;
					vertCount++;
					edge = edge.Lnext;
				}
				while ( edge !== start );

				this.elements[nel++] = startVert;
				this.elements[nel++] = vertCount;

				startVert += vertCount;
			}
		},

		addContour: function( size, vertices )
		{
			var e;
			var i;

			if ( this.mesh === null )
			  	this.mesh = new TESSmesh();
	/*	 	if ( tess->mesh == NULL ) {
				tess->outOfMemory = 1;
				return;
			}*/

			if ( size < 2 )
				size = 2;
			if ( size > 3 )
				size = 3;

			e = null;

			for( i = 0; i < vertices.length; i += size )
			{
				if( e == null ) {
					/* Make a self-loop (one vertex, one edge). */
					e = this.mesh.makeEdge();
	/*				if ( e == NULL ) {
						tess->outOfMemory = 1;
						return;
					}*/
					this.mesh.splice( e, e.Sym );
				} else {
					/* Create a new vertex and edge which immediately follow e
					* in the ordering around the left face.
					*/
					this.mesh.splitEdge( e );
					e = e.Lnext;
				}

				/* The new vertex is now e->Org. */
				e.Org.coords[0] = vertices[i+0];
				e.Org.coords[1] = vertices[i+1];
				if ( size > 2 )
					e.Org.coords[2] = vertices[i+2];
				else
					e.Org.coords[2] = 0.0;
				/* Store the insertion number so that the vertex can be later recognized. */
				e.Org.idx = this.vertexIndexCounter++;

				/* The winding of an edge says how the winding number changes as we
				* cross from the edge''s right face to its left face.  We add the
				* vertices in such an order that a CCW contour will add +1 to
				* the winding number of the region inside the contour.
				*/
				e.winding = 1;
				e.Sym.winding = -1;
			}
		},

	//	int tessTesselate( TESStesselator *tess, int windingRule, int elementType, int polySize, int vertexSize, const TESSreal* normal )
		tesselate: function( windingRule, elementType, polySize, vertexSize, normal ) {
			this.vertices = [];
			this.elements = [];
			this.vertexIndices = [];

			this.vertexIndexCounter = 0;
			
			if (normal)
			{
				this.normal[0] = normal[0];
				this.normal[1] = normal[1];
				this.normal[2] = normal[2];
			}

			this.windingRule = windingRule;

			if (vertexSize < 2)
				vertexSize = 2;
			if (vertexSize > 3)
				vertexSize = 3;

	/*		if (setjmp(tess->env) != 0) { 
				// come back here if out of memory
				return 0;
			}*/

			if (!this.mesh)
			{
				return false;
			}

			/* Determine the polygon normal and project vertices onto the plane
			* of the polygon.
			*/
			this.projectPolygon_();

			/* tessComputeInterior( tess ) computes the planar arrangement specified
			* by the given contours, and further subdivides this arrangement
			* into regions.  Each region is marked "inside" if it belongs
			* to the polygon, according to the rule given by tess->windingRule.
			* Each interior region is guaranteed be monotone.
			*/
			Sweep.computeInterior( this );

			var mesh = this.mesh;

			/* If the user wants only the boundary contours, we throw away all edges
			* except those which separate the interior from the exterior.
			* Otherwise we tessellate all the regions marked "inside".
			*/
			if (elementType == Tess2.BOUNDARY_CONTOURS) {
				this.setWindingNumber_( mesh, 1, true );
			} else {
				this.tessellateInterior_( mesh ); 
			}
	//		if (rc == 0) longjmp(tess->env,1);  /* could've used a label */

			mesh.check();

			if (elementType == Tess2.BOUNDARY_CONTOURS) {
				this.outputContours_( mesh, vertexSize );     /* output contours */
			}
			else
			{
				this.outputPolymesh_( mesh, elementType, polySize, vertexSize );     /* output polygons */
			}

//			tess.mesh = null;

			return true;
		}
	};

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createShaders", function() { return createShaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyShader", function() { return applyShader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCloudShaders", function() { return createCloudShaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyCloudShader", function() { return applyCloudShader; });
/* harmony import */ var _shader_vert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _shader_frag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73);
/* harmony import */ var _shader_cloud_vert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74);
/* harmony import */ var _shader_cloud_frag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);






const _shaders = Symbol('shaders');

function createShaders(renderer) {
  renderer[_shaders] = [];

  for (let i = 0; i < 16; i++) {
    const defines = [];
    const hasTexture = !!(i & 0x1);
    const hasFilter = !!(i & 0x2);
    const hasGradient = !!(i & 0x4);
    const hasGlobalTransform = !!(i & 0x8);
    if (hasTexture) defines.push('#define TEXTURE 1');
    if (hasFilter) defines.push('#define FILTER 1');
    if (hasGradient) defines.push('#define GRADIENT 1');
    if (hasGlobalTransform) defines.push('#define GLOBALTRANSFORM 1');
    const prefix = `${defines.join('\n')}\n`;
    const samplerDef = [];

    if (hasTexture) {
      samplerDef.push('uniform sampler2D u_texSampler;');
    } // renderer.createProgram(prefix + samplerDef.join('\n') + fragShader, prefix + vertShader);


    renderer[_shaders][i] = [prefix + samplerDef.join('\n') + _shader_frag__WEBPACK_IMPORTED_MODULE_1__["default"], prefix + _shader_vert__WEBPACK_IMPORTED_MODULE_0__["default"]];
  }
}
function applyShader(renderer, {
  hasTexture = false,
  hasFilter = false,
  hasGradient = false,
  hasGlobalTransform = false
} = {}) {
  const idx = hasTexture | hasFilter << 1 | hasGradient << 2 | hasGlobalTransform << 3;
  let program = renderer[_shaders][idx];

  if (Array.isArray(program)) {
    program = renderer.createProgram(...program);
    renderer[_shaders][idx] = program;
  }

  if (renderer.program !== program) {
    renderer.useProgram(program, {
      a_color: {
        type: 'UNSIGNED_BYTE',
        normalize: true
      }
    });
  }
}
const cloudShaders = [];
function createCloudShaders(renderer) {
  for (let i = 0; i < 64; i++) {
    const defines = [];
    const hasTexture = !!(i & 0x1);
    const hasFilter = !!(i & 0x2);
    const hasGradient = !!(i & 0x4);
    const hasGlobalTransform = !!(i & 0x8);
    const hasCloudColor = !!(i & 0x10);
    const hasCloudFilter = !!(i & 0x20);
    if (hasTexture) defines.push('#define TEXTURE 1');
    if (hasFilter) defines.push('#define FILTER 1');
    if (hasGradient) defines.push('#define GRADIENT 1');
    if (hasGlobalTransform) defines.push('#define GLOBALTRANSFORM 1');
    if (hasCloudColor) defines.push('#define CLOUDCOLOR 1');
    if (hasCloudFilter) defines.push('#define CLOUDFILTER 1');
    const prefix = `${defines.join('\n')}\n`;
    const samplerDef = [];

    if (hasTexture) {
      samplerDef.push('uniform sampler2D u_texSampler;');

      for (let j = 0; j < 12; j++) {
        samplerDef.push(`uniform sampler2D u_texFrame${j};`);
      }
    }

    cloudShaders[i] = [prefix + samplerDef.join('\n') + _shader_cloud_frag__WEBPACK_IMPORTED_MODULE_3__["default"], prefix + _shader_cloud_vert__WEBPACK_IMPORTED_MODULE_2__["default"]]; // renderer.createProgram(prefix + samplerDef.join('\n') + fragShaderCloud, prefix + vertShaderCloud);
  }
}
function applyCloudShader(renderer, {
  hasTexture = false,
  hasFilter = false,
  hasGradient = false,
  hasGlobalTransform = false,
  hasCloudColor = false,
  hasCloudFilter = false
} = {}) {
  const idx = hasTexture | hasFilter << 1 | hasGradient << 2 | hasGlobalTransform << 3 | hasCloudColor << 4 | hasCloudFilter << 5;
  let program = cloudShaders[idx];

  if (Array.isArray(program)) {
    program = renderer.createProgram(...program);
    cloudShaders[idx] = program;
  }

  if (renderer.program !== program) {
    renderer.useProgram(program, {
      a_color: {
        type: 'UNSIGNED_BYTE',
        normalize: true
      },
      a_fillCloudColor: {
        type: 'UNSIGNED_BYTE',
        normalize: true
      },
      a_strokeCloudColor: {
        type: 'UNSIGNED_BYTE',
        normalize: true
      }
    });
  }
}

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("attribute vec3 a_vertexPosition;\nattribute vec4 a_color;\nvarying vec4 vColor;\nvarying float flagBackground;\n\n#ifdef TEXTURE\nattribute vec3 a_vertexTextureCoord;\nvarying vec3 vTextureCoord;\nattribute vec4 a_sourceRect;\nvarying vec4 vSourceRect;\n#endif\n\n#ifdef GRADIENT\nuniform float u_radialGradientVector[6];\nvarying vec3 vGradientVector1;\nvarying vec3 vGradientVector2;\n#endif\n\n#ifdef GLOBALTRANSFORM\nuniform float u_globalTransform[8];\n\nvoid transformPoint(inout vec2 p) {\n  vec3 m0 = vec3(u_globalTransform[0], u_globalTransform[2], u_globalTransform[5]);\n  vec3 m1 = vec3(u_globalTransform[1], u_globalTransform[4], u_globalTransform[6]);\n  float w = u_globalTransform[3];\n  float h = u_globalTransform[7];\n  float x = p.x;\n  float y = p.y;\n  x = (x + 1.0) * 0.5 * w;\n  y = (1.0 - y) * 0.5 * h;\n  p.x = x * m0.x + y * m0.y + m0.z;\n  p.y = x * m1.x + y * m1.y + m1.z;\n  p.x = 2.0 * (p.x / w - 0.5);\n  p.y = 2.0 * (0.5 - p.y / h);\n}\n#endif\n\nvoid main() {\n  gl_PointSize = 1.0;\n  gl_Position = vec4(a_vertexPosition.xy, 1.0, 1.0);\n  \n#ifdef GRADIENT\n  vGradientVector1 = vec3(u_radialGradientVector[0], u_radialGradientVector[1], u_radialGradientVector[2]);\n  vGradientVector2 = vec3(u_radialGradientVector[3], u_radialGradientVector[4], u_radialGradientVector[5]);\n#endif\n\n#ifdef GLOBALTRANSFORM\n  vec2 xy = a_vertexPosition.xy;\n  transformPoint(xy);\n  gl_Position = vec4(xy, 1.0, 1.0);\n#ifdef GRADIENT\n  vec2 vg1 = vGradientVector1.xy;\n  vec2 vg2 = vGradientVector2.xy;\n  float h = u_globalTransform[7];\n  float y1 = h - vg1.y;\n  float y2 = h - vg2.y;\n\n  vGradientVector1.x = vg1.x * u_globalTransform[0] + y1 * u_globalTransform[2] + u_globalTransform[5];\n  vGradientVector1.y = h - (vg1.x * u_globalTransform[1] + y1 * u_globalTransform[4] + u_globalTransform[6]);\n\n  vGradientVector2.x = vg2.x * u_globalTransform[0] + y2 * u_globalTransform[2] + u_globalTransform[5];\n  vGradientVector2.y = h - (vg2.x * u_globalTransform[1] + y2 * u_globalTransform[4] + u_globalTransform[6]);\n#endif\n#endif\n  \n  flagBackground = a_vertexPosition.z;\n  vColor = a_color;\n\n#ifdef TEXTURE\n  vTextureCoord = a_vertexTextureCoord;\n  vSourceRect = a_sourceRect;\n#endif\n}");

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision mediump float;\n\nvarying vec4 vColor;\nvarying float flagBackground;\n\n#ifdef TEXTURE\nvarying vec3 vTextureCoord;\nvarying vec4 vSourceRect;\n#endif\n\n#ifdef FILTER\nuniform int u_filterFlag;\nuniform float u_colorMatrix[20];\n#endif\n\n#ifdef GRADIENT\nvarying vec3 vGradientVector1;\nvarying vec3 vGradientVector2;\nuniform float u_colorSteps[40];\nuniform int u_gradientType;\n// uniform float u_radialGradientVector[6];\n\nvoid gradient(inout vec4 color, vec3 gv1, vec3 gv2, float colorSteps[40]) {\n  float t;\n  // center circle radius\n  float cr = gv1.z;\n  // focal circle radius\n  float fr = gv2.z;\n\n  if(cr > 0.0 || fr > 0.0) {\n    // radial gradient\n    vec2 center = gv1.xy;\n    vec2 focal = gv2.xy;\n    float x = focal.x - gl_FragCoord.x;\n    float y = focal.y - gl_FragCoord.y;\n    float dx = focal.x - center.x;\n    float dy = focal.y - center.y;\n    float dr = cr - fr;\n    float a = dx * dx + dy * dy - dr * dr;\n    float b = -2.0 * (y * dy + x * dx + fr * dr);\n    float c = x * x + y * y - fr * fr;\n    t = 1.0 - 0.5 * (1.0 / a) * (-b + sqrt(b * b - 4.0 * a * c));\n  } else {\n    // linear gradient\n    vec2 v1 = gl_FragCoord.xy - gv1.xy;\n    vec2 v2 = gv2.xy - gv1.xy;\n    t = (v1.x * v2.x + v1.y * v2.y) / (v2.x * v2.x + v2.y * v2.y);\n  }\n\n  vec4 colors[8];\n  colors[0] = vec4(colorSteps[1], colorSteps[2], colorSteps[3], colorSteps[4]);\n  colors[1] = vec4(colorSteps[6], colorSteps[7], colorSteps[8], colorSteps[9]);\n  colors[2] = vec4(colorSteps[11], colorSteps[12], colorSteps[13], colorSteps[14]);\n  colors[3] = vec4(colorSteps[16], colorSteps[17], colorSteps[18], colorSteps[19]);\n  colors[4] = vec4(colorSteps[21], colorSteps[22], colorSteps[23], colorSteps[24]);\n  colors[5] = vec4(colorSteps[26], colorSteps[27], colorSteps[28], colorSteps[29]);\n  colors[6] = vec4(colorSteps[31], colorSteps[32], colorSteps[33], colorSteps[34]);\n  colors[7] = vec4(colorSteps[36], colorSteps[37], colorSteps[38], colorSteps[39]);\n  \n  float steps[8];\n  steps[0] = colorSteps[0];\n  steps[1] = colorSteps[5];\n  steps[2] = colorSteps[10];\n  steps[3] = colorSteps[15];\n  steps[4] = colorSteps[20];\n  steps[5] = colorSteps[25];\n  steps[6] = colorSteps[30];\n  steps[7] = colorSteps[35];\n\n  color = colors[0];\n  for (int i = 1; i < 8; i++) {\n    if (steps[i] < 0.0 || steps[i] > 1.0) {\n      break;\n    }\n    if(steps[i] == steps[i - 1]) {\n      color = colors[i];\n    } else {\n      color = mix(color, colors[i], clamp((t - steps[i - 1]) / (steps[i] - steps[i - 1]), 0.0, 1.0));\n    }\n    if (steps[i] >= t) {\n      break;\n    }\n  }\n}\n#endif\n\n#ifdef FILTER\nvoid transformColor(inout vec4 color, in float colorMatrix[20]) {\n  float r = color.r, g = color.g, b = color.b, a = color.a;\n  color[0] = colorMatrix[0] * r + colorMatrix[1] * g + colorMatrix[2] * b + colorMatrix[3] * a + colorMatrix[4];\n  color[1] = colorMatrix[5] * r + colorMatrix[6] * g + colorMatrix[7] * b + colorMatrix[8] * a + colorMatrix[9];\n  color[2] = colorMatrix[10] * r + colorMatrix[11] * g + colorMatrix[12] * b + colorMatrix[13] * a + colorMatrix[14];\n  color[3] = colorMatrix[15] * r + colorMatrix[16] * g + colorMatrix[17] * b + colorMatrix[18] * a + colorMatrix[19];\n}\n#endif\n\nvoid main() {\n  vec4 color = vColor;\n  float opacity = abs(flagBackground);\n\n#ifdef GRADIENT\n  if(u_gradientType > 0 && flagBackground > 0.0 || u_gradientType == 0 && flagBackground <= 0.0) {\n    gradient(color, vGradientVector1, vGradientVector2, u_colorSteps);\n  }\n#endif\n\n  if(opacity < 1.0) {\n    color.a *= opacity;\n  }\n\n#ifdef TEXTURE\n  if(flagBackground > 0.0) {\n    vec3 texCoord = vTextureCoord;\n\n    if(texCoord.z == 1.0) {\n      texCoord = fract(texCoord);\n    }\n\n    if(texCoord.x <= 1.0 && texCoord.x >= 0.0\n      && texCoord.y <= 1.0 && texCoord.y >= 0.0) {\n      if(vSourceRect.z > 0.0) {\n        texCoord.x = vSourceRect.x + texCoord.x * vSourceRect.z;\n        texCoord.y = 1.0 - (vSourceRect.y + (1.0 - texCoord.y) * vSourceRect.w);\n      }\n      vec4 texColor = texture2D(u_texSampler, texCoord.xy);\n      float alpha = texColor.a;\n      if(opacity < 1.0) {\n        texColor.a *= opacity;\n        alpha *= mix(0.465, 1.0, opacity);\n      }\n      // color = mix(color, texColor, texColor.a);\n      color.rgb = mix(texColor.rgb, color.rgb, 1.0 - alpha);\n      color.a = texColor.a + (1.0 - texColor.a) * color.a;\n    }\n  }\n#endif\n\n#ifdef FILTER\n  if(u_filterFlag > 0) {\n    transformColor(color, u_colorMatrix);\n  }\n#endif\n\n  gl_FragColor = color;\n}");

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("attribute vec3 a_vertexPosition;\nattribute vec4 a_color;\nvarying vec4 vColor;\nvarying float flagBackground;\nattribute vec4 a_transform0;\nattribute vec4 a_transform1;\n\n#ifdef TEXTURE\nattribute vec3 a_vertexTextureCoord;\nvarying vec3 vTextureCoord;\nattribute float a_frameIndex;\nvarying float frameIndex;\nattribute vec4 a_sourceRect;\nvarying vec4 vSourceRect;\n#endif\n\n#ifdef CLOUDFILTER\nattribute vec4 a_colorCloud0;\nattribute vec4 a_colorCloud1;\nattribute vec4 a_colorCloud2;\nattribute vec4 a_colorCloud3;\nattribute vec4 a_colorCloud4;\nvarying vec4 colorCloud0;\nvarying vec4 colorCloud1;\nvarying vec4 colorCloud2;\nvarying vec4 colorCloud3;\nvarying vec4 colorCloud4;\n#endif\n\n#ifdef CLOUDCOLOR\nattribute vec4 a_fillCloudColor;\nattribute vec4 a_strokeCloudColor;\n#endif\n\n#ifdef GRADIENT\nuniform float u_radialGradientVector[6];\nvarying vec3 vGradientVector1;\nvarying vec3 vGradientVector2;\n#endif\n\n#ifdef GLOBALTRANSFORM\nuniform float u_globalTransform[8];\n#endif\n\nvoid transformPoint(inout vec2 p, vec3 m0, vec3 m1, float w, float h) {\n  float x = p.x;\n  float y = p.y;\n  x = (x + 1.0) * 0.5 * w;\n  y = (1.0 - y) * 0.5 * h;\n  p.x = x * m0.x + y * m0.y + m0.z;\n  p.y = x * m1.x + y * m1.y + m1.z;\n  p.x = 2.0 * (p.x / w - 0.5);\n  p.y = 2.0 * (0.5 - p.y / h);\n}\n\nvoid main() {\n  gl_PointSize = 1.0;\n\n  vec3 m0 = vec3(a_transform0.x, a_transform0.z, a_transform1.y);\n  vec3 m1 = vec3(a_transform0.y, a_transform1.x, a_transform1.z);\n\n  vec2 xy = a_vertexPosition.xy;\n  transformPoint(xy, m0, m1, a_transform0.w, a_transform1.w);\n  gl_Position = vec4(xy, 1.0, 1.0);\n\n#ifdef GRADIENT\n  vGradientVector1 = vec3(u_radialGradientVector[0], u_radialGradientVector[1], u_radialGradientVector[2]);\n  vGradientVector2 = vec3(u_radialGradientVector[3], u_radialGradientVector[4], u_radialGradientVector[5]);\n#endif\n\n#ifdef GLOBALTRANSFORM\n  vec3 m3 = vec3(u_globalTransform[0], u_globalTransform[2], u_globalTransform[5]);\n  vec3 m4 = vec3(u_globalTransform[1], u_globalTransform[4], u_globalTransform[6]);\n  float width = u_globalTransform[3];\n  float height = u_globalTransform[7];\n  transformPoint(xy, m3, m4, width, height);\n  gl_Position = vec4(xy, 1.0, 1.0);\n#ifdef GRADIENT\n  vec2 vg1 = vGradientVector1.xy;\n  vec2 vg2 = vGradientVector2.xy;\n  float h = u_globalTransform[7];\n  float y1 = h - vg1.y;\n  float y2 = h - vg2.y;\n\n  vGradientVector1.x = vg1.x * u_globalTransform[0] + y1 * u_globalTransform[2] + u_globalTransform[5];\n  vGradientVector1.y = h - (vg1.x * u_globalTransform[1] + y1 * u_globalTransform[4] + u_globalTransform[6]);\n\n  vGradientVector2.x = vg2.x * u_globalTransform[0] + y2 * u_globalTransform[2] + u_globalTransform[5];\n  vGradientVector2.y = h - (vg2.x * u_globalTransform[1] + y2 * u_globalTransform[4] + u_globalTransform[6]);\n#endif\n#endif\n  \n  flagBackground = a_vertexPosition.z;\n\n#ifdef CLOUDCOLOR\n  if(flagBackground > 0.0) {\n    vColor = mix(a_color, a_fillCloudColor, a_fillCloudColor.a);\n  } else {\n    vColor = mix(a_color, a_strokeCloudColor, a_strokeCloudColor.a);\n  }\n#else\n  vColor = a_color;\n#endif\n\n#ifdef TEXTURE\n  vTextureCoord = a_vertexTextureCoord;\n  frameIndex = a_frameIndex;\n  vSourceRect = a_sourceRect;\n#endif\n\n#ifdef CLOUDFILTER\n  colorCloud0 = a_colorCloud0;\n  colorCloud1 = a_colorCloud1;\n  colorCloud2 = a_colorCloud2;\n  colorCloud3 = a_colorCloud3;\n  colorCloud4 = a_colorCloud4;\n#endif\n}");

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision mediump float;\n\nvarying vec4 vColor;\nvarying float flagBackground;\n\n#ifdef TEXTURE\nvarying float frameIndex;\nvarying vec3 vTextureCoord;\nvarying vec4 vSourceRect;\n#endif\n\n#ifdef FILTER\nuniform int u_filterFlag;\nuniform float u_colorMatrix[20];\n#endif\n\n#ifdef CLOUDFILTER\nvarying vec4 colorCloud0;\nvarying vec4 colorCloud1;\nvarying vec4 colorCloud2;\nvarying vec4 colorCloud3;\nvarying vec4 colorCloud4;\n#endif\n\n#ifdef GRADIENT\nvarying vec3 vGradientVector1;\nvarying vec3 vGradientVector2;\nuniform float u_colorSteps[40];\nuniform int u_gradientType;\n\nvoid gradient(inout vec4 color, vec3 gv1, vec3 gv2, float colorSteps[40]) {\n  float t;\n  // center circle radius\n  float cr = gv1.z;\n  // focal circle radius\n  float fr = gv2.z;\n\n  if(cr > 0.0 || fr > 0.0) {\n    // radial gradient\n    vec2 center = gv1.xy;\n    vec2 focal = gv2.xy;\n    float x = focal.x - gl_FragCoord.x;\n    float y = focal.y - gl_FragCoord.y;\n    float dx = focal.x - center.x;\n    float dy = focal.y - center.y;\n    float dr = cr - fr;\n    float a = dx * dx + dy * dy - dr * dr;\n    float b = -2.0 * (y * dy + x * dx + fr * dr);\n    float c = x * x + y * y - fr * fr;\n    t = 1.0 - 0.5 * (1.0 / a) * (-b + sqrt(b * b - 4.0 * a * c));\n  } else {\n    // linear gradient\n    vec2 v1 = gl_FragCoord.xy - gv1.xy;\n    vec2 v2 = gv2.xy - gv1.xy;\n    t = (v1.x * v2.x + v1.y * v2.y) / (v2.x * v2.x + v2.y * v2.y);\n  }\n\n  vec4 colors[8];\n  colors[0] = vec4(colorSteps[1], colorSteps[2], colorSteps[3], colorSteps[4]);\n  colors[1] = vec4(colorSteps[6], colorSteps[7], colorSteps[8], colorSteps[9]);\n  colors[2] = vec4(colorSteps[11], colorSteps[12], colorSteps[13], colorSteps[14]);\n  colors[3] = vec4(colorSteps[16], colorSteps[17], colorSteps[18], colorSteps[19]);\n  colors[4] = vec4(colorSteps[21], colorSteps[22], colorSteps[23], colorSteps[24]);\n  colors[5] = vec4(colorSteps[26], colorSteps[27], colorSteps[28], colorSteps[29]);\n  colors[6] = vec4(colorSteps[31], colorSteps[32], colorSteps[33], colorSteps[34]);\n  colors[7] = vec4(colorSteps[36], colorSteps[37], colorSteps[38], colorSteps[39]);\n  \n  float steps[8];\n  steps[0] = colorSteps[0];\n  steps[1] = colorSteps[5];\n  steps[2] = colorSteps[10];\n  steps[3] = colorSteps[15];\n  steps[4] = colorSteps[20];\n  steps[5] = colorSteps[25];\n  steps[6] = colorSteps[30];\n  steps[7] = colorSteps[35];\n\n  color = colors[0];\n  for (int i = 1; i < 8; i++) {\n    if (steps[i] < 0.0 || steps[i] > 1.0) {\n      break;\n    }\n    if(steps[i] == steps[i - 1]) {\n      color = colors[i];\n    } else {\n      color = mix(color, colors[i], clamp((t - steps[i - 1]) / (steps[i] - steps[i - 1]), 0.0, 1.0));\n    }\n    if (steps[i] >= t) {\n      break;\n    }\n  }\n}\n#endif\n\nvoid transformColor(inout vec4 color, in float colorMatrix[20]) {\n  float r = color.r, g = color.g, b = color.b, a = color.a;\n  color[0] = colorMatrix[0] * r + colorMatrix[1] * g + colorMatrix[2] * b + colorMatrix[3] * a + colorMatrix[4];\n  color[1] = colorMatrix[5] * r + colorMatrix[6] * g + colorMatrix[7] * b + colorMatrix[8] * a + colorMatrix[9];\n  color[2] = colorMatrix[10] * r + colorMatrix[11] * g + colorMatrix[12] * b + colorMatrix[13] * a + colorMatrix[14];\n  color[3] = colorMatrix[15] * r + colorMatrix[16] * g + colorMatrix[17] * b + colorMatrix[18] * a + colorMatrix[19];\n}\n\n#ifdef CLOUDFILTER\nvoid buildCloudColor(inout float colorCloudMatrix[20]) {\n  colorCloudMatrix[0] = colorCloud0[0];\n  colorCloudMatrix[1] = colorCloud1[0];\n  colorCloudMatrix[2] = colorCloud2[0];\n  colorCloudMatrix[3] = colorCloud3[0];\n  colorCloudMatrix[4] = colorCloud4[0];\n\n  colorCloudMatrix[5] = colorCloud0[1];\n  colorCloudMatrix[6] = colorCloud1[1];\n  colorCloudMatrix[7] = colorCloud2[1];\n  colorCloudMatrix[8] = colorCloud3[1];\n  colorCloudMatrix[9] = colorCloud4[1];\n\n  colorCloudMatrix[10] = colorCloud0[2];\n  colorCloudMatrix[11] = colorCloud1[2];\n  colorCloudMatrix[12] = colorCloud2[2];\n  colorCloudMatrix[13] = colorCloud3[2];\n  colorCloudMatrix[14] = colorCloud4[2];\n\n  colorCloudMatrix[15] = colorCloud0[3];\n  colorCloudMatrix[16] = colorCloud1[3];\n  colorCloudMatrix[17] = colorCloud2[3];\n  colorCloudMatrix[18] = colorCloud3[3];\n  colorCloudMatrix[19] = colorCloud4[3];\n}\n#endif\n\nvoid main() {\n  vec4 color = vColor;\n  float opacity = abs(flagBackground);\n\n#ifdef GRADIENT\n  if(u_gradientType > 0 && flagBackground > 0.0 || u_gradientType == 0 && flagBackground <= 0.0) {\n    gradient(color, vGradientVector1, vGradientVector2, u_colorSteps);\n  }\n#endif\n\n  if(opacity < 1.0) {\n    color.a *= opacity;\n  }\n\n#ifdef TEXTURE\n  if(flagBackground > 0.0) {\n    vec3 texCoord = vTextureCoord;\n\n    if(texCoord.z == 1.0) {\n      texCoord = fract(texCoord);\n    }\n\n    if(texCoord.x <= 1.0 && texCoord.x >= 0.0\n      && texCoord.y <= 1.0 && texCoord.y >= 0.0) {\n      if(vSourceRect.z > 0.0) {\n        texCoord.x = vSourceRect.x + texCoord.x * vSourceRect.z;\n        texCoord.y = 1.0 - (vSourceRect.y + (1.0 - texCoord.y) * vSourceRect.w);\n      }\n      if(frameIndex < 0.0) {\n        vec4 texColor = texture2D(u_texSampler, texCoord.xy);\n        color = mix(color, texColor, texColor.a);\n      } else {\n        int index = int(floor(clamp(0.0, 11.0, frameIndex)));\n        vec4 texColor;\n        if(index == 0) texColor = texture2D(u_texFrame0, texCoord.xy);\n        else if(index == 1) texColor = texture2D(u_texFrame1, texCoord.xy);\n        else if(index == 2) texColor = texture2D(u_texFrame2, texCoord.xy);\n        else if(index == 3) texColor = texture2D(u_texFrame3, texCoord.xy);\n        else if(index == 4) texColor = texture2D(u_texFrame4, texCoord.xy);\n        else if(index == 5) texColor = texture2D(u_texFrame5, texCoord.xy);\n        else if(index == 6) texColor = texture2D(u_texFrame6, texCoord.xy);\n        else if(index == 7) texColor = texture2D(u_texFrame7, texCoord.xy);\n        else if(index == 8) texColor = texture2D(u_texFrame8, texCoord.xy);\n        else if(index == 9) texColor = texture2D(u_texFrame9, texCoord.xy);\n        else if(index == 10) texColor = texture2D(u_texFrame10, texCoord.xy);\n        else texColor = texture2D(u_texFrame11, texCoord.xy);\n        float alpha = texColor.a;\n        if(opacity < 1.0) {\n          texColor.a *= opacity;\n          alpha *= mix(0.465, 1.0, opacity);\n        }\n        // color = mix(color, texColor, texColor.a);\n        color.rgb = mix(texColor.rgb, color.rgb, 1.0 - alpha);\n        color.a = texColor.a + (1.0 - texColor.a) * color.a;\n      }\n    }\n  }\n#endif\n\n#ifdef FILTER\n  if(u_filterFlag > 0) {\n    transformColor(color, u_colorMatrix);\n  }\n#endif\n\n#ifdef CLOUDFILTER\n  float colorCloudMatrix[20];\n  buildCloudColor(colorCloudMatrix);\n  transformColor(color, colorCloudMatrix);\n#endif\n\n  gl_FragColor = color;\n}");

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestAnimationFrame", function() { return requestAnimationFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelAnimationFrame", function() { return cancelAnimationFrame; });
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

function nowtime() {
  if (typeof performance !== 'undefined' && performance.now) {
    return performance.now();
  }

  if (typeof process !== 'undefined' && process.hrtime) {
    const [s, ns] = process.hrtime();
    return s * 1e3 + ns * 1e-6;
  }

  return Date.now ? Date.now() : new Date().getTime();
}

let requestAnimationFrame, // eslint-disable-line import/no-mutable-exports
cancelAnimationFrame;

if (typeof global !== 'undefined' && typeof global.requestAnimationFrame === 'function') {
  requestAnimationFrame = global.requestAnimationFrame;
  cancelAnimationFrame = global.cancelAnimationFrame;
} else {
  requestAnimationFrame = function (fn) {
    return setTimeout(() => {
      fn(nowtime());
    }, 16);
  };

  cancelAnimationFrame = function (id) {
    return clearTimeout(id);
  };
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(77), __webpack_require__(22)))

/***/ }),
/* 77 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Node; });
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _attribute_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81);
/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(221);
/* harmony import */ var _event_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(222);
/* harmony import */ var _utils_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(223);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const changedAttrs = Symbol.for('spritejs_changedAttrs');
const attributes = Symbol.for('spritejs_attributes');

const _resolution = Symbol('resolution');

const _animations = Symbol('animations');

const _eventListeners = Symbol('eventListeners');

const _captureEventListeners = Symbol('captureEventListeners');

const _filters = Symbol('filters');

const _display = Symbol('display');

class Node {
  constructor(attrs = {}) {
    this.attributes = new this.constructor.Attr(this);
    this[_resolution] = {
      width: 300,
      height: 150
    };
    Object.assign(this.attributes, attrs); // if(Object.seal) {
    //   Object.seal(this.attributes);
    // }

    this[_animations] = new Set();
    this[_eventListeners] = {};
    this[_captureEventListeners] = {};
  }

  get ancestors() {
    let parent = this.parent;
    const ret = [];

    while (parent) {
      ret.push(parent);
      parent = parent.parent;
    }

    return ret;
  }

  get animations() {
    return this[_animations];
  }

  get filters() {
    return this[_filters] || this.parent && this.parent.filters;
  }

  get isVisible() {
    return false;
  }

  get layer() {
    if (this.parent) return this.parent.layer;
    return null;
  }

  get localMatrix() {
    const m = this.transformMatrix;
    const {
      x,
      y
    } = this.attributes;
    m[4] += x;
    m[5] += y;
    return m;
  }
  /* get parent defined by connect method */


  get renderer() {
    if (this.parent) return this.parent.renderer;
    return null;
  }

  get renderMatrix() {
    if (this.__cacheRenderMatrix) return this.__cacheRenderMatrix;
    let m = this.localMatrix;
    const parent = this.parent;

    if (parent) {
      const renderMatrix = parent.__cacheRenderMatrix || parent.renderMatrix;

      if (renderMatrix) {
        m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].multiply(Array.of(0, 0, 0, 0, 0, 0), renderMatrix, m);
      }
    }

    return m;
  }
  /* get zOrder defined by connect method */

  /* attributes */


  get className() {
    return this.attributes.className;
  }

  set className(value) {
    this.attributes.className = value;
  }

  get id() {
    return this.attributes.id;
  }

  set id(value) {
    this.attributes.id = value;
  }

  get name() {
    return this.attributes.name;
  }

  set name(value) {
    this.attributes.name = value;
  }

  get zIndex() {
    return this.attributes.zIndex;
  }

  set zIndex(value) {
    this.attributes.zIndex = value;
  }

  get mesh() {
    return null;
  }

  activateAnimations() {
    const layer = this.layer;

    if (layer) {
      const animations = this[_animations];
      animations.forEach(animation => {
        animation.baseTimeline = layer.timeline;
        animation.play();
        animation.finished.then(() => {
          animations.delete(animation);
        });
      });
      const children = this.children;

      if (children) {
        children.forEach(child => {
          child.activateAnimations();
        });
      }
    }
  }

  addEventListener(type, listener, options = {}) {
    if (typeof options === 'boolean') options = {
      capture: options
    };
    const {
      capture,
      once
    } = options;
    const eventListeners = capture ? _captureEventListeners : _eventListeners;
    this[eventListeners][type] = this[eventListeners][type] || [];
    this[eventListeners][type].push({
      listener,
      once
    });
    return this;
  }

  animate(frames, timing) {
    const animation = new _animation__WEBPACK_IMPORTED_MODULE_2__["default"](this, frames, timing);
    if (this.effects) animation.applyEffects(this.effects);

    if (this.layer) {
      animation.baseTimeline = this.layer.timeline;
      animation.play();
      animation.finished.then(() => {
        this[_animations].delete(animation);
      });
    }

    this[_animations].add(animation);

    return animation;
  }

  attr(...args) {
    if (args.length === 0) return this.attributes[attributes];

    if (args.length > 1) {
      let [key, value] = args;

      if (typeof value === 'function') {
        value = value(this.attr(key));
      }

      this.setAttribute(key, value);
      return this;
    }

    if (typeof args[0] === 'string') {
      return this.getAttribute(args[0]);
    }

    Object.assign(this.attributes, args[0]);
    return this;
  }

  cloneNode() {
    const cloned = new this.constructor();
    const attrs = this.attributes[changedAttrs];
    cloned.attr(attrs);
    return cloned;
  }

  connect(parent, zOrder) {
    Object.defineProperty(this, 'parent', {
      value: parent,
      writable: false,
      configurable: true
    });
    Object.defineProperty(this, 'zOrder', {
      value: zOrder,
      writable: false,
      configurable: true
    });
    if (parent.timeline) this.activateAnimations();
    this.setResolution(parent.getResolution());
    this.forceUpdate();
    this.dispatchEvent({
      type: 'append',
      parent,
      zOrder
    });
  }

  deactivateAnimations() {
    this[_animations].forEach(animation => animation.cancel());

    const children = this.children;

    if (children) {
      children.forEach(child => {
        child.deactivateAnimations();
      });
    }
  }

  disconnect() {
    const {
      parent,
      zOrder
    } = this;
    delete this.parent;
    delete this.zOrder;
    this.deactivateAnimations();
    this.dispatchEvent({
      type: 'remove',
      parent,
      zOrder
    });
    if (parent) parent.forceUpdate();
  }

  dispatchEvent(event) {
    if (!(event instanceof _event_event__WEBPACK_IMPORTED_MODULE_4__["default"])) {
      event = new _event_event__WEBPACK_IMPORTED_MODULE_4__["default"](event);
    }

    event.target = this;
    const type = event.type;
    const elements = [this];
    let parent = this.parent;

    while (event.bubbles && parent) {
      elements.push(parent);
      parent = parent.parent;
    } // capture phase


    for (let i = elements.length - 1; i >= 0; i--) {
      const element = elements[i];
      const listeners = element[_captureEventListeners] && element[_captureEventListeners][type];

      if (listeners && listeners.length) {
        listeners.forEach(({
          listener,
          once
        }) => {
          listener.call(this, event);
          if (once) elements.removeEventListener(listener);
        });
      }

      if (!event.bubbles && event.cancelBubble) break;
    } // bubbling


    if (!event.cancelBubble) {
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const listeners = element[_eventListeners] && element[_eventListeners][type];

        if (listeners && listeners.length) {
          listeners.forEach(({
            listener,
            once
          }) => {
            listener.call(this, event);
            if (once) elements.removeEventListener(listener);
          });
        }

        if (!event.bubbles || event.cancelBubble) break;
      }
    }
  }

  dispatchPointerEvent(event) {
    const {
      x,
      y
    } = event;

    if (this.isPointCollision(x, y)) {
      this.dispatchEvent(event);
      return true;
    }

    return false;
  }

  draw(meshes = []) {
    return meshes;
  }

  forceUpdate() {
    if (this.parent) this.parent.forceUpdate();
  }

  getAttribute(key) {
    return this.attributes[key];
  }

  getListeners(type, {
    capture = false
  } = {}) {
    const eventListeners = capture ? _captureEventListeners : _eventListeners;
    return [...(this[eventListeners][type] || [])];
  }

  getOffsetPosition(x, y) {
    const m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].invert(Array.of(0, 0, 0, 0, 0, 0), this.renderMatrix);
    const offsetX = x * m[0] + y * m[2] + m[4];
    const offsetY = x * m[1] + y * m[3] + m[5];
    return [offsetX, offsetY];
  }

  getResolution() {
    return _objectSpread({}, this[_resolution]);
  }

  isPointCollision(x, y) {
    if (!this.mesh) return false;
    const pointerEvents = this.attributes.pointerEvents;
    if (pointerEvents === 'none') return false;
    if (pointerEvents !== 'all' && !this.isVisible) return false;
    let which = 'both';
    if (pointerEvents === 'visibleFill') which = 'fill';
    if (pointerEvents === 'visibleStroke') which = 'stroke';
    return this.mesh.isPointCollision(x, y, which);
  }

  onPropertyChange(key, newValue, oldValue) {
    if (key !== 'id' && key !== 'name' && key !== 'className') {
      this.forceUpdate();
    }

    if (key === 'filter') {
      this[_filters] = Object(_utils_filter__WEBPACK_IMPORTED_MODULE_5__["parseFilterString"])(newValue);
    }
  }

  setAttribute(key, value) {
    if (key === 'attrs') {
      this.attr(value);
    }

    this.attributes[key] = value;
  }

  setMouseCapture() {
    if (this.layer) {
      this.layer.__mouseCapturedTarget = this;
    }
  }

  setResolution({
    width,
    height
  }) {
    const {
      width: w,
      height: h
    } = this[_resolution];

    if (w !== width || h !== height) {
      this[_resolution] = {
        width,
        height
      };
      this.updateContours();
      this.forceUpdate();
    }

    if (this.mesh) this.mesh.setResolution({
      width,
      height
    });
  }

  show() {
    if (this.attributes.display === 'none') {
      this.attributes.display = this[_display] || '';
    }
  }

  hide() {
    if (this.attributes.display !== 'none') {
      this[_display] = this.attributes.display;
      this.attributes.display = 'none';
    }
  }

  releaseMouseCapture() {
    if (this.layer && this.layer.__mouseCapturedTarget === this) {
      this.layer.__mouseCapturedTarget = null;
    }
  }

  remove() {
    if (this.parent && this.parent.removeChild) {
      this.parent.removeChild(this);
      return true;
    }

    return false;
  }

  removeAllListeners(type, options = {}) {
    if (typeof options === 'boolean') options = {
      capture: options
    };
    const capture = options.capture;
    const eventListeners = capture ? _captureEventListeners : _eventListeners;

    if (this[eventListeners][type]) {
      this[eventListeners][type] = [];
    }

    return this;
  }

  removeAttribute(key) {
    this.setAttribute(key, null);
  }

  removeEventListener(type, listener, options = {}) {
    if (typeof options === 'boolean') options = {
      capture: options
    };
    const capture = options.capture;
    const eventListeners = capture ? _captureEventListeners : _eventListeners;

    if (this[eventListeners][type]) {
      const listeners = this[eventListeners][type];

      if (listeners) {
        for (let i = 0; i < listeners.length; i++) {
          const {
            listener: _listener
          } = listeners[i];

          if (_listener === listener) {
            this[eventListeners][type].splice(i, 1);
            break;
          }
        }
      }
    }

    return this;
  }

  transition(sec, easing = 'linear') {
    const that = this,
          _animation = Symbol('animation');

    easing = easing || 'linear';
    let delay = 0;

    if (typeof sec === 'object') {
      delay = sec.delay || 0;
      sec = sec.duration;
    }

    return {
      [_animation]: null,

      cancel(preserveState = false) {
        const animation = this[_animation];

        if (animation) {
          animation.cancel(preserveState);
        }
      },

      end() {
        const animation = this[_animation];

        if (animation && (animation.playState === 'running' || animation.playState === 'pending')) {
          animation.finish();
        }
      },

      reverse() {
        const animation = this[_animation];

        if (animation) {
          if (animation.playState === 'running' || animation.playState === 'pending') {
            animation.playbackRate = -animation.playbackRate;
          } else {
            const direction = animation.timing.direction;
            animation.timing.direction = direction === 'reverse' ? 'normal' : 'reverse';
            animation.play();
          }
        }

        return animation.finished;
      },

      attr(prop, val) {
        this.end();

        if (typeof prop === 'string') {
          prop = {
            [prop]: val
          };
        }

        Object.entries(prop).forEach(([key, value]) => {
          if (typeof value === 'function') {
            prop[key] = value(that.attr(key));
          }
        });
        this[_animation] = that.animate([prop], {
          duration: sec * 1000,
          delay: delay * 1000,
          fill: 'forwards',
          easing
        });
        return this[_animation].finished;
      }

    };
  }

  updateContours() {// override
  }

}

_defineProperty(Node, "Attr", _attribute_node__WEBPACK_IMPORTED_MODULE_1__["default"]);

_document__WEBPACK_IMPORTED_MODULE_3__["default"].registerNode(Node, 'node');

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Node; });
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _mesh_js_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _utils_attribute_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);




const setDefault = Symbol.for('spritejs_setAttributeDefault');
const declareAlias = Symbol.for('spritejs_declareAlias');
const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');
const attributes = Symbol.for('spritejs_attributes');
const changedAttrs = Symbol.for('spritejs_changedAttrs');

const _subject = Symbol('subject');

const _attr = Symbol('attr');

const _default = Symbol('default');

const _alias = Symbol('alias');

function getMatrix(transformMap, [ox, oy]) {
  let m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].fromValues(1, 0, 0, 1, 0, 0);
  [...transformMap].forEach(([key, value]) => {
    if (ox || oy) m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].translate(Array.of(0, 0, 0, 0, 0, 0), m, [ox, oy]);

    if (key === 'matrix') {
      m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].multiply(m, m, value);
    } else if (key === 'offsetTranslate') {
      m[4] += value[0];
      m[5] += value[1];
    } else if (key === 'offsetRotate') {
      m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].rotate(Array.of(0, 0, 0, 0, 0, 0), m, value);
    } else if (key === 'skew') {
      const [x, y] = value;
      m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].multiply(m, m, gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].fromValues(1, Math.tan(y), Math.tan(x), 1, 0, 0));
    } else {
      gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"][key](m, m, value);
    }

    if (ox || oy) m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].translate(Array.of(0, 0, 0, 0, 0, 0), m, [-ox, -oy]);
  });
  return m;
}

const _transformMatrix = Symbol('transformMatrix');

const _transforms = Symbol('transforms');

const _changedAttrs = Symbol('changedAttrs');

const _lastChangedAttr = Symbol('lastChangedAttr');

const _offsetFigure = Symbol('offsetFigure');

function setTransform(attr, type, value) {
  const changed = attr[setAttribute](type, value);

  if (changed || attr[_lastChangedAttr] !== type) {
    const transformMap = attr[_transforms];

    if (transformMap.has(type)) {
      transformMap.delete(type);
    }

    if (value) {
      if (type === 'rotate') value = Math.PI * value / 180;

      if (type === 'scale') {
        value = value.map(v => {
          const t = 1e-5;

          if (Math.abs(v) > t) {
            return v;
          }

          return 1 / v > 0 ? t : -t;
        });
      }

      transformMap.set(type, value);
    }

    attr[_transformMatrix] = null;
  }
}

function updateOffset(attr) {
  const offsetFigure = attr[_offsetFigure];
  const distance = attr.offsetDistance * offsetFigure.getTotalLength();
  const point = offsetFigure.getPointAtLength(distance);

  if (point) {
    const transformMap = attr[_transforms];
    let rotateValue = attr.offsetRotate;

    if (rotateValue === 'auto') {
      rotateValue = point.angle;
    } else if (rotateValue === 'reverse') {
      /* istanbul ignore next */
      rotateValue = Math.PI + point.angle;
    } else {
      rotateValue = Math.PI * rotateValue / 180;
    }

    transformMap.set('offsetRotate', rotateValue);
    transformMap.set('offsetTranslate', [point.x, point.y]);
    attr[_transformMatrix] = null;
  }
} // 规范：属性只能是原始类型或元素是原始类型的数组


class Node {
  static setDefault(attr, ...args) {
    return attr[setDefault](...args);
  }

  static declareAlias(attr, ...args) {
    return attr[declareAlias](...args);
  }

  static setAttribute(attr, ...args) {
    return attr[setAttribute](...args);
  }

  static getAttribute(attr, ...args) {
    return attr[getAttribute](...args);
  }

  static getAttributes(attr) {
    return attr[attributes];
  }

  static getChangedAttributes(attr) {
    return attr[changedAttrs];
  }

  constructor(subject) {
    this[_subject] = subject;
    this[_attr] = {};
    this[_transformMatrix] = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].fromValues(1, 0, 0, 1, 0, 0);
    this[_transforms] = new Map();
    this[_default] = {};
    this[_alias] = [];
    Object.defineProperty(subject, 'transformMatrix', {
      get: () => {
        if (!this[_transformMatrix]) {
          this[_transformMatrix] = getMatrix(this[_transforms], this.transformOrigin);
        }

        return [...this[_transformMatrix]];
      }
    });
    this[setDefault]({
      id: '',
      name: '',
      className: '',

      /* class */
      x: 0,
      y: 0,

      /* pos */
      transformOrigin: [0, 0],
      transform: '',
      translate: [0, 0],
      rotate: 0,
      scale: [1, 1],
      skew: [0, 0],
      opacity: 1,
      zIndex: 0,
      offsetPath: undefined,
      offsetDistance: 0,
      offsetRotate: 'auto',
      pointerEvents: 'visible',
      // none | visible | visibleFill | visibleStroke | all
      filter: 'none',
      display: ''
    });
    this[declareAlias]('class', 'pos');
    this[_changedAttrs] = new Set();
    this[_offsetFigure] = new _mesh_js_core__WEBPACK_IMPORTED_MODULE_1__["Figure2D"]({
      scale: 5
    });
  }

  get [changedAttrs]() {
    const ret = {};
    [...this[_changedAttrs]].forEach(key => {
      ret[key] = this[_attr][key];
    });
    return ret;
  }

  get [attributes]() {
    const ret = Object.assign({}, this[_attr]);

    for (let i = 0; i < this[_alias].length; i++) {
      const key = this[_alias][i];
      ret[key] = this[key];
    }

    return ret;
  }

  [setDefault](attrs) {
    Object.assign(this[_default], attrs);
    Object.assign(this[_attr], attrs);
  }

  [declareAlias](...alias) {
    this[_alias].push(...alias);
  }

  [setAttribute](key, value) {
    const oldValue = this[_attr][key];
    const subject = this[_subject];
    if (value == null) value = this[_default][key];

    if (!Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_2__["compareValue"])(oldValue, value)) {
      this[_attr][key] = value;
      if (this[_changedAttrs].has(key)) this[_changedAttrs].delete(key);

      this[_changedAttrs].add(key);

      this[_lastChangedAttr] = key;
      subject.onPropertyChange(key, value, oldValue, this);
      return true;
    }

    return false;
  }

  [getAttribute](key) {
    return this[_attr][key];
  }

  set id(value) {
    this[setAttribute]('id', value);
  }

  get id() {
    return this[getAttribute]('id');
  }

  set name(value) {
    this[setAttribute]('name', value);
  }

  get name() {
    return this[getAttribute]('name');
  }

  set className(value) {
    this[setAttribute]('className', value);
  }

  get className() {
    return this[getAttribute]('className');
  }

  set class(value) {
    this.className = value;
  }

  get class() {
    return this.className;
  }

  get x() {
    return this[getAttribute]('x');
  }

  set x(value) {
    this[setAttribute]('x', Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_2__["toNumber"])(value));
  }

  get y() {
    return this[getAttribute]('y');
  }

  set y(value) {
    this[setAttribute]('y', Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_2__["toNumber"])(value));
  }

  get pos() {
    return [this.x, this.y];
  }

  set pos(value) {
    value = Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_2__["toArray"])(value);
    if (!Array.isArray(value)) value = [value, value];
    this.x = value[0];
    this.y = value[1];
  }

  get transform() {
    return this[getAttribute]('transform');
  }

  set transform(value) {
    let _matrixValue = null;

    if (Array.isArray(value)) {
      _matrixValue = value;
      value = `matrix(${value.map(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_2__["toNumber"]).join()})`;
    }

    if (typeof value === 'string') value = value.replace(/\s*,\s*/g, ',');else if (value != null) {
      throw new TypeError('Invalid transform value.');
    }

    if (this[setAttribute]('transform', value)) {
      const transformMap = this[_transforms];

      if (transformMap.has('matrix')) {
        transformMap.delete('matrix');
      }

      if (_matrixValue) {
        transformMap.set('matrix', _matrixValue);
      } else if (value) {
        const transforms = value.match(/(matrix|translate|rotate|scale|skew)\([^()]+\)/g);

        if (transforms) {
          let m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].fromValues(1, 0, 0, 1, 0, 0);

          for (let i = 0; i < transforms.length; i++) {
            const t = transforms[i];
            const matched = t.match(/^(matrix|translate|rotate|scale|skew)\(([^()]+)\)/);

            if (matched) {
              let [, method, value] = matched;
              if (method === 'rotate') value = Math.PI * parseFloat(value) / 180;else value = value.trim().split(/[\s,]+/).map(v => Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_2__["toNumber"])(v));

              if (method === 'matrix') {
                m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].multiply(m, m, value);
              } else if (method === 'skew') {
                m = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].multiply(m, m, gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"].fromValues(1, Math.tan(value[1]), Math.tan(value[0]), 1, 0, 0));
              } else {
                gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2d"][method](m, m, value);
              }

              transformMap.set('matrix', m);
            }
          }
        } else {
          throw new TypeError('Invalid transform value.');
        }
      }

      this[_transformMatrix] = null;
    }
  }

  get transformOrigin() {
    return this[getAttribute]('transformOrigin');
  }

  set transformOrigin(value) {
    value = Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_2__["toArray"])(value, true);

    if (value != null && !Array.isArray(value)) {
      value = [value, value];
    }

    if (this[setAttribute]('transformOrigin', value)) {
      this[_transformMatrix] = null;
    }
  }

  get rotate() {
    return this[getAttribute]('rotate');
  }

  set rotate(value) {
    setTransform(this, 'rotate', value);
  }

  get translate() {
    return this[getAttribute]('translate');
  }

  set translate(value) {
    value = Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_2__["toArray"])(value, true);
    if (value && !Array.isArray(value)) value = [value, value];
    setTransform(this, 'translate', value);
  }

  get scale() {
    return this[getAttribute]('scale');
  }

  set scale(value) {
    value = Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_2__["toArray"])(value, true);
    if (value && !Array.isArray(value)) value = [value, value];
    setTransform(this, 'scale', value);
  }

  get skew() {
    return this[getAttribute]('skew');
  }

  set skew(value) {
    value = Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_2__["toArray"])(value, true);
    if (value && !Array.isArray(value)) value = [value, value];
    setTransform(this, 'skew', value);
  }

  get opacity() {
    return this[getAttribute]('opacity');
  }

  set opacity(value) {
    if (value != null) value = Number(value);
    this[setAttribute]('opacity', value);
  }

  get zIndex() {
    return this[getAttribute]('zIndex');
  }

  set zIndex(value) {
    if (value != null) value = Number(value);
    this[setAttribute]('zIndex', value);
  }

  get offsetPath() {
    return this[getAttribute]('offsetPath');
  }

  set offsetPath(value) {
    if (this[setAttribute]('offsetPath', value)) {
      this[_offsetFigure].beginPath();

      if (value != null) this[_offsetFigure].addPath(value);
      updateOffset(this);
    }
  }

  get offsetDistance() {
    return this[getAttribute]('offsetDistance');
  }

  set offsetDistance(value) {
    if (this[setAttribute]('offsetDistance', Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_2__["toNumber"])(value))) {
      updateOffset(this);
    }
  }

  get offsetRotate() {
    return this[getAttribute]('offsetRotate');
  }

  set offsetRotate(value) {
    this[setAttribute]('offsetRotate', value);
    updateOffset(this);
  }

  get pointerEvents() {
    return this[getAttribute]('pointerEvents');
  }

  set pointerEvents(value) {
    if (value != null && value !== 'none' && value !== 'visible' && value !== 'visibleFill' && value !== 'visibleStroke' && value !== 'all') {
      throw new TypeError('Invalid pointerEvents type.');
    }

    this[setAttribute]('pointerEvents', value);
  }

  get filter() {
    return this[getAttribute]('filter');
  }

  set filter(value) {
    this[setAttribute]('filter', value);
  }

  get display() {
    return this[getAttribute]('display');
  }

  set display(value) {
    this[setAttribute]('display', value);
  }
  /* istanbul ignore next */


  set offset(value) {
    /* ignore setting offset for animations */
  }

}

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeToPixel", function() { return sizeToPixel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareValue", function() { return compareValue; });
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

function sizeToPixel(value, defaultWidth) {
  // eslint-disable-line complexity
  const matched = value.trim().match(/^([\d.]+)(px|pt|pc|in|cm|mm|em|ex|rem|q|vw|vh|vmax|vmin)$/);

  if (matched) {
    value = {
      size: parseFloat(matched[1]),
      unit: matched[2]
    };
  } else {
    value = {
      size: parseFloat(value),
      unit: 'px'
    };
  }

  let {
    size,
    unit
  } = value;

  if (unit === 'pt') {
    size /= 0.75;
  } else if (unit === 'pc') {
    size *= 16;
  } else if (unit === 'in') {
    size *= 96;
  } else if (unit === 'cm') {
    size *= 96.0 / 2.54;
  } else if (unit === 'mm') {
    size *= 96.0 / 25.4;
  } else if (unit === 'em' || unit === 'rem' || unit === 'ex') {
    if (!defaultWidth && typeof getComputedStyle === 'function' && typeof document !== 'undefined') {
      const root = getComputedStyle(document.documentElement).fontSize;
      if (!root) defaultWidth = 16;else defaultWidth = sizeToPixel(root, 16);
    }

    size *= defaultWidth;
    if (unit === 'ex') size /= 2;
  } else if (unit === 'q') {
    size *= 96.0 / 25.4 / 4;
  } else if (unit === 'vw' || unit === 'vh') {
    /* istanbul ignore else */
    if (typeof document !== 'undefined') {
      /* istanbul ignore next */
      const val = unit === 'vw' ? window.innerWidth || document.documentElement.clientWidth : window.innerHeight || document.documentElement.clientHeight;
      size *= val / 100;
    }
  } else if (unit === 'vmax' || unit === 'vmin') {
    /* istanbul ignore else */
    if (typeof document !== 'undefined') {
      /* istanbul ignore next */
      const width = window.innerWidth || document.documentElement.clientWidth;
      /* istanbul ignore next */

      const height = window.innerHeight || document.documentElement.clientHeight;

      if (unit === 'vmax') {
        size *= Math.max(width, height) / 100;
      } else {
        size *= Math.min(width, height) / 100;
      }
    }
  }

  return size;
}
function toString(value) {
  if (value == null) return value;
  return String(value);
}
function toNumber(value) {
  if (value == null) return value;

  if (typeof value === 'string') {
    value = sizeToPixel(value);
  }

  if (!Number.isFinite(value)) throw new TypeError('Invalid value');
  return value;
}
function toArray(value, parseNumber = false) {
  if (value === '') return null;
  if (typeof value === 'string') value = value.split(/[\s,]+/g);

  if (Array.isArray(value)) {
    if (parseNumber) value = value.map(toNumber);
    if (value.length === 1) return value[0];
  }

  return value;
}
function compareValue(oldValue, newValue) {
  if (Array.isArray(oldValue) && Array.isArray(newValue)) {
    if (oldValue.length !== newValue.length) return false;

    for (let i = 0; i < oldValue.length; i++) {
      if (oldValue[i] !== newValue[i]) return false;
    }

    return true;
  }

  return oldValue == null && newValue == null || oldValue === newValue;
}

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Animation; });
/* harmony import */ var sprite_animator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82);
/* harmony import */ var sprite_animator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sprite_animator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var color_rgba__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* harmony import */ var color_rgba__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(color_rgba__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_animation_frame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





sprite_animator__WEBPACK_IMPORTED_MODULE_0__["Effects"].default = function (from, to, p, s, e) {
  if (typeof from === 'string' && from.indexOf('rgba') === 0) {
    from = color_rgba__WEBPACK_IMPORTED_MODULE_1___default()(from);
  }

  if (typeof to === 'string' && to.indexOf('rgba') === 0) {
    to = color_rgba__WEBPACK_IMPORTED_MODULE_1___default()(to);
  }

  if (Array.isArray(from) && Array.isArray(to)) {
    return from.map((v, i) => {
      return v + (p - s) / (e - s) * (to[i] - v);
    });
  }

  if (typeof from === 'number' && typeof to === 'number') {
    return from + (p - s) / (e - s) * (to - from);
  }

  if (p - s > e - p) {
    return to;
  }

  return from;
};

class Animation extends sprite_animator__WEBPACK_IMPORTED_MODULE_0__["Animator"] {
  constructor(sprite, frames, timing) {
    const initAttrs = sprite.attr();
    frames = frames.map((_ref) => {
      let frame = _extends({}, _ref);

      const ret = {};
      const node = sprite.cloneNode();
      node.attr(frame);
      Object.keys(frame).forEach(key => {
        ret[key] = node.attributes[key];
      });
      return ret;
    });
    super(initAttrs, frames, timing);
    this.target = sprite;

    this.setter = function (frame, target) {
      target.attr(frame);
    };
  }

  get playState() {
    if (!this.target.parent) {
      return 'idle';
    }

    return super.playState;
  }

  get finished() {
    // set last frame when finished
    // because while the web page is not focused
    // requestAnimationFrame will not trigger while deferTime of
    // the animator is still running
    return super.finished.then(() => {
      const that = this;
      return new Promise(resolve => {
        function update() {
          that.setter(that.frame, that.target);
          const playState = that.playState;

          if (playState === 'finished' || playState === 'idle') {
            Object(_utils_animation_frame__WEBPACK_IMPORTED_MODULE_2__["cancelAnimationFrame"])(that.requestId);
            resolve();
          } else {
            Object(_utils_animation_frame__WEBPACK_IMPORTED_MODULE_2__["requestAnimationFrame"])(update);
          }
        }

        update();
      });
    });
  }

  finish() {
    // finish should change attrs synchronously
    super.finish();
    Object(_utils_animation_frame__WEBPACK_IMPORTED_MODULE_2__["cancelAnimationFrame"])(this.requestId);
    this.setter(this.frame, this.target);
  }

  play() {
    if (!this.target.parent || this.playState === 'running') {
      return;
    }

    super.play();
    this.setter(this.frame, this.target);
    const that = this;
    this.ready.then(() => {
      that.setter(that.frame, that.target);
      that.requestId = Object(_utils_animation_frame__WEBPACK_IMPORTED_MODULE_2__["requestAnimationFrame"])(function update() {
        const target = that.target;

        if (typeof document !== 'undefined' && document.documentElement && document.documentElement.contains && target.layer && target.layer.canvas && !document.documentElement.contains(target.layer.canvas)) {
          // if dom element has been removed stop animation.
          // it usually occurs in single page applications.
          that.cancel();
          return;
        }

        const playState = that.playState;
        that.setter(that.frame, that.target);
        if (playState === 'idle') return;

        if (playState === 'running') {
          that.requestId = Object(_utils_animation_frame__WEBPACK_IMPORTED_MODULE_2__["requestAnimationFrame"])(update);
        } else if (playState === 'paused' || playState === 'pending' && that.timeline.currentTime < 0) {
          // playbackRate < 0 will cause playState reset to pending...
          that.ready.then(() => {
            that.setter(that.frame, that.target);
            that.requestId = Object(_utils_animation_frame__WEBPACK_IMPORTED_MODULE_2__["requestAnimationFrame"])(update);
          });
        }
      });
    });
  }

  cancel(preserveState = false) {
    Object(_utils_animation_frame__WEBPACK_IMPORTED_MODULE_2__["cancelAnimationFrame"])(this.requestId);

    if (preserveState) {
      this.setter(this.frame, this.target);
      super.cancel();
    } else {
      super.cancel();
      this.setter(this.frame, this.target);
    }
  }

}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timeline = exports.Effects = exports.Easings = exports.Animator = undefined;

var _spriteTimeline = __webpack_require__(83);

var _spriteTimeline2 = _interopRequireDefault(_spriteTimeline);

var _effect = __webpack_require__(195);

var _effect2 = _interopRequireDefault(_effect);

var _easing = __webpack_require__(196);

var _animator = __webpack_require__(198);

var _animator2 = _interopRequireDefault(_animator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Animator = _animator2.default;
exports.Easings = _easing.Easings;
exports.Effects = _effect2.default;
exports.Timeline = _spriteTimeline2.default;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(84);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _toConsumableArray2 = __webpack_require__(141);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _map = __webpack_require__(149);

var _map2 = _interopRequireDefault(_map);

var _assign = __webpack_require__(172);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(178);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(179);

var _createClass3 = _interopRequireDefault(_createClass2);

var _symbol = __webpack_require__(183);

var _symbol2 = _interopRequireDefault(_symbol);

var _utils = __webpack_require__(194);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _nowtime = (0, _utils.createNowTime)();

var defaultOptions = {
  originTime: 0,
  playbackRate: 1.0
};

var _timeMark = (0, _symbol2.default)('timeMark'),
    _playbackRate = (0, _symbol2.default)('playbackRate'),
    _timers = (0, _symbol2.default)('timers'),
    _originTime = (0, _symbol2.default)('originTime'),
    _setTimer = (0, _symbol2.default)('setTimer'),
    _parent = (0, _symbol2.default)('parent');

var Timeline = function () {
  function Timeline(options, parent) {
    (0, _classCallCheck3.default)(this, Timeline);

    if (options instanceof Timeline) {
      parent = options;
      options = {};
    }

    options = (0, _assign2.default)({}, defaultOptions, options);

    if (parent) {
      this[_parent] = parent;
    }

    var nowtime = options.nowtime || _nowtime;
    if (!parent) {
      var createTime = nowtime();
      Object.defineProperty(this, 'globalTime', {
        get: function get() {
          return nowtime() - createTime;
        }
      });
    } else {
      Object.defineProperty(this, 'globalTime', {
        get: function get() {
          return parent.currentTime;
        }
      });
    }

    // timeMark records the reference points on timeline
    // Each time we change the playbackRate or currentTime or entropy
    // A new timeMark will be generated
    // timeMark sorted by entropy
    // If you reset entropy, all the timeMarks behind the new entropy
    // should be dropped
    this[_timeMark] = [{
      globalTime: this.globalTime,
      localTime: -options.originTime,
      entropy: -options.originTime,
      playbackRate: options.playbackRate,
      globalEntropy: 0
    }];

    if (this[_parent]) {
      this[_timeMark][0].globalEntropy = this[_parent].entropy;
    }

    this[_originTime] = options.originTime;
    this[_playbackRate] = options.playbackRate;
    this[_timers] = new _map2.default();
  }

  (0, _createClass3.default)(Timeline, [{
    key: 'markTime',
    value: function markTime() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$time = _ref.time,
          time = _ref$time === undefined ? this.currentTime : _ref$time,
          _ref$entropy = _ref.entropy,
          entropy = _ref$entropy === undefined ? this.entropy : _ref$entropy,
          _ref$playbackRate = _ref.playbackRate,
          playbackRate = _ref$playbackRate === undefined ? this.playbackRate : _ref$playbackRate;

      var timeMark = {
        globalTime: this.globalTime,
        localTime: time,
        entropy: entropy,
        playbackRate: playbackRate,
        globalEntropy: this.globalEntropy
      };
      this[_timeMark].push(timeMark);
    }
  }, {
    key: 'fork',
    value: function fork(options) {
      return new Timeline(options, this);
    }
  }, {
    key: 'seekGlobalTime',
    value: function seekGlobalTime(seekEntropy) {
      var idx = this.seekTimeMark(seekEntropy),
          timeMark = this[_timeMark][idx];

      var entropy = timeMark.entropy,
          playbackRate = timeMark.playbackRate,
          globalTime = timeMark.globalTime;


      return globalTime + (seekEntropy - entropy) / Math.abs(playbackRate);
    }
  }, {
    key: 'seekLocalTime',
    value: function seekLocalTime(seekEntropy) {
      var idx = this.seekTimeMark(seekEntropy),
          timeMark = this[_timeMark][idx];

      var localTime = timeMark.localTime,
          entropy = timeMark.entropy,
          playbackRate = timeMark.playbackRate;


      if (playbackRate > 0) {
        return localTime + (seekEntropy - entropy);
      }
      return localTime - (seekEntropy - entropy);
    }
  }, {
    key: 'seekTimeMark',
    value: function seekTimeMark(entropy) {
      var timeMark = this[_timeMark];

      var l = 0,
          r = timeMark.length - 1;

      if (entropy <= timeMark[l].entropy) {
        return l;
      }
      if (entropy >= timeMark[r].entropy) {
        return r;
      }

      var m = Math.floor((l + r) / 2); // binary search

      while (m > l && m < r) {
        if (entropy === timeMark[m].entropy) {
          return m;
        }if (entropy < timeMark[m].entropy) {
          r = m;
        } else if (entropy > timeMark[m].entropy) {
          l = m;
        }
        m = Math.floor((l + r) / 2);
      }

      return l;
    }
  }, {
    key: 'updateTimers',
    value: function updateTimers() {
      var _this = this;

      var timers = [].concat((0, _toConsumableArray3.default)(this[_timers]));
      timers.forEach(function (_ref2) {
        var _ref3 = (0, _slicedToArray3.default)(_ref2, 2),
            id = _ref3[0],
            timer = _ref3[1];

        _this[_setTimer](timer.handler, timer.time, id);
      });
    }
  }, {
    key: 'clearTimeout',
    value: function (_clearTimeout) {
      function clearTimeout(_x) {
        return _clearTimeout.apply(this, arguments);
      }

      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };

      return clearTimeout;
    }(function (id) {
      var timer = this[_timers].get(id);

      if (timer && timer.timerID != null) {
        if (this[_parent]) {
          this[_parent].clearTimeout(timer.timerID);
        } else {
          clearTimeout(timer.timerID);
        }
      }
      this[_timers].delete(id);
    })
  }, {
    key: 'clearInterval',
    value: function clearInterval(id) {
      return this.clearTimeout(id);
    }
  }, {
    key: 'clear',
    value: function clear() {
      var _this2 = this;

      // clear all running timers
      var timers = this[_timers];[].concat((0, _toConsumableArray3.default)(timers.keys())).forEach(function (id) {
        _this2.clearTimeout(id);
      });
    }

    /*
      setTimeout(func, {delay: 100, isEntropy: true})
      setTimeout(func, {entropy: 100})
      setTimeout(func, 100})
     */

  }, {
    key: 'setTimeout',
    value: function setTimeout(handler) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { delay: 0 };

      return this[_setTimer](handler, time);
    }
  }, {
    key: 'setInterval',
    value: function setInterval(handler) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { delay: 0 };

      var that = this;
      var id = this[_setTimer](function step() {
        // reset timer before handler cause we may clearTimeout in handler()
        that[_setTimer](step, time, id);
        handler();
      }, time);

      return id;
    }
  }, {
    key: _setTimer,
    value: function value(handler, time) {
      var _this3 = this;

      var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, _symbol2.default)('timerID');

      time = (0, _utils.formatDelay)(time);

      var timer = this[_timers].get(id);
      var delay = void 0,
          timerID = null,
          startTime = void 0,
          startEntropy = void 0;

      if (timer) {
        this.clearTimeout(id);
        if (time.isEntropy) {
          delay = (time.delay - (this.entropy - timer.startEntropy)) / Math.abs(this.playbackRate);
        } else {
          delay = (time.delay - (this.currentTime - timer.startTime)) / this.playbackRate;
        }
        startTime = timer.startTime;
        startEntropy = timer.startEntropy;
      } else {
        delay = time.delay / (time.isEntropy ? Math.abs(this.playbackRate) : this.playbackRate);
        startTime = this.currentTime;
        startEntropy = this.entropy;
      }

      var parent = this[_parent],
          globalTimeout = parent ? parent.setTimeout.bind(parent) : setTimeout;

      var heading = time.heading;
      // console.log(heading, parent, delay)
      if (!parent && heading === false && delay < 0) {
        delay = Infinity;
      }

      // if playbackRate is zero, delay will be infinity.
      // For wxapp bugs, cannot use Number.isFinite yet.
      if (isFinite(delay) || parent) {
        // eslint-disable-line no-restricted-globals
        delay = Math.ceil(delay);
        if (globalTimeout !== setTimeout) {
          delay = { delay: delay, heading: heading };
        }
        timerID = globalTimeout(function () {
          _this3[_timers].delete(id);
          handler();
        }, delay);
      }

      this[_timers].set(id, {
        timerID: timerID,
        handler: handler,
        time: time,
        startTime: startTime,
        startEntropy: startEntropy
      });

      return id;
    }
  }, {
    key: 'parent',
    get: function get() {
      return this[_parent];
    }
  }, {
    key: 'lastTimeMark',
    get: function get() {
      return this[_timeMark][this[_timeMark].length - 1];
    }
  }, {
    key: 'currentTime',
    get: function get() {
      var _lastTimeMark = this.lastTimeMark,
          localTime = _lastTimeMark.localTime,
          globalTime = _lastTimeMark.globalTime;

      return localTime + (this.globalTime - globalTime) * this.playbackRate;
    },
    set: function set(time) {
      var _this4 = this;

      var from = this.currentTime,
          to = time,
          timers = this[_timers];

      this.markTime({ time: time });[].concat((0, _toConsumableArray3.default)(timers)).forEach(function (_ref4) {
        var _ref5 = (0, _slicedToArray3.default)(_ref4, 2),
            id = _ref5[0],
            timer = _ref5[1];

        if (!timers.has(id)) return; // Need check because it maybe clearTimeout by former handler().
        var _timer$time = timer.time,
            isEntropy = _timer$time.isEntropy,
            delay = _timer$time.delay,
            heading = _timer$time.heading,
            handler = timer.handler,
            startTime = timer.startTime;


        if (!isEntropy) {
          var endTime = startTime + delay;
          if (delay === 0 || heading !== false && (to - from) * delay <= 0 || from <= endTime && endTime <= to || from >= endTime && endTime >= to) {
            handler();
            _this4.clearTimeout(id);
          }
        } else if (delay === 0) {
          handler();
          _this4.clearTimeout(id);
        }
      });
      this.updateTimers();
    }

    // Both currentTime and entropy should be influenced by playbackRate.
    // If current playbackRate is negative, the currentTime should go backwards
    // while the entropy remain to go forwards.
    // Both of the initial values is set to -originTime

  }, {
    key: 'entropy',
    get: function get() {
      var _lastTimeMark2 = this.lastTimeMark,
          entropy = _lastTimeMark2.entropy,
          globalEntropy = _lastTimeMark2.globalEntropy;

      return entropy + Math.abs((this.globalEntropy - globalEntropy) * this.playbackRate);
    },


    // get globalTime() {
    //   if(this[_parent]) {
    //     return this[_parent].currentTime;
    //   }

    //   return nowtime();
    // }

    // change entropy will NOT cause currentTime changing but may influence the pass
    // and the future of the timeline. (It may change the result of seek***Time)
    // While entropy is set, all the marks behind will be droped
    set: function set(entropy) {
      if (this.entropy > entropy) {
        var idx = this.seekTimeMark(entropy);
        this[_timeMark].length = idx + 1;
      }
      this.markTime({ entropy: entropy });
      this.updateTimers();
    }
  }, {
    key: 'globalEntropy',
    get: function get() {
      return this[_parent] ? this[_parent].entropy : this.globalTime;
    }
  }, {
    key: 'playbackRate',
    get: function get() {
      return this[_playbackRate];
    },
    set: function set(rate) {
      if (rate !== this.playbackRate) {
        this.markTime({ playbackRate: rate });
        this[_playbackRate] = rate;
        this.updateTimers();
      }
    }
  }, {
    key: 'paused',
    get: function get() {
      if (this.playbackRate === 0) return true;
      var parent = this.parent;
      while (parent) {
        if (parent.playbackRate === 0) return true;
        parent = parent.parent;
      }
      return false;
    }
  }]);
  return Timeline;
}();

exports.default = Timeline;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(85);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(137);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(86), __esModule: true };

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(87);
__webpack_require__(133);
module.exports = __webpack_require__(135);


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(88);
var global = __webpack_require__(99);
var hide = __webpack_require__(103);
var Iterators = __webpack_require__(91);
var TO_STRING_TAG = __webpack_require__(130)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(89);
var step = __webpack_require__(90);
var Iterators = __webpack_require__(91);
var toIObject = __webpack_require__(92);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(96)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(93);
var defined = __webpack_require__(95);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(94);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 94 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 95 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(97);
var $export = __webpack_require__(98);
var redefine = __webpack_require__(114);
var hide = __webpack_require__(103);
var Iterators = __webpack_require__(91);
var $iterCreate = __webpack_require__(115);
var setToStringTag = __webpack_require__(129);
var getPrototypeOf = __webpack_require__(131);
var ITERATOR = __webpack_require__(130)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(99);
var core = __webpack_require__(100);
var ctx = __webpack_require__(101);
var hide = __webpack_require__(103);
var has = __webpack_require__(113);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 99 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 100 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(102);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(104);
var createDesc = __webpack_require__(112);
module.exports = __webpack_require__(108) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(105);
var IE8_DOM_DEFINE = __webpack_require__(107);
var toPrimitive = __webpack_require__(111);
var dP = Object.defineProperty;

exports.f = __webpack_require__(108) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(106);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(108) && !__webpack_require__(109)(function () {
  return Object.defineProperty(__webpack_require__(110)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(109)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(106);
var document = __webpack_require__(99).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(106);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 113 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(103);


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(116);
var descriptor = __webpack_require__(112);
var setToStringTag = __webpack_require__(129);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(103)(IteratorPrototype, __webpack_require__(130)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(105);
var dPs = __webpack_require__(117);
var enumBugKeys = __webpack_require__(127);
var IE_PROTO = __webpack_require__(124)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(110)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(128).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(104);
var anObject = __webpack_require__(105);
var getKeys = __webpack_require__(118);

module.exports = __webpack_require__(108) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(119);
var enumBugKeys = __webpack_require__(127);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(113);
var toIObject = __webpack_require__(92);
var arrayIndexOf = __webpack_require__(120)(false);
var IE_PROTO = __webpack_require__(124)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(92);
var toLength = __webpack_require__(121);
var toAbsoluteIndex = __webpack_require__(123);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(122);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 122 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(122);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(125)('keys');
var uid = __webpack_require__(126);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(100);
var global = __webpack_require__(99);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(97) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 126 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 127 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(99).document;
module.exports = document && document.documentElement;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(104).f;
var has = __webpack_require__(113);
var TAG = __webpack_require__(130)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(125)('wks');
var uid = __webpack_require__(126);
var Symbol = __webpack_require__(99).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(113);
var toObject = __webpack_require__(132);
var IE_PROTO = __webpack_require__(124)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(95);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(134)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(96)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(122);
var defined = __webpack_require__(95);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(136);
var ITERATOR = __webpack_require__(130)('iterator');
var Iterators = __webpack_require__(91);
module.exports = __webpack_require__(100).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(94);
var TAG = __webpack_require__(130)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(138), __esModule: true };

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(87);
__webpack_require__(133);
module.exports = __webpack_require__(139);


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(105);
var get = __webpack_require__(140);
module.exports = __webpack_require__(100).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(136);
var ITERATOR = __webpack_require__(130)('iterator');
var Iterators = __webpack_require__(91);
module.exports = __webpack_require__(100).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(142);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(143), __esModule: true };

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(133);
__webpack_require__(144);
module.exports = __webpack_require__(100).Array.from;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(101);
var $export = __webpack_require__(98);
var toObject = __webpack_require__(132);
var call = __webpack_require__(145);
var isArrayIter = __webpack_require__(146);
var toLength = __webpack_require__(121);
var createProperty = __webpack_require__(147);
var getIterFn = __webpack_require__(140);

$export($export.S + $export.F * !__webpack_require__(148)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(105);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(91);
var ITERATOR = __webpack_require__(130)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(104);
var createDesc = __webpack_require__(112);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(130)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(150), __esModule: true };

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(133);
__webpack_require__(87);
__webpack_require__(152);
__webpack_require__(165);
__webpack_require__(168);
__webpack_require__(170);
module.exports = __webpack_require__(100).Map;


/***/ }),
/* 151 */
/***/ (function(module, exports) {



/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(153);
var validate = __webpack_require__(159);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(160)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(104).f;
var create = __webpack_require__(116);
var redefineAll = __webpack_require__(154);
var ctx = __webpack_require__(101);
var anInstance = __webpack_require__(155);
var forOf = __webpack_require__(156);
var $iterDefine = __webpack_require__(96);
var step = __webpack_require__(90);
var setSpecies = __webpack_require__(157);
var DESCRIPTORS = __webpack_require__(108);
var fastKey = __webpack_require__(158).fastKey;
var validate = __webpack_require__(159);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(103);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 155 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(101);
var call = __webpack_require__(145);
var isArrayIter = __webpack_require__(146);
var anObject = __webpack_require__(105);
var toLength = __webpack_require__(121);
var getIterFn = __webpack_require__(140);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(99);
var core = __webpack_require__(100);
var dP = __webpack_require__(104);
var DESCRIPTORS = __webpack_require__(108);
var SPECIES = __webpack_require__(130)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(126)('meta');
var isObject = __webpack_require__(106);
var has = __webpack_require__(113);
var setDesc = __webpack_require__(104).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(109)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(106);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(99);
var $export = __webpack_require__(98);
var meta = __webpack_require__(158);
var fails = __webpack_require__(109);
var hide = __webpack_require__(103);
var redefineAll = __webpack_require__(154);
var forOf = __webpack_require__(156);
var anInstance = __webpack_require__(155);
var isObject = __webpack_require__(106);
var setToStringTag = __webpack_require__(129);
var dP = __webpack_require__(104).f;
var each = __webpack_require__(161)(0);
var DESCRIPTORS = __webpack_require__(108);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(101);
var IObject = __webpack_require__(93);
var toObject = __webpack_require__(132);
var toLength = __webpack_require__(121);
var asc = __webpack_require__(162);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(163);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(106);
var isArray = __webpack_require__(164);
var SPECIES = __webpack_require__(130)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(94);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(98);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(166)('Map') });


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(136);
var from = __webpack_require__(167);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(156);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(169)('Map');


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(98);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(171)('Map');


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(98);
var aFunction = __webpack_require__(102);
var ctx = __webpack_require__(101);
var forOf = __webpack_require__(156);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(173), __esModule: true };

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(174);
module.exports = __webpack_require__(100).Object.assign;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(98);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(175) });


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(108);
var getKeys = __webpack_require__(118);
var gOPS = __webpack_require__(176);
var pIE = __webpack_require__(177);
var toObject = __webpack_require__(132);
var IObject = __webpack_require__(93);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(109)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 176 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 177 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(180);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(181), __esModule: true };

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(182);
var $Object = __webpack_require__(100).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(98);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(108), 'Object', { defineProperty: __webpack_require__(104).f });


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(184), __esModule: true };

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(185);
__webpack_require__(151);
__webpack_require__(192);
__webpack_require__(193);
module.exports = __webpack_require__(100).Symbol;


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(99);
var has = __webpack_require__(113);
var DESCRIPTORS = __webpack_require__(108);
var $export = __webpack_require__(98);
var redefine = __webpack_require__(114);
var META = __webpack_require__(158).KEY;
var $fails = __webpack_require__(109);
var shared = __webpack_require__(125);
var setToStringTag = __webpack_require__(129);
var uid = __webpack_require__(126);
var wks = __webpack_require__(130);
var wksExt = __webpack_require__(186);
var wksDefine = __webpack_require__(187);
var enumKeys = __webpack_require__(188);
var isArray = __webpack_require__(164);
var anObject = __webpack_require__(105);
var isObject = __webpack_require__(106);
var toObject = __webpack_require__(132);
var toIObject = __webpack_require__(92);
var toPrimitive = __webpack_require__(111);
var createDesc = __webpack_require__(112);
var _create = __webpack_require__(116);
var gOPNExt = __webpack_require__(189);
var $GOPD = __webpack_require__(191);
var $GOPS = __webpack_require__(176);
var $DP = __webpack_require__(104);
var $keys = __webpack_require__(118);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(190).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(177).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(97)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(103)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(130);


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(99);
var core = __webpack_require__(100);
var LIBRARY = __webpack_require__(97);
var wksExt = __webpack_require__(186);
var defineProperty = __webpack_require__(104).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(118);
var gOPS = __webpack_require__(176);
var pIE = __webpack_require__(177);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(92);
var gOPN = __webpack_require__(190).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(119);
var hiddenKeys = __webpack_require__(127).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(177);
var createDesc = __webpack_require__(112);
var toIObject = __webpack_require__(92);
var toPrimitive = __webpack_require__(111);
var has = __webpack_require__(113);
var IE8_DOM_DEFINE = __webpack_require__(107);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(108) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(187)('asyncIterator');


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(187)('observable');


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNowTime = createNowTime;
exports.formatDelay = formatDelay;
function createNowTime() {
  var syncLocker = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  var nowtime = null;
  if (Date.now) {
    nowtime = Date.now;
  } else {
    nowtime = function nowtime() {
      return new Date().getTime();
    };
  }

  return nowtime;
}

/*
  delay = 100 -> delay = {delay: 100}
  delay = {entropy: 100} -> delay = {delay: 100, isEntropy: true}
 */
function formatDelay(delay) {
  if (typeof delay === 'number') {
    delay = { delay: delay };
  } else if ('entropy' in delay) {
    delay = { delay: delay.entropy, isEntropy: true };
  }
  return delay;
}

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  // s - startFrame, e - endFrame
  default: function _default(from, to, p, s, e) {
    if (typeof from === 'number' && typeof to === 'number') {
      return from + (p - s) / (e - s) * (to - from);
    }

    if (p - s > e - p) {
      return to;
    }
    return from;
  }
};

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseEasing = exports.Easings = undefined;

var _slicedToArray2 = __webpack_require__(84);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _toConsumableArray2 = __webpack_require__(141);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _map = __webpack_require__(149);

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BezierEasing = __webpack_require__(197);
var bezierFuncCache = new _map2.default();

function getBezierEasing() {
  for (var _len = arguments.length, value = Array(_len), _key = 0; _key < _len; _key++) {
    value[_key] = arguments[_key];
  }

  var easing = bezierFuncCache.get(value);
  if (easing) {
    return easing;
  }
  easing = BezierEasing.apply(undefined, value);
  bezierFuncCache.set(value, easing);
  return easing;
}

function getStepsEasing(step) {
  var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'end';

  return function (p, frames) {
    for (var i = 1; i < frames.length; i++) {
      var offset = frames[i].offset;

      if (p <= offset) {
        var start = frames[i - 1].offset,
            end = offset;
        var fp = (p - start) / (end - start),
            d = 1 / step;

        var t = fp / d;
        if (pos === 'end') {
          t = Math.floor(t);
        } else {
          t = Math.ceil(t);
        }

        return d * t * (end - start) + start;
      }
    }
    return 0;
  };
}

function parseEasingStr(easingStr) {
  var pattern = /^cubic-bezier\((.*)\)/,
      matched = easingStr.match(pattern);

  if (matched) {
    var value = matched[1].trim();
    value = value.split(',').map(function (v) {
      return parseFloat(v.trim());
    });
    return getBezierEasing.apply(undefined, (0, _toConsumableArray3.default)(value));
  }

  pattern = /^steps\((.*)\)/;
  matched = easingStr.match(pattern);

  if (matched) {
    var _value = matched[1].trim();
    _value = _value.split(',').map(function (v) {
      return v.trim();
    });

    var _value2 = _value,
        _value3 = (0, _slicedToArray3.default)(_value2, 2),
        step = _value3[0],
        pos = _value3[1];

    return getStepsEasing(parseInt(step, 10), pos);
  }
  return easingStr;
}

var Easings = {
  linear: function linear(p) {
    return p;
  },

  ease: getBezierEasing(0.25, 0.1, 0.25, 1),
  'ease-in': getBezierEasing(0.42, 0, 1, 1),
  'ease-out': getBezierEasing(0, 0, 0.58, 1),
  'ease-in-out': getBezierEasing(0.42, 0, 0.58, 1),
  // 'step-start': function(p, frames){
  //   let ret = 0
  //   for(let i = 0; i < frames.length; i++){
  //     const {offset} = frames[i]
  //     ret = offset
  //     if(p < offset){
  //       break
  //     }
  //   }
  //   return ret
  // },
  // 'step-end': function(p, frames){
  //   let ret = 0
  //   for(let i = 0; i < frames.length; i++){
  //     const {offset} = frames[i]
  //     if(p < offset){
  //       break
  //     }
  //     ret = offset
  //   }
  //   return ret
  // }
  'step-start': getStepsEasing(1, 'start'),
  'step-end': getStepsEasing(1, 'end')
};

function parseEasing(easing) {
  if (typeof easing === 'string') {
    if (!Easings[easing]) {
      easing = parseEasingStr(easing);
    } else {
      // load default Easing
      easing = Easings[easing];
    }
  } else if (easing.type === 'cubic-bezier') {
    easing = getBezierEasing.apply(undefined, (0, _toConsumableArray3.default)(easing.value));
  } else if (easing.type === 'steps') {
    easing = getStepsEasing(easing.step, easing.pos);
  }
  return easing;
}

exports.Easings = Easings;
exports.parseEasing = parseEasing;

/***/ }),
/* 197 */
/***/ (function(module, exports) {

/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */

// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;

var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

var float32ArraySupported = typeof Float32Array === 'function';

function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
function C (aA1)      { return 3.0 * aA1; }

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }

function binarySubdivide (aX, aA, aB, mX1, mX2) {
  var currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}

function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
 for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
   var currentSlope = getSlope(aGuessT, mX1, mX2);
   if (currentSlope === 0.0) {
     return aGuessT;
   }
   var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
   aGuessT -= currentX / currentSlope;
 }
 return aGuessT;
}

function LinearEasing (x) {
  return x;
}

module.exports = function bezier (mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }

  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }

  // Precompute samples table
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  for (var i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }

  function getTForX (aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;

    // Interpolate to provide an initial guess for t
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;

    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing (x) {
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
};


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(199);

var _promise2 = _interopRequireDefault(_promise);

var _keys = __webpack_require__(212);

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__(172);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(178);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(179);

var _createClass3 = _interopRequireDefault(_createClass2);

var _symbol = __webpack_require__(183);

var _symbol2 = _interopRequireDefault(_symbol);

var _spriteTimeline = __webpack_require__(83);

var _spriteTimeline2 = _interopRequireDefault(_spriteTimeline);

var _utils = __webpack_require__(216);

var _easing = __webpack_require__(196);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _timing = (0, _symbol2.default)('timing'),
    _keyframes = (0, _symbol2.default)('keyframes'),
    _initState = (0, _symbol2.default)('initState'),
    _readyDefer = (0, _symbol2.default)('readyDefer'),
    _finishedDefer = (0, _symbol2.default)('finishedDefer'),
    _effects = (0, _symbol2.default)('effects'),
    _activeReadyTimer = (0, _symbol2.default)('activeReadyTimer'),
    _activeFinishTimer = (0, _symbol2.default)('activeFinishTimer'),
    _removeDefer = (0, _symbol2.default)('removeDefer');

/**
  easing: {
    type: 'cubic-bezier',
    value: [...]
  }
  easing: {
    type: 'steps',
    step: 1,
    pos: 'end'
  }
 */
var defaultTiming = {
  delay: 0,
  endDelay: 0,
  fill: 'auto',
  iterations: 1.0,
  playbackRate: 1.0,
  direction: 'normal',
  easing: 'linear',
  effect: null
};

/**
  animation: play --> delay --> effect --> endDelay
  playState: idle --> pending --> running --> pending --> finished
 */

var _class = function () {
  function _class(initState, keyframes, timing) {
    var _this = this;

    (0, _classCallCheck3.default)(this, _class);

    if (Array.isArray(initState)) {
      var _ref = [initState[0], initState, keyframes];
      // 如果 initState 缺省，默认 keyframes 的第一帧为 initState

      initState = _ref[0];
      keyframes = _ref[1];
      timing = _ref[2];
    }

    if (typeof timing === 'number') {
      timing = { duration: timing };
    }

    this[_timing] = (0, _assign2.default)({}, defaultTiming, timing);
    this[_timing].easing = (0, _easing.parseEasing)(this[_timing].easing);
    this[_keyframes] = (0, _utils.calculateFramesOffset)(keyframes);

    var lastFrame = this[_keyframes][this[_keyframes].length - 1];

    this[_initState] = {}; // 初始状态

    (0, _keys2.default)(lastFrame).forEach(function (key) {
      if (Object.prototype.hasOwnProperty.call(initState, key)) {
        if (key !== 'easing' && key !== 'offset') {
          _this[_initState][key] = initState[key];
        }
      }
    });

    // 补齐参数
    this[_keyframes] = this[_keyframes].map(function (frame) {
      return (0, _assign2.default)({}, _this[_initState], frame);
    });

    if (this[_keyframes][0].offset !== 0) {
      // 要补第一帧
      this[_keyframes].unshift((0, _assign2.default)({}, this[_initState], { offset: 0 }));
    }
    if (lastFrame.offset < 1) {
      // 要补最后一帧
      this[_keyframes].push((0, _assign2.default)({}, lastFrame, { offset: 1 }));
    }

    this[_effects] = {};
    this.timeline = null; // idle, no effect
  }

  (0, _createClass3.default)(_class, [{
    key: 'pause',
    value: function pause() {
      this.timeline.playbackRate = 0;
    }
  }, {
    key: _activeReadyTimer,
    value: function value() {
      var _this2 = this;

      if (this[_readyDefer] && !this[_readyDefer].timerID) {
        if (this.timeline.currentTime < 0) {
          this[_readyDefer].timerID = this.timeline.setTimeout(function () {
            _this2[_readyDefer].resolve();
            delete _this2[_readyDefer];
          }, { delay: -this.timeline.currentTime, heading: false });
        } else {
          this[_readyDefer].timerID = this.timeline.setTimeout(function () {
            _this2[_readyDefer].resolve();
            delete _this2[_readyDefer];
          }, { delay: 0, isEntropy: true });
        }
      }
    }
  }, {
    key: _activeFinishTimer,
    value: function value() {
      var _this3 = this;

      var _timing2 = this[_timing],
          duration = _timing2.duration,
          iterations = _timing2.iterations,
          endDelay = _timing2.endDelay;

      var delay = Math.ceil(duration * iterations + endDelay - this.timeline.currentTime) + 1;
      if (this[_finishedDefer] && !this[_finishedDefer].timerID) {
        this[_finishedDefer].timerID = this.timeline.setTimeout(function () {
          _this3[_finishedDefer].resolve();
          _this3[_removeDefer](_readyDefer);
          _this3[_removeDefer](_finishedDefer);
        }, { delay: delay, heading: false });
        this[_finishedDefer].reverseTimerID = this.timeline.setTimeout(function () {
          _this3[_finishedDefer].resolve();
          _this3[_removeDefer](_readyDefer);
          _this3[_removeDefer](_finishedDefer);
          _this3.timeline = null;
        }, { delay: -this[_timing].delay - 1, heading: false });
      }
    }
  }, {
    key: 'play',
    value: function play() {
      if (this.playState === 'finished') {
        this.cancel();
      }

      if (this.playState === 'idle') {
        if (this.playbackRate <= 0) {
          return;
        }
        var _timing3 = this[_timing],
            delay = _timing3.delay,
            playbackRate = _timing3.playbackRate,
            timeline = _timing3.timeline;

        this.timeline = new _spriteTimeline2.default({
          originTime: delay,
          playbackRate: playbackRate
        }, timeline);
        this[_activeReadyTimer]();
        this[_activeFinishTimer]();
      } else if (this.playState === 'paused') {
        this.timeline.playbackRate = this.playbackRate;
        this[_activeReadyTimer]();
      }
    }
  }, {
    key: _removeDefer,
    value: function value(deferID) {
      var defered = this[deferID],
          timeline = this.timeline;


      if (defered && timeline) {
        timeline.clearTimeout(defered.timerID);
        if (defered.reverseTimerID) {
          timeline.clearTimeout(defered.reverseTimerID);
        }
      }
      delete this[deferID];
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      this[_removeDefer](_readyDefer);
      this[_removeDefer](_finishedDefer);
      this.timeline = null;
    }
  }, {
    key: 'finish',
    value: function finish() {
      if (this.timeline) {
        this.timeline.currentTime = Infinity / this.playbackRate;
      }
      this[_removeDefer](_readyDefer);
      this[_removeDefer](_finishedDefer);
    }
  }, {
    key: 'applyEffects',
    value: function applyEffects(effects) {
      return (0, _assign2.default)(this[_effects], effects);
    }
  }, {
    key: 'playbackRate',
    get: function get() {
      return this[_timing].playbackRate;
    },
    set: function set(rate) {
      if (this.timeline) {
        this.timeline.playbackRate = rate;
      }
      this[_timing].playbackRate = rate;
    }
  }, {
    key: 'playState',
    get: function get() {
      var timeline = this.timeline,
          _timing4 = this[_timing],
          iterations = _timing4.iterations,
          duration = _timing4.duration,
          endDelay = _timing4.endDelay;

      var state = 'running';

      if (timeline == null) {
        state = 'idle';
      } else if (timeline.paused) {
        state = 'paused';
      } else if (timeline.currentTime < 0) {
        // 开始 pending
        state = 'pending';
      } else {
        var ed = timeline.currentTime - iterations * duration;
        if (ed > 0 && ed < endDelay) {
          // 结束 pending
          state = 'pending';
        } else if (ed >= endDelay) {
          state = 'finished';
        }
      }
      return state;
    }
  }, {
    key: 'progress',
    get: function get() {
      if (!this.timeline) return 0;

      var _timing5 = this[_timing],
          duration = _timing5.duration,
          iterations = _timing5.iterations;

      var timeline = this.timeline,
          playState = this.playState;

      var p = void 0;

      if (playState === 'idle') {
        p = 0;
      } else if (playState === 'paused' && timeline.currentTime < 0) {
        p = 0;
      } else if (playState === 'pending') {
        if (timeline.currentTime < 0) {
          p = 0;
        } else {
          var time = timeline.seekLocalTime(iterations * duration);
          p = (0, _utils.periodicity)(time, duration)[1] / duration;
        }
      } else if (playState === 'running' || playState === 'paused') {
        p = (0, _utils.periodicity)(timeline.currentTime, duration)[1] / duration;
      }

      if (playState === 'finished') {
        p = (0, _utils.periodicity)(iterations, 1)[1];
      }

      return p;
    }
  }, {
    key: 'frame',
    get: function get() {
      var playState = this.playState,
          initState = this[_initState],
          fill = this[_timing].fill;


      if (playState === 'idle') {
        return initState;
      }

      var currentTime = this.timeline.currentTime,
          keyframes = this[_keyframes].slice(0);

      var _getProgress = (0, _utils.getProgress)(this.timeline, this[_timing], this.progress),
          p = _getProgress.p,
          inverted = _getProgress.inverted;

      var frameState = initState;
      if (currentTime < 0 && playState === 'pending') {
        // 在开始前 delay 阶段
        if (fill === 'backwards' || fill === 'both') {
          frameState = inverted ? keyframes[keyframes.length - 1] : keyframes[0];
        }
      } else if (playState !== 'pending' && playState !== 'finished' || fill === 'forwards' || fill === 'both') {
        // 不在 endDelay 或结束状态，或 forwards
        frameState = (0, _utils.getCurrentFrame)(this[_timing], keyframes, this[_effects], p);
      }
      return frameState;
    }
  }, {
    key: 'timing',
    get: function get() {
      return this[_timing];
    }
  }, {
    key: 'baseTimeline',
    set: function set(timeline) {
      this[_timing].timeline = timeline;
    },
    get: function get() {
      return this[_timing].timeline;
    }
  }, {
    key: 'ready',
    get: function get() {
      if (this[_readyDefer]) {
        return this[_readyDefer].promise;
      }

      if (this.timeline && this.timeline.currentTime >= 0) {
        if (this.playState !== 'paused') {
          return _promise2.default.resolve();
        }
      }

      this[_readyDefer] = (0, _utils.defer)();
      if (this.timeline) {
        // 已经在 pending 状态
        this[_activeReadyTimer]();
      }
      if (this[_readyDefer]) {
        return this[_readyDefer].promise;
      }
      return _promise2.default.resolve();
    }
  }, {
    key: 'finished',
    get: function get() {
      if (this.playState === 'finished') {
        return _promise2.default.resolve();
      }
      if (!this[_finishedDefer]) {
        this[_finishedDefer] = (0, _utils.defer)();

        if (this.timeline) {
          this[_activeFinishTimer]();
        }
      }

      return this[_finishedDefer].promise;
    }
  }]);
  return _class;
}();

exports.default = _class;

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(200), __esModule: true };

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(133);
__webpack_require__(87);
__webpack_require__(201);
__webpack_require__(210);
__webpack_require__(211);
module.exports = __webpack_require__(100).Promise;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(97);
var global = __webpack_require__(99);
var ctx = __webpack_require__(101);
var classof = __webpack_require__(136);
var $export = __webpack_require__(98);
var isObject = __webpack_require__(106);
var aFunction = __webpack_require__(102);
var anInstance = __webpack_require__(155);
var forOf = __webpack_require__(156);
var speciesConstructor = __webpack_require__(202);
var task = __webpack_require__(203).set;
var microtask = __webpack_require__(205)();
var newPromiseCapabilityModule = __webpack_require__(206);
var perform = __webpack_require__(207);
var userAgent = __webpack_require__(208);
var promiseResolve = __webpack_require__(209);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(130)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(154)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(129)($Promise, PROMISE);
__webpack_require__(157)(PROMISE);
Wrapper = __webpack_require__(100)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(148)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(105);
var aFunction = __webpack_require__(102);
var SPECIES = __webpack_require__(130)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(101);
var invoke = __webpack_require__(204);
var html = __webpack_require__(128);
var cel = __webpack_require__(110);
var global = __webpack_require__(99);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(94)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 204 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(99);
var macrotask = __webpack_require__(203).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(94)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(102);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(99);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(105);
var isObject = __webpack_require__(106);
var newPromiseCapability = __webpack_require__(206);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(98);
var core = __webpack_require__(100);
var global = __webpack_require__(99);
var speciesConstructor = __webpack_require__(202);
var promiseResolve = __webpack_require__(209);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(98);
var newPromiseCapability = __webpack_require__(206);
var perform = __webpack_require__(207);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(213), __esModule: true };

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(214);
module.exports = __webpack_require__(100).Object.keys;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(132);
var $keys = __webpack_require__(118);

__webpack_require__(215)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(98);
var core = __webpack_require__(100);
var fails = __webpack_require__(109);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(84);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = __webpack_require__(217);

var _entries2 = _interopRequireDefault(_entries);

var _assign = __webpack_require__(172);

var _assign2 = _interopRequireDefault(_assign);

var _promise = __webpack_require__(199);

var _promise2 = _interopRequireDefault(_promise);

exports.defer = defer;
exports.periodicity = periodicity;
exports.calculateFramesOffset = calculateFramesOffset;
exports.getProgress = getProgress;
exports.getCurrentFrame = getCurrentFrame;

var _easing2 = __webpack_require__(196);

var _effect = __webpack_require__(195);

var _effect2 = _interopRequireDefault(_effect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function defer() {
  var ret = {};
  ret.promise = new _promise2.default(function (resolve, reject) {
    ret.resolve = resolve;
    ret.reject = reject;
  });
  return ret;
}

function periodicity(val, dur) {
  var t = Math.floor(val / dur);
  var v = val - t * dur;
  if (v === 0 && t > 0) {
    v = dur;
    t--;
  }
  return [t, v];
}

function calculateFramesOffset(keyframes) {
  keyframes = keyframes.slice(0);

  var firstFrame = keyframes[0],
      lastFrame = keyframes[keyframes.length - 1];

  lastFrame.offset = lastFrame.offset || 1;
  firstFrame.offset = firstFrame.offset || 0;

  var offset = 0,
      offsetFrom = -1;

  for (var i = 0; i < keyframes.length; i++) {
    var frame = keyframes[i];
    if (frame.offset != null) {
      var dis = i - offsetFrom;
      if (dis > 1) {
        var delta = (frame.offset - offset) / dis;
        for (var j = 0; j < dis - 1; j++) {
          keyframes[offsetFrom + j + 1].offset = offset + delta * (j + 1);
        }
      }
      offset = frame.offset;
      offsetFrom = i;
    }
    if (frame.easing != null) {
      frame.easing = (0, _easing2.parseEasing)(frame.easing);
    }
    if (i > 0) {
      var hasEasing = keyframes[i].easing != null;
      // 如果中间某个属性没有了，需要从前一帧复制过来
      keyframes[i] = (0, _assign2.default)({}, keyframes[i - 1], keyframes[i]);
      if (!hasEasing) {
        // easing 不能复制
        delete keyframes[i].easing;
      }
    }
  }

  return keyframes;
}

function getProgress(timeline, timing, p) {
  var currentTime = timeline.currentTime,
      direction = timing.direction,
      duration = timing.duration;

  var inverted = false;
  if (direction === 'reverse') {
    p = 1 - p;
    inverted = true;
  } else if (direction === 'alternate' || direction === 'alternate-reverse') {
    var period = Math.floor(currentTime / duration);

    if (p === 1) period--;
    // period = Math.max(0, period)

    if (period % 2 ^ direction === 'alternate-reverse') {
      p = 1 - p;
      inverted = true;
    }
  }
  return { p: p, inverted: inverted };
}

function calculateFrame(previousFrame, nextFrame, effects, p) {
  var ret = {};
  (0, _entries2.default)(nextFrame).forEach(function (_ref) {
    var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (key !== 'offset' && key !== 'easing') {
      var effect = effects[key] || effects.default;

      var v = effect(previousFrame[key], value, p, previousFrame.offset, nextFrame.offset);

      if (v != null) {
        ret[key] = v;
      }
    }
  });
  return ret;
}

function getCurrentFrame(timing, keyframes, effects, p) {
  var easing = timing.easing,
      effect = timing.effect;


  if (!effect) {
    // timing.effect 会覆盖掉 Effects 和 animator.applyEffects 中定义的 effects
    effects = (0, _assign2.default)({}, effects, _effect2.default);
  }

  var ret = {};

  p = easing(p, keyframes);

  for (var i = 1; i < keyframes.length; i++) {
    var frame = keyframes[i],
        offset = frame.offset;

    if (offset >= p || i === keyframes.length - 1) {
      var previousFrame = keyframes[i - 1],
          previousOffset = previousFrame.offset,
          _easing = previousFrame.easing;

      var ep = p;
      if (_easing) {
        var d = offset - previousOffset;
        ep = _easing((p - previousOffset) / d) * d + previousOffset;
      }

      if (effect) {
        ret = effect(previousFrame, frame, ep, previousOffset, offset);
      } else {
        ret = calculateFrame(previousFrame, frame, effects, ep);
      }
      break;
    }
  }

  return ret;
}

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(218), __esModule: true };

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(219);
module.exports = __webpack_require__(100).Object.entries;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(98);
var $entries = __webpack_require__(220)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(108);
var getKeys = __webpack_require__(118);
var toIObject = __webpack_require__(92);
var isEnum = __webpack_require__(177).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

const nodeMap = new Map();

function createElement(nodeName, attrs = {}, children = []) {
  nodeName = nodeName.toLowerCase();
  const Element = nodeMap.get(nodeName);
  if (!Element) throw new TypeError(`Invalid node: ${nodeName}`);
  const elem = new Element(attrs);
  children.forEach(child => {
    elem.appendChild(child);
  });
  return elem;
}

const ownerDocument = {
  registerNode(Node, nodeName, nodeType = 100) {
    nodeName = nodeName.toLowerCase();
    if (nodeMap.has(nodeName)) throw new TypeError(`Cannot registerNode, ${nodeName} has been taken.`);
    nodeMap.set(nodeName, Node);
    Object.defineProperties(Node.prototype, {
      nodeType: {
        value: nodeType
      },
      tagName: {
        value: nodeName.toUpperCase()
      },
      nodeName: {
        value: nodeName
      },
      ownerDocument: {
        value: ownerDocument
      },
      namespaceURI: {
        value: `http://spritejs.org/${nodeName}`
      }
    });
  },

  createElement,

  createElementNS(uri, name) {
    return createElement(name);
  },

  isSpriteNode(nodeName) {
    return nodeMap.has(nodeName.toLowerCase());
  }

};
/* harmony default export */ __webpack_exports__["default"] = (ownerDocument);

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Event; });
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

const _type = Symbol('type');

const _bubbles = Symbol('bubbles');

const _originalEvent = Symbol('originalEvent');

const _detail = Symbol('detail');

class Event {
  constructor(originalEvent, {
    bubbles = null
  } = {}) {
    if (typeof originalEvent === 'string') {
      this[_type] = originalEvent;
      this[_bubbles] = !!bubbles;
    } else {
      this[_type] = originalEvent.type;
      this[_originalEvent] = originalEvent;
      this[_bubbles] = bubbles != null ? !!bubbles : !!originalEvent.bubbles;

      if (originalEvent.detail) {
        this[_detail] = originalEvent.detail;
      }
    }

    if (!this[_type]) throw new TypeError('Invalid event type.');
    this.cancelBubble = false;
  }

  setOriginalEvent(originalEvent) {
    this[_originalEvent] = originalEvent;
  }

  get originalEvent() {
    return this[_originalEvent];
  }

  get type() {
    return this[_type];
  }

  get bubbles() {
    return this[_bubbles];
  }

  get detail() {
    return this[_detail];
  }

  stopPropagation() {
    this.cancelBubble = true;
  }

}

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseFilterString", function() { return parseFilterString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyFilters", function() { return applyFilters; });
/* harmony import */ var _attribute_value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);


function parseFilterString(filterStr) {
  filterStr = filterStr.trim();
  if (!filterStr || filterStr === 'none') return null;
  const filterReg = /^(?:(url|blur|brightness|contrast|drop-shadow|grayscale|hue-rotate|invert|opacity|saturate|sepia)\(([^()]+)\))+$/i;
  const filters = filterStr.match(/^(?:(url|blur|brightness|contrast|drop-shadow|grayscale|hue-rotate|invert|opacity|saturate|sepia)\(([^()]+)\))+$/ig);
  const ret = [];

  if (filters) {
    filters.forEach(filter => {
      const matched = filter.match(filterReg);
      if (!matched) throw new TypeError('Invalid fitler string.');
      let [, type, args] = matched;
      args = args.trim().split(/\s+/g).map((n, i) => {
        let value;

        if (type === 'url' || type === 'drop-shadow' && i === 3) {
          value = n;
        } else {
          value = Object(_attribute_value__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(n);
        }

        if (/%$/.test(n)) {
          value /= 100;
        }

        return value;
      });
      ret.push({
        type,
        args
      });
    });
  }

  return ret;
}
function applyFilters(mesh, filters) {
  mesh.clearFilter();

  if (filters) {
    filters.forEach(({
      type,
      args
    }) => {
      let method = type;
      if (method === 'drop-shadow') method = 'dropShadow';else if (method === 'hue-rotate') method = 'hueRotate';
      mesh[method](...args);
    });
  }
}

/***/ }),
/* 224 */,
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTexture", function() { return loadTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyTexture", function() { return applyTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTexture", function() { return createTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawTexture", function() { return drawTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFrames", function() { return loadFrames; });
/* harmony import */ var _mesh_js_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _attribute_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);



const loadedTextures = {};
function loadTexture(src, alias) {
  if (loadedTextures[src]) return loadedTextures[src];
  const img = _mesh_js_core__WEBPACK_IMPORTED_MODULE_0__["ENV"].loadImage(src, {
    alias,
    useImageBitmap: false
  });
  return img != null ? img : src;
}
async function applyTexture(node, image, updateContours) {
  let textureImage = image;

  if (typeof image === 'string') {
    textureImage = loadTexture(image);
  }

  if (typeof textureImage.then === 'function') {
    textureImage = await textureImage;
  }

  if (image === node.attributes.texture) {
    if (textureImage.image) {
      if (textureImage.sourceRect) {
        node.attributes.sourceRect = textureImage.sourceRect;
      }

      node.textureImageRotated = !!textureImage.rotated;
      textureImage = textureImage.image;
    }

    const {
      width,
      height,
      textureRect
    } = node.attributes;
    const oldImage = node.textureImage;
    node.textureImage = textureImage;

    if (updateContours && oldImage !== textureImage && !textureRect && (width == null || height == null)) {
      node.updateContours();
    }

    node.forceUpdate();
  }

  return textureImage;
}

const _textureMap = Symbol('textureMap');

function createTexture(image, renderer) {
  renderer[_textureMap] = renderer[_textureMap] || new Map();

  if (renderer[_textureMap].has(image)) {
    return renderer[_textureMap].get(image);
  }

  const texture = renderer.createTexture(image);

  renderer[_textureMap].set(image, texture);

  return texture;
}

const _textureContext = Symbol('textureContext');

function drawTexture(node, mesh) {
  const textureImage = node.textureImage;
  const textureImageRotated = node.textureImageRotated;

  if (textureImage) {
    const texture = mesh.texture;
    const contentRect = node.originalContentRect;
    let textureRect = node.attributes.textureRect;
    const textureRepeat = node.attributes.textureRepeat;
    const sourceRect = node.attributes.sourceRect;

    if (!texture || node[_textureContext] && node[_textureContext] !== node.renderer || texture.image !== textureImage || texture.options.repeat !== textureRepeat || !Object(_attribute_value__WEBPACK_IMPORTED_MODULE_1__["compareValue"])(texture.options.rect, textureRect) || !Object(_attribute_value__WEBPACK_IMPORTED_MODULE_1__["compareValue"])(texture.options.srcRect, sourceRect)) {
      const newTexture = createTexture(textureImage, node.renderer);

      if (textureRect) {
        textureRect[0] += contentRect[0];
        textureRect[1] += contentRect[1];
      } else {
        textureRect = contentRect;
      }

      mesh.setTexture(newTexture, {
        rect: textureRect,
        repeat: textureRepeat,
        srcRect: sourceRect,
        rotated: textureImageRotated
      });
      node[_textureContext] = node.renderer;
    }
  }
}
/**
  u3d-json compatible: https://www.codeandweb.com/texturepacker
  {
    frames: {
      key: {
        frame: {x, y, w, h},
        trimmed: ...,
        rotated: true|false,
        spriteSourceSize: {x, y, w, h},
        sourceSize: {w, h}
      }
    }
  }
  */

async function loadFrames(src, frameData) {
  if (typeof frameData === 'string') {
    const response = await fetch(frameData, {
      method: 'GET',
      mode: 'cors',
      cache: 'default'
    });
    frameData = await response.json();
  }

  const texture = await loadTexture(src);
  const frames = frameData.frames;
  Object.entries(frames).forEach(([key, frame]) => {
    const {
      x,
      y,
      w,
      h
    } = frame.frame;
    let sourceRect = [x, y, w, h];
    const rotated = frame.rotated;

    if (rotated) {
      sourceRect = [sourceRect[0], sourceRect[1], sourceRect[3], sourceRect[2]];
    }

    loadedTextures[key] = {
      image: texture,
      sourceRect,
      rotated
    };
  });
  return texture;
}

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Block; });
/* harmony import */ var _mesh_js_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78);
/* harmony import */ var _attribute_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(227);
/* harmony import */ var _utils_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(228);
/* harmony import */ var _utils_border_radius__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(229);
/* harmony import */ var _utils_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(223);
/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(221);
/* harmony import */ var _utils_bounding_box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(230);
/* harmony import */ var _utils_render_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(231);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const _mesh = Symbol('mesh');

class Block extends _node__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(attrs = {}) {
    super(attrs);
  }

  get borderSize() {
    const {
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      borderWidth
    } = this.attributes;
    const [width, height] = this.contentSize;
    return [paddingLeft + width + paddingRight + borderWidth, paddingTop + height + paddingBottom + borderWidth];
  } // content + padding


  get clientSize() {
    const {
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft
    } = this.attributes;
    const [width, height] = this.contentSize;
    return [paddingLeft + width + paddingRight, paddingTop + height + paddingBottom];
  }

  get contentSize() {
    let {
      width,
      height,
      boxSizing
    } = this.attributes;
    width = width || 0;
    height = height || 0;

    if (boxSizing === 'border-box') {
      const bw = 2 * this.attributes.borderWidth;
      width -= bw;
      height -= bw;
      width = Math.max(0, width);
      height = Math.max(0, height);
    }

    return [width, height];
  }

  get hasBackground() {
    return !!this.attributes.bgcolor;
  }

  get hasBorder() {
    const borderWidth = this.attributes.borderWidth;
    return borderWidth > 0;
  }
  /* override */


  get isVisible() {
    const [width, height] = this.borderSize;
    return width > 0 && height > 0;
  }

  get mesh() {
    if (this.attributes.display === 'none') return null;
    const box = this.clientBox;

    if (box) {
      let mesh = this[_mesh];

      if (!mesh) {
        mesh = new _mesh_js_core__WEBPACK_IMPORTED_MODULE_0__["Mesh2D"](box, this.getResolution());
        mesh.box = box;
        const fillColor = this.attributes.bgcolor;

        if (this.hasBackground) {
          Object(_utils_color__WEBPACK_IMPORTED_MODULE_3__["setFillColor"])(mesh, {
            color: fillColor
          });
        }

        if (this.hasBorder) {
          const {
            borderColor,
            borderWidth,
            borderDash,
            borderDashOffset
          } = this.attributes;
          Object(_utils_color__WEBPACK_IMPORTED_MODULE_3__["setStrokeColor"])(mesh, {
            color: borderColor,
            lineWidth: borderWidth,
            lineDash: borderDash,
            lineDashOffset: borderDashOffset
          });
        }

        mesh.setOpacity(this.attributes.opacity);
        this[_mesh] = mesh;
      } else if (mesh.box !== box) {
        mesh.contours = box.contours;
        mesh.path = box;
      }

      mesh.setTransform(...this.renderMatrix);
      return mesh;
    }

    return null;
  } // content + padding + border


  get offsetSize() {
    const {
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      borderWidth
    } = this.attributes;
    const [width, height] = this.contentSize;
    const bw2 = 2 * borderWidth;
    return [paddingLeft + width + paddingRight + bw2, paddingTop + height + paddingBottom + bw2];
  }

  get originalClientRect() {
    if (this.clientBox) {
      const boundingBox = this.mesh.boundingBox;
      return [boundingBox[0][0], boundingBox[0][1], boundingBox[1][0] - boundingBox[0][0], boundingBox[1][1] - boundingBox[0][1]];
    }

    return [0, 0, 0, 0];
  }

  get originalContentRect() {
    const [left, top, width, height] = this.originalClientRect;
    const padding = this.attributes.padding;
    return [left + padding[0], top + padding[1], width - padding[0] - padding[2], height - padding[1] - padding[3]];
  }

  getBoundingClientRect() {
    let boundingBox = null;

    if (this.mesh) {
      boundingBox = [...this.mesh.boundingBox];
      const borderWidth = this.attributes.borderWidth;

      if (borderWidth) {
        boundingBox[0] = [boundingBox[0][0] - borderWidth, boundingBox[0][1] - borderWidth];
        boundingBox[1] = [boundingBox[1][0] + borderWidth, boundingBox[1][1] + borderWidth];
      }
    }

    return Object(_utils_bounding_box__WEBPACK_IMPORTED_MODULE_7__["default"])(boundingBox, this.renderMatrix);
  } // transformPoint(x, y) {
  //   const m = mat2d.invert(this.renderMatrix);
  //   const newX = x * m[0] + y * m[2] + m[4];
  //   const newY = x * m[1] + y * m[3] + m[5];
  //   return [newX, newY];
  // }

  /* override */


  draw(meshes = []) {
    // if(!this.isVisible) return meshes;
    const mesh = this.mesh;

    if (mesh) {
      Object(_utils_filter__WEBPACK_IMPORTED_MODULE_5__["applyFilters"])(mesh, this.filters);
      meshes.push(mesh);
      Object(_utils_render_event__WEBPACK_IMPORTED_MODULE_8__["default"])(this, mesh);
    }

    return meshes;
  }
  /* override */


  onPropertyChange(key, newValue, oldValue) {
    // eslint-disable-line complexity
    super.onPropertyChange(key, newValue, oldValue);

    if (key === 'anchorX' || key === 'anchorY' || key === 'boxSizing' || key === 'width' || key === 'height' || key === 'borderWidth' || key === 'paddingLeft' || key === 'paddingRight' || key === 'paddingTop' || key === 'paddingBottom' || /^border(TopLeft|TopRight|BottomRight|BottomLeft)Radius$/.test(key)) {
      this.updateContours();
    }

    if (key === 'opacity') {
      if (this[_mesh]) this[_mesh].setOpacity(newValue);
    } // if(key === 'anchorX' || key === 'anchorY' || key === 'boxSizing') {
    //   if(this[_mesh]) {
    //     const bgcolor = this.attributes.bgcolor;
    //     if(bgcolor && bgcolor.vector) {
    //       setFillColor(this[_mesh], {color: bgcolor});
    //     }
    //     const borderColor = this.attributes.borderColor;
    //     if(borderColor && borderColor.vector) {
    //       const {borderWidth, borderDash, borderDashOffset} = this.attributes;
    //       setStrokeColor(this[_mesh],
    //         {color: borderColor, lineWidth: borderWidth, lineDash: borderDash, lineDashOffset: borderDashOffset});
    //     }
    //   }
    // }


    if (this[_mesh] && key === 'bgcolor') {
      Object(_utils_color__WEBPACK_IMPORTED_MODULE_3__["setFillColor"])(this[_mesh], {
        color: newValue
      });
    }

    if (this[_mesh] && (key === 'borderColor' || key === 'borderWidth' || key === 'borderDash' || key === 'borderDashOffset')) {
      const {
        borderColor,
        borderWidth,
        borderDash,
        borderDashOffset
      } = this.attributes;
      Object(_utils_color__WEBPACK_IMPORTED_MODULE_3__["setStrokeColor"])(this[_mesh], {
        color: borderColor,
        lineWidth: borderWidth,
        lineDash: borderDash,
        lineDashOffset: borderDashOffset
      });
    }

    if (key === 'zIndex' && this.parent) {
      this.parent.reorder();
    }
  }
  /* override */


  updateContours() {
    const {
      anchorX,
      anchorY,
      borderWidth,
      borderRadius
    } = this.attributes;
    const [width, height] = this.borderSize;
    const offsetSize = this.offsetSize;
    const bw = 0.5 * borderWidth;
    const left = -anchorX * offsetSize[0] + bw;
    const top = -anchorY * offsetSize[1] + bw;
    this.clientBox = new _mesh_js_core__WEBPACK_IMPORTED_MODULE_0__["Figure2D"]();
    Object(_utils_border_radius__WEBPACK_IMPORTED_MODULE_4__["createRadiusBox"])(this.clientBox, [left, top, width, height], borderRadius);
  }

}

_defineProperty(Block, "Attr", _attribute_block__WEBPACK_IMPORTED_MODULE_2__["default"]);

_document__WEBPACK_IMPORTED_MODULE_6__["default"].registerNode(Block, 'block');

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Block; });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
/* harmony import */ var _utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80);
/* harmony import */ var _utils_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(228);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);




const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');
const setDefault = Symbol.for('spritejs_setAttributeDefault');
const declareAlias = Symbol.for('spritejs_declareAlias');
class Block extends _node__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(subject) {
    super(subject);
    this[setDefault]({
      anchorX: 0,
      anchorY: 0,

      /* anchor */
      width: undefined,
      height: undefined,

      /* size */
      borderWidth: 0,
      borderColor: 'rgba(0,0,0,1)',

      /* border */
      borderDash: undefined,
      borderDashOffset: 0,
      borderTopLeftRadius: [0, 0],
      borderTopRightRadius: [0, 0],
      borderBottomRightRadius: [0, 0],
      borderBottomLeftRadius: [0, 0],

      /* borderRadius */
      bgcolor: undefined,
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,

      /* padding */
      boxSizing: 'content-box'
    });
    this[declareAlias]('anchor', 'size', 'border', 'borderRadius', 'padding');
  }

  get anchorX() {
    return this[getAttribute]('anchorX');
  }

  set anchorX(value) {
    this[setAttribute]('anchorX', Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(value));
  }

  get anchorY() {
    return this[getAttribute]('anchorY');
  }

  set anchorY(value) {
    this[setAttribute]('anchorY', Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(value));
  }

  get anchor() {
    return [this.anchorX, this.anchorY];
  }

  set anchor(value) {
    value = Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__["toArray"])(value);
    if (!Array.isArray(value)) value = [value, value];
    this.anchorX = value[0];
    this.anchorY = value[1];
  }

  get width() {
    return this[getAttribute]('width');
  }

  set width(value) {
    this[setAttribute]('width', Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(value));
  }

  get height() {
    return this[getAttribute]('height');
  }

  set height(value) {
    this[setAttribute]('height', Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(value));
  }

  get size() {
    return [this.width, this.height];
  }

  set size(value) {
    value = Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__["toArray"])(value);
    if (!Array.isArray(value)) value = [value, value];
    this.width = value[0];
    this.height = value[1];
  }

  get borderWidth() {
    return this[getAttribute]('borderWidth');
  }

  set borderWidth(value) {
    this[setAttribute]('borderWidth', Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(value));
  }

  get borderColor() {
    return this[getAttribute]('borderColor');
  }

  set borderColor(value) {
    this[setAttribute]('borderColor', Object(_utils_color__WEBPACK_IMPORTED_MODULE_2__["parseColor"])(value));
  }

  get border() {
    return [this.borderWidth, this.borderColor];
  }

  set border(value) {
    value = Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__["toArray"])(value);
    if (!Array.isArray(value)) value = [value];
    this.borderWidth = value[0];
    if (value[1] != null) this.borderColor = value[1];
  }

  get borderDash() {
    return this[getAttribute]('borderDash');
  }

  set borderDash(value) {
    value = Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__["toArray"])(value, true);
    if (value != null && !Array.isArray(value)) value = [value];
    this[setAttribute]('borderDash', value.map(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__["toNumber"]));
  }

  get borderDashOffset() {
    return this[getAttribute]('borderDashOffset');
  }

  set borderDashOffset(value) {
    this[setAttribute]('borderDashOffset', Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(value));
  }

  get borderTopLeftRadius() {
    return this[getAttribute]('borderTopLeftRadius');
  }

  set borderTopLeftRadius(value) {
    value = Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__["toArray"])(value, true);
    if (!Array.isArray(value)) value = [value, value];
    this[setAttribute]('borderTopLeftRadius', value.map(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__["toNumber"]));
  }

  get borderTopRightRadius() {
    return this[getAttribute]('borderTopRightRadius');
  }

  set borderTopRightRadius(value) {
    value = Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__["toArray"])(value, true);
    if (!Array.isArray(value)) value = [value, value];
    this[setAttribute]('borderTopRightRadius', value.map(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__["toNumber"]));
  }

  get borderBottomRightRadius() {
    return this[getAttribute]('borderBottomRightRadius');
  }

  set borderBottomRightRadius(value) {
    value = Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__["toArray"])(value, true);
    if (!Array.isArray(value)) value = [value, value];
    this[setAttribute]('borderBottomRightRadius', value.map(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__["toNumber"]));
  }

  get borderBottomLeftRadius() {
    return this[getAttribute]('borderBottomLeftRadius');
  }

  set borderBottomLeftRadius(value) {
    value = Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__["toArray"])(value, true);
    if (!Array.isArray(value)) value = [value, value];
    this[setAttribute]('borderBottomLeftRadius', value.map(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__["toNumber"]));
  }

  get borderRadius() {
    return [...this.borderTopLeftRadius, ...this.borderTopRightRadius, ...this.borderBottomRightRadius, ...this.borderBottomLeftRadius];
  }

  set borderRadius(value) {
    value = Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__["toArray"])(value);
    if (!Array.isArray(value)) value = Array(8).fill(value);else if (value.length === 2) value = [value[0], value[1], value[0], value[1], value[0], value[1], value[0], value[1]];else if (value.length === 4) value = [value[0], value[1], value[2], value[3], value[0], value[1], value[2], value[3]];else if (value.length === 6) value = [value[0], value[1], value[2], value[3], value[4], value[5], value[2], value[3]];else if (value.length !== 8) throw new TypeError('Invalid borderRadius value.');
    this.borderTopLeftRadius = [value[0], value[1]];
    this.borderTopRightRadius = [value[2], value[3]];
    this.borderBottomRightRadius = [value[4], value[5]];
    this.borderBottomLeftRadius = [value[6], value[7]];
  }

  get bgcolor() {
    return this[getAttribute]('bgcolor');
  }

  set bgcolor(value) {
    this[setAttribute]('bgcolor', Object(_utils_color__WEBPACK_IMPORTED_MODULE_2__["parseColor"])(value));
  }

  get paddingTop() {
    return this[getAttribute]('paddingTop');
  }

  set paddingTop(value) {
    this[setAttribute]('paddingTop', Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(value));
  }

  get paddingRight() {
    return this[getAttribute]('paddingRight');
  }

  set paddingRight(value) {
    this[setAttribute]('paddingRight', Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(value));
  }

  get paddingBottom() {
    return this[getAttribute]('paddingBottom');
  }

  set paddingBottom(value) {
    this[setAttribute]('paddingBottom', Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(value));
  }

  get paddingLeft() {
    return this[getAttribute]('paddingLeft');
  }

  set paddingLeft(value) {
    this[setAttribute]('paddingLeft', Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(value));
  }

  get padding() {
    return [this.paddingTop, this.paddingRight, this.paddingBottom, this.paddingLeft];
  }

  set padding(value) {
    value = Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__["toArray"])(value);

    if (!Array.isArray(value)) {
      value = [value, value, value, value];
    } else if (value.length === 2) {
      value = [value[0], value[1], value[0], value[1]];
    } else if (value.length === 3) {
      value = [value[0], value[1], value[2], value[1]];
    }

    this.paddingTop = value[0];
    this.paddingRight = value[1];
    this.paddingBottom = value[2];
    this.paddingLeft = value[3];
  }

  get boxSizing() {
    return this[getAttribute]('boxSizing');
  }

  set boxSizing(value) {
    if (value != null && value !== 'border-box' && value !== 'content-box') {
      throw new TypeError('Invalid boxSizing type.');
    }

    this[setAttribute]('boxSizing', value);
  }

}

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTransparent", function() { return isTransparent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseColor", function() { return parseColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gradient", function() { return Gradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFillColor", function() { return setFillColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStrokeColor", function() { return setStrokeColor; });
/* harmony import */ var color_rgba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var color_rgba__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(color_rgba__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);



class Gradient {
  constructor({
    vector,
    colors
  }) {
    if (!Array.isArray(vector) || vector.length !== 4 && vector.length !== 6 && vector.length !== 3) {
      throw new TypeError('Invalid gradient');
    }

    this.vector = vector;
    this.colors = colors.map(({
      offset,
      color
    }) => {
      return {
        offset,
        color: parseColor(color)
      };
    });
  }

  toString() {
    return JSON.stringify({
      vector: this.vector,
      colors: this.colors
    });
  }

}

function isTransparent(color) {
  if (color instanceof Gradient) return false;
  if (color == null) return true;
  return color_rgba__WEBPACK_IMPORTED_MODULE_0___default()(color)[3] === 0;
}
function parseColor(color) {
  // if(Array.isArray(color)) return color;
  if (color == null) return color;
  if (!color) color = 'transparent';
  if (color instanceof Gradient) return color;
  const ret = color_rgba__WEBPACK_IMPORTED_MODULE_0___default()(color);
  if (!ret || !ret.length) throw new TypeError('Invalid color value.');
  return `rgba(${ret.join()})`;
}


function applyMeshGradient(mesh, type, color) {
  const vectorOffset = mesh.boundingBox[0];

  if (color.vector) {
    let {
      vector,
      colors
    } = color;

    if (vector.length === 4) {
      vector = [vector[0] + vectorOffset[0], vector[1] + vectorOffset[1], vector[2] + vectorOffset[0], vector[3] + vectorOffset[1]];
      mesh.setLinearGradient({
        vector,
        colors,
        type
      });
    } else if (vector.length === 3) {
      vector = [vector[0] + vectorOffset[0], vector[1] + vectorOffset[1], vector[2]];
      mesh.setCircularGradient({
        vector,
        colors,
        type
      });
    } else {
      vector = [vector[0] + vectorOffset[0], vector[1] + vectorOffset[1], vector[2], vector[3] + vectorOffset[0], vector[4] + vectorOffset[1], vector[5]];
      mesh.setRadialGradient({
        vector,
        colors,
        type
      });
    }
  } else if (mesh.gradient && mesh.gradient[type]) {
    delete mesh.gradient[type];
    delete mesh.uniforms.u_radialGradientVector;
  }
}

function setFillColor(mesh, {
  color: fillColor
}) {
  applyMeshGradient(mesh, 'fill', fillColor);

  if (!fillColor.vector) {
    mesh.setFill({
      color: fillColor
    });
  }

  return mesh;
}
function setStrokeColor(mesh, {
  color: strokeColor,
  lineWidth,
  lineCap,
  lineJoin,
  lineDash,
  lineDashOffset,
  miterLimit
}) {
  applyMeshGradient(mesh, 'stroke', strokeColor);

  if (strokeColor.vector) {
    strokeColor = [0, 0, 0, 1];
  }

  mesh.setStroke({
    color: strokeColor,
    thickness: lineWidth,
    cap: lineCap,
    join: lineJoin,
    miterLimit,
    lineDash,
    lineDashOffset
  });
}

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRadiusBox", function() { return createRadiusBox; });
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

function createEllipseBorder(figure, x, y, w, h, pos = 'leftTop') {
  const kappa = 0.5522848,
        ox = w / 2 * kappa,
        // control point offset horizontal
  oy = h / 2 * kappa,
        // control point offset vertical
  xe = x + w,
        // x-end
  ye = y + h,
        // y-end
  xm = x + w / 2,
        // x-middle
  ym = y + h / 2; // y-middle

  if (pos === 'leftTop') {
    figure.moveTo(x, ym);
    figure.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
  } else if (pos === 'rightTop') {
    figure.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
  } else if (pos === 'rightBottom') {
    figure.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
  } else if (pos === 'leftBottom') {
    figure.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
  }
}

function createRadiusBox(figure, [x, y, w, h], radius) {
  if (!radius || Array.isArray(radius) && radius.every(r => r === 0)) {
    figure.beginPath();
    figure.rect(x, y, w, h);
  } else {
    if (typeof radius === 'number') radius = Array(8).fill(radius);
    const [tl0, tl1, tr0, tr1, br0, br1, bl0, bl1] = radius.map((r, i) => {
      if (i % 2) return Math.min(r, h / 2);
      return Math.min(r, w / 2);
    });
    figure.beginPath();
    figure.moveTo(x, y + tl1);
    createEllipseBorder(figure, x, y, tl0 * 2, tl1 * 2, 'leftTop');
    figure.lineTo(x + w - tr0, y);
    createEllipseBorder(figure, x + w - tr0 * 2, y, tr0 * 2, tr1 * 2, 'rightTop');
    figure.lineTo(x + w, y + h - br1);
    createEllipseBorder(figure, x + w - br0 * 2, y + h - br1 * 2, br0 * 2, br1 * 2, 'rightBottom');
    figure.lineTo(x + bl0, y + h);
    createEllipseBorder(figure, x, y + h - bl1 * 2, bl0 * 2, bl1 * 2, 'leftBottom');
    figure.closePath();
  }

  return figure;
}

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

/* harmony default export */ __webpack_exports__["default"] = (function (boundingBox, m) {
  if (!boundingBox) {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
  }

  const [[x1, y1], [x2, y2]] = boundingBox;
  const x11 = x1 * m[0] + y1 * m[2] + m[4];
  const y11 = x1 * m[1] + y1 * m[3] + m[5];
  const x21 = x2 * m[0] + y1 * m[2] + m[4];
  const y21 = x2 * m[1] + y1 * m[3] + m[5];
  const x22 = x2 * m[0] + y2 * m[2] + m[4];
  const y22 = x2 * m[1] + y2 * m[3] + m[5];
  const x12 = x1 * m[0] + y2 * m[2] + m[4];
  const y12 = x1 * m[1] + y2 * m[3] + m[5];
  const left = Math.min(x11, x21, x22, x12);
  const top = Math.min(y11, y21, y22, y12);
  const right = Math.max(x11, x21, x22, x12);
  const bottom = Math.max(y11, y21, y22, y12);
  return {
    x: left,
    y: top,
    width: right - left,
    height: bottom - top,
    left,
    top,
    right,
    bottom
  };
});

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return applyRenderEvent; });
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

function applyRenderEvent(target, mesh) {
  if (!mesh) return;
  const beforeRenderHandlers = target.getListeners('beforerender');
  const afterRenderHandlers = target.getListeners('afterrender');

  if (beforeRenderHandlers.length && !mesh.beforeRender) {
    mesh.beforeRender = context => {
      target.dispatchEvent({
        type: 'beforerender',
        detail: {
          context
        }
      });
    };
  } else if (!beforeRenderHandlers.length) {
    mesh.beforeRender = null;
  }

  if (afterRenderHandlers.length && !mesh.afterRender) {
    mesh.afterRender = context => {
      target.dispatchEvent({
        type: 'afterrender',
        detail: {
          context
        }
      });
    };
  } else if (!afterRenderHandlers.length) {
    mesh.afterRender = null;
  }
}

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sprite; });
/* harmony import */ var _utils_texture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(225);
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(226);
/* harmony import */ var _attribute_sprite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(233);
/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(221);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Sprite extends _block__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(attrs = {}) {
    if (typeof attrs === 'string') attrs = {
      texture: attrs
    };
    super(attrs);
  }
  /* override */


  get contentSize() {
    let [w, h] = super.contentSize;
    const {
      width,
      height
    } = this.attributes;

    if (width == null || height == null) {
      const img = this.textureImage;
      const textureRect = this.attributes.textureRect;
      const sourceRect = this.attributes.sourceRect;

      if (textureRect) {
        if (width == null) w = textureRect[0] + textureRect[2];
        if (height == null) h = textureRect[1] + textureRect[3];
      } else if (sourceRect) {
        const ratio = this.layer ? this.layer.displayRatio : 1;
        if (width == null) w = sourceRect[2] / ratio;
        if (height == null) h = sourceRect[3] / ratio;
      } else if (img) {
        const ratio = this.layer ? this.layer.displayRatio : 1;
        if (width == null) w = img.width / ratio;
        if (height == null) h = img.height / ratio;
      }
    }

    return [w, h];
  }
  /* override */


  draw(meshes = []) {
    super.draw(meshes);
    const mesh = this.mesh;

    if (mesh) {
      Object(_utils_texture__WEBPACK_IMPORTED_MODULE_0__["drawTexture"])(this, mesh);
    }

    return meshes;
  }
  /* override */


  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);

    if (key === 'texture') {
      Object(_utils_texture__WEBPACK_IMPORTED_MODULE_0__["applyTexture"])(this, newValue, true); // this.setTexture(newValue);
    }

    if (key === 'textureRect') {
      const {
        width,
        height
      } = this.attributes;

      if (width == null || height == null) {
        this.updateContours();
      }
    }
  }

}

_defineProperty(Sprite, "Attr", _attribute_sprite__WEBPACK_IMPORTED_MODULE_2__["default"]);

_document__WEBPACK_IMPORTED_MODULE_3__["default"].registerNode(Sprite, 'sprite');

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sprite; });
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(227);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);


const setDefault = Symbol.for('spritejs_setAttributeDefault');
const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');
class Sprite extends _block__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(subject) {
    super(subject);
    this[setDefault]({
      texture: undefined,
      textureRect: undefined,
      textureRepeat: false,
      sourceRect: undefined
    });
  }

  get texture() {
    return this[getAttribute]('texture');
  }

  set texture(value) {
    this[setAttribute]('texture', value);
  }

  get textureRect() {
    return this[getAttribute]('textureRect');
  }

  set textureRect(value) {
    this[setAttribute]('textureRect', value);
  }

  get sourceRect() {
    return this[getAttribute]('sourceRect');
  }

  set sourceRect(value) {
    this[setAttribute]('sourceRect', value);
  }

  get textureRepeat() {
    return this[getAttribute]('textureRepeat');
  }

  set textureRepeat(value) {
    this[setAttribute]('textureRepeat', !!value);
  }

}

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Path; });
/* harmony import */ var _mesh_js_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var pasition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(235);
/* harmony import */ var pasition__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pasition__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78);
/* harmony import */ var _attribute_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(236);
/* harmony import */ var _utils_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(228);
/* harmony import */ var _utils_texture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(225);
/* harmony import */ var _utils_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(223);
/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(221);
/* harmony import */ var _utils_bounding_box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(230);
/* harmony import */ var _utils_render_event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(231);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const _mesh = Symbol('mesh');

class Path extends _node__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(attrs = {}) {
    if (typeof attrs === 'string') attrs = {
      d: attrs
    };
    super(attrs);
    this.effects = {
      d(from, to, p, s, e) {
        const ep = (p - s) / (e - s);
        if (ep <= 0) return from;
        if (ep >= 1) return to;

        const shapes = pasition__WEBPACK_IMPORTED_MODULE_1___default.a._preprocessing(pasition__WEBPACK_IMPORTED_MODULE_1___default.a.path2shapes(from), pasition__WEBPACK_IMPORTED_MODULE_1___default.a.path2shapes(to));

        const shape = pasition__WEBPACK_IMPORTED_MODULE_1___default.a._lerp(...shapes, ep)[0];

        const path = shape.reduce((str, c) => {
          return `${str}${c.slice(2).join(' ')} `;
        }, `M${shape[0][0]} ${shape[0][1]}C`).trim();
        return path;
      }

    };
  }
  /* override */


  get isVisible() {
    return !!this.d;
  }

  get mesh() {
    if (this.attributes.display === 'none') return null;
    const path = this.path;

    if (path) {
      let mesh = this[_mesh];

      if (!mesh) {
        mesh = new _mesh_js_core__WEBPACK_IMPORTED_MODULE_0__["Mesh2D"](this.path, this.getResolution());
        mesh.path = path;
        const fillColor = this.attributes.fillColor;

        if (fillColor) {
          Object(_utils_color__WEBPACK_IMPORTED_MODULE_4__["setFillColor"])(mesh, {
            color: fillColor
          });
        }

        const lineWidth = this.attributes.lineWidth;
        const strokeColor = this.attributes.strokeColor;

        if (strokeColor && lineWidth > 0) {
          const {
            lineCap,
            lineJoin,
            miterLimit
          } = this.attributes;
          Object(_utils_color__WEBPACK_IMPORTED_MODULE_4__["setStrokeColor"])(mesh, {
            color: strokeColor,
            lineWidth,
            lineCap,
            lineJoin,
            miterLimit
          });
        }

        mesh.setOpacity(this.attributes.opacity);
        this[_mesh] = mesh;
      } else if (mesh.path !== path) {
        mesh.contours = path.contours;
        mesh.path = path;
      }

      mesh.setTransform(...this.renderMatrix);
      return mesh;
    }

    return null;
  }

  get originalContentRect() {
    if (this.path) {
      const boundingBox = this.path.boundingBox;
      return [boundingBox[0][0], boundingBox[0][1], boundingBox[1][0] - boundingBox[0][0], boundingBox[1][1] - boundingBox[0][1]];
    }

    return [0, 0, 0, 0];
  }

  get originalClientRect() {
    if (this.mesh) {
      const boundingBox = this.mesh.boundingBox;
      return [boundingBox[0][0], boundingBox[0][1], boundingBox[1][0] - boundingBox[0][0], boundingBox[1][1] - boundingBox[0][1]];
    }

    return [0, 0, 0, 0];
  }

  get originalClientCenter() {
    if (this.mesh) {
      return this.mesh.boundingCenter;
    }

    return [0, 0];
  }

  set d(value) {
    this.attributes.d = value;
  }

  get d() {
    return this.attributes.d;
  }
  /* override */


  draw(meshes = []) {
    const mesh = this.mesh;

    if (mesh) {
      Object(_utils_filter__WEBPACK_IMPORTED_MODULE_6__["applyFilters"])(mesh, this.filters);
      Object(_utils_texture__WEBPACK_IMPORTED_MODULE_5__["drawTexture"])(this, mesh);
      Object(_utils_render_event__WEBPACK_IMPORTED_MODULE_9__["default"])(this, mesh);
      meshes.push(mesh);
    }

    return meshes;
  }

  getBoundingClientRect() {
    let boundingBox = null;
    if (this.mesh) boundingBox = this.mesh.boundingBox;
    return Object(_utils_bounding_box__WEBPACK_IMPORTED_MODULE_8__["default"])(boundingBox, this.renderMatrix);
  }

  getPathLength() {
    if (this.mesh) {
      return this.mesh.getTotalLength();
    }

    return 0;
  }

  getPointAtLength(len) {
    if (this.mesh) {
      const point = this.mesh.getPointAtLength(len);

      if (point) {
        return [point.x, point.y];
      }
    }

    return [0, 0];
  }
  /* override */


  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);

    if (key === 'd' || key === 'normalize') {
      this.updateContours();
    }

    if (key === 'opacity') {
      if (this[_mesh]) this[_mesh].setOpacity(newValue);
    }

    if (this[_mesh] && key === 'fillColor') {
      Object(_utils_color__WEBPACK_IMPORTED_MODULE_4__["setFillColor"])(this[_mesh], {
        color: newValue
      });
    }

    if (this[_mesh] && (key === 'strokeColor' || key === 'lineWidth' || key === 'lineCap' || key === 'lineJoin' || key === 'lineDash' || key === 'lineDashOffset')) {
      const {
        strokeColor,
        lineWidth
      } = this.attributes;

      if (strokeColor && lineWidth > 0) {
        const {
          lineCap,
          lineJoin,
          lineDash,
          lineDashOffset,
          miterLimit
        } = this.attributes;
        Object(_utils_color__WEBPACK_IMPORTED_MODULE_4__["setStrokeColor"])(this[_mesh], {
          color: strokeColor,
          lineCap,
          lineJoin,
          lineWidth,
          lineDash,
          lineDashOffset,
          miterLimit
        });
      }
    }

    if (key === 'texture') {
      Object(_utils_texture__WEBPACK_IMPORTED_MODULE_5__["applyTexture"])(this, newValue);
    }
  }
  /* override */


  updateContours() {
    this.path = new _mesh_js_core__WEBPACK_IMPORTED_MODULE_0__["Figure2D"]();
    this.path.addPath(this.attributes.d);

    if (this.attributes.normalize) {
      this.path.normalize(...this.path.boundingCenter);
    }
  }

}

_defineProperty(Path, "Attr", _attribute_path__WEBPACK_IMPORTED_MODULE_3__["default"]);

_document__WEBPACK_IMPORTED_MODULE_7__["default"].registerNode(Path, 'path');

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * pasition v1.0.1 By dntzhang
 * Github: https://github.com/AlloyTeam/pasition
 * MIT Licensed.
 */

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

//https://github.com/colinmeinke/svg-arc-to-cubic-bezier

var TAU = Math.PI * 2;

var mapToEllipse = function mapToEllipse(_ref, rx, ry, cosphi, sinphi, centerx, centery) {
    var x = _ref.x,
        y = _ref.y;

    x *= rx;
    y *= ry;

    var xp = cosphi * x - sinphi * y;
    var yp = sinphi * x + cosphi * y;

    return {
        x: xp + centerx,
        y: yp + centery
    };
};

var approxUnitArc = function approxUnitArc(ang1, ang2) {
    var a = 4 / 3 * Math.tan(ang2 / 4);

    var x1 = Math.cos(ang1);
    var y1 = Math.sin(ang1);
    var x2 = Math.cos(ang1 + ang2);
    var y2 = Math.sin(ang1 + ang2);

    return [{
        x: x1 - y1 * a,
        y: y1 + x1 * a
    }, {
        x: x2 + y2 * a,
        y: y2 - x2 * a
    }, {
        x: x2,
        y: y2
    }];
};

var vectorAngle = function vectorAngle(ux, uy, vx, vy) {
    var sign = ux * vy - uy * vx < 0 ? -1 : 1;
    var umag = Math.sqrt(ux * ux + uy * uy);
    var vmag = Math.sqrt(ux * ux + uy * uy);
    var dot = ux * vx + uy * vy;

    var div = dot / (umag * vmag);

    if (div > 1) {
        div = 1;
    }

    if (div < -1) {
        div = -1;
    }

    return sign * Math.acos(div);
};

var getArcCenter = function getArcCenter(px, py, cx, cy, rx, ry, largeArcFlag, sweepFlag, sinphi, cosphi, pxp, pyp) {
    var rxsq = Math.pow(rx, 2);
    var rysq = Math.pow(ry, 2);
    var pxpsq = Math.pow(pxp, 2);
    var pypsq = Math.pow(pyp, 2);

    var radicant = rxsq * rysq - rxsq * pypsq - rysq * pxpsq;

    if (radicant < 0) {
        radicant = 0;
    }

    radicant /= rxsq * pypsq + rysq * pxpsq;
    radicant = Math.sqrt(radicant) * (largeArcFlag === sweepFlag ? -1 : 1);

    var centerxp = radicant * rx / ry * pyp;
    var centeryp = radicant * -ry / rx * pxp;

    var centerx = cosphi * centerxp - sinphi * centeryp + (px + cx) / 2;
    var centery = sinphi * centerxp + cosphi * centeryp + (py + cy) / 2;

    var vx1 = (pxp - centerxp) / rx;
    var vy1 = (pyp - centeryp) / ry;
    var vx2 = (-pxp - centerxp) / rx;
    var vy2 = (-pyp - centeryp) / ry;

    var ang1 = vectorAngle(1, 0, vx1, vy1);
    var ang2 = vectorAngle(vx1, vy1, vx2, vy2);

    if (sweepFlag === 0 && ang2 > 0) {
        ang2 -= TAU;
    }

    if (sweepFlag === 1 && ang2 < 0) {
        ang2 += TAU;
    }

    return [centerx, centery, ang1, ang2];
};

var arcToBezier = function arcToBezier(_ref2) {
    var px = _ref2.px,
        py = _ref2.py,
        cx = _ref2.cx,
        cy = _ref2.cy,
        rx = _ref2.rx,
        ry = _ref2.ry,
        _ref2$xAxisRotation = _ref2.xAxisRotation,
        xAxisRotation = _ref2$xAxisRotation === undefined ? 0 : _ref2$xAxisRotation,
        _ref2$largeArcFlag = _ref2.largeArcFlag,
        largeArcFlag = _ref2$largeArcFlag === undefined ? 0 : _ref2$largeArcFlag,
        _ref2$sweepFlag = _ref2.sweepFlag,
        sweepFlag = _ref2$sweepFlag === undefined ? 0 : _ref2$sweepFlag;

    var curves = [];

    if (rx === 0 || ry === 0) {
        return [];
    }

    var sinphi = Math.sin(xAxisRotation * TAU / 360);
    var cosphi = Math.cos(xAxisRotation * TAU / 360);

    var pxp = cosphi * (px - cx) / 2 + sinphi * (py - cy) / 2;
    var pyp = -sinphi * (px - cx) / 2 + cosphi * (py - cy) / 2;

    if (pxp === 0 && pyp === 0) {
        return [];
    }

    rx = Math.abs(rx);
    ry = Math.abs(ry);

    var lambda = Math.pow(pxp, 2) / Math.pow(rx, 2) + Math.pow(pyp, 2) / Math.pow(ry, 2);

    if (lambda > 1) {
        rx *= Math.sqrt(lambda);
        ry *= Math.sqrt(lambda);
    }

    var _getArcCenter = getArcCenter(px, py, cx, cy, rx, ry, largeArcFlag, sweepFlag, sinphi, cosphi, pxp, pyp),
        _getArcCenter2 = slicedToArray(_getArcCenter, 4),
        centerx = _getArcCenter2[0],
        centery = _getArcCenter2[1],
        ang1 = _getArcCenter2[2],
        ang2 = _getArcCenter2[3];

    var segments = Math.max(Math.ceil(Math.abs(ang2) / (TAU / 4)), 1);

    ang2 /= segments;

    for (var i = 0; i < segments; i++) {
        curves.push(approxUnitArc(ang1, ang2));
        ang1 += ang2;
    }

    return curves.map(function (curve) {
        var _mapToEllipse = mapToEllipse(curve[0], rx, ry, cosphi, sinphi, centerx, centery),
            x1 = _mapToEllipse.x,
            y1 = _mapToEllipse.y;

        var _mapToEllipse2 = mapToEllipse(curve[1], rx, ry, cosphi, sinphi, centerx, centery),
            x2 = _mapToEllipse2.x,
            y2 = _mapToEllipse2.y;

        var _mapToEllipse3 = mapToEllipse(curve[2], rx, ry, cosphi, sinphi, centerx, centery),
            x = _mapToEllipse3.x,
            y = _mapToEllipse3.y;

        return { x1: x1, y1: y1, x2: x2, y2: y2, x: x, y: y };
    });
};

//https://github.com/jkroso/parse-svg-path/blob/master/index.js
/**
 * expected argument lengths
 * @type {Object}
 */

var length = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0

    /**
     * segment pattern
     * @type {RegExp}
     */

};var segment = /([astvzqmhlc])([^astvzqmhlc]*)/ig;

/**
 * parse an svg path data string. Generates an Array
 * of commands where each command is an Array of the
 * form `[command, arg1, arg2, ...]`
 *
 * @param {String} path
 * @return {Array}
 */

function parse(path) {
    var data = [];
    path.replace(segment, function (_, command, args) {
        var type = command.toLowerCase();
        args = parseValues(args);

        // overloaded moveTo
        if (type == 'm' && args.length > 2) {
            data.push([command].concat(args.splice(0, 2)));
            type = 'l';
            command = command == 'm' ? 'l' : 'L';
        }

        while (true) {
            if (args.length == length[type]) {
                args.unshift(command);
                return data.push(args);
            }
            if (args.length < length[type]) throw new Error('malformed path data');
            data.push([command].concat(args.splice(0, length[type])));
        }
    });
    return data;
}

var number = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;

function parseValues(args) {
    var numbers = args.match(number);
    return numbers ? numbers.map(Number) : [];
}

function shapeBox(shape) {
    var minX = shape[0][0],
        minY = shape[0][1],
        maxX = minX,
        maxY = minY;
    shape.forEach(function (curve) {
        var x1 = curve[0],
            x2 = curve[2],
            x3 = curve[4],
            x4 = curve[6],
            y1 = curve[1],
            y2 = curve[3],
            y3 = curve[5],
            y4 = curve[7];

        minX = Math.min(minX, x1, x2, x3, x4);
        minY = Math.min(minY, y1, y2, y3, y4);
        maxX = Math.max(maxX, x1, x2, x3, x4);
        maxY = Math.max(maxY, y1, y2, y3, y4);
    });

    return [minX, minY, maxX, maxY];
}

function boxDistance(boxA, boxB) {
    return Math.sqrt(Math.pow(boxA[0] - boxB[0], 2) + Math.pow(boxA[1] - boxB[1], 2)) + Math.sqrt(Math.pow(boxA[2] - boxB[2], 2) + Math.pow(boxA[3] - boxB[3], 2));
}

function curveDistance(curveA, curveB) {
    var x1 = curveA[0],
        x2 = curveA[2],
        x3 = curveA[4],
        x4 = curveA[6],
        y1 = curveA[1],
        y2 = curveA[3],
        y3 = curveA[5],
        y4 = curveA[7],
        xb1 = curveB[0],
        xb2 = curveB[2],
        xb3 = curveB[4],
        xb4 = curveB[6],
        yb1 = curveB[1],
        yb2 = curveB[3],
        yb3 = curveB[5],
        yb4 = curveB[7];

    return Math.sqrt(Math.pow(xb1 - x1, 2) + Math.pow(yb1 - y1, 2)) + Math.sqrt(Math.pow(xb2 - x2, 2) + Math.pow(yb2 - y2, 2)) + Math.sqrt(Math.pow(xb3 - x3, 2) + Math.pow(yb3 - y3, 2)) + Math.sqrt(Math.pow(xb4 - x4, 2) + Math.pow(yb4 - y4, 2));
}

function sortCurves(curvesA, curvesB) {

    var arrList = permuteCurveNum(curvesA.length);

    var list = [];
    arrList.forEach(function (arr) {
        var distance = 0;
        var i = 0;
        arr.forEach(function (index) {
            distance += curveDistance(curvesA[index], curvesB[i++]);
        });
        list.push({ index: arr, distance: distance });
    });

    list.sort(function (a, b) {
        return a.distance - b.distance;
    });

    var result = [];

    list[0].index.forEach(function (index) {
        result.push(curvesA[index]);
    });

    return result;
}

function sort(pathA, pathB) {

    var arrList = permuteNum(pathA.length);

    var list = [];
    arrList.forEach(function (arr) {
        var distance = 0;
        arr.forEach(function (index) {
            distance += boxDistance(shapeBox(pathA[index]), shapeBox(pathB[index]));
        });
        list.push({ index: arr, distance: distance });
    });

    list.sort(function (a, b) {
        return a.distance - b.distance;
    });

    var result = [];

    list[0].index.forEach(function (index) {
        result.push(pathA[index]);
    });

    return result;
}

function permuteCurveNum(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        var indexArr = [];
        for (var j = 0; j < num; j++) {
            var index = j + i;
            if (index > num - 1) index -= num;
            indexArr[index] = j;
        }

        arr.push(indexArr);
    }

    return arr;
}

function permuteNum(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(i);
    }

    return permute(arr);
}

function permute(input) {
    var permArr = [],
        usedChars = [];
    function main(input) {
        var i, ch;
        for (i = 0; i < input.length; i++) {
            ch = input.splice(i, 1)[0];
            usedChars.push(ch);
            if (input.length == 0) {
                permArr.push(usedChars.slice());
            }
            main(input);
            input.splice(i, 0, ch);
            usedChars.pop();
        }
        return permArr;
    }
    return main(input);
}

var pasition = {};
pasition.parser = parse;

pasition.lerpCurve = function (pathA, pathB, t) {

    return pasition.lerpPoints(pathA[0], pathA[1], pathB[0], pathB[1], t).concat(pasition.lerpPoints(pathA[2], pathA[3], pathB[2], pathB[3], t)).concat(pasition.lerpPoints(pathA[4], pathA[5], pathB[4], pathB[5], t)).concat(pasition.lerpPoints(pathA[6], pathA[7], pathB[6], pathB[7], t));
};

pasition.lerpPoints = function (x1, y1, x2, y2, t) {
    return [x1 + (x2 - x1) * t, y1 + (y2 - y1) * t];
};

pasition.q2b = function (x1, y1, x2, y2, x3, y3) {
    return [x1, y1, (x1 + 2 * x2) / 3, (y1 + 2 * y2) / 3, (x3 + 2 * x2) / 3, (y3 + 2 * y2) / 3, x3, y3];
};

pasition.path2shapes = function (path) {
    //https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Paths
    //M = moveto
    //L = lineto
    //H = horizontal lineto
    //V = vertical lineto
    //C = curveto
    //S = smooth curveto
    //Q = quadratic Belzier curve
    //T = smooth quadratic Belzier curveto
    //A = elliptical Arc
    //Z = closepath
    //以上所有命令均允许小写字母。大写表示绝对定位，小写表示相对定位(从上一个点开始)。
    var cmds = pasition.parser(path),
        preX = 0,
        preY = 0,
        j = 0,
        len = cmds.length,
        shapes = [],
        current = null,
        closeX = void 0,
        closeY = void 0,
        preCX = void 0,
        preCY = void 0,
        sLen = void 0,
        curves = void 0,
        lastCurve = void 0;

    for (; j < len; j++) {
        var item = cmds[j];
        var action = item[0];
        var preItem = cmds[j - 1];

        switch (action) {
            case 'm':
                sLen = shapes.length;
                shapes[sLen] = [];
                current = shapes[sLen];
                preX = preX + item[1];
                preY = preY + item[2];
                break;
            case 'M':

                sLen = shapes.length;
                shapes[sLen] = [];
                current = shapes[sLen];
                preX = item[1];
                preY = item[2];
                break;

            case 'l':
                current.push([preX, preY, preX, preY, preX, preY, preX + item[1], preY + item[2]]);
                preX += item[1];
                preY += item[2];
                break;

            case 'L':

                current.push([preX, preY, item[1], item[2], item[1], item[2], item[1], item[2]]);
                preX = item[1];
                preY = item[2];

                break;

            case 'h':

                current.push([preX, preY, preX, preY, preX, preY, preX + item[1], preY]);
                preX += item[1];
                break;

            case 'H':
                current.push([preX, preY, item[1], preY, item[1], preY, item[1], preY]);
                preX = item[1];
                break;

            case 'v':
                current.push([preX, preY, preX, preY, preX, preY, preX, preY + item[1]]);
                preY += item[1];
                break;

            case 'V':
                current.push([preX, preY, preX, item[1], preX, item[1], preX, item[1]]);
                preY = item[1];
                break;

            case 'C':

                current.push([preX, preY, item[1], item[2], item[3], item[4], item[5], item[6]]);
                preX = item[5];
                preY = item[6];
                break;
            case 'S':
                if (preItem[0] === 'C' || preItem[0] === 'c') {
                    current.push([preX, preY, preX + preItem[5] - preItem[3], preY + preItem[6] - preItem[4], item[1], item[2], item[3], item[4]]);
                } else if (preItem[0] === 'S' || preItem[0] === 's') {
                    current.push([preX, preY, preX + preItem[3] - preItem[1], preY + preItem[4] - preItem[2], item[1], item[2], item[3], item[4]]);
                }
                preX = item[3];
                preY = item[4];
                break;

            case 'c':
                current.push([preX, preY, preX + item[1], preY + item[2], preX + item[3], preY + item[4], preX + item[5], preY + item[6]]);
                preX = preX + item[5];
                preY = preY + item[6];
                break;
            case 's':
                if (preItem[0] === 'C' || preItem[0] === 'c') {

                    current.push([preX, preY, preX + preItem[5] - preItem[3], preY + preItem[6] - preItem[4], preX + item[1], preY + item[2], preX + item[3], preY + item[4]]);
                } else if (preItem[0] === 'S' || preItem[0] === 's') {
                    current.push([preX, preY, preX + preItem[3] - preItem[1], preY + preItem[4] - preItem[2], preX + item[1], preY + item[2], preX + item[3], preY + item[4]]);
                }

                preX = preX + item[3];
                preY = preY + item[4];

                break;
            case 'a':
                curves = arcToBezier({
                    rx: item[1],
                    ry: item[2],
                    px: preX,
                    py: preY,
                    xAxisRotation: item[3],
                    largeArcFlag: item[4],
                    sweepFlag: item[5],
                    cx: preX + item[6],
                    cy: preY + item[7]
                });
                lastCurve = curves[curves.length - 1];

                curves.forEach(function (curve, index) {
                    if (index === 0) {
                        current.push([preX, preY, curve.x1, curve.y1, curve.x2, curve.y2, curve.x, curve.y]);
                    } else {
                        current.push([curves[index - 1].x, curves[index - 1].y, curve.x1, curve.y1, curve.x2, curve.y2, curve.x, curve.y]);
                    }
                });

                preX = lastCurve.x;
                preY = lastCurve.y;

                break;

            case 'A':

                curves = arcToBezier({
                    rx: item[1],
                    ry: item[2],
                    px: preX,
                    py: preY,
                    xAxisRotation: item[3],
                    largeArcFlag: item[4],
                    sweepFlag: item[5],
                    cx: item[6],
                    cy: item[7]
                });
                lastCurve = curves[curves.length - 1];

                curves.forEach(function (curve, index) {
                    if (index === 0) {
                        current.push([preX, preY, curve.x1, curve.y1, curve.x2, curve.y2, curve.x, curve.y]);
                    } else {
                        current.push([curves[index - 1].x, curves[index - 1].y, curve.x1, curve.y1, curve.x2, curve.y2, curve.x, curve.y]);
                    }
                });

                preX = lastCurve.x;
                preY = lastCurve.y;

                break;
            case 'Q':
                current.push(pasition.q2b(preX, preY, item[1], item[2], item[3], item[4]));
                preX = item[3];
                preY = item[4];

                break;
            case 'q':
                current.push(pasition.q2b(preX, preY, preX + item[1], preY + item[2], item[3] + preX, item[4] + preY));
                preX += item[3];
                preY += item[4];
                break;

            case 'T':

                if (preItem[0] === 'Q' || preItem[0] === 'q') {
                    preCX = preX + preItem[3] - preItem[1];
                    preCY = preY + preItem[4] - preItem[2];
                    current.push(pasition.q2b(preX, preY, preCX, preCY, item[1], item[2]));
                } else if (preItem[0] === 'T' || preItem[0] === 't') {
                    current.push(pasition.q2b(preX, preY, preX + preX - preCX, preY + preY - preCY, item[1], item[2]));
                    preCX = preX + preX - preCX;
                    preCY = preY + preY - preCY;
                }

                preX = item[1];
                preY = item[2];
                break;

            case 't':
                if (preItem[0] === 'Q' || preItem[0] === 'q') {
                    preCX = preX + preItem[3] - preItem[1];
                    preCY = preY + preItem[4] - preItem[2];
                    current.push(pasition.q2b(preX, preY, preCX, preCY, preX + item[1], preY + item[2]));
                } else if (preItem[0] === 'T' || preItem[0] === 't') {
                    current.push(pasition.q2b(preX, preY, preX + preX - preCX, preY + preY - preCY, preX + item[1], preY + item[2]));
                    preCX = preX + preX - preCX;
                    preCY = preY + preY - preCY;
                }

                preX += item[1];
                preY += item[2];
                break;

            case 'Z':
                closeX = current[0][0];
                closeY = current[0][1];
                current.push([preX, preY, closeX, closeY, closeX, closeY, closeX, closeY]);
                break;
            case 'z':
                closeX = current[0][0];
                closeY = current[0][1];
                current.push([preX, preY, closeX, closeY, closeX, closeY, closeX, closeY]);
                break;
        }
    }

    return shapes;
};

pasition._upCurves = function (curves, count) {
    var i = 0,
        index = 0,
        len = curves.length;
    for (; i < count; i++) {
        curves.push(curves[index].slice(0));
        index++;
        if (index > len - 1) {
            index -= len;
        }
    }
};

function split(x1, y1, x2, y2, x3, y3, x4, y4, t) {
    return {
        left: _split(x1, y1, x2, y2, x3, y3, x4, y4, t),
        right: _split(x4, y4, x3, y3, x2, y2, x1, y1, 1 - t, true)
    };
}

function _split(x1, y1, x2, y2, x3, y3, x4, y4, t, reverse) {

    var x12 = (x2 - x1) * t + x1;
    var y12 = (y2 - y1) * t + y1;

    var x23 = (x3 - x2) * t + x2;
    var y23 = (y3 - y2) * t + y2;

    var x34 = (x4 - x3) * t + x3;
    var y34 = (y4 - y3) * t + y3;

    var x123 = (x23 - x12) * t + x12;
    var y123 = (y23 - y12) * t + y12;

    var x234 = (x34 - x23) * t + x23;
    var y234 = (y34 - y23) * t + y23;

    var x1234 = (x234 - x123) * t + x123;
    var y1234 = (y234 - y123) * t + y123;

    if (reverse) {
        return [x1234, y1234, x123, y123, x12, y12, x1, y1];
    }
    return [x1, y1, x12, y12, x123, y123, x1234, y1234];
}

pasition._splitCurves = function (curves, count) {
    var i = 0,
        index = 0;

    for (; i < count; i++) {
        var curve = curves[index];
        var cs = split(curve[0], curve[1], curve[2], curve[3], curve[4], curve[5], curve[6], curve[7], 0.5);
        curves.splice(index, 1);
        curves.splice(index, 0, cs.left, cs.right);

        index += 2;
        if (index >= curves.length - 1) {
            index = 0;
        }
    }
};

pasition._upShapes = function (shapes, count) {
    var _loop = function _loop(i) {
        var shape = shapes[shapes.length - 1];
        var newShape = [];

        shape.forEach(function (curve) {
            newShape.push(curve.slice(0));
        });
        shapes.push(newShape);
    };

    for (var i = 0; i < count; i++) {
        _loop(i);
    }
};

pasition._subShapes = function (shapes, count) {
    var _loop2 = function _loop2(i) {
        var shape = shapes[shapes.length - 1];
        var newShape = [];
        var x = shape[0][0],
            y = shape[0][1];
        shape.forEach(function () {
            newShape.push([x, y, x, y, x, y, x, y]);
        });

        shapes.push(newShape);
    };

    for (var i = 0; i < count; i++) {
        _loop2(i);
    }
};

pasition.lerp = function (pathA, pathB, t) {
    return pasition._lerp(pasition.path2shapes(pathA), pasition.path2shapes(pathB), t);
};

pasition.MIM_CURVES_COUNT = 100;

pasition._preprocessing = function (pathA, pathB) {

    var lenA = pathA.length,
        lenB = pathB.length,
        clonePathA = JSON.parse(JSON.stringify(pathA)),
        clonePathB = JSON.parse(JSON.stringify(pathB));

    if (lenA > lenB) {
        pasition._subShapes(clonePathB, lenA - lenB);
    } else if (lenA < lenB) {
        pasition._upShapes(clonePathA, lenB - lenA);
    }

    clonePathA = sort(clonePathA, clonePathB);

    clonePathA.forEach(function (curves, index) {

        var lenA = curves.length,
            lenB = clonePathB[index].length;

        if (lenA > lenB) {
            if (lenA < pasition.MIM_CURVES_COUNT) {
                pasition._splitCurves(curves, pasition.MIM_CURVES_COUNT - lenA);
                pasition._splitCurves(clonePathB[index], pasition.MIM_CURVES_COUNT - lenB);
            } else {
                pasition._splitCurves(clonePathB[index], lenA - lenB);
            }
        } else if (lenA < lenB) {
            if (lenB < pasition.MIM_CURVES_COUNT) {
                pasition._splitCurves(curves, pasition.MIM_CURVES_COUNT - lenA);
                pasition._splitCurves(clonePathB[index], pasition.MIM_CURVES_COUNT - lenB);
            } else {
                pasition._splitCurves(curves, lenB - lenA);
            }
        }
    });

    clonePathA.forEach(function (curves, index) {
        clonePathA[index] = sortCurves(curves, clonePathB[index]);
    });

    return [clonePathA, clonePathB];
};

pasition._lerp = function (pathA, pathB, t) {

    var shapes = [];
    pathA.forEach(function (curves, index) {
        var newCurves = [];
        curves.forEach(function (curve, curveIndex) {
            newCurves.push(pasition.lerpCurve(curve, pathB[index][curveIndex], t));
        });
        shapes.push(newCurves);
    });
    return shapes;
};

pasition.animate = function (option) {
    var pathA = pasition.path2shapes(option.from);
    var pathB = pasition.path2shapes(option.to);
    var pathArr = pasition._preprocessing(pathA, pathB);

    var beginTime = new Date(),
        end = option.end || function () {},
        progress = option.progress || function () {},
        begin = option.begin || function () {},
        easing = option.easing || function (v) {
        return v;
    },
        tickId = null,
        outShape = null,
        time = option.time;

    begin(pathA);

    var tick = function tick() {
        var dt = new Date() - beginTime;
        if (dt >= time) {
            outShape = pathB;
            progress(outShape, 1);
            end(outShape);
            cancelAnimationFrame(tickId);
            return;
        }
        var percent = easing(dt / time);
        outShape = pasition._lerp(pathArr[0], pathArr[1], percent);
        progress(outShape, percent);
        tickId = requestAnimationFrame(tick);
    };
    tick();
};

return pasition;

})));


/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Path; });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
/* harmony import */ var _utils_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(228);
/* harmony import */ var _utils_attribute_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);




const setDefault = Symbol.for('spritejs_setAttributeDefault');
const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');
class Path extends _node__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(subject) {
    super(subject);
    this[setDefault]({
      d: '',
      normalize: false,
      fillColor: undefined,
      strokeColor: undefined,
      lineWidth: 1,
      lineJoin: 'miter',
      // 'miter' or 'bevel'
      lineCap: 'butt',
      // 'butt' or 'square'
      lineDash: undefined,
      lineDashOffset: 0,
      miterLimit: 10,
      texture: undefined,
      textureRect: undefined,
      textureRepeat: false,
      sourceRect: undefined
    });
  }

  get d() {
    return this[getAttribute]('d');
  }

  set d(value) {
    this[setAttribute]('d', value);
  }

  get normalize() {
    return this[getAttribute]('normalize');
  }

  set normalize(value) {
    this[setAttribute]('normalize', !!value);
  }

  get fillColor() {
    return this[getAttribute]('fillColor');
  }

  set fillColor(value) {
    this[setAttribute]('fillColor', Object(_utils_color__WEBPACK_IMPORTED_MODULE_1__["parseColor"])(value));
  }

  get strokeColor() {
    return this[getAttribute]('strokeColor');
  }

  set strokeColor(value) {
    this[setAttribute]('strokeColor', Object(_utils_color__WEBPACK_IMPORTED_MODULE_1__["parseColor"])(value));
  }

  get lineWidth() {
    return this[getAttribute]('lineWidth');
  }

  set lineWidth(value) {
    this[setAttribute]('lineWidth', Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_2__["toNumber"])(value));
  }

  get lineJoin() {
    return this[getAttribute]('lineJoin');
  }

  set lineJoin(value) {
    if (value != null && value !== 'miter' && value !== 'bevel') throw new TypeError('Invalid lineJoin type.');
    this[setAttribute]('lineJoin', value);
  }

  get lineCap() {
    return this[getAttribute]('lineCap');
  }

  set lineCap(value) {
    if (value != null && value !== 'butt' && value !== 'square') throw new TypeError('Invalid lineCap type.');
    this[setAttribute]('lineCap', value);
  }

  get lineDash() {
    return this[getAttribute]('lineDash');
  }

  set lineDash(value) {
    value = Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_2__["toArray"])(value, true);
    if (value != null && !Array.isArray(value)) value = [value];
    this[setAttribute]('lineDash', value ? value.map(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_2__["toNumber"]) : null);
  }

  get lineDashOffset() {
    return this[getAttribute]('lineDashOffset');
  }

  set lineDashOffset(value) {
    this[setAttribute]('lineDashOffset', Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_2__["toNumber"])(value));
  }

  get miterLimit() {
    return this[getAttribute]('miterLimit');
  }

  set miterLimit(value) {
    this[setAttribute]('miterLimit', Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_2__["toNumber"])(value));
  }

  get texture() {
    return this[getAttribute]('texture');
  }

  set texture(value) {
    this[setAttribute]('texture', value);
  }

  get textureRect() {
    return this[getAttribute]('textureRect');
  }

  set textureRect(value) {
    this[setAttribute]('textureRect', value);
  }

  get sourceRect() {
    return this[getAttribute]('sourceRect');
  }

  set sourceRect(value) {
    this[setAttribute]('sourceRect', value);
  }

  get textureRepeat() {
    return this[getAttribute]('textureRepeat');
  }

  set textureRepeat(value) {
    this[setAttribute]('textureRepeat', !!value);
  }

}

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rect; });
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(234);
/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(221);
/* harmony import */ var _attribute_rect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(238);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Rect extends _path__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /* override */
  get isVisible() {
    const {
      width,
      height
    } = this.attributes;
    return width > 0 && height > 0 && super.isVisible;
  }

}

_defineProperty(Rect, "Attr", _attribute_rect__WEBPACK_IMPORTED_MODULE_2__["default"]);

_document__WEBPACK_IMPORTED_MODULE_1__["default"].registerNode(Rect, 'rect');

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rect; });
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(236);
/* harmony import */ var _utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);



const setDefault = Symbol.for('spritejs_setAttributeDefault');
const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');
const declareAlias = Symbol.for('spritejs_declareAlias');

function getPath(attr) {
  const {
    x,
    y,
    width,
    height
  } = attr;
  return `M${x} ${y}L${x + width} ${y}L${x + width} ${y + height}L${x} ${y + height}Z`;
}

class Rect extends _path__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(subject) {
    super(subject);
    this[setDefault]({
      width: 0,
      height: 0
      /* size */

    });
    this[declareAlias]('size');
  } // readonly


  get d() {
    return this[getAttribute]('d');
  }

  set d(value) {} // eslint-disable-line no-empty-function


  get width() {
    return this[getAttribute]('width');
  }

  set width(value) {
    value = Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(value);

    if (this[setAttribute]('width', value)) {
      const d = getPath(this);
      this[setAttribute]('d', d);
    }
  }

  get height() {
    return this[getAttribute]('height');
  }

  set height(value) {
    value = Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(value);

    if (this[setAttribute]('height', value)) {
      const d = getPath(this);
      this[setAttribute]('d', d);
    }
  }

  get size() {
    return [this.width, this.height];
  }

  set size(value) {
    value = Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__["toArray"])(value);
    if (!Array.isArray(value)) value = [value, value];
    this.width = value[0];
    this.height = value[1];
  }

}

/***/ }),
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ellipse; });
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(234);
/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(221);
/* harmony import */ var _attribute_ellipse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(251);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Ellipse extends _path__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /* override */
  get isVisible() {
    const {
      radiusX,
      radiusY,
      startAngle,
      endAngle
    } = this.attributes;
    return radiusX > 0 && radiusY > 0 && startAngle !== endAngle && super.isVisible;
  }

}

_defineProperty(Ellipse, "Attr", _attribute_ellipse__WEBPACK_IMPORTED_MODULE_2__["default"]);

_document__WEBPACK_IMPORTED_MODULE_1__["default"].registerNode(Ellipse, 'ellipse');

/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ellipse; });
/* harmony import */ var _mesh_js_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(236);
/* harmony import */ var _utils_attribute_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);




const setDefault = Symbol.for('spritejs_setAttributeDefault');
const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');
const declareAlias = Symbol.for('spritejs_declareAlias');

function getPath(attr) {
  const {
    radiusX,
    radiusY,
    startAngle,
    endAngle,
    direction,
    closeType
  } = attr;
  const anticlockwise = direction === 'anitclockwise';
  const f = new _mesh_js_core__WEBPACK_IMPORTED_MODULE_0__["Figure2D"]();

  if (closeType === 'sector') {
    f.moveTo(0, 0);
  }

  f.ellipse(0, 0, radiusX, radiusY, 0, Math.PI * startAngle / 180, Math.PI * endAngle / 180, anticlockwise);

  if (closeType !== 'none') {
    f.closePath();
  }

  const path = f.path;
  const ret = path.reduce((a, b) => {
    return a + b.join(' ');
  }, '');
  return ret;
}

class Ellipse extends _path__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(subject) {
    super(subject);
    this[setDefault]({
      radiusX: 0,
      radiusY: 0,

      /* radius */
      startAngle: 0,
      endAngle: 360,

      /* angle */
      direction: 'clockwise',
      // clockwise | anticlockwise
      closeType: 'none' // none | sector | normal

    });
    this[declareAlias]('radius', 'angle');
  } // readonly


  get d() {
    return this[getAttribute]('d');
  }

  set d(value) {} // eslint-disable-line no-empty-function


  get radiusX() {
    return this[getAttribute]('radiusX');
  }

  set radiusX(value) {
    value = Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_2__["toNumber"])(value);

    if (this[setAttribute]('radiusX', value)) {
      const d = getPath(this);
      this[setAttribute]('d', d);
    }
  }

  get radiusY() {
    return this[getAttribute]('radiusY');
  }

  set radiusY(value) {
    value = Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_2__["toNumber"])(value);

    if (this[setAttribute]('radiusY', value)) {
      const d = getPath(this);
      this[setAttribute]('d', d);
    }
  }

  get radius() {
    return [this.radiusX, this.radiusY];
  }

  set radius(value) {
    value = Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_2__["toArray"])(value, true);
    if (!Array.isArray(value)) value = [value, value];
    this.radiusX = value[0];
    this.radiusY = value[1];
  }

  get angle() {
    return [this.startAngle, this.endAngle];
  }

  set angle(value) {
    value = Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_2__["toArray"])(value);
    if (!Array.isArray(value)) value = [value, value];
    this.startAngle = value[0];
    this.endAngle = value[1];
  }

  get direction() {
    return this[getAttribute]('direction');
  }

  set direction(value) {
    if (value != null && value !== 'clockwise' && value !== 'anticlockwise') throw new TypeError('Invalid direction type.');
    this[setAttribute]('direction', value);
  }

  get startAngle() {
    return this[getAttribute]('startAngle');
  }

  set startAngle(value) {
    value = Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_2__["toNumber"])(value);

    if (this[setAttribute]('startAngle', value)) {
      const d = getPath(this);
      this[setAttribute]('d', d);
    }
  }

  get endAngle() {
    return this[getAttribute]('endAngle');
  }

  set endAngle(value) {
    value = Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_2__["toNumber"])(value);

    if (this[setAttribute]('endAngle', value)) {
      const d = getPath(this);
      this[setAttribute]('d', d);
    }
  }

  get closeType() {
    return this[getAttribute]('closeType');
  }

  set closeType(value) {
    if (value != null && value !== 'none' && value !== 'sector' && value !== 'normal') throw new TypeError('Invalid closeType type.');

    if (this[setAttribute]('closeType', value)) {
      const d = getPath(this);
      this[setAttribute]('d', d);
    }
  }

}

/***/ }),
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Label; });
/* harmony import */ var _mesh_js_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _utils_animation_frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76);
/* harmony import */ var _utils_texture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(225);
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(226);
/* harmony import */ var _attribute_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(257);
/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(221);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const _textImage = Symbol('textImage');

const _textImageTask = Symbol('textImageTask');

const _textureContext = Symbol('textureContext');

const _updateTextureRect = Symbol('updateTextureRect');

class Label extends _block__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor(attrs = {}) {
    if (typeof attrs === 'string') attrs = {
      text: attrs
    };
    super(attrs);
  }
  /* override */


  get contentSize() {
    let [w, h] = super.contentSize;
    const {
      width,
      height
    } = this.attributes;

    if (width == null || height == null) {
      const img = this[_textImage];

      if (img) {
        if (width == null) w = img.rect[2];
        if (height == null) h = img.rect[3];
      }
    }

    return [w, h];
  }

  get text() {
    return this.attributes.text;
  }

  set text(value) {
    this.attributes.text = value;
  }
  /* override */


  draw(meshes) {
    super.draw(meshes);
    const mesh = this.mesh;

    if (mesh) {
      const textImage = this[_textImage];

      if (textImage) {
        let texture = mesh.texture;

        if (!texture || this[_textureContext] && this[_textureContext] !== this.renderer || texture.image !== textImage.image) {
          texture = Object(_utils_texture__WEBPACK_IMPORTED_MODULE_2__["createTexture"])(textImage.image, this.renderer);
          this[_updateTextureRect] = true;
        } else {
          texture = mesh.uniforms.u_texSampler;
        }

        if (this[_updateTextureRect]) {
          const [width, height] = textImage.rect.slice(2);
          const [w, h] = this.contentSize;
          const textAlign = this.attributes.textAlign;
          const verticalAlign = this.attributes.verticalAlign;
          let x = 0;

          if (textAlign === 'center') {
            x = (w - width) / 2;
          } else if (textAlign === 'right' || textAlign === 'end') {
            x = w - width;
          }

          let y;

          if (verticalAlign === 'top') {
            y = 0;
          } else if (verticalAlign === 'bottom') {
            y = h - height;
          } else {
            y = (h - height) / 2;
          }

          const {
            paddingLeft,
            paddingTop
          } = this.attributes;
          x += paddingLeft;
          y += paddingTop;
          const {
            anchorX,
            anchorY
          } = this.attributes;
          x -= this.clientSize[0] * anchorX;
          y -= this.clientSize[1] * anchorY;
          mesh.setTexture(texture, {
            rect: [x, y, width, height]
          });
          this[_updateTextureRect] = false;
          this[_textureContext] = this.renderer;
        }
      }
    }

    return meshes;
  }
  /* override */


  onPropertyChange(key, newValue, oldValue) {
    if (key === 'text' || key === 'fontSize' || key === 'fontFamily' || key === 'fontStyle' || key === 'fontVariant' || key === 'fontWeight' || key === 'fontStretch' || key === 'lineHeight' || key === 'strokeColor' || key === 'fillColor') {
      this.updateText();
    } else {
      if (key === 'textAlign' || key === 'verticalAlign') {
        this[_updateTextureRect] = true;
      }

      super.onPropertyChange(key, newValue, oldValue);
    }
  }
  /* override */


  updateContours() {
    super.updateContours();
    this[_updateTextureRect] = true;
  }

  updateText() {
    if (!this[_textImageTask]) {
      this[_textImageTask] = new Promise(resolve => {
        Object(_utils_animation_frame__WEBPACK_IMPORTED_MODULE_1__["requestAnimationFrame"])(() => {
          this[_textImageTask] = null;
          const {
            text,
            font,
            fillColor,
            strokeColor,
            strokeWidth
          } = this.attributes;

          if (_mesh_js_core__WEBPACK_IMPORTED_MODULE_0__["ENV"].createText) {
            this[_textImage] = _mesh_js_core__WEBPACK_IMPORTED_MODULE_0__["ENV"].createText(text, {
              font,
              fillColor,
              strokeColor,
              strokeWidth,
              parseFont: _mesh_js_core__WEBPACK_IMPORTED_MODULE_0__["parseFont"]
            });
          } else {
            this[_textImage] = Object(_mesh_js_core__WEBPACK_IMPORTED_MODULE_0__["createText"])(text, {
              font,
              fillColor,
              strokeColor,
              strokeWidth
            });
          }

          this.updateContours();
          this.forceUpdate();
          resolve(this[_textImage]);
        });
      });
    }
  }

}

_defineProperty(Label, "Attr", _attribute_label__WEBPACK_IMPORTED_MODULE_4__["default"]);

_document__WEBPACK_IMPORTED_MODULE_5__["default"].registerNode(Label, 'label');

/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Label; });
/* harmony import */ var _mesh_js_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80);
/* harmony import */ var _utils_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(228);
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(227);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);





const setDefault = Symbol.for('spritejs_setAttributeDefault');
const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');
const declareAlias = Symbol.for('spritejs_declareAlias');
class Label extends _block__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor(subject) {
    super(subject);
    this[setDefault]({
      text: '',
      fontSize: 16,
      fontFamily: 'sans-serif',
      fontStyle: 'normal',
      fontVariant: 'normal',
      fontWeight: 'normal',
      fontStretch: 'normal',
      lineHeight: '',

      /* font */
      textAlign: 'left',
      strokeColor: undefined,
      strokeWidth: 1,
      fillColor: undefined,
      verticalAlign: 'middle'
    });
    this[declareAlias]('font');
  }

  get text() {
    return this[getAttribute]('text') || ' ';
  }

  set text(value) {
    this[setAttribute]('text', value);
  }

  get fontSize() {
    return this[getAttribute]('fontSize');
  }

  set fontSize(value) {
    this[setAttribute]('fontSize', Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(value));
  }

  get fontFamily() {
    return this[getAttribute]('fontFamily');
  }

  set fontFamily(value) {
    this[setAttribute]('fontFamily', value);
  }

  get fontStyle() {
    return this[getAttribute]('fontStyle');
  }

  set fontStyle(value) {
    this[setAttribute]('fontStyle', value);
  }

  get fontVariant() {
    return this[getAttribute]('fontVariant');
  }

  set fontVariant(value) {
    this[setAttribute]('fontVariant', value);
  }

  get fontWeight() {
    return this[getAttribute]('fontWeight');
  }

  set fontWeight(value) {
    this[setAttribute]('fontWeight', value);
  }

  get fontStretch() {
    return this[getAttribute]('fontStretch');
  }

  set fontStretch(value) {
    this[setAttribute]('fontStretch', value);
  }

  get lineHeight() {
    return this[getAttribute]('lineHeight') || this.fontSize;
  }

  set lineHeight(value) {
    this[setAttribute]('lineHeight', Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(value));
  }

  get textAlign() {
    return this[getAttribute]('textAlign');
  }

  set textAlign(value) {
    this[setAttribute]('textAlign', value);
  }

  get strokeColor() {
    return this[getAttribute]('strokeColor');
  }

  set strokeColor(value) {
    this[setAttribute]('strokeColor', Object(_utils_color__WEBPACK_IMPORTED_MODULE_2__["parseColor"])(value));
  }

  get strokeWidth() {
    return this[getAttribute]('strokeWidth');
  }

  set strokeWidth(value) {
    this[setAttribute]('strokeWidth', Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(value));
  }

  get verticalAlign() {
    return this[getAttribute]('verticalAlign');
  }

  set verticalAlign(value) {
    this[setAttribute]('verticalAlign', value);
  }

  get fillColor() {
    return this[getAttribute]('fillColor');
  }

  set fillColor(value) {
    this[setAttribute]('fillColor', Object(_utils_color__WEBPACK_IMPORTED_MODULE_2__["parseColor"])(value));
  }

  get font() {
    const {
      fontStyle,
      fontVariant,
      fontWeight,
      fontStretch,
      fontSize,
      lineHeight,
      fontFamily
    } = this;
    return `${fontStyle} ${fontVariant} ${fontWeight} ${fontStretch} ${fontSize}px/${lineHeight}px ${fontFamily}`;
  }

  set font(value) {
    if (value == null) {
      this.fontStyle = null;
      this.fontVariant = null;
      this.fontWeight = null;
      this.fontStretch = null;
      this.fontSize = null;
      this.lineHeight = null;
      this.fontFamily = null;
    } else {
      const fontInfo = Object(_mesh_js_core__WEBPACK_IMPORTED_MODULE_0__["parseFont"])(value);
      this.fontStyle = fontInfo.style;
      this.fontVariant = fontInfo.variant;
      this.fontWeight = fontInfo.weight;
      this.fontStretch = fontInfo.stretch;
      this.fontSize = Object(_utils_attribute_value__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(`${fontInfo.size}${fontInfo.unit}`);

      if (fontInfo.lineHeight) {
        this.lineHeight = fontInfo.pxLineHeight;
      }

      this.fontFamily = fontInfo.family;
    }
  }

}

/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Group; });
/* harmony import */ var _mesh_js_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(226);
/* harmony import */ var _attribute_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(259);
/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(221);
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(260);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const _zOrder = Symbol('zOrder');

const _ordered = Symbol('ordered');

const _children = Symbol('children');

const _sealed = Symbol('sealed');

class Group extends _block__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(attrs = {}) {
    super(attrs);
    this[_children] = [];
    this[_ordered] = null;
    this[_zOrder] = 0;
  }

  get childNodes() {
    return this[_children];
  }

  get children() {
    return this[_children];
  }

  get orderedChildren() {
    if (!this[_ordered]) {
      this[_ordered] = [...this[_children]];

      this[_ordered].sort((a, b) => {
        return a.zIndex - b.zIndex || a.zOrder - b.zOrder;
      });
    }

    return this[_ordered];
  }

  append(...els) {
    return els.map(el => {
      return this.appendChild(el);
    });
  }

  appendChild(el) {
    el.remove();

    this[_children].push(el);

    el.connect(this, this[_zOrder]++);

    if (this[_ordered]) {
      if (this[_ordered].length && el.zIndex < this[_ordered][this[_ordered].length - 1].zIndex) {
        this.reorder();
      } else {
        this[_ordered].push(el);
      }
    }

    return el;
  }
  /* override */
  // get isVisible() {
  //   return this.attributes.opacity > 0 && this[_children].length > 0;
  // }

  /* override */
  // get hasBackground() {
  //   return this[_children].length > 0;
  // }

  /* override */


  cloneNode(deep = false) {
    const node = super.cloneNode();

    if (deep) {
      this[_children].forEach(child => {
        const childNode = child.cloneNode(deep);
        node.appendChild(childNode);
      });
    }

    return node;
  }
  /* override */


  dispatchPointerEvent(event) {
    const children = this.orderedChildren;

    for (let i = children.length - 1; i >= 0; i--) {
      const child = children[i];
      if (child.dispatchPointerEvent(event)) return true;
    }

    return super.dispatchPointerEvent(event);
  }
  /* override */


  draw(meshes = []) {
    this.__cacheRenderMatrix = this.renderMatrix;
    super.draw(meshes);

    if (!this[_sealed]) {
      const children = this.orderedChildren;

      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        child.draw(meshes);
      }
    }

    this.__cacheRenderMatrix = null;
    return meshes;
  }

  getElementById(id) {
    return Object(_selector__WEBPACK_IMPORTED_MODULE_4__["querySelector"])(`#${id}`, this);
  }

  getElementsByClassName(className) {
    return Object(_selector__WEBPACK_IMPORTED_MODULE_4__["querySelectorAll"])(`.${className}`, this);
  }

  getElementsByName(name) {
    return Object(_selector__WEBPACK_IMPORTED_MODULE_4__["querySelectorAll"])(`[name="${name}"]`, this);
  }

  getElementsByTagName(tagName) {
    return Object(_selector__WEBPACK_IMPORTED_MODULE_4__["querySelectorAll"])(tagName, this);
  }

  insertBefore(el, ref) {
    if (ref == null) return this.appendChild(el);
    el.remove();

    const refIdx = this[_children].indexOf(ref);

    if (refIdx < 0) {
      throw new Error('Invalid reference node.');
    }

    const zOrder = ref.zOrder;

    for (let i = refIdx; i < this[_children].length; i++) {
      const order = this[_children][i].zOrder;
      const child = this[_children][i];
      delete child.zOrder;
      Object.defineProperty(child, 'zOrder', {
        value: order + 1,
        writable: false,
        configurable: true
      });
    }

    this[_children].splice(refIdx, 0, el);

    el.connect(this, zOrder);

    if (this[_ordered]) {
      if (el.zIndex !== ref.zIndex) {
        this.reorder();
      } else {
        const idx = this[_ordered].indexOf(ref);

        this[_ordered].splice(idx, 0, el);
      }
    }

    return el;
  }

  querySelector(selector) {
    return Object(_selector__WEBPACK_IMPORTED_MODULE_4__["querySelector"])(selector, this);
  }

  querySelectorAll(selector) {
    return Object(_selector__WEBPACK_IMPORTED_MODULE_4__["querySelectorAll"])(selector, this);
  }

  replaceChild(el, ref) {
    el.remove();

    const refIdx = this[_children].indexOf(ref);

    if (refIdx < 0) {
      throw new Error('Invalid reference node.');
    }

    this[_children][refIdx] = el;
    el.connect(this, ref.zOrder);

    if (this[_ordered]) {
      if (el.zIndex !== ref.zIndex) {
        this.reorder();
      } else {
        const idx = this[_ordered].indexOf(ref);

        this[_ordered][idx] = el;
      }
    }

    ref.disconnect();
    return el;
  }

  removeAllChildren() {
    const children = this[_children];

    for (let i = children.length - 1; i >= 0; i--) {
      children[i].remove();
    }
  }

  removeChild(el) {
    const idx = this[_children].indexOf(el);

    if (idx >= 0) {
      this[_children].splice(idx, 1);

      if (this[_ordered]) {
        const _idx = this[_ordered].indexOf(el);

        this[_ordered].splice(_idx, 1);
      }

      el.disconnect();
      return el;
    }

    return null;
  }

  reorder() {
    this[_ordered] = null;
  }

  seal() {
    function transform(path, m) {
      const ret = [];

      for (let i = 0; i < path.length; i++) {
        const cmd = [...path[i]];

        for (let j = 1; j < cmd.length; j += 2) {
          const x = cmd[j];
          const y = cmd[j + 1];
          cmd[j] = x * m[0] + y * m[2] + m[4];
          cmd[j + 1] = x * m[1] + y * m[3] + m[5];
        }

        ret.push(cmd);
      }

      return ret;
    }

    const children = this.orderedChildren;
    const clientBox = new _mesh_js_core__WEBPACK_IMPORTED_MODULE_0__["Figure2D"]();
    const localMatrix = this.localMatrix;

    for (let i = 0; i < children.length; i++) {
      let child = children[i];

      if (child instanceof Group) {
        child = child.seal();
      }

      if (child.clientBox) {
        let path = child.clientBox.contours.path;
        path = transform(path, child.localMatrix);
        clientBox.addPath(path);
      }

      if (child.path) {
        let path = child.path.contours.path;
        path = transform(path, child.localMatrix);
        clientBox.addPath(path);
      }
    }

    this[_sealed] = true;
    this.clientBox = clientBox;
    return {
      clientBox,
      localMatrix
    };
  }
  /* override */


  setResolution({
    width,
    height
  }) {
    super.setResolution({
      width,
      height
    });

    this[_children].forEach(child => {
      child.setResolution({
        width,
        height
      });
    });
  }
  /* override */


  updateContours() {
    if (!this[_sealed]) super.updateContours();
  }

}

_defineProperty(Group, "Attr", _attribute_group__WEBPACK_IMPORTED_MODULE_2__["default"]);

_document__WEBPACK_IMPORTED_MODULE_3__["default"].registerNode(Group, 'group');

/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Group; });
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(227);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

 // const setDefault = Symbol.for('spritejs_setAttributeDefault');

class Group extends _block__WEBPACK_IMPORTED_MODULE_0__["default"] {// constructor(subject) {
  //   super(subject);
  //   this[setDefault]({
  //     pointerEvents: 'all',
  //   });
  // }
}

/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "querySelectorAll", function() { return querySelectorAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "querySelector", function() { return querySelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMatched", function() { return isMatched; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return compile; });
/* harmony import */ var _utils_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(228);
/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(221);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);

/* istanbul ignore file */



const CSSselect = __webpack_require__(261);

function isTag(elem) {
  return elem.nodeType === 1 || _document__WEBPACK_IMPORTED_MODULE_1__["default"].isSpriteNode(elem.nodeName);
}

function getChildren(elem) {
  return Array.from(elem.childNodes || []);
}

function getParent(elem) {
  if (_document__WEBPACK_IMPORTED_MODULE_1__["default"].isSpriteNode(elem.nodeName)) {
    return elem.parent || elem.canvas || elem.container;
  }

  return elem.parentElement;
}

function removeSubsets(nodes) {
  let idx = nodes.length,
      node,
      ancestor,
      replace; // Check if each node (or one of its ancestors) is already contained in the
  // array.

  while (--idx > -1) {
    node = ancestor = nodes[idx]; // Temporarily remove the node under consideration

    nodes[idx] = null;
    replace = true;

    while (ancestor) {
      if (nodes.indexOf(ancestor) > -1) {
        replace = false;
        nodes.splice(idx, 1);
        break;
      }

      ancestor = getParent(ancestor);
    } // If the node has been found to be unique, re-insert it.


    if (replace) {
      nodes[idx] = node;
    }
  }

  return nodes;
}

const adapter = {
  isTag,

  existsOne(test, elems) {
    return elems.some(elem => {
      return isTag(elem) ? test(elem) || adapter.existsOne(test, getChildren(elem)) : false;
    });
  },

  getSiblings(elem) {
    const parent = getParent(elem);
    return parent && getChildren(parent);
  },

  getChildren,
  getParent,

  getAttributeValue(elem, name) {
    if (elem.nodeType === 1 && name === 'class' || name === 'id') {
      return elem[name];
    }

    if (this.hasAttrib(elem, name)) {
      let val = elem.attributes[name];

      if (Array.isArray(val)) {
        val = `[${val.join()}]`;
      }

      return String(val);
    }
  },

  hasAttrib(elem, name) {
    return elem.attributes[name] != null;
  },

  removeSubsets,

  getName(elem) {
    return elem.tagName ? elem.tagName.toLowerCase() : null;
  },

  findOne: function findOne(test, arr) {
    let elem = null;

    for (let i = 0, l = arr.length; i < l && !elem; i++) {
      if (test(arr[i])) {
        elem = arr[i];
      } else {
        const childs = getChildren(arr[i]);

        if (childs && childs.length > 0) {
          elem = findOne(test, childs);
        }
      }
    }

    return elem;
  },
  findAll: function findAll(test, elems) {
    let result = [];

    for (let i = 0, j = elems.length; i < j; i++) {
      if (!isTag(elems[i])) continue; // eslint-disable-line

      if (test(elems[i])) result.push(elems[i]);
      const childs = getChildren(elems[i]);
      if (childs) result = result.concat(findAll(test, childs));
    }

    return result;
  },
  getText: function getText(elem) {
    if (Array.isArray(elem)) return elem.map(getText).join('');
    if (isTag(elem)) return getText(getChildren(elem));
    if (elem.nodeType === 3) return elem.nodeValue;
    if (_document__WEBPACK_IMPORTED_MODULE_1__["default"].isSpriteNode(elem.nodeName)) return elem.text;
    return '';
  }
};

function resolveQuery(query) {
  if (typeof query !== 'string') return query;
  let matches = query.match(/\[(bgcolor|fillColor|strokeColor|color)\s*=\s*['"]?\w+['"]?\]/g);

  if (matches) {
    matches = matches.map(matched => {
      const kv = matched.slice(1, -1).split('=');
      const color = Object(_utils_color__WEBPACK_IMPORTED_MODULE_0__["parseColor"])(kv[1].replace(/['"]/g, ''));
      return [matched, `[${kv[0]}="${color}"]`];
    });
    matches.forEach(([r, p]) => {
      query = query.replace(r, p);
    });
  }

  matches = query.match(/\[\w+\s*=\s*['"]\[.+?\]['"]\]/g);

  if (matches) {
    matches = matches.map(matched => {
      const kv = matched.slice(1, -1).split('=');
      const arr = kv[1].slice(2, -2).split(/,/g).map(k => k.trim());
      return [matched, `[${kv[0]}="[${arr}]"]`];
    });
    matches.forEach(([r, p]) => {
      query = query.replace(r, p);
    });
  }

  return query;
}

function querySelectorAll(query, elems) {
  return CSSselect.selectAll(resolveQuery(query), elems, {
    adapter
  });
}
function querySelector(query, elems) {
  return CSSselect.selectOne(resolveQuery(query), elems, {
    adapter
  });
}
function isMatched(elem, query) {
  return CSSselect.is(elem, resolveQuery(query), {
    adapter
  });
}
function compile(query) {
  return CSSselect.compile(resolveQuery(query), {
    adapter
  });
}

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = CSSselect;

var DomUtils = __webpack_require__(262);
var falseFunc = __webpack_require__(281).falseFunc;
var compileRaw = __webpack_require__(282);

function wrapCompile(func) {
    return function addAdapter(selector, options, context) {
        options = options || {};
        options.adapter = options.adapter || DomUtils;

        return func(selector, options, context);
    };
}

var compile = wrapCompile(compileRaw);
var compileUnsafe = wrapCompile(compileRaw.compileUnsafe);

function getSelectorFunc(searchFunc) {
    return function select(query, elems, options) {
        options = options || {};
        options.adapter = options.adapter || DomUtils;

        if (typeof query !== "function") {
            query = compileUnsafe(query, options, elems);
        }
        if (query.shouldTestNextSiblings) {
            elems = appendNextSiblings((options && options.context) || elems, options.adapter);
        }
        if (!Array.isArray(elems)) elems = options.adapter.getChildren(elems);
        else elems = options.adapter.removeSubsets(elems);
        return searchFunc(query, elems, options);
    };
}

function getNextSiblings(elem, adapter) {
    var siblings = adapter.getSiblings(elem);
    if (!Array.isArray(siblings)) return [];
    siblings = siblings.slice(0);
    while (siblings.shift() !== elem);
    return siblings;
}

function appendNextSiblings(elems, adapter) {
    // Order matters because jQuery seems to check the children before the siblings
    if (!Array.isArray(elems)) elems = [elems];
    var newElems = elems.slice(0);

    for (var i = 0, len = elems.length; i < len; i++) {
        var nextSiblings = getNextSiblings(newElems[i], adapter);
        newElems.push.apply(newElems, nextSiblings);
    }
    return newElems;
}

var selectAll = getSelectorFunc(function selectAll(query, elems, options) {
    return query === falseFunc || !elems || elems.length === 0 ? [] : options.adapter.findAll(query, elems);
});

var selectOne = getSelectorFunc(function selectOne(query, elems, options) {
    return query === falseFunc || !elems || elems.length === 0 ? null : options.adapter.findOne(query, elems);
});

function is(elem, query, options) {
    options = options || {};
    options.adapter = options.adapter || DomUtils;
    return (typeof query === "function" ? query : compile(query, options))(elem);
}

/*
	the exported interface
*/
function CSSselect(query, elems, options) {
    return selectAll(query, elems, options);
}

CSSselect.compile = compile;
CSSselect.filters = compileRaw.Pseudos.filters;
CSSselect.pseudos = compileRaw.Pseudos.pseudos;

CSSselect.selectAll = selectAll;
CSSselect.selectOne = selectOne;

CSSselect.is = is;

//legacy methods (might be removed)
CSSselect.parse = compile;
CSSselect.iterate = selectAll;

//hooks
CSSselect._compileUnsafe = compileUnsafe;
CSSselect._compileToken = compileRaw.compileToken;


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

var DomUtils = module.exports;

[
	__webpack_require__(263),
	__webpack_require__(276),
	__webpack_require__(277),
	__webpack_require__(278),
	__webpack_require__(279),
	__webpack_require__(280)
].forEach(function(ext){
	Object.keys(ext).forEach(function(key){
		DomUtils[key] = ext[key].bind(DomUtils);
	});
});


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var ElementType = __webpack_require__(264),
    getOuterHTML = __webpack_require__(265),
    isTag = ElementType.isTag;

module.exports = {
	getInnerHTML: getInnerHTML,
	getOuterHTML: getOuterHTML,
	getText: getText
};

function getInnerHTML(elem, opts){
	return elem.children ? elem.children.map(function(elem){
		return getOuterHTML(elem, opts);
	}).join("") : "";
}

function getText(elem){
	if(Array.isArray(elem)) return elem.map(getText).join("");
	if(isTag(elem)) return elem.name === "br" ? "\n" : getText(elem.children);
	if(elem.type === ElementType.CDATA) return getText(elem.children);
	if(elem.type === ElementType.Text) return elem.data;
	return "";
}


/***/ }),
/* 264 */
/***/ (function(module, exports) {

//Types of elements found in the DOM
module.exports = {
	Text: "text", //Text
	Directive: "directive", //<? ... ?>
	Comment: "comment", //<!-- ... -->
	Script: "script", //<script> tags
	Style: "style", //<style> tags
	Tag: "tag", //Any tag
	CDATA: "cdata", //<![CDATA[ ... ]]>
	Doctype: "doctype",

	isTag: function(elem){
		return elem.type === "tag" || elem.type === "script" || elem.type === "style";
	}
};


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

/*
  Module dependencies
*/
var ElementType = __webpack_require__(266);
var entities = __webpack_require__(267);

/* mixed-case SVG and MathML tags & attributes
   recognized by the HTML parser, see
   https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inforeign
*/
var foreignNames = __webpack_require__(275);
foreignNames.elementNames.__proto__ = null; /* use as a simple dictionary */
foreignNames.attributeNames.__proto__ = null;

var unencodedElements = {
  __proto__: null,
  style: true,
  script: true,
  xmp: true,
  iframe: true,
  noembed: true,
  noframes: true,
  plaintext: true,
  noscript: true
};

/*
  Format attributes
*/
function formatAttrs(attributes, opts) {
  if (!attributes) return;

  var output = '';
  var value;

  // Loop through the attributes
  for (var key in attributes) {
    value = attributes[key];
    if (output) {
      output += ' ';
    }

    if (opts.xmlMode === 'foreign') {
      /* fix up mixed-case attribute names */
      key = foreignNames.attributeNames[key] || key;
    }
    output += key;
    if ((value !== null && value !== '') || opts.xmlMode) {
      output +=
        '="' +
        (opts.decodeEntities
          ? entities.encodeXML(value)
          : value.replace(/\"/g, '&quot;')) +
        '"';
    }
  }

  return output;
}

/*
  Self-enclosing tags (stolen from node-htmlparser)
*/
var singleTag = {
  __proto__: null,
  area: true,
  base: true,
  basefont: true,
  br: true,
  col: true,
  command: true,
  embed: true,
  frame: true,
  hr: true,
  img: true,
  input: true,
  isindex: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
};

var render = (module.exports = function(dom, opts) {
  if (!Array.isArray(dom) && !dom.cheerio) dom = [dom];
  opts = opts || {};

  var output = '';

  for (var i = 0; i < dom.length; i++) {
    var elem = dom[i];

    if (elem.type === 'root') output += render(elem.children, opts);
    else if (ElementType.isTag(elem)) output += renderTag(elem, opts);
    else if (elem.type === ElementType.Directive)
      output += renderDirective(elem);
    else if (elem.type === ElementType.Comment) output += renderComment(elem);
    else if (elem.type === ElementType.CDATA) output += renderCdata(elem);
    else output += renderText(elem, opts);
  }

  return output;
});

const foreignModeIntegrationPoints = [
  'mi',
  'mo',
  'mn',
  'ms',
  'mtext',
  'annotation-xml',
  'foreignObject',
  'desc',
  'title'
];

function renderTag(elem, opts) {
  // Handle SVG / MathML in HTML
  if (opts.xmlMode === 'foreign') {
    /* fix up mixed-case element names */
    elem.name = foreignNames.elementNames[elem.name] || elem.name;
    /* exit foreign mode at integration points */
    if (
      elem.parent &&
      foreignModeIntegrationPoints.indexOf(elem.parent.name) >= 0
    )
      opts = Object.assign({}, opts, { xmlMode: false });
  }
  if (!opts.xmlMode && ['svg', 'math'].indexOf(elem.name) >= 0) {
    opts = Object.assign({}, opts, { xmlMode: 'foreign' });
  }

  var tag = '<' + elem.name;
  var attribs = formatAttrs(elem.attribs, opts);

  if (attribs) {
    tag += ' ' + attribs;
  }

  if (opts.xmlMode && (!elem.children || elem.children.length === 0)) {
    tag += '/>';
  } else {
    tag += '>';
    if (elem.children) {
      tag += render(elem.children, opts);
    }

    if (!singleTag[elem.name] || opts.xmlMode) {
      tag += '</' + elem.name + '>';
    }
  }

  return tag;
}

function renderDirective(elem) {
  return '<' + elem.data + '>';
}

function renderText(elem, opts) {
  var data = elem.data || '';

  // if entities weren't decoded, no need to encode them back
  if (
    opts.decodeEntities &&
    !(elem.parent && elem.parent.name in unencodedElements)
  ) {
    data = entities.encodeXML(data);
  }

  return data;
}

function renderCdata(elem) {
  return '<![CDATA[' + elem.children[0].data + ']]>';
}

function renderComment(elem) {
  return '<!--' + elem.data + '-->';
}


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tests whether an element is a tag or not.
 *
 * @param elem Element to test
 */
function isTag(elem) {
    return (elem.type === "tag" /* Tag */ ||
        elem.type === "script" /* Script */ ||
        elem.type === "style" /* Style */);
}
exports.isTag = isTag;
// Exports for backwards compatibility
exports.Text = "text" /* Text */; //Text
exports.Directive = "directive" /* Directive */; //<? ... ?>
exports.Comment = "comment" /* Comment */; //<!-- ... -->
exports.Script = "script" /* Script */; //<script> tags
exports.Style = "style" /* Style */; //<style> tags
exports.Tag = "tag" /* Tag */; //Any tag
exports.CDATA = "cdata" /* CDATA */; //<![CDATA[ ... ]]>
exports.Doctype = "doctype" /* Doctype */;


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var decode_1 = __webpack_require__(268);
var encode_1 = __webpack_require__(274);
function decode(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
}
exports.decode = decode;
function decodeStrict(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
}
exports.decodeStrict = decodeStrict;
function encode(data, level) {
    return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
}
exports.encode = encode;
var encode_2 = __webpack_require__(274);
exports.encodeXML = encode_2.encodeXML;
exports.encodeHTML = encode_2.encodeHTML;
exports.escape = encode_2.escape;
// Legacy aliases
exports.encodeHTML4 = encode_2.encodeHTML;
exports.encodeHTML5 = encode_2.encodeHTML;
var decode_2 = __webpack_require__(268);
exports.decodeXML = decode_2.decodeXML;
exports.decodeHTML = decode_2.decodeHTML;
exports.decodeHTMLStrict = decode_2.decodeHTMLStrict;
// Legacy aliases
exports.decodeHTML4 = decode_2.decodeHTML;
exports.decodeHTML5 = decode_2.decodeHTML;
exports.decodeHTML4Strict = decode_2.decodeHTMLStrict;
exports.decodeHTML5Strict = decode_2.decodeHTMLStrict;
exports.decodeXMLStrict = decode_2.decodeXML;


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entities_json_1 = __importDefault(__webpack_require__(269));
var legacy_json_1 = __importDefault(__webpack_require__(270));
var xml_json_1 = __importDefault(__webpack_require__(271));
var decode_codepoint_1 = __importDefault(__webpack_require__(272));
exports.decodeXML = getStrictDecoder(xml_json_1.default);
exports.decodeHTMLStrict = getStrictDecoder(entities_json_1.default);
function getStrictDecoder(map) {
    var keys = Object.keys(map).join("|");
    var replace = getReplacer(map);
    keys += "|#[xX][\\da-fA-F]+|#\\d+";
    var re = new RegExp("&(?:" + keys + ");", "g");
    return function (str) { return String(str).replace(re, replace); };
}
var sorter = function (a, b) { return (a < b ? 1 : -1); };
exports.decodeHTML = (function () {
    var legacy = Object.keys(legacy_json_1.default).sort(sorter);
    var keys = Object.keys(entities_json_1.default).sort(sorter);
    for (var i = 0, j = 0; i < keys.length; i++) {
        if (legacy[j] === keys[i]) {
            keys[i] += ";?";
            j++;
        }
        else {
            keys[i] += ";";
        }
    }
    var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
    var replace = getReplacer(entities_json_1.default);
    function replacer(str) {
        if (str.substr(-1) !== ";")
            str += ";";
        return replace(str);
    }
    //TODO consider creating a merged map
    return function (str) {
        return String(str).replace(re, replacer);
    };
})();
function getReplacer(map) {
    return function replace(str) {
        if (str.charAt(1) === "#") {
            if (str.charAt(2) === "X" || str.charAt(2) === "x") {
                return decode_codepoint_1.default(parseInt(str.substr(3), 16));
            }
            return decode_codepoint_1.default(parseInt(str.substr(2), 10));
        }
        return map[str.slice(1, -1)];
    };
}


/***/ }),
/* 269 */
/***/ (function(module) {

module.exports = JSON.parse("{\"Aacute\":\"Á\",\"aacute\":\"á\",\"Abreve\":\"Ă\",\"abreve\":\"ă\",\"ac\":\"∾\",\"acd\":\"∿\",\"acE\":\"∾̳\",\"Acirc\":\"Â\",\"acirc\":\"â\",\"acute\":\"´\",\"Acy\":\"А\",\"acy\":\"а\",\"AElig\":\"Æ\",\"aelig\":\"æ\",\"af\":\"⁡\",\"Afr\":\"𝔄\",\"afr\":\"𝔞\",\"Agrave\":\"À\",\"agrave\":\"à\",\"alefsym\":\"ℵ\",\"aleph\":\"ℵ\",\"Alpha\":\"Α\",\"alpha\":\"α\",\"Amacr\":\"Ā\",\"amacr\":\"ā\",\"amalg\":\"⨿\",\"amp\":\"&\",\"AMP\":\"&\",\"andand\":\"⩕\",\"And\":\"⩓\",\"and\":\"∧\",\"andd\":\"⩜\",\"andslope\":\"⩘\",\"andv\":\"⩚\",\"ang\":\"∠\",\"ange\":\"⦤\",\"angle\":\"∠\",\"angmsdaa\":\"⦨\",\"angmsdab\":\"⦩\",\"angmsdac\":\"⦪\",\"angmsdad\":\"⦫\",\"angmsdae\":\"⦬\",\"angmsdaf\":\"⦭\",\"angmsdag\":\"⦮\",\"angmsdah\":\"⦯\",\"angmsd\":\"∡\",\"angrt\":\"∟\",\"angrtvb\":\"⊾\",\"angrtvbd\":\"⦝\",\"angsph\":\"∢\",\"angst\":\"Å\",\"angzarr\":\"⍼\",\"Aogon\":\"Ą\",\"aogon\":\"ą\",\"Aopf\":\"𝔸\",\"aopf\":\"𝕒\",\"apacir\":\"⩯\",\"ap\":\"≈\",\"apE\":\"⩰\",\"ape\":\"≊\",\"apid\":\"≋\",\"apos\":\"'\",\"ApplyFunction\":\"⁡\",\"approx\":\"≈\",\"approxeq\":\"≊\",\"Aring\":\"Å\",\"aring\":\"å\",\"Ascr\":\"𝒜\",\"ascr\":\"𝒶\",\"Assign\":\"≔\",\"ast\":\"*\",\"asymp\":\"≈\",\"asympeq\":\"≍\",\"Atilde\":\"Ã\",\"atilde\":\"ã\",\"Auml\":\"Ä\",\"auml\":\"ä\",\"awconint\":\"∳\",\"awint\":\"⨑\",\"backcong\":\"≌\",\"backepsilon\":\"϶\",\"backprime\":\"‵\",\"backsim\":\"∽\",\"backsimeq\":\"⋍\",\"Backslash\":\"∖\",\"Barv\":\"⫧\",\"barvee\":\"⊽\",\"barwed\":\"⌅\",\"Barwed\":\"⌆\",\"barwedge\":\"⌅\",\"bbrk\":\"⎵\",\"bbrktbrk\":\"⎶\",\"bcong\":\"≌\",\"Bcy\":\"Б\",\"bcy\":\"б\",\"bdquo\":\"„\",\"becaus\":\"∵\",\"because\":\"∵\",\"Because\":\"∵\",\"bemptyv\":\"⦰\",\"bepsi\":\"϶\",\"bernou\":\"ℬ\",\"Bernoullis\":\"ℬ\",\"Beta\":\"Β\",\"beta\":\"β\",\"beth\":\"ℶ\",\"between\":\"≬\",\"Bfr\":\"𝔅\",\"bfr\":\"𝔟\",\"bigcap\":\"⋂\",\"bigcirc\":\"◯\",\"bigcup\":\"⋃\",\"bigodot\":\"⨀\",\"bigoplus\":\"⨁\",\"bigotimes\":\"⨂\",\"bigsqcup\":\"⨆\",\"bigstar\":\"★\",\"bigtriangledown\":\"▽\",\"bigtriangleup\":\"△\",\"biguplus\":\"⨄\",\"bigvee\":\"⋁\",\"bigwedge\":\"⋀\",\"bkarow\":\"⤍\",\"blacklozenge\":\"⧫\",\"blacksquare\":\"▪\",\"blacktriangle\":\"▴\",\"blacktriangledown\":\"▾\",\"blacktriangleleft\":\"◂\",\"blacktriangleright\":\"▸\",\"blank\":\"␣\",\"blk12\":\"▒\",\"blk14\":\"░\",\"blk34\":\"▓\",\"block\":\"█\",\"bne\":\"=⃥\",\"bnequiv\":\"≡⃥\",\"bNot\":\"⫭\",\"bnot\":\"⌐\",\"Bopf\":\"𝔹\",\"bopf\":\"𝕓\",\"bot\":\"⊥\",\"bottom\":\"⊥\",\"bowtie\":\"⋈\",\"boxbox\":\"⧉\",\"boxdl\":\"┐\",\"boxdL\":\"╕\",\"boxDl\":\"╖\",\"boxDL\":\"╗\",\"boxdr\":\"┌\",\"boxdR\":\"╒\",\"boxDr\":\"╓\",\"boxDR\":\"╔\",\"boxh\":\"─\",\"boxH\":\"═\",\"boxhd\":\"┬\",\"boxHd\":\"╤\",\"boxhD\":\"╥\",\"boxHD\":\"╦\",\"boxhu\":\"┴\",\"boxHu\":\"╧\",\"boxhU\":\"╨\",\"boxHU\":\"╩\",\"boxminus\":\"⊟\",\"boxplus\":\"⊞\",\"boxtimes\":\"⊠\",\"boxul\":\"┘\",\"boxuL\":\"╛\",\"boxUl\":\"╜\",\"boxUL\":\"╝\",\"boxur\":\"└\",\"boxuR\":\"╘\",\"boxUr\":\"╙\",\"boxUR\":\"╚\",\"boxv\":\"│\",\"boxV\":\"║\",\"boxvh\":\"┼\",\"boxvH\":\"╪\",\"boxVh\":\"╫\",\"boxVH\":\"╬\",\"boxvl\":\"┤\",\"boxvL\":\"╡\",\"boxVl\":\"╢\",\"boxVL\":\"╣\",\"boxvr\":\"├\",\"boxvR\":\"╞\",\"boxVr\":\"╟\",\"boxVR\":\"╠\",\"bprime\":\"‵\",\"breve\":\"˘\",\"Breve\":\"˘\",\"brvbar\":\"¦\",\"bscr\":\"𝒷\",\"Bscr\":\"ℬ\",\"bsemi\":\"⁏\",\"bsim\":\"∽\",\"bsime\":\"⋍\",\"bsolb\":\"⧅\",\"bsol\":\"\\\\\",\"bsolhsub\":\"⟈\",\"bull\":\"•\",\"bullet\":\"•\",\"bump\":\"≎\",\"bumpE\":\"⪮\",\"bumpe\":\"≏\",\"Bumpeq\":\"≎\",\"bumpeq\":\"≏\",\"Cacute\":\"Ć\",\"cacute\":\"ć\",\"capand\":\"⩄\",\"capbrcup\":\"⩉\",\"capcap\":\"⩋\",\"cap\":\"∩\",\"Cap\":\"⋒\",\"capcup\":\"⩇\",\"capdot\":\"⩀\",\"CapitalDifferentialD\":\"ⅅ\",\"caps\":\"∩︀\",\"caret\":\"⁁\",\"caron\":\"ˇ\",\"Cayleys\":\"ℭ\",\"ccaps\":\"⩍\",\"Ccaron\":\"Č\",\"ccaron\":\"č\",\"Ccedil\":\"Ç\",\"ccedil\":\"ç\",\"Ccirc\":\"Ĉ\",\"ccirc\":\"ĉ\",\"Cconint\":\"∰\",\"ccups\":\"⩌\",\"ccupssm\":\"⩐\",\"Cdot\":\"Ċ\",\"cdot\":\"ċ\",\"cedil\":\"¸\",\"Cedilla\":\"¸\",\"cemptyv\":\"⦲\",\"cent\":\"¢\",\"centerdot\":\"·\",\"CenterDot\":\"·\",\"cfr\":\"𝔠\",\"Cfr\":\"ℭ\",\"CHcy\":\"Ч\",\"chcy\":\"ч\",\"check\":\"✓\",\"checkmark\":\"✓\",\"Chi\":\"Χ\",\"chi\":\"χ\",\"circ\":\"ˆ\",\"circeq\":\"≗\",\"circlearrowleft\":\"↺\",\"circlearrowright\":\"↻\",\"circledast\":\"⊛\",\"circledcirc\":\"⊚\",\"circleddash\":\"⊝\",\"CircleDot\":\"⊙\",\"circledR\":\"®\",\"circledS\":\"Ⓢ\",\"CircleMinus\":\"⊖\",\"CirclePlus\":\"⊕\",\"CircleTimes\":\"⊗\",\"cir\":\"○\",\"cirE\":\"⧃\",\"cire\":\"≗\",\"cirfnint\":\"⨐\",\"cirmid\":\"⫯\",\"cirscir\":\"⧂\",\"ClockwiseContourIntegral\":\"∲\",\"CloseCurlyDoubleQuote\":\"”\",\"CloseCurlyQuote\":\"’\",\"clubs\":\"♣\",\"clubsuit\":\"♣\",\"colon\":\":\",\"Colon\":\"∷\",\"Colone\":\"⩴\",\"colone\":\"≔\",\"coloneq\":\"≔\",\"comma\":\",\",\"commat\":\"@\",\"comp\":\"∁\",\"compfn\":\"∘\",\"complement\":\"∁\",\"complexes\":\"ℂ\",\"cong\":\"≅\",\"congdot\":\"⩭\",\"Congruent\":\"≡\",\"conint\":\"∮\",\"Conint\":\"∯\",\"ContourIntegral\":\"∮\",\"copf\":\"𝕔\",\"Copf\":\"ℂ\",\"coprod\":\"∐\",\"Coproduct\":\"∐\",\"copy\":\"©\",\"COPY\":\"©\",\"copysr\":\"℗\",\"CounterClockwiseContourIntegral\":\"∳\",\"crarr\":\"↵\",\"cross\":\"✗\",\"Cross\":\"⨯\",\"Cscr\":\"𝒞\",\"cscr\":\"𝒸\",\"csub\":\"⫏\",\"csube\":\"⫑\",\"csup\":\"⫐\",\"csupe\":\"⫒\",\"ctdot\":\"⋯\",\"cudarrl\":\"⤸\",\"cudarrr\":\"⤵\",\"cuepr\":\"⋞\",\"cuesc\":\"⋟\",\"cularr\":\"↶\",\"cularrp\":\"⤽\",\"cupbrcap\":\"⩈\",\"cupcap\":\"⩆\",\"CupCap\":\"≍\",\"cup\":\"∪\",\"Cup\":\"⋓\",\"cupcup\":\"⩊\",\"cupdot\":\"⊍\",\"cupor\":\"⩅\",\"cups\":\"∪︀\",\"curarr\":\"↷\",\"curarrm\":\"⤼\",\"curlyeqprec\":\"⋞\",\"curlyeqsucc\":\"⋟\",\"curlyvee\":\"⋎\",\"curlywedge\":\"⋏\",\"curren\":\"¤\",\"curvearrowleft\":\"↶\",\"curvearrowright\":\"↷\",\"cuvee\":\"⋎\",\"cuwed\":\"⋏\",\"cwconint\":\"∲\",\"cwint\":\"∱\",\"cylcty\":\"⌭\",\"dagger\":\"†\",\"Dagger\":\"‡\",\"daleth\":\"ℸ\",\"darr\":\"↓\",\"Darr\":\"↡\",\"dArr\":\"⇓\",\"dash\":\"‐\",\"Dashv\":\"⫤\",\"dashv\":\"⊣\",\"dbkarow\":\"⤏\",\"dblac\":\"˝\",\"Dcaron\":\"Ď\",\"dcaron\":\"ď\",\"Dcy\":\"Д\",\"dcy\":\"д\",\"ddagger\":\"‡\",\"ddarr\":\"⇊\",\"DD\":\"ⅅ\",\"dd\":\"ⅆ\",\"DDotrahd\":\"⤑\",\"ddotseq\":\"⩷\",\"deg\":\"°\",\"Del\":\"∇\",\"Delta\":\"Δ\",\"delta\":\"δ\",\"demptyv\":\"⦱\",\"dfisht\":\"⥿\",\"Dfr\":\"𝔇\",\"dfr\":\"𝔡\",\"dHar\":\"⥥\",\"dharl\":\"⇃\",\"dharr\":\"⇂\",\"DiacriticalAcute\":\"´\",\"DiacriticalDot\":\"˙\",\"DiacriticalDoubleAcute\":\"˝\",\"DiacriticalGrave\":\"`\",\"DiacriticalTilde\":\"˜\",\"diam\":\"⋄\",\"diamond\":\"⋄\",\"Diamond\":\"⋄\",\"diamondsuit\":\"♦\",\"diams\":\"♦\",\"die\":\"¨\",\"DifferentialD\":\"ⅆ\",\"digamma\":\"ϝ\",\"disin\":\"⋲\",\"div\":\"÷\",\"divide\":\"÷\",\"divideontimes\":\"⋇\",\"divonx\":\"⋇\",\"DJcy\":\"Ђ\",\"djcy\":\"ђ\",\"dlcorn\":\"⌞\",\"dlcrop\":\"⌍\",\"dollar\":\"$\",\"Dopf\":\"𝔻\",\"dopf\":\"𝕕\",\"Dot\":\"¨\",\"dot\":\"˙\",\"DotDot\":\"⃜\",\"doteq\":\"≐\",\"doteqdot\":\"≑\",\"DotEqual\":\"≐\",\"dotminus\":\"∸\",\"dotplus\":\"∔\",\"dotsquare\":\"⊡\",\"doublebarwedge\":\"⌆\",\"DoubleContourIntegral\":\"∯\",\"DoubleDot\":\"¨\",\"DoubleDownArrow\":\"⇓\",\"DoubleLeftArrow\":\"⇐\",\"DoubleLeftRightArrow\":\"⇔\",\"DoubleLeftTee\":\"⫤\",\"DoubleLongLeftArrow\":\"⟸\",\"DoubleLongLeftRightArrow\":\"⟺\",\"DoubleLongRightArrow\":\"⟹\",\"DoubleRightArrow\":\"⇒\",\"DoubleRightTee\":\"⊨\",\"DoubleUpArrow\":\"⇑\",\"DoubleUpDownArrow\":\"⇕\",\"DoubleVerticalBar\":\"∥\",\"DownArrowBar\":\"⤓\",\"downarrow\":\"↓\",\"DownArrow\":\"↓\",\"Downarrow\":\"⇓\",\"DownArrowUpArrow\":\"⇵\",\"DownBreve\":\"̑\",\"downdownarrows\":\"⇊\",\"downharpoonleft\":\"⇃\",\"downharpoonright\":\"⇂\",\"DownLeftRightVector\":\"⥐\",\"DownLeftTeeVector\":\"⥞\",\"DownLeftVectorBar\":\"⥖\",\"DownLeftVector\":\"↽\",\"DownRightTeeVector\":\"⥟\",\"DownRightVectorBar\":\"⥗\",\"DownRightVector\":\"⇁\",\"DownTeeArrow\":\"↧\",\"DownTee\":\"⊤\",\"drbkarow\":\"⤐\",\"drcorn\":\"⌟\",\"drcrop\":\"⌌\",\"Dscr\":\"𝒟\",\"dscr\":\"𝒹\",\"DScy\":\"Ѕ\",\"dscy\":\"ѕ\",\"dsol\":\"⧶\",\"Dstrok\":\"Đ\",\"dstrok\":\"đ\",\"dtdot\":\"⋱\",\"dtri\":\"▿\",\"dtrif\":\"▾\",\"duarr\":\"⇵\",\"duhar\":\"⥯\",\"dwangle\":\"⦦\",\"DZcy\":\"Џ\",\"dzcy\":\"џ\",\"dzigrarr\":\"⟿\",\"Eacute\":\"É\",\"eacute\":\"é\",\"easter\":\"⩮\",\"Ecaron\":\"Ě\",\"ecaron\":\"ě\",\"Ecirc\":\"Ê\",\"ecirc\":\"ê\",\"ecir\":\"≖\",\"ecolon\":\"≕\",\"Ecy\":\"Э\",\"ecy\":\"э\",\"eDDot\":\"⩷\",\"Edot\":\"Ė\",\"edot\":\"ė\",\"eDot\":\"≑\",\"ee\":\"ⅇ\",\"efDot\":\"≒\",\"Efr\":\"𝔈\",\"efr\":\"𝔢\",\"eg\":\"⪚\",\"Egrave\":\"È\",\"egrave\":\"è\",\"egs\":\"⪖\",\"egsdot\":\"⪘\",\"el\":\"⪙\",\"Element\":\"∈\",\"elinters\":\"⏧\",\"ell\":\"ℓ\",\"els\":\"⪕\",\"elsdot\":\"⪗\",\"Emacr\":\"Ē\",\"emacr\":\"ē\",\"empty\":\"∅\",\"emptyset\":\"∅\",\"EmptySmallSquare\":\"◻\",\"emptyv\":\"∅\",\"EmptyVerySmallSquare\":\"▫\",\"emsp13\":\" \",\"emsp14\":\" \",\"emsp\":\" \",\"ENG\":\"Ŋ\",\"eng\":\"ŋ\",\"ensp\":\" \",\"Eogon\":\"Ę\",\"eogon\":\"ę\",\"Eopf\":\"𝔼\",\"eopf\":\"𝕖\",\"epar\":\"⋕\",\"eparsl\":\"⧣\",\"eplus\":\"⩱\",\"epsi\":\"ε\",\"Epsilon\":\"Ε\",\"epsilon\":\"ε\",\"epsiv\":\"ϵ\",\"eqcirc\":\"≖\",\"eqcolon\":\"≕\",\"eqsim\":\"≂\",\"eqslantgtr\":\"⪖\",\"eqslantless\":\"⪕\",\"Equal\":\"⩵\",\"equals\":\"=\",\"EqualTilde\":\"≂\",\"equest\":\"≟\",\"Equilibrium\":\"⇌\",\"equiv\":\"≡\",\"equivDD\":\"⩸\",\"eqvparsl\":\"⧥\",\"erarr\":\"⥱\",\"erDot\":\"≓\",\"escr\":\"ℯ\",\"Escr\":\"ℰ\",\"esdot\":\"≐\",\"Esim\":\"⩳\",\"esim\":\"≂\",\"Eta\":\"Η\",\"eta\":\"η\",\"ETH\":\"Ð\",\"eth\":\"ð\",\"Euml\":\"Ë\",\"euml\":\"ë\",\"euro\":\"€\",\"excl\":\"!\",\"exist\":\"∃\",\"Exists\":\"∃\",\"expectation\":\"ℰ\",\"exponentiale\":\"ⅇ\",\"ExponentialE\":\"ⅇ\",\"fallingdotseq\":\"≒\",\"Fcy\":\"Ф\",\"fcy\":\"ф\",\"female\":\"♀\",\"ffilig\":\"ﬃ\",\"fflig\":\"ﬀ\",\"ffllig\":\"ﬄ\",\"Ffr\":\"𝔉\",\"ffr\":\"𝔣\",\"filig\":\"ﬁ\",\"FilledSmallSquare\":\"◼\",\"FilledVerySmallSquare\":\"▪\",\"fjlig\":\"fj\",\"flat\":\"♭\",\"fllig\":\"ﬂ\",\"fltns\":\"▱\",\"fnof\":\"ƒ\",\"Fopf\":\"𝔽\",\"fopf\":\"𝕗\",\"forall\":\"∀\",\"ForAll\":\"∀\",\"fork\":\"⋔\",\"forkv\":\"⫙\",\"Fouriertrf\":\"ℱ\",\"fpartint\":\"⨍\",\"frac12\":\"½\",\"frac13\":\"⅓\",\"frac14\":\"¼\",\"frac15\":\"⅕\",\"frac16\":\"⅙\",\"frac18\":\"⅛\",\"frac23\":\"⅔\",\"frac25\":\"⅖\",\"frac34\":\"¾\",\"frac35\":\"⅗\",\"frac38\":\"⅜\",\"frac45\":\"⅘\",\"frac56\":\"⅚\",\"frac58\":\"⅝\",\"frac78\":\"⅞\",\"frasl\":\"⁄\",\"frown\":\"⌢\",\"fscr\":\"𝒻\",\"Fscr\":\"ℱ\",\"gacute\":\"ǵ\",\"Gamma\":\"Γ\",\"gamma\":\"γ\",\"Gammad\":\"Ϝ\",\"gammad\":\"ϝ\",\"gap\":\"⪆\",\"Gbreve\":\"Ğ\",\"gbreve\":\"ğ\",\"Gcedil\":\"Ģ\",\"Gcirc\":\"Ĝ\",\"gcirc\":\"ĝ\",\"Gcy\":\"Г\",\"gcy\":\"г\",\"Gdot\":\"Ġ\",\"gdot\":\"ġ\",\"ge\":\"≥\",\"gE\":\"≧\",\"gEl\":\"⪌\",\"gel\":\"⋛\",\"geq\":\"≥\",\"geqq\":\"≧\",\"geqslant\":\"⩾\",\"gescc\":\"⪩\",\"ges\":\"⩾\",\"gesdot\":\"⪀\",\"gesdoto\":\"⪂\",\"gesdotol\":\"⪄\",\"gesl\":\"⋛︀\",\"gesles\":\"⪔\",\"Gfr\":\"𝔊\",\"gfr\":\"𝔤\",\"gg\":\"≫\",\"Gg\":\"⋙\",\"ggg\":\"⋙\",\"gimel\":\"ℷ\",\"GJcy\":\"Ѓ\",\"gjcy\":\"ѓ\",\"gla\":\"⪥\",\"gl\":\"≷\",\"glE\":\"⪒\",\"glj\":\"⪤\",\"gnap\":\"⪊\",\"gnapprox\":\"⪊\",\"gne\":\"⪈\",\"gnE\":\"≩\",\"gneq\":\"⪈\",\"gneqq\":\"≩\",\"gnsim\":\"⋧\",\"Gopf\":\"𝔾\",\"gopf\":\"𝕘\",\"grave\":\"`\",\"GreaterEqual\":\"≥\",\"GreaterEqualLess\":\"⋛\",\"GreaterFullEqual\":\"≧\",\"GreaterGreater\":\"⪢\",\"GreaterLess\":\"≷\",\"GreaterSlantEqual\":\"⩾\",\"GreaterTilde\":\"≳\",\"Gscr\":\"𝒢\",\"gscr\":\"ℊ\",\"gsim\":\"≳\",\"gsime\":\"⪎\",\"gsiml\":\"⪐\",\"gtcc\":\"⪧\",\"gtcir\":\"⩺\",\"gt\":\">\",\"GT\":\">\",\"Gt\":\"≫\",\"gtdot\":\"⋗\",\"gtlPar\":\"⦕\",\"gtquest\":\"⩼\",\"gtrapprox\":\"⪆\",\"gtrarr\":\"⥸\",\"gtrdot\":\"⋗\",\"gtreqless\":\"⋛\",\"gtreqqless\":\"⪌\",\"gtrless\":\"≷\",\"gtrsim\":\"≳\",\"gvertneqq\":\"≩︀\",\"gvnE\":\"≩︀\",\"Hacek\":\"ˇ\",\"hairsp\":\" \",\"half\":\"½\",\"hamilt\":\"ℋ\",\"HARDcy\":\"Ъ\",\"hardcy\":\"ъ\",\"harrcir\":\"⥈\",\"harr\":\"↔\",\"hArr\":\"⇔\",\"harrw\":\"↭\",\"Hat\":\"^\",\"hbar\":\"ℏ\",\"Hcirc\":\"Ĥ\",\"hcirc\":\"ĥ\",\"hearts\":\"♥\",\"heartsuit\":\"♥\",\"hellip\":\"…\",\"hercon\":\"⊹\",\"hfr\":\"𝔥\",\"Hfr\":\"ℌ\",\"HilbertSpace\":\"ℋ\",\"hksearow\":\"⤥\",\"hkswarow\":\"⤦\",\"hoarr\":\"⇿\",\"homtht\":\"∻\",\"hookleftarrow\":\"↩\",\"hookrightarrow\":\"↪\",\"hopf\":\"𝕙\",\"Hopf\":\"ℍ\",\"horbar\":\"―\",\"HorizontalLine\":\"─\",\"hscr\":\"𝒽\",\"Hscr\":\"ℋ\",\"hslash\":\"ℏ\",\"Hstrok\":\"Ħ\",\"hstrok\":\"ħ\",\"HumpDownHump\":\"≎\",\"HumpEqual\":\"≏\",\"hybull\":\"⁃\",\"hyphen\":\"‐\",\"Iacute\":\"Í\",\"iacute\":\"í\",\"ic\":\"⁣\",\"Icirc\":\"Î\",\"icirc\":\"î\",\"Icy\":\"И\",\"icy\":\"и\",\"Idot\":\"İ\",\"IEcy\":\"Е\",\"iecy\":\"е\",\"iexcl\":\"¡\",\"iff\":\"⇔\",\"ifr\":\"𝔦\",\"Ifr\":\"ℑ\",\"Igrave\":\"Ì\",\"igrave\":\"ì\",\"ii\":\"ⅈ\",\"iiiint\":\"⨌\",\"iiint\":\"∭\",\"iinfin\":\"⧜\",\"iiota\":\"℩\",\"IJlig\":\"Ĳ\",\"ijlig\":\"ĳ\",\"Imacr\":\"Ī\",\"imacr\":\"ī\",\"image\":\"ℑ\",\"ImaginaryI\":\"ⅈ\",\"imagline\":\"ℐ\",\"imagpart\":\"ℑ\",\"imath\":\"ı\",\"Im\":\"ℑ\",\"imof\":\"⊷\",\"imped\":\"Ƶ\",\"Implies\":\"⇒\",\"incare\":\"℅\",\"in\":\"∈\",\"infin\":\"∞\",\"infintie\":\"⧝\",\"inodot\":\"ı\",\"intcal\":\"⊺\",\"int\":\"∫\",\"Int\":\"∬\",\"integers\":\"ℤ\",\"Integral\":\"∫\",\"intercal\":\"⊺\",\"Intersection\":\"⋂\",\"intlarhk\":\"⨗\",\"intprod\":\"⨼\",\"InvisibleComma\":\"⁣\",\"InvisibleTimes\":\"⁢\",\"IOcy\":\"Ё\",\"iocy\":\"ё\",\"Iogon\":\"Į\",\"iogon\":\"į\",\"Iopf\":\"𝕀\",\"iopf\":\"𝕚\",\"Iota\":\"Ι\",\"iota\":\"ι\",\"iprod\":\"⨼\",\"iquest\":\"¿\",\"iscr\":\"𝒾\",\"Iscr\":\"ℐ\",\"isin\":\"∈\",\"isindot\":\"⋵\",\"isinE\":\"⋹\",\"isins\":\"⋴\",\"isinsv\":\"⋳\",\"isinv\":\"∈\",\"it\":\"⁢\",\"Itilde\":\"Ĩ\",\"itilde\":\"ĩ\",\"Iukcy\":\"І\",\"iukcy\":\"і\",\"Iuml\":\"Ï\",\"iuml\":\"ï\",\"Jcirc\":\"Ĵ\",\"jcirc\":\"ĵ\",\"Jcy\":\"Й\",\"jcy\":\"й\",\"Jfr\":\"𝔍\",\"jfr\":\"𝔧\",\"jmath\":\"ȷ\",\"Jopf\":\"𝕁\",\"jopf\":\"𝕛\",\"Jscr\":\"𝒥\",\"jscr\":\"𝒿\",\"Jsercy\":\"Ј\",\"jsercy\":\"ј\",\"Jukcy\":\"Є\",\"jukcy\":\"є\",\"Kappa\":\"Κ\",\"kappa\":\"κ\",\"kappav\":\"ϰ\",\"Kcedil\":\"Ķ\",\"kcedil\":\"ķ\",\"Kcy\":\"К\",\"kcy\":\"к\",\"Kfr\":\"𝔎\",\"kfr\":\"𝔨\",\"kgreen\":\"ĸ\",\"KHcy\":\"Х\",\"khcy\":\"х\",\"KJcy\":\"Ќ\",\"kjcy\":\"ќ\",\"Kopf\":\"𝕂\",\"kopf\":\"𝕜\",\"Kscr\":\"𝒦\",\"kscr\":\"𝓀\",\"lAarr\":\"⇚\",\"Lacute\":\"Ĺ\",\"lacute\":\"ĺ\",\"laemptyv\":\"⦴\",\"lagran\":\"ℒ\",\"Lambda\":\"Λ\",\"lambda\":\"λ\",\"lang\":\"⟨\",\"Lang\":\"⟪\",\"langd\":\"⦑\",\"langle\":\"⟨\",\"lap\":\"⪅\",\"Laplacetrf\":\"ℒ\",\"laquo\":\"«\",\"larrb\":\"⇤\",\"larrbfs\":\"⤟\",\"larr\":\"←\",\"Larr\":\"↞\",\"lArr\":\"⇐\",\"larrfs\":\"⤝\",\"larrhk\":\"↩\",\"larrlp\":\"↫\",\"larrpl\":\"⤹\",\"larrsim\":\"⥳\",\"larrtl\":\"↢\",\"latail\":\"⤙\",\"lAtail\":\"⤛\",\"lat\":\"⪫\",\"late\":\"⪭\",\"lates\":\"⪭︀\",\"lbarr\":\"⤌\",\"lBarr\":\"⤎\",\"lbbrk\":\"❲\",\"lbrace\":\"{\",\"lbrack\":\"[\",\"lbrke\":\"⦋\",\"lbrksld\":\"⦏\",\"lbrkslu\":\"⦍\",\"Lcaron\":\"Ľ\",\"lcaron\":\"ľ\",\"Lcedil\":\"Ļ\",\"lcedil\":\"ļ\",\"lceil\":\"⌈\",\"lcub\":\"{\",\"Lcy\":\"Л\",\"lcy\":\"л\",\"ldca\":\"⤶\",\"ldquo\":\"“\",\"ldquor\":\"„\",\"ldrdhar\":\"⥧\",\"ldrushar\":\"⥋\",\"ldsh\":\"↲\",\"le\":\"≤\",\"lE\":\"≦\",\"LeftAngleBracket\":\"⟨\",\"LeftArrowBar\":\"⇤\",\"leftarrow\":\"←\",\"LeftArrow\":\"←\",\"Leftarrow\":\"⇐\",\"LeftArrowRightArrow\":\"⇆\",\"leftarrowtail\":\"↢\",\"LeftCeiling\":\"⌈\",\"LeftDoubleBracket\":\"⟦\",\"LeftDownTeeVector\":\"⥡\",\"LeftDownVectorBar\":\"⥙\",\"LeftDownVector\":\"⇃\",\"LeftFloor\":\"⌊\",\"leftharpoondown\":\"↽\",\"leftharpoonup\":\"↼\",\"leftleftarrows\":\"⇇\",\"leftrightarrow\":\"↔\",\"LeftRightArrow\":\"↔\",\"Leftrightarrow\":\"⇔\",\"leftrightarrows\":\"⇆\",\"leftrightharpoons\":\"⇋\",\"leftrightsquigarrow\":\"↭\",\"LeftRightVector\":\"⥎\",\"LeftTeeArrow\":\"↤\",\"LeftTee\":\"⊣\",\"LeftTeeVector\":\"⥚\",\"leftthreetimes\":\"⋋\",\"LeftTriangleBar\":\"⧏\",\"LeftTriangle\":\"⊲\",\"LeftTriangleEqual\":\"⊴\",\"LeftUpDownVector\":\"⥑\",\"LeftUpTeeVector\":\"⥠\",\"LeftUpVectorBar\":\"⥘\",\"LeftUpVector\":\"↿\",\"LeftVectorBar\":\"⥒\",\"LeftVector\":\"↼\",\"lEg\":\"⪋\",\"leg\":\"⋚\",\"leq\":\"≤\",\"leqq\":\"≦\",\"leqslant\":\"⩽\",\"lescc\":\"⪨\",\"les\":\"⩽\",\"lesdot\":\"⩿\",\"lesdoto\":\"⪁\",\"lesdotor\":\"⪃\",\"lesg\":\"⋚︀\",\"lesges\":\"⪓\",\"lessapprox\":\"⪅\",\"lessdot\":\"⋖\",\"lesseqgtr\":\"⋚\",\"lesseqqgtr\":\"⪋\",\"LessEqualGreater\":\"⋚\",\"LessFullEqual\":\"≦\",\"LessGreater\":\"≶\",\"lessgtr\":\"≶\",\"LessLess\":\"⪡\",\"lesssim\":\"≲\",\"LessSlantEqual\":\"⩽\",\"LessTilde\":\"≲\",\"lfisht\":\"⥼\",\"lfloor\":\"⌊\",\"Lfr\":\"𝔏\",\"lfr\":\"𝔩\",\"lg\":\"≶\",\"lgE\":\"⪑\",\"lHar\":\"⥢\",\"lhard\":\"↽\",\"lharu\":\"↼\",\"lharul\":\"⥪\",\"lhblk\":\"▄\",\"LJcy\":\"Љ\",\"ljcy\":\"љ\",\"llarr\":\"⇇\",\"ll\":\"≪\",\"Ll\":\"⋘\",\"llcorner\":\"⌞\",\"Lleftarrow\":\"⇚\",\"llhard\":\"⥫\",\"lltri\":\"◺\",\"Lmidot\":\"Ŀ\",\"lmidot\":\"ŀ\",\"lmoustache\":\"⎰\",\"lmoust\":\"⎰\",\"lnap\":\"⪉\",\"lnapprox\":\"⪉\",\"lne\":\"⪇\",\"lnE\":\"≨\",\"lneq\":\"⪇\",\"lneqq\":\"≨\",\"lnsim\":\"⋦\",\"loang\":\"⟬\",\"loarr\":\"⇽\",\"lobrk\":\"⟦\",\"longleftarrow\":\"⟵\",\"LongLeftArrow\":\"⟵\",\"Longleftarrow\":\"⟸\",\"longleftrightarrow\":\"⟷\",\"LongLeftRightArrow\":\"⟷\",\"Longleftrightarrow\":\"⟺\",\"longmapsto\":\"⟼\",\"longrightarrow\":\"⟶\",\"LongRightArrow\":\"⟶\",\"Longrightarrow\":\"⟹\",\"looparrowleft\":\"↫\",\"looparrowright\":\"↬\",\"lopar\":\"⦅\",\"Lopf\":\"𝕃\",\"lopf\":\"𝕝\",\"loplus\":\"⨭\",\"lotimes\":\"⨴\",\"lowast\":\"∗\",\"lowbar\":\"_\",\"LowerLeftArrow\":\"↙\",\"LowerRightArrow\":\"↘\",\"loz\":\"◊\",\"lozenge\":\"◊\",\"lozf\":\"⧫\",\"lpar\":\"(\",\"lparlt\":\"⦓\",\"lrarr\":\"⇆\",\"lrcorner\":\"⌟\",\"lrhar\":\"⇋\",\"lrhard\":\"⥭\",\"lrm\":\"‎\",\"lrtri\":\"⊿\",\"lsaquo\":\"‹\",\"lscr\":\"𝓁\",\"Lscr\":\"ℒ\",\"lsh\":\"↰\",\"Lsh\":\"↰\",\"lsim\":\"≲\",\"lsime\":\"⪍\",\"lsimg\":\"⪏\",\"lsqb\":\"[\",\"lsquo\":\"‘\",\"lsquor\":\"‚\",\"Lstrok\":\"Ł\",\"lstrok\":\"ł\",\"ltcc\":\"⪦\",\"ltcir\":\"⩹\",\"lt\":\"<\",\"LT\":\"<\",\"Lt\":\"≪\",\"ltdot\":\"⋖\",\"lthree\":\"⋋\",\"ltimes\":\"⋉\",\"ltlarr\":\"⥶\",\"ltquest\":\"⩻\",\"ltri\":\"◃\",\"ltrie\":\"⊴\",\"ltrif\":\"◂\",\"ltrPar\":\"⦖\",\"lurdshar\":\"⥊\",\"luruhar\":\"⥦\",\"lvertneqq\":\"≨︀\",\"lvnE\":\"≨︀\",\"macr\":\"¯\",\"male\":\"♂\",\"malt\":\"✠\",\"maltese\":\"✠\",\"Map\":\"⤅\",\"map\":\"↦\",\"mapsto\":\"↦\",\"mapstodown\":\"↧\",\"mapstoleft\":\"↤\",\"mapstoup\":\"↥\",\"marker\":\"▮\",\"mcomma\":\"⨩\",\"Mcy\":\"М\",\"mcy\":\"м\",\"mdash\":\"—\",\"mDDot\":\"∺\",\"measuredangle\":\"∡\",\"MediumSpace\":\" \",\"Mellintrf\":\"ℳ\",\"Mfr\":\"𝔐\",\"mfr\":\"𝔪\",\"mho\":\"℧\",\"micro\":\"µ\",\"midast\":\"*\",\"midcir\":\"⫰\",\"mid\":\"∣\",\"middot\":\"·\",\"minusb\":\"⊟\",\"minus\":\"−\",\"minusd\":\"∸\",\"minusdu\":\"⨪\",\"MinusPlus\":\"∓\",\"mlcp\":\"⫛\",\"mldr\":\"…\",\"mnplus\":\"∓\",\"models\":\"⊧\",\"Mopf\":\"𝕄\",\"mopf\":\"𝕞\",\"mp\":\"∓\",\"mscr\":\"𝓂\",\"Mscr\":\"ℳ\",\"mstpos\":\"∾\",\"Mu\":\"Μ\",\"mu\":\"μ\",\"multimap\":\"⊸\",\"mumap\":\"⊸\",\"nabla\":\"∇\",\"Nacute\":\"Ń\",\"nacute\":\"ń\",\"nang\":\"∠⃒\",\"nap\":\"≉\",\"napE\":\"⩰̸\",\"napid\":\"≋̸\",\"napos\":\"ŉ\",\"napprox\":\"≉\",\"natural\":\"♮\",\"naturals\":\"ℕ\",\"natur\":\"♮\",\"nbsp\":\" \",\"nbump\":\"≎̸\",\"nbumpe\":\"≏̸\",\"ncap\":\"⩃\",\"Ncaron\":\"Ň\",\"ncaron\":\"ň\",\"Ncedil\":\"Ņ\",\"ncedil\":\"ņ\",\"ncong\":\"≇\",\"ncongdot\":\"⩭̸\",\"ncup\":\"⩂\",\"Ncy\":\"Н\",\"ncy\":\"н\",\"ndash\":\"–\",\"nearhk\":\"⤤\",\"nearr\":\"↗\",\"neArr\":\"⇗\",\"nearrow\":\"↗\",\"ne\":\"≠\",\"nedot\":\"≐̸\",\"NegativeMediumSpace\":\"​\",\"NegativeThickSpace\":\"​\",\"NegativeThinSpace\":\"​\",\"NegativeVeryThinSpace\":\"​\",\"nequiv\":\"≢\",\"nesear\":\"⤨\",\"nesim\":\"≂̸\",\"NestedGreaterGreater\":\"≫\",\"NestedLessLess\":\"≪\",\"NewLine\":\"\\n\",\"nexist\":\"∄\",\"nexists\":\"∄\",\"Nfr\":\"𝔑\",\"nfr\":\"𝔫\",\"ngE\":\"≧̸\",\"nge\":\"≱\",\"ngeq\":\"≱\",\"ngeqq\":\"≧̸\",\"ngeqslant\":\"⩾̸\",\"nges\":\"⩾̸\",\"nGg\":\"⋙̸\",\"ngsim\":\"≵\",\"nGt\":\"≫⃒\",\"ngt\":\"≯\",\"ngtr\":\"≯\",\"nGtv\":\"≫̸\",\"nharr\":\"↮\",\"nhArr\":\"⇎\",\"nhpar\":\"⫲\",\"ni\":\"∋\",\"nis\":\"⋼\",\"nisd\":\"⋺\",\"niv\":\"∋\",\"NJcy\":\"Њ\",\"njcy\":\"њ\",\"nlarr\":\"↚\",\"nlArr\":\"⇍\",\"nldr\":\"‥\",\"nlE\":\"≦̸\",\"nle\":\"≰\",\"nleftarrow\":\"↚\",\"nLeftarrow\":\"⇍\",\"nleftrightarrow\":\"↮\",\"nLeftrightarrow\":\"⇎\",\"nleq\":\"≰\",\"nleqq\":\"≦̸\",\"nleqslant\":\"⩽̸\",\"nles\":\"⩽̸\",\"nless\":\"≮\",\"nLl\":\"⋘̸\",\"nlsim\":\"≴\",\"nLt\":\"≪⃒\",\"nlt\":\"≮\",\"nltri\":\"⋪\",\"nltrie\":\"⋬\",\"nLtv\":\"≪̸\",\"nmid\":\"∤\",\"NoBreak\":\"⁠\",\"NonBreakingSpace\":\" \",\"nopf\":\"𝕟\",\"Nopf\":\"ℕ\",\"Not\":\"⫬\",\"not\":\"¬\",\"NotCongruent\":\"≢\",\"NotCupCap\":\"≭\",\"NotDoubleVerticalBar\":\"∦\",\"NotElement\":\"∉\",\"NotEqual\":\"≠\",\"NotEqualTilde\":\"≂̸\",\"NotExists\":\"∄\",\"NotGreater\":\"≯\",\"NotGreaterEqual\":\"≱\",\"NotGreaterFullEqual\":\"≧̸\",\"NotGreaterGreater\":\"≫̸\",\"NotGreaterLess\":\"≹\",\"NotGreaterSlantEqual\":\"⩾̸\",\"NotGreaterTilde\":\"≵\",\"NotHumpDownHump\":\"≎̸\",\"NotHumpEqual\":\"≏̸\",\"notin\":\"∉\",\"notindot\":\"⋵̸\",\"notinE\":\"⋹̸\",\"notinva\":\"∉\",\"notinvb\":\"⋷\",\"notinvc\":\"⋶\",\"NotLeftTriangleBar\":\"⧏̸\",\"NotLeftTriangle\":\"⋪\",\"NotLeftTriangleEqual\":\"⋬\",\"NotLess\":\"≮\",\"NotLessEqual\":\"≰\",\"NotLessGreater\":\"≸\",\"NotLessLess\":\"≪̸\",\"NotLessSlantEqual\":\"⩽̸\",\"NotLessTilde\":\"≴\",\"NotNestedGreaterGreater\":\"⪢̸\",\"NotNestedLessLess\":\"⪡̸\",\"notni\":\"∌\",\"notniva\":\"∌\",\"notnivb\":\"⋾\",\"notnivc\":\"⋽\",\"NotPrecedes\":\"⊀\",\"NotPrecedesEqual\":\"⪯̸\",\"NotPrecedesSlantEqual\":\"⋠\",\"NotReverseElement\":\"∌\",\"NotRightTriangleBar\":\"⧐̸\",\"NotRightTriangle\":\"⋫\",\"NotRightTriangleEqual\":\"⋭\",\"NotSquareSubset\":\"⊏̸\",\"NotSquareSubsetEqual\":\"⋢\",\"NotSquareSuperset\":\"⊐̸\",\"NotSquareSupersetEqual\":\"⋣\",\"NotSubset\":\"⊂⃒\",\"NotSubsetEqual\":\"⊈\",\"NotSucceeds\":\"⊁\",\"NotSucceedsEqual\":\"⪰̸\",\"NotSucceedsSlantEqual\":\"⋡\",\"NotSucceedsTilde\":\"≿̸\",\"NotSuperset\":\"⊃⃒\",\"NotSupersetEqual\":\"⊉\",\"NotTilde\":\"≁\",\"NotTildeEqual\":\"≄\",\"NotTildeFullEqual\":\"≇\",\"NotTildeTilde\":\"≉\",\"NotVerticalBar\":\"∤\",\"nparallel\":\"∦\",\"npar\":\"∦\",\"nparsl\":\"⫽⃥\",\"npart\":\"∂̸\",\"npolint\":\"⨔\",\"npr\":\"⊀\",\"nprcue\":\"⋠\",\"nprec\":\"⊀\",\"npreceq\":\"⪯̸\",\"npre\":\"⪯̸\",\"nrarrc\":\"⤳̸\",\"nrarr\":\"↛\",\"nrArr\":\"⇏\",\"nrarrw\":\"↝̸\",\"nrightarrow\":\"↛\",\"nRightarrow\":\"⇏\",\"nrtri\":\"⋫\",\"nrtrie\":\"⋭\",\"nsc\":\"⊁\",\"nsccue\":\"⋡\",\"nsce\":\"⪰̸\",\"Nscr\":\"𝒩\",\"nscr\":\"𝓃\",\"nshortmid\":\"∤\",\"nshortparallel\":\"∦\",\"nsim\":\"≁\",\"nsime\":\"≄\",\"nsimeq\":\"≄\",\"nsmid\":\"∤\",\"nspar\":\"∦\",\"nsqsube\":\"⋢\",\"nsqsupe\":\"⋣\",\"nsub\":\"⊄\",\"nsubE\":\"⫅̸\",\"nsube\":\"⊈\",\"nsubset\":\"⊂⃒\",\"nsubseteq\":\"⊈\",\"nsubseteqq\":\"⫅̸\",\"nsucc\":\"⊁\",\"nsucceq\":\"⪰̸\",\"nsup\":\"⊅\",\"nsupE\":\"⫆̸\",\"nsupe\":\"⊉\",\"nsupset\":\"⊃⃒\",\"nsupseteq\":\"⊉\",\"nsupseteqq\":\"⫆̸\",\"ntgl\":\"≹\",\"Ntilde\":\"Ñ\",\"ntilde\":\"ñ\",\"ntlg\":\"≸\",\"ntriangleleft\":\"⋪\",\"ntrianglelefteq\":\"⋬\",\"ntriangleright\":\"⋫\",\"ntrianglerighteq\":\"⋭\",\"Nu\":\"Ν\",\"nu\":\"ν\",\"num\":\"#\",\"numero\":\"№\",\"numsp\":\" \",\"nvap\":\"≍⃒\",\"nvdash\":\"⊬\",\"nvDash\":\"⊭\",\"nVdash\":\"⊮\",\"nVDash\":\"⊯\",\"nvge\":\"≥⃒\",\"nvgt\":\">⃒\",\"nvHarr\":\"⤄\",\"nvinfin\":\"⧞\",\"nvlArr\":\"⤂\",\"nvle\":\"≤⃒\",\"nvlt\":\"<⃒\",\"nvltrie\":\"⊴⃒\",\"nvrArr\":\"⤃\",\"nvrtrie\":\"⊵⃒\",\"nvsim\":\"∼⃒\",\"nwarhk\":\"⤣\",\"nwarr\":\"↖\",\"nwArr\":\"⇖\",\"nwarrow\":\"↖\",\"nwnear\":\"⤧\",\"Oacute\":\"Ó\",\"oacute\":\"ó\",\"oast\":\"⊛\",\"Ocirc\":\"Ô\",\"ocirc\":\"ô\",\"ocir\":\"⊚\",\"Ocy\":\"О\",\"ocy\":\"о\",\"odash\":\"⊝\",\"Odblac\":\"Ő\",\"odblac\":\"ő\",\"odiv\":\"⨸\",\"odot\":\"⊙\",\"odsold\":\"⦼\",\"OElig\":\"Œ\",\"oelig\":\"œ\",\"ofcir\":\"⦿\",\"Ofr\":\"𝔒\",\"ofr\":\"𝔬\",\"ogon\":\"˛\",\"Ograve\":\"Ò\",\"ograve\":\"ò\",\"ogt\":\"⧁\",\"ohbar\":\"⦵\",\"ohm\":\"Ω\",\"oint\":\"∮\",\"olarr\":\"↺\",\"olcir\":\"⦾\",\"olcross\":\"⦻\",\"oline\":\"‾\",\"olt\":\"⧀\",\"Omacr\":\"Ō\",\"omacr\":\"ō\",\"Omega\":\"Ω\",\"omega\":\"ω\",\"Omicron\":\"Ο\",\"omicron\":\"ο\",\"omid\":\"⦶\",\"ominus\":\"⊖\",\"Oopf\":\"𝕆\",\"oopf\":\"𝕠\",\"opar\":\"⦷\",\"OpenCurlyDoubleQuote\":\"“\",\"OpenCurlyQuote\":\"‘\",\"operp\":\"⦹\",\"oplus\":\"⊕\",\"orarr\":\"↻\",\"Or\":\"⩔\",\"or\":\"∨\",\"ord\":\"⩝\",\"order\":\"ℴ\",\"orderof\":\"ℴ\",\"ordf\":\"ª\",\"ordm\":\"º\",\"origof\":\"⊶\",\"oror\":\"⩖\",\"orslope\":\"⩗\",\"orv\":\"⩛\",\"oS\":\"Ⓢ\",\"Oscr\":\"𝒪\",\"oscr\":\"ℴ\",\"Oslash\":\"Ø\",\"oslash\":\"ø\",\"osol\":\"⊘\",\"Otilde\":\"Õ\",\"otilde\":\"õ\",\"otimesas\":\"⨶\",\"Otimes\":\"⨷\",\"otimes\":\"⊗\",\"Ouml\":\"Ö\",\"ouml\":\"ö\",\"ovbar\":\"⌽\",\"OverBar\":\"‾\",\"OverBrace\":\"⏞\",\"OverBracket\":\"⎴\",\"OverParenthesis\":\"⏜\",\"para\":\"¶\",\"parallel\":\"∥\",\"par\":\"∥\",\"parsim\":\"⫳\",\"parsl\":\"⫽\",\"part\":\"∂\",\"PartialD\":\"∂\",\"Pcy\":\"П\",\"pcy\":\"п\",\"percnt\":\"%\",\"period\":\".\",\"permil\":\"‰\",\"perp\":\"⊥\",\"pertenk\":\"‱\",\"Pfr\":\"𝔓\",\"pfr\":\"𝔭\",\"Phi\":\"Φ\",\"phi\":\"φ\",\"phiv\":\"ϕ\",\"phmmat\":\"ℳ\",\"phone\":\"☎\",\"Pi\":\"Π\",\"pi\":\"π\",\"pitchfork\":\"⋔\",\"piv\":\"ϖ\",\"planck\":\"ℏ\",\"planckh\":\"ℎ\",\"plankv\":\"ℏ\",\"plusacir\":\"⨣\",\"plusb\":\"⊞\",\"pluscir\":\"⨢\",\"plus\":\"+\",\"plusdo\":\"∔\",\"plusdu\":\"⨥\",\"pluse\":\"⩲\",\"PlusMinus\":\"±\",\"plusmn\":\"±\",\"plussim\":\"⨦\",\"plustwo\":\"⨧\",\"pm\":\"±\",\"Poincareplane\":\"ℌ\",\"pointint\":\"⨕\",\"popf\":\"𝕡\",\"Popf\":\"ℙ\",\"pound\":\"£\",\"prap\":\"⪷\",\"Pr\":\"⪻\",\"pr\":\"≺\",\"prcue\":\"≼\",\"precapprox\":\"⪷\",\"prec\":\"≺\",\"preccurlyeq\":\"≼\",\"Precedes\":\"≺\",\"PrecedesEqual\":\"⪯\",\"PrecedesSlantEqual\":\"≼\",\"PrecedesTilde\":\"≾\",\"preceq\":\"⪯\",\"precnapprox\":\"⪹\",\"precneqq\":\"⪵\",\"precnsim\":\"⋨\",\"pre\":\"⪯\",\"prE\":\"⪳\",\"precsim\":\"≾\",\"prime\":\"′\",\"Prime\":\"″\",\"primes\":\"ℙ\",\"prnap\":\"⪹\",\"prnE\":\"⪵\",\"prnsim\":\"⋨\",\"prod\":\"∏\",\"Product\":\"∏\",\"profalar\":\"⌮\",\"profline\":\"⌒\",\"profsurf\":\"⌓\",\"prop\":\"∝\",\"Proportional\":\"∝\",\"Proportion\":\"∷\",\"propto\":\"∝\",\"prsim\":\"≾\",\"prurel\":\"⊰\",\"Pscr\":\"𝒫\",\"pscr\":\"𝓅\",\"Psi\":\"Ψ\",\"psi\":\"ψ\",\"puncsp\":\" \",\"Qfr\":\"𝔔\",\"qfr\":\"𝔮\",\"qint\":\"⨌\",\"qopf\":\"𝕢\",\"Qopf\":\"ℚ\",\"qprime\":\"⁗\",\"Qscr\":\"𝒬\",\"qscr\":\"𝓆\",\"quaternions\":\"ℍ\",\"quatint\":\"⨖\",\"quest\":\"?\",\"questeq\":\"≟\",\"quot\":\"\\\"\",\"QUOT\":\"\\\"\",\"rAarr\":\"⇛\",\"race\":\"∽̱\",\"Racute\":\"Ŕ\",\"racute\":\"ŕ\",\"radic\":\"√\",\"raemptyv\":\"⦳\",\"rang\":\"⟩\",\"Rang\":\"⟫\",\"rangd\":\"⦒\",\"range\":\"⦥\",\"rangle\":\"⟩\",\"raquo\":\"»\",\"rarrap\":\"⥵\",\"rarrb\":\"⇥\",\"rarrbfs\":\"⤠\",\"rarrc\":\"⤳\",\"rarr\":\"→\",\"Rarr\":\"↠\",\"rArr\":\"⇒\",\"rarrfs\":\"⤞\",\"rarrhk\":\"↪\",\"rarrlp\":\"↬\",\"rarrpl\":\"⥅\",\"rarrsim\":\"⥴\",\"Rarrtl\":\"⤖\",\"rarrtl\":\"↣\",\"rarrw\":\"↝\",\"ratail\":\"⤚\",\"rAtail\":\"⤜\",\"ratio\":\"∶\",\"rationals\":\"ℚ\",\"rbarr\":\"⤍\",\"rBarr\":\"⤏\",\"RBarr\":\"⤐\",\"rbbrk\":\"❳\",\"rbrace\":\"}\",\"rbrack\":\"]\",\"rbrke\":\"⦌\",\"rbrksld\":\"⦎\",\"rbrkslu\":\"⦐\",\"Rcaron\":\"Ř\",\"rcaron\":\"ř\",\"Rcedil\":\"Ŗ\",\"rcedil\":\"ŗ\",\"rceil\":\"⌉\",\"rcub\":\"}\",\"Rcy\":\"Р\",\"rcy\":\"р\",\"rdca\":\"⤷\",\"rdldhar\":\"⥩\",\"rdquo\":\"”\",\"rdquor\":\"”\",\"rdsh\":\"↳\",\"real\":\"ℜ\",\"realine\":\"ℛ\",\"realpart\":\"ℜ\",\"reals\":\"ℝ\",\"Re\":\"ℜ\",\"rect\":\"▭\",\"reg\":\"®\",\"REG\":\"®\",\"ReverseElement\":\"∋\",\"ReverseEquilibrium\":\"⇋\",\"ReverseUpEquilibrium\":\"⥯\",\"rfisht\":\"⥽\",\"rfloor\":\"⌋\",\"rfr\":\"𝔯\",\"Rfr\":\"ℜ\",\"rHar\":\"⥤\",\"rhard\":\"⇁\",\"rharu\":\"⇀\",\"rharul\":\"⥬\",\"Rho\":\"Ρ\",\"rho\":\"ρ\",\"rhov\":\"ϱ\",\"RightAngleBracket\":\"⟩\",\"RightArrowBar\":\"⇥\",\"rightarrow\":\"→\",\"RightArrow\":\"→\",\"Rightarrow\":\"⇒\",\"RightArrowLeftArrow\":\"⇄\",\"rightarrowtail\":\"↣\",\"RightCeiling\":\"⌉\",\"RightDoubleBracket\":\"⟧\",\"RightDownTeeVector\":\"⥝\",\"RightDownVectorBar\":\"⥕\",\"RightDownVector\":\"⇂\",\"RightFloor\":\"⌋\",\"rightharpoondown\":\"⇁\",\"rightharpoonup\":\"⇀\",\"rightleftarrows\":\"⇄\",\"rightleftharpoons\":\"⇌\",\"rightrightarrows\":\"⇉\",\"rightsquigarrow\":\"↝\",\"RightTeeArrow\":\"↦\",\"RightTee\":\"⊢\",\"RightTeeVector\":\"⥛\",\"rightthreetimes\":\"⋌\",\"RightTriangleBar\":\"⧐\",\"RightTriangle\":\"⊳\",\"RightTriangleEqual\":\"⊵\",\"RightUpDownVector\":\"⥏\",\"RightUpTeeVector\":\"⥜\",\"RightUpVectorBar\":\"⥔\",\"RightUpVector\":\"↾\",\"RightVectorBar\":\"⥓\",\"RightVector\":\"⇀\",\"ring\":\"˚\",\"risingdotseq\":\"≓\",\"rlarr\":\"⇄\",\"rlhar\":\"⇌\",\"rlm\":\"‏\",\"rmoustache\":\"⎱\",\"rmoust\":\"⎱\",\"rnmid\":\"⫮\",\"roang\":\"⟭\",\"roarr\":\"⇾\",\"robrk\":\"⟧\",\"ropar\":\"⦆\",\"ropf\":\"𝕣\",\"Ropf\":\"ℝ\",\"roplus\":\"⨮\",\"rotimes\":\"⨵\",\"RoundImplies\":\"⥰\",\"rpar\":\")\",\"rpargt\":\"⦔\",\"rppolint\":\"⨒\",\"rrarr\":\"⇉\",\"Rrightarrow\":\"⇛\",\"rsaquo\":\"›\",\"rscr\":\"𝓇\",\"Rscr\":\"ℛ\",\"rsh\":\"↱\",\"Rsh\":\"↱\",\"rsqb\":\"]\",\"rsquo\":\"’\",\"rsquor\":\"’\",\"rthree\":\"⋌\",\"rtimes\":\"⋊\",\"rtri\":\"▹\",\"rtrie\":\"⊵\",\"rtrif\":\"▸\",\"rtriltri\":\"⧎\",\"RuleDelayed\":\"⧴\",\"ruluhar\":\"⥨\",\"rx\":\"℞\",\"Sacute\":\"Ś\",\"sacute\":\"ś\",\"sbquo\":\"‚\",\"scap\":\"⪸\",\"Scaron\":\"Š\",\"scaron\":\"š\",\"Sc\":\"⪼\",\"sc\":\"≻\",\"sccue\":\"≽\",\"sce\":\"⪰\",\"scE\":\"⪴\",\"Scedil\":\"Ş\",\"scedil\":\"ş\",\"Scirc\":\"Ŝ\",\"scirc\":\"ŝ\",\"scnap\":\"⪺\",\"scnE\":\"⪶\",\"scnsim\":\"⋩\",\"scpolint\":\"⨓\",\"scsim\":\"≿\",\"Scy\":\"С\",\"scy\":\"с\",\"sdotb\":\"⊡\",\"sdot\":\"⋅\",\"sdote\":\"⩦\",\"searhk\":\"⤥\",\"searr\":\"↘\",\"seArr\":\"⇘\",\"searrow\":\"↘\",\"sect\":\"§\",\"semi\":\";\",\"seswar\":\"⤩\",\"setminus\":\"∖\",\"setmn\":\"∖\",\"sext\":\"✶\",\"Sfr\":\"𝔖\",\"sfr\":\"𝔰\",\"sfrown\":\"⌢\",\"sharp\":\"♯\",\"SHCHcy\":\"Щ\",\"shchcy\":\"щ\",\"SHcy\":\"Ш\",\"shcy\":\"ш\",\"ShortDownArrow\":\"↓\",\"ShortLeftArrow\":\"←\",\"shortmid\":\"∣\",\"shortparallel\":\"∥\",\"ShortRightArrow\":\"→\",\"ShortUpArrow\":\"↑\",\"shy\":\"­\",\"Sigma\":\"Σ\",\"sigma\":\"σ\",\"sigmaf\":\"ς\",\"sigmav\":\"ς\",\"sim\":\"∼\",\"simdot\":\"⩪\",\"sime\":\"≃\",\"simeq\":\"≃\",\"simg\":\"⪞\",\"simgE\":\"⪠\",\"siml\":\"⪝\",\"simlE\":\"⪟\",\"simne\":\"≆\",\"simplus\":\"⨤\",\"simrarr\":\"⥲\",\"slarr\":\"←\",\"SmallCircle\":\"∘\",\"smallsetminus\":\"∖\",\"smashp\":\"⨳\",\"smeparsl\":\"⧤\",\"smid\":\"∣\",\"smile\":\"⌣\",\"smt\":\"⪪\",\"smte\":\"⪬\",\"smtes\":\"⪬︀\",\"SOFTcy\":\"Ь\",\"softcy\":\"ь\",\"solbar\":\"⌿\",\"solb\":\"⧄\",\"sol\":\"/\",\"Sopf\":\"𝕊\",\"sopf\":\"𝕤\",\"spades\":\"♠\",\"spadesuit\":\"♠\",\"spar\":\"∥\",\"sqcap\":\"⊓\",\"sqcaps\":\"⊓︀\",\"sqcup\":\"⊔\",\"sqcups\":\"⊔︀\",\"Sqrt\":\"√\",\"sqsub\":\"⊏\",\"sqsube\":\"⊑\",\"sqsubset\":\"⊏\",\"sqsubseteq\":\"⊑\",\"sqsup\":\"⊐\",\"sqsupe\":\"⊒\",\"sqsupset\":\"⊐\",\"sqsupseteq\":\"⊒\",\"square\":\"□\",\"Square\":\"□\",\"SquareIntersection\":\"⊓\",\"SquareSubset\":\"⊏\",\"SquareSubsetEqual\":\"⊑\",\"SquareSuperset\":\"⊐\",\"SquareSupersetEqual\":\"⊒\",\"SquareUnion\":\"⊔\",\"squarf\":\"▪\",\"squ\":\"□\",\"squf\":\"▪\",\"srarr\":\"→\",\"Sscr\":\"𝒮\",\"sscr\":\"𝓈\",\"ssetmn\":\"∖\",\"ssmile\":\"⌣\",\"sstarf\":\"⋆\",\"Star\":\"⋆\",\"star\":\"☆\",\"starf\":\"★\",\"straightepsilon\":\"ϵ\",\"straightphi\":\"ϕ\",\"strns\":\"¯\",\"sub\":\"⊂\",\"Sub\":\"⋐\",\"subdot\":\"⪽\",\"subE\":\"⫅\",\"sube\":\"⊆\",\"subedot\":\"⫃\",\"submult\":\"⫁\",\"subnE\":\"⫋\",\"subne\":\"⊊\",\"subplus\":\"⪿\",\"subrarr\":\"⥹\",\"subset\":\"⊂\",\"Subset\":\"⋐\",\"subseteq\":\"⊆\",\"subseteqq\":\"⫅\",\"SubsetEqual\":\"⊆\",\"subsetneq\":\"⊊\",\"subsetneqq\":\"⫋\",\"subsim\":\"⫇\",\"subsub\":\"⫕\",\"subsup\":\"⫓\",\"succapprox\":\"⪸\",\"succ\":\"≻\",\"succcurlyeq\":\"≽\",\"Succeeds\":\"≻\",\"SucceedsEqual\":\"⪰\",\"SucceedsSlantEqual\":\"≽\",\"SucceedsTilde\":\"≿\",\"succeq\":\"⪰\",\"succnapprox\":\"⪺\",\"succneqq\":\"⪶\",\"succnsim\":\"⋩\",\"succsim\":\"≿\",\"SuchThat\":\"∋\",\"sum\":\"∑\",\"Sum\":\"∑\",\"sung\":\"♪\",\"sup1\":\"¹\",\"sup2\":\"²\",\"sup3\":\"³\",\"sup\":\"⊃\",\"Sup\":\"⋑\",\"supdot\":\"⪾\",\"supdsub\":\"⫘\",\"supE\":\"⫆\",\"supe\":\"⊇\",\"supedot\":\"⫄\",\"Superset\":\"⊃\",\"SupersetEqual\":\"⊇\",\"suphsol\":\"⟉\",\"suphsub\":\"⫗\",\"suplarr\":\"⥻\",\"supmult\":\"⫂\",\"supnE\":\"⫌\",\"supne\":\"⊋\",\"supplus\":\"⫀\",\"supset\":\"⊃\",\"Supset\":\"⋑\",\"supseteq\":\"⊇\",\"supseteqq\":\"⫆\",\"supsetneq\":\"⊋\",\"supsetneqq\":\"⫌\",\"supsim\":\"⫈\",\"supsub\":\"⫔\",\"supsup\":\"⫖\",\"swarhk\":\"⤦\",\"swarr\":\"↙\",\"swArr\":\"⇙\",\"swarrow\":\"↙\",\"swnwar\":\"⤪\",\"szlig\":\"ß\",\"Tab\":\"\\t\",\"target\":\"⌖\",\"Tau\":\"Τ\",\"tau\":\"τ\",\"tbrk\":\"⎴\",\"Tcaron\":\"Ť\",\"tcaron\":\"ť\",\"Tcedil\":\"Ţ\",\"tcedil\":\"ţ\",\"Tcy\":\"Т\",\"tcy\":\"т\",\"tdot\":\"⃛\",\"telrec\":\"⌕\",\"Tfr\":\"𝔗\",\"tfr\":\"𝔱\",\"there4\":\"∴\",\"therefore\":\"∴\",\"Therefore\":\"∴\",\"Theta\":\"Θ\",\"theta\":\"θ\",\"thetasym\":\"ϑ\",\"thetav\":\"ϑ\",\"thickapprox\":\"≈\",\"thicksim\":\"∼\",\"ThickSpace\":\"  \",\"ThinSpace\":\" \",\"thinsp\":\" \",\"thkap\":\"≈\",\"thksim\":\"∼\",\"THORN\":\"Þ\",\"thorn\":\"þ\",\"tilde\":\"˜\",\"Tilde\":\"∼\",\"TildeEqual\":\"≃\",\"TildeFullEqual\":\"≅\",\"TildeTilde\":\"≈\",\"timesbar\":\"⨱\",\"timesb\":\"⊠\",\"times\":\"×\",\"timesd\":\"⨰\",\"tint\":\"∭\",\"toea\":\"⤨\",\"topbot\":\"⌶\",\"topcir\":\"⫱\",\"top\":\"⊤\",\"Topf\":\"𝕋\",\"topf\":\"𝕥\",\"topfork\":\"⫚\",\"tosa\":\"⤩\",\"tprime\":\"‴\",\"trade\":\"™\",\"TRADE\":\"™\",\"triangle\":\"▵\",\"triangledown\":\"▿\",\"triangleleft\":\"◃\",\"trianglelefteq\":\"⊴\",\"triangleq\":\"≜\",\"triangleright\":\"▹\",\"trianglerighteq\":\"⊵\",\"tridot\":\"◬\",\"trie\":\"≜\",\"triminus\":\"⨺\",\"TripleDot\":\"⃛\",\"triplus\":\"⨹\",\"trisb\":\"⧍\",\"tritime\":\"⨻\",\"trpezium\":\"⏢\",\"Tscr\":\"𝒯\",\"tscr\":\"𝓉\",\"TScy\":\"Ц\",\"tscy\":\"ц\",\"TSHcy\":\"Ћ\",\"tshcy\":\"ћ\",\"Tstrok\":\"Ŧ\",\"tstrok\":\"ŧ\",\"twixt\":\"≬\",\"twoheadleftarrow\":\"↞\",\"twoheadrightarrow\":\"↠\",\"Uacute\":\"Ú\",\"uacute\":\"ú\",\"uarr\":\"↑\",\"Uarr\":\"↟\",\"uArr\":\"⇑\",\"Uarrocir\":\"⥉\",\"Ubrcy\":\"Ў\",\"ubrcy\":\"ў\",\"Ubreve\":\"Ŭ\",\"ubreve\":\"ŭ\",\"Ucirc\":\"Û\",\"ucirc\":\"û\",\"Ucy\":\"У\",\"ucy\":\"у\",\"udarr\":\"⇅\",\"Udblac\":\"Ű\",\"udblac\":\"ű\",\"udhar\":\"⥮\",\"ufisht\":\"⥾\",\"Ufr\":\"𝔘\",\"ufr\":\"𝔲\",\"Ugrave\":\"Ù\",\"ugrave\":\"ù\",\"uHar\":\"⥣\",\"uharl\":\"↿\",\"uharr\":\"↾\",\"uhblk\":\"▀\",\"ulcorn\":\"⌜\",\"ulcorner\":\"⌜\",\"ulcrop\":\"⌏\",\"ultri\":\"◸\",\"Umacr\":\"Ū\",\"umacr\":\"ū\",\"uml\":\"¨\",\"UnderBar\":\"_\",\"UnderBrace\":\"⏟\",\"UnderBracket\":\"⎵\",\"UnderParenthesis\":\"⏝\",\"Union\":\"⋃\",\"UnionPlus\":\"⊎\",\"Uogon\":\"Ų\",\"uogon\":\"ų\",\"Uopf\":\"𝕌\",\"uopf\":\"𝕦\",\"UpArrowBar\":\"⤒\",\"uparrow\":\"↑\",\"UpArrow\":\"↑\",\"Uparrow\":\"⇑\",\"UpArrowDownArrow\":\"⇅\",\"updownarrow\":\"↕\",\"UpDownArrow\":\"↕\",\"Updownarrow\":\"⇕\",\"UpEquilibrium\":\"⥮\",\"upharpoonleft\":\"↿\",\"upharpoonright\":\"↾\",\"uplus\":\"⊎\",\"UpperLeftArrow\":\"↖\",\"UpperRightArrow\":\"↗\",\"upsi\":\"υ\",\"Upsi\":\"ϒ\",\"upsih\":\"ϒ\",\"Upsilon\":\"Υ\",\"upsilon\":\"υ\",\"UpTeeArrow\":\"↥\",\"UpTee\":\"⊥\",\"upuparrows\":\"⇈\",\"urcorn\":\"⌝\",\"urcorner\":\"⌝\",\"urcrop\":\"⌎\",\"Uring\":\"Ů\",\"uring\":\"ů\",\"urtri\":\"◹\",\"Uscr\":\"𝒰\",\"uscr\":\"𝓊\",\"utdot\":\"⋰\",\"Utilde\":\"Ũ\",\"utilde\":\"ũ\",\"utri\":\"▵\",\"utrif\":\"▴\",\"uuarr\":\"⇈\",\"Uuml\":\"Ü\",\"uuml\":\"ü\",\"uwangle\":\"⦧\",\"vangrt\":\"⦜\",\"varepsilon\":\"ϵ\",\"varkappa\":\"ϰ\",\"varnothing\":\"∅\",\"varphi\":\"ϕ\",\"varpi\":\"ϖ\",\"varpropto\":\"∝\",\"varr\":\"↕\",\"vArr\":\"⇕\",\"varrho\":\"ϱ\",\"varsigma\":\"ς\",\"varsubsetneq\":\"⊊︀\",\"varsubsetneqq\":\"⫋︀\",\"varsupsetneq\":\"⊋︀\",\"varsupsetneqq\":\"⫌︀\",\"vartheta\":\"ϑ\",\"vartriangleleft\":\"⊲\",\"vartriangleright\":\"⊳\",\"vBar\":\"⫨\",\"Vbar\":\"⫫\",\"vBarv\":\"⫩\",\"Vcy\":\"В\",\"vcy\":\"в\",\"vdash\":\"⊢\",\"vDash\":\"⊨\",\"Vdash\":\"⊩\",\"VDash\":\"⊫\",\"Vdashl\":\"⫦\",\"veebar\":\"⊻\",\"vee\":\"∨\",\"Vee\":\"⋁\",\"veeeq\":\"≚\",\"vellip\":\"⋮\",\"verbar\":\"|\",\"Verbar\":\"‖\",\"vert\":\"|\",\"Vert\":\"‖\",\"VerticalBar\":\"∣\",\"VerticalLine\":\"|\",\"VerticalSeparator\":\"❘\",\"VerticalTilde\":\"≀\",\"VeryThinSpace\":\" \",\"Vfr\":\"𝔙\",\"vfr\":\"𝔳\",\"vltri\":\"⊲\",\"vnsub\":\"⊂⃒\",\"vnsup\":\"⊃⃒\",\"Vopf\":\"𝕍\",\"vopf\":\"𝕧\",\"vprop\":\"∝\",\"vrtri\":\"⊳\",\"Vscr\":\"𝒱\",\"vscr\":\"𝓋\",\"vsubnE\":\"⫋︀\",\"vsubne\":\"⊊︀\",\"vsupnE\":\"⫌︀\",\"vsupne\":\"⊋︀\",\"Vvdash\":\"⊪\",\"vzigzag\":\"⦚\",\"Wcirc\":\"Ŵ\",\"wcirc\":\"ŵ\",\"wedbar\":\"⩟\",\"wedge\":\"∧\",\"Wedge\":\"⋀\",\"wedgeq\":\"≙\",\"weierp\":\"℘\",\"Wfr\":\"𝔚\",\"wfr\":\"𝔴\",\"Wopf\":\"𝕎\",\"wopf\":\"𝕨\",\"wp\":\"℘\",\"wr\":\"≀\",\"wreath\":\"≀\",\"Wscr\":\"𝒲\",\"wscr\":\"𝓌\",\"xcap\":\"⋂\",\"xcirc\":\"◯\",\"xcup\":\"⋃\",\"xdtri\":\"▽\",\"Xfr\":\"𝔛\",\"xfr\":\"𝔵\",\"xharr\":\"⟷\",\"xhArr\":\"⟺\",\"Xi\":\"Ξ\",\"xi\":\"ξ\",\"xlarr\":\"⟵\",\"xlArr\":\"⟸\",\"xmap\":\"⟼\",\"xnis\":\"⋻\",\"xodot\":\"⨀\",\"Xopf\":\"𝕏\",\"xopf\":\"𝕩\",\"xoplus\":\"⨁\",\"xotime\":\"⨂\",\"xrarr\":\"⟶\",\"xrArr\":\"⟹\",\"Xscr\":\"𝒳\",\"xscr\":\"𝓍\",\"xsqcup\":\"⨆\",\"xuplus\":\"⨄\",\"xutri\":\"△\",\"xvee\":\"⋁\",\"xwedge\":\"⋀\",\"Yacute\":\"Ý\",\"yacute\":\"ý\",\"YAcy\":\"Я\",\"yacy\":\"я\",\"Ycirc\":\"Ŷ\",\"ycirc\":\"ŷ\",\"Ycy\":\"Ы\",\"ycy\":\"ы\",\"yen\":\"¥\",\"Yfr\":\"𝔜\",\"yfr\":\"𝔶\",\"YIcy\":\"Ї\",\"yicy\":\"ї\",\"Yopf\":\"𝕐\",\"yopf\":\"𝕪\",\"Yscr\":\"𝒴\",\"yscr\":\"𝓎\",\"YUcy\":\"Ю\",\"yucy\":\"ю\",\"yuml\":\"ÿ\",\"Yuml\":\"Ÿ\",\"Zacute\":\"Ź\",\"zacute\":\"ź\",\"Zcaron\":\"Ž\",\"zcaron\":\"ž\",\"Zcy\":\"З\",\"zcy\":\"з\",\"Zdot\":\"Ż\",\"zdot\":\"ż\",\"zeetrf\":\"ℨ\",\"ZeroWidthSpace\":\"​\",\"Zeta\":\"Ζ\",\"zeta\":\"ζ\",\"zfr\":\"𝔷\",\"Zfr\":\"ℨ\",\"ZHcy\":\"Ж\",\"zhcy\":\"ж\",\"zigrarr\":\"⇝\",\"zopf\":\"𝕫\",\"Zopf\":\"ℤ\",\"Zscr\":\"𝒵\",\"zscr\":\"𝓏\",\"zwj\":\"‍\",\"zwnj\":\"‌\"}");

/***/ }),
/* 270 */
/***/ (function(module) {

module.exports = JSON.parse("{\"Aacute\":\"Á\",\"aacute\":\"á\",\"Acirc\":\"Â\",\"acirc\":\"â\",\"acute\":\"´\",\"AElig\":\"Æ\",\"aelig\":\"æ\",\"Agrave\":\"À\",\"agrave\":\"à\",\"amp\":\"&\",\"AMP\":\"&\",\"Aring\":\"Å\",\"aring\":\"å\",\"Atilde\":\"Ã\",\"atilde\":\"ã\",\"Auml\":\"Ä\",\"auml\":\"ä\",\"brvbar\":\"¦\",\"Ccedil\":\"Ç\",\"ccedil\":\"ç\",\"cedil\":\"¸\",\"cent\":\"¢\",\"copy\":\"©\",\"COPY\":\"©\",\"curren\":\"¤\",\"deg\":\"°\",\"divide\":\"÷\",\"Eacute\":\"É\",\"eacute\":\"é\",\"Ecirc\":\"Ê\",\"ecirc\":\"ê\",\"Egrave\":\"È\",\"egrave\":\"è\",\"ETH\":\"Ð\",\"eth\":\"ð\",\"Euml\":\"Ë\",\"euml\":\"ë\",\"frac12\":\"½\",\"frac14\":\"¼\",\"frac34\":\"¾\",\"gt\":\">\",\"GT\":\">\",\"Iacute\":\"Í\",\"iacute\":\"í\",\"Icirc\":\"Î\",\"icirc\":\"î\",\"iexcl\":\"¡\",\"Igrave\":\"Ì\",\"igrave\":\"ì\",\"iquest\":\"¿\",\"Iuml\":\"Ï\",\"iuml\":\"ï\",\"laquo\":\"«\",\"lt\":\"<\",\"LT\":\"<\",\"macr\":\"¯\",\"micro\":\"µ\",\"middot\":\"·\",\"nbsp\":\" \",\"not\":\"¬\",\"Ntilde\":\"Ñ\",\"ntilde\":\"ñ\",\"Oacute\":\"Ó\",\"oacute\":\"ó\",\"Ocirc\":\"Ô\",\"ocirc\":\"ô\",\"Ograve\":\"Ò\",\"ograve\":\"ò\",\"ordf\":\"ª\",\"ordm\":\"º\",\"Oslash\":\"Ø\",\"oslash\":\"ø\",\"Otilde\":\"Õ\",\"otilde\":\"õ\",\"Ouml\":\"Ö\",\"ouml\":\"ö\",\"para\":\"¶\",\"plusmn\":\"±\",\"pound\":\"£\",\"quot\":\"\\\"\",\"QUOT\":\"\\\"\",\"raquo\":\"»\",\"reg\":\"®\",\"REG\":\"®\",\"sect\":\"§\",\"shy\":\"­\",\"sup1\":\"¹\",\"sup2\":\"²\",\"sup3\":\"³\",\"szlig\":\"ß\",\"THORN\":\"Þ\",\"thorn\":\"þ\",\"times\":\"×\",\"Uacute\":\"Ú\",\"uacute\":\"ú\",\"Ucirc\":\"Û\",\"ucirc\":\"û\",\"Ugrave\":\"Ù\",\"ugrave\":\"ù\",\"uml\":\"¨\",\"Uuml\":\"Ü\",\"uuml\":\"ü\",\"Yacute\":\"Ý\",\"yacute\":\"ý\",\"yen\":\"¥\",\"yuml\":\"ÿ\"}");

/***/ }),
/* 271 */
/***/ (function(module) {

module.exports = JSON.parse("{\"amp\":\"&\",\"apos\":\"'\",\"gt\":\">\",\"lt\":\"<\",\"quot\":\"\\\"\"}");

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var decode_json_1 = __importDefault(__webpack_require__(273));
// modified version of https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
function decodeCodePoint(codePoint) {
    if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
        return "\uFFFD";
    }
    if (codePoint in decode_json_1.default) {
        // @ts-ignore
        codePoint = decode_json_1.default[codePoint];
    }
    var output = "";
    if (codePoint > 0xffff) {
        codePoint -= 0x10000;
        output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
        codePoint = 0xdc00 | (codePoint & 0x3ff);
    }
    output += String.fromCharCode(codePoint);
    return output;
}
exports.default = decodeCodePoint;


/***/ }),
/* 273 */
/***/ (function(module) {

module.exports = JSON.parse("{\"0\":65533,\"128\":8364,\"130\":8218,\"131\":402,\"132\":8222,\"133\":8230,\"134\":8224,\"135\":8225,\"136\":710,\"137\":8240,\"138\":352,\"139\":8249,\"140\":338,\"142\":381,\"145\":8216,\"146\":8217,\"147\":8220,\"148\":8221,\"149\":8226,\"150\":8211,\"151\":8212,\"152\":732,\"153\":8482,\"154\":353,\"155\":8250,\"156\":339,\"158\":382,\"159\":376}");

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var xml_json_1 = __importDefault(__webpack_require__(271));
var inverseXML = getInverseObj(xml_json_1.default);
var xmlReplacer = getInverseReplacer(inverseXML);
exports.encodeXML = getInverse(inverseXML, xmlReplacer);
var entities_json_1 = __importDefault(__webpack_require__(269));
var inverseHTML = getInverseObj(entities_json_1.default);
var htmlReplacer = getInverseReplacer(inverseHTML);
exports.encodeHTML = getInverse(inverseHTML, htmlReplacer);
function getInverseObj(obj) {
    return Object.keys(obj)
        .sort()
        .reduce(function (inverse, name) {
        inverse[obj[name]] = "&" + name + ";";
        return inverse;
    }, {});
}
function getInverseReplacer(inverse) {
    var single = [];
    var multiple = [];
    Object.keys(inverse).forEach(function (k) {
        return k.length === 1
            ? // Add value to single array
                single.push("\\" + k)
            : // Add value to multiple array
                multiple.push(k);
    });
    //TODO add ranges
    multiple.unshift("[" + single.join("") + "]");
    return new RegExp(multiple.join("|"), "g");
}
var reNonASCII = /[^\0-\x7F]/g;
var reAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
function singleCharReplacer(c) {
    return "&#x" + c
        .charCodeAt(0)
        .toString(16)
        .toUpperCase() + ";";
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
function astralReplacer(c, _) {
    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
    var high = c.charCodeAt(0);
    var low = c.charCodeAt(1);
    var codePoint = (high - 0xd800) * 0x400 + low - 0xdc00 + 0x10000;
    return "&#x" + codePoint.toString(16).toUpperCase() + ";";
}
function getInverse(inverse, re) {
    return function (data) {
        return data
            .replace(re, function (name) { return inverse[name]; })
            .replace(reAstralSymbols, astralReplacer)
            .replace(reNonASCII, singleCharReplacer);
    };
}
var reXmlChars = getInverseReplacer(inverseXML);
function escape(data) {
    return data
        .replace(reXmlChars, singleCharReplacer)
        .replace(reAstralSymbols, astralReplacer)
        .replace(reNonASCII, singleCharReplacer);
}
exports.escape = escape;


/***/ }),
/* 275 */
/***/ (function(module) {

module.exports = JSON.parse("{\"elementNames\":{\"altglyph\":\"altGlyph\",\"altglyphdef\":\"altGlyphDef\",\"altglyphitem\":\"altGlyphItem\",\"animatecolor\":\"animateColor\",\"animatemotion\":\"animateMotion\",\"animatetransform\":\"animateTransform\",\"clippath\":\"clipPath\",\"feblend\":\"feBlend\",\"fecolormatrix\":\"feColorMatrix\",\"fecomponenttransfer\":\"feComponentTransfer\",\"fecomposite\":\"feComposite\",\"feconvolvematrix\":\"feConvolveMatrix\",\"fediffuselighting\":\"feDiffuseLighting\",\"fedisplacementmap\":\"feDisplacementMap\",\"fedistantlight\":\"feDistantLight\",\"fedropshadow\":\"feDropShadow\",\"feflood\":\"feFlood\",\"fefunca\":\"feFuncA\",\"fefuncb\":\"feFuncB\",\"fefuncg\":\"feFuncG\",\"fefuncr\":\"feFuncR\",\"fegaussianblur\":\"feGaussianBlur\",\"feimage\":\"feImage\",\"femerge\":\"feMerge\",\"femergenode\":\"feMergeNode\",\"femorphology\":\"feMorphology\",\"feoffset\":\"feOffset\",\"fepointlight\":\"fePointLight\",\"fespecularlighting\":\"feSpecularLighting\",\"fespotlight\":\"feSpotLight\",\"fetile\":\"feTile\",\"feturbulence\":\"feTurbulence\",\"foreignobject\":\"foreignObject\",\"glyphref\":\"glyphRef\",\"lineargradient\":\"linearGradient\",\"radialgradient\":\"radialGradient\",\"textpath\":\"textPath\"},\"attributeNames\":{\"definitionurl\":\"definitionURL\",\"attributename\":\"attributeName\",\"attributetype\":\"attributeType\",\"basefrequency\":\"baseFrequency\",\"baseprofile\":\"baseProfile\",\"calcmode\":\"calcMode\",\"clippathunits\":\"clipPathUnits\",\"diffuseconstant\":\"diffuseConstant\",\"edgemode\":\"edgeMode\",\"filterunits\":\"filterUnits\",\"glyphref\":\"glyphRef\",\"gradienttransform\":\"gradientTransform\",\"gradientunits\":\"gradientUnits\",\"kernelmatrix\":\"kernelMatrix\",\"kernelunitlength\":\"kernelUnitLength\",\"keypoints\":\"keyPoints\",\"keysplines\":\"keySplines\",\"keytimes\":\"keyTimes\",\"lengthadjust\":\"lengthAdjust\",\"limitingconeangle\":\"limitingConeAngle\",\"markerheight\":\"markerHeight\",\"markerunits\":\"markerUnits\",\"markerwidth\":\"markerWidth\",\"maskcontentunits\":\"maskContentUnits\",\"maskunits\":\"maskUnits\",\"numoctaves\":\"numOctaves\",\"pathlength\":\"pathLength\",\"patterncontentunits\":\"patternContentUnits\",\"patterntransform\":\"patternTransform\",\"patternunits\":\"patternUnits\",\"pointsatx\":\"pointsAtX\",\"pointsaty\":\"pointsAtY\",\"pointsatz\":\"pointsAtZ\",\"preservealpha\":\"preserveAlpha\",\"preserveaspectratio\":\"preserveAspectRatio\",\"primitiveunits\":\"primitiveUnits\",\"refx\":\"refX\",\"refy\":\"refY\",\"repeatcount\":\"repeatCount\",\"repeatdur\":\"repeatDur\",\"requiredextensions\":\"requiredExtensions\",\"requiredfeatures\":\"requiredFeatures\",\"specularconstant\":\"specularConstant\",\"specularexponent\":\"specularExponent\",\"spreadmethod\":\"spreadMethod\",\"startoffset\":\"startOffset\",\"stddeviation\":\"stdDeviation\",\"stitchtiles\":\"stitchTiles\",\"surfacescale\":\"surfaceScale\",\"systemlanguage\":\"systemLanguage\",\"tablevalues\":\"tableValues\",\"targetx\":\"targetX\",\"targety\":\"targetY\",\"textlength\":\"textLength\",\"viewbox\":\"viewBox\",\"viewtarget\":\"viewTarget\",\"xchannelselector\":\"xChannelSelector\",\"ychannelselector\":\"yChannelSelector\",\"zoomandpan\":\"zoomAndPan\"}}");

/***/ }),
/* 276 */
/***/ (function(module, exports) {

var getChildren = exports.getChildren = function(elem){
	return elem.children;
};

var getParent = exports.getParent = function(elem){
	return elem.parent;
};

exports.getSiblings = function(elem){
	var parent = getParent(elem);
	return parent ? getChildren(parent) : [elem];
};

exports.getAttributeValue = function(elem, name){
	return elem.attribs && elem.attribs[name];
};

exports.hasAttrib = function(elem, name){
	return !!elem.attribs && hasOwnProperty.call(elem.attribs, name);
};

exports.getName = function(elem){
	return elem.name;
};


/***/ }),
/* 277 */
/***/ (function(module, exports) {

exports.removeElement = function(elem){
	if(elem.prev) elem.prev.next = elem.next;
	if(elem.next) elem.next.prev = elem.prev;

	if(elem.parent){
		var childs = elem.parent.children;
		childs.splice(childs.lastIndexOf(elem), 1);
	}
};

exports.replaceElement = function(elem, replacement){
	var prev = replacement.prev = elem.prev;
	if(prev){
		prev.next = replacement;
	}

	var next = replacement.next = elem.next;
	if(next){
		next.prev = replacement;
	}

	var parent = replacement.parent = elem.parent;
	if(parent){
		var childs = parent.children;
		childs[childs.lastIndexOf(elem)] = replacement;
	}
};

exports.appendChild = function(elem, child){
	child.parent = elem;

	if(elem.children.push(child) !== 1){
		var sibling = elem.children[elem.children.length - 2];
		sibling.next = child;
		child.prev = sibling;
		child.next = null;
	}
};

exports.append = function(elem, next){
	var parent = elem.parent,
		currNext = elem.next;

	next.next = currNext;
	next.prev = elem;
	elem.next = next;
	next.parent = parent;

	if(currNext){
		currNext.prev = next;
		if(parent){
			var childs = parent.children;
			childs.splice(childs.lastIndexOf(currNext), 0, next);
		}
	} else if(parent){
		parent.children.push(next);
	}
};

exports.prepend = function(elem, prev){
	var parent = elem.parent;
	if(parent){
		var childs = parent.children;
		childs.splice(childs.lastIndexOf(elem), 0, prev);
	}

	if(elem.prev){
		elem.prev.next = prev;
	}
	
	prev.parent = parent;
	prev.prev = elem.prev;
	prev.next = elem;
	elem.prev = prev;
};




/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

var isTag = __webpack_require__(264).isTag;

module.exports = {
	filter: filter,
	find: find,
	findOneChild: findOneChild,
	findOne: findOne,
	existsOne: existsOne,
	findAll: findAll
};

function filter(test, element, recurse, limit){
	if(!Array.isArray(element)) element = [element];

	if(typeof limit !== "number" || !isFinite(limit)){
		limit = Infinity;
	}
	return find(test, element, recurse !== false, limit);
}

function find(test, elems, recurse, limit){
	var result = [], childs;

	for(var i = 0, j = elems.length; i < j; i++){
		if(test(elems[i])){
			result.push(elems[i]);
			if(--limit <= 0) break;
		}

		childs = elems[i].children;
		if(recurse && childs && childs.length > 0){
			childs = find(test, childs, recurse, limit);
			result = result.concat(childs);
			limit -= childs.length;
			if(limit <= 0) break;
		}
	}

	return result;
}

function findOneChild(test, elems){
	for(var i = 0, l = elems.length; i < l; i++){
		if(test(elems[i])) return elems[i];
	}

	return null;
}

function findOne(test, elems){
	var elem = null;

	for(var i = 0, l = elems.length; i < l && !elem; i++){
		if(!isTag(elems[i])){
			continue;
		} else if(test(elems[i])){
			elem = elems[i];
		} else if(elems[i].children.length > 0){
			elem = findOne(test, elems[i].children);
		}
	}

	return elem;
}

function existsOne(test, elems){
	for(var i = 0, l = elems.length; i < l; i++){
		if(
			isTag(elems[i]) && (
				test(elems[i]) || (
					elems[i].children.length > 0 &&
					existsOne(test, elems[i].children)
				)
			)
		){
			return true;
		}
	}

	return false;
}

function findAll(test, rootElems){
	var result = [];
	var stack = rootElems.slice();
	while(stack.length){
		var elem = stack.shift();
		if(!isTag(elem)) continue;
		if (elem.children && elem.children.length > 0) {
			stack.unshift.apply(stack, elem.children);
		}
		if(test(elem)) result.push(elem);
	}
	return result;
}


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

var ElementType = __webpack_require__(264);
var isTag = exports.isTag = ElementType.isTag;

exports.testElement = function(options, element){
	for(var key in options){
		if(!options.hasOwnProperty(key));
		else if(key === "tag_name"){
			if(!isTag(element) || !options.tag_name(element.name)){
				return false;
			}
		} else if(key === "tag_type"){
			if(!options.tag_type(element.type)) return false;
		} else if(key === "tag_contains"){
			if(isTag(element) || !options.tag_contains(element.data)){
				return false;
			}
		} else if(!element.attribs || !options[key](element.attribs[key])){
			return false;
		}
	}
	return true;
};

var Checks = {
	tag_name: function(name){
		if(typeof name === "function"){
			return function(elem){ return isTag(elem) && name(elem.name); };
		} else if(name === "*"){
			return isTag;
		} else {
			return function(elem){ return isTag(elem) && elem.name === name; };
		}
	},
	tag_type: function(type){
		if(typeof type === "function"){
			return function(elem){ return type(elem.type); };
		} else {
			return function(elem){ return elem.type === type; };
		}
	},
	tag_contains: function(data){
		if(typeof data === "function"){
			return function(elem){ return !isTag(elem) && data(elem.data); };
		} else {
			return function(elem){ return !isTag(elem) && elem.data === data; };
		}
	}
};

function getAttribCheck(attrib, value){
	if(typeof value === "function"){
		return function(elem){ return elem.attribs && value(elem.attribs[attrib]); };
	} else {
		return function(elem){ return elem.attribs && elem.attribs[attrib] === value; };
	}
}

function combineFuncs(a, b){
	return function(elem){
		return a(elem) || b(elem);
	};
}

exports.getElements = function(options, element, recurse, limit){
	var funcs = Object.keys(options).map(function(key){
		var value = options[key];
		return key in Checks ? Checks[key](value) : getAttribCheck(key, value);
	});

	return funcs.length === 0 ? [] : this.filter(
		funcs.reduce(combineFuncs),
		element, recurse, limit
	);
};

exports.getElementById = function(id, element, recurse){
	if(!Array.isArray(element)) element = [element];
	return this.findOne(getAttribCheck("id", id), element, recurse !== false);
};

exports.getElementsByTagName = function(name, element, recurse, limit){
	return this.filter(Checks.tag_name(name), element, recurse, limit);
};

exports.getElementsByTagType = function(type, element, recurse, limit){
	return this.filter(Checks.tag_type(type), element, recurse, limit);
};


/***/ }),
/* 280 */
/***/ (function(module, exports) {

// removeSubsets
// Given an array of nodes, remove any member that is contained by another.
exports.removeSubsets = function(nodes) {
	var idx = nodes.length, node, ancestor, replace;

	// Check if each node (or one of its ancestors) is already contained in the
	// array.
	while (--idx > -1) {
		node = ancestor = nodes[idx];

		// Temporarily remove the node under consideration
		nodes[idx] = null;
		replace = true;

		while (ancestor) {
			if (nodes.indexOf(ancestor) > -1) {
				replace = false;
				nodes.splice(idx, 1);
				break;
			}
			ancestor = ancestor.parent;
		}

		// If the node has been found to be unique, re-insert it.
		if (replace) {
			nodes[idx] = node;
		}
	}

	return nodes;
};

// Source: http://dom.spec.whatwg.org/#dom-node-comparedocumentposition
var POSITION = {
	DISCONNECTED: 1,
	PRECEDING: 2,
	FOLLOWING: 4,
	CONTAINS: 8,
	CONTAINED_BY: 16
};

// Compare the position of one node against another node in any other document.
// The return value is a bitmask with the following values:
//
// document order:
// > There is an ordering, document order, defined on all the nodes in the
// > document corresponding to the order in which the first character of the
// > XML representation of each node occurs in the XML representation of the
// > document after expansion of general entities. Thus, the document element
// > node will be the first node. Element nodes occur before their children.
// > Thus, document order orders element nodes in order of the occurrence of
// > their start-tag in the XML (after expansion of entities). The attribute
// > nodes of an element occur after the element and before its children. The
// > relative order of attribute nodes is implementation-dependent./
// Source:
// http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
//
// @argument {Node} nodaA The first node to use in the comparison
// @argument {Node} nodeB The second node to use in the comparison
//
// @return {Number} A bitmask describing the input nodes' relative position.
//         See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
//         a description of these values.
var comparePos = exports.compareDocumentPosition = function(nodeA, nodeB) {
	var aParents = [];
	var bParents = [];
	var current, sharedParent, siblings, aSibling, bSibling, idx;

	if (nodeA === nodeB) {
		return 0;
	}

	current = nodeA;
	while (current) {
		aParents.unshift(current);
		current = current.parent;
	}
	current = nodeB;
	while (current) {
		bParents.unshift(current);
		current = current.parent;
	}

	idx = 0;
	while (aParents[idx] === bParents[idx]) {
		idx++;
	}

	if (idx === 0) {
		return POSITION.DISCONNECTED;
	}

	sharedParent = aParents[idx - 1];
	siblings = sharedParent.children;
	aSibling = aParents[idx];
	bSibling = bParents[idx];

	if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
		if (sharedParent === nodeB) {
			return POSITION.FOLLOWING | POSITION.CONTAINED_BY;
		}
		return POSITION.FOLLOWING;
	} else {
		if (sharedParent === nodeA) {
			return POSITION.PRECEDING | POSITION.CONTAINS;
		}
		return POSITION.PRECEDING;
	}
};

// Sort an array of nodes based on their relative position in the document and
// remove any duplicate nodes. If the array contains nodes that do not belong
// to the same document, sort order is unspecified.
//
// @argument {Array} nodes Array of DOM nodes
//
// @returns {Array} collection of unique nodes, sorted in document order
exports.uniqueSort = function(nodes) {
	var idx = nodes.length, node, position;

	nodes = nodes.slice();

	while (--idx > -1) {
		node = nodes[idx];
		position = nodes.indexOf(node);
		if (position > -1 && position < idx) {
			nodes.splice(idx, 1);
		}
	}
	nodes.sort(function(a, b) {
		var relative = comparePos(a, b);
		if (relative & POSITION.PRECEDING) {
			return -1;
		} else if (relative & POSITION.FOLLOWING) {
			return 1;
		}
		return 0;
	});

	return nodes;
};


/***/ }),
/* 281 */
/***/ (function(module, exports) {

module.exports = {
	trueFunc: function trueFunc(){
		return true;
	},
	falseFunc: function falseFunc(){
		return false;
	}
};

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

/*
	compiles a selector to an executable function
*/

module.exports = compile;

var parse = __webpack_require__(283);
var BaseFuncs = __webpack_require__(281);
var sortRules = __webpack_require__(284);
var procedure = __webpack_require__(285);
var Rules = __webpack_require__(286);
var Pseudos = __webpack_require__(288);
var trueFunc = BaseFuncs.trueFunc;
var falseFunc = BaseFuncs.falseFunc;

var filters = Pseudos.filters;

function compile(selector, options, context) {
    var next = compileUnsafe(selector, options, context);
    return wrap(next, options);
}

function wrap(next, options) {
    var adapter = options.adapter;

    return function base(elem) {
        return adapter.isTag(elem) && next(elem);
    };
}

function compileUnsafe(selector, options, context) {
    var token = parse(selector, options);
    return compileToken(token, options, context);
}

function includesScopePseudo(t) {
    return (
        t.type === "pseudo" &&
        (t.name === "scope" ||
            (Array.isArray(t.data) &&
                t.data.some(function(data) {
                    return data.some(includesScopePseudo);
                })))
    );
}

var DESCENDANT_TOKEN = { type: "descendant" };
var FLEXIBLE_DESCENDANT_TOKEN = { type: "_flexibleDescendant" };
var SCOPE_TOKEN = { type: "pseudo", name: "scope" };
var PLACEHOLDER_ELEMENT = {};

//CSS 4 Spec (Draft): 3.3.1. Absolutizing a Scope-relative Selector
//http://www.w3.org/TR/selectors4/#absolutizing
function absolutize(token, options, context) {
    var adapter = options.adapter;

    //TODO better check if context is document
    var hasContext =
        !!context &&
        !!context.length &&
        context.every(function(e) {
            return e === PLACEHOLDER_ELEMENT || !!adapter.getParent(e);
        });

    token.forEach(function(t) {
        if (t.length > 0 && isTraversal(t[0]) && t[0].type !== "descendant") {
            //don't return in else branch
        } else if (hasContext && !includesScopePseudo(t)) {
            t.unshift(DESCENDANT_TOKEN);
        } else {
            return;
        }

        t.unshift(SCOPE_TOKEN);
    });
}

function compileToken(token, options, context) {
    token = token.filter(function(t) {
        return t.length > 0;
    });

    token.forEach(sortRules);

    var isArrayContext = Array.isArray(context);

    context = (options && options.context) || context;

    if (context && !isArrayContext) context = [context];

    absolutize(token, options, context);

    var shouldTestNextSiblings = false;

    var query = token
        .map(function(rules) {
            if (rules[0] && rules[1] && rules[0].name === "scope") {
                var ruleType = rules[1].type;
                if (isArrayContext && ruleType === "descendant") {
                    rules[1] = FLEXIBLE_DESCENDANT_TOKEN;
                } else if (ruleType === "adjacent" || ruleType === "sibling") {
                    shouldTestNextSiblings = true;
                }
            }
            return compileRules(rules, options, context);
        })
        .reduce(reduceRules, falseFunc);

    query.shouldTestNextSiblings = shouldTestNextSiblings;

    return query;
}

function isTraversal(t) {
    return procedure[t.type] < 0;
}

function compileRules(rules, options, context) {
    return rules.reduce(function(func, rule) {
        if (func === falseFunc) return func;

        if (!(rule.type in Rules)) {
            throw new Error("Rule type " + rule.type + " is not supported by css-select");
        }

        return Rules[rule.type](func, rule, options, context);
    }, (options && options.rootFunc) || trueFunc);
}

function reduceRules(a, b) {
    if (b === falseFunc || a === trueFunc) {
        return a;
    }
    if (a === falseFunc || b === trueFunc) {
        return b;
    }

    return function combine(elem) {
        return a(elem) || b(elem);
    };
}

function containsTraversal(t) {
    return t.some(isTraversal);
}

//:not, :has and :matches have to compile selectors
//doing this in lib/pseudos.js would lead to circular dependencies,
//so we add them here
filters.not = function(next, token, options, context) {
    var opts = {
        xmlMode: !!(options && options.xmlMode),
        strict: !!(options && options.strict),
        adapter: options.adapter
    };

    if (opts.strict) {
        if (token.length > 1 || token.some(containsTraversal)) {
            throw new Error("complex selectors in :not aren't allowed in strict mode");
        }
    }

    var func = compileToken(token, opts, context);

    if (func === falseFunc) return next;
    if (func === trueFunc) return falseFunc;

    return function not(elem) {
        return !func(elem) && next(elem);
    };
};

filters.has = function(next, token, options) {
    var adapter = options.adapter;
    var opts = {
        xmlMode: !!(options && options.xmlMode),
        strict: !!(options && options.strict),
        adapter: adapter
    };

    //FIXME: Uses an array as a pointer to the current element (side effects)
    var context = token.some(containsTraversal) ? [PLACEHOLDER_ELEMENT] : null;

    var func = compileToken(token, opts, context);

    if (func === falseFunc) return falseFunc;
    if (func === trueFunc) {
        return function hasChild(elem) {
            return adapter.getChildren(elem).some(adapter.isTag) && next(elem);
        };
    }

    func = wrap(func, options);

    if (context) {
        return function has(elem) {
            return next(elem) && ((context[0] = elem), adapter.existsOne(func, adapter.getChildren(elem)));
        };
    }

    return function has(elem) {
        return next(elem) && adapter.existsOne(func, adapter.getChildren(elem));
    };
};

filters.matches = function(next, token, options, context) {
    var opts = {
        xmlMode: !!(options && options.xmlMode),
        strict: !!(options && options.strict),
        rootFunc: next,
        adapter: options.adapter
    };

    return compileToken(token, opts, context);
};

compile.compileToken = compileToken;
compile.compileUnsafe = compileUnsafe;
compile.Pseudos = Pseudos;


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = parse;

var re_name = /^(?:\\.|[\w\-\u00b0-\uFFFF])+/,
    re_escape = /\\([\da-f]{1,6}\s?|(\s)|.)/ig,
    //modified version of https://github.com/jquery/sizzle/blob/master/src/sizzle.js#L87
    re_attr = /^\s*((?:\\.|[\w\u00b0-\uFFFF\-])+)\s*(?:(\S?)=\s*(?:(['"])([^]*?)\3|(#?(?:\\.|[\w\u00b0-\uFFFF\-])*)|)|)\s*(i)?\]/;

var actionTypes = {
	__proto__: null,
	"undefined": "exists",
	"":  "equals",
	"~": "element",
	"^": "start",
	"$": "end",
	"*": "any",
	"!": "not",
	"|": "hyphen"
};

var simpleSelectors = {
	__proto__: null,
	">": "child",
	"<": "parent",
	"~": "sibling",
	"+": "adjacent"
};

var attribSelectors = {
	__proto__: null,
	"#": ["id", "equals"],
	".": ["class", "element"]
};

//pseudos, whose data-property is parsed as well
var unpackPseudos = {
	__proto__: null,
	"has": true,
	"not": true,
	"matches": true
};

var stripQuotesFromPseudos = {
	__proto__: null,
	"contains": true,
	"icontains": true
};

var quotes = {
	__proto__: null,
	"\"": true,
	"'": true
};

//unescape function taken from https://github.com/jquery/sizzle/blob/master/src/sizzle.js#L139
function funescape( _, escaped, escapedWhitespace ) {
	var high = "0x" + escaped - 0x10000;
	// NaN means non-codepoint
	// Support: Firefox
	// Workaround erroneous numeric interpretation of +"0x"
	return high !== high || escapedWhitespace ?
		escaped :
		// BMP codepoint
		high < 0 ?
			String.fromCharCode( high + 0x10000 ) :
			// Supplemental Plane codepoint (surrogate pair)
			String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
}

function unescapeCSS(str){
	return str.replace(re_escape, funescape);
}

function isWhitespace(c){
	return c === " " || c === "\n" || c === "\t" || c === "\f" || c === "\r";
}

function parse(selector, options){
	var subselects = [];

	selector = parseSelector(subselects, selector + "", options);

	if(selector !== ""){
		throw new SyntaxError("Unmatched selector: " + selector);
	}

	return subselects;
}

function parseSelector(subselects, selector, options){
	var tokens = [],
		sawWS = false,
		data, firstChar, name, quot;

	function getName(){
		var sub = selector.match(re_name)[0];
		selector = selector.substr(sub.length);
		return unescapeCSS(sub);
	}

	function stripWhitespace(start){
		while(isWhitespace(selector.charAt(start))) start++;
		selector = selector.substr(start);
	}

	function isEscaped(pos) {
		var slashCount = 0;

		while (selector.charAt(--pos) === "\\") slashCount++;
		return (slashCount & 1) === 1;
	}

	stripWhitespace(0);

	while(selector !== ""){
		firstChar = selector.charAt(0);

		if(isWhitespace(firstChar)){
			sawWS = true;
			stripWhitespace(1);
		} else if(firstChar in simpleSelectors){
			tokens.push({type: simpleSelectors[firstChar]});
			sawWS = false;

			stripWhitespace(1);
		} else if(firstChar === ","){
			if(tokens.length === 0){
				throw new SyntaxError("empty sub-selector");
			}
			subselects.push(tokens);
			tokens = [];
			sawWS = false;
			stripWhitespace(1);
		} else {
			if(sawWS){
				if(tokens.length > 0){
					tokens.push({type: "descendant"});
				}
				sawWS = false;
			}

			if(firstChar === "*"){
				selector = selector.substr(1);
				tokens.push({type: "universal"});
			} else if(firstChar in attribSelectors){
				selector = selector.substr(1);
				tokens.push({
					type: "attribute",
					name: attribSelectors[firstChar][0],
					action: attribSelectors[firstChar][1],
					value: getName(),
					ignoreCase: false
				});
			} else if(firstChar === "["){
				selector = selector.substr(1);
				data = selector.match(re_attr);
				if(!data){
					throw new SyntaxError("Malformed attribute selector: " + selector);
				}
				selector = selector.substr(data[0].length);
				name = unescapeCSS(data[1]);

				if(
					!options || (
						"lowerCaseAttributeNames" in options ?
							options.lowerCaseAttributeNames :
							!options.xmlMode
					)
				){
					name = name.toLowerCase();
				}

				tokens.push({
					type: "attribute",
					name: name,
					action: actionTypes[data[2]],
					value: unescapeCSS(data[4] || data[5] || ""),
					ignoreCase: !!data[6]
				});

			} else if(firstChar === ":"){
				if(selector.charAt(1) === ":"){
					selector = selector.substr(2);
					tokens.push({type: "pseudo-element", name: getName().toLowerCase()});
					continue;
				}

				selector = selector.substr(1);

				name = getName().toLowerCase();
				data = null;

				if(selector.charAt(0) === "("){
					if(name in unpackPseudos){
						quot = selector.charAt(1);
						var quoted = quot in quotes;

						selector = selector.substr(quoted + 1);

						data = [];
						selector = parseSelector(data, selector, options);

						if(quoted){
							if(selector.charAt(0) !== quot){
								throw new SyntaxError("unmatched quotes in :" + name);
							} else {
								selector = selector.substr(1);
							}
						}

						if(selector.charAt(0) !== ")"){
							throw new SyntaxError("missing closing parenthesis in :" + name + " " + selector);
						}

						selector = selector.substr(1);
					} else {
						var pos = 1, counter = 1;

						for(; counter > 0 && pos < selector.length; pos++){
							if(selector.charAt(pos) === "(" && !isEscaped(pos)) counter++;
							else if(selector.charAt(pos) === ")" && !isEscaped(pos)) counter--;
						}

						if(counter){
							throw new SyntaxError("parenthesis not matched");
						}

						data = selector.substr(1, pos - 2);
						selector = selector.substr(pos);

						if(name in stripQuotesFromPseudos){
							quot = data.charAt(0);

							if(quot === data.slice(-1) && quot in quotes){
								data = data.slice(1, -1);
							}

							data = unescapeCSS(data);
						}
					}
				}

				tokens.push({type: "pseudo", name: name, data: data});
			} else if(re_name.test(selector)){
				name = getName();

				if(!options || ("lowerCaseTags" in options ? options.lowerCaseTags : !options.xmlMode)){
					name = name.toLowerCase();
				}

				tokens.push({type: "tag", name: name});
			} else {
				if(tokens.length && tokens[tokens.length - 1].type === "descendant"){
					tokens.pop();
				}
				addToken(subselects, tokens);
				return selector;
			}
		}
	}

	addToken(subselects, tokens);

	return selector;
}

function addToken(subselects, tokens){
	if(subselects.length > 0 && tokens.length === 0){
		throw new SyntaxError("empty sub-selector");
	}

	subselects.push(tokens);
}


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = sortByProcedure;

/*
	sort the parts of the passed selector,
	as there is potential for optimization
	(some types of selectors are faster than others)
*/

var procedure = __webpack_require__(285);

var attributes = {
    __proto__: null,
    exists: 10,
    equals: 8,
    not: 7,
    start: 6,
    end: 6,
    any: 5,
    hyphen: 4,
    element: 4
};

function sortByProcedure(arr) {
    var procs = arr.map(getProcedure);
    for (var i = 1; i < arr.length; i++) {
        var procNew = procs[i];

        if (procNew < 0) continue;

        for (var j = i - 1; j >= 0 && procNew < procs[j]; j--) {
            var token = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = token;
            procs[j + 1] = procs[j];
            procs[j] = procNew;
        }
    }
}

function getProcedure(token) {
    var proc = procedure[token.type];

    if (proc === procedure.attribute) {
        proc = attributes[token.action];

        if (proc === attributes.equals && token.name === "id") {
            //prefer ID selectors (eg. #ID)
            proc = 9;
        }

        if (token.ignoreCase) {
            //ignoreCase adds some overhead, prefer "normal" token
            //this is a binary operation, to ensure it's still an int
            proc >>= 1;
        }
    } else if (proc === procedure.pseudo) {
        if (!token.data) {
            proc = 3;
        } else if (token.name === "has" || token.name === "contains") {
            proc = 0; //expensive in any case
        } else if (token.name === "matches" || token.name === "not") {
            proc = 0;
            for (var i = 0; i < token.data.length; i++) {
                //TODO better handling of complex selectors
                if (token.data[i].length !== 1) continue;
                var cur = getProcedure(token.data[i][0]);
                //avoid executing :has or :contains
                if (cur === 0) {
                    proc = 0;
                    break;
                }
                if (cur > proc) proc = cur;
            }
            if (token.data.length > 1 && proc > 0) proc -= 1;
        } else {
            proc = 1;
        }
    }
    return proc;
}


/***/ }),
/* 285 */
/***/ (function(module) {

module.exports = JSON.parse("{\"universal\":50,\"tag\":30,\"attribute\":1,\"pseudo\":0,\"descendant\":-1,\"child\":-1,\"parent\":-1,\"sibling\":-1,\"adjacent\":-1}");

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

var attributes = __webpack_require__(287);
var Pseudos = __webpack_require__(288);

/*
	all available rules
*/
module.exports = {
    __proto__: null,

    attribute: attributes.compile,
    pseudo: Pseudos.compile,

    //tags
    tag: function(next, data, options) {
        var name = data.name;
        var adapter = options.adapter;

        return function tag(elem) {
            return adapter.getName(elem) === name && next(elem);
        };
    },

    //traversal
    descendant: function(next, data, options) {
        // eslint-disable-next-line no-undef
        var isFalseCache = typeof WeakSet !== "undefined" ? new WeakSet() : null;
        var adapter = options.adapter;

        return function descendant(elem) {
            var found = false;

            while (!found && (elem = adapter.getParent(elem))) {
                if (!isFalseCache || !isFalseCache.has(elem)) {
                    found = next(elem);
                    if (!found && isFalseCache) {
                        isFalseCache.add(elem);
                    }
                }
            }

            return found;
        };
    },
    _flexibleDescendant: function(next, data, options) {
        var adapter = options.adapter;

        // Include element itself, only used while querying an array
        return function descendant(elem) {
            var found = next(elem);

            while (!found && (elem = adapter.getParent(elem))) {
                found = next(elem);
            }

            return found;
        };
    },
    parent: function(next, data, options) {
        if (options && options.strict) {
            throw new Error("Parent selector isn't part of CSS3");
        }

        var adapter = options.adapter;

        return function parent(elem) {
            return adapter.getChildren(elem).some(test);
        };

        function test(elem) {
            return adapter.isTag(elem) && next(elem);
        }
    },
    child: function(next, data, options) {
        var adapter = options.adapter;

        return function child(elem) {
            var parent = adapter.getParent(elem);
            return !!parent && next(parent);
        };
    },
    sibling: function(next, data, options) {
        var adapter = options.adapter;

        return function sibling(elem) {
            var siblings = adapter.getSiblings(elem);

            for (var i = 0; i < siblings.length; i++) {
                if (adapter.isTag(siblings[i])) {
                    if (siblings[i] === elem) break;
                    if (next(siblings[i])) return true;
                }
            }

            return false;
        };
    },
    adjacent: function(next, data, options) {
        var adapter = options.adapter;

        return function adjacent(elem) {
            var siblings = adapter.getSiblings(elem),
                lastElement;

            for (var i = 0; i < siblings.length; i++) {
                if (adapter.isTag(siblings[i])) {
                    if (siblings[i] === elem) break;
                    lastElement = siblings[i];
                }
            }

            return !!lastElement && next(lastElement);
        };
    },
    universal: function(next) {
        return next;
    }
};


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

var falseFunc = __webpack_require__(281).falseFunc;

//https://github.com/slevithan/XRegExp/blob/master/src/xregexp.js#L469
var reChars = /[-[\]{}()*+?.,\\^$|#\s]/g;

/*
	attribute selectors
*/
var attributeRules = {
    __proto__: null,
    equals: function(next, data, options) {
        var name = data.name;
        var value = data.value;
        var adapter = options.adapter;

        if (data.ignoreCase) {
            value = value.toLowerCase();

            return function equalsIC(elem) {
                var attr = adapter.getAttributeValue(elem, name);
                return attr != null && attr.toLowerCase() === value && next(elem);
            };
        }

        return function equals(elem) {
            return adapter.getAttributeValue(elem, name) === value && next(elem);
        };
    },
    hyphen: function(next, data, options) {
        var name = data.name;
        var value = data.value;
        var len = value.length;
        var adapter = options.adapter;

        if (data.ignoreCase) {
            value = value.toLowerCase();

            return function hyphenIC(elem) {
                var attr = adapter.getAttributeValue(elem, name);
                return (
                    attr != null &&
                    (attr.length === len || attr.charAt(len) === "-") &&
                    attr.substr(0, len).toLowerCase() === value &&
                    next(elem)
                );
            };
        }

        return function hyphen(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return (
                attr != null &&
                attr.substr(0, len) === value &&
                (attr.length === len || attr.charAt(len) === "-") &&
                next(elem)
            );
        };
    },
    element: function(next, data, options) {
        var name = data.name;
        var value = data.value;
        var adapter = options.adapter;

        if (/\s/.test(value)) {
            return falseFunc;
        }

        value = value.replace(reChars, "\\$&");

        var pattern = "(?:^|\\s)" + value + "(?:$|\\s)",
            flags = data.ignoreCase ? "i" : "",
            regex = new RegExp(pattern, flags);

        return function element(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return attr != null && regex.test(attr) && next(elem);
        };
    },
    exists: function(next, data, options) {
        var name = data.name;
        var adapter = options.adapter;

        return function exists(elem) {
            return adapter.hasAttrib(elem, name) && next(elem);
        };
    },
    start: function(next, data, options) {
        var name = data.name;
        var value = data.value;
        var len = value.length;
        var adapter = options.adapter;

        if (len === 0) {
            return falseFunc;
        }

        if (data.ignoreCase) {
            value = value.toLowerCase();

            return function startIC(elem) {
                var attr = adapter.getAttributeValue(elem, name);
                return attr != null && attr.substr(0, len).toLowerCase() === value && next(elem);
            };
        }

        return function start(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return attr != null && attr.substr(0, len) === value && next(elem);
        };
    },
    end: function(next, data, options) {
        var name = data.name;
        var value = data.value;
        var len = -value.length;
        var adapter = options.adapter;

        if (len === 0) {
            return falseFunc;
        }

        if (data.ignoreCase) {
            value = value.toLowerCase();

            return function endIC(elem) {
                var attr = adapter.getAttributeValue(elem, name);
                return attr != null && attr.substr(len).toLowerCase() === value && next(elem);
            };
        }

        return function end(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return attr != null && attr.substr(len) === value && next(elem);
        };
    },
    any: function(next, data, options) {
        var name = data.name;
        var value = data.value;
        var adapter = options.adapter;

        if (value === "") {
            return falseFunc;
        }

        if (data.ignoreCase) {
            var regex = new RegExp(value.replace(reChars, "\\$&"), "i");

            return function anyIC(elem) {
                var attr = adapter.getAttributeValue(elem, name);
                return attr != null && regex.test(attr) && next(elem);
            };
        }

        return function any(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return attr != null && attr.indexOf(value) >= 0 && next(elem);
        };
    },
    not: function(next, data, options) {
        var name = data.name;
        var value = data.value;
        var adapter = options.adapter;

        if (value === "") {
            return function notEmpty(elem) {
                return !!adapter.getAttributeValue(elem, name) && next(elem);
            };
        } else if (data.ignoreCase) {
            value = value.toLowerCase();

            return function notIC(elem) {
                var attr = adapter.getAttributeValue(elem, name);
                return attr != null && attr.toLowerCase() !== value && next(elem);
            };
        }

        return function not(elem) {
            return adapter.getAttributeValue(elem, name) !== value && next(elem);
        };
    }
};

module.exports = {
    compile: function(next, data, options) {
        if (options && options.strict && (data.ignoreCase || data.action === "not")) {
            throw new Error("Unsupported attribute selector");
        }
        return attributeRules[data.action](next, data, options);
    },
    rules: attributeRules
};


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

/*
	pseudo selectors

	---

	they are available in two forms:
	* filters called when the selector
	  is compiled and return a function
	  that needs to return next()
	* pseudos get called on execution
	  they need to return a boolean
*/

var getNCheck = __webpack_require__(289);
var BaseFuncs = __webpack_require__(281);
var attributes = __webpack_require__(287);
var trueFunc = BaseFuncs.trueFunc;
var falseFunc = BaseFuncs.falseFunc;

var checkAttrib = attributes.rules.equals;

function getAttribFunc(name, value) {
    var data = { name: name, value: value };
    return function attribFunc(next, rule, options) {
        return checkAttrib(next, data, options);
    };
}

function getChildFunc(next, adapter) {
    return function(elem) {
        return !!adapter.getParent(elem) && next(elem);
    };
}

var filters = {
    contains: function(next, text, options) {
        var adapter = options.adapter;

        return function contains(elem) {
            return next(elem) && adapter.getText(elem).indexOf(text) >= 0;
        };
    },
    icontains: function(next, text, options) {
        var itext = text.toLowerCase();
        var adapter = options.adapter;

        return function icontains(elem) {
            return (
                next(elem) &&
                adapter
                    .getText(elem)
                    .toLowerCase()
                    .indexOf(itext) >= 0
            );
        };
    },

    //location specific methods
    "nth-child": function(next, rule, options) {
        var func = getNCheck(rule);
        var adapter = options.adapter;

        if (func === falseFunc) return func;
        if (func === trueFunc) return getChildFunc(next, adapter);

        return function nthChild(elem) {
            var siblings = adapter.getSiblings(elem);

            for (var i = 0, pos = 0; i < siblings.length; i++) {
                if (adapter.isTag(siblings[i])) {
                    if (siblings[i] === elem) break;
                    else pos++;
                }
            }

            return func(pos) && next(elem);
        };
    },
    "nth-last-child": function(next, rule, options) {
        var func = getNCheck(rule);
        var adapter = options.adapter;

        if (func === falseFunc) return func;
        if (func === trueFunc) return getChildFunc(next, adapter);

        return function nthLastChild(elem) {
            var siblings = adapter.getSiblings(elem);

            for (var pos = 0, i = siblings.length - 1; i >= 0; i--) {
                if (adapter.isTag(siblings[i])) {
                    if (siblings[i] === elem) break;
                    else pos++;
                }
            }

            return func(pos) && next(elem);
        };
    },
    "nth-of-type": function(next, rule, options) {
        var func = getNCheck(rule);
        var adapter = options.adapter;

        if (func === falseFunc) return func;
        if (func === trueFunc) return getChildFunc(next, adapter);

        return function nthOfType(elem) {
            var siblings = adapter.getSiblings(elem);

            for (var pos = 0, i = 0; i < siblings.length; i++) {
                if (adapter.isTag(siblings[i])) {
                    if (siblings[i] === elem) break;
                    if (adapter.getName(siblings[i]) === adapter.getName(elem)) pos++;
                }
            }

            return func(pos) && next(elem);
        };
    },
    "nth-last-of-type": function(next, rule, options) {
        var func = getNCheck(rule);
        var adapter = options.adapter;

        if (func === falseFunc) return func;
        if (func === trueFunc) return getChildFunc(next, adapter);

        return function nthLastOfType(elem) {
            var siblings = adapter.getSiblings(elem);

            for (var pos = 0, i = siblings.length - 1; i >= 0; i--) {
                if (adapter.isTag(siblings[i])) {
                    if (siblings[i] === elem) break;
                    if (adapter.getName(siblings[i]) === adapter.getName(elem)) pos++;
                }
            }

            return func(pos) && next(elem);
        };
    },

    //TODO determine the actual root element
    root: function(next, rule, options) {
        var adapter = options.adapter;

        return function(elem) {
            return !adapter.getParent(elem) && next(elem);
        };
    },

    scope: function(next, rule, options, context) {
        var adapter = options.adapter;

        if (!context || context.length === 0) {
            //equivalent to :root
            return filters.root(next, rule, options);
        }

        function equals(a, b) {
            if (typeof adapter.equals === "function") return adapter.equals(a, b);

            return a === b;
        }

        if (context.length === 1) {
            //NOTE: can't be unpacked, as :has uses this for side-effects
            return function(elem) {
                return equals(context[0], elem) && next(elem);
            };
        }

        return function(elem) {
            return context.indexOf(elem) >= 0 && next(elem);
        };
    },

    //jQuery extensions (others follow as pseudos)
    checkbox: getAttribFunc("type", "checkbox"),
    file: getAttribFunc("type", "file"),
    password: getAttribFunc("type", "password"),
    radio: getAttribFunc("type", "radio"),
    reset: getAttribFunc("type", "reset"),
    image: getAttribFunc("type", "image"),
    submit: getAttribFunc("type", "submit")
};

//helper methods
function getFirstElement(elems, adapter) {
    for (var i = 0; elems && i < elems.length; i++) {
        if (adapter.isTag(elems[i])) return elems[i];
    }
}

//while filters are precompiled, pseudos get called when they are needed
var pseudos = {
    empty: function(elem, adapter) {
        return !adapter.getChildren(elem).some(function(elem) {
            return adapter.isTag(elem) || elem.type === "text";
        });
    },

    "first-child": function(elem, adapter) {
        return getFirstElement(adapter.getSiblings(elem), adapter) === elem;
    },
    "last-child": function(elem, adapter) {
        var siblings = adapter.getSiblings(elem);

        for (var i = siblings.length - 1; i >= 0; i--) {
            if (siblings[i] === elem) return true;
            if (adapter.isTag(siblings[i])) break;
        }

        return false;
    },
    "first-of-type": function(elem, adapter) {
        var siblings = adapter.getSiblings(elem);

        for (var i = 0; i < siblings.length; i++) {
            if (adapter.isTag(siblings[i])) {
                if (siblings[i] === elem) return true;
                if (adapter.getName(siblings[i]) === adapter.getName(elem)) break;
            }
        }

        return false;
    },
    "last-of-type": function(elem, adapter) {
        var siblings = adapter.getSiblings(elem);

        for (var i = siblings.length - 1; i >= 0; i--) {
            if (adapter.isTag(siblings[i])) {
                if (siblings[i] === elem) return true;
                if (adapter.getName(siblings[i]) === adapter.getName(elem)) break;
            }
        }

        return false;
    },
    "only-of-type": function(elem, adapter) {
        var siblings = adapter.getSiblings(elem);

        for (var i = 0, j = siblings.length; i < j; i++) {
            if (adapter.isTag(siblings[i])) {
                if (siblings[i] === elem) continue;
                if (adapter.getName(siblings[i]) === adapter.getName(elem)) {
                    return false;
                }
            }
        }

        return true;
    },
    "only-child": function(elem, adapter) {
        var siblings = adapter.getSiblings(elem);

        for (var i = 0; i < siblings.length; i++) {
            if (adapter.isTag(siblings[i]) && siblings[i] !== elem) return false;
        }

        return true;
    },

    //:matches(a, area, link)[href]
    link: function(elem, adapter) {
        return adapter.hasAttrib(elem, "href");
    },
    visited: falseFunc, //Valid implementation
    //TODO: :any-link once the name is finalized (as an alias of :link)

    //forms
    //to consider: :target

    //:matches([selected], select:not([multiple]):not(> option[selected]) > option:first-of-type)
    selected: function(elem, adapter) {
        if (adapter.hasAttrib(elem, "selected")) return true;
        else if (adapter.getName(elem) !== "option") return false;

        //the first <option> in a <select> is also selected
        var parent = adapter.getParent(elem);

        if (!parent || adapter.getName(parent) !== "select" || adapter.hasAttrib(parent, "multiple")) {
            return false;
        }

        var siblings = adapter.getChildren(parent);
        var sawElem = false;

        for (var i = 0; i < siblings.length; i++) {
            if (adapter.isTag(siblings[i])) {
                if (siblings[i] === elem) {
                    sawElem = true;
                } else if (!sawElem) {
                    return false;
                } else if (adapter.hasAttrib(siblings[i], "selected")) {
                    return false;
                }
            }
        }

        return sawElem;
    },
    //https://html.spec.whatwg.org/multipage/scripting.html#disabled-elements
    //:matches(
    //  :matches(button, input, select, textarea, menuitem, optgroup, option)[disabled],
    //  optgroup[disabled] > option),
    // fieldset[disabled] * //TODO not child of first <legend>
    //)
    disabled: function(elem, adapter) {
        return adapter.hasAttrib(elem, "disabled");
    },
    enabled: function(elem, adapter) {
        return !adapter.hasAttrib(elem, "disabled");
    },
    //:matches(:matches(:radio, :checkbox)[checked], :selected) (TODO menuitem)
    checked: function(elem, adapter) {
        return adapter.hasAttrib(elem, "checked") || pseudos.selected(elem, adapter);
    },
    //:matches(input, select, textarea)[required]
    required: function(elem, adapter) {
        return adapter.hasAttrib(elem, "required");
    },
    //:matches(input, select, textarea):not([required])
    optional: function(elem, adapter) {
        return !adapter.hasAttrib(elem, "required");
    },

    //jQuery extensions

    //:not(:empty)
    parent: function(elem, adapter) {
        return !pseudos.empty(elem, adapter);
    },
    //:matches(h1, h2, h3, h4, h5, h6)
    header: namePseudo(["h1", "h2", "h3", "h4", "h5", "h6"]),

    //:matches(button, input[type=button])
    button: function(elem, adapter) {
        var name = adapter.getName(elem);
        return (
            name === "button" || (name === "input" && adapter.getAttributeValue(elem, "type") === "button")
        );
    },
    //:matches(input, textarea, select, button)
    input: namePseudo(["input", "textarea", "select", "button"]),
    //input:matches(:not([type!='']), [type='text' i])
    text: function(elem, adapter) {
        var attr;
        return (
            adapter.getName(elem) === "input" &&
            (!(attr = adapter.getAttributeValue(elem, "type")) || attr.toLowerCase() === "text")
        );
    }
};

function namePseudo(names) {
    if (typeof Set !== "undefined") {
        // eslint-disable-next-line no-undef
        var nameSet = new Set(names);

        return function(elem, adapter) {
            return nameSet.has(adapter.getName(elem));
        };
    }

    return function(elem, adapter) {
        return names.indexOf(adapter.getName(elem)) >= 0;
    };
}

function verifyArgs(func, name, subselect) {
    if (subselect === null) {
        if (func.length > 2 && name !== "scope") {
            throw new Error("pseudo-selector :" + name + " requires an argument");
        }
    } else {
        if (func.length === 2) {
            throw new Error("pseudo-selector :" + name + " doesn't have any arguments");
        }
    }
}

//FIXME this feels hacky
var re_CSS3 = /^(?:(?:nth|last|first|only)-(?:child|of-type)|root|empty|(?:en|dis)abled|checked|not)$/;

module.exports = {
    compile: function(next, data, options, context) {
        var name = data.name;
        var subselect = data.data;
        var adapter = options.adapter;

        if (options && options.strict && !re_CSS3.test(name)) {
            throw new Error(":" + name + " isn't part of CSS3");
        }

        if (typeof filters[name] === "function") {
            return filters[name](next, subselect, options, context);
        } else if (typeof pseudos[name] === "function") {
            var func = pseudos[name];
            verifyArgs(func, name, subselect);

            if (func === falseFunc) {
                return func;
            }

            if (next === trueFunc) {
                return function pseudoRoot(elem) {
                    return func(elem, adapter, subselect);
                };
            }

            return function pseudoArgs(elem) {
                return func(elem, adapter, subselect) && next(elem);
            };
        } else {
            throw new Error("unmatched pseudo-class :" + name);
        }
    },
    filters: filters,
    pseudos: pseudos
};


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(290),
    compile = __webpack_require__(291);

module.exports = function nthCheck(formula){
	return compile(parse(formula));
};

module.exports.parse = parse;
module.exports.compile = compile;

/***/ }),
/* 290 */
/***/ (function(module, exports) {

module.exports = parse;

//following http://www.w3.org/TR/css3-selectors/#nth-child-pseudo

//[ ['-'|'+']? INTEGER? {N} [ S* ['-'|'+'] S* INTEGER ]?
var re_nthElement = /^([+\-]?\d*n)?\s*(?:([+\-]?)\s*(\d+))?$/;

/*
	parses a nth-check formula, returns an array of two numbers
*/
function parse(formula){
	formula = formula.trim().toLowerCase();

	if(formula === "even"){
		return [2, 0];
	} else if(formula === "odd"){
		return [2, 1];
	} else {
		var parsed = formula.match(re_nthElement);

		if(!parsed){
			throw new SyntaxError("n-th rule couldn't be parsed ('" + formula + "')");
		}

		var a;

		if(parsed[1]){
			a = parseInt(parsed[1], 10);
			if(isNaN(a)){
				if(parsed[1].charAt(0) === "-") a = -1;
				else a = 1;
			}
		} else a = 0;

		return [
			a,
			parsed[3] ? parseInt((parsed[2] || "") + parsed[3], 10) : 0
		];
	}
}


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = compile;

var BaseFuncs = __webpack_require__(281),
    trueFunc  = BaseFuncs.trueFunc,
    falseFunc = BaseFuncs.falseFunc;

/*
	returns a function that checks if an elements index matches the given rule
	highly optimized to return the fastest solution
*/
function compile(parsed){
	var a = parsed[0],
	    b = parsed[1] - 1;

	//when b <= 0, a*n won't be possible for any matches when a < 0
	//besides, the specification says that no element is matched when a and b are 0
	if(b < 0 && a <= 0) return falseFunc;

	//when a is in the range -1..1, it matches any element (so only b is checked)
	if(a ===-1) return function(pos){ return pos <= b; };
	if(a === 0) return function(pos){ return pos === b; };
	//when b <= 0 and a === 1, they match any element
	if(a === 1) return b < 0 ? trueFunc : function(pos){ return pos >= b; };

	//when a > 0, modulo can be used to check if there is a match
	var bMod = b % a;
	if(bMod < 0) bMod += a;

	if(a > 1){
		return function(pos){
			return pos >= b && pos % a === bMod;
		};
	}

	a *= -1; //make `a` positive

	return function(pos){
		return pos <= b && pos % a === bMod;
	};
}

/***/ }),
/* 292 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layer; });
/* harmony import */ var _mesh_js_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var sprite_animator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82);
/* harmony import */ var sprite_animator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sprite_animator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_animation_frame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76);
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(258);
/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(221);
__webpack_require__(1).glMatrix.setMatrixArrayType(Array);






const defaultOptions = {
  antialias: true,
  autoRender: true
};

const _autoRender = Symbol('autoRender');

const _renderer = Symbol('renderer');

const _timeline = Symbol('timeline');

class Layer extends _group__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor(options = {}) {
    super();

    if (!options.canvas) {
      const {
        width,
        height
      } = this.getResolution();
      const canvas = _mesh_js_core__WEBPACK_IMPORTED_MODULE_0__["ENV"].createCanvas(width, height, {
        offscreen: !!options.offscreen,
        id: options.id,
        extra: options.extra
      });
      if (canvas.style) canvas.style.position = 'absolute';
      if (canvas.dataset) canvas.dataset.layerId = options.id;
      if (canvas.contextType) options.contextType = canvas.contextType;
      options.canvas = canvas;
    }

    const canvas = options.canvas;
    const opts = Object.assign({}, defaultOptions, options);
    this[_autoRender] = opts.autoRender;
    delete options.autoRender;
    this[_renderer] = new _mesh_js_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"](canvas, opts);

    if (canvas.__gl__) {
      // fix blendFunc for node-canvas-webgl
      const gl = canvas.__gl__;
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    }

    this.options = options;
    this.id = options.id;
    this.setResolution(canvas);
    this.canvas = canvas;
    this[_timeline] = new sprite_animator__WEBPACK_IMPORTED_MODULE_1__["Timeline"]();
    this.__mouseCapturedTarget = null;
  }

  get autoRender() {
    return this[_autoRender];
  }

  get displayRatio() {
    if (this.parent && this.parent.options) {
      return this.parent.options.displayRatio;
    }

    return 1.0;
  }

  get height() {
    const {
      height
    } = this.getResolution();
    return height / this.displayRatio;
  }
  /* override */


  get layer() {
    return this;
  }

  get offscreen() {
    return !!this.options.offscreen || this.canvas._offscreen;
  }
  /* prepareRender */

  /* override */


  get renderer() {
    return this[_renderer];
  }

  get renderOffset() {
    if (this.parent && this.parent.options) {
      const {
        left,
        top
      } = this.parent.options;
      return [left, top];
    }

    return [this.options.left | 0, this.options.top | 0];
  }

  get timeline() {
    return this[_timeline];
  }

  get width() {
    const {
      width
    } = this.getResolution();
    return width / this.displayRatio;
  } // isPointCollision(x, y) {
  //   return true;
  // }

  /* override */


  dispatchPointerEvent(event) {
    const type = event.type;

    if (type === 'mousedown' || type === 'mouseup' || type === 'mousemove') {
      const capturedTarget = this.__mouseCapturedTarget;

      if (capturedTarget) {
        if (capturedTarget.layer === this) {
          capturedTarget.dispatchEvent(event);
          return true;
        }

        this.__mouseCapturedTarget = null;
      }
    }

    return super.dispatchPointerEvent(event);
  }
  /* override */


  forceUpdate() {
    if (!this.prepareRender) {
      if (this.parent && this.parent.hasOffscreenCanvas) {
        this.parent.forceUpdate();
        let _resolve = null;
        const prepareRender = new Promise(resolve => {
          _resolve = resolve;
        });
        prepareRender._resolve = _resolve;
        this.prepareRender = prepareRender;
      } else {
        let _resolve = null;
        let _requestID = null;
        const prepareRender = new Promise(resolve => {
          _resolve = resolve;

          if (this[_autoRender]) {
            _requestID = Object(_utils_animation_frame__WEBPACK_IMPORTED_MODULE_2__["requestAnimationFrame"])(() => {
              delete prepareRender._requestID;
              this.render();
            });
          }
        });
        prepareRender._resolve = _resolve;
        prepareRender._requestID = _requestID;
        this.prepareRender = prepareRender;
      }
    }
  }
  /* override */


  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);

    if (key === 'zIndex') {
      this.canvas.style.zIndex = newValue;
    }
  }

  render({
    clear = true
  } = {}) {
    if (clear) this[_renderer].clear();
    const meshes = this.draw();

    if (meshes && meshes.length) {
      this.renderer.drawMeshes(meshes);
      if (this.canvas.draw) this.canvas.draw();
    }

    if (this.prepareRender) {
      if (this.prepareRender._requestID) {
        Object(_utils_animation_frame__WEBPACK_IMPORTED_MODULE_2__["cancelAnimationFrame"])(this.prepareRender._requestID);
      }

      this.prepareRender._resolve();

      delete this.prepareRender;
    }
  }
  /* override */


  setResolution({
    width,
    height
  }) {
    const renderer = this.renderer;
    const m = renderer.globalTransformMatrix;
    const offsetLeft = m[4];
    const offsetTop = m[5];
    const previousDisplayRatio = m[0];
    const {
      width: w,
      height: h
    } = this.getResolution();

    if (w !== width || h !== height) {
      super.setResolution({
        width,
        height
      });

      if (this.canvas) {
        this.canvas.width = width;
        this.canvas.height = height;
      }

      if (renderer.glRenderer) {
        renderer.glRenderer.gl.viewport(0, 0, width, height);
      }

      this.attributes.size = [width, height];
      this.dispatchEvent({
        type: 'resolutionchange',
        width,
        height
      });
    }

    const [left, top] = this.renderOffset;
    const displayRatio = this.displayRatio;

    if (offsetLeft !== left || offsetTop !== top || previousDisplayRatio !== displayRatio) {
      // console.log(displayRatio, this.parent);
      renderer.setGlobalTransform(displayRatio, 0, 0, displayRatio, left, top);
      this.forceUpdate();
    }
  }

  toGlobalPos(x, y) {
    const {
      width,
      height
    } = this.getResolution();
    const offset = this.renderOffset;
    const viewport = [this.canvas.clientWidth, this.canvas.clientHeight];
    x = x * viewport[0] / width + offset[0];
    y = y * viewport[1] / height + offset[1];
    const displayRatio = this.displayRatio;
    return [x * displayRatio, y * displayRatio];
  }

  toLocalPos(x, y) {
    const {
      width,
      height
    } = this.getResolution();
    const offset = this.renderOffset;
    const viewport = [this.canvas.clientWidth, this.canvas.clientHeight];
    x = x * width / viewport[0] - offset[0];
    y = y * height / viewport[1] - offset[1];
    const displayRatio = this.displayRatio;
    return [x / displayRatio, y / displayRatio];
  }

}
_document__WEBPACK_IMPORTED_MODULE_4__["default"].registerNode(Layer, 'layer');

/***/ }),
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layerCreated", function() { return layerCreated; });
/* harmony import */ var _mesh_js_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return _mesh_js_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]; });

/* harmony import */ var _node_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return _node_node__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _node_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(226);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return _node_block__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _node_sprite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(232);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return _node_sprite__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _node_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(234);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return _node_path__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _node_rect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(237);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return _node_rect__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _node_ellipse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(250);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ellipse", function() { return _node_ellipse__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _node_label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(256);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _node_label__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _node_group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(258);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return _node_group__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _node_layer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(292);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return _node_layer__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _utils_color__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(228);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gradient", function() { return _utils_color__WEBPACK_IMPORTED_MODULE_10__["Gradient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseColor", function() { return _utils_color__WEBPACK_IMPORTED_MODULE_10__["parseColor"]; });

__webpack_require__(1).glMatrix.setMatrixArrayType(Array);












const layerCreated = new Promise(resolve => {
  let layer = null;
  self.addEventListener('message', evt => {
    if (evt.data.type === 'create') {
      const options = evt.data.options;
      layer = new _node_layer__WEBPACK_IMPORTED_MODULE_9__["default"](options);
      resolve(layer);
    } else if (layer && evt.data.type === 'event') {
      layer.dispatchPointerEvent(evt.data.event);
    } else if (evt.data.type === 'resolution_change') {
      const {
        width,
        height
      } = evt.data;
      layer.setResolution({
        width,
        height
      });
    }
  });
});


/***/ })
/******/ ]);
});