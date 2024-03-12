// 1. Display initial empty 3x3 board
// 2. Player marks a move
// 3. Computer marks a move
// 4. Display updated board
// 5. If it is a winning board, display winner
// 6. If the board is full, display tie
// 7. If neither player won and board it not full, go to step #2
// 8. Ask play again?
// 9. If yes, go to step #1
// 10.Display goodbye

const readline = require('readline-sync');
const BOARD = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

function displayBoard(board) {
  console.log('+---+---+---+');
  for (let row = 0; row < board.length; row++) {
    let currentRow = board[row];
    console.log(`| ${currentRow[0]} | ${currentRow[1]} | ${currentRow[2]} |`);
    console.log('+---+---+---+');
  }
}

displayBoard(BOARD);

console.log('Mark a square (type 1-9):');
let playerMove = readline.prompt();
console.log(`Player marked squre #${playerMove}`);

