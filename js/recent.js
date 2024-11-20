let recentArticles = document.getElementById('recentArticles');

localforage.getItem('recentDocItems').then(function(value) {
    // This code runs once the value has been loaded
    // from the offline store.

    value = JSON.parse(value);
    recentArticles.listItems = value;

    if(value.length == 0) {
        recentArticles.parentNode.innerHTML = 'THere are no recent articles found.'
    }
}).catch(function(err) {
    // This code runs if there were any errors
    localforage.setItem('recentDocItems', JSON.stringify([]));
    setRecents();
});

recentArticles.addEventListener('itemSelected', function (e) {
    let item = e.detail.value;

    let categoryName = item.substring(0, item.indexOf(' '));
    parent.document.getElementById(categoryName).click();

    window.sessionStorage.setItem('explainItem', item.substring(item.indexOf(' '), item.length).replaceAll(' - ', ''));
    parent.document.getElementById('pages').src = '../Mod-Docs/docPages/explainItem.html';

    parent.document.title = item;
});