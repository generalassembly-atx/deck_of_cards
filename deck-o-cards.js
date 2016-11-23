// 1. Make the function deck_o_cards assemble an array of cards using the provided suits and values arrays.
// Each card in the deck should be an object formatted as: {suit: 'hearts', value: 'A'}
function deck_o_cards() {
  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  var cards = [];
  var shuffledCards = [];

  for (var i=0; i < values.length; i++) {
    for (var j=0; j < suits.length; j++) {
    //this needs to be declared here so that a unqiue object is created each time
    var cardObj = {
                    suit: suits[j],
                    value: values[i]
                  };
    //push card objects into the cards array
    cards.push(cardObj);
    }
  }

  //shuffles the cards
  shuffle(cards);

  //removes first value of the cards array
  var topCard = cards.shift();

  console.log("The deck has " + (cards.length+1) + " cards");
  console.log("The top card is " + topCard.suit + " of " + topCard.value );
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
