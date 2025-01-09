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
    let newTitle = currentTitle; //backwardStack.slice(-1)[0];

    forwardStack.push(newTitle);
    backwardStackURL.push(currentURL)

    currentTitle = backwardStack.pop();
    currentURL = backwardStackURL.pop();
}

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
}

iframe.onload = function () {

    if (checkState() == 'forward') {
        addNewTitle();
        addNewURL();
    } else {
        goBackward();
    }
}