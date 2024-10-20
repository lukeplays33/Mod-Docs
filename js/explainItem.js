import { docsItemsJson } from '../assets/jsonFiles/docsItems.js';

let demoTabItem, i;

let description = document.getElementById('eDescription');
let useCase = document.getElementById('useCases');
let required = document.getElementById('required');
let platform = document.getElementById('platform');

let moduleName = document.getElementById('moduleName');
let developer = document.getElementById('developer');
let version = document.getElementById('version');
let status = document.getElementById('status');
let openSource = document.getElementById('openSource');
let license = document.getElementById('license');

let install = document.getElementById('install');
let copyBtn = document.getElementById('copy');

let items = document.getElementById('docs');

let demo = document.getElementById('demo');

let concatList = ['Information'];

let itemJSON = docsItemsJson[window.sessionStorage.getItem('docItem')].items[window.sessionStorage.getItem('explainItem')];

description.children[1].innerHTML = itemJSON.about.description;
useCase.children[1].innerHTML = itemJSON.about.useCases.join(', ');
platform.children[1].innerHTML = itemJSON.about.platforms.join(', ');
required.children[1].innerHTML = itemJSON.about.required.join(', ');

install.children[1].innerHTML = itemJSON.about.installation.link;

moduleName.innerHTML = itemJSON.about.repo.repoName;
openSource.innerHTML = 'openSource: ' + itemJSON.about.repo.openSource;
developer.innerHTML = 'Developer: ' + itemJSON.about.repo.developer;
version.innerHTML = 'Version: ' + itemJSON.about.repo.version;
status.innerHTML = 'Status: ' + itemJSON.about.repo.status;
license.innerHTML = 'License: ' + itemJSON.about.repo.license.name;

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

copyBtn.addEventListener('click', function () {
    navigator.clipboard.writeText(install.innerHTML);
    copyBtn.innerHTML = 'Copied';

    window.setTimeout(() => {
        copyBtn.innerHTML = 'Copy';
    },1000)

})