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

function handleBuyButtonClick() {
  console.log("you clicked a button");
  const button = event.target;
  // console.log(button.textContent);
  // console.log(parseFloat(event.target.dataset.price));
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.target === event.currentTarget);
  // stop this event from bubbling up to other layers
  // event.stopPropagation();
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener('click', function(event) {
  console.log('you clicked the window!');
  // this shows what was clicked on 
  console.log(event.target);
  console.log(event.type);
  console.log(event.bubbles);
  event.stopPropagation();
}, { capture: true });

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', function(e) {
  console.log(e.currentTarget);
  console.log(this);
});