let recentArticles = document.getElementById('recentArticles');
let recentTutorials = document.getElementById('recentTutorials');

function setRecents() {
    localforage.getItem('recentDocItems').then(function (value) {
        // This code runs once the value has been loaded
        // from the offline store.

        value = JSON.parse(value);
        recentArticles.listItems = value;

        if (value.length == 0) {
            recentArticles.parentNode.innerHTML = 'There are no recent articles found :('
        }
    }).catch(function (err) {
        // This code runs if there were any errors
        localforage.setItem('recentDocItems', JSON.stringify([])); // set storage item to key if not set
        setRecents();
    });

    localforage.getItem('recentTutorials').then(function (value) {
        // This code runs once the value has been loaded
        // from the offline store.

        value = JSON.parse(value);
        recentTutorials.listItems = value;

        if (value.length == 0) {
            recentTutorials.parentNode.innerHTML = 'There are no recent tutorials found :('
        }
    }).catch(function (err) {
        // This code runs if there were any errors
        localforage.setItem('recentTutorials', JSON.stringify([])); // set storage item to key if not set
        setRecents();
    });
}
setRecents();

recentArticles.addEventListener('itemSelected', function (e) {
    let item = e.detail.value;

    openPage(item);
});

function openPage(item) {
    const params = new URLSearchParams(window.location.search);
    params.set('page', item);
    parent.history.pushState(null, '', '?' + params.toString()); // allows deeplinking to pages.

    let categoryName = item.substring(0, item.indexOf(' '));
    parent.document.getElementById(categoryName).click();

    window.sessionStorage.setItem('explainItem', item.substring(item.indexOf(' '), item.length).replaceAll(' - ', ''));
    parent.document.getElementById('pages').src = '../Mod-Docs/docPages/explainItem.html';

    parent.document.title = item;

    if (parent.document.getElementById(categoryName).parentNode.platform == 'mobile') {//closes the drawer on mobiel isntead of opening it
        parent.document.getElementById(categoryName).parentNode.toggleDrawer();
    }
}

if(parent.window.location.href.includes('page=')) {
    console.log(parent.window.location.search)
    const params = new URLSearchParams(parent.window.location.search);

    // Get the value of a specific parameter
    const inputValue = params.get('page');
    alert(inputValue)
    openPage(inputValue);
}