import { PichaiUX } from 'https://dreamforge-forging-our-dreams-in-tech.github.io/Pichai-UX/imports.js';

let options = { homeLink: 'https://lukeplays33.github.io/Mod-Docs/', blur:'0px', transparency:'1.0', hueRotation:0 }

let pichai = new PichaiUX(options);
pichai.initialize();

window.addEventListener("pichaiUXLoaded", function () {
    document.body.style.backgroundImage = 'none';
    document.documentElement.style.backgroundColor = 'TRANSPARENT';
    document.documentElement.style.backdropFilter = 'hue-rotate(0deg) !important';
});