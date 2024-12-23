import { PichaiUX } from 'https://lukeplays33.github.io/Pichai-UX/imports.js';
import { docsItemsJson } from '../assets/jsonFiles/docsItems.js';
import { tutorialsJson } from '../assets/jsonFiles/tutorials.js';

let pichai = new PichaiUX();
pichai.initialize();

let drawer = document.getElementById('draawer');
pichai.createSimpleDrawer(drawer, 'auto');

let tutorials = document.getElementById('tutorials');
let iframe = document.getElementById('pages');

let i;

document.getElementById('HomeButton').click();

if(Object.keys(tutorialsJson).length == 0) {
  tutorials.after(nothingFound());
}

if(Object.keys(docsItemsJson).length == 0) {
  tutorials.before(nothingFound());
}


for (i of Object.keys(docsItemsJson)) { // load all doc items
  let a = document.createElement('li');
  a.innerHTML = String(i).replaceAll('_', ' ');
  a.id = i;
  a.href = '../Mod-Docs/docPages/docsItems.html';

  drawer.insertBefore(a, tutorials);
}

let items = drawer.getElementsByTagName('*');
//items = items.concat(drawer.getElementsByTagName('A'));

for (i of items) {
  i.class = '';

  i.addEventListener('click', function (e) {
    if (this.id == 'promo') {
      e.preventDefault();
      e.stopPropagation();

      window.open('https://lukeplays33.github.io/The-Magic-Garden/pages/about/moddocs.html'); // open link to moddocs about page to inform and promote mod docs
    } else if(this.id == 'promoComp') {
      window.open('https://lukeplays33.github.io/The-Magic-Garden/');

    } else if(!this.classList.contains('header')) {
      this.parentNode.getElementsByClassName('current')[0].classList.remove('current');
      this.classList.add('current');

      iframe.src = this.href;
      window.sessionStorage.setItem('docItem', this.id);
      document.title = `Mod Docs! - ${this.innerHTML}`;

      if (this.parentNode.platform == 'mobile' && this.tagName == 'LI') {
        this.parentNode.toggle.click();
      }
    }
  });
}

function nothingFound() {
  let p = document.createElement('p');
  p.innerHTML = 'No articles found :(';
  p.classList.add('nothingFound');

  return p;
}