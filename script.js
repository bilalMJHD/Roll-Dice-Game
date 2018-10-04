
var scores, roundScore, activePlayer;

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
}

document.querySelector('.btn-roll').addEventListener('click', function(){
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
});
document.querySelector('.btn-hold').addEventListener('click', function(){
   scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    if(scores[activePlayer] >= 100){
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
        setTimeout(function(){
            document.querySelector('.dice').style.display = 'none';
        }, 1000);
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.btn-hold').removeEventListener
    }else{
    nextPlayer(); 
    }
    
    
});

function nextPlayer() {
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.querySelector('#current-0').textContent = '0';
        document.querySelector('#current-1').textContent = '0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        setTimeout(function(){
            document.querySelector('.dice').style.display = 'none';
        }, 1000);
        document.querySelector('#name-0').textContent = 'Player 1';
        document.querySelector('#name-1').textContent = 'Player 2';
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
























