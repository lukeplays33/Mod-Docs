import { docsItemsJson } from '../assets/jsonFiles/docsItems.js';

let demoTabItem, i;

let description = document.getElementById('description');
let useCase = document.getElementById('useCases');
let moduleName = document.getElementById('moduleName');

let developer = document.getElementById('developer');
let version = document.getElementById('version');
let status = document.getElementById('status');
let openSource = document.getElementById('openSource');
let license = document.getElementById('license');

let items = document.getElementById('docs');

let demo = document.getElementById('demo');

let concatList = ['Information'];

let itemJSON = docsItemsJson[window.sessionStorage.getItem('docItem')].items[window.sessionStorage.getItem('explainItem')];

description.children[1].innerHTML = itemJSON.about.description;
useCase.children[1].innerHTML = itemJSON.about.useCaseDescription;
moduleName.innerHTML = Object.keys(docsItemsJson[window.sessionStorage.getItem('docItem')].items)[0];

openSource.innerHTML = 'openSource: ' + itemJSON.about.repo.openSource;
developer.innerHTML = 'Developer: ' + itemJSON.about.repo.developer;
version.innerHTML = 'Version: ' + itemJSON.about.repo.version;
status.innerHTML = 'Status: ' + itemJSON.about.repo.status;
license.innerHTML = 'Status: ' + itemJSON.about.repo.license;

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

moduleName.addEventListener('click', function () {
    window.open(itemJSON.about.repo.link)
});

license.addEventListener('click', function () {
    window.open(itemJSON.about.repo.license.link)
});