import { docsItemsJson } from '../assets/jsonFiles/docsItems.js';

let description = document.getElementById('description');
let items = document.getElementById('items');

let i;
let jsonObject = docsItemsJson[window.sessionStorage.getItem('docItem')].items;

description.children[1].innerHTML = docsItemsJson[window.sessionStorage.getItem('docItem')].description;
items.listItems = Object.keys(jsonObject);

for(i of Object.keys(docsItemsJson[window.sessionStorage.getItem('docItem')].items)) {
    if(docsItemsJson[window.sessionStorage.getItem('docItem')].items[i] == 'Type: divider') {
        let hr = document.createElement('hr');
        hr.setAAttribute('titleText', i);

        document.getElementById(i).replaceWith(hr);
    }
}

items.addEventListener('itemSelected', function (e) {
    let name = window.sessionStorage.getItem('docItem') + ' - ' + e.detail.value; // the new document.title

    window.sessionStorage.setItem('explainItem', e.detail.value);
    
    parent.document.title = name;
    parent.document.getElementById('pages').src = '../Mod-Docs/docPages/explainItem.html';
});