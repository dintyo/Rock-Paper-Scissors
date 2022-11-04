"use strict";

///////////////////////////////////////
// define DOM elements that we'll use

const scoreText = document.querySelector(".score");
const userRock = document.querySelector(".rock");
const userPaper = document.querySelector(".paper");
const userScissors = document.querySelector(".scissors");
const playerMove = document.querySelector(".player-move");
const computerMove = document.querySelector(".computer-move");

///////////////////////////////////////
// My Plan
/*
- Start with function getComputerChoice - randomly return Rock, Paper or Scissors. 

- Add event listeners to buttons for users input

- Set users score based on button input

- Write a function to determine the winner

- Log the score

- Print the inputs to the screen.

*/

///////////////////////////////////////
// Main code

// define global variables used for playerMove and computerMove

let pMove;
let cMove;
let cScore = 0;
let pScore = 0;

// function to get computers input

const getComputerMove = function () {
  const randomNum = Math.floor(Math.random() * 3 + 1);
  if (randomNum == 1) {
    cMove = "Rock";
  } else if (randomNum == 2) {
    cMove = "Paper";
  } else cMove = "Scissors";

  return cMove;
};

// function to print result

const printResult = function (player, move) {
  if (pScore < 5 || cScore < 5) {
    if (move === "Scissors") player.textContent = "✂️";
    if (move === "Rock") player.textContent = "🤜";
    if (move === "Paper") player.textContent = "🗒️";

    let roundResult = getWinner();
  } else {
    // show button to play again and reset game
  }
};

// function to update the score

const updateScore = function (result) {
  if (pScore < 5 && cScore < 5) {
    if (result === "Win") {
      pScore++;
      console.log(pScore);
      scoreText.textContent = `You won 😃! The score is now ${pScore} - ${cScore}`;
      return;
    }
    if (result === "Loss") {
      cScore++;
      scoreText.textContent = `You lost 😞! The score is now ${pScore} - ${cScore}`;
      return;
    }
    scoreText.textContent = `You tied! The score is now ${pScore} - ${cScore}`;
  } else {
    // enable button to play again, freeze scores
  }
};

// function to determine winner

const getWinner = function () {
  switch (true) {
    case pMove === "Rock" && cMove === "Rock":
      return "Tie";
    case pMove === "Rock" && cMove === "Paper":
      return "Loss";
    case pMove === "Rock" && cMove === "Scissors":
      return "Win";
    case pMove === "Paper" && cMove === "Rock":
      return "Win";
    case pMove === "Paper" && cMove === "Paper":
      return "Tie";
    case pMove === "Paper" && cMove === "Scissors":
      return "Loss";
    case pMove === "Scissors" && cMove === "Rock":
      return "Loss";
    case pMove === "Scissors" && cMove === "Paper":
      return "Win";
    case pMove === "Scissors" && cMove === "Scissors":
      return "Tie";
    default:
      return false;
  }
};

// add event listeners for user input

userRock.addEventListener("click", function () {
  pMove = "Rock";
  getComputerMove();
  printResult(playerMove, pMove);
  printResult(computerMove, cMove);
  updateScore(getWinner());
});

userPaper.addEventListener("click", function () {
  pMove = "Paper";
  getComputerMove();
  printResult(playerMove, pMove);
  printResult(computerMove, cMove);
  updateScore(getWinner());
});

userScissors.addEventListener("click", function () {
  pMove = "Scissors";
  getComputerMove();
  printResult(playerMove, pMove);
  printResult(computerMove, cMove);
  updateScore(getWinner());
});
