const score1 = document.getElementById('score-0');
const score2 = document.getElementById('score-1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');
const player1 = document.querySelector('.player-0');
const player2 = document.querySelector('.player-1');
const gameWinner = document.querySelector('.winner');

let currentScore = 0;
const scores = [0,0];
let activePlayer = 0;
let isPlaying = true;

dice.classList.add('hidden');

const switchPlayer = () => {
  currentScore = 0
  document.getElementById(`current-${activePlayer}`).textContent = currentScore;

  activePlayer = activePlayer === 0 ? 1 : 0;

  player1.classList.toggle('player-active');
  player2.classList.toggle('player-active');

  return activePlayer;
};

btnRoll.addEventListener('click', () => {
  if (isPlaying) {
    const diceValue = Math.trunc(Math.random()*6)+1;
    dice.src = `dice-${diceValue}.png`;
    dice.classList.remove('hidden');

    if (diceValue !== 1) {
      currentScore += diceValue;
      document.getElementById(`current-${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  };
});

btnHold.addEventListener('click', () => {
  if(isPlaying) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      isPlaying = false
      document.querySelector(`.player-${activePlayer}`).classList.add('player-winner');
      document.querySelector(`.winner-${activePlayer}`).classList.add('winner');
      document.querySelector(`.winner-${activePlayer}`).classList.remove('hidden');
      dice.classList.add('hidden');
      
    } else {
      switchPlayer();
    }
  };
});

btnNew.addEventListener('click', () => {
  window.location.reload();
})
