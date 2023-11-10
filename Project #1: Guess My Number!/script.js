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

let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    setMessage("No number");
  } else if (score > 0) {
    if (guess === secretNumber) {
      document.querySelector(".number").textContent = secretNumber;
      setMessage("Correct Number!");
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";

      if (score > highscore) {
        document.querySelector(".highscore").textContent = score;
        highscore = score;
      }
    } else if (guess !== secretNumber) {
      score = changeOutputIfWrong(
        guess > secretNumber ? "Too High!" : "Too Low!",
        score
      );
    }
  }
  if (score < 1) {
    setMessage("You lost the game!");
    document.querySelector("body").style.backgroundColor = "#e31616";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  setMessage("Start guessing...");
  setScore(10);
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});

function changeOutputIfWrong(message, score) {
  setMessage(message);
  setScore(--score);
  return score;
}

function setMessage(message) {
  document.querySelector(".message").textContent = message;
}

function setScore(score) {
  document.querySelector(".score").textContent = score;
}
