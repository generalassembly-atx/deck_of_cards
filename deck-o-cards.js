// 1. Make the function deck_o_cards assemble an array of cards using the provided suits and values arrays.
// Each card in the deck should be an object formatted as: {suit: 'hearts', value: 'A'}
function card(values,suits){
this.values = values;
this.suits = suits;
}

function deck_o_cards() {
  this.values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  this.suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  var cards = []; // deck
  var shuffledCards = []; // deck shuffled



  // Make 52 card objects and store them in the "cards" array
  // Hint: use 2 for loops


for (var i=0;i < this.values.length;i++){
  for(var n=0;n < this.suits.length;n++){
    cards.push(new card(this.values[i],this.suits[n]));
  }
}
  return cards;
}

cards = deck_o_cards();

// the class function -------------------------------------------------
// function deck_o_cards() {
//   values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
//   suits = ['hearts', 'diamonds', 'clubs', 'spades'];

//   var cards = []; // deck
//   var shuffledCards = []; // deck shuffled
  
//  for(var i=0; i<values.length;i++){
//    cards.push({value:values[i], suit:"hearts"})
//  } 
//   for(var n=0; n<values.length;n++){
//    cards.push({value:values[n], suit:"diamonds"})
//  } 
//   for(var s=0; s<values.length;s++){
//    cards.push({value:values[s], suit:"spades"})
//  } 
//   for(var c=0; c<values.length;c++){
//    cards.push({value:values[c], suit:"clubs"})
//  } 
//   return cards;

  
  
// }
//   console.log(deck_o_cards());


  // 2. Shuffle the cards
  // Hint: shuffle function is already defined below
shuffledCards = shuffle(cards);


  // Pull the top card from the newly shuffledCards
var printCards = shuffledCards[0];



  // 3. Print the results:
  // "The deck has {n} cards"
  // "The top card is the {value} of {suit}"

console.log("This deck has " + cards.length + " cards");
console.log("The top card is the " + printCards.values + " of " + printCards.suits);


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
