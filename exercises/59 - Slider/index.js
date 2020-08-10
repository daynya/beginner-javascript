function Slider(slider) {
    if (!(slider instanceof Element)) {
        throw new Error('No slider passed in');
    }
    //create variables for working with the slider
    let prev;
    let current;
    let next;
    // select elements needed for the slider
    const slides = slider.querySelector('.slides');
    const prevButton = slider.querySelector('.goToPrev');
    const nextButton = slider.querySelector('.goToNext');

    function startSlider() {
        current = slider.querySelector('.current') || slides.firstElementChild;
        prev = current.previousElementSibling || slides.lastElementChild;
        next = current.nextElementSibling || slides.firstElementChild;
        console.log({ current, prev, next });
    }

    function applyClasses() {
        current.classList.add('current');
        prev.classList.add('prev');
        next.classList.add('next');
    }

    function move(direction) {
        // first strip all of the classes off of the current slides
        const classesToRemove = ['prev', 'current', 'next'];
        prev.classList.remove(...classesToRemove);
        current.classList.remove(...classesToRemove);
        next.classList.remove(...classesToRemove);
        if(direction === 'back') {
            // make new array of new values, and descruture them over and into prev, current and next variables
            [prev, current, next] = [
                // get the prev slide, if there is none, get the last slide from entire slider
                prev.previousElementSibling || slides.lastElementChild,
                prev,
                current
            ];
        } else {
            [prev, current, next] = [
                current,
                next,
                // get next slide, if it's at the end, wrap and get first slide in slider
                next.nextElementSibling || slides.firstElementChild,
            ];
        }
        applyClasses();
    }

    //when this slider is created, run the start slider function
    startSlider();
    applyClasses();

    // event listeners
    prevButton.addEventListener('click', () => move('back'));
    nextButton.addEventListener('click', move);
}

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));