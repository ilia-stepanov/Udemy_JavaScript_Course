'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
console.log(openModal);
console.log(closeModal);

for (let i = 0; i < openModal.length; i++)
  console.log(openModal[i].textContent);
