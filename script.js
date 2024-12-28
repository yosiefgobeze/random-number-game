'use strict';

// let's write a function to the check button in our dom
let luckyNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
//document.querySelector('.number').textContent = luckyNumber;
let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  console.log(luckyNumber);
  // incase there is no input, Number("") will convert an empty string to a value 0 and zero is falsey in js
  const guess = Number(document.querySelector('.guess').value); // because the retrieved value has to be a number
  console.log(guess, typeof guess);

  // if no input guess === 0, which is falsey
  if (!guess) {
    console.log(displayMessage('⛔ No number!'));
  } else if (guess !== luckyNumber) {
    if (score > 1) {
      displayMessage(guess > luckyNumber ? '📈 Too high' : '📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😡 You lost the game!!');
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess === luckyNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = luckyNumber;
    displayMessage('🎉 Correct Number!');
    document.querySelector('.score').textContent = score;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  luckyNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
});
