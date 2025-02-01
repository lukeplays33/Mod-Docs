import { faqItems } from "../assets/jsonFiles/faq.js";
import { troubleShooting } from "../assets/jsonFiles/troubleshootings.js";
import { docsItemsJson } from '../assets/jsonFiles/docsItems.js';
import { createInfoTable } from "./utils.js";

let faqList = document.getElementById('faqs');

let des, i;
let docAboutInfo;

let platformsCompChart = document.getElementById('platformsCompChart');

try {
    docAboutInfo = docsItemsJson[window.sessionStorage.getItem('docItem')].items[window.sessionStorage.getItem('explainItem')].about;
} catch (e) { }

let json = String(window.parent.document.title).includes('FAQ') ? faqItems ://page is used for multiple times
    String(window.parent.document.title).includes('Notes') ? docAboutInfo.notes :
        String(window.parent.document.title).includes('Examples') ? docAboutInfo.demoLinks :
            String(window.parent.document.title).includes('Compatibility') ? docAboutInfo.compatabilityChart : troubleShooting;

if (String(window.parent.document.title).includes('Examples')) {
    faqList.setAttribute('actionbutton', 'open_in_new');
}

if (String(window.parent.document.title).includes('Compatibility')) {
    for (i of ['Platform Compatability'].concat(json.platforms)) {
        let item = document.createElement('p');
        item.innerHTML = i;

        platformsCompChart.appendChild(item);
    }
} else {
    platformsCompChart.remove();
}

faqList.listItems = Object.keys(json);

faqList.addEventListener('itemSelected', function (e) {

    let selectedItem = document.getElementById(e.detail.value);

    try {
        des.remove();
    } catch (e) { }

    if (String(window.parent.document.title).includes('Examples')) {
        window.open(json[e.detail.value]);
    } else if (!selectedItem.classList.contains('selectedItem')) {
        try {
            this.parentNode.getElementsByClassName('selectedItem')[0].classList.remove('selectedItem'); // removes the selectedItem class from the other unclosed item
        } catch (e) { }

        des = document.createElement('p');
        des.classList.add('des');

        if (String(window.parent.document.title).includes('Notes')) {
            //des.innerHTML = json[e.detail.value].description;

            des.appendChild(createInfoTable(Object.keys(json[e.detail.value]), json[e.detail.value]));
        } else {
            des.innerHTML = json[e.detail.value];
        }


        selectedItem.classList.add('selectedItem');
        selectedItem.after(des);
    } else {
        selectedItem.classList.remove('selectedItem'); // allows the user to collapse the item again
    }
});