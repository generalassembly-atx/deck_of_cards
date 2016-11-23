// 1. Make the function deck_o_cards assemble an array of cards using the provided suits and values arrays.
// Each card in the deck should be an object formatted as: {suit: 'hearts', value: 'A'}

  // Make 52 card objects and store them in the "cards" array
  // Hint: use 2 for loops


(function deck_o_cards() {

    function Card (values, suit) {

        this.values = values;
        this.suit = suit;

    }

    function Deck() {

        this.deck = new Array(52);

        var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
        var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

        var i, j;
        for (i = 0; i < 4; i++) {
            for (j = 0; j < 13; j++) {
                this.deck[i*values.length + j] = new Card(values[j], suits[i]);
            }
        }



		// 2. Shuffle the cards
  // Hint: shuffle function is already defined below


  // Pull the top card from the newly shuffledCards


  // 3. Print the results:
  // "The deck has {n} cards"
  // "The top card is the {value} of {suit}"


        this.shuffledCards = shuffledCards;
        this.deal = deal;
    }


    function shuffledCards() {
        var i, j, temp;
        var n = 10;
        for (i = 0; i < n; i++) {
            for (j = 0; j < this.deck.length; j++) {
                k = Math.floor(Math.random() * this.deck.length);
                temp = this.deck[j];
                this.deck[j] = this.deck[k];
                this.deck[k] = temp;
            }
        }
    }

    function deal() {

        if (this.deck.length > 0) {
            return this.deck.shift();
        }
        else return null;
    }

    var deck = new Deck();
    deck.shuffledCards();
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 4; j++) {
            var Card;
            Card = deck.deal();



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
