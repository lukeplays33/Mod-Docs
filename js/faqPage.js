import { faqItems } from "../assets/jsonFiles/faq.js";
import { troubleShooting } from "../assets/jsonFiles/troubleshootings.js";
import { docsItemsJson } from '../assets/jsonFiles/docsItems.js';

let faqList = document.getElementById('faqs');

let json = String(window.parent.document.title).includes('FAQ') ? faqItems :
    String(window.parent.document.title).includes('Notes') ? docsItemsJson[window.sessionStorage.getItem('docItem')].items[window.sessionStorage.getItem('explainItem')].about.notes : troubleShooting;

let des = null;

faqList.listItems = Object.keys(json);

faqList.addEventListener('itemSelected', function (e) {

    let selectedItem = document.getElementById(e.detail.value);

    try {
        des.remove();
        des = null;
    } catch (e) { }

    if (des == null) {
        des.remove();
        des = null;
    } else {

        des = document.createElement('li');
        des.classList.add('des');
        des.innerHTML = json[e.detail.value];

        selectedItem.after(des);
    }
});