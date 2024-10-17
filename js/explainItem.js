import { docsItemsJson } from '../assets/jsonFiles/docsItems.js';

let description = document.getElementById('description');
let items = document.getElementById('docs');

description.children[1].innerHTML = docsItemsJson[window.sessionStorage.getItem('docItem')].items[window.sessionStorage.getItem('explainItem')].about.description;
items.listItems = Object.keys(docsItemsJson[window.sessionStorage.getItem('docItem')].items[window.sessionStorage.getItem('explainItem')].contents);

if(docsItemsJson[window.sessionStorage.getItem('docItem')].items[window.sessionStorage.getItem('explainItem')].about.demo) {
    items.listItems.shift('Demo');
}

items.children[0].click();