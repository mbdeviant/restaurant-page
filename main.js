/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function test() {
    console.log('damn rick');
    //YES IT WORKS

};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (test);

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const title = document.createElement('h1');
    title.textContent = 'coffee&coffee';
    header.appendChild(title);
    header.appendChild(navBar());

    return header;
}

function navBar() {
    const nav = document.createElement('nav');

    const home = document.createElement('button');
    home.classList.add('nav-button');
    home.setAttribute('id', 'home-button');
    home.textContent = 'Home';

    const about = document.createElement('button');
    about.classList.add('nav-button');
    about.setAttribute('id', 'about-button');
    about.textContent = 'About';

    const store = document.createElement('button');
    store.classList.add('nav-button');
    store.setAttribute('id', 'store-button');
    store.textContent = 'Store';

    const contact = document.createElement('button');
    contact.classList.add('nav-button');
    contact.setAttribute('id', 'contact-button');
    contact.textContent = 'Contact';

    nav.appendChild(home);
    nav.appendChild(about);
    nav.appendChild(store);
    nav.appendChild(contact);

    return nav;
}

function home() {
    const container = document.createElement('div');
    container.classList.add('home-container');

    const title = document.createElement('h3');
    title.classList.add('home-title');
    title.textContent = 'YOUR BEST COMPANION';

    const text = document.createElement('p');
    text.classList.add('home-text');
    text.innerHTML = `is usually a cup of coffee. <br> When you wake up, <br> while working,<br>or with a friend.<br>
                      So make it count, <br> with coffee&coffee.`
    
    const button = document.createElement('button');
    button.classList.add('home-button');
    button.textContent = 'Visit Store';


    container.appendChild(title);
    container.appendChild(text);
    container.appendChild(button);


    return container;
}


function pageLoad() {
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(home());

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./src/init.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./src/about.js");






(0,_init__WEBPACK_IMPORTED_MODULE_0__["default"])();

const about = document.getElementById('about-button');

about.addEventListener('click',()=>{
    console.log('shit rick');
    (0,_about__WEBPACK_IMPORTED_MODULE_1__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7QUNQbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFRLEVBQUM7QUFDeEI7QUFDQTs7Ozs7OztVQ2pGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ044QjtBQUNIO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBSTtBQUNSLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gdGVzdCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdkYW1uIHJpY2snKTtcclxuICAgIC8vWUVTIElUIFdPUktTXHJcblxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRlc3Q7IiwiZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnY29mZmVlJmNvZmZlZSc7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdkJhcigpKTtcclxuXHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuYXZCYXIoKSB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuXHJcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24nKTtcclxuICAgIGhvbWUuc2V0QXR0cmlidXRlKCdpZCcsICdob21lLWJ1dHRvbicpO1xyXG4gICAgaG9tZS50ZXh0Q29udGVudCA9ICdIb21lJztcclxuXHJcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnbmF2LWJ1dHRvbicpO1xyXG4gICAgYWJvdXQuc2V0QXR0cmlidXRlKCdpZCcsICdhYm91dC1idXR0b24nKTtcclxuICAgIGFib3V0LnRleHRDb250ZW50ID0gJ0Fib3V0JztcclxuXHJcbiAgICBjb25zdCBzdG9yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgc3RvcmUuY2xhc3NMaXN0LmFkZCgnbmF2LWJ1dHRvbicpO1xyXG4gICAgc3RvcmUuc2V0QXR0cmlidXRlKCdpZCcsICdzdG9yZS1idXR0b24nKTtcclxuICAgIHN0b3JlLnRleHRDb250ZW50ID0gJ1N0b3JlJztcclxuXHJcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24nKTtcclxuICAgIGNvbnRhY3Quc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWJ1dHRvbicpO1xyXG4gICAgY29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YWN0JztcclxuXHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZSk7XHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoYWJvdXQpO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKHN0b3JlKTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZChjb250YWN0KTtcclxuXHJcbiAgICByZXR1cm4gbmF2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBob21lKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9tZS1jb250YWluZXInKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdob21lLXRpdGxlJyk7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdZT1VSIEJFU1QgQ09NUEFOSU9OJztcclxuXHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKCdob21lLXRleHQnKTtcclxuICAgIHRleHQuaW5uZXJIVE1MID0gYGlzIHVzdWFsbHkgYSBjdXAgb2YgY29mZmVlLiA8YnI+IFdoZW4geW91IHdha2UgdXAsIDxicj4gd2hpbGUgd29ya2luZyw8YnI+b3Igd2l0aCBhIGZyaWVuZC48YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTbyBtYWtlIGl0IGNvdW50LCA8YnI+IHdpdGggY29mZmVlJmNvZmZlZS5gXHJcbiAgICBcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hvbWUtYnV0dG9uJyk7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnVmlzaXQgU3RvcmUnO1xyXG5cclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAvL2FkZCBhIGJ1dHRvbiBocmVmIHRvIHN0b3JlXHJcblxyXG5cclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBwYWdlTG9hZCgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWUoKSk7XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFnZUxvYWQ7XHJcblxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcGFnZUxvYWQgZnJvbSBcIi4vaW5pdFwiO1xyXG5pbXBvcnQgdGVzdCBmcm9tIFwiLi9hYm91dFwiO1xyXG5cclxuXHJcblxyXG5cclxucGFnZUxvYWQoKTtcclxuXHJcbmNvbnN0IGFib3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0LWJ1dHRvbicpO1xyXG5cclxuYWJvdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICBjb25zb2xlLmxvZygnc2hpdCByaWNrJyk7XHJcbiAgICB0ZXN0KCk7XHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==