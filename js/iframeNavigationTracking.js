let iframe = document.getElementById('pages');

let forwardStack = [];
let backwardStack = [];
let currentTitle = '';

function addNewTitle() {
    currentTitle = document.title;
    console.log(currentTitle)

    if (currentTitle) {
        backwardStack.push(currentTitle);
    }
}

function goBackward() {
    if (!backwardStack.length) {
        return;
    }

    let newTitle = backwardStack.slice(-1)[0];

    forwardStack.push(newTitle);
    currentTitle = backwardStack.pop();

    document.title = newTitle;
}

function goForward() {
    if (!forwardStack.length) {
        return;
    }

    backwardStack.push(currentTitle);
    currentTitle = forwardStack.pop();
}

iframe.onload = function () {
    window.setTimeout(addNewTitle, 300);

    iframe.contentWindow.onpopstate = function (e) {
        console.log(e.state);
        window.setTimeout(goBackward, 300);
    }
}