var form = document.querySelector('form');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//submit form event
form.addEventListener('submit' , additem);

//delete item event
itemList.addEventListener('click' , removeItem);

// Filter event
filter.addEventListener('keyup', filterItems);

//add items
function additem(e){
     e.preventDefault();

     //get new item value
     var newItem = document.getElementById('addlist').value;

     //create new list item
     var li = document.createElement('li');

     //add class
     li.className = 'list-group-item';

     //add item to li
     li.appendChild(document.createTextNode(newItem));

     //create delete button
     var delBtn = document.createElement('li');
     delBtn.style.float = 'right';

     //add class
     delBtn.classList = 'btn btn-danger btn-sm delete';

     //add items
     delBtn.appendChild(document.createTextNode('X'));

     //add delete to li
     li.appendChild(delBtn);

     itemList.appendChild(li);
}

function removeItem(e){
     if(e.target.classList.contains('delete')){
          if(confirm('Are you sure to delete?')){
               var li = e.target.parentElement;
               itemList.removeChild(li);
               
               newItem.value = '';
          }
     }
}

// Filter Items
function filterItems(e){
     // convert text to lowercase
     var text = e.target.value.toLowerCase();
     // Get lis
     var items = itemList.getElementsByTagName('li');
     // Convert to an array
     Array.from(items).forEach(function(item){
       var itemName = item.firstChild.textContent;
       if(itemName.toLowerCase().indexOf(text) != -1){
         item.style.display = 'block';
       } else {
         item.style.display = 'none';
       }
     });
   }
