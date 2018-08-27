/* 
CreateData：8/27
CreateAuth:Kelly
*/


//variable defined
var scores,roundScores,activityPlayer;
scores = [0,0];
roundScores = 0;
activityPlayer = 0;

dice = Math.floor(Math.random()*6+1);

document.querySelector('current-' + activityPlayer).innerHTML = '<em>' + dice +'</em>';
document.querySelector('dice').style.display = 'none';  //hided dice


//event handler
/*
1、what's event
2、how do event process
3、how do notify for receiver 
 * */ 