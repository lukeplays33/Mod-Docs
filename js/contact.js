document.getElementById('support').addEventListener('itemSelected', function (e) {
    if(e.detail.index == 0) {
        window.open('https://discord.gg/2tJvuH73Kq');
    } else if(e.detail.index == 1) {
        parent.document.title = 'FAQ';
        parent.document.getElementById('pages').src = '../Mod-Docs/docPages/faq.html';
    }
});