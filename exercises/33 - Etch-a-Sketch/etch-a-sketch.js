// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 10;

// Setup canvas for drawing
// Make a variable called height and width from the same properties on our canvas
const { width, height } = canvas;

// Create random x and y start points on canvas
let x = Math.floor(Math.random() * width); 
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

ctx.beginPath(); // start drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a draw function
function draw({ key }) {
    console.log(key);
    // start path
    ctx.beginPath();
    ctx.moveTo(x, y);
    // move x and y values depending on what user did
    switch (key) {
        case 'ArrowUp':
            y -= MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x += MOVE_AMOUNT;
        break;
        case 'ArrowDown':
            y += MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT;
            break;
        default: 
            break;
    }
    ctx.lineTo(x,y);
    ctx.stroke();
}

// Write handler for keys
function handleKey(e) {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({ key: e.key });
    }
}

// Clear / shake function

// Listen for arrow keys
window.addEventListener('keydown', handleKey);