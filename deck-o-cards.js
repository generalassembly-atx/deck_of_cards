// 1. Make the function deck_o_cards assemble an array of cards using the provided suits and values arrays.
// Each card in the deck should be an object formatted as: {suit: 'hearts', value: 'A'}
function deck_o_cards() {
  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];
  var cards = [ ];
    for(i=0; i< suits.length; i++){
        var newSuits = suits[i];
        for(j=0; j< values.length; j++) {
            var newValues= values[a];
            newArray=[newValues+ " of " + newSuits];
            cards.push(newArray);
        }
    }
  console.log(cards)
  var shuffledCards = []; // deck shuffled

  // Make 52 card objects and store them in the "cards" array
  // Hint: use 2 for loops


  // 2. Shuffle the cards
  // Hint: shuffle function is already defined below
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

  // Pull the top card from the newly shuffledCards


  // 3. Print the results:
  // "The deck has {n} cards"
  // "The top card is the {value} of {suit}"
  console.log("There are "+ cards.length + " in the deck.")
  console.log("The top card is "+ shuffle(cards[0]))

  shuffle
}



// Fisher-Yates Shuffle
// http://stackoverflow.com/a/6274398
