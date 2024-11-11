import { PichaiUX } from 'https://lukeplays33.github.io/Pichai-UX/imports.js';

import { settings } from '../assets/jsonFiles/supportSettings.js';

let about = document.getElementById('What is Mod Docs?');
let donate = document.getElementById('Donate to Mod Docs!');

if(!settings.about.message) {
    about.remove();
} else {
    about.innerHTML = about.innerHTML.replace('What is Mod Docs?',settings.about.message);
}

if(!settings.donations.message) {
    donate.remove();
} else {
    donate.innerHTML = donate.innerHTML.replace('What is Mod Docs?',settings.donations.message);
}

let pichai = new PichaiUX();

document.getElementById('settingsListView').addEventListener('itemSelected', function (e) {
    if (e.detail.index == 1) {
        window.open(settings.about.url);
    } else if (e.detail.index == 2) {
        window.open(settings.donations.url);
    }
});