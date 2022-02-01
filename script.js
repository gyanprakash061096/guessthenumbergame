'use strict';

const number= Math.trunc(Math.random()*20)+1;

let score=20;
let highScore=0;


document.querySelector('.check').addEventListener('click',function(){
  const guess=  Number(document.querySelector('.guess').value);

  console.log(guess);

if(!guess){
  document.querySelector('.message').textContent= 'No number !';
}
else if(guess===number)
{
    document.querySelector('.message').textContent = 'Woohoo ! Correct Number !';
    score++;
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width='30rem';
    document.querySelector('.number').textContent= number;

    if(score>highScore)
    {
        highScore=score;
        document.querySelector('.highscore').textContent=highScore;
    }
}
else if(guess!==number)
{
    if(score>1)
    {
        document.querySelector('.message').textContent = guess>number?' Your Guess is Too high !':' Your Guess is Too Low !';
        score--;
        document.querySelector('.score').textContent=score;
    }
    else
    {
        document.querySelector('.message').textContent= 'You Lost the Game !';
        document.querySelector('body').style.backgroundColor='#25b';
        document.querySelector('.score').textContent=0;
    }
 }
// else if(guess>number)
// {
//     if(score>1)
//     {
//         document.querySelector('.message').textContent = ' Your Guess is Too high !';
//         score--;
//         document.querySelector('.score').textContent=score;
//     }
//     else
//     {
//         document.querySelector('.message').textContent= 'You Lost the Game !';
//         document.querySelector('body').style.backgroundColor='#25b';
//         document.querySelector('.score').textContent=0;
//     }
// }
// else if(guess<number)
// {
//     if(score>1)
//     {
//         document.querySelector('.message').textContent = ' Your Guess is Too Low !';
//         score--;
//         document.querySelector('.score').textContent=score;
//     }
//     else
//     {
//         document.querySelector('.message').textContent= 'You Lost the Game !';
//         document.querySelector('body').style.backgroundColor='#252b';
//         document.querySelector('.score').textContent=0;
//     }
// }
document.querySelector('.score').textContent= score;

});

// AGAIN button:
document.querySelector('.again').addEventListener('click', function(){

    score=20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent= '?';
    document.querySelector('.message').textContent='Start Guessing. . .';
    document.querySelector('.guess').value=' ';
    document.querySelector('body').style.backgroundColor='#222';
    const number= Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').style.width='15rem';

})