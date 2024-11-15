import { docsItemsJson } from '../assets/jsonFiles/docsItems.js';

let demoTabItem, i;

let description = document.getElementById('eDescription');
let useCase = document.getElementById('useCases');
let required = document.getElementById('required');
let platform = document.getElementById('platform');

let repoName = document.getElementById('repoName');
let developer = document.getElementById('developer');
let version = document.getElementById('version');
let status = document.getElementById('status');
let openSource = document.getElementById('openSource');
let license = document.getElementById('license');

let install = document.getElementById('install');
let guide = document.getElementById('guide');
let notes = document.getElementById('notes');
let examples = document.getElementById('examples');

let items = document.getElementById('docs');

let demo = document.getElementById('demo');

let viewPager = document.getElementById('explainTheItem');

let concatList = ['Information'];

let itemJSON = docsItemsJson[window.sessionStorage.getItem('docItem')].items[window.sessionStorage.getItem('explainItem')];

description.children[1].innerHTML = itemJSON.about.description;
useCase.children[1].innerHTML = itemJSON.about.useCases.join(', ');
platform.children[1].innerHTML = itemJSON.about.platforms.join(', ');
required.children[1].innerHTML = itemJSON.about.required.join(', ');

install.innerHTML = itemJSON.about.installation.link;
install.href = itemJSON.about.installation.link;

repoName.innerHTML = itemJSON.about.repo.repoName;
openSource.innerHTML = itemJSON.about.repo.openSource;
developer.innerHTML = itemJSON.about.repo.developer;
version.innerHTML = itemJSON.about.repo.version;
status.innerHTML = itemJSON.about.repo.status;
license.innerHTML = itemJSON.about.repo.license.name;


items.listItems = Object.keys(itemJSON.contents);

for(i of items.children) { // give al ltabbar elements a href so we can connect to the viewpager
    i.href = `#explanationItems`;
}

if (Object.keys(itemJSON.about.demoLinks).length != 0) {
    concatList.push('Demo');
    items.listItems = Object.keys(itemJSON.contents).concat(concatList);

    demo.src = Object.keys(itemJSON.about.demoLinks)[0];

    demoTabItem = document.getElementById('Demo'); // needs to have a href after creation
    demoTabItem.href = '#demo';
} else {
    demo.remove();
    examples.remove();
}

items.listItems = Object.keys(itemJSON.contents).concat(concatList);

let information = document.getElementById('Information'); // needs to have a href after creation
information.href = '#information';

items.children[0].click();

license.addEventListener('click', function () {
    window.open(itemJSON.about.repo.license.link)
});

install.addEventListener('click', function (e) {
    navigator.clipboard.writeText(install.innerHTML);
    install.innerHTML = 'Copied';

    window.setTimeout(() => {
        install.innerHTML = itemJSON.about.installation.link;
    },1000)

});

guide.addEventListener('click', function () {
    window.open(itemJSON.about.installation.guide);
});

repoName.addEventListener('click', function () {
    window.open(itemJSON.about.repo.link);
});

notes.addEventListener('click', function (e) {
    parent.document.title = parent.document.title + ' Notes';
    parent.document.getElementById('pages').src = '../Mod-Docs/docPages/faq.html';
});

examples.addEventListener('click', function (e) {
    parent.document.title = parent.document.title + ' Examples';
    parent.document.getElementById('pages').src = '../Mod-Docs/docPages/faq.html';
});

viewPager.addEventListener('pageChange', function (e) {
    loadDocItem(e.detail.pageIndex);
});

function loadDocItem (index) {
    index = Object.keys(itemJSON.contents)[index]; // get the item name from index

    let description = document.getElementById('description');

    description.children[1].innerHTML = itemJSON.contents[index];
}

loadDocItem(0);