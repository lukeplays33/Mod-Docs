import { docsItemsJson } from '../assets/jsonFiles/docsItems.js';

let demoTabItem, i;

let description = document.getElementById('description');
let useCase = document.getElementById('useCases');

let items = document.getElementById('docs');

let demo = document.getElementById('demo');

let concatList = ['Information'];

let itemJSON = docsItemsJson[window.sessionStorage.getItem('docItem')].items[window.sessionStorage.getItem('explainItem')];

description.children[1].innerHTML = itemJSON.about.description;
useCase.children[1].innerHTML = itemJSON.about.useCaseDescription;

items.listItems = Object.keys(itemJSON.contents);

for(i of items.children) { // give al ltabbar elements a href so we can connect to the viewpager
    i.href = `#explanationItems`;
}

if (itemJSON.about.demoLink) {
    concatList.unshift('Demo');
    demo.src = itemJSON.about.demoLink;

    demoTabItem = document.getElementById('Demo'); // needs to have a href after creation
    demoTabItem.href = '#demo';
} else {
    demo.remove();
}

items.listItems = Object.keys(itemJSON.contents).concat(concatList);

let information = document.getElementById('Information'); // needs to have a href after creation
information.href = '#information';

items.children[0].click();