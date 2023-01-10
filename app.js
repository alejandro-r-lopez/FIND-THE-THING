/* Imports */

/* Get DOM Elements */
const cupOneEl = document.getElementById('cup-one');
const cupTwoEl = document.getElementById('cup-two');
const cupThreeEl = document.getElementById('cup-three');

const ballOne = document.getElementById('ball-one');
const ballTwo = document.getElementById('ball-two');
const ballThree = document.getElementById('ball-three');

const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
const buttonThree = document.getElementById('button-three');

const wins = document.getElementById('win-text');
const losses = document.getElementById('loss-text');

let correctGuesses = 0;
let incorrectGuesses = 0;

buttonOne.addEventListener('click', () => {
    const ballIsHere = whereIsTheBall();
    outcome('one', ballIsHere);
});

buttonTwo.addEventListener('click', () => {
    const ballIsHere = whereIsTheBall();
    outcome('two', ballIsHere);
});

buttonThree.addEventListener('click', () => {
    const ballIsHere = whereIsTheBall();
    outcome('three', ballIsHere);
});

function whereIsTheBall() {
    const hidingSpot = ['one', 'two', 'three'];
    const index = Math.floor(Math.random() * hidingSpot.length);

    const ballIsHere = hidingSpot[index];

    return ballIsHere;
}

function outcome(userGuess, ballIsHere) {
    if (ballIsHere === userGuess) {
        correctGuesses++;
    } else {
        incorrectGuesses++;
    }
    const correctAnswer = document.getElementById(`cup-${ballIsHere}`);

    wins.textContent = correctGuesses;
    losses.textContent = incorrectGuesses;

    correctAnswer.classList.toggle('hide');
}

function hideBalls() {
    ballOne.classList.toggle('hide');
    ballTwo.classList.toggle('hide');
    ballThree.classList.toggle('hide');
}
