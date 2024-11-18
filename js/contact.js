import { settings } from "../assets/jsonFiles/supportSettings.js";

let blog = document.getElementById('Blog');
let about = document.getElementById('about');
let donate = document.getElementById('donate');

if (!settings.hasOwnProperty('blog')) {
    blog.remove();
} else {
    blog.innerHTML = blog.innerHTML.replace('Blog', settings.blog.message);
}

if (!settings.hasOwnProperty('about')) {
    about.remove();
} else {
    about.innerHTML = about.innerHTML.replace('What is Mod Docs?', settings.about.message);
}

if (!settings.hasOwnProperty('donations')) {
    donate.remove();
} else {
    donate.innerHTML = donate.innerHTML.replace('What is Mod Docs?', settings.donations.message);
}

if (!settings.faq) {
    document.getElementById('FAQ').remove();
}

if (!settings.troubleShooting) {
    document.getElementById('Troubleshooting').remove();
}

if (!settings.privacyPolicy) {
    document.getElementById('Privacy policy').remove();
}

if (!settings.hasOwnProperty('communityServer')) {
    document.getElementById('Community').remove();
}

document.getElementById('support').addEventListener('itemSelected', function (e) {
    if (e.detail.value == 'Community') {
        window.open(settings.communityServer);

    } else if (e.detail.value == 'FAQ') {
        parent.document.title = 'Mod Docs - FAQ';
        parent.document.getElementById('pages').src = '../Mod-Docs/docPages/faq.html';

    } else if (e.detail.value == 'Troubleshooting') {
        parent.document.title = 'Mod Docs - Troubleshooting';
        parent.document.getElementById('pages').src = '../Mod-Docs/docPages/faq.html';

    } else if (e.detail.value == 'Privacy policy') {
        window.open(settings.privacyPolicy);

    } else if (e.detail.value == 'Blog') {
        window.open(settings.blog.url);

    } else if (e.detail.value == 'about') {
        window.open(settings.about.url);

    } else if (e.detail.value == 'donate') {
        window.open(settings.donations.url);
        
    }
});