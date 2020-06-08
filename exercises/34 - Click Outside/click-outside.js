const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');

function handleCardButtonClick(event) {
    const button = event.currentTarget;
    const card = button.closest('.card');
    const imgSrc = card.querySelector('img').src;
    const desc = card.dataset.description;
    modalInner.innerHTML = ` img src`
    console.log(desc);
}

cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick));

