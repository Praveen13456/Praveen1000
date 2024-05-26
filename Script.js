let player1Choice = '';
let player2Choice = '';

function startGame() {
    document.getElementById('tutorial').classList.add('hidden');
    document.getElementById('game').classList.remove('hidden');
}

function makeChoice(choice, player) {
    if (player === 1) {
        player1Choice = choice;
        document.getElementById('player1').classList.add('hidden');
        document.getElementById('player2').classList.remove('hidden');
    } else {
        player2Choice = choice;
        determineWinner();
    }
}

function determineWinner() {
    let result = '';

    if (player1Choice === player2Choice) {
        result = "It's a tie!";
    } else if (
        (player1Choice === 'rock' && player2Choice === 'scissors') ||
        (player1Choice === 'scissors' && player2Choice === 'paper') ||
        (player1Choice === 'paper' && player2Choice === 'rock')
    ) {
        result = 'Player 1 wins!';
    } else {
        result = 'Player 2 wins!';
    }

    document.getElementById('popup-text').innerText = result + ` (Player 1 chose ${player1Choice}, Player 2 chose ${player2Choice})`;
    document.getElementById('popup').style.display = 'block';
    document.getElementById('reset-btn').classList.remove('hidden');
}

function resetGame() {
    player1Choice = '';
    player2Choice = '';
    document.getElementById('popup').style.display = 'none';
    document.getElementById('player1').classList.remove('hidden');
    document.getElementById('player2').classList.add('hidden');
    document.getElementById('tutorial').classList.remove('hidden');
    document.getElementById('game').classList.add('hidden');
    document.getElementById('reset-btn').classList.add('hidden');
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}