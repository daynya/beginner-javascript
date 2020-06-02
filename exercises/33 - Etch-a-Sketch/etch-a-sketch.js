// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');

// Setup canvas for drawing
// Make a variable called height and width from the same properties on our canvas
const { width, height } = canvas;

// Create random x and y start points on canvas
const x = Math.floor(Math.random() * width); 
const y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // start drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a draw function


// Write handler for keys
function handleKey(e) {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        console.log(e.key);
        console.log("handling key");
    }

}

// Clear / shake function

// Listen for arrow keys
window.addEventListener('keydown', handleKey);