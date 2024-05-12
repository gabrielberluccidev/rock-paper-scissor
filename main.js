let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let number = Math.floor(Math.random() * 3);

  if (number === 0) {
    return "rock";
  } else if (number === 1) {
    return "paper";
  } else {
    return "scissor";
  }
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper or Scissor: ");
  choice = choice.toLowerCase();

  return choice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Tie!");
    computerScore += 1;
    humanScore += 1;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You won! Paper Beats Rock");
    humanScore += 1;
  } else if (humanChoice === "paper" && computerChoice === "scissor") {
    console.log("You lose! Scissor beats Paper");
    computerScore += 1;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats Rock");
    computerScore += 1;
  } else if (humanChoice === "rock" && computerChoice === "scissor") {
    console.log("You won! Rock beats Scissor");
    humanScore += 1;
  } else if (humanChoice === "scissor" && computerChoice === "paper") {
    console.log("You won! Scissor beats Paper");
    humanScore += 1;
  } else if (humanChoice === "scissor" && computerChoice === "rock") {
    console.log("You lose! Rock beats Scissor");
    computerScore += 1;
  }
}

function playGame() {
  let round = 0;

  while (round < 5) {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
    round += 1;
  }

  if (computerScore > humanScore) {
    alert(
      `You lose! The computer score was ${computerScore} and your score was ${humanScore}`
    );
  } else {
    alert(
      `You won! The computer score was ${computerScore} and your score was ${humanScore}`
    );
  }
}

playGame();
