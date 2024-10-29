import { PichaiUX } from 'https://lukeplays33.github.io/Pichai-UX/imports.js';

let pichai = new PichaiUX();

document.getElementById('settingsListView').addEventListener('itemSelected', function (e) {
    if (e.detail.index == 1) {
        window.open('../Mod-Docs/docPages/about.html');
    } else if (e.detail.index == 2) {
        window.open('https://buymeacoffee.com/sketchdonate');
    }
});