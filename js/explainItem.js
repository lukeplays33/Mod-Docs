import { docsItemsJson } from '../assets/jsonFiles/docsItems.js';

let description = document.getElementById('description');
let items = document.getElementById('docs');

let concatList = ['Information'];

description.children[1].innerHTML = docsItemsJson[window.sessionStorage.getItem('docItem')].items[window.sessionStorage.getItem('explainItem')].about.description;
items.listItems = Object.keys(docsItemsJson[window.sessionStorage.getItem('docItem')].items[window.sessionStorage.getItem('explainItem')].contents);

if(docsItemsJson[window.sessionStorage.getItem('docItem')].items[window.sessionStorage.getItem('explainItem')].about.demo) {
    concatList.unshift('Demo');
    
}

items.listItems = Object.keys(docsItemsJson[window.sessionStorage.getItem('docItem')].items[window.sessionStorage.getItem('explainItem')].contents).concat(concatList);
items.children[0].click();