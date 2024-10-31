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
