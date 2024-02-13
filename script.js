    function getComputerChoice() {
        const choices = ["Rock", "Paper", "Scissors"];
        const randomChoice = Math.floor(Math.random() * choices.length);
        return choices[randomChoice];
      }

const choice = getComputerChoice();
console.log(choice)

      function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection === computerSelection)
        {
          return "It's a tie! You both chose " + playerSelection;
        } 
        else if (
          (playerSelection === "Paper" && computerSelection === "Rock")
          || (playerSelection === "Rock" && computerSelection === "Scissors")
          || (playerSelection === "Scissors" && computerSelection === "Paper")
          )
          {
          return "You win! " + playerSelection + " beats " + computerSelection;
          }
        else {
          return "You lose! " + computerSelection + " beats " + playerSelection;
        }
      }

      const playerSelection = "Rock";
      const computerSelection = getComputerChoice();
      console.log(playRound(playerSelection, computerSelection));

      function playGame() {
        let playerScore = 0;
        let computerScore = 0;
    
        for (let i = 0; i < 5; i++) {
            const playerChoice = prompt("Enter your choice (Rock, Paper, or Scissors):");
            const computerChoice = getComputerChoice();
            
            console.log("Round " + (i + 1));
            console.log("Player: " + playerChoice);
            console.log("Computer: " + computerChoice);
            
            const result = playRound(playerChoice, computerChoice);
            console.log(result);
    
            if (result.includes("Win")) {
                playerScore++;
            } else if (result.includes("Lose")) {
                computerScore++;
            }
        }
    
        console.log("Game Over!");
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);
    
        if (playerScore > computerScore) {
            console.log("Congratulations! You win the game!");
        } else if (computerScore > playerScore) {
            console.log("Sorry, you lose the game. Try again!");
        } else {
            console.log("It's a tie game!");
        }
    }
    
    playGame();