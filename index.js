//Computer choice function
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return "Rock";
    } else if (computerChoice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

let computerResult = getComputerChoice();


//Human choice function
function getHumanChoice(humanChoice) {
    
    if (humanChoice === "Rock") {
        return "Rock";
    } else if (humanChoice === "Paper") {
        return "Paper";
    } else {
        return "Scissors";
    }
}

let getChoice = prompt("What did you choose?");

let humanResult = getHumanChoice(getChoice);

//Player score variables
let humanScore = 0;
let computerScore = 0;

