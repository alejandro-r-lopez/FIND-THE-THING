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
const total = document.getElementById('total');

let correctGuesses = 0;
let incorrectGuesses = 0;
let totalGuesses = 0;

buttonOne.addEventListener('click', () => {
    const queenIsHere = whereIsTheQueen();
    outcome('one', queenIsHere);
});

buttonTwo.addEventListener('click', () => {
    const queenIsHere = whereIsTheQueen();
    outcome('two', queenIsHere);
});

buttonThree.addEventListener('click', () => {
    const queenIsHere = whereIsTheQueen();
    outcome('three', queenIsHere);
});

function whereIsTheQueen() {
    const hidingSpot = ['one', 'two', 'three'];
    const index = Math.floor(Math.random() * hidingSpot.length);

    const queenIsHere = hidingSpot[index];

    return queenIsHere;
}

function outcome(userGuess, queenIsHere) {
    removeQueens();

    if (queenIsHere === userGuess) {
        correctGuesses++;
    } else {
        incorrectGuesses++;
    }
    // const correctAnswer = document.getElementById(`card-${queenIsHere}`);

    totalGuesses++;

    wins.textContent = correctGuesses;
    losses.textContent = incorrectGuesses;
    total.textContent = totalGuesses;

    if (queenIsHere === 'one') {
        queenOne.classList.toggle('hide');
    }
    if (queenIsHere === 'two') {
        queenTwo.classList.toggle('hide');
    }
    if (queenIsHere === 'three') {
        queenThree.classList.toggle('hide');
    }
}

function removeQueens() {
    queenOne.classList.add('hide');
    queenTwo.classList.add('hide');
    queenThree.classList.add('hide');
}
