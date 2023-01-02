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
        case 2:
        case 5:
                return "paper";
        case 3:
        case 4:
                return "scissors";            
    }
}

function playRound(playerSelection, computerSelection)
{
    playerSelection.toLowerCase();

    switch(playerSelection)
    {
        case "rock":
            if(computerSelection === "paper")
                computerScore++;
            else if (computerSelection === "scissors")
                playerScore++;
            break;
        case "paper":
            if(computerSelection === "rock")
                playerScore++;
            else if (computerSelection === "scissors")
                computerScore++ ;
            break;
        case "scissors":
            if(computerSelection === "paper")
                playerScore++;
            else if (computerSelection === "rock")
                computerScore++;
            break;
    }
}

function game()
{
    for(let i = 1; i <= 5; i++)
    {        
        let playerSelection = prompt("Rock, Paper of Scissors?");
        let computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);

        console.log(`Round ${i}, Player Score: ${playerScore} and
        Computer Score ${computerScore}`);
    }

    if(playerScore < computerScore)
        console.log(`Computer wins with ${computerScore} points!`);
    else if(playerScore > computerScore)
        console.log(`Players wins with ${playerScore} points!`);
    else
        console.log("It's a draw!");
}

game();
