!function(n){var e={};function t(r){if(e[r])return e[r].exports;var l=e[r]={i:r,l:!1,exports:{}};return n[r].call(l.exports,l,l.exports,t),l.l=!0,l.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var l in n)t.d(r,l,function(e){return n[e]}.bind(null,l));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\r\n\r\n// service worker registration - remove if you\'re not going to use it\r\n\r\nif (\'serviceWorker\' in navigator) {\r\n  window.addEventListener(\'load\', function () {\r\n    navigator.serviceWorker.register(\'serviceworker.js\').then(function (registration) {\r\n      // Registration was successful\r\n      console.log(\'ServiceWorker registration successful with scope: \', registration.scope);\r\n    }, function (err) {\r\n      // registration failed :(\r\n      console.log(\'ServiceWorker registration failed: \', err);\r\n    });\r\n  });\r\n}\r\n\r\nconst buttonAdd = document.querySelector(".drink__button--1-js");\r\nconst buttonSub = document.querySelector(".drink__button--2-js");\r\nconst glassNumber = document.querySelector(".drink__number--js");\r\nconst ul = document.querySelector(".history__list");\r\nconst key = new Date().toISOString().slice(0, 10);\r\nlet number = 0;\r\n\r\n// const myKey = "2019-10-02"\r\n// localStorage.setItem(myKey, 5);\r\n\r\nif (!localStorage.getItem(key)) {\r\n  localStorage.setItem(key, number);\r\n  glassNumber.innerHTML = number;\r\n\r\n} else {\r\n  glassNumber.innerHTML = localStorage.getItem(key);\r\n  number = localStorage.getItem(key);\r\n}\r\n\r\nbuttonAdd.addEventListener("click", function () {\r\n  number++;\r\n  if (number >= 100) {\r\n    alert("You\'ve drunk too much today:)");\r\n  } else {\r\n    glassNumber.innerHTML = number;\r\n    localStorage.setItem(key, number);\r\n  }\r\n});\r\n\r\nbuttonSub.addEventListener("click", (e) => {\r\n  number--;\r\n  if (number < 0) {\r\n    alert("You haven\'t drunk anything today:)");\r\n  } else {\r\n    glassNumber.innerHTML = number;\r\n    localStorage.setItem(key, number);\r\n  }\r\n});\r\n\r\nfor (let i = 0; i < localStorage.length - 1; i++) {\r\n  let key = localStorage.key(i);\r\n  let value = localStorage.getItem(key);\r\n  let content = `${key} - ${value} glasses`;\r\n\r\n  const liItem = document.createElement(\'li\');\r\n  liItem.classList.add(\'history__item\');\r\n  liItem.textContent = content;\r\n  ul.appendChild(liItem);\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGVBQWUsNkJBQTZCO0FBQzVDO0FBQ0E7QUFDQSxtQkFBbUIsSUFBSSxLQUFLLE1BQU07O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIC0gcmVtb3ZlIGlmIHlvdSdyZSBub3QgZ29pbmcgdG8gdXNlIGl0XHJcblxyXG5pZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3NlcnZpY2V3b3JrZXIuanMnKS50aGVuKGZ1bmN0aW9uIChyZWdpc3RyYXRpb24pIHtcclxuICAgICAgLy8gUmVnaXN0cmF0aW9uIHdhcyBzdWNjZXNzZnVsXHJcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XHJcbiAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgIC8vIHJlZ2lzdHJhdGlvbiBmYWlsZWQgOihcclxuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogJywgZXJyKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBidXR0b25BZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyaW5rX19idXR0b24tLTEtanNcIik7XHJcbmNvbnN0IGJ1dHRvblN1YiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJpbmtfX2J1dHRvbi0tMi1qc1wiKTtcclxuY29uc3QgZ2xhc3NOdW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyaW5rX19udW1iZXItLWpzXCIpO1xyXG5jb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlzdG9yeV9fbGlzdFwiKTtcclxuY29uc3Qga2V5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcclxubGV0IG51bWJlciA9IDA7XHJcblxyXG4vLyBjb25zdCBteUtleSA9IFwiMjAxOS0xMC0wMlwiXHJcbi8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG15S2V5LCA1KTtcclxuXHJcbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgbnVtYmVyKTtcclxuICBnbGFzc051bWJlci5pbm5lckhUTUwgPSBudW1iZXI7XHJcblxyXG59IGVsc2Uge1xyXG4gIGdsYXNzTnVtYmVyLmlubmVySFRNTCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgbnVtYmVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxufVxyXG5cclxuYnV0dG9uQWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgbnVtYmVyKys7XHJcbiAgaWYgKG51bWJlciA+PSAxMDApIHtcclxuICAgIGFsZXJ0KFwiWW91J3ZlIGRydW5rIHRvbyBtdWNoIHRvZGF5OilcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGdsYXNzTnVtYmVyLmlubmVySFRNTCA9IG51bWJlcjtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgbnVtYmVyKTtcclxuICB9XHJcbn0pO1xyXG5cclxuYnV0dG9uU3ViLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gIG51bWJlci0tO1xyXG4gIGlmIChudW1iZXIgPCAwKSB7XHJcbiAgICBhbGVydChcIllvdSBoYXZlbid0IGRydW5rIGFueXRoaW5nIHRvZGF5OilcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGdsYXNzTnVtYmVyLmlubmVySFRNTCA9IG51bWJlcjtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgbnVtYmVyKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgbGV0IGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XHJcbiAgbGV0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICBsZXQgY29udGVudCA9IGAke2tleX0gLSAke3ZhbHVlfSBnbGFzc2VzYDtcclxuXHJcbiAgY29uc3QgbGlJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICBsaUl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlzdG9yeV9faXRlbScpO1xyXG4gIGxpSXRlbS50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XHJcbiAgdWwuYXBwZW5kQ2hpbGQobGlJdGVtKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n')}]);