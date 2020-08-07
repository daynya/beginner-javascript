function Slider(slider) {
    if (!(slider instanceof Element)) {
        throw new Error('No slider passed in');
    }
    //create variables for working with the slider
    let current;
    let prev;
    let next;
    // select elements needed for the slider
    const slides = slider.querySelector('.slides');
    const prevButton = document.querySelector('.goToPrev');
    const nextButton = document.querySelector('.goToNext');

    function startSlider() {
        current = slider.querySelector('.current') || slides.firstElementChild;
        console.log(current);
    }

    //when this slider is created, run the start slider function
    startSlider();

}

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));