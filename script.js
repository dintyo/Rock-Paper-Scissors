"use strict";

///////////////////////////////////////
// define DOM elements that we'll use

const scoreText = document.querySelector(".score");
const userRock = document.querySelector(".rock");
const userPaper = document.querySelector(".paper");
const userScissors = document.querySelector(".scissors");
const playerMove = document.querySelector(".player-move");
const computerMove = document.querySelector(".computer-move");
const btnPlayAgain = document.querySelector(".btn-play");

////////////////////////////////////////
// Sounds

const audioDraw = new Audio("sounds/draw.wav");
const audioLoseRound = new Audio("sounds/lose-round.wav");
const audioWinRound = new Audio("sounds/win-round.wav");
const audioWinGame = new Audio("sounds/win-game.wav");
const audioLoseGame = new Audio("sounds/lose-game.wav");

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
  if (pScore < 5 && cScore < 5) {
    let counter = 0;
    userRock.disabled = true;
    userScissors.disabled = true;
    userPaper.disabled = true;
    const randomMoves = function () {
      if (counter == 9) {
        clearInterval(randomComputerMove);
        if (player === computerMove) {
          if (move === "Scissors") player.textContent = "✂️";
          if (move === "Rock") player.textContent = "🪨";
          if (move === "Paper") player.textContent = "🖐️";
          updateScore(getWinner());
        }
      } else {
        if (counter % 3 === 0) computerMove.textContent = "✂️";
        if (counter % 3 === 1) computerMove.textContent = "🪨";
        if (counter % 3 === 2) computerMove.textContent = "🖐️";
        counter++;
        console.log(counter);
      }
    };

    const randomComputerMove = setInterval(randomMoves, 100);

    if (move === "Scissors") player.textContent = "✂️";
    if (move === "Rock") player.textContent = "🪨";
    if (move === "Paper") player.textContent = "🖐️";
  }

  let roundResult = getWinner();
};

// function to update the score

scoreText.addEventListener("transitionend", () => {
  scoreText.classList.remove("scoreupdate");
});

const updateScore = function (result) {
  if (pScore < 5 && cScore < 5) {
    userRock.disabled = false;
    userScissors.disabled = false;
    userPaper.disabled = false;
    scoreText.classList.add("scoreupdate");
    if (result === "Win") {
      pScore++;
      if (pScore < 5) {
        console.log(pScore);
        audioWinRound.currentTime = 0;
        audioWinRound.play();
        scoreText.innerHTML = `you won 😃 <br> the score is now ${pScore} - ${cScore}`;
      } else {
        audioWinGame.currentTime = 0;
        audioWinGame.play();
        scoreText.innerHTML = `you won 😃 <br> the final score is ${pScore} - ${cScore}`;
        btnPlayAgain.classList.remove("hidden");
        userRock.disabled = true;
        userScissors.disabled = true;
        userPaper.disabled = true;
      }
      return;
    }
    if (result === "Loss") {
      cScore++;
      if (cScore < 5) {
        audioLoseRound.currentTime = 0;
        audioLoseRound.play();
        scoreText.innerHTML = `you lost 😞 <br> the score is now ${pScore} - ${cScore}`;
      } else {
        audioLoseGame.currentTime = 0;
        audioLoseGame.play();
        scoreText.innerHTML = `you lost 😞 <br> the final score is ${pScore} - ${cScore}`;
        btnPlayAgain.classList.remove("hidden");
      }
      return;
    }
    audioDraw.currentTime = 0;
    audioDraw.play();
    scoreText.innerHTML = `you tied 😕 <br> the score is now ${pScore} - ${cScore}`;
  } else {
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
  // updateScore(getWinner());
});

userPaper.addEventListener("click", function () {
  pMove = "Paper";
  getComputerMove();
  printResult(playerMove, pMove);
  printResult(computerMove, cMove);
  // updateScore(getWinner());
});

userScissors.addEventListener("click", function () {
  pMove = "Scissors";
  getComputerMove();
  printResult(playerMove, pMove);
  printResult(computerMove, cMove);
  // updateScore(getWinner());
});

btnPlayAgain.addEventListener("click", function () {
  cScore = 0;
  pScore = 0;
  scoreText.textContent = "";
  playerMove.textContent = "😎";
  computerMove.textContent = "💻";
  btnPlayAgain.classList.add("hidden");
  userRock.disabled = false;
  userScissors.disabled = false;
  userPaper.disabled = false;
});
