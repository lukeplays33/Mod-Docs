import { docsItemsJson } from '../assets/jsonFiles/docsItems.js';

let description = document.getElementById('description');

description.children[1].innerHTML = docsItemsJson[window.sessionStorage.getItem('docItem')].description;