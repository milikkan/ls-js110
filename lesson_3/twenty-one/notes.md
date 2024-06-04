Twenty-One game notes:

* deck: 
  - 52 cards
  - 4 suits (hearts, diamonds, clubs, spades)
  - 13 values (2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace)
* goal: to try to get as close to 21 as possible without going over.
  - bust => go over 21
* game setup:
  - dealer and player
  - initially dealt a hand of 2 cards
  - player can see their 2 cards, but can only see one of dealer's cards
* card values:
  - Jack, Queen, King are each worth 10.
  - Ace can be worth 1 or 11 depending on the situation.
    - if hand contains 2, 5 and Ace => total is 18. Ace is 11 because total doesn't exceed 21.
    - if another Ace is drawn => total is 19 (2 + 5 + 11 + 1). One Ace worths 1, the other worths 11 in this scenario.
    - if there are multiple Aces in a hand, program must account for that.
* Player turn:
  - always goes first, can decide to hit or stay.
    - hit: player wants to be dealt another card. (if total exceeds 21, player will bust and lose the game)
  - player can hit as many times as they want. The turn is over if the player busts or stays.
  - If player busts, game is over and dealer won.
* Dealer turn:
  - When the player stays, it is dealer's turn.
  - Dealer must follow a rule to hit or stay: 
    - hit until total is at least 17
  - If the dealer busts, the player wins.
* Comparing cards:
  - if both the player and dealer stays, compare the total value of the cards to see who has the highest.

* Example scenarios:
  - scenario-1:
    - Dealer has: Ace and x
    - You have: 2 and 8
    - You should hit
  - Scenario-2:
    - Dealer has: 7 and x
    - You have: 10 and 7
    - You should stay
  - Scenario-3:
    - Dealer has: 5 and x
    - You have: Jack and 6
    - Best move here is to stay

* Implementation steps:
  1. Initialize deck
  2. Deal cards to player and dealer
  3. Player turn: hit or stay
     - repeat until bust or stay
  4. If player bust, dealer wins
  5. Dealer turn: hit or stay
     - repeat until total >= 17
  6. If dealer busts, player wins
  7. Compare cards and declare winner

* Data structure:
  - what to use to contain card deck?
  - what to use to contain player's and dealer's cards?
* Calculating Aces:
  - 11 points if total is less then 21
  - 1 points if total exceeds 21 if 11 is used
* Player turn
  - Ask player to hit or stay
  - If stay, stop asking
  - If busted, stop asking
  - Otherwise, go to #1
* shuffle cards:
  - write a shuffling function (example: fisher-yates shuffle)
* dealer turn
  - break condition occurs at the top of the "hit or stay" condition, as opposed to the player's which occurs at the bottom
* displaying the result
  - write a function that returns the result of the game
  - write another function that handles displaying the results