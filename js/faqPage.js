import { faqItems } from "../assets/jsonFiles/faq.js";
import { troubleShooting } from "../assets/jsonFiles/troubleshootings.js";
import { docsItemsJson } from '../assets/jsonFiles/docsItems.js';

let faqList = document.getElementById('faqs');

try {

let docAboutInfo = docsItemsJson[window.sessionStorage.getItem('docItem')].items[window.sessionStorage.getItem('explainItem')].about;

} catch(e) {}

let json = String(window.parent.document.title).includes('FAQ') ? faqItems :
    String(window.parent.document.title).includes('Notes') ? docAboutInfo.notes :
        String(window.parent.document.title).includes('Examples') ? docAboutInfo.demoLinks : troubleShooting;

        if (String(window.parent.document.title).includes('Examples')) {
            faqList.setAttribute('actionbutton', 'open_in_new');
        }

let des;

faqList.listItems = Object.keys(json);

faqList.addEventListener('itemSelected', function (e) {

    let selectedItem = document.getElementById(e.detail.value);

    try {
        des.remove();
    } catch (e) { }

    if (String(window.parent.document.title).includes('Examples')) {
        window.open(json[e.detail.value]);
    } else {

        des = document.createElement('li');
        des.classList.add('des');
        des.innerHTML = json[e.detail.value];

        selectedItem.after(des);
    }
});