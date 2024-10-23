import { PichaiUX } from 'https://lukeplays33.github.io/Pichai-UX/imports.js';

let pichai = new PichaiUX();

document.getElementById('settingsListView').addEventListener('itemSelected', function (e) {
    alert(e.detail.index)
    if (e.detail.index == 2) {
        window.open('https://buymeacoffee.com/sketchdonate');
    }
});