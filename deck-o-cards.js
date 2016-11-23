// 1. Make the function deck_o_cards assemble an array of cards using the provided suits and values arrays.
// Each card in the deck should be an object formatted as: {suit: 'hearts', value: 'A'}
function card(values, name, suit){
	this.values = values;
	this.name = name;
	this.suit = suit;
}

function deck_o_cards() {
  this.values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  this.suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  var cards = []; // deck
  // Make 52 card objects and store them in the "cards" array
  // Hint: use 2 for loops
  for (var i=0; i< this.values.length; i++) {
    for(var n=0; n< this.suits.length; n++) {
      cards.push(new card( i+1, this.values[i], this.suits[n]));
    }
  }
  return cards;
}

// Fisher-Yates Shuffle
// http://stackoverflow.com/a/6274398
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
      console.log(deck_o_cards());
