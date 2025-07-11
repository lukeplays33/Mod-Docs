import { docsItemsJson } from '../assets/jsonFiles/docsItems.js';
import { settings } from "../assets/jsonFiles/supportSettings.js";

import { createInfoTable } from './utils.js';

let i, des;

let guide = document.getElementById('guide');
let notes = document.getElementById('notes');
let examples = document.getElementById('examples');
let platformsChart = document.getElementById('platformsChart');

let items = document.getElementById('docs');

let viewPager = document.getElementById('explainTheItem');

let docTemplate = document.getElementById('docTemplate');

let concatList = ['Information'];

let itemJSON = docsItemsJson[window.sessionStorage.getItem('docItem')].items[window.sessionStorage.getItem('explainItem')];

let informationPage = document.getElementById('information');

let quickLinksList = document.getElementById('quickLinksList');
let informationList = document.getElementById('informationList');

let globalDonateMessage = document.getElementById('globalDonateMessage');


items.listItems = Object.keys(itemJSON.contents).reverse();

for (i of items.children) { // give all tabbar elements a href so we can connect to the viewpager
    let cloneTemplate = docTemplate.content.cloneNode(true);
    cloneTemplate.querySelector('#explanationItems').style.display = 'none'; //hide all pages to ensure proper viewpager working
    cloneTemplate.querySelector('#explanationItems').id = i.innerHTML;

    viewPager.prepend(cloneTemplate);
    i.href = `#${cloneTemplate.id}`;
}

informationPage.style.display = 'none'; //hide all pages to ensure proper viewpager working

if (settings.donations.globalMessage.enabled) {
    globalDonateMessage.children[1].innerHTML = settings.donations.globalMessage.message;

    globalDonateMessage.addEventListener('click', function () {
        window.open(settings.donations.url);
    });
} else {
    globalDonateMessage.remove();
}

if (itemJSON.hasOwnProperty('quickLinks') || itemJSON.quickLinks) {
    for (i of Object.keys(itemJSON.quickLinks)) {
        let item = document.createElement('li');
        item.innerHTML = i;
        item.id = i;

        quickLinksList.appendChild(item);
    }

    quickLinksList.addEventListener('itemSelected', function (e) {
        window.open(itemJSON.quickLinks[e.detail.value]);
    });
}

if (Object.keys(itemJSON.about.demoLinks).length != 0) {
    items.listItems = Object.keys(itemJSON.contents).concat(concatList);
} else {
    examples.remove();
}

if (Object.keys(itemJSON.about.notes).length == 0) {
    notes.remove();
}

items.listItems = Object.keys(itemJSON.contents).concat(concatList);

informationPage.href = '#information'; // needs to have a href after creation

items.children[0].click();

notes.addEventListener('click', function (e) {
    e.stopPropagation();
    parent.document.title = parent.document.title + ' Notes';
    parent.document.getElementById('pages').src = '../Mod-Docs/docPages/faq.html';
});

platformsChart.addEventListener('click', function (e) {
    e.stopPropagation();
    parent.document.title = parent.document.title + ' Compatibility';
    parent.document.getElementById('pages').src = '../Mod-Docs/docPages/faq.html';
});

examples.addEventListener('click', function (e) {
    e.stopPropagation();
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
    parent.document.body.scrollTo(0, 0); // scroll to top when changing page to avoid a weird bug only found in od Docs

    let i;

    let itemName = Object.keys(itemJSON.contents)[index];
    index = itemName; // get the item name from index
    let item = itemJSON.contents[index];

    let itemHTML = document.getElementById(itemName);
    itemHTML.style.display = 'flex';

    if (item.hasOwnProperty('layoutClass')) { // if the item has a layout class, apply it
        itemHTML.classList.add(item.layoutClass);
    }

    let displayFile = itemHTML.getElementsByTagName('IFRAME')[0];
    let variablesAndInfo = itemHTML.getElementsByClassName('variablesAndInfo')[0];
    let controls = itemHTML.getElementsByClassName('controls')[0];

    if (item.generalInformation.displayFile) {
        if (item.generalInformation.codeFormat == 'img' || !item.generalInformation.codeFormat) { // if set to img or empty display a image file or file in general
            displayFile.src = item.generalInformation.displayFile
        } else {
            displayFile.srcdoc = generateCodeWithHighlight(item.generalInformation.displayFile, item.generalInformation.codeFormat);
        }
    }

    if (item.controls.hideControls) { // hides the controls if set to true
        controls.style.display = 'none';
        displayFile.style.borderRadius = '10px';
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

    variablesAndInfo.children[1].children[1].children[0].appendChild(createInfoTable(Object.keys(item.generalInformation), item.generalInformation));

    if (Object.keys(item.variables).length == 0) {
        variablesAndInfo.children[2].style.display = 'none'; // use style instead of remove beceasue logic not working in if statement, when using remove + removes all last children when it's only supposed to remove the hr
    }
}

loadDocItem(0);

function createVariableTable(variable, variables) { //creates a display table to read variable info
    let i;

    let table = document.createElement('table');

    for (i of Object.keys(variables[variable])) {
        if (i == 'content') {
            table = document.createElement('div');
            table.innerHTML = variables[variable].content;
        } else {
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
    }

    return table;
}

function setRecents(name) {
    const params = new URLSearchParams(window.location.search);
    params.set('page', name);
    parent.history.pushState(null, '', '?' + params.toString()); // allows deeplinking to pages.

    localforage.getItem('recentDocItems').then(function (value) {
        // This code runs once the value has been loaded
        // from the offline store.

        value = JSON.parse(value);
        value.unshift(name);

        value = [...new Set(value)]; // removes all duplicated items
        value = value.slice(0, 3);

        localforage.setItem('recentDocItems', JSON.stringify(value)); // removes all duplicated items and saves them as a recent page
    }).catch(function (err) {
        // This code runs if there were any errors
        console.log(err);

        localforage.setItem('recentDocItems', JSON.stringify([]));
        setRecents();
    });
}

setRecents(parent.document.title);

window.addEventListener('pagehide', function () { // deletes the params after leaving the page
    const params = new URLSearchParams(window.location.search);
    params.delete('page');
    parent.history.pushState(null, '', '?' + params.toString()); // allows deeplinking to pages.
});

informationList.addEventListener('itemSelected', function (e) {

    let selectedItem = document.getElementById(e.detail.value);

    let jsonItem = String(e.detail.value) == 'infoLI' ? 'moduleInformation' :
        String(e.detail.value) == 'repoLI' ? 'repo' :
            String(e.detail.value) == 'requlatoryInfo' ? 'licensing' : 'installation'

    try {
        des.remove();
    } catch (e) { }

    if (!selectedItem.classList.contains('selectedItem')) {
        try {
            this.parentNode.getElementsByClassName('selectedItem')[0].classList.remove('selectedItem'); // removes the selectedItem class from the other unclosed item
        } catch (e) { }

        des = document.createElement('p');
        des.classList.add('des');

        des.appendChild(createInfoTable(Object.keys(itemJSON.about[jsonItem]).sort(), itemJSON.about[jsonItem]));


        selectedItem.classList.add('selectedItem');
        selectedItem.after(des);
    } else {
        selectedItem.classList.remove('selectedItem'); // allows the user to collapse the item again
    }
});