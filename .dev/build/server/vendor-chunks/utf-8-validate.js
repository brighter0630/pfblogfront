"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/utf-8-validate";
exports.ids = ["vendor-chunks/utf-8-validate"];
exports.modules = {

/***/ "(ssr)/./node_modules/utf-8-validate/fallback.js":
/*!*************************************************!*\
  !*** ./node_modules/utf-8-validate/fallback.js ***!
  \*************************************************/
/***/ ((module) => {

eval("\n\n/**\n * Checks if a given buffer contains only correct UTF-8.\n * Ported from https://www.cl.cam.ac.uk/%7Emgk25/ucs/utf8_check.c by\n * Markus Kuhn.\n *\n * @param {Buffer} buf The buffer to check\n * @return {Boolean} `true` if `buf` contains only correct UTF-8, else `false`\n * @public\n */\nfunction isValidUTF8(buf) {\n  const len = buf.length;\n  let i = 0;\n\n  while (i < len) {\n    if ((buf[i] & 0x80) === 0x00) {  // 0xxxxxxx\n      i++;\n    } else if ((buf[i] & 0xe0) === 0xc0) {  // 110xxxxx 10xxxxxx\n      if (\n        i + 1 === len ||\n        (buf[i + 1] & 0xc0) !== 0x80 ||\n        (buf[i] & 0xfe) === 0xc0  // overlong\n      ) {\n        return false;\n      }\n\n      i += 2;\n    } else if ((buf[i] & 0xf0) === 0xe0) {  // 1110xxxx 10xxxxxx 10xxxxxx\n      if (\n        i + 2 >= len ||\n        (buf[i + 1] & 0xc0) !== 0x80 ||\n        (buf[i + 2] & 0xc0) !== 0x80 ||\n        buf[i] === 0xe0 && (buf[i + 1] & 0xe0) === 0x80 ||  // overlong\n        buf[i] === 0xed && (buf[i + 1] & 0xe0) === 0xa0  // surrogate (U+D800 - U+DFFF)\n      ) {\n        return false;\n      }\n\n      i += 3;\n    } else if ((buf[i] & 0xf8) === 0xf0) {  // 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx\n      if (\n        i + 3 >= len ||\n        (buf[i + 1] & 0xc0) !== 0x80 ||\n        (buf[i + 2] & 0xc0) !== 0x80 ||\n        (buf[i + 3] & 0xc0) !== 0x80 ||\n        buf[i] === 0xf0 && (buf[i + 1] & 0xf0) === 0x80 ||  // overlong\n        buf[i] === 0xf4 && buf[i + 1] > 0x8f || buf[i] > 0xf4  // > U+10FFFF\n      ) {\n        return false;\n      }\n\n      i += 4;\n    } else {\n      return false;\n    }\n  }\n\n  return true;\n}\n\nmodule.exports = isValidUTF8;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXRmLTgtdmFsaWRhdGUvZmFsbGJhY2suanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLFNBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBLE1BQU0sc0NBQXNDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxzQ0FBc0M7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxzQ0FBc0M7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZm5leHRqcy8uL25vZGVfbW9kdWxlcy91dGYtOC12YWxpZGF0ZS9mYWxsYmFjay5qcz83ZjI3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBnaXZlbiBidWZmZXIgY29udGFpbnMgb25seSBjb3JyZWN0IFVURi04LlxuICogUG9ydGVkIGZyb20gaHR0cHM6Ly93d3cuY2wuY2FtLmFjLnVrLyU3RW1nazI1L3Vjcy91dGY4X2NoZWNrLmMgYnlcbiAqIE1hcmt1cyBLdWhuLlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWYgVGhlIGJ1ZmZlciB0byBjaGVja1xuICogQHJldHVybiB7Qm9vbGVhbn0gYHRydWVgIGlmIGBidWZgIGNvbnRhaW5zIG9ubHkgY29ycmVjdCBVVEYtOCwgZWxzZSBgZmFsc2VgXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRVVEY4KGJ1Zikge1xuICBjb25zdCBsZW4gPSBidWYubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICBpZiAoKGJ1ZltpXSAmIDB4ODApID09PSAweDAwKSB7ICAvLyAweHh4eHh4eFxuICAgICAgaSsrO1xuICAgIH0gZWxzZSBpZiAoKGJ1ZltpXSAmIDB4ZTApID09PSAweGMwKSB7ICAvLyAxMTB4eHh4eCAxMHh4eHh4eFxuICAgICAgaWYgKFxuICAgICAgICBpICsgMSA9PT0gbGVuIHx8XG4gICAgICAgIChidWZbaSArIDFdICYgMHhjMCkgIT09IDB4ODAgfHxcbiAgICAgICAgKGJ1ZltpXSAmIDB4ZmUpID09PSAweGMwICAvLyBvdmVybG9uZ1xuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaSArPSAyO1xuICAgIH0gZWxzZSBpZiAoKGJ1ZltpXSAmIDB4ZjApID09PSAweGUwKSB7ICAvLyAxMTEweHh4eCAxMHh4eHh4eCAxMHh4eHh4eFxuICAgICAgaWYgKFxuICAgICAgICBpICsgMiA+PSBsZW4gfHxcbiAgICAgICAgKGJ1ZltpICsgMV0gJiAweGMwKSAhPT0gMHg4MCB8fFxuICAgICAgICAoYnVmW2kgKyAyXSAmIDB4YzApICE9PSAweDgwIHx8XG4gICAgICAgIGJ1ZltpXSA9PT0gMHhlMCAmJiAoYnVmW2kgKyAxXSAmIDB4ZTApID09PSAweDgwIHx8ICAvLyBvdmVybG9uZ1xuICAgICAgICBidWZbaV0gPT09IDB4ZWQgJiYgKGJ1ZltpICsgMV0gJiAweGUwKSA9PT0gMHhhMCAgLy8gc3Vycm9nYXRlIChVK0Q4MDAgLSBVK0RGRkYpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpICs9IDM7XG4gICAgfSBlbHNlIGlmICgoYnVmW2ldICYgMHhmOCkgPT09IDB4ZjApIHsgIC8vIDExMTEweHh4IDEweHh4eHh4IDEweHh4eHh4IDEweHh4eHh4XG4gICAgICBpZiAoXG4gICAgICAgIGkgKyAzID49IGxlbiB8fFxuICAgICAgICAoYnVmW2kgKyAxXSAmIDB4YzApICE9PSAweDgwIHx8XG4gICAgICAgIChidWZbaSArIDJdICYgMHhjMCkgIT09IDB4ODAgfHxcbiAgICAgICAgKGJ1ZltpICsgM10gJiAweGMwKSAhPT0gMHg4MCB8fFxuICAgICAgICBidWZbaV0gPT09IDB4ZjAgJiYgKGJ1ZltpICsgMV0gJiAweGYwKSA9PT0gMHg4MCB8fCAgLy8gb3ZlcmxvbmdcbiAgICAgICAgYnVmW2ldID09PSAweGY0ICYmIGJ1ZltpICsgMV0gPiAweDhmIHx8IGJ1ZltpXSA+IDB4ZjQgIC8vID4gVSsxMEZGRkZcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGkgKz0gNDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVmFsaWRVVEY4O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/utf-8-validate/fallback.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/utf-8-validate/index.js":
/*!**********************************************!*\
  !*** ./node_modules/utf-8-validate/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\ntry {\n  module.exports = __webpack_require__(/*! node-gyp-build */ \"(ssr)/./node_modules/node-gyp-build/index.js\")(__dirname);\n} catch (e) {\n  module.exports = __webpack_require__(/*! ./fallback */ \"(ssr)/./node_modules/utf-8-validate/fallback.js\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXRmLTgtdmFsaWRhdGUvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQyxvRUFBZ0I7QUFDM0MsRUFBRTtBQUNGLEVBQUUseUdBQXNDO0FBQ3hDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGZuZXh0anMvLi9ub2RlX21vZHVsZXMvdXRmLTgtdmFsaWRhdGUvaW5kZXguanM/YjA3YSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnRyeSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnbm9kZS1neXAtYnVpbGQnKShfX2Rpcm5hbWUpO1xufSBjYXRjaCAoZSkge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFsbGJhY2snKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/utf-8-validate/index.js\n");

/***/ })

};
;