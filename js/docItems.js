import { docsItemsJson } from '../assets/jsonFiles/docsItems.js';

let description = document.getElementById('description');
let items = document.getElementById('items');

description.children[1].innerHTML = docsItemsJson[window.sessionStorage.getItem('docItem')].description;
items.listItems = Object.keys(docsItemsJson[window.sessionStorage.getItem('docItem')].items)