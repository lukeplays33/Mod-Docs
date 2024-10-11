
import { PichaiUX } from 'https://lukeplays33.github.io/Pichai-UX/imports.js';

let pichai = new PichaiUX();
pichai.initialize();

let hide = ['Settings', 'Contact', 'Support', 'Donate', 'About'];
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
    
    document.getElementsByTagName('x-title')[0].setAttribute('titleText', this.innerHTML);
    document.title = `Mod Docs! - ${this.innerHTML}`;
  });
}

document.getElementById('HomeButton').click();

let menu = document.getElementById('toggleMenu');
let drawer = document.getElementById('draawer');

menu.addEventListener('click', function () {
  if (menu.classList.contains('closed')) {
    menu.classList.remove('closed');
    menu.innerHTML = 'close';

    drawer.style.display = 'flex';
  } else {
    menu.classList.add('closed');
    menu.innerHTML = 'menu';

    drawer.style.display = 'none';
  }
});

if (screen.width < 600) {
  menu.click();
}