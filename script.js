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