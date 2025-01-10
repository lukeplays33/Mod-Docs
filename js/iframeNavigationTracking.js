let iframe = document.getElementById('pages');
let drawer = document.getElementById('draawer');

const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
let src = iframeDoc.location.href;

let currentTitle = '';
let currentURL = '';

let forwardStack = ['aa'];
let forwardStackURL = ['https://static.wixstatic.com/media/b34289_0b00d544f6504279b491b36616f2efe5~mv2_d_2040_1360_s_2.jpg/v1/fill/w_1000,h_667,al_c,q_85,usm_0.66_1.00_0.01/b34289_0b00d544f6504279b491b36616f2efe5~mv2_d_2040_1360_s_2.jpg'];

let backwardStack = [document.title];
let backwardStackURL = [currentURL];

function addNewTitle() {
    currentTitle = document.title;
    backwardStack.push(currentTitle);
}

function addNewURL() {
    currentURL = src;
    backwardStackURL.push(currentURL);
}

function goBackward() {
    let newTitle = backwardStack[backwardStack.length - 2];
    console.log(newTitle)
    document.title = newTitle;
    //drawer.getElementsByClassName('current')[0].classList.remove('current');

    forwardStack.push(newTitle);
    forwardStackURL.push(currentURL)

    currentTitle = backwardStack.pop();
    currentURL = backwardStackURL.pop();
}

function goForward() {
    let newTitle = forwardStack[forwardStack.length - 1];

    document.title = newTitle;
    //drawer.getElementsByClassName('current')[0].classList.remove('current');

    backwardStack.push(currentTitle);
    backwardStackURL.push(currentURL);

    currentTitle = forwardStack.pop();
    currentURL = forwardStackURL.pop();
}

function checkState() {
    // checks if the iframe has gone forward or backwards
    console.log(src)
    console.log(forwardStackURL)
    return src == currentURL ? 'backward' : 
    forwardStackURL.includes(src) ? 'forward' : 'new';
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