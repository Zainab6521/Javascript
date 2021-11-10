'use strict';

//selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('btn--roll');
const btnHold = document.querySelector('btn--hold');

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//Rolling dice functionality
btnRoll.addEventListener('click', () => {
  //Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //Display Dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice.png}`;
  //check for role 1: If true, Switch to player 2.
});
