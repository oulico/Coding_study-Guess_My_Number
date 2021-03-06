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

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

const again = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = '';
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
};

const guess = function () {
  const guess = Number(document.querySelector(`.guess`).value);

  // when there's no input
  if (!guess) {
    // document.querySelector(`.message`).textContent = `🚫 No Number!`;
    displayMessage('🚫 No Number!');
    // when player wins
  } else if (guess === secretNumber) {
    displayMessage(`🎉 Correct Number!`);
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
      displayMessage(
        guess > secretNumber ? `⬇️ Lower than that` : `⬆️ Higher than that`
      );
    } else {
      document.querySelector(`.score`).textContent = 0;
      displayMessage(`😔 Oh You lost`);
    }
  }
};

document.querySelector(`.again`).addEventListener(`click`, again);

document.querySelector(`.check`).addEventListener(`click`, guess);

document.addEventListener(`keydown`, function (e) {
  if (e.key === `Enter`) {
    guess();
  }
});

document.addEventListener(`keydown`, function (f) {
  if (f.key === `Escape`) {
    again();
  }
});
