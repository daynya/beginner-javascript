const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('🐛 IT GOT CLICKED!!!');
}

const hooray = () => console.log('HOORAY!');

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', hooray);

butts.removeEventListener('click', handleClick);

// Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function buyItem() {
  console.log('buying item');
};

function handleBuyButtonClick(buyButton) {
  console.log('Binding the buy button');
  buyButton.addEventListener('click', buyItem);
}

//buyButtons.forEach(handleBuyButtonClick);
buyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log("you clicked it");
  })
})
