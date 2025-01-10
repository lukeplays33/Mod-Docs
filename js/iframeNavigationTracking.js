let iframe = document.getElementById('pages');

let forwardStack = [];
let forwardStackURL = [];

let backwardStack = [];
let backwardStackURL = [];

let currentTitle = '';
let currentURL = '';

function addNewTitle() {
    currentTitle = document.title;
    backwardStack.push(currentTitle);
}

function addNewURL() {
    currentURL = iframe.src;
    forwardStackURL.push(currentURL);
}

function goBackward() {
    let newTitle = backwardStack.slice(-1)[0];
    console.log(newTitle)

    forwardStack.push(newTitle);
    forwardStackURL.push(currentURL)

    currentTitle = backwardStack.pop();
    currentURL = backwardStackURL.pop();

    document.title = newTitle;
}

function goForward() {
    let newTitle = forwardStack.slice(-1)[0];

    backwardStack.push(currentTitle);
    backwardStackURL.push(currentURL);

    currentTitle = forwardStack.pop();
    currentURL = forwardStackURL.pop();

    document.title = newTitle;
}

function checkState() {
    // checks if the iframe has gone forward or backwards
    console.log(currentURL, iframe.src, backwardStackURL, backwardStackURL[backwardStackURL.length - 1], forwardStackURL.includes(currentURL))
    return backwardStackURL.slice(-1)[0] == currentURL ? 'backward' : 
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