'use strict';
/*
console.log(document.querySelector(`.message`).textContent);
document.querySelector(`.message`).textContent = `🎉Correct Number!`;

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 20;

document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(`.number`).textContent = secretNumber;
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  // when there's no input
  if (!guess) {
    document.querySelector(`.message`).textContent = `🚫 No Number!`;

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `🎉 Correct Number!`;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--; // decrease by 1
      document.querySelector(`.score`).textContent = score;
      document.querySelector(`.message`).textContent = `⬇️ Lower than that`;
    } else {
      document.querySelector(`.score`).textContent = 0;
      document.querySelector(`.message`).textContent = `😔 Oh You lost`;
    }

    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--; // decrease by 1
      document.querySelector(`.score`).textContent = score;
      document.querySelector(`.message`).textContent = `⬆️ Higher than that`;
    } else {
      document.querySelector(`.score`).textContent = 0;
      document.querySelector(`.message`).textContent = `😔 Oh You lost`;
    }
  }
});
