!function(n){var e={};function t(r){if(e[r])return e[r].exports;var c=e[r]={i:r,l:!1,exports:{}};return n[r].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var c in n)t.d(r,c,function(e){return n[e]}.bind(null,c));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\r\n\r\n// service worker registration - remove if you're not going to use it\r\n\r\nif ('serviceWorker' in navigator) {\r\n  window.addEventListener('load', function () {\r\n    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {\r\n      // Registration was successful\r\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\r\n    }, function (err) {\r\n      // registration failed :(\r\n      console.log('ServiceWorker registration failed: ', err);\r\n    });\r\n  });\r\n}\r\n\r\nconst buttonAdd = document.querySelector(\".drink__button--1-js\");\r\nconst buttonSub = document.querySelector(\".drink__button--2-js\");\r\nconst glassNumber = document.querySelector(\".drink__number--js\");\r\nconst ul = document.querySelector(\".history__list\");\r\nconst key = new Date().toISOString().slice(0, 10);\r\nlet number = 0;\r\n\r\nif (!localStorage.getItem(key)) {\r\n  localStorage.setItem(key, number);\r\n  glassNumber.innerHTML = number;\r\n\r\n} else {\r\n  glassNumber.innerHTML = localStorage.getItem(key);\r\n  number = localStorage.getItem(key);\r\n}\r\n\r\nbuttonAdd.addEventListener(\"click\", function () {\r\n  number++;\r\n  if (number >= 100) {\r\n    alert(\"You've drunk too much today:)\");\r\n  } else {\r\n    glassNumber.innerHTML = number;\r\n    localStorage.setItem(key, number);\r\n  }\r\n});\r\n\r\nbuttonSub.addEventListener(\"click\", (e) => {\r\n  number--;\r\n  if (number < 0) {\r\n    alert(\"You haven't drunk anything today:)\");\r\n  } else {\r\n    glassNumber.innerHTML = number;\r\n    localStorage.setItem(key, number);\r\n  }\r\n});\r\n\r\nfor (let i = 0; i < localStorage.length - 1; i++) {\r\n  let key = localStorage.key(i);\r\n  let value = localStorage.getItem(key);\r\n  let content = `${key} - ${value} glasses`;\r\n\r\n  const liItem = document.createElement('li');\r\n  liItem.classList.add('history__item');\r\n  liItem.textContent = content;\r\n  ul.appendChild(liItem);\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxlQUFlLDZCQUE2QjtBQUM1QztBQUNBO0FBQ0EsbUJBQW1CLElBQUksS0FBSyxNQUFNOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiAtIHJlbW92ZSBpZiB5b3UncmUgbm90IGdvaW5nIHRvIHVzZSBpdFxyXG5cclxuaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzZXJ2aWNld29ya2VyLmpzJykudGhlbihmdW5jdGlvbiAocmVnaXN0cmF0aW9uKSB7XHJcbiAgICAgIC8vIFJlZ2lzdHJhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxyXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCB3aXRoIHNjb3BlOiAnLCByZWdpc3RyYXRpb24uc2NvcGUpO1xyXG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAvLyByZWdpc3RyYXRpb24gZmFpbGVkIDooXHJcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6ICcsIGVycik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuY29uc3QgYnV0dG9uQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcmlua19fYnV0dG9uLS0xLWpzXCIpO1xyXG5jb25zdCBidXR0b25TdWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyaW5rX19idXR0b24tLTItanNcIik7XHJcbmNvbnN0IGdsYXNzTnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcmlua19fbnVtYmVyLS1qc1wiKTtcclxuY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpc3RvcnlfX2xpc3RcIik7XHJcbmNvbnN0IGtleSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XHJcbmxldCBudW1iZXIgPSAwO1xyXG5cclxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBudW1iZXIpO1xyXG4gIGdsYXNzTnVtYmVyLmlubmVySFRNTCA9IG51bWJlcjtcclxuXHJcbn0gZWxzZSB7XHJcbiAgZ2xhc3NOdW1iZXIuaW5uZXJIVE1MID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICBudW1iZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG59XHJcblxyXG5idXR0b25BZGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICBudW1iZXIrKztcclxuICBpZiAobnVtYmVyID49IDEwMCkge1xyXG4gICAgYWxlcnQoXCJZb3UndmUgZHJ1bmsgdG9vIG11Y2ggdG9kYXk6KVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZ2xhc3NOdW1iZXIuaW5uZXJIVE1MID0gbnVtYmVyO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBudW1iZXIpO1xyXG4gIH1cclxufSk7XHJcblxyXG5idXR0b25TdWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgbnVtYmVyLS07XHJcbiAgaWYgKG51bWJlciA8IDApIHtcclxuICAgIGFsZXJ0KFwiWW91IGhhdmVuJ3QgZHJ1bmsgYW55dGhpbmcgdG9kYXk6KVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZ2xhc3NOdW1iZXIuaW5uZXJIVE1MID0gbnVtYmVyO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBudW1iZXIpO1xyXG4gIH1cclxufSk7XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGggLSAxOyBpKyspIHtcclxuICBsZXQga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcclxuICBsZXQgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gIGxldCBjb250ZW50ID0gYCR7a2V5fSAtICR7dmFsdWV9IGdsYXNzZXNgO1xyXG5cclxuICBjb25zdCBsaUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIGxpSXRlbS5jbGFzc0xpc3QuYWRkKCdoaXN0b3J5X19pdGVtJyk7XHJcbiAgbGlJdGVtLnRleHRDb250ZW50ID0gY29udGVudDtcclxuICB1bC5hcHBlbmRDaGlsZChsaUl0ZW0pO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")}]);