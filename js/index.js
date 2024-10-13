
import { PichaiUX } from 'https://lukeplays33.github.io/Pichai-UX/imports.js';
import { waitForElement } from '../js/utils.js';

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
    if (hide.includes(this.innerHTML)) {
      document.getElementById('docs').style.display = 'none';
      document.getElementById('bottom_nav').style.display = 'none';
    } else if (ignore.includes(this.innerHTML)) {
      document.getElementById('docs').style.display = 'none';
      document.getElementById('bottom_nav').style.display = 'flex';
    } else {
      document.getElementById('docs').style.display = 'flex';
      document.getElementById('bottom_nav').style.display = 'none';
    }

    document.getElementById('pages').src = this.href;

    document.title = `Mod Docs! - ${this.innerHTML}`;
  });
}

document.getElementById('HomeButton').click();