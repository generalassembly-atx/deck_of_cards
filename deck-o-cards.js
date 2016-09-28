
function deck_o_cards() {
  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  var cards = []; // deck
  var shuffledCards = []; // deck shuffled

  for (var i = 0; i < suits.length; i++) {
    var card = {};
    for (var j = 0; j < values.length; j++) {
      // card.suit = suits[i];
      // card['value'] = values[j];
      card = {
        suit: suits[i],
        value: values[j]
      };
      cards.push(card);
      // console.log(card);
    }
  }
  var shuffledCards = shuffle(cards);
  document.write("Seans magical deck has " + cards.length + " cards. The top card is the " + cards[0].value + " of " + cards[0].suit + ".");
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

deck_o_cards();
