function getComputerChoice() {
    let rpsArray = ["Rock", "Paper", "Scissors"];
    return rpsArray[Math.floor(Math.random() * 3)];
}

let roundCount = 1;
let humanScore = 0;
let computerScore = 0;

let div = document.querySelector("#mainDiv");

let buttonContainer = document.createElement("div");

let rockButton = document.createElement("button");
rockButton.textContent = "Rock";
let paperButton = document.createElement("button");
paperButton.textContent = "Paper";
let scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";

buttonContainer.appendChild(rockButton);
buttonContainer.appendChild(paperButton);
buttonContainer.appendChild(scissorsButton);

div.appendChild(buttonContainer);

let roundDiv = document.createElement("div");
let roundChoiceHuman = document.createElement("div");
let roundChoiceComputer = document.createElement("div");
let roundResultDiv = document.createElement("div");
let roundScore = document.createElement("div");
let finalWinnerDiv = document.createElement("div");

div.appendChild(roundDiv);
div.appendChild(roundChoiceHuman);
div.appendChild(roundChoiceComputer);
div.appendChild(roundResultDiv);
div.appendChild(roundScore);
div.appendChild(finalWinnerDiv);

function playRound(computerChoice, humanChoice) {
    roundDiv.textContent = `Round: ${roundCount}`;
    roundChoiceHuman.textContent = `Human chose: ${humanChoice}`;
    roundChoiceComputer.textContent = `Computer chose: ${computerChoice}`;
    

    if (humanChoice === computerChoice) {
        roundResultDiv.textContent = "It's a tie, GGs that was a tight round!";
    }
    else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")) {
        roundResultDiv.textContent = "The player has won the Round GGs!";
        humanScore++;
    }
    else {
        roundResultDiv.textContent = "Ouch! The computer won this round!";
        computerScore++;
    }
    

    roundScore.textContent = `Player ${humanScore} - Computer ${computerScore}`;
    roundCount++;
    checkWinner();
}

function checkWinner() {
    if (roundCount === 6) {
        if (humanScore === computerScore) {
            finalWinnerDiv.textContent = "No winner! It's a tie GGs to both players!";
        }
        else if (humanScore > computerScore) {
            finalWinnerDiv.textContent = "Player Wins! Good Game my guy!";
        }
        else {
            finalWinnerDiv.textContent = "Computer wins! GGs my robot dude!";
        }
        roundCount = 1;
        humanScore = 0;
        computerScore = 0;
    }
}

rockButton.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    playRound(computerSelection, "Rock");
});
paperButton.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    playRound(computerSelection, "Paper");
});
scissorsButton.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    playRound(computerSelection, "Scissors");
});
