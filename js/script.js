// Pseudocode:
// Game consist of 5 rounds.
// SET humanScore = 0, computerScore = 0
// FOR each round:
//     GET user chice via input
//     GET random computer choice
//     DETERMINE who wins and update scores
// ENDFOR
// IF humanScore > computerScore THEN PRINT "YOU WIN!"
// ELSE IF humanScore < computerScore THEN PRINT "COMPUTER WINS!"
// ELSE PRINT "DRAW"
// ENDIF

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    if(choice === 1){
        return "rock";
    }else if(choice === 2){
        return "paper";
    }else{
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Enter your choice:\nRock/Paper/Scissors");
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(round, humanChoice, computerChoice){
    console.log(`Round: ${round}`);
    if(humanChoice === computerChoice){
        return;
    }else{
        if(humanChoice === "rock"){
            if(computerChoice === "paper"){
                computerScore++;
                return false;
            }else{
                humanScore++;
                return true;
            }
        }else if(humanChoice === "paper"){
            if(computerChoice === "rock"){
                humanScore++;
                return true;
            }else{
                computerScore++;
                return false;
            }
        }else{
            if(computerChoice === "rock"){
                computerScore++;
                return false;
            }else{
                humanScore++;
                return true;
            }
        }
    }
}

function showRoundResult(humanSelection, computerSelection, result){
    humanSelection = humanSelection.at(0).toUpperCase() + humanSelection.slice(1);
    computerSelection = computerSelection.at(0).toUpperCase() + computerSelection.slice(1);
    if(result === undefined){
        console.log(`${humanSelection} is what computer has also chosen!`);
    }else if(result){
        console.log(`You win! ${humanSelection} beats ${computerSelection}`);
    }else{
        console.log(`Computer wins! ${computerSelection} beats ${humanSelection}`);
    }
}

function showFinalResult(){
    if(humanScore > computerScore){
        console.log("Game over. You Win!");
    }else if(humanScore < computerScore){
        console.log("Game over. Computer Wins!");
    }else{
        console.log("Game over. Draw!");
    }
}

function playGame(){
    for(let i = 0; i<5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        const result = playRound(i+1, humanSelection, computerSelection);
        showRoundResult(humanSelection, computerSelection, result);
    }
    showFinalResult();
}

playGame();
