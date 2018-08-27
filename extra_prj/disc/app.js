/* 
CreateData：8/27
CreateAuth:Kelly
*/

var scores,roundScores,activityPlayer;
scores = [0,0];
roundScores = 0;
activityPlayer = 0;

dice = Math.floor(Math.random()*6+1);

document.querySelector('current-' + activityPlayer).innerHTML = '<em>' + dice +'</em>';
