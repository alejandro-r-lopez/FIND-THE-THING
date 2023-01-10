/* Imports */

/* Get DOM Elements */
const cardOneEl = document.getElementById('card-one');
const cardTwoEl = document.getElementById('card-two');
const cardThreeEl = document.getElementById('card-three');

const queenOne = document.getElementById('queen-one');
const queenTwo = document.getElementById('queen-two');
const queenThree = document.getElementById('queen-three');

const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
const buttonThree = document.getElementById('button-three');

const wins = document.getElementById('win-text');
const losses = document.getElementById('loss-text');

let correctGuesses = 0;
let incorrectGuesses = 0;

buttonOne.addEventListener('click', () => {
    const queenIsHere = whereIsThequeen();
    outcome('one', queenIsHere);
});

buttonTwo.addEventListener('click', () => {
    const queenIsHere = whereIsThequeen();
    outcome('two', queenIsHere);
});

buttonThree.addEventListener('click', () => {
    const queenIsHere = whereIsThequeen();
    outcome('three', queenIsHere);
});

function whereIsThequeen() {
    const hidingSpot = ['one', 'two', 'three'];
    const index = Math.floor(Math.random() * hidingSpot.length);

    const queenIsHere = hidingSpot[index];

    return queenIsHere;
}

function outcome(userGuess, queenIsHere) {
    if (queenIsHere === userGuess) {
        correctGuesses++;
    } else {
        incorrectGuesses++;
    }
    const correctAnswer = document.getElementById(`card-${queenIsHere}`);

    wins.textContent = correctGuesses;
    losses.textContent = incorrectGuesses;

    correctAnswer.classList.toggle('hide');
}

function hidequeens() {
    queenOne.classList.toggle('hide');
    queenTwo.classList.toggle('hide');
    queenThree.classList.toggle('hide');
}
