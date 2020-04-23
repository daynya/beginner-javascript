// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.classList.add('wrapper');

// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
const myList = document.createElement('ul');

// add three list items with the words "one, two three" in them
const item = document.createElement('li');
item.textContent = 'one';
myList.appendChild(item);
const item2 = document.createElement('li');
item2.textContent = 'two';
myList.insertAdjacentElement('afterbegin', item);
const item3 = document.createElement('li');
item3.textContent = 'three';
myList.insertAdjacentElement('afterbegin', item2);

// put that list into the above wrapper
myDiv.insertAdjacentText('afterbegin', myList);

// create an image
const image = document.createElement('img');
// set the source to an image
image.src = 'https://picsum.photos/250';

// set the width to 250
// add a class of cute
image.classList.add('cute');

// add an alt of Cute Puppy
image.alt = 'Cute Puppy';
// Append that image to the wrapper
myDiv.append(image);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above

// add a class to the second paragraph called warning
// remove the first paragraph

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// Have that function make 4 cards

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
