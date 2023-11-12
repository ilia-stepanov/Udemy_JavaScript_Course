'use strict';

console.log('hello');
// document.querySelector('.hold').addEventListener('click', checkGuess);
document.querySelector('.roll').addEventListener('click', rollDice);

function setCurrentScore(number) {
  document.querySelector('.user1-current-score').textContent =
    number + Number(document.querySelector('.user1-current-score').textContent);
}

function rollDice() {
  console.log('clicked');
  let number = Number(Math.trunc(Math.random() * 6) + 1);
  setCurrentScore(number);
}
