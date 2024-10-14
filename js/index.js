
import { PichaiUX } from 'https://lukeplays33.github.io/Pichai-UX/imports.js';
import { docsItemsJson } from '../assets/jsonFiles/docsItems.js';

let pichai = new PichaiUX();
pichai.initialize();

let drawer = document.getElementById('draawer');
pichai.createSimpleDrawer(drawer, 'auto');

let hide = ['Settings', 'Support', 'Donate', 'About'];
let ignore = ['Recent', 'New', 'All', 'Home'];

let items = document.getElementsByTagName('A');
let i;
for (i of items) {
  i.addEventListener('click', function () {


    document.getElementById('pages').src = this.href;

    document.title = `Mod Docs! - ${this.innerHTML}`;
  });
}

document.getElementById('HomeButton').click();

for(i of docsItemsJson.keys) {

}