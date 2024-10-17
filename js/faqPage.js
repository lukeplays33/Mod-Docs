import { faqItems } from "../assets/jsonFiles/faq.js";
import { troubleShooting } from "../assets/jsonFiles/troubleshootings.js";

let faqList = document.getElementById('faqs');

console.log(window.parent.title)
let json = String(window.parent.title).includes('FAQ') ? faqItems : troubleShooting;

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