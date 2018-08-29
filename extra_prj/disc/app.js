/* 
CreateData：8/27
CreateAuth:Kelly
*/


//variable defined
var scores, roundScores, activityPlayer;
scores = [0, 0];
roundScores = 0;
activityPlayer = 0;

var rollDice = document.getElementsByClassName('btn-roll');
document.querySelector('#dice-1').style.display = 'none';
document.querySelector('#dice-2').style.display = 'none';
rollDice[0].addEventListener('click', function () {
  // rondom numer
  var dice = Math.floor(Math.random()* 6 + 1);
  console.log('dice:'+dice);
  document.querySelector('#dice-1').src = 'dice-' + dice + '.png';
  document.querySelector('#dice-1').style.display = 'block';
  if (dice !== 1) {
    roundScores += dice;
    document.querySelector('#current-' + activityPlayer).textContent = roundScores;
    console.log('roundScores:'+roundScores);
  } else {
    //switch player
    nextPlayer();
  }
});

var hold = document.getElementsByClassName('btn-hold');
hold[0].addEventListener('click',function () {
  //save date
  scores[activityPlayer] += roundScores;
  console.log("total:"+scores[activityPlayer]);
  document.querySelector('#score-'+activityPlayer).textContent = scores[activityPlayer];
  if(scores[activityPlayer]>=100){
    alert('Player-'+activityPlayer+ ' Congratulations on your win ');
  }
  //switch player
  nextPlayer();
});

function nextPlayer() {
  roundScores = 0;
  document.querySelector('#dice-1').style.display = 'none';
  document.querySelector('#current-0').textContent = 0;
  document.querySelector('#current-1').textContent = 0;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  activityPlayer === 0 ? activityPlayer = 1 : activityPlayer = 0;
}
