

//Deck stacking function
function deck_o_cards() {
  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  var cards = []; // deck
  var shuffledCards = []; // deck shuffled
  var i = 0; // value counter
  var j = 0; // suit counter
  var count = 0; // card counter

  for (i = 0; i < values.length; i++) {
  	for (j = 0; j < suits.length; j++) {
  		cards[count] = {
    		value: values[i],
    		suit: suits[j]
  		  };
  		  count++;
  		}
	}
	return cards;
}

//Shuffle function
function shuffle(array) {
    var counter = array.length, temp, index;

    while (counter > 0) {
        index = Math.floor(Math.random() * counter);
        counter--;
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

shuffle(deck_o_cards());
