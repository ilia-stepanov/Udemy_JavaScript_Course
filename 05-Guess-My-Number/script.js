"use strict";

document.querySelector(".score").textContent = 10;

let score = 10;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    setMessage("No number");
  } else if (score > 0) {
    if (guess === secretNumber) {
      setNumber(secretNumber);
      setMessage("Correct Number!");
      setBackgroundColor("#60b347");
      setNumberWidth("30rem");

      if (score > highscore) {
        document.querySelector(".highscore").textContent = score;
        highscore = score;
      }
    } else if (guess !== secretNumber) {
      setMessage(guess > secretNumber ? "Too High!" : "Too Low!");
      setScore(--score);
    }
  }
  if (score < 1) {
    setMessage("You lost the game!");
    setBackgroundColor("#e31616");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  setMessage("Start guessing...");
  setScore(score);
  document.querySelector(".guess").value = "";
  setBackgroundColor("#222");
  setNumberWidth("15rem");
  setNumber("?");
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});

function setMessage(message) {
  document.querySelector(".message").textContent = message;
}

function setScore(score) {
  document.querySelector(".score").textContent = score;
}

function setBackgroundColor(color) {
  document.querySelector("body").style.backgroundColor = color;
}

function setNumberWidth(width) {
  document.querySelector(".number").style.width = width;
}

function setNumber(number) {
  document.querySelector(".number").textContent = number;
}
