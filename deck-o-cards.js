
// 1. Make the function deck_o_cards assemble an array of cards using the provided suits and values arrays.







// RILEY NOTES
// loop inside of a loop, once you have the card assemble it to some type of array

  // Make 52 card objects and store them in the "cards" array
  // Hint: use 2 for loops


  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  var cards = []; // deck
  var shuffledCards = []; // deck shuffled
function deck_o_cards() {
  for (var i = 0; i < values.length; i++) {
    for (var j = 0; j < suits.length; j++) {
       cards.push("suits: " + suits[j] + " " + "values: " + values[i]);
    }
  }
}
deck_o_cards();
  // 2. Shuffle the cards
  // Hint: shuffle function is already defined below
  function shuffle(cards) {
      var counter = cards.length, temp, index;

      // While there are elements in the cards
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

      console.log(cards);
  }
shuffle()
  // Pull the top card from the newly shuffledCards


  // 3. Print the results:
  // "The deck has {n} cards" (use .length... start at zero)
  // "The top card is the {value} of {suit}"





// Fisher-Yates Shuffle
// http://stackoverflow.com/a/6274398
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
