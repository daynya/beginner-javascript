// const p = document.querySelector('p');
// const imgs = document.querySelectorAll('.item img');
// const item2 = document.querySelector('.item2');
// const item2image = item2.querySelector('img');
// const heading = document.querySelector('h2');

// console.log(heading.textContent);
// // heading.textContent = "updated text!";
// // console.log(heading.textContent);
// // console.log(heading.innerText);

// console.log(heading.innerHTML);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);
// //pizzaList.textContent = `${pizzaList.textContent} 🍕`; 
// pizzaList.insertAdjacentText('beforeend', '🍕')

// Classes!
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
console.log(pic.classList);

function toggleRound() {
    pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt= 'Cute pup'; // setter
console.log(pic.alt); // getter
console.log(pic.naturalWidth); // getter

// wait until page loads to run
window.addEventListener('load', function() {
    console.log(pic.naturalWidth);
});

//pic.setAttribute('alt', 'really cute pup');
//console.log(pic.getAttribute('alt'));

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', function() {
    alert(`Welcome ${custom.dataset.name} ${custom.dataset.last} `);
});