document.getElementById('settingsListView').addEventListener('itemSelected', function (e) {
    console.log(e.detail.index)
    if(e.detail.index == 5) {
        window.open('https://buymeacoffee.com/sketchdonate');
    }
});