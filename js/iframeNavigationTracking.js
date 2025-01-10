let iframe = document.getElementById('pages');

let forwardStack = ['The magic garden'];
let forwardStackURL = ['https://lukeplays33.github.io/The-Magic-Garden/pages/about/moddocs.html'];

let backwardStack = [document.title];
let backwardStackURL = [currentURL];

let currentTitle = '';
let currentURL = '';

function addNewTitle() {
    currentTitle = document.title;
    backwardStack.push(currentTitle);
}

function addNewURL() {
    currentURL = iframe.src;
    backwardStackURL.push(currentURL);
}

function goBackward() {
    let newTitle = backwardStack[backwardStack.length - 2];
    console.log(newTitle)

    forwardStack.push(newTitle);
    forwardStackURL.push(currentURL)

    currentTitle = backwardStack.pop();
    currentURL = backwardStackURL.pop();

    document.title = newTitle;
}

function goForward() {
    let newTitle = forwardStack[forwardStack.length - 2];

    backwardStack.push(currentTitle);
    backwardStackURL.push(currentURL);

    currentTitle = forwardStack.pop();
    currentURL = forwardStackURL.pop();

    document.title = newTitle;
}

function checkState() {
    // checks if the iframe has gone forward or backwards
    console.log(currentURL, iframe.src);
    console.log(backwardStackURL[backwardStackURL.length - 1])
    return iframe.src == currentURL ? 'backward' : 
    forwardStackURL.includes(currentURL) ? 'forward' : 'new';
}

iframe.onload = function () {

    console.log(checkState())
    if (checkState() == 'new') {
        addNewTitle();
        addNewURL();
    } else if(checkState() == 'backward') {
        goBackward();
    } else {
        goForward();
    }
}