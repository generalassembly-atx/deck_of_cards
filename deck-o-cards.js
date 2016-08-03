function deck_o_cards() {
	var deck = [];
	var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
	var suits = ['hearts', 'diamonds', 'clubs', 'spades'];
	for (i = 0; i < suits.length; i++) {
		 var suit = suits[i];
		 for (j = 0; j < values.length; j++) {
		 var value = values[j];
		 var card = {
			suit: suit,
			value: value
			}
			deck.push(card);
		 	}
	}

	return deck;
}

var d = deck_o_cards();
console.log(d)
