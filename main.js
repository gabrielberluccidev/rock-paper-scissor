let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.querySelector(".results");
const result = document.createElement("p");
const score = document.createElement("p");
const final = document.createElement("p");

resultsDiv.appendChild(result);
resultsDiv.appendChild(score);
resultsDiv.appendChild(final);

function getHumanChoice(buttons) {}

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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    result.textContent = "Tie";
    computerScore += 1;
    humanScore += 1;
    score.textContent = `Human score: ${humanScore}, computer score: ${computerScore}`;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    result.textContent = "You won! Paper Beats Rock";
    humanScore += 1;
    score.textContent = `Human score: ${humanScore}, computer score: ${computerScore}`;
  } else if (humanChoice === "paper" && computerChoice === "scissor") {
    result.textContent = "You lose! Scissor beats Paper";
    computerScore += 1;
    score.textContent = `Human score: ${humanScore}, computer score: ${computerScore}`;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    result.textContent = "You lose! Paper beats Rock";
    computerScore += 1;
    score.textContent = `Human score: ${humanScore}, computer score: ${computerScore}`;
  } else if (humanChoice === "rock" && computerChoice === "scissor") {
    result.textContent = "You won! Rock beats Scissor";
    humanScore += 1;
    score.textContent = `Human score: ${humanScore}, computer score: ${computerScore}`;
  } else if (humanChoice === "scissor" && computerChoice === "paper") {
    result.textContent = "You won! Scissor beats Paper";
    humanScore += 1;
    score.textContent = `Human score: ${humanScore}, computer score: ${computerScore}`;
  } else if (humanChoice === "scissor" && computerChoice === "rock") {
    result.textContent = "You lose! Rock beats Scissor";
    computerScore += 1;
    score.textContent = `Human score: ${humanScore}, computer score: ${computerScore}`;
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let score = 0;
    const humanChoice = button.value;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    if (humanScore === 5) {
      if (humanScore > computerScore) {
        final.textContent = "Congrats! You won.";
      } else {
        final.textContent = "You loose!";
      }
    }
    if (computerScore === 5) {
      if (computerScore > humanScore) {
        final.textContent = "You loose!";
      } else {
        final.textContent = "Congrats! You won.";
      }
    }
  });
});

// function playGame() {
//   let round = 0;

//   while (round < 5) {
//     const computerSelection = getComputerChoice();
//     const humanSelection = getHumanChoice();
//     playRound(humanSelection, computerSelection);
//     round += 1;
//   }

//   if (computerScore > humanScore) {
//     alert(
//       `You lose! The computer score was ${computerScore} and your score was ${humanScore}`
//     );
//   } else {
//     alert(
//       `You won! The computer score was ${computerScore} and your score was ${humanScore}`
//     );
//   }
// }

// playGame();
