import { docsItemsJson } from '../assets/jsonFiles/docsItems.js';

let description = document.getElementById('description');
let items = document.getElementById('items');

console.log(docsItemsJson[window.sessionStorage.getItem('docItem')][window.sessionStorage.getItem('explainItem')].about.description)
description.children[1].innerHTML = docsItemsJson[window.sessionStorage.getItem('docItem')][window.sessionStorage.getItem('explainItem')].about.description;
items.listItems = Object.keys(docsItemsJson[window.sessionStorage.getItem('docItem')][window.sessionStorage.getItem('explainItem')].contents);

items.addEventListener('itemSelected', function (e) {
    parent.document.title = 'Mod Docs - ' + e.detail.value;
    parent.document.getElementById('pages').src = '../Mod-Docs/docPages/explainItem.html';
});