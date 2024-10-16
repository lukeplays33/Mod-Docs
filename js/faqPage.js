import { faqItems } from "../assets/jsonFiles/faq.js";

let faqList = document.getElementById('faqs');

faqList.listItems = Object.keys(faqItems);

faqList.addEventListener('itemSelected', function (e) {
    try {
        faqList.getElementsByClassName('des')[0].remove();
    } catch (e) { }

    let des = document.createElement('li');
    des.classList.add('des')
    des.innerHTML = faqItems[e.detail.value];

    document.getElementById(e.detail.value).after(des);
});