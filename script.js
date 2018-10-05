
var scores, roundScore, activePlayer, inactivePlayer;

init();

function init() {
    
scores = [0,0];
roundScore = 0;
activePlayer = 0;
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.querySelector('.btn-roll').addEventListener('click', rollDice);

}


function rollDice(){
    document.querySelector('.btn-hold').addEventListener('click', holdScore);
    var dice = Math.floor(Math.random() * 6) +1;
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice\\dice-' + dice + '.png';
    if (dice !== 1){
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else {
        nextPlayer();
    }
}

function holdScore(){
    scores[activePlayer] += roundScore;
     document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
     document.querySelector('.btn-hold').removeEventListener('click', holdScore);
     if(scores[activePlayer] >= 100){
         document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
         setTimeout(function(){
             document.querySelector('.dice').style.display = 'none';
         }, 1000);
         document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
         document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
         document.querySelector('.btn-hold').removeEventListener('click', holdScore);
         document.querySelector('.btn-roll').removeEventListener('click', rollDice);

     }else{
     nextPlayer(); 
     }  
 }

function nextPlayer() {
    if(scores[activePlayer] >= 100){
        document.querySelector('.btn-hold').removeEventListener('click', holdScore);
    }else {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.querySelector('#current-0').textContent = '0';
        document.querySelector('#current-1').textContent = '0';
        var current = document.querySelector('#current-' + activePlayer).textContent;
            document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
            activePlayer === 0 ? inactivePlayer = 1 : inactivePlayer = 0;
            document.querySelector('.player-' + inactivePlayer + '-panel').classList.toggle('active');
        setTimeout(function(){
            document.querySelector('.dice').style.display = 'none';
        }, 1000);
        document.querySelector('#name-0').textContent = 'Player 1';
        document.querySelector('#name-1').textContent = 'Player 2';
    }

}
document.querySelector('.btn-new').addEventListener('click', init);

// help modal
var modal = document.getElementById('helpModal');
var btn = document.getElementById("helpBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
























