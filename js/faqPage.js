import { faqItems } from "../assets/jsonFiles/faq.js";

let faqList = document.getElementById('faqs');

faqList.listItems = Object.keys(faqItems);

faqList.addEventListener('itemSelected', function (e) {
    try {
        faqList.getElementsByClassName('des')[0].remove();
    } catch (e) { }

    let des = document.createElement('li');
    des = faqItems[e.target.value];

    console.log(e.target.value);
    e.target.value.after(des);
});