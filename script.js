'use strict';
//We can also use the getElementById('name-of-the-id)
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

//Starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //Generating a random dice
  let dice = Math.trunc(Math.random() * 6) + 1;
  //Displaying the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //Checking that if the dice is 1

  if (dice != 1) {
    //add dice to the current score
    currentScore += dice;

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //Switch to the next player and the first player score equal to zero
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
