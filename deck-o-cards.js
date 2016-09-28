
function deck_o_cards() {
  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  var cards = []; // deck
  var shuffledCards = []; // deck shuffled

  for (var s = 0; s < suits.length; s++) {
    //console.log(values[i]);
  for (var v = 0; v < values.length; v++) {
      cards = (v+1, 'suits: ' + suits[s] + ' , ' + 'value: ' + values[v]);
      console.log(cards);
    }
  }
  function shuffle(cards) {
      var counter = cards.length, temp, index;
      while (counter > 0) {
          index = Math.floor(Math.random() * counter);
          counter--;
          temp = cards[counter];
          cards[counter] = cards[index];
          cards[index] = temp;

      }
      return cards;


  }
  console.log('The deck has ' + cards.length + ' cards');
  console.log("The two top cards = " + cards);
}

deck_o_cards();
