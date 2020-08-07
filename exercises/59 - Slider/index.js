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
    console.log(slides);

}

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));