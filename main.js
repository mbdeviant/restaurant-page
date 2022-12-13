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


function createAbout() {
    const container = document.getElementById('container');

    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');
    aboutContainer.setAttribute('id', 'about-container');

    const title = document.createElement('h3');
    title.classList.add('home-title');
    title.textContent = 'About Us';

    const text = document.createElement('p');
    text.classList.add('home-text');
    text.innerHTML = `Set out to serve fellow coffee addicts. <br>
                    coffee&coffee arouse out of necessity. <br>
                    We couldn't find a decent coffee to enjoy.<br>
                    So we said, "Fine, we'll do it ourselves."`;


    aboutContainer.appendChild(title);
    aboutContainer.appendChild(text);
 

    container.innerHTML = '';
    container.appendChild(aboutContainer);

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAbout);






/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function createHome() {
    const container = document.getElementById('container');

    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');
    homeContainer.setAttribute('id', 'home-container');

    const title = document.createElement('h3');
    title.classList.add('home-title');
    title.textContent = 'YOUR BEST COMPANION';

    const text = document.createElement('p');
    text.classList.add('home-text');
    text.innerHTML = `is usually a cup of coffee. <br> When you wake up, <br> while working,<br>or with a friend.<br>
                      So make it count, <br> with coffee&coffee.`;

    const button = document.createElement('button');
    button.classList.add('home-button');
    button.textContent = 'Visit Store';

    homeContainer.appendChild(title);
    homeContainer.appendChild(text);
    homeContainer.appendChild(button);

    container.innerHTML = '';
    container.appendChild(homeContainer);
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);


/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./src/about.js");



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
    home.addEventListener('click',()=>{
        document.body.style.backgroundImage = "url('img/background.jpg')";
        (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
    });

    const about = document.createElement('button');
    about.classList.add('nav-button');
    about.setAttribute('id', 'about-button');
    about.textContent = 'About';
    about.addEventListener('click',()=>{
        document.body.style.backgroundImage = "url('img/about-background.jpg')";
        (0,_about__WEBPACK_IMPORTED_MODULE_1__["default"])();
    })

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

function createContainer (){
    const container = document.createElement('div');
    container.setAttribute('id', 'container');

    return container;
}


function pageLoad() {
    const content = document.getElementById('content');
    
    content.appendChild(createHeader());
    content.appendChild(createContainer());
    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
    
}








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


(0,_init__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVcsRUFBQztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENNO0FBQ0U7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFVO0FBQ2xCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0RBQVc7QUFDbkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzNFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjhCO0FBQzlCO0FBQ0EsaURBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXQuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQWJvdXQoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3QgYWJvdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFib3V0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWNvbnRhaW5lcicpO1xyXG4gICAgYWJvdXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdhYm91dC1jb250YWluZXInKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdob21lLXRpdGxlJyk7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdBYm91dCBVcyc7XHJcblxyXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRleHQuY2xhc3NMaXN0LmFkZCgnaG9tZS10ZXh0Jyk7XHJcbiAgICB0ZXh0LmlubmVySFRNTCA9IGBTZXQgb3V0IHRvIHNlcnZlIGZlbGxvdyBjb2ZmZWUgYWRkaWN0cy4gPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgIGNvZmZlZSZjb2ZmZWUgYXJvdXNlIG91dCBvZiBuZWNlc3NpdHkuIDxicj5cclxuICAgICAgICAgICAgICAgICAgICBXZSBjb3VsZG4ndCBmaW5kIGEgZGVjZW50IGNvZmZlZSB0byBlbmpveS48YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgU28gd2Ugc2FpZCwgXCJGaW5lLCB3ZSdsbCBkbyBpdCBvdXJzZWx2ZXMuXCJgO1xyXG5cclxuXHJcbiAgICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuIFxyXG5cclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dENvbnRhaW5lcik7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWJvdXQ7XHJcblxyXG5cclxuXHJcblxyXG4iLCJcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3QgaG9tZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaG9tZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob21lLWNvbnRhaW5lcicpO1xyXG4gICAgaG9tZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUtY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnaG9tZS10aXRsZScpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnWU9VUiBCRVNUIENPTVBBTklPTic7XHJcblxyXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRleHQuY2xhc3NMaXN0LmFkZCgnaG9tZS10ZXh0Jyk7XHJcbiAgICB0ZXh0LmlubmVySFRNTCA9IGBpcyB1c3VhbGx5IGEgY3VwIG9mIGNvZmZlZS4gPGJyPiBXaGVuIHlvdSB3YWtlIHVwLCA8YnI+IHdoaWxlIHdvcmtpbmcsPGJyPm9yIHdpdGggYSBmcmllbmQuPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU28gbWFrZSBpdCBjb3VudCwgPGJyPiB3aXRoIGNvZmZlZSZjb2ZmZWUuYDtcclxuXHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdob21lLWJ1dHRvbicpO1xyXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1Zpc2l0IFN0b3JlJztcclxuXHJcbiAgICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblxyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVDb250YWluZXIpO1xyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lO1xyXG4iLCJpbXBvcnQgY3JlYXRlSG9tZSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCBjcmVhdGVBYm91dCBmcm9tIFwiLi9hYm91dFwiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnY29mZmVlJmNvZmZlZSc7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdkJhcigpKTtcclxuXHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuYXZCYXIoKSB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuXHJcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24nKTtcclxuICAgIGhvbWUuc2V0QXR0cmlidXRlKCdpZCcsICdob21lLWJ1dHRvbicpO1xyXG4gICAgaG9tZS50ZXh0Q29udGVudCA9ICdIb21lJztcclxuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnaW1nL2JhY2tncm91bmQuanBnJylcIjtcclxuICAgICAgICBjcmVhdGVIb21lKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnbmF2LWJ1dHRvbicpO1xyXG4gICAgYWJvdXQuc2V0QXR0cmlidXRlKCdpZCcsICdhYm91dC1idXR0b24nKTtcclxuICAgIGFib3V0LnRleHRDb250ZW50ID0gJ0Fib3V0JztcclxuICAgIGFib3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ2ltZy9hYm91dC1iYWNrZ3JvdW5kLmpwZycpXCI7XHJcbiAgICAgICAgY3JlYXRlQWJvdXQoKTtcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3Qgc3RvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHN0b3JlLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24nKTtcclxuICAgIHN0b3JlLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3RvcmUtYnV0dG9uJyk7XHJcbiAgICBzdG9yZS50ZXh0Q29udGVudCA9ICdTdG9yZSc7XHJcblxyXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9uJyk7XHJcbiAgICBjb250YWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1idXR0b24nKTtcclxuICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XHJcblxyXG4gICAgbmF2LmFwcGVuZENoaWxkKGhvbWUpO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKGFib3V0KTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZChzdG9yZSk7XHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdCk7XHJcblxyXG4gICAgcmV0dXJuIG5hdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ29udGFpbmVyICgpe1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWluZXInKTtcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZUxvYWQoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgIFxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhaW5lcigpKTtcclxuICAgIGNyZWF0ZUhvbWUoKTtcclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHBhZ2VMb2FkIGZyb20gXCIuL2luaXRcIjtcclxuXHJcbnBhZ2VMb2FkKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==