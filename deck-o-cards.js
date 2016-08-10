var deck = [];

function deck_o_cards() {
  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  var suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  var shuffledCards = []; // deck shuffled
  for (var i = 0; i < suits.length; i++) {
    //console.log(suits[i]);
    for (var j = 0; j < values.length; j++) {
  		//console.log(values[j]);
  		//console.log(suits[i], values[j]);
	    var cards = {suit: suits[i], value: values[j]};
		  deck.push(cards);
  	}
 	}
	return deck;
}
deck_o_cards()

function shuffle(array) {
    var counter = array.length, temp, index;
    while (counter > 0) {
        index = Math.floor(Math.random() * counter);
        counter--;
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

//shuffled deck
var shuffledCards = shuffle(deck);
console.log(shuffledCards)

//top card
var topCard = shuffledCards[0];
console.log(topCard);

//console log statements
console.log("the deck has "+ deck.length +"cards");
console.log("the top card is the " + topCard.value +" of " + topCard.suit);
