!function(n){var e={};function c(r){if(e[r])return e[r].exports;var t=e[r]={i:r,l:!1,exports:{}};return n[r].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=n,c.c=e,c.d=function(n,e,r){c.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},c.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,e){if(1&e&&(n=c(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)c.d(r,t,function(e){return n[e]}.bind(null,t));return r},c.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="",c(c.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\r\n\r\n// service worker registration - remove if you\'re not going to use it\r\n\r\nif (\'serviceWorker\' in navigator) {\r\n  window.addEventListener(\'load\', function () {\r\n    navigator.serviceWorker.register(\'serviceworker.js\').then(function (registration) {\r\n      // Registration was successful\r\n      console.log(\'ServiceWorker registration successful with scope: \', registration.scope);\r\n    }, function (err) {\r\n      // registration failed :(\r\n      console.log(\'ServiceWorker registration failed: \', err);\r\n    });\r\n  });\r\n}\r\n\r\nconst buttonAdd = document.querySelector(".drink__button--1-js");\r\nconst buttonSub = document.querySelector(".drink__button--2-js");\r\nconst glassNumber = document.querySelector(".drink__number--js");\r\nconst key = new Date().toISOString().slice(0, 10);\r\nlet number = 0;\r\n\r\n// console.log(localStorage.setItem(key, number));\r\n\r\nif (localStorage.getItem(key, number)) {\r\n  glassNumber.innerHTML = localStorage.getItem(key);\r\n\r\n  number = localStorage.getItem(key);\r\n\r\n  buttonAdd.addEventListener("click", function () {\r\n    number++;\r\n    if (number >= 100) {\r\n      alert("You\'ve drunk too much today:)");\r\n    } else {\r\n      glassNumber.innerHTML = number;\r\n      localStorage.setItem(key, number);\r\n    }\r\n  });\r\n\r\n  buttonSub.addEventListener("click", (e) => {\r\n    number--;\r\n    if (number < 0) {\r\n      alert("You haven\'t drunk anything today:)");\r\n    } else {\r\n      glassNumber.innerHTML = number;\r\n      localStorage.setItem(key, number);\r\n    }\r\n  });\r\n\r\n} else {\r\n  glassNumber.innerHTML = number;\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxDQUFDO0FBQ0Q7QUFDQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gLSByZW1vdmUgaWYgeW91J3JlIG5vdCBnb2luZyB0byB1c2UgaXRcclxuXHJcbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcignc2VydmljZXdvcmtlci5qcycpLnRoZW4oZnVuY3Rpb24gKHJlZ2lzdHJhdGlvbikge1xyXG4gICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcclxuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwgd2l0aCBzY29wZTogJywgcmVnaXN0cmF0aW9uLnNjb3BlKTtcclxuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxyXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiAnLCBlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IGJ1dHRvbkFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJpbmtfX2J1dHRvbi0tMS1qc1wiKTtcclxuY29uc3QgYnV0dG9uU3ViID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcmlua19fYnV0dG9uLS0yLWpzXCIpO1xyXG5jb25zdCBnbGFzc051bWJlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJpbmtfX251bWJlci0tanNcIik7XHJcbmNvbnN0IGtleSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XHJcbmxldCBudW1iZXIgPSAwO1xyXG5cclxuLy8gY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBudW1iZXIpKTtcclxuXHJcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXksIG51bWJlcikpIHtcclxuICBnbGFzc051bWJlci5pbm5lckhUTUwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG5cclxuICBudW1iZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG5cclxuICBidXR0b25BZGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIG51bWJlcisrO1xyXG4gICAgaWYgKG51bWJlciA+PSAxMDApIHtcclxuICAgICAgYWxlcnQoXCJZb3UndmUgZHJ1bmsgdG9vIG11Y2ggdG9kYXk6KVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdsYXNzTnVtYmVyLmlubmVySFRNTCA9IG51bWJlcjtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBudW1iZXIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBidXR0b25TdWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBudW1iZXItLTtcclxuICAgIGlmIChudW1iZXIgPCAwKSB7XHJcbiAgICAgIGFsZXJ0KFwiWW91IGhhdmVuJ3QgZHJ1bmsgYW55dGhpbmcgdG9kYXk6KVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdsYXNzTnVtYmVyLmlubmVySFRNTCA9IG51bWJlcjtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBudW1iZXIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxufSBlbHNlIHtcclxuICBnbGFzc051bWJlci5pbm5lckhUTUwgPSBudW1iZXI7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n')}]);