document.getElementById('settingsListView').addEventListener('itemSelected', function (e) {
    if(e.detail.index == 5) {
        window.open('https://buymeacoffee.com/sketchdonate');
    }
});