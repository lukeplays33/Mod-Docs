import { docsItemsJson } from '../assets/jsonFiles/docsItems.js';

let description = document.getElementById('description');
let items = document.getElementById('docs');

let demo = document.getElementById('demo');

let concatList = ['Information'];

let itemJSON = docsItemsJson[window.sessionStorage.getItem('docItem')].items[window.sessionStorage.getItem('explainItem')];

description.children[1].innerHTML = itemJSON.about.description;
items.listItems = Object.keys(itemJSON.contents);

if(itemJSON.about.demoLink) {
    concatList.unshift('Demo');
    demo.src = itemJSON.about.demoLink;
}

items.listItems = Object.keys(itemJSON.contents).concat(concatList);
items.children[0].click();