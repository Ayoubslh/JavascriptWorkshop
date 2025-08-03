

//queryselectors
const inputField = document.querySelector('input[type="text"]');
const addButton = document.querySelector('.addbtn');
const itemList = document.querySelector('.itemarea ul');
const editButtons = document.querySelectorAll('.editbtn');
const deleteButtons = document.querySelectorAll('.deletebtn');

// Event Listeners
addButton.addEventListener('click', addItem);
editButtons.forEach(button => button.addEventListener('click', editItem));
deleteButtons.forEach(button => button.addEventListener('click', deleteItem));


//variables
let currentEditItem = null;
let itemArray = ['Sample Task 1', 'Sample Task 2', 'Sample Task 3', 'Sample Task 4'];
// Function to add a new item
function addItem() {
    const itemText = inputField.value.trim();
    if (itemText === '') {
        alert('Please enter a task.');
        return;
    }

    const newItem = document.createElement('li');
    newItem.innerHTML = `<span>${itemText}</span>
                         <div>
                             <button class="editbtn">Edit</button>
                             <button class="deletebtn">Delete</button>
                         </div>`;
    
    itemList.appendChild(newItem);
    itemArray.push(itemText);
    inputField.value = '';
    
    newItem.querySelector('.editbtn').addEventListener('click', editItem);
    newItem.querySelector('.deletebtn').addEventListener('click', deleteItem);
}

// Function to edit an existing item

function editItem(event) {
    const item = event.target.closest('li');
    const itemText = item.querySelector('span').textContent;
     const inputField = document.createElement('input');
    inputField.type = 'text';
    if (currentEditItem) {
        alert('You are already editing an item. Please save or cancel the current edit first.');
        return;
    }
    inputField.classList.add('edit-input');
    item.replaceChild(inputField, item.querySelector('span'));

    inputField.value = itemText;
    currentEditItem = item;

    // Change the button text to "Save"
    event.target.textContent = 'Save';
    event.target.removeEventListener('click', editItem);
    event.target.addEventListener('click', (event) => saveItem(event, inputField, item));
}

// Function to save the edited item
function saveItem(event, inputField, item) {
    const newText = inputField.value.trim();
    const newspan = document.createElement('span');
    if (newText === '') {
        alert('Please enter a task.');
        return;
    }
    newspan.textContent = newText;
    item.replaceChild(newspan, inputField);
    currentEditItem = null;
  

    event.target.textContent = 'Edit';
    event.target.removeEventListener('click', saveItem);
    event.target.addEventListener('click', editItem);
}


function deleteItem(event) {
    const item = event.target.closest('li');
    item.remove();
}


function clearAllItems(event) {
    itemList.innerHTML = '';
    itemArray = [];
}


function loadItems() {
    itemList.innerHTML = '';
    //foreach loop
    itemArray.forEach(itemText => {
        const newItem = document.createElement('li');
        newItem.innerHTML = `<span>${itemText}</span>
                             <div>
                                 <button class="editbtn">Edit</button>
                                 <button class="deletebtn">Delete</button>
                             </div>`;
        itemList.appendChild(newItem);
        
        newItem.querySelector('.editbtn').addEventListener('click', editItem);
        newItem.querySelector('.deletebtn').addEventListener('click', deleteItem);
    });
    //map loop

    //    itemArray.map(itemText => {
    //     const newItem = document.createElement('li');
    //     newItem.innerHTML = `<span>${itemText}</span>
    //                          <div>
    //                              <button class="editbtn">Edit</button>
    //                              <button class="deletebtn">Delete</button>
    //                          </div>`;
    //     itemList.appendChild(newItem);
        
    //     newItem.querySelector('.editbtn').addEventListener('click', editItem);
    //     newItem.querySelector('.deletebtn').addEventListener('click', deleteItem);
    // });



    //diference between forEach and map
    // forEach is used for executing a function on each element of an array without returning a
    // new array, while map is used to create a new array by applying a function to each element of the original array.
    // In this case, both loops achieve the same result, but forEach is more suitable
    // when you don't need to create a new array, while map is used when you want to transform the data.
    // In this case, both loops achieve the same result, but forEach is more suitable

}

loadItems();


