const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// we need an array to hold our state
const items = [];

// listen for when something is input and submitted
function handleSubmit(e) {
    e.preventDefault();
    const name = e.currentTarget.item.value;
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
    displayItems();
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

shoppingForm.addEventListener('submit', handleSubmit);

// keep track of shopping list items and if they are complete


// 