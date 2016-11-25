// 1. Make the function deck_o_cards assemble an array of cards using the provided suits and values arrays.
// Each card in the deck should be an object formatted as: {suit: 'hearts', value: 'A'}
function deck_o_cards() {
  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  // Make 52 card objects and store them in the "cards" array
  // Hint: use 2 for loops
  var cards = []; // deck
  for (i=0; i<values.length; i++) {
    var newValues=[i];
  for (j=0; j<suits.length; j++) {
    var newSuits=[j];
  }
}


  // 2. Shuffle the cards
  // Hint: shuffle function is already defined below
  var shuffledCards = []; // deck shuffled
  function shuffle(cards) {
      var counter = cards.length, temp, index;

      // While there are elements in the array
      while (counter > 0) {
          // Pick a random index
          index = Math.floor(Math.random() * counter);

          // Decrease counter by 1
          counter--;

          // And swap the last element with it
          temp = card[counter];
          card[counter] = card[index];
          card[index] = temp;
      }

      return array;
  }

  // Pull the top card from the newly shuffledCards


  // 3. Print the results:
  // "The deck has {n} cards"
  // "The top card is the {value} of {suit}"

}



// Fisher-Yates Shuffle
// http://stackoverflow.com/a/6274398
/*function shuffle(array) {
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
*/


/* in class they said....
cards.push({card:values[i], suit:"hearts"})
cards.push({card:values[i], suit:"diamonds"})
cards.push({card:values[i], suit:"clubs"})
cards.push({card:values[i], suit:"spades"})
}
*/
