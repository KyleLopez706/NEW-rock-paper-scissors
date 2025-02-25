let playerScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const tieText = document.querySelector('.tie-text');

const scoreOutput = document.querySelector('.you-border');
const computerOutput = document.querySelector('.computer-border');

const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

const playerChoiceImage = document.getElementById('player-choice-img');
const computerChoiceImage = document.getElementById('computer-choice-img');

const choiceImages = {
    rock: 'rock.png',         
    paper: 'paper.png',
    scissors: 'scissors.png'
};

rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () => playRound('scissors'));




const getComputerChoice = () => {
     const random = Math.floor(Math.random() * choices.length); 
    return choices[random];
}




const determineWinner = (playerChoice, computerChoice) => {
    if(playerChoice == computerChoice) {
        tieText.textContent = 'Tie!';
        }
    else if(playerChoice == 'rock' && computerChoice == 'scissors' || 
        playerChoice == 'paper' && computerChoice == 'rock' || 
        playerChoice == 'scissors' && computerChoice == 'paper') {
    playerScore++
    tieText.textContent = 'You Win!'
    }
    else {
    computerScore++ 
     tieText.textContent = 'Computer Wins';
    }
    updateScoreBoard(playerChoice, computerChoice);
    game();
}

const game = () => {
    if(playerScore == 5) {
        tieText.textContent ="You have beaten the Computer!";
        resetScores()
    }
    else if(computerScore == 5) {
        tieText.textContent = "The Computer has beaten you!";
        resetScores()
    }
}

const updateScoreBoard = (playerChoice, computerChoice) => {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    playerChoiceImage.src = choiceImages[playerChoice];

    computerChoiceImage.src = choiceImages[computerChoice];
}


const playRound = (playerChoice) => {
    const computerChoice = getComputerChoice();
    determineWinner(playerChoice, computerChoice);
}

const resetScores = () => {
    playerScore = 0;
    computerScore = 0;
}










