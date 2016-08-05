var deck = [];

function deck_o_cards() {

  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  for (var i = 0; i < suits.length; i++) {
    var suit = suits[i];
    for (var j = 0; j < values.length; j++) {
      var value = values[j];
      var card = {
        suit: suit,
        value: value
      };
      deck.push(card);
    }
  }
  return deck;
}

var d = deck_o_cards();
console.log(d);

function shuffle(array) {
  var counter = array.length,
    temp, index;

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
var shuffledCards = shuffle(deck);


console.log(shuffledCards);
var topCard = shuffledCards[0];
console.log(shuffledCards[0]);

console.log("The deck has " + deck.length + " cards");
console.log("The top card is " + topCard.value + " of " + topCard.suit);
