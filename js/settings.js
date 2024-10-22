import { PichaiUX } from 'https://lukeplays33.github.io/Pichai-UX/imports.js';

let pichai = new PichaiUX();

document.getElementById('settingsListView').addEventListener('itemSelected', function (e) {
    if (e.detail.index == 8) {
        window.open('https://buymeacoffee.com/sketchdonate');
    } else if (e.detail.index == 0) {
        var input = document.createElement('input');
        input.type = 'file';

        input.onchange = e => {

            // getting a hold of the file reference
            var file = e.target.files[0];

            // setting up the reader
            var reader = new FileReader();
            reader.readAsText(file, 'UTF-8');

            // here we tell the reader what to do when it's done reading...
            reader.onload = readerEvent => {
                var content = readerEvent.target.result; // this is the content!

                document.body.style.backgroundImage = `url('${readerEvent.target.result}')`;
                pichai.initialize();

                document.body.style.backgroundImage = 'initial';
            }

        }

        input.click();
    }
});