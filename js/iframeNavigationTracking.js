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
    backwardStack.push(currentTitle);
    backwardStackURL.push(currentURL);

    currentTitle = forwardStack.pop();
    currentURL = forwardStackURL.pop();
}

function checkState() {
    // checks if the iframe has gone forward or backwards
    return backwardStackURL.slice(-1)[0] == currentURL ? 'backward' : 
    forwardStackURL.includes(iframe.src) ? 'forward' : 'new';
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