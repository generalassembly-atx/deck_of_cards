

var deck_o_cards = function() {
  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  var cards = []; // deck
  var shuffledCards = []; // deck shuffled

  for (var i = 0; i < suits.length; i++){
    for (var j = 0; j < values.length; j ++){
      cards.push({suit: suits[i], value: values[j]});
    }
  }
  //console.log("There are " + cards.length + " in this deck. The top card is the " + cards[0].value);
  //console.log( "There are " + cards.length + " cards in this deck. The top card is " + cards[51].value + " of " + cards[51].suit );
  return cards;
}
var shuffledDeck = function(array) {
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
  console.log( "There are " + array.length + " cards in this deck. The top card is " + array[0].value + " of " + array[0].suit );
    return array;
}

//Draw card
// function drawCard(num){
//  deck_o_cards();//create deck
//  // console.log("You drew the " + deck_o_cards[num].value + " of " + deck_o_cards[num].suit);
// }
deck_o_cards();
shuffledDeck(deck_o_cards());
