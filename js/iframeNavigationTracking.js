let iframe = document.getElementById('pages');

let forwardStack = [];
let backwardStack = [];
let currentTitle = '';

function addNewTitle() {
    if (currentTitle) {
        backwardStack.push(currentTitle);
        backwardStack = [... new Set(backwardStack)];
    }
    currentTitle = document.title;
    console.log(currentTitle)
}

function goBackward() {
    if (!backwardStack.length) {
        return;
    }

    console.log(currentTitle)
    forwardStack.push(currentTitle);
    currentTitle = backwardStack.pop();
}

function goForward() {
    if (!forwardStack.length) {
        return;
    }

    backwardStack.push(currentTitle);
    currentTitle = forwardStack.pop();
}

iframe.onload = function () {
    addNewTitle();

    iframe.contentWindow.onpagehide = function () {
        parent.goBackward()
    }
}