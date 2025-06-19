/* Updated JS/tictactoe.js */
let activePlayer = 'X';
let selectedSquares = [];
let gameActive = true;

const placeSound = new Audio('Media/place.mp3');
const winSound = new Audio('Media/win.mp3');
const tieSound = new Audio('Media/tie.mp3');

function placeXOrO(squareNumber) {
    if (!selectedSquares.some(element => element.includes(squareNumber)) && gameActive) {
        const select = document.getElementById(squareNumber);

        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/new-x.png")';
        } else {
            select.style.backgroundImage = 'url("images/new-o.png")';
        }

        placeSound.play();
        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions();

        if (gameActive) {
            activePlayer = (activePlayer === 'X') ? 'O' : 'X';
            document.getElementById("status").textContent = `${activePlayer}'s turn`;
        }
    }
}

function checkWinConditions() {
    if (arrayIncludes('0X', '1X', '2X')) return;
    if (arrayIncludes('3X', '4X', '5X')) return;
    if (arrayIncludes('6X', '7X', '8X')) return;
    if (arrayIncludes('0X', '3X', '6X')) return;
    if (arrayIncludes('1X', '4X', '7X')) return;
    if (arrayIncludes('2X', '5X', '8X')) return;
    if (arrayIncludes('0X', '4X', '8X')) return;
    if (arrayIncludes('2X', '4X', '6X')) return;

    if (arrayIncludes('0O', '1O', '2O')) return;
    if (arrayIncludes('3O', '4O', '5O')) return;
    if (arrayIncludes('6O', '7O', '8O')) return;
    if (arrayIncludes('0O', '3O', '6O')) return;
    if (arrayIncludes('1O', '4O', '7O')) return;
    if (arrayIncludes('2O', '5O', '8O')) return;
    if (arrayIncludes('0O', '4O', '8O')) return;
    if (arrayIncludes('2O', '4O', '6O')) return;

    if (selectedSquares.length >= 9) {
        document.getElementById("status").textContent = "It's a tie!";
        tieSound.play();
        gameActive = false;
        setTimeout(resetGame, 2000);
    }
}

function arrayIncludes(a, b, c) {
    const win = selectedSquares.includes(a) && selectedSquares.includes(b) && selectedSquares.includes(c);
    if (win) {
        const combo = [a, b, c].map(item => parseInt(item[0]));
        switch (combo.join(',')) {
            case '0,1,2': drawWinLine(75, 100, 525, 100); break;
            case '3,4,5': drawWinLine(75, 250, 525, 250); break;
            case '6,7,8': drawWinLine(75, 400, 525, 400); break;
            case '0,3,6': drawWinLine(100, 75, 100, 525); break;
            case '1,4,7': drawWinLine(250, 75, 250, 525); break;
            case '2,5,8': drawWinLine(400, 75, 400, 525); break;
            case '0,4,8': drawWinLine(75, 75, 525, 525); break;
            case '2,4,6': drawWinLine(525, 75, 75, 525); break;
        }
        document.getElementById("status").textContent = `${a[1]} wins!`;
        winSound.play();
        gameActive = false;
        return true;
    }
    return false;
}

function disableClick() {
    document.querySelectorAll('td').forEach(cell => {
        cell.style.pointerEvents = 'none';
    });
}

function resetGame() {
    for (let i = 0; i < 9; i++) {
        document.getElementById(i.toString()).style.backgroundImage = '';
    }
    selectedSquares = [];
    activePlayer = 'X';
    gameActive = true;
    document.getElementById("status").textContent = "X's turn";
    document.querySelectorAll('td').forEach(cell => {
        cell.style.pointerEvents = 'auto';
    });
    const canvas = document.getElementById('win-line');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawWinLine(x1, y1, x2, y2) {
    const canvas = document.getElementById('win-line');
    const ctx = canvas.getContext('2d');

    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    disableClick();

    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        resetGame();
    }, 2000);
}
