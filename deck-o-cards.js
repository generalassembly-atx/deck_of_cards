// 1. Make the function deck_o_cards assemble an array of cards using the provided suits and values arrays.
// Each card in the deck should be an object formatted as: {suit: 'hearts', value: 'A'}




  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  var cards = []; // deck
  var shuffledCards = []; // deck shuffled

  // Make 52 card objects and store them in the "cards" array
  // Hint: use 2 for loops
//function deck_o_cards() {
  for(var i=0; i < suits.length; i++){
    for(var j=0; j < values.length; j++){
      cards.push(values[j]+ " of " +suits[i]);
    }
  }
//}
  // 2. Shuffle the cards
  // Hint: shuffle function is already defined below
  function shuffle(cards) {
      var counter = cards.length, temp, index;

      // While there are elements in the array
      while (counter > 0) {
          // Pick a random index
          index = Math.floor(Math.random() * counter);

          // Decrease counter by 1
          counter--;

          // And swap the last element with it
          temp = cards[counter];
          cards[counter] = cards[index];
          cards[index] = temp;
      }

      return cards;
      console.log(cards[1]);

  }

  // var shuffledCards[] = cards[0]
  // console.log(shuffledCards[0]);
  // Pull the top card from the newly shuffledCards


  // 3. Print the results:
  // "The deck has {n} cards"
  // "The top card is the {value} of {suit}"

// }



// Fisher-Yates Shuffle
// http://stackoverflow.com/a/6274398
