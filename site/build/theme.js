/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/theme.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/theme.js":
/*!****************************!*\
  !*** ./assets/js/theme.js ***!
  \****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var switchTheme = document.querySelectorAll('.js-switch-theme');
for (var i = 0; i < switchTheme.length; i++) {
  switchTheme[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    if (this.dataset.theme) {
      switchToTheme(this.dataset.theme);
      return false;
    }
  });
}

function switchToTheme(theme) {
  Array.from(document.body.classList).forEach(function (className) {
    if (className.indexOf('theme') > -1) {
      document.body.classList.remove(className);
    }
  });

  document.body.classList.add('theme-' + theme);
  window.localStorage.setItem('theme', theme);
}

var theme = window.localStorage.getItem('theme');
if (theme) {
  switchToTheme(theme);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGU0ZGM0ZDA3OTUxZDI3NTk4YzUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lLmpzIl0sIm5hbWVzIjpbInN3aXRjaFRoZW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGFzZXQiLCJ0aGVtZSIsInN3aXRjaFRvVGhlbWUiLCJBcnJheSIsImZyb20iLCJib2R5IiwiY2xhc3NMaXN0IiwiZm9yRWFjaCIsImNsYXNzTmFtZSIsImluZGV4T2YiLCJyZW1vdmUiLCJhZGQiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0RBLElBQUlBLGNBQWNDLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixDQUFsQjtBQUNBLEtBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSCxZQUFZSSxNQUFoQyxFQUF3Q0QsR0FBeEMsRUFBNkM7QUFDM0NILGNBQVlHLENBQVosRUFBZUUsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsVUFBVUMsR0FBVixFQUFlO0FBQ3REQSxRQUFJQyxjQUFKO0FBQ0EsUUFBSSxLQUFLQyxPQUFMLENBQWFDLEtBQWpCLEVBQXdCO0FBQ3RCQyxvQkFBYyxLQUFLRixPQUFMLENBQWFDLEtBQTNCO0FBQ0EsYUFBTyxLQUFQO0FBQ0Q7QUFDRixHQU5EO0FBT0Q7O0FBRUQsU0FBU0MsYUFBVCxDQUF1QkQsS0FBdkIsRUFBOEI7QUFDNUJFLFFBQU1DLElBQU4sQ0FBV1gsU0FBU1ksSUFBVCxDQUFjQyxTQUF6QixFQUFvQ0MsT0FBcEMsQ0FBNEMscUJBQWE7QUFDdkQsUUFBSUMsVUFBVUMsT0FBVixDQUFrQixPQUFsQixJQUE2QixDQUFDLENBQWxDLEVBQXFDO0FBQ25DaEIsZUFBU1ksSUFBVCxDQUFjQyxTQUFkLENBQXdCSSxNQUF4QixDQUErQkYsU0FBL0I7QUFDRDtBQUNGLEdBSkQ7O0FBTUFmLFdBQVNZLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkssR0FBeEIsWUFBcUNWLEtBQXJDO0FBQ0FXLFNBQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLE9BQTVCLEVBQXFDYixLQUFyQztBQUNEOztBQUVELElBQUlBLFFBQVFXLE9BQU9DLFlBQVAsQ0FBb0JFLE9BQXBCLENBQTRCLE9BQTVCLENBQVo7QUFDQSxJQUFJZCxLQUFKLEVBQVc7QUFDVEMsZ0JBQWNELEtBQWQ7QUFDRCxDIiwiZmlsZSI6InRoZW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvanMvdGhlbWUuanNcIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGU0ZGM0ZDA3OTUxZDI3NTk4YzUiLCJsZXQgc3dpdGNoVGhlbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtc3dpdGNoLXRoZW1lJyk7XG5mb3IgKHZhciBpID0gMDsgaSA8IHN3aXRjaFRoZW1lLmxlbmd0aDsgaSsrKSB7XG4gIHN3aXRjaFRoZW1lW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLmRhdGFzZXQudGhlbWUpIHtcbiAgICAgIHN3aXRjaFRvVGhlbWUodGhpcy5kYXRhc2V0LnRoZW1lKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hUb1RoZW1lKHRoZW1lKSB7XG4gIEFycmF5LmZyb20oZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QpLmZvckVhY2goY2xhc3NOYW1lID0+IHtcbiAgICBpZiAoY2xhc3NOYW1lLmluZGV4T2YoJ3RoZW1lJykgPiAtMSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgfVxuICB9KTtcblxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoYHRoZW1lLSR7dGhlbWV9YCk7XG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCB0aGVtZSk7XG59XG5cbmxldCB0aGVtZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKTtcbmlmICh0aGVtZSkge1xuICBzd2l0Y2hUb1RoZW1lKHRoZW1lKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3RoZW1lLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==