'use strict';




let secreatNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore=0;


const game = function () {

    const guess = Number(document.querySelector('.guess').value);


    if (!guess) {

        document.querySelector('.message').textContent = 'No number given';

    }
    else if (guess === secreatNumber) {
        document.querySelector('.message').textContent = "yee! Correct number";
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';

        if(score>highScore){
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        }

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


}

document.querySelector('.check').addEventListener('click', game);
document.querySelector('.again').addEventListener('click', function () {
    secreatNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
   
    game();

});
