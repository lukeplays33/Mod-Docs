import { docsItemsJson } from '../assets/jsonFiles/docsItems.js';

let description = document.getElementById('description');
let items = document.getElementById('items');

description.children[1].innerHTML = docsItemsJson[window.sessionStorage.getItem('docItem')].description;
items.listItems = Object.keys(docsItemsJson[window.sessionStorage.getItem('docItem')].items);

items.addEventListener('itemSelected', function (e) {
    let name = window.sessionStorage.getItem('docItem') + ' - ' + e.detail.value; // the new document.title
    setRecents(name);

    window.sessionStorage.setItem('explainItem', e.detail.value);
    
    parent.document.title = name;
    parent.document.getElementById('pages').src = '../Mod-Docs/docPages/explainItem.html';
});

function setRecents (name) {
    localforage.getItem('recentDocItems').then(function(value) {
        // This code runs once the value has been loaded
        // from the offline store.
        console.log(value);
        value.unshift(name);
        console.log(value);

        localforage.setItem('recentDocItems', JSON.stringify(value));
    }).catch(function(err) {
        // This code runs if there were any errors
        console.log(err);
        
        localforage.setItem('recentDocItems', JSON.stringify([]));
        setRecents();
    });
}