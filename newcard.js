
var form = document.getElementById('addForm');

/**
 * get the correct element to append the new carousel item to
 */
// var itemList = document.getElementById('items');
var itemList = document.querySelector('.carousel-inner');

var saveCardInfo = [];

// form submit event

form.addEventListener('submit', addItem);  

// form delete event

itemList.addEventListener('click', removeItem);


const items = JSON.parse(localStorage.getItem('saveCardInfo')) || [];




// add item  fun fun Function

function addItem(e){

  e.preventDefault();

  // get input value from the modal

  var newItem = document.getElementById('item').value;
  
  var newItemTwo = document.getElementById('time').value;

  var newItemThree = document.getElementById('name-of-client').value;

  var newItemFour = document.getElementById('phone-number-client').value;
  
  var newItemFive = document.getElementById('acces-notes').value;
  
  // create an object and place all aboove input value in it. 

  var formObject = {
    
      item: newItem,
      time: newItemTwo,
      nameOfClient:newItemThree,
      phoneNumberClient:newItemFour,
      accessNotes:newItemFive  
  }

  saveCardInfo.push(formObject);

  localStorage.setItem('saveCardInfo', JSON.stringify(saveCardInfo));
  
  // create a new li element with the text grab from above



  var li = document.createElement('li');
      /**
       * Set the correct class name for the carousel to work
       */
      // li.className = 'list-group-item';
      li.className = 'item';
      li.style.maxWidth = '95%';
      li.style.border = 'solid 1px #d3d3d3';
      li.style.padding = '10px';
      li.style.height = '150px';
      li.style.marginRight = '12%';
      li.style.marginLeft = '12%';
      li.style.fontWeight = '500';
      li.style.fontSize = '14px';
      

  // create a new p element with the text grab from above

  var pOne  = document.createElement('p');
      pOne.className = 'items';
      pOne.style.fontSize = '12px';
      pOne.style.fontWeight = '400';
      pOne.style.marginTop = '5px';
      

  var pTwo  = document.createElement('p');
      pTwo.className = 'items';
      pTwo.style.fontSize = '12px';
      pTwo.style.fontWeight = '200';
      
    

  var pThree  = document.createElement('p');
      pThree.className = 'items';
      pThree.style.fontSize = '12px';
      pThree.style.fontWeight = '200';
    

  var pFour  = document.createElement('p');
      pFour.className = 'items';
      pFour.style.fontSize = '12px';
      pFour.style.fontWeight = '200';
      

  // add text node with input value

  li.appendChild(document.createTextNode(newItem));

  pOne.appendChild(document.createTextNode(newItemTwo));

  pTwo.appendChild(document.createTextNode(newItemThree));

  pThree.appendChild(document.createTextNode(newItemFour));

  pFour.appendChild(document.createTextNode(newItemFive));


  // create delete BUTTON
  var deleteBtn =  document.createElement('button');
      deleteBtn.style.width = '50px';
      deleteBtn.style.float = 'right';
      deleteBtn.style.height = '50px';
      deleteBtn.style.borderRadius = '50%'
      deleteBtn.style.border = 'solid 1px red';
      deleteBtn.style.backgroundColor = 'white';
      deleteBtn.style.color = 'red';
      

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
  
  
  // localStorage.setItems('saveCardInfo', JSON.stringify(saveCardInfo));

  this.reset();
  
   // .modal('hide'); might have to store the info first

    // }
  
}

// function myCloseModalFunction () {
// 
//   var x = document.getElementById('exampleModalLong');
// 
//   if (x.style.visibility === "visible") {
// 
//     x.style.visibility = 'hidden';
// 
//   } else {
// 
//     x.style.display = "none";
// 
//   }
// 
// 
// }







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
