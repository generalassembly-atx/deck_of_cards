// 1. Make the function deck_o_cards assemble an array of cards using the provided suits and values arrays.
// Each card in the deck should be an object formatted as: {suit: 'hearts', value: 'A'}
//check
// Make 52 card objects and store them in the "cards" array
// Hint: use 2 for loops
//check
// 2. Shuffle the cards
// Hint: shuffle function is already defined below
//check

// Pull the top card from the newly shuffledCards
// 3. Print the results:
// "The deck has {n} cards" ?
// "The top card is the {value} of {suit}"

function deck_o_cards() {
var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
var suits = ['hearts', 'diamonds', 'clubs', 'spades'];
}

var cards = []; // deck
for(var n=0; i<cards.length; n++) {
}
var suits = [];
for(var i=0; i<suits.length; i++) {
}
  // Fisher-Yates Shuffle
// http://stackoverflow.com/a/6274398
var shuffledCards = []; // deck shuffled

function shuffle(array) {
  var counter = array.length, temp, index;

  // While there are elements in the array
  while (counter > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
  }

  return array;
}
cards.shift();
return cards.shift();
