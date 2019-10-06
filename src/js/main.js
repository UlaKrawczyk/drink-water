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
const ul = document.querySelector(".history__list");
const liItem = "";
const key = new Date().toISOString().slice(0, 10);
let number = 0;

if (!localStorage.getItem(key)) {
  localStorage.setItem(key, number);
  glassNumber.innerHTML = number;

} else {
  glassNumber.innerHTML = localStorage.getItem(key);
  number = localStorage.getItem(key);
}

for (let i = 0; i < localStorage.length; i++) {

  let key = localStorage.key(i);
  //sprawdzenie czy format daty
  const regEX = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;
  if (key.match(regEX)) {
    let value = localStorage.getItem(key);
    let content = `${key} - ${value} glasses`;

    const liItem = document.createElement('li');
    liItem.classList.add('history__item');
    liItem.textContent = content;
    ul.appendChild(liItem);
  }
}

function syncToday() {
  const item = document.querySelector("li:last-child");
  item.textContent = `${localStorage.key(localStorage.length -1)} - ${localStorage.getItem(key)} glasses`;
}

buttonAdd.addEventListener("click", function () {
  number++;
  if (number >= 100) {
    alert("You've drunk too much today:)");
  } else {
    glassNumber.innerHTML = number;
    localStorage.setItem(key, number);
    syncToday();
  }
});

buttonSub.addEventListener("click", (e) => {
  number--;
  if (number < 0) {
    alert("You haven't drunk anything today:)");
  } else {
    glassNumber.innerHTML = number;
    localStorage.setItem(key, number);
    syncToday();
  }
});