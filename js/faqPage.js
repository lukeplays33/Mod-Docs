import { faqItems } from "../assets/jsonFiles/faq.js";
import { troubleShooting } from "../assets/jsonFiles/troubleshootings.js";
import { docsItemsJson } from '../assets/jsonFiles/docsItems.js';

let faqList = document.getElementById('faqs');

let json = String(window.parent.document.title).includes('FAQ') ? faqItems : 
String(window.parent.document.title).includes('Notes') ? docsItemsJson[window.sessionStorage.getItem('docItem')].items[window.sessionStorage.getItem('explainItem')].about.notes : troubleShooting;

faqList.listItems = Object.keys(json);

faqList.addEventListener('itemSelected', function (e) {
    try {
        faqList.getElementsByClassName('des')[0].remove();
    } catch (e) { }

    let des = document.createElement('li');
    des.classList.add('des')
    des.innerHTML = json[e.detail.value];

    document.getElementById(e.detail.value).after(des);
});