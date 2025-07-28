import { dynamicIcons } from './docItems/pichaiUX/dynamicIconsDoc.js';
import { keyboard } from './docItems/thunkable/keyboardEvents.js';
import { screen } from './docItems/thunkable/screenEvents.js';
import { imgBB } from './docItems/thunkable/imgBB.js';
import { deviceInfo } from './docItems/thunkable/deviceInfo.js';
import { DnD } from './docItems/thunkable/DnD.js';
import { batteryInfo } from './docItems/thunkable/batteryInfo.js';
import { netowrkInfo } from './docItems/thunkable/netowrkInfo.js';
import { customTabs } from './docItems/thunkable/customTabs.js';

import { initPichaiUX } from './docItems/pichaiUX/initPichaiUX.js';
import { aboutPichaiUX } from './docItems/pichaiUX/aboutPichaiUx.js';
import { buttons } from './docItems/pichaiUX/buttons.js';
import { globalItemsPichaiUX } from './docItems/pichaiUX/global.js';

let docsItemsJson = {
  "Pichai_UX": {
    description: 'Pichai-UX is a design language developed by dreamForge aiming at creating a design that is customizable yet versittale and increadibily fun to use.',
    items: {
      "General": 'Type: divider',
      'What is Pichai UX?': aboutPichaiUX,
      'Initializing Pichai UX': initPichaiUX,
      'Global items': globalItemsPichaiUX,

      "Elements": 'Type: divider',
      'Buttons': buttons,
      "CSS": 'Type: divider',
      "Templates": 'Type: divider',
      "Icons and Images": 'Type: divider', // tells the list to display this item as a divider
      "DynamicIcons": dynamicIcons,

    }
  },

  /*
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
      "Keyboard Events": keyboard,
      "Screen Events": screen,
      "Device Info": deviceInfo,
      "Battery Info": batteryInfo,
      "Network Info": netowrkInfo,

      "Web Services": 'Type: divider', // tells the list to display this item as a divider
      "ImgBB": imgBB,

      "Browser Services": 'Type: divider', // tells the list to display this item as a divider
      "Custom Tabs": customTabs,

      //"Other": 'Type: divider', // tells the list to display this item as a divider
      //"Advanced Custom Element": DnD,
    }
  }
}

export { docsItemsJson }