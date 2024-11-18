import { settings } from "../assets/jsonFiles/supportSettings.js";

let blog = document.getElementById('Blog');

if(!settings.hasOwnProperty('blog')) {
    blog.remove();
} else {
    blog.innerHTML = blog.innerHTML.replace('What is Mod Docs?',settings.blog.message);
}

if(!settings.faq) {
    document.getElementById('FAQ').remove();
}

if(!settings.troubleShooting) {
    document.getElementById('Troubleshooting').remove();
}

if(!settings.privacyPolicy) {
    document.getElementById('Privacy policy').remove();
}

if(!settings.hasOwnProperty('communityServer')) {
    document.getElementById('Community').remove();
}

document.getElementById('support').addEventListener('itemSelected', function (e) {
    if(e.detail.value == 'Community') {
        window.open(settings.communityServer);
    } else if(e.detail.value == 'FAQ') {
        parent.document.title = 'Mod Docs - FAQ';
        parent.document.getElementById('pages').src = '../Mod-Docs/docPages/faq.html';
    }  else if(e.detail.value == 'Troubleshooting') {
        parent.document.title = 'Mod Docs - Troubleshooting';
        parent.document.getElementById('pages').src = '../Mod-Docs/docPages/faq.html';
    }   else if(e.detail.value == 'Privacy policy') {
        window.open(settings.privacyPolicy);
    }    else if(e.detail.value == 'Blog') {
        window.open(settings.blog);
    }
});