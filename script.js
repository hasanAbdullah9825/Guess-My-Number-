'use strict';
// console.log(document.querySelector('.message'));
// document.querySelector('.message').textContent='Correct Number';

// document.querySelector('.number').textContent=13;

// document.querySelector('.score').textContent=10;
// document.querySelector('.guess').value=23;

const secreatNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secreatNumber;
document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);


    if (!guess) {

        document.querySelector('.message').textContent = 'No number given';

    }
    else if (guess === secreatNumber) {
        document.querySelector('.message').textContent = "yee! Correct number";

    }
    else if (guess > secreatNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "Too Big!";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = "You lost The game";
            document.querySelector('.score').textContent = 0;
        }

    }
    else if (guess < secreatNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "Too small!";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = "You lost The game";
            document.querySelector('.score').textContent = 0;
        }

    }
})