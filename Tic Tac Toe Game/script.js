let currentPlayer = 'X';   //Current Player Variable
const cells = document.querySelectorAll('.cell');   //Grabs all Cells from HTML document with class "cell"
let infoText = document.getElementById("turnText");  //Grabs the Info Text that displays whose turn is it
let xWinsText = document.getElementById("xwins");    //Grabs the text responsible for displaying how many wins has X accumulated  
let oWinsText = document.getElementById("owins");    //Same as xWinsText 
let drawsText = document.getElementById("draw");     //Same as previous two. But this one displays how many Draws have occured
let xWins = 0;
let oWins = 0;    //These three are responsible for counting how many Wins/Draws have occured
let draws = 0;


/* Next function called makeMove, firstly sets the content of the cell
that has been clicked on to the current player. Which is why
we check for current active player.
Next block of code are two IF statements responsible for checking
which player is active at the moment victory happens. After
checking it increments the victory points for the side that 
was active, and then resets the Board.
Afterwards we perform a Draw check, and increment DRAWS variable
and update its corresponding text.
In this method we also update the Turn Info text every time someone
makes a turn.
*/

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

/*
A simple function that checks for all possible combinations
and returns if there is one.
*/


function checkWin() {
   
    
    return (
        checkLine(0, 1, 2) || checkLine(3, 4, 5) || checkLine(6, 7, 8) ||
        checkLine(0, 3, 6) || checkLine(1, 4, 7) || checkLine(2, 5, 8) ||
        checkLine(0, 4, 8) || checkLine(2, 4, 6)
    );

}

//Also checks the contents of cells and compares them.

function checkLine(a, b, c) {
    return (
        cells[a].textContent &&
        cells[a].textContent === cells[b].textContent &&
        cells[a].textContent === cells[c].textContent
    );
}

// Checks if all cells are completed, and if there is no combination, calls a DRAW

function checkDraw() {
    return [...cells].every(cell => cell.textContent !== '');
}

/*
Grabs all Cells and then deletes all the content in them, virtually resetting the board.
Also sets X as the active player.
*/
function resetBoard() {
    
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('X', 'O');
    });
    currentPlayer = 'X';
}


