let iframe = document.getElementById('pages');
let drawer = document.getElementById('draawer');

let currentTitle = '';
let currentURL = '';

let forwardStack = [];
let forwardStackURL = [];

let backwardStack = [document.title];
let backwardStackURL = [currentURL];

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
    drawer.getElementsByClassName('current')[0].classList.remove('current');
}

function goForward() {
    let newTitle = forwardStack[forwardStack.length - 2];

    backwardStack.push(currentTitle);
    backwardStackURL.push(currentURL);

    currentTitle = forwardStack.pop();
    currentURL = forwardStackURL.pop();

    document.title = newTitle;
    drawer.getElementsByClassName('current')[0].classList.remove('current');
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