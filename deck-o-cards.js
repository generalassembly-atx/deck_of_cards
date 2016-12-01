// 1. Make the function deck_o_cards assemble an array of cards using the provided suits and values arrays.
// Each card in the deck should be an object formatted as: {suit: 'hearts', value: 'A'}
  function card(suits, values){
    this.suits = suits;
   this.values = values;
}

function deck_o_cards() {
  this.values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
   this.suits = ['hearts', 'diamonds', 'clubs', 'spades'];


  var cards = []; // deck
  var shuffledCards = []; // deck shuffled
  for(var i= 0; i< this.suits.length; i++){
    for(var x = 0; x <this.values.length; x++){
    cards.push(new card(this.suits[i], this.values[x]));
   }
  }
return cards;
}
console.log(deck_o_cards());
// return cards;
//   // Make 52 card objects and store them in the "cards" array
//   // Hint: use 2 for loops


//   // 2. Shuffle the cards
//   // Hint: shuffle function is already defined below


//   // Pull the top card from the newly shuffledCards


//   // 3. Print the results:
//   // "The deck has {n} cards"
//   // "The top card is the {value} of {suit}"

// }
// function shuffle(array) {
//     var counter = array.length, temp, index;

//     // While there are elements in the array
//     while (counter > 0) {
//         // Pick a random index
//         index = Math.floor(Math.random() * counter);

//         // Decrease counter by 1
//         counter--;

//         // And swap the last element with it
//         temp = array[counter];
//         array[counter] = array[index];
//         array[index] = temp;
//     }

//     return array;
// }
// console.log("The deck has " + n + " cards";

// // Fisher-Yates Shuffle
// // // http://stackoverflow.com/a/6274398
// function shuffle(array) {
//     var counter = array.length, temp, index;

//     // While there are elements in the array
//     while (counter > 0) {
//         // Pick a random index
//         index = Math.floor(Math.random() * counter);

//         // Decrease counter by 1
//         counter--;

//         // And swap the last element with it
//         temp = array[counter];
//         array[counter] = array[index];
//         array[index] = temp;
//     }

//     return array;
// }
