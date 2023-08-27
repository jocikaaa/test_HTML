let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');
let infoText = document.getElementById("turnText");
let xWinsText = document.getElementById("xwins");
let oWinsText = document.getElementById("owins");
let drawsText = document.getElementById("draw");
let xWins = 0;
let oWins = 0;
let draws = 0;

function makeMove(cell) {
    if (!cell.textContent) {
        cell.textContent = currentPlayer;
        cell.classList.add(currentPlayer);
        
        if (checkWin()) {
            alert(currentPlayer + " wins!");
            if(currentPlayer == 'X'){
                xWins ++;
                xWinsText.innerHTML = "X Wins <br>" + xWins;
             }
             
             if(currentPlayer == 'O'){
                 oWins ++;
                 oWinsText.innerHTML = "O Wins <br>" + oWins;
             }
            resetBoard();
            
            
        } else if (checkDraw()) {
            alert("It's a draw!");
            resetBoard();
            draws ++;
            drawsText.innerHTML = "Draws <br>" + draws;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }

    if(currentPlayer == 'X'){
          infoText.innerHTML = "X Turn"
    }
    else if(currentPlayer == 'O'){
        infoText.innerHTML = "O Turn"
  }
}

function checkWin() {
    // Check rows, columns, and diagonals for a win
    
    return (
        checkLine(0, 1, 2) || checkLine(3, 4, 5) || checkLine(6, 7, 8) ||
        checkLine(0, 3, 6) || checkLine(1, 4, 7) || checkLine(2, 5, 8) ||
        checkLine(0, 4, 8) || checkLine(2, 4, 6)
    );

}

function checkLine(a, b, c) {
    return (
        cells[a].textContent &&
        cells[a].textContent === cells[b].textContent &&
        cells[a].textContent === cells[c].textContent
    );
}

function checkDraw() {
    return [...cells].every(cell => cell.textContent !== '');
}

function resetBoard() {
    
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('X', 'O');
    });
    currentPlayer = 'X';
}


