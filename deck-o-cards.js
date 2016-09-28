// 1. Make the function deck_o_cards assemble an array of cards using the provided suits and values arrays.
// Each card in the deck should be an object formatted as: {suit: 'hearts', value: 'A'}
function deck_o_cards() {
  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  var cards = []; // deck
  var shuffledCards = []; // deck shuffled

  // Make 52 card objects and store them in the "cards" array
  // Hint: use 2 for loops
  // Loop through values
  for (var i = 0; i < values.length; i++){
  // Loop through suits
    for (var s = 0; s < suits.length; s++){
      cards.push({
        cardValue: values[i],
        cardSuit: suits[s],
        card: values[i] + " of " + suits[s]
      })
      //cards.push(values[i] + " of " + suits[s]);
    }
  }
  //console.log(cards);
  //console.log(cards.length);
  // 2. Shuffle the cards
  // Hint: shuffle function is already defined below
  shuffledCards = shuffle(cards);
  //console.log(shuffledCards);
  //console.log(shuffledCards.length);

  // Pull the top card from the newly shuffledCards
  //console.log(shuffledCards[0]);
  document.writeln("<h2>" + shuffledCards[0].card + "</h2>");
  // 3. Print the results:
  // "The deck has {n} cards"
  document.writeln("<h3>The deck has " + shuffledCards.length + " cards.</h3>");
  // "The top card is the {value} of {suit}"
  document.writeln("<h3>The top card is the " + shuffledCards[0].cardValue + " of " + shuffledCards[0].cardSuit + ".</h3>");
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

deck_o_cards()
