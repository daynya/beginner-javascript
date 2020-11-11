import {handleResult} from "./handlers";
import { colorsByLength } from "./colors";

const colorsEl = document.querySelector('.colors');

function displayColors(colors) {
  colors.map(color => {
    return `<span class="color">${color}</span>`
  })
}

window.SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

function start() {
  // see if browser supports this
  if(!('SpeechRecognition' in window)) {
    console.log("Sorry your browser does not support speech recognition");
    return;
  }
  // it does work
  console.log('starting...');
  // make new speech recognition
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true
  recognition.onresult = handleResult;
  recognition.start();
}

start();
colorsEl.innerHTML = displayColors();