
import { PichaiUX } from 'https://lukeplays33.github.io/Pichai-UX/imports.js';
import { docsItemsJson } from '../assets/jsonFiles/docsItems.js';

let pichai = new PichaiUX();
pichai.initialize();

let drawer = document.getElementById('draawer');
pichai.createSimpleDrawer(drawer, 'auto');

let tutorials = document.getElementById('tutorials');

document.getElementById('HomeButton').click();

for(i of Object.keys(docsItemsJson)) {
  let a = document.createElement('a');
  a.innerHTML = String(i).replaceAll('_', '');
  a.href = '../Mod-Docs/docPages/docs.html';

  drawer.insertBefore(a, tutorials);
}

let items = document.getElementsByTagName('A');
let i;
for (i of items) {
  i.addEventListener('click', function () {
    document.getElementById('pages').src = this.href;
    document.title = `Mod Docs! - ${this.innerHTML}`;
  });
}