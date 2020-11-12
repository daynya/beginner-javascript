import { isValidColor } from "./colors";

function logWords(results) {
  console.log(results[results.length - 1][0].transcript);
}

export function handleResult({ results }) {
  logWords(results);
  const words = results[results.length - 1][0].transcript;
  console.log(words);
  // lowercase everything
  let color = words.toLowerCase();
  // remove spaces
  color = color.replace(/\s/g, '');
  // check if it is a valid color
  if(!isValidColor(color)) return;
  // if it is, show UI for that color
  const colorSpan = document.querySelector(`.${ color }`);
  colorSpan.classList.add('got');
  document.body.style.backgroundColor = color;
}