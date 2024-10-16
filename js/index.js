
import { PichaiUX } from 'https://lukeplays33.github.io/Pichai-UX/imports.js';
import { docsItemsJson } from '../assets/jsonFiles/docsItems.js';

let pichai = new PichaiUX();
pichai.initialize();

let drawer = document.getElementById('draawer');
pichai.createSimpleDrawer(drawer, 'auto');

let tutorials = document.getElementById('tutorials');

let i;

document.getElementById('HomeButton').click();

for(i of Object.keys(docsItemsJson)) {
  let a = document.createElement('li');
  a.innerHTML = String(i).replaceAll('_', '');
  a.href = '../Mod-Docs/docPages/docsItems.html';

  drawer.insertBefore(a, tutorials);
}

let items = drawer.getElementsByTagName('LI');
item = items.concat(drawer.getElementsByTagName('A'));

for (i of items) {
  i.addEventListener('click', function (e) {
    //e.preventDefault();
    
    document.getElementById('pages').src = this.href;
    window.sessionStorage.setItem('docItem', this.innerHTML);
    document.title = `Mod Docs! - ${this.innerHTML}`;
  });
}