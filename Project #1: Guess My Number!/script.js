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

let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No number";
  } else if (score > 0) {
    if (guess === secretNumber) {
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector(".message").textContent = "Correct Number!";
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
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
    document.querySelector("body").style.backgroundColor = "#e31616";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start guessing...";
  score = 10;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
