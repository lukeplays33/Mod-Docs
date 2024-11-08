import { PichaiUX } from 'https://lukeplays33.github.io/Pichai-UX/imports.js';

import { settings } from '../assets/jsonFiles/supportSettings.js';

let about = document.getElementById('What is Mod Docs?');
about.innerText = settings.about.message;

let pichai = new PichaiUX();

document.getElementById('settingsListView').addEventListener('itemSelected', function (e) {
    if (e.detail.index == 1) {
        window.open(settings.about.url);
    } else if (e.detail.index == 2) {
        window.open('https://buymeacoffee.com/sketchdonate');
    }
});