import { faqItems } from "../assets/jsonFiles/faq.js";
import { troubleShooting } from "../assets/jsonFiles/troubleshootings.js";
import { docsItemsJson } from '../assets/jsonFiles/docsItems.js';
import { createInfoTable } from "./utils.js";

let faqList = document.getElementById('faqs');


let docAboutInfo;

try {

    docAboutInfo = docsItemsJson[window.sessionStorage.getItem('docItem')].items[window.sessionStorage.getItem('explainItem')].about;

} catch (e) { }

let json = String(window.parent.document.title).includes('FAQ') ? faqItems ://page is used for multiple times
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
    } else if(!selectedItem.classList.contains('selectedItem')){
        this.parentNode.getElementsByClassName('selectedItem')[0].classList.remove('selectedItem'); // removes the selectedItem class from the other unclosed item

        des = document.createElement('li');
        des.classList.add('des');

        if(String(window.parent.document.title).includes('Notes')) {
            //des.innerHTML = json[e.detail.value].description;

            des.appendChild(createInfoTable(Object.keys(json[e.detail.value]),json[e.detail.value]));
        } else {
            des.innerHTML = json[e.detail.value];
        }
        

        selectedItem.classList.add('selectedItem');
        selectedItem.after(des);
    } else {
        selectedItem.classList.remove('selectedItem'); // allows the user to collapse the item again
    }
});