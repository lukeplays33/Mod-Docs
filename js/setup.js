import { PichaiUX } from 'https://lukeplays33.github.io/Pichai-UX/imports.js';

let pichai = new PichaiUX();
pichai.initialize();

let interval = window.setInterval( async () => {
    document.body.style.backgroundImage = 'none';
}, 500);