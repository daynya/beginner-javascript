// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.classList.add('wrapper');

// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
// const myList = document.createElement('ul');
const ul = `<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
`

// add three list items with the words "one, two three" in them
// const item = document.createElement('li');
// item.textContent = 'one';
// myList.appendChild(item);
// const item2 = document.createElement('li');
// item2.textContent = 'two';
// item.insertAdjacentElement('afterend', item2);
// const item3 = document.createElement('li');
// item3.textContent = 'three';
// item2.insertAdjacentElement('afterend', item3);

// put that list into the above wrapper
// myDiv.appendChild(myList);
myDiv.innerHTML = ul;
console.log(myDiv);

// create an image
const image = document.createElement('img');
// set the source to an image
image.src = 'https://picsum.photos/500';

// set the width to 250
image.width = 250;
image.height = 250;
// add a class of cute
image.classList.add('cute');

// add an alt of Cute Puppy
image.alt = 'Cute Puppy';
// Append that image to the wrapper
myDiv.append(image);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const myHTML = `
    <div class="divvy">
        <p>Paragraph One</p>
        <p>Paragraph Two</p>
    </div>
`
const ulElement = myDiv.querySelector('ul');
ulElement.insertAdjacentHTML('beforebegin', myHTML);

// add a class to the second paragraph called warning
const newDiv = myDiv.querySelector('.divvy');
newDiv.children[1].classList.add('warning');
// remove the first paragraph
newDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
    const html = `
        <div class="playerCard">
            <h2>${name} - ${age}</h2>
            <p>Their height is ${height} inches and they are ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
            <button class="delete" type="button">&times; Delete</button>
        </div>
    `;
    return html;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
// Have that function make 4 cards
let cardsHTML = generatePlayerCard('Daynya', 30, 64);
cardsHTML += generatePlayerCard('Michael', 30, 70);
cardsHTML += generatePlayerCard('Seymour', 10, 10);
cardsHTML += generatePlayerCard('Bean', 12, 10);

cards.innerHTML = cardsHTML;
myDiv.insertAdjacentElement('beforebegin', cards);
// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
console.log(buttons);
// make out delete function
function deleteCard() {
    const buttonThatGotClicked = event.currentTarget;
    buttonThatGotClicked.closest('.playerCard').remove();
};
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));
