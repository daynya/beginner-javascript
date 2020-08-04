const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// we need an array to hold our state
let items = [];

// listen for when something is input and submitted
function handleSubmit(e) {
    e.preventDefault();
    const name = e.currentTarget.item.value;
    if(!name) return;
    const item = {
        name: name,
        id: Date.now(),
        complete: false,
    };
    // push items into state
    items.push(item);
    console.log(`There are now ${items.length} in your state`);
    // clear the form
    e.currentTarget.item.value = '';
    // fire off custom event that will tell anyone else that the items have been updated
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
    
}

function displayItems() {
    const html = items
      .map(
        item => `<li class="shopping-item">
        <input
          value="${item.id}"
          type="checkbox"
          ${item.complete && 'checked'}
        >
        <span class="itemName">${item.name}</span>
        <button
          aria-label="Remove ${item.name}"
          value="${item.id}"
        >&times;</buttonaria-label="Remove>
    </li>`
      )
      .join('');
    list.innerHTML = html;
  }

function mirrorToLocalStorage() {
    console.info('saving items to localstorage');
    localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
    console.info('restoring from local storage');
    // pull items from local storage
    const lsItems = JSON.parse(localStorage.getItem('items'));
    if(lsItems.length) {
        // doesn't work because items is a const
        // items = lsItems;
        items.push(...lsItems);
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
    }
}

function deletingItem(id) {
    console.log('Deleting item!', id);
    // udpate items array without this one
    items = items.filter(item => item.id !== id);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
    console.log('marking as complete', id);
    const itemRef = items.find(item => item.id === id);
    itemRef.complete = !itemRef.complete;
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
// Event Delegation - listen for click on the list <ul>, 
// but then delegate the click over to the butotn if that
// is what was clicked.
list.addEventListener('click', function(e) {
    const id = parseInt(e.target.value);
    if(e.target.matches('button')) {
        deletingItem(id);
    }
    if(e.target.matches('input[type="checkbox"]')) {
        markAsComplete(id);
    }
});
restoreFromLocalStorage();

