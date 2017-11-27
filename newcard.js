
var form = document.getElementById('addForm');

/**
 * get the correct element to append the new carousel item to
 */
// var itemList = document.getElementById('items');
var itemList = document.querySelector('.carousel-inner');


// form submit event

form.addEventListener('submit', addItem);  // create another functions, to clear form and close wclose module winddow.)

// form delete event

itemList.addEventListener('click', removeItem);


// add item  fun fun Function

function addItem(e){

  e.preventDefault();

  // get input value in the modal

  var newItem = document.getElementById('item').value;

  var newItemTwo = document.getElementById('time').value;

  var newItemThree = document.getElementById('name-of-client').value;

  var newItemFour = document.getElementById('phone-number-client').value;

  var newItemFive = document.getElementById('acces-notes').value;


  // create a new li element with the text grab from above

  var li = document.createElement('li');
      /**
       * Set the correct class name for the carousel to work
       */
      // li.className = 'list-group-item';
      li.className = 'item';

      li.style.height = '150px';
      console.log(li)

  // create a new p element with the text grab from above

  var pOne  = document.createElement('p');
      pOne.className = 'items';

  var pTwo  = document.createElement('p');
      pOne.className = 'items';
      console.log(pTwo)

  var pThree  = document.createElement('p');
      pOne.className = 'items';
      console.log(pThree)

  var pFour  = document.createElement('p');
      pOne.className = 'items';
      console.log(pFour)

  // add text node with input value

  li.appendChild(document.createTextNode(newItem));

  pOne.appendChild(document.createTextNode(newItemTwo));

  pTwo.appendChild(document.createTextNode(newItemThree));

  pThree.appendChild(document.createTextNode(newItemFour));

  pFour.appendChild(document.createTextNode(newItemFive));


  // create delete BUTTON
  var deleteBtn =  document.createElement('button');
      deleteBtn.style.width = '80px';
      deleteBtn.style.float = 'right';
      deleteBtn.style.height = '100%';

  // add the classes to the delete BUTTON

  deleteBtn.className = "btn btn-danger btn-sm float-right delete";




  // append the text node

  deleteBtn.appendChild(document.createTextNode('X'));

  // append delete button into the LI

  li.appendChild(deleteBtn);

  // append li to list.

  /**
   * insert the new element at the beginning of the itemList element, not at the end
   */
  // itemList.appendChild(li);
  itemList.insertBefore(li, itemList.firstChild);

  // append p elements into LI; (not sure if this is the best way but its working)
  li.appendChild(pOne);
  li.appendChild(pTwo);
  li.appendChild(pThree);
  li.appendChild(pFour);
  li.appendChild(pFive);




}





// create a function to clear the form



// create a function to cloes the modal window.



// Remove Item Function

function removeItem(e){

    console.log(e.target)
  

  if (e.target.classList.contains('delete')){

    if (confirm('Are you sure bro?')){

      var li = document.querySelector('.item.active');
      
      itemList.removeChild(li);
      
      document.querySelector('.item').classList.add('active')

    }

  }

}



// <-----------------------module section--------->





// add item





//notes

// var btn = document.createElement("BUTTON");        // Create a <button> element
// var t = document.createTextNode("CLICK ME");       // Create a text node
// btn.appendChild(t);                                // Append the text to <button>
// document.body.appendChild(btn);                    // Append <button> to <body>


// var div = document.createElement('div');
// div.className = 'form-group';
//
// var label = document.createElement('label');
// label.className = 'col-sm-2 control-label';
// label.innerHTML = 'Whoa this guy you!!!!';
// label.for = 'inputText';
//
// var div1 = document.createElement('div');
// div1.className = 'col-sm-10';
//
//
// var commentText = document.createElement('textarea');
// commentText.className = 'form-control';
// commentText.id = 'inputText';
// commentText.rows = '3';
// commentText.placeholder = 'Write your comments';
// div.appendChild(label);
// div1.appendChild(commentText);
// div.appendChild(div1);
//
// document.body.appendChild(div);
