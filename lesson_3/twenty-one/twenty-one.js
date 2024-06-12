const readline = require('readline-sync');

const BLACK_COLOR = '\x1b[30m';
const RED_COLOR = '\x1b[31m';
const RESET_COLOR = '\x1b[0m';

const MESSAGES = require('./twenty-one_messages.json');
const VALUE_DELIMITER = '!!!'; // used when replacing multiple values in a prompt template
const SUITS = ['♥', '♦', '♣', '♠'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const UNKNOWN_CARD = ['?', '?'];
const ACE_VALUE = 11;
const FACE_VALUE = 10;
const GOAL_SUM = 21;
const DEALER_MIN_SUM = 17;
const DEALER_PAUSE_DURATION = 1200;
const MATCH_WINNING_SCORE = 3;
const HIT_OR_STAY_VALID_INPUTS = ['hit', 'h', 'stay', 's'];
const HIT_CHOICE = 'h';
const YES_OR_NO_VALID_INPUTS = ['yes', 'y', 'no', 'n'];
const YES_CHOICE = 'y';

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

// delays program execution synchronously for the given duration as miliseconds
function delay(ms) {
  const date = Date.now();
  let currentDate = null;

  do {
    currentDate = Date.now();
  } while (currentDate - date < ms);
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function generateCardTopSection(length) {
  process.stdout.write('┌─────┐ '.repeat(length));
  console.log('');
}

function generateCardSuitsSection(cards) {
  cards.forEach(card => {
    const suit = card[0];
    const suitColor = ['♥', '♦'].includes(suit) ? RED_COLOR : BLACK_COLOR;
    process.stdout.write(`│${suitColor}${suit}   ${suit}${RESET_COLOR}│ `);
  });
  console.log('');
}

function generateCardValueSection(cards) {
  cards.forEach(card => {
    const value = card[1];
    const padSpace = value === '10' ? '' : ' ';
    process.stdout.write(`│  ${value}${padSpace} │ `);
  });
  console.log('');
}

function generateCardBottomSection(length) {
  process.stdout.write('└─────┘ '.repeat(length));
  console.log('');
}

function drawPlayingCards(cards, hideCards = false) {
  let cardsToDraw = cards.slice();

  if (hideCards) {
    cardsToDraw = [cards[0], UNKNOWN_CARD];
  }

  generateCardTopSection(cardsToDraw.length);
  generateCardSuitsSection(cardsToDraw);
  generateCardValueSection(cardsToDraw);
  generateCardSuitsSection(cardsToDraw);
  generateCardBottomSection(cardsToDraw.length);
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
  return array;
}

function initializeDeck() {
  const deck = [];
  SUITS.forEach(suit => {
    VALUES.forEach(value => deck.push([suit, value]));
  });
  return shuffle(deck);
}

function giveInitialCards(deck) {
  return [deck.pop(), deck.pop()];
}

function total(hand) {
  let values = hand.map(card => card[1]);
  let sum = 0;

  values.forEach(value => {
    if (value === 'A') {
      sum += ACE_VALUE;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += FACE_VALUE;
    } else {
      sum += Number(value);
    }
  });

  // correction for Aces
  values.filter(value => value === 'A').forEach(_ => {
    if (sum > GOAL_SUM) sum -= 10;
  });
  return sum;
}

function getUserInput(message, errorMessage, validChoices) {
  let input;
  prompt(message);

  while (true) {
    input = readline.question().toLowerCase();
    if (validChoices.includes(input)) break;
    prompt(errorMessage);
  }
  return input;
}

function busted(total) {
  return total > GOAL_SUM;
}

function displayTurn(playerName) {
  prompt('headingTurn', `${playerName.toUpperCase()}`);
  console.log('-----------------');
}

function displayCardsOf(player, cards, total = 0, hideCards = false) {
  prompt('headingCards', `${capitalize(player)}`);
  drawPlayingCards(cards, hideCards);

  if (total > 0) {
    prompt('total', `${total}`, false);
    console.log('---------------------');
  }
}

function displayPlayerScreen(dealerCards, playerCards, playerTotal) {
  console.clear();
  displayTurn('player');
  displayCardsOf('dealer', dealerCards, 0, true);
  displayCardsOf('player', playerCards, playerTotal);
}

function displayDealerScreen(dealerCards, dealerTotal) {
  console.clear();
  displayTurn('dealer');
  displayCardsOf('dealer', dealerCards, dealerTotal);
}

function playerTurn(deck, playerCards, dealerCards, totals) {
  displayPlayerScreen(dealerCards, playerCards, totals.player);

  while (true) {
    let hitOrStay = getUserInput('hitOrStay', 'hitOrStayError', HIT_OR_STAY_VALID_INPUTS);

    if (hitOrStay.charAt(0) === HIT_CHOICE) {
      let newCard = deck.pop();
      playerCards.push(newCard);
      totals.player = total(playerCards);
      displayPlayerScreen(dealerCards, playerCards, totals.player);
    }

    if (hitOrStay.charAt(0) === 's' || busted(totals.player)) break;
  }
}

function dealerTurn(deck, dealerCards, totals) {
  displayDealerScreen(dealerCards, totals.dealer);

  while (totals.dealer < DEALER_MIN_SUM) {
    prompt('dealerHits');
    delay(DEALER_PAUSE_DURATION);
    dealerCards.push(deck.pop());
    totals.dealer = total(dealerCards);
    displayDealerScreen(dealerCards, totals.dealer);
  }
}

function detectRoundWinner(totals) {
  let winner;

  if (totals.player > GOAL_SUM) {
    winner = 'dealer';
  } else if (totals.dealer > GOAL_SUM) {
    winner = 'player';
  } else if (totals.player > totals.dealer) {
    winner = 'player';
  } else if (totals.dealer > totals.player) {
    winner = 'dealer';
  }

  return winner;
}

function displayRoundWinner(winner) {
  if (winner) {
    prompt('roundWinner', `${capitalize(winner)}`);
  } else {
    prompt('tieResult');
  }
}

function displayRoundResult(playerCards, dealerCards, winner, totals) {
  console.clear();
  prompt('headingRoundResult');
  console.log('-----------------');

  displayCardsOf('dealer', dealerCards, totals.dealer);
  displayCardsOf('player', playerCards, totals.player);

  displayRoundWinner(winner);
}

function displayWelcome() {
  console.clear();
  prompt('welcome');
  console.log('');
  prompt('gameRules', `${GOAL_SUM}!!!${MATCH_WINNING_SCORE} `);
  waitForUser('pressStartGame');
}

function waitForUser(msgKey) {
  console.log('');
  prompt(msgKey);
  readline.prompt();
}

function updateScores(scores, winner) {
  if (winner === 'player') {
    scores.player += 1;
  }
  if (winner === 'dealer') {
    scores.dealer += 1;
  }
}

function displayScores(scores) {
  prompt('scores', `${scores.player}!!!${scores.dealer}`);
}

function matchWon(scores) {
  return scores.player === MATCH_WINNING_SCORE ||
    scores.dealer === MATCH_WINNING_SCORE;
}

function displayMatchWinner(scores) {
  console.log('---------------------');
  let matchWinner = (scores.dealer === MATCH_WINNING_SCORE) ? 'Dealer' : 'Player';
  prompt('matchWinner', `${matchWinner}`);
}

function playAgain() {
  return getUserInput('playAgain', 'playAgainError', YES_OR_NO_VALID_INPUTS);
}

function displayGoodbye() {
  prompt('goodbye');
}

function displayBusted(playerName) {
  prompt('busted', `${capitalize(playerName)}`);
  waitForUser('pressRoundResult');
}

function displayStayed(playerName, total) {
  prompt('stayed', `${capitalize(playerName)}!!!${total}`);
}

function playRound(deck, playerCards, dealerCards, totals) {
  while (true) {

    playerTurn(deck, playerCards, dealerCards, totals);

    if (busted(totals.player)) {
      displayBusted('player');
      break;
    }
    displayStayed('player', totals.player);
    waitForUser('pressDealerTurn');

    dealerTurn(deck, dealerCards, totals);

    if (busted(totals.dealer)) {
      displayBusted('dealer');
      break;
    }
    displayStayed('dealer', totals.dealer);
    waitForUser('pressCompareHands');
    break;
  }
}

function playMatch() {
  const scores = {player: 0, dealer: 0};

  while (true) {
    const deck = initializeDeck();
    const dealerCards = giveInitialCards(deck);
    const playerCards = giveInitialCards(deck);

    const totals = {player: total(playerCards), dealer: total(dealerCards)};

    playRound(deck, playerCards, dealerCards, totals);

    let roundWinner = detectRoundWinner(totals);
    displayRoundResult(playerCards, dealerCards, roundWinner, totals);

    updateScores(scores, roundWinner);
    displayScores(scores);

    if (matchWon(scores)) {
      displayMatchWinner(scores);
      break;
    }
    waitForUser('pressNextRound');
  }
}

function play21Game() {
  displayWelcome();

  do {
    playMatch();
    console.log('');
  } while (playAgain().charAt(0) === YES_CHOICE);

  displayGoodbye();
}

play21Game();
