import { settings } from "../assets/jsonFiles/supportSettings.js";

if(!settings.faq) {
    document.getElementById('FAQ').remove();
}

if(!settings.troubleShooting) {
    document.getElementById('Troubleshooting').remove();
}

if(!settings.privacyPolicy) {
    document.getElementById('Privacy policy').remove();
}

document.getElementById('support').addEventListener('itemSelected', function (e) {
    if(e.detail.index == 0) {
        window.open(settings.communityServer);
    } else if(e.detail.index == 1) {
        parent.document.title = 'Mod Docs - FAQ';
        parent.document.getElementById('pages').src = '../Mod-Docs/docPages/faq.html';
    }  else if(e.detail.index == 2) {
        parent.document.title = 'Mod Docs - Troubleshooting';
        parent.document.getElementById('pages').src = '../Mod-Docs/docPages/faq.html';
    }
});