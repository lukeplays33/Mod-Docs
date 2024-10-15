import { faqItems } from "../assets/jsonFiles/faq.js";

let faqList = document.getElementById('faqs');

faqList.listItems = Object.keys(faqItems);

faqList.addEventListener('itemSelected', function (e) {
    faqList.getElementsByClassName('des')[0].remove();

    let des = document.createElement('li');
    des = faqItems[e.target.item];

    faqList.children[e.target.index].after(des);
});