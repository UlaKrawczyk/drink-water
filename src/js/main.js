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
const buttonClear = document.querySelector(".drink__button--3-js");
const glassNumber = document.querySelector(".drink__number--js");
const ul = document.querySelector(".history__list");
const liItem = "";
const key = new Date().toISOString().slice(0, 10);
const regEX = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;
let number = 0;

localStorage.setItem("2019-10-04", 5);
localStorage.setItem("2019-10-05", 2);

if (!localStorage.getItem(key)) {
  localStorage.setItem(key, number);
  glassNumber.innerHTML = number;

} else {
  glassNumber.innerHTML = localStorage.getItem(key);
  number = localStorage.getItem(key);
}

for (let i = 0; i < localStorage.length; i++) {
  let keyItem = localStorage.key(i);
  console.log(keyItem);
  //sprawdzenie czy format daty
  if (keyItem.match(regEX)) {
    let value = localStorage.getItem(keyItem);
    let content = `${keyItem} - ${value} glasses`;
    console.log(content);

    const liItem = document.createElement('li');
    liItem.classList.add('history__item');
    liItem.textContent = content;
    ul.appendChild(liItem);
  }
}

function syncToday() {
  const liList = document.querySelectorAll("li");
  for (let element of liList) {
    const elemString = element.innerText;
    const elemData = elemString.substr(0, 10);
    if (elemData === key) {
      element.textContent = `${key} - ${localStorage.getItem(key)} glasses`;
    }
  }
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

buttonClear.addEventListener('click', function () {
  //czyszczę localStorage i usuwam wszystkie wpisy li
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  //ustawiam znowu szklankę na 0
  number = 0;
  localStorage.setItem(key, number);
  glassNumber.innerHTML = number;

  //wyświetlam w historii dzisiejszy dzień
  //nie sprawdzam daty, bo wyczyściłam wszystko i biorę jedyną wartość
  let value = localStorage.getItem(key);
  let content = `${key} - ${value} glasses`;
  const liItem = document.createElement('li');
  liItem.classList.add('history__item');
  liItem.textContent = content;
  ul.appendChild(liItem);
});