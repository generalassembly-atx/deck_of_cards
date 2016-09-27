// 1. Make the function deck_o_cards assemble an array of cards using the provided suits and values arrays.
// Each card in the deck should be an object formatted as: {suit: 'hearts', value: 'A'}
function deck_o_cards() {
  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  var cards = []; // deck
  var shuffledCards = []; // deck shuffled

  // Make 52 card objects and store them in the "cards" array
  // Hint: use 2 for loops
  for (var i=0; i<values.length; i++) {
    for (var j=0; j<suits.length; j++) {
      var card = {};
      card.value = values[i];
      card.suit = suits[j];
      cards.push(card);
    }
  }

  // 2. Shuffle the cards
  // Hint: shuffle function is already defined below

  shuffledCards = shuffle(cards);
  // Pull the top card from the newly shuffledCards

  var topCard = cards[0];

  var topFiveCards = [];

  for (var i=0; i<5; i++) {
    topFiveCards.push(cards[i]);
  }

  function printCards(cardArray) {
    var cardString = "";
    for (var i=0; i<cardArray.length; i++) {
      if(i === cardArray.length - 1) {
          cardString += (cardArray[i]['value'] + " of " + cardArray[i]['suit']);
      } else {
          cardString += (cardArray[i]['value'] + " of " + cardArray[i]['suit'] + ", ");
      }
    }
    return cardString;
  }

  var pokerHand = printCards(topFiveCards);
  // 3. Print the results:
  // "The deck has {n} cards"
  // "The top card is the {value} of {suit}"

  console.log("The deck has " + cards.length + " cards");
  console.log("The top card is the " + topCard['value'] + " of " + topCard['suit']);
  console.log("Your poker hand has the following cards: " + pokerHand);

  return shuffledCards;
}

deck_o_cards();

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
