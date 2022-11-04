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

// function to get computers input

const getComputerMove = function () {};
