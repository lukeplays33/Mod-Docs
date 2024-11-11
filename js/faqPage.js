import { faqItems } from "../assets/jsonFiles/faq.js";
import { troubleShooting } from "../assets/jsonFiles/troubleshootings.js";
import { docsItemsJson } from '../assets/jsonFiles/docsItems.js';

let faqList = document.getElementById('faqs');

let json = String(window.parent.document.title).includes('FAQ') ? faqItems :
    String(window.parent.document.title).includes('Notes') ? docsItemsJson[window.sessionStorage.getItem('docItem')].items[window.sessionStorage.getItem('explainItem')].about.notes : troubleShooting;

faqList.listItems = Object.keys(json);

faqList.addEventListener('itemSelected', function (e) {
    let selectedItem = document.getElementById(e.detail.value);

    try {
        faqList.getElementsByClassName('des')[0].remove();
    } catch (e) { }

    if (faqList.getElementsByClassName('des')[0]) {
        faqList.getElementsByClassName('des')[0].remove();
    } else {
        let des = document.createElement('li');
        des.classList.add('des');
        des.innerHTML = json[e.detail.value];

        selectedItem.after(des);
    }
});