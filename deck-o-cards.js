// 1. Make the function deck_o_cards assemble an array of cards using the provided suits and values arrays.
// Each card in the deck should be an object formatted as: {suit: 'hearts', value: 'A'}
function deck_o_cards() {
  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  var cards = [
    {
      'hearts' : 'Ace',
      'hearts' : 'King',

    }

  ]; <---I feel like i want to populate that array with all the 52 cards writng them as strings for their two values

  // deck //<----- Cards Array, 'deck', 52 cards, 13 * 4
  var shuffledCards = []; // deck shuffled//<-----shuffled array, 'shuffled'


  function card(value, suits) {}//<------Object
  this.value = value;
  this.suits = suits;
}

function deck_o_cards
 this.value=[2,3,4,5,6,7,8,9,10,'jack','queen','king','ace']

 for(var i=0; i<this.value.length; i++){
   for(var n=0, n<this.suits.length; n++){
     cards.push(newcard(i +1, this.value[i].this.suits[n]));
   }
 }

 console.log(deck_o_cards())
  console.log(shuffleArray)


  //array.shift
  function shuffle(array) {
      var counter = array.length, temp, index;  //<----these are the cards?

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


  // Make 52 card objects and store them in the "cards" array
  // Hint: use 2 for loops


  // 2. Shuffle the cards
  // Hint: shuffle function is already defined below


  // Pull the top card from the newly shuffledCards


  // 3. Print the results:
  // "The deck has {n} cards"
  // "The top card is the {value} of {suit}"

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
