const p = document.querySelector('p');
const imgs = document.querySelectorAll('.item img');
const item2 = document.querySelector('.item2');
const item2image = item2.querySelector('img');
const heading = document.querySelector('h2');

console.log(heading.textContent);
// heading.textContent = "updated text!";
// console.log(heading.textContent);
// console.log(heading.innerText);

console.log(heading.innerHTML);

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);
//pizzaList.textContent = `${pizzaList.textContent} 🍕`; 
pizzaList.insertAdjacentText('beforeend', '🍕');