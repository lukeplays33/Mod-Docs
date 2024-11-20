let recentArticles = document.getElementById('recentArticles');

localforage.getItem('recentDocItems').then(function(value) {
    // This code runs once the value has been loaded
    // from the offline store.

    value = JSON.parse(value);
    recentArticles.listItems = value;
}).catch(function(err) {
    // This code runs if there were any errors
    console.log(err);

    localforage.setItem('recentDocItems', JSON.stringify([]));
    setRecents();
});