const readline = require('readline-sync');

const SUITS = ['H', 'D', 'C', 'S'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

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

function dealCards(deck) {
  return deck.splice(-2, 2);
}

function total(hand) {
  let values = hand.map(card => card[1]);
  let sum = 0;

  values.forEach(value => {
    if (value === 'A') {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  // correction for Aces
  values.filter(value => value === 'A').forEach(_ => {
    if (sum > 21) sum -= 10;
  });

  return sum;
}

function busted(hand) {
  return total(hand) > 21;
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

prompt('Welcome to Twenty-One Game!');
console.log('');


while (true) { // main game loop
  const deck = initializeDeck();

  const dealersHand = dealCards(deck);
  const playersHand = dealCards(deck);

  prompt("Player's turn:");
  console.log('-----------------');

  prompt(`Dealer has: ${dealersHand[0][1]} and unknown card`);
  prompt(`You have: ${playersHand.map(card => card[1]).join(', ')}`);

  while (true) { // player's loop
    console.log("Type 'hit' to get a new card or type 'stay' to stop...");

    let answer = readline.question();

    if (answer === 'hit') {
      let newCard = deck.pop();
      playersHand.push(newCard);
      prompt(`You got ${newCard[1]}. You now have: ${playersHand.map(card => card[1]).join(', ')}, which totals to ${total(playersHand)}`);
    }

    if (answer === 'stay' || busted(playersHand)) break;
  }

  if (busted(playersHand)) {
    // player lost
    prompt('You are busted, dealer won!');
    break;
  } else {
    prompt(`You chose to stay at ${total(playersHand)}.`);
  }

  console.log('');
  prompt("Dealer's turn:");
  console.log('-----------------');

  while (total(dealersHand) < 17) {
    prompt('Dealer chose to hit...');
    dealersHand.push(deck.pop());
    prompt(`Dealer now has: ${dealersHand.map(card => card[1]).join(', ')}, which totals to ${total(dealersHand)}`);
  }

  if (busted(dealersHand)) {
    prompt('Dealer is busted, you won!');
  } else {
    prompt(`Dealer chose to stay at ${total(dealersHand)}.`);
    console.log('');
    prompt('Comparing hands...');
    console.log('');

    prompt(`Your hand: ${playersHand.map(card => card[1]).join(', ')}, your total: ${total(playersHand)}`);
    prompt(`Dealers hand: ${dealersHand.map(card => card[1]).join(', ')}, dealers total: ${total(dealersHand)}`);
    let winner;

    if (total(playersHand) > total(dealersHand)) {
      winner = 'You';
    } else {
      winner = 'Dealer';
    }
    prompt(`${winner} won the game!`);
  }

  break;
}

prompt('Thanks for playing Twenty-One, goodbye.');

// implement input validation for player choice
// implement play again
// improve displaying results, implement tie result
// refactor magic constants
// refactor to functions
// eslint
// externalize messages

// minimize calls to total()
// improve ending the round
// keep score and declare winner after best of 5
// implement whatever-one constants