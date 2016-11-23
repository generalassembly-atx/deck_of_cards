//Here is all I was able to accomplish or figure out with some help from classmates like Alfredo.

// 1. Make the function deck_o_cards assemble an array of cards using the provided suits and values arrays.
// Each card in the deck should be an object formatted as: {suit: 'hearts', value: 'A'}


function deck_o_cards() {
  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  var cards = []; // deck
  var shuffledCards = []; // deck shuffled

  // Make 52 card objects and store them in the "cards" array
  // Hint: use 2 for loops


  // 2. Shuffle the cards
  // Hint: shuffle function is already defined below


  // Pull the top card from the newly shuffledCards


  // 3. Print the results:
  // "The deck has {n} cards"
  // "The top card is the {value} of {suit}"

    for (i=0; i< suits.length; i++) {
        var newSuit = suits[i];
        for(a=0; a< values.length; a++) {
            var newValue= values[a];
        var newCard = {suit: newSuit, value: newValue};
      cards.push(newCard);
        }
  }
  return cards;
}
deck_o_cards();

//for (var x = 0; x < 52; x++) { collection[x] = new Object();
//return cards;
//}


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

shuffle(deck_o_cards());

//console.log (TotalCards + "The deck has {n} cards!");
//

var Topcard = ["New Value", "NewSuit"]

Topcard.map(function(Topcard){
  console.log (Topcard + "The deck has cards!");
  console.log (Topcard + "The top card is the  [NewValue] of [NewSuit]!");
})

//I did not figure out the last part or full understand what other students did on their word.
