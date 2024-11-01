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

let computerResult = getComputerChoice();


//Human choice function
function getHumanChoice(userChoice) {
    
    if (userChoice === "Rock") {
        return "Rock";
    } else if (userChoice === "Paper") {
        return "Paper";
    } else {
        return "Scissors";
    }
}

let getUserChoice = prompt("What did you choose?");

let humanResult = getHumanChoice(getUserChoice);

//Player score variables
let humanScore = 0;
let computerScore = 0;

//Single round of Rock, Paper Scissors logic
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.slice(0, 1).toUpperCase() + humanChoice.slice(1).toLowerCase();
    computerChoice = computerChoice.slice(0, 1).toUpperCase() + computerChoice.slice(1).toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
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

playRound(computerSelection, humanSelection);