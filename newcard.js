/*

 it's a simple example of how you would structure a larger app with objects. 
So you basically have an App object which contains all the data and 
functionality. A cool thing is that you could then create other objects that 
can be added as properties to the App object, with more that can plug into 
those objects and so on. That's basically modules. In this case it doesn't 
make much sense cause there's only on object but when you have multiple modules, 
all made up of objects you can combine functionality and break up your app 
into separate components.

*/


/* 

That's basically how React, Angular, Vue etc work.
Same with jQuery, it's basically just one big object called $

*/


/* 

it also lets you create a namespace, so other code could call CardApp.addItem( item );

*/

/* 

That's how API's work
Then you have this bit:
document.addEventListener("DOMContentLoaded", function(){
  App.init();
});

*/

/* 

this means you load the app after all the DOM content has loaded. 
But you could also load it at a later point, 
like if you wanted a splash screen or an auth screen.

*/

/*

But in essence it's the same code as you wrote earlier. It's just adding a 
few lines and organizing it differently. There are a bunch of these systems, 
they're known as Design Patters

*/ 

// CardApp object
var CardApp = {

  // Array containing the cards
  cards: [],

  /**
   * init
   * The constructor method. We call this when the document is fully loaded.
   * This way we are sure that all the DOM elements we need are loaded. We use
   * it to set the initial state.
   */
  init: function(){
    console.log('CardApp.init');
     // Bind DOM elemnts to CardApp properties
    this.form = document.getElementById('addForm'); // CardApp.form is the form used by the user to add new appointment card data
    this.itemList = document.querySelector('.carousel-inner'); // CardApp.itemList is the carousel, we add new cards to it based on card data

     // Add event listeners to our DOM bindings
    this.form.addEventListener('submit', this.addItem.bind(this));
    this.itemList.addEventListener('click', this.removeItem.bind(this));

    this.cards = this.getCardsFromLocalStorage();
    this.displayAllCards();
  },

  /**
   * saveCardsToLocalStorage
   * Save the current CardApp.cards array on localStorage
   */
  saveCardsToLocalStorage(){
    console.log(`CardApp.saveCardsToLocalStorage`);
    var cardData = JSON.stringify(this.cards);
    window.localStorage.setItem('cards', cardData);
  },

  /**
   * getCardsFromLocalStorage
   * Get the cards saved from localStorage and return them. If no cards are found
   * in localStorage return an empty array.
   */
  getCardsFromLocalStorage(){
    console.log(`CardApp.getCardsFromLocalStorage`);
    var cardData = JSON.parse(window.localStorage.getItem('cards')) || [];

    return cardData;
  },

  /**
   * addItem
   * Add a card to CardApp.cards and update the UI's card carousel.
   */
  addItem: function(e) {
    console.log('CardApp.addItem');
    e.preventDefault();
    // create an object and place all aboove input value in it.
    var formObject = {
      id: this.cards.length + 1,
      item: document.getElementById('item').value,
      time: document.getElementById('time').value,
      nameOfClient: document.getElementById('name-of-client').value,
      phoneNumberClient: document.getElementById('phone-number-client').value,
      accessNotes: document.getElementById('acces-notes').value
    };

    this.cards.push(formObject);

    this.saveCardsToLocalStorage();
    this.form.reset();

    this.displayAllCards();
  },


  /**
   * removeItem
   * Remove a card from CardApp.cards and update the UI's card carousel.
   */
  removeItem: function(e) {
    console.log('CardApp.removeItem');
    if (e.target.classList.contains('delete')){
      if (confirm('Are you sure bro?')){

        var li = document.querySelector('.item.active');
        var cardId = parseInt(li.getAttribute('data-card-id').split(`-`)[1]);

        for (var i = 0; i < this.cards.length; i++){
          if (this.cards[i].id, cardId){
            this.cards.splice(i, 1);
          }
        }

        this.saveCardsToLocalStorage();
        this.displayAllCards();

        document.querySelector('.item').classList.add('active')
      }
    }
  },


  /**
   * displayAllCards
   * Display all the cards stored in CardApp.cards. You can call this after
   * updating the CardApp.cards array, to display the cards in the UI.
   */
  displayAllCards: function(){
    console.log('CardApp.displayAllCards');
    this.resetCarousel();
    for (var i = 0; i < this.cards.length; i++){
      this.appendCard(this.cards[i]);
    }
  },


  /**
   * resetCarousel
   * This resets the entire carousel, removing all cards.
   */
  resetCarousel() {
    console.log('CardApp.resetCarousel');
    var cardNodes = document.querySelectorAll('.carousel-inner li.card');
    for (var i = 0; i < cardNodes.length; i++){
      this.itemList.removeChild(cardNodes[i]);
    }
  },


  /**
   * appendCard
   * Create the HTML for a new card and append it to the carousel.
   */
  appendCard: function(card){
    console.log('CardApp.resetCarousel');
    // create a new li element with the text grab from above
    var li = document.createElement('li');
        li.classList.add('item','card');
        li.setAttribute(`data-card-id`,`card-${card.id}`);

    // create a new p element with the text grab from above
    var pOne  = document.createElement('p');
        pOne.className = 'items';
    var pTwo  = document.createElement('p');
        pTwo.className = 'items';
    var pThree  = document.createElement('p');
        pThree.className = 'items';
    var pFour  = document.createElement('p');
        pFour.className = 'items';
    // create delete BUTTON
    var deleteBtn =  document.createElement('button');
        deleteBtn.className = "btn btn-danger btn-sm float-right delete deleteButton";

    // add text node with input values
    li.appendChild(document.createTextNode(card.item));
    pOne.appendChild(document.createTextNode(card.time));
    pTwo.appendChild(document.createTextNode(card.nameOfClient));
    pThree.appendChild(document.createTextNode(card.phoneNumberClient));
    pFour.appendChild(document.createTextNode(card.accessNotes));
    // append the text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append
    li.appendChild(deleteBtn);
    // append p elements into LI; (not sure if this is the best way but its working)
    li.appendChild(pOne);
    li.appendChild(pTwo);
    li.appendChild(pThree);
    li.appendChild(pFour);

    // insert the new element at the beginning of the itemList element, not at the end
    this.itemList.insertBefore(li, this.itemList.firstChild);
  }
};


// Create a new namespace, App
var App = CardApp || {};


// Bootstrap App
document.addEventListener("DOMContentLoaded", function(){
  App.init();
});
