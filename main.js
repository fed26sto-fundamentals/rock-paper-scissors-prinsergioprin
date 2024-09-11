const choices = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    return choices [Math.floor(Math.random()*choices.length)];
}

function getHumanChoice() {
    let input = prompt('Type Rock, Paper, or Scissors');
    input = input.toLowerCase();
}