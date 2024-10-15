import { docsItemsJson } from '../assets/jsonFiles/docsItems.js';

let description = document.getElementById('description');

description.innerHTML = docsItemsJson[window.sessionStorage.getItem('docItem')].description;