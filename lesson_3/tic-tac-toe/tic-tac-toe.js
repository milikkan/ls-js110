const readline = require('readline-sync');

// game constants
const MESSAGES = require('./tic-tac-toe_messages.json');
const VALUE_DELIMITER = '!!!'; // used when replacing multiple values in a prompt template
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const MATCH_SCORE = 3;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];
// valid values: "player", "computer", "choose"
const FIRST_TO_PLAY = "choose";

// replaces placeholders in a message with actual values
// example:
// message = 'test (value1) and (value2)'
// value = 'foe!!!bar'
// returns 'test foo and bar'
function processMessageVariables(messageTemplate, values) {
  if (!values) {
    return messageTemplate;
  }

  let valuesArray = values.split(VALUE_DELIMITER);
  let processedMessage = messageTemplate;
  valuesArray.forEach((value, index) => {
    let nextValue = `(value${index + 1})`;
    processedMessage = processedMessage.replace(nextValue, value);
  });
  return processedMessage;
}

function prompt(msgKey, values, showCursor = true) {
  let message = MESSAGES[msgKey];
  console.log(`${showCursor ? '=> ' : ''}${processMessageVariables(message, values)}`);
}

function joinOr(list, delimiter = ', ', joiningWord = 'or') {
  if (list.length === 0) return '';
  if (list.length === 1) return String(list[0]);
  if (list.length === 2) return `${list[0]} ${joiningWord} ${list[1]}`;

  let head = list.slice(0, -1).join(delimiter);
  let lastElement = list.slice(-1);

  return `${head}${delimiter}${joiningWord} ${lastElement}`;
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function waitForUser(msgKey) {
  console.log('');
  prompt(msgKey);
  readline.prompt();
}

function displayWelcome() {
  console.clear();
  prompt('welcome', '', false);
}

function setupFirstPlayer() {
  let firstPlayer = FIRST_TO_PLAY;

  if (FIRST_TO_PLAY === 'choose') {
    let playerChoice;

    while (true) {
      prompt('askFirstPlayer');
      playerChoice = readline.prompt();
      if (playerChoice === '1' || playerChoice === '2') break;
      prompt('firstPlayerError');
    }

    if (playerChoice === '1') firstPlayer = 'player';
    if (playerChoice === '2') firstPlayer = 'computer';
  }

  return firstPlayer;
}

function displayFirstPlayer(firstPlayer) {
  prompt('displayFirstPlayer', firstPlayer.toUpperCase());
  waitForUser('startMatch');
}

function displayScore(scores) {
  prompt('playerMarkersInfo', `${HUMAN_MARKER}!!!${COMPUTER_MARKER}`, false);
  prompt('matchScoreInfo', `${MATCH_SCORE}`, false);
  console.log('');
  prompt('scoreBoard', `${scores.player}!!!${scores.computer}`, false);
}

function displayBoard(board, scores) {
  console.clear();

  displayScore(scores);

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

function initializeScores() {
  return {player: 0, computer: 0};
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'computer') {
    computerChoosesSquare(board);
  } else {
    playerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  if (currentPlayer === 'computer') {
    return 'player';
  } else {
    return 'computer';
  }
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt('playerChoose', `${joinOr(emptySquares(board))}`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt('squareChoiceError');
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let squareToChoose;

  function findEmptySquareNextTo(markerType) {
    return detectImmediateLine(board, markerType)
      .find(square => board[square] === INITIAL_MARKER);
  }

  // offensive move
  if (detectImmediateLine(board, COMPUTER_MARKER)) {
    squareToChoose = findEmptySquareNextTo(COMPUTER_MARKER);
  // defensive move
  } else if (detectImmediateLine(board, HUMAN_MARKER)) {
    squareToChoose = findEmptySquareNextTo(HUMAN_MARKER);
  // pick square 5
  } else if (board['5'] === INITIAL_MARKER) {
    squareToChoose = '5';
  // random move
  } else {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    squareToChoose = emptySquares(board)[randomIndex];
  }

  board[squareToChoose] = COMPUTER_MARKER;
}

function detectImmediateLine(board, marker) {

  function countMarkersBy(line, marker) {
    return line.reduce((count, square) => {
      if (board[square] === marker) count++;
      return count;
    }, 0);
  }

  return WINNING_LINES.find(line => {
    let markedSquareCount = countMarkersBy(line, marker);
    let emptySquareCount = countMarkersBy(line, INITIAL_MARKER);
    return (markedSquareCount === 2) && (emptySquareCount === 1);
  });
}

function detectGameWinner(board) {

  const detectWinner = (marker) => {
    return WINNING_LINES.some(line => {
      return line.every(square => board[square] === marker);
    });
  };

  if (detectWinner(COMPUTER_MARKER)) {
    return 'computer';
  }

  if (detectWinner(HUMAN_MARKER)) {
    return 'player';
  }

  return null;
}

function gameWon(board) {
  return !!detectGameWinner(board);
}

function playGame(board, scores, firstPlayer) {
  let currentPlayer = firstPlayer;

  while (true) {
    displayBoard(board, scores);

    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    if (gameWon(board) || boardFull(board)) break;
  }

  displayBoard(board, scores);
}

function matchWon(scores) {
  return (scores.player === MATCH_SCORE) || (scores.computer === MATCH_SCORE);
}

function updateScore(scores, winner) {
  scores[winner] += 1;
}

function displayGameResult(board, scores) {
  if (gameWon(board)) {
    let gameWinner = detectGameWinner(board);
    updateScore(scores, gameWinner);
    prompt('gameWinnerResult', `${capitalize(gameWinner)}`);
  } else {
    prompt('gameTieResult');
  }
}

function playMatch(scores, firstPlayer) {
  while (!matchWon(scores)) {
    let board = initializeBoard();
    playGame(board, scores, firstPlayer);
    displayGameResult(board, scores);

    if (matchWon(scores)) break;
    waitForUser('nextGame');
  }
}

function detectMatchWinner(scores) {
  if (scores.player === MATCH_SCORE) {
    return 'Player';
  } else {
    return 'Computer';
  }
}

function displayMatchResult(scores) {
  let matchWinner = detectMatchWinner(scores);
  console.log('');
  prompt('matchWinnerResult', `${matchWinner}`);
  prompt('matchScoreResult', `${scores.player}!!!${scores.computer}`, false);
  console.log('');
}

function askPlayAgain() {
  let choice;
  while (true) {
    prompt('askNewMatch');
    choice = readline.question().toLowerCase();
    if (['y', 'yes', 'n', 'no'].includes(choice)) break;
    prompt('newMatchChoiceError');
  }
  return choice;
}

function displayGoodbye() {
  prompt('goodbye');
}

function playTicTacToe() {
  while (true) {
    displayWelcome();
    let firstPlayer = setupFirstPlayer();
    displayFirstPlayer(firstPlayer);
    let scores = initializeScores();

    playMatch(scores, firstPlayer);
    displayMatchResult(scores);

    if (askPlayAgain().startsWith('n')) break;
  }

  displayGoodbye();
}

playTicTacToe();
