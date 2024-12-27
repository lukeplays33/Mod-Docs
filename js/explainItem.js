import { docsItemsJson } from '../assets/jsonFiles/docsItems.js';

import { createInfoTable } from './utils.js';

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
let language = document.getElementById('language');

let install = document.getElementById('install');
let guide = document.getElementById('guide');
let notes = document.getElementById('notes');
let examples = document.getElementById('examples');

let items = document.getElementById('docs');

let demo = document.getElementById('demo');

let viewPager = document.getElementById('explainTheItem');

let docTemplate = document.getElementById('docTemplate');

let concatList = ['Information'];

let itemJSON = docsItemsJson[window.sessionStorage.getItem('docItem')].items[window.sessionStorage.getItem('explainItem')];

let informationPage = document.getElementById('information');

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
language.children[1].innerHTML = itemJSON.about.languages.join(', ');


items.listItems = Object.keys(itemJSON.contents).reverse();

for (i of items.children) { // give all tabbar elements a href so we can connect to the viewpager
    let cloneTemplate = docTemplate.content.cloneNode(true);
    cloneTemplate.querySelector('#explanationItems').style.display = 'none'; //hide all pages to ensure proper viewpager working
    cloneTemplate.querySelector('#explanationItems').id = i.innerHTML;

    viewPager.prepend(cloneTemplate);
    i.href = `#${cloneTemplate.id}`;
}

informationPage.style.display = 'none'; //hide all pages to ensure proper viewpager working

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

if(Object.keys(itemJSON.about.notes).length == 0) {
    notes.remove();
}

items.listItems = Object.keys(itemJSON.contents).concat(concatList);

informationPage.href = '#information'; // needs to have a href after creation

items.children[0].click();

license.addEventListener('click', function () {
    window.open(itemJSON.about.repo.license.link)
});

install.addEventListener('click', function (e) {
    navigator.clipboard.writeText(install.innerHTML);
    install.innerHTML = 'Copied';

    window.setTimeout(() => {
        install.innerHTML = itemJSON.about.installation.link;
    }, 1000)

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

function generateCodeWithHighlight(file, format) {
    return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta name="description" content="Webpage description goes here" />
  <meta charset="utf-8">
  <title>Change_me</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="author" content="">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/rainbow/1.1.9/js/rainbow.min.js"></script>
  <link href="/assets/css/theme.css" rel="stylesheet" type="text/css">
</head>

<body>
  
<pre><code data-language="${format}">
${file}
    </code></pre>

<script src="/assets/js/rainbow.js"></script>
<script src="/assets/js/language/generic.js"></script>
<script src="/assets/js/language/${format}.js"></script>

</body>
</html>`
}

function loadDocItem(index) {
    let i;

    let itemName = Object.keys(itemJSON.contents)[index];
    index = itemName; // get the item name from index
    let item = itemJSON.contents[index];

    let itemHTML = document.getElementById(itemName);
    itemHTML.style.display = 'flex';

    let displayFile = itemHTML.getElementsByTagName('IFRAME')[0];
    let variablesAndInfo = itemHTML.getElementsByClassName('variablesAndInfo')[0];
    let controls = itemHTML.getElementsByClassName('controls')[0];

    if (item.displayFile) {
        if (item.codeFormat == 'img' || !item.codeFormat) { // if set to img or empty display a image file or file in general
            displayFile.src = item.displayFile
        } else {
            displayFile.srcdoc = generateCodeWithHighlight(item.displayFile, item.codeFormat);
        }
    }

    if (item.controls.fullscreen) { } else { // disables unnessecary control buttons
        controls.children[0].classList.add('disabled');
    }
    if (item.controls.play) { } else {
        controls.children[1].classList.add('disabled');
    }
    if (item.controls.console) { } else {
        controls.children[2].classList.add('disabled');
    }
    if (item.controls.viewCode) { } else {
        controls.children[3].classList.add('disabled');
    }

    controls.children[0].addEventListener('click', function () {
        if (!document.fullscreenElement) {
            this.parentNode.parentNode.requestFullscreen();
            this.parentNode.parentNode.classList.add('fullscreen');

            this.innerHTML = 'close_fullscreen';
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
            this.parentNode.parentNode.classList.remove('fullscreen');

            this.innerHTML = 'fullscreen';
        }
    });

    for (i of Object.keys(item.variables)) {
        try {
            document.getElementById(`explainVariable ${i}`).remove();
        } catch (e) { }

        let dropdown = document.createElement('accordion-dropdown');
        dropdown.setAttribute('titleText', i);
        dropdown.id = `explainVariable ${i}`;

        dropdown.appendChild(createVariableTable(i, item.variables));

        variablesAndInfo.appendChild(dropdown);
    }

    variablesAndInfo.children[1].children[1].children[0].innerHTML = '';
    variablesAndInfo.children[1].children[1].children[0].appendChild(createInfoTable(['description', 'outputValueOptions', 'type'], item));

    if (Object.keys(item.variables).length == 0) {
        variablesAndInfo.children[2].style.display = 'none'; // use style instead of remove beceasue logic not working in if statement, when using remove + removes all last children when it's only supposed to remove the hr
    }
}

loadDocItem(0);

function createVariableTable(variable, variables) { //creates a display table to read variable info
    let i;

    let table = document.createElement('table');

    for (i of Object.keys(variables[variable])) {
        let tr = document.createElement('tr');

        if (variables[variable][i]) {
            let name = document.createElement('td');
            name.innerHTML = i;

            let value = document.createElement('td');
            value.innerHTML = variables[variable][i];

            tr.appendChild(name);
            tr.appendChild(value);
        }

        table.appendChild(tr);
    }

    return table;
}