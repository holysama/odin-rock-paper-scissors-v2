//Computer choice function
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);

    if (randomChoice === 0) {
        return "Rock";
    } else if (randomChoice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

//Human choice function
function getHumanChoice(userChoice) {

    if (userChoice === "Rock") {
        return "Rock";
    } else if (userChoice === "Paper") {
        return "Paper";
    } else if (userChoice === "Scissors") {
        return "Scissors";
    } else if (userChoice === null || userChoice === "") {
        userChoice = "";
        return userChoice;
    } else { 
        return userChoice; 
    }
}

let getUserChoice = prompt("What did you choose?");

//Player score variables
let humanScore = 0;
let computerScore = 0;

//Single round of Rock, Paper Scissors logic
function playRound(computerChoice, humanChoice) {
    humanChoice = humanChoice.slice(0, 1).toUpperCase() + humanChoice.slice(1).toLowerCase();
    computerChoice = computerChoice.slice(0, 1).toUpperCase() + computerChoice.slice(1).toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice !== "Rock" && humanChoice !== "Paper" && humanChoice !== "Scissors") {
        console.log("Try again, You've cancelled or the option is not available");
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("User wins! Rock beats Scissors");
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("User wins! Paper beats Rock");
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("User wins! Scissors beats Paper");
    } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
        console.log("Computer wins! Rock beats Scissors");
    } else if (computerChoice === "Paper" && humanChoice === "Rock") {
        console.log("Computer wins! Paper beats Rock");
    } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
        console.log("Computer wins! Scissors beats Paper");
    }
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice(getUserChoice);

console.log(computerSelection);
console.log(humanSelection);

playRound(computerSelection, humanSelection);