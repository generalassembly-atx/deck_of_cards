var cards = [];
function deck_o_cards() {
  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];


    for (var x = 0; x < values.length; x++) {
    for (var y = 0; y < suits.length; y++){
      cards.push("suit: " + suits[y] + " & " + "value: " + values[x]);
    }
  }
// The lengths of the 'values' and 'suits' arrays on lines 2 & 3  are used in the for loops on lines 6 & 7 to iterate through each value. They're then pushed into the cards array and all 52 cards within the deck are represented.

console.log(cards);


  // I struggled to find the issue which has prevented my console from logging the shuffled deck.
  function shuffle(cards) {
      var cash = cards.length, i, temp;
      while (--cash > 0) {
          i = Math.floor(Math.random() * (i+1));
          temp = cards[cash];
          cards[i] = cards[cash];
          cards[i] = temp;
      }

      return(cards);
      shuffle();
  }

}

  // Pull the top card from the newly shuffledCards
  var shuffledCards = []; // deck shuffled

  // 3. Print the results:
  // "The deck has {n} cards"
  // "The top card is the {value} of {suit}"




// // Fisher-Yates Shuffle
// // http://stackoverflow.com/a/6274398
// function shuffle(array) {
//     var counter = array.length, temp, index;
//
//     // While there are elements in the array
//     while (counter > 0) {
//         // Pick a random index
//         index = Math.floor(Math.random() * counter);
//
//         // Decrease counter by 1
//         counter--;
//
//         // And swap the last element with it
//         temp = array[counter];
//         array[counter] = array[index];
//         array[index] = temp;
//     }
//
//     return array;
// }

deck_o_cards();
