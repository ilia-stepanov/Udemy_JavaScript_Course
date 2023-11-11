'use strict';

const showModal = function () {
  console.log('Button Open clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const hideModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
console.log(openModal);
console.log(closeModal);

for (let i = 0; i < openModal.length; i++)
  openModal[i].addEventListener('click', showModal);

closeModal.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);

document.addEventListener('keydown', function (e) {
  if (e['key'] === 'Escape' && !modal.classList.contains('hidden')) {
    hideModal();
  }
});
