function Slider(slider) {
    if (!(slider instanceof Element)) {
        throw new Error('No slider passed in');
    }

    // select elements needed for the slider
    this.slides = slider.querySelector('.slides');
    this.slider = slider;
    const prevButton = slider.querySelector('.goToPrev');
    const nextButton = slider.querySelector('.goToNext');

    
    //when this slider is created, run the start slider function
    this.startSlider();
    this.applyClasses();

    // event listeners
    prevButton.addEventListener('click', () => this.move('back'));
    nextButton.addEventListener('click', () => this.move());
}

Slider.prototype.startSlider = function() {
    this.current = this.slider.querySelector('.current') || this.slides.firstElementChild;
    this.prev = this.current.previousElementSibling || this.slides.lastElementChild;
    this.next = this.current.nextElementSibling || this.slides.firstElementChild;
}

Slider.prototype.applyClasses = function() {
    this.current.classList.add('current');
    this.prev.classList.add('prev');
    this.next.classList.add('next');
}

Slider.prototype.move = function(direction) {
    // first strip all of the classes off of the current slides
    const classesToRemove = ['prev', 'current', 'next'];
    this.prev.classList.remove(...classesToRemove);
    this.current.classList.remove(...classesToRemove);
    this.next.classList.remove(...classesToRemove);
    if(direction === 'back') {
        // make new array of new values, and descruture them over and into prev, current and next variables
        [this.prev, this.current, this.next] = [
            // get the prev slide, if there is none, get the last slide from entire slider
            this.prev.previousElementSibling || this.slides.lastElementChild,
            this.prev,
            this.current
        ];
    } else {
        [this.prev, this.current, this.next] = [
            this.current,
            this.next,
            // get next slide, if it's at the end, wrap and get first slide in slider
            this.next.nextElementSibling || this.slides.firstElementChild,
        ];
    }
    this.applyClasses();
}

const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));

window.dogSlider = dogSlider;
window.addEventListener('keyup', function(e) {
    if(e.key === 'ArrowRight') {
        dogSlider.move();
    }
    if(e.key === 'ArrowLeft') {
        dogSlider.move('back');
    }
});
console.log(mySlider, dogSlider);