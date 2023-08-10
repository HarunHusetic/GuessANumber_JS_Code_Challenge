'use strict';

// Selecting necessary elements from HTML
const btnAgain = document.querySelector('.again');
const checkBtn = document.querySelector('.check');
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const scoreContainer = document.querySelector('.score');
const highScoreContainer = document.querySelector('.highscore');

// Generating random number between 1 - 20
const numberGenerator = () => Math.trunc(Math.random() * 20) + 1;
let secretNumber = numberGenerator();

// Message generator
const generateMessage = messageText => (message.textContent = messageText);

// Setting default score value
let score = 20;
let highscore = 0;
scoreContainer.textContent = score;

// Function for game reset
const resetGame = () => {
  score = 20;
  secretNumber = numberGenerator();

  guess.value = '';
  number.textContent = '?';
  scoreContainer.textContent = score;
  generateMessage('Start guessing...');

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

// Checking if guess is correct
checkBtn.addEventListener('click', () => {
  if (!guess.value) {
    generateMessage('Please enter number');
  } else if (Number(guess.value) === secretNumber) {
    generateMessage('Correct ✅');
    number.textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      highScoreContainer.textContent = highscore;
    }
  } else if (Number(guess.value) != secretNumber) {
    if (score > 1) {
      Number(guess.value) > secretNumber
        ? generateMessage('Too big ⏫')
        : generateMessage('Too low ⏬');
      score--;
      scoreContainer.textContent = score;
    } else {
      generateMessage('Game over 💥');
      scoreContainer.textContent = 0;
    }
  }
});

// Reset game when Again! is clicked
btnAgain.addEventListener('click', resetGame);
