let batteryInfo = {
  about: {

    installation: {
      link: 'https://x.thunkable.com/module/677d0b77e93f07eb86033d36/',
      guide: 'https://docs.thunkable.com/app-design/ui-components/modules#import-a-module'
    },
    description: 'The batteryInfo module allows you to gather information about the users device its battery.',
    useCases: ['Gather battery info.'],

    notes: { // allows the developer or ai to supply additional notes such as bugs
      'inaccurate info': {
        description: "Some properties may return inaccurate information this is because some browsers have different implementations, safety reasons or compatability requirements.",
        type: 'Compatability issue of browser/webviewer services',
        status: '',
        for: '' // if tied to a specific function or importqant for that one, leave empty to be global.
      },
    },

    demoLinks: { // links to examples users can look at
    },

    platforms: ['Android (partially)', 'ChromeOS', 'Web'],
    required: ['A battery :)'],
    languages: ['Javascript', 'Thunkable Blockly'],

    repo: {
      repoName: 'Thunkable Modules',
      link: 'https://github.com/lukeplays33/Thunkable-Modules',
      openSource: 'Open source',
      developerDocs: '',
      developer: 'dreamForge',
      version: '0.0.1',
      status: "Alive", // deperecated/ no-longer maintained or alive or custom

      license: {
        name: 'Apache 2.0',
        link: 'https://httpd.apache.org/docs/2.4/license.html'
      },
    },

  },
  contents: {
    chargingStateChanged: {
      description: 'The chargingStateChanged event fires when the charging state changes, if the user for example starts charging the device this event will fire.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: [],
      type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/bvrVbqH/Screenshot-2025-01-07-163042.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    chargingTimeChanged: {
      description: 'The chargingTimeChanged event fires when the time required to charge the device fully changes.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: [],
      type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/Fsv7Msy/Screenshot-2025-01-07-163300.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    dischargingTimeChanged: {
      description: 'The dischargingTimeChanged event fires when the time to discharge the device to 0% changes.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: [],
      type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/NNPkNpJ/Screenshot-2025-01-07-163410.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    batteryLevelChanged: {
      description: 'The batteryLevelChanged event fires when the level of the battery changes.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: [],
      type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/wQQxj7b/Screenshot-2025-01-07-163505.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getBatteryLevel: {
      description: 'The getBatteryLevel functions returns the current percentage of the battery.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['number'],
      type: 'Funtion', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/kSmDG8m/Screenshot-2025-01-07-163754.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getChargingTime: {
      description: 'The getChargingTime functions returns the time it takes to fully charge the battery in seconds.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['number'],
      type: 'Funtion', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/K0MSm01/Screenshot-2025-01-07-163923.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getDischargingTime: {
      description: 'The getdisChargingTime functions returns the time it takes to fully drain the battery to 0% in seconds.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['number'],
      type: 'Funtion', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/KwffKkD/Screenshot-2025-01-07-164043.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    "isCharging?": {
      description: 'The isCharging? functions returns if the battery is conencted to a charger or not.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['boolean'],
      type: 'Funtion', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/f4t4pxk/Screenshot-2025-01-07-164148.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },
  },
  //quickLinks: [], //e.g. for quickly navigating to a tutorial
}

export { batteryInfo };