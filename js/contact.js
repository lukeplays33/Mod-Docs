import { settings } from '../assets/jsonFiles/supportSettings.js';

document.getElementById('support').addEventListener('itemSelected', function (e) {
    if(e.detail.index == 0) {
        window.open(settings.communityServer);
    } else if(e.detail.index == 1) {
        parent.document.title = 'Mod Docs - FAQ';
        parent.document.getElementById('pages').src = '../Mod-Docs/docPages/faq.html';
    }
});