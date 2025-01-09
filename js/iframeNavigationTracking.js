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
}

function goBackward() {
    if (!backwardStack.length) {
        return;
    }

    let newTitle = backwardStack[backwardStack.length - 1];
    console.log(newTitle);
    forwardStack.push(newTitle);
    currentTitle = backwardStack.pop();

    document.title = backwardStack[backwardStack.length - 1];
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
        goBackward();
    }
}