'use strict';
/*
console.log(document.querySelector(`.message`).textContent);
document.querySelector(`.message`).textContent = `🎉Correct Number!`;

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 20;

document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = '';
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  // when there's no input
  if (!guess) {
    document.querySelector(`.message`).textContent = `🚫 No Number!`;

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `🎉 Correct Number!`;
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector(`.highscore`).textContent = highScore;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--; // decrease by 1
      document.querySelector(`.score`).textContent = score;
      document.querySelector(`.message`).textContent =
        guess > secretNumber ? `⬇️ Lower than that` : `⬆️ Higher than that`;
    } else {
      document.querySelector(`.score`).textContent = 0;
      document.querySelector(`.message`).textContent = `😔 Oh You lost`;
    }
  }
});
