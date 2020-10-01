import { generateOptions } from './utils.js';
import { init } from './init.js';

//start the app
const app = document.querySelector('.app');

app.addEventListener('mouseenter', init, {once: true});
