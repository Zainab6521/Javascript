'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 23;
let score = 20;
document.querySelector('.score').textContent = score;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct Number!!';
  } else if (guess > number) {
    document.querySelector('.message').textContent = 'Too high!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < number) {
    score--;
    document.querySelector('.message').textContent = 'Too low!';
    document.querySelector('.score').textContent = score;
  }
});
