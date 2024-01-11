//global variables declaration

const score = document.querySelector('.scoreCounter');
const time = document.querySelector('.timerCounter');
const gameOver = document.querySelector('.gameOver');
const cells = document.querySelectorAll('.cell');
const play = document.querySelector('.play');

//start of game setup
function setUpGame() {
  gameOver.hidden = true;
  score.innerText = 0;
  let timeLeft = 5;
  time.innerText = timeLeft;
  for (let i = 0; i < 9; i++) {
    cells[i].classList.remove('bug');
    cells[i].classList.remove('splat');
  }
}
//create random number for cell list
function getIndex() {
  return Math.floor(Math.random() * 8);
}

//make the bug pop in a cell
function bugMovement() {
  let index = getIndex();
  cells[index].classList.add('bug');

  cells[index].classList.remove('bug');
}

//user clicks on play
play.addEventListener('click', setUpGame);
//time start counting down from 5

function timer() {
  time.innerText = timeLeft--;
}
//score goes back to 0
//while time is > 0
if (timeLeft > 0) {
  timeLeft = setInterval(timer, 1000);
  //a bug appears in a random box
  //if user clicks on that box
  //bug change to splats
  //score goes 1 up
  //else bug desappears after 800milliseconds
} else if (timeLeft === 0) {
  //when time === 0
  clearInterval(timeLeft);
  //gameOver appears
  gameOver.hidden = true;
}
