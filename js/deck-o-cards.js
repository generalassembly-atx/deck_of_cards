function deck_of_cards() {

	this.suits = [ 'hearts', 'diamonds', 'spades', 'clubs'];

	this.values = [ 'A', '2', '3', '4', '5', '6', '7',
			'8', '9', '10', 'J', 'Q', 'K'];

	this.deck = (function() {
		var deck = [52];

		this.suits.forEach( function(suit) {
			this.values.forEach( function( value ) {
				deck.push( { suit: suit, value: value });
			});
		});

		return deck;
	})();

	this.log_deck = function() {
		this.deck.forEach( function( card ) {
			console.log(card.value + " of " + card.suit);
		});
	};

	this.shuffle_deck = function() {
		var temp = this.deck;
		this.deck = [52];
		var index;

		while( temp.length ) {
			index = Math.floor( Math.random( 0 ) * temp.length );
			this.deck.push( temp[index] );
			temp.splice( index, 1 );
    }
    	};
