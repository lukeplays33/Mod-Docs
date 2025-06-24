import { PichaiUX } from 'https://dreamforge-forging-our-dreams-in-tech.github.io/Pichai-UX/imports.js';

let options = { homeLink: 'https://lukeplays33.github.io/Mod-Docs/', hueRotation:0 }

let pichai = new PichaiUX(options);
pichai.initialize();

window.addEventListener("pichaiUXLoaded", function () {
    document.body.style.backgroundImage = 'none';
    document.documentElement.style.backgroundColor = 'TRANSPARENT';
});