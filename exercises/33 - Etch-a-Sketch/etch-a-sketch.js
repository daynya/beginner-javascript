// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');

// Setup canvas for drawing
// Make a variable called height and width from the same properties on our canvas
const { width, height } = canvas;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // start drawing
ctx.moveTo(200, 200);
ctx.lineTo(200, 200);
ctx.stroke();

// Write a draw function


// Write handler for keys

// Clear / shake function

// Listen for arrow keys
