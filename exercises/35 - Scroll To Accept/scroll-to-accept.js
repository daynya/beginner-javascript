const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

function obCallback(payload) {
    if(payload[0].isIntersecting){
        button.disabled = false;
    // stop observing button
        ob.unobserve(terms.lastElementChild);
    }
}

const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
});

ob.observe(terms.lastElementChild);
