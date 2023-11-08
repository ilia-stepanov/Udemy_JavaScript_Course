"use strict";

/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Correct Number!";

document.querySelector(".number").textContent = 13;

document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;

console.log(document.querySelector(".guess").value);
*/

document.querySelector(".score").textContent = 10;

let score = 10;

const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No number";
  } else if (score > 0) {
    if (guess === secretNumber) {
      document.querySelector(".message").textContent = "Correct Number!";
      document.querySelector("body").style.backgroundColor = "#60b347";
    } else if (guess > secretNumber) {
      document.querySelector(".message").textContent = "Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (guess < secretNumber) {
      document.querySelector(".message").textContent = "Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    }
  }
  if (score < 1) {
    document.querySelector(".message").textContent = "You lost the game!";
  }
});
