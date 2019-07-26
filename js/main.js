/* - When the game loads:
    - Initialize all state variables by calling init()
    - Update the display by calling render()

- When a player "drops" a disc by clicking on a column marker:
    - Get the idx of the column clicked by extracting it from the marker's id
    - If the player didn't clicked a marker or if there's a winner/tie exit the function
    - Compute the idx of the first available "row" (first zero in the column's array).
    - If there is no zero in the column, exit the function
    - Update the column array in the board array with the value for whichever player's turn it is (1 or -1)
    - Update the winner variable by calling getWinner()
    - Switch turns
    - Call render() to update the display

- Render logic
    - Render the board - for each nested column array in the board array:
        - Show/hide the marker above the column depending upon if the column array has any zeroes.
        - For each row in the column array:
            - Select the element in the HTML that maps to the current column and row
            - Set the element's background color by looking up the color for the value (0, 1, or -1)
    - Render the display message:
        - If there's a winner/tie
            - If it's a tie, update the message element with a tie message
            - Otherwise, update with a congrats player's color message
        - Otherwise, update the message element with which player's turn (color) it is  */

/*----- Gameplan -----*/ 
/* 
. Generate:
    Init()
    *Board 
    *Players
    *turn
    *clickedCells

. Function: Track game
    function gameKeeper(){
        if (clickedCells === 42) {
            winner()
        }
    }

. function isRowFull(){
    
}

. Function: When a player clicks a column
    function play(){
        turn = !
        if (turn) {
            change color of next cell in target colum to player1.color
        } else {
            change color of target to player2.color
        }
    }
        
    . change color of next cell in clicked column
        Clicked column logic:
            * Horizontal
            * Vertical
            * Diagonal


. Function Winner: 
    function winner (){
        if (player1.score > player2.score) {        
            console.log('Player1 wins)
        } else if (player1.score < player2.score) {
            console.log('Player2 wins)
        } else {
            console.log('Tie')
        }
    }


    

    The winner function will return winner

 */
/*----- constants -----*/ 

let board, turn, winner;

/* const Players = [player1, player2]
let player1 = {
    color: 'orange',
    score: 0
}
let player2 = {
    color: 'teal',
    score: 0
} */


//Keep track of cells clicked:
//const cellsClicked = 42

/*----- app's state (variables) -----*/ 

//Each cell needs to know if it's clicked and player who clicked it



/*----- cached element references -----*/ 
/*----- event listeners -----*/ 
/*----- functions -----*/

function Initialize() {
    turn = true,
    winner = null
    board = Array(6).fill(Array(7).fill(null))   
}

Initialize()
console.log(board)

function iterateBoard(){
    board.forEach(function(rowArr, colIdx){
        rowArr.forEach(function(cell, rowIdx){
            console.log('cell position: ' + colIdx + rowIdx)
        })
    })
}

iterateBoard()
 



