
function getComChoice() {
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = 'rock';
    } else if (computerChoice <= 0.67) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

var result = document.getElementById('result');
function play(playerChoice) {
    var computerChoice = getComChoice();
    if (playerChoice === computerChoice) {
        result.innerHTML = 'The computer chose ' + computerChoice + '. It is a tie!';
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        result.innerHTML = 'Computer chose ' + computerChoice + '. You win!';
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        result.innerHTML = 'Computer chose ' + computerChoice + '. You lose!';
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        result.innerHTML = 'Computer chose ' + computerChoice + '. You win!';
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        result.innerHTML = 'Computer chose ' + computerChoice + '. You lose!'
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        result.innerHTML = 'Computer chose ' + computerChoice + '. You lose!';
    } else if (playerChoice === 'paper' && computerChoice === 'rock')
        result.innerHTML = 'Computer chose ' + computerChoice + '. You win!'
    else {
        return 'What is going on?!'
    }

}

