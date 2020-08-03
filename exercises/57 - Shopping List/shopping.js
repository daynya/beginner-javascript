const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// we need an array to hold our state
const items = [];

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
            <input type="checkbox">
            <span class="itemName">${item.name}</span>
            <button aria-label="Remove ${item.name}">&times;</button>
    </li>`
        )
        .join('');
    list.innerHTML = html;
    console.log(html);
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

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);

restoreFromLocalStorage();

const buttons = list.querySelector