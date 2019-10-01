"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

const buttonAdd = document.querySelector(".drink__button--1-js");
const buttonSub = document.querySelector(".drink__button--2-js");
const glassNumber = document.querySelector(".drink__number--js");
let number = 0;

buttonAdd.addEventListener("click", function () {
  number++;
  if (number >= 100) {
    alert("You've drunk too much today:)");
  } else {
    glassNumber.innerHTML = number;
  }
});

buttonSub.addEventListener("click", (e) => {
  number--;
  if (number <= 0) {
    alert("You haven't drunk anything today:)");
  } else {
    glassNumber.innerHTML = number;
  }
});