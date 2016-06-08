
var deckOfCards = function() {

  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  var cards = []; // deck

///////////////////////// make the array ///////////////////


    for (i=0; i < suits.length; i++) {
      var newSuit = suits[i];
          for(a=0; a < values.length; a++) {
              var newValue = values[a];
              var newCard = {suit: newSuit, value: newValue};
              cards.push(newCard);
          }

    }

///////////////// shuffle funciton not yet invoked ///////////////

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

//////////////need to convert an object (for top card) to a string becuase if////////////////////////////
///////you return or console.log "the top card is " + shuffledDeck[0] it returns [object Object] ////////
//////is the top card. This will be used shortly below /////////////////////////////////////////////////
////// ***ref: http://stackoverflow.com/questions/5612787/converting-an-object-to-a-string ****////////
    function convert (obj) {
    var str = '';
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            str += p + '::' + obj[p];
        }
    }
    return str;
}


//// Invoke functions below, first created a new variable to represent the result of shuffle(cards)/////


   var shuffleDeck = shuffle(cards);
   var object = convert(shuffleDeck[0]);
   return object + " is the top card out of " + shuffleDeck.length + " cards";
   /////// return statement^^^ is able to right the object as string with convert() function
   ////// that is represented with the variable object.
}

//// call mastetr function /////

deckOfCards();

