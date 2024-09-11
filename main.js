const choices = ['rock', 'paper', 'scissors']
const winners = [];

function playGame() {
    for(let i = 1; i <= 5; i++) {
        playRound(i);
    }
    logWins();
}

function playRound(round) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const winner = checkWinner(humanSelection, computerSelection);
    winners.push(winner);
    logRound(humanSelection, computerSelection, winner, round);
}

function getComputerChoice() {
    return choices [Math.floor(Math.random()*choices.length)];
}

function getHumanChoice() {
    let input = prompt('Type Rock, Paper, or Scissors');
    while(input == null) {
        input = prompt('Type Rock, Paper, or Scissors');
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while(check == false) {
        input = prompt('Type Rock, Paper, or Scissors. Spelling needs to be exact, but capitalization doesnt matter.');
        while(input == null) {
            input = prompt('Type Rock, Paper, or Scissors');
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

function validateInput(choice) {
    return choices.includes(choice);
    }

function checkWinner(choiceH, choiceC) {
    if(choiceH === choiceC) {
        return 'Tie';
    } else if(
        (choiceH === 'rock' && choiceC === 'scissors') ||
        (choiceH === 'paper' && choiceC === 'rock') ||
        (choiceH === 'scissors' && choiceC === 'paper')
    ) {
        return 'Human';
    } else {
        return 'Computer';
    }
}

function logWins() {
    let humanWins = winners.filter((item) => item == 'Human').length;
    let computerWins = winners.filter ((item) => item == 'Computer').length;
    let ties = winners.filter ((item) => item == 'Tie').length;
    console.log('Results:')
    console.log('Human Wins: ', humanWins);
    console.log('Computer Wins: ', computerWins);
    console.log('Ties: ', ties);
}

function logRound(getHumanChoice, getComputerChoice, winner, round) {
    console.log('Round:', round);
    console.log('Human Chose:', getHumanChoice);
    console.log('Computer Chose:', getComputerChoice);
    console.log(winner, 'Won the Round!');
    console.log('----------------------------');
}