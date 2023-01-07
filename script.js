let playerScore = 0;
let computerScore = 0;
let computerSelection;
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const containerDiv = document.querySelector('.score-message-container');
const playerScoreMsg = document.querySelector('.player-score');
const computerScoreMsg = document.querySelector('.computer-score');
const drawMsg = document.querySelector('.draw-msg')

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
    switch(playerSelection)
    {
        case "rock":
            if(computerSelection === "paper")
            {
                computerScore++;
                computerScoreMsg.textContent = `Computer score: ${computerScore}`;
            }
            else if (computerSelection === "scissors")
            {
                playerScore++;
                playerScoreMsg.textContent = `Player score: ${playerScore}`;
            }
            else if (computerSelection === "rock")
            {
                drawMsg.textContent = "It's a draw";
            }
            break;
        case "paper":
            if(computerSelection === "rock")
            {
                playerScore++;
                playerScoreMsg.textContent = `Player score: ${playerScore}`;
            }
            else if (computerSelection === "scissors")
            {
                computerScore++;
                computerScoreMsg.textContent = `Computer score: ${computerScore}`;
            }
            else if(computerSelection === "paper")
            {
                drawMsg.textContent = "It's a draw";
            }
            break;
        case "scissors":
            if(computerSelection === "paper")
            {
                playerScore++;
                playerScoreMsg.textContent = `Player score: ${playerScore}`;
            }
            else if (computerSelection === "rock")
            {
                computerScore++;
                computerScoreMsg.textContent = `Computer score: ${computerScore}`;
            }
            else if(computerSelection === "scissors")
            {
                drawMsg.textContent = "It's a draw";
            }
            break;
    }
}

function winner()
{
    if(playerScore === 5)
        drawMsg.textContent = "You win";
    else if(computerScore === 5)
        drawMsg.textContent = "You loose";
        
    playerScore = 0;
    computerScore = 0;        
    playerScoreMsg.textContent = `Player score: ${playerScore}`;
    computerScoreMsg.textContent = `Computer score: ${computerScore}`;
    
}

rockBtn.addEventListener('click', () =>
{
    computerSelection = getComputerChoice();
    playRound("rock", computerSelection);
    if(playerScore === 5 || computerScore === 5)
    {
        winner();
    }
});

paperBtn.addEventListener('click', () =>
{
    computerSelection = getComputerChoice();
    playRound("paper", computerSelection);
    if(playerScore === 5 || computerScore === 5)
    {
        winner();
    }
});

scissorsBtn.addEventListener('click', () =>
{
    computerSelection = getComputerChoice();
    playRound("scissors", computerSelection);
    if(playerScore === 5 || computerScore === 5)
    {
        winner();
    }
});


