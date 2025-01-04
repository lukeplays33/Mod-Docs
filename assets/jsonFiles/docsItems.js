import { dynamicIcons } from './docItems/pichaiUX/dynamicIconsDoc.js';
import { keyboard } from './docItems/thunkable/keyboardEvents.js';
import { screen } from './docItems/thunkable/screenEvents.js';
import { imgBB } from './docItems/thunkable/imgBB.js';
import { deviceInfo } from './docItems/thunkable/deviceInfo.js';

let docsItemsJson = {
  /*
  "Pichai_UX": {
    description: 'Pichai-UX is a design language developed by dreamForge aiming at creating a design that is customizable yet versittale to use.',
    items: {
      "DynamicIcons" : dynamicIcons,

    }
  },

"Lucy": { },
"Gryffindor": { },
"NexOS": { },
"Stereo": { },
"Debugger": { },
"Mod_Docs!": {
  description: 'Mod Docs! is a library designed to let developers easilly write documentations for their products using either an AI for automation or themselves.',
    items: {},
},
*/

  "Thunkable": {
    description: 'Modules are a way that allows Thunkable users to create more functions for their app. it allows them to develop easier and faster. <br> Below is a list of Modules we have developed for Thunkable.',

    items: {
      "Device Modules": 'Type: divider', // tells the list to display this item as a divider
      "Keyboard_Events": keyboard,
      "Screen_Events": screen,
      "deviceInfo": deviceInfo,

      "HomeHub Modules": 'Type: divider', // tells the list to display this item as a divider
      "ImgBB": imgBB,
    }
  }
}

export { docsItemsJson }