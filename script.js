let playerScore = 0;
let computerScore = 0;

function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 6) + 1;

    switch(choice)
    {
        case 1:
        case 6:
                return "rock";
            break;
        case 2:
        case 5:
                return "paper";
            break;
        case 3:
        case 4:
                return "scissors";            
            break;
    }
}

function playRound(playerSelection, computerSelection)
{
    playerSelection.toLowerCase();

    switch(playerSelection)
    {
        case "rock":
            if(computerSelection === "paper")
                return "You loose! Paper beats Rock";
            else if (computerSelection === "scissors")
                return "You win! Rock beats Scissors"; 
            else
                return "It's a draw!";
            break;
        case "paper":
            if(computerSelection === "paper")
                return "It's a draw!";
            else if (computerSelection === "scissors")
                return "You loose! Scissors beats Paper"; 
            else
                return "You win! Paper beats Rock";
            break;
        case "scissors":
            if(computerSelection === "paper")
                return "You win! Scissors beats Paper";
            else if (computerSelection === "scissors")
                return "It's a draw!"; 
            else
                return "You loose! Rock beats Scissors";
            break;
    }
}
