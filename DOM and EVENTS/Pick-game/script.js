'use strict';

//selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.querySelector('.current--0');
const current1El = document.querySelector('.current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('btn--roll');
const btnHold = document.querySelector('btn--hold');

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const score = [0, 0];
let currentScore = 0;
let currentScore = 0;
let activePlayer = 0;

//Rolling dice functionality
btnRoll.addEventListener('click', () => {
  //Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //Display Dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice.png}`;

  //check for rolled 1
  if (dice !== 1) {
    //Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    current0El.textContent = currentScore; //change later
  } else {
    //Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player-active');
    player1El.classList.toggle('player-active');
  }
});
