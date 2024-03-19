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
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'x';
const COMPUTER_MARKER = 'O';

function displayBoard(board) {
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};
  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;
  
  while (true) {
    prompt(`Choose a square ${emptySquares(board).join(', ')}:`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("That's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

let board = initializeBoard();
displayBoard(board);

playerChoosesSquare(board);
computerChoosesSquare(board);

displayBoard(board);