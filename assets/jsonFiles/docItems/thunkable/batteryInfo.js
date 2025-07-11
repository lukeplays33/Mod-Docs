let batteryInfo = {
  about: {

    installation: {
      link: 'https://x.thunkable.com/module/677d0b77e93f07eb86033d36/',
      guide: 'https://docs.thunkable.com/app-design/ui-components/modules#import-a-module'
    },

    moduleInformation: {
      Description: 'The batteryInfo module allows you to gather information about the users device its battery.',
      UseCases: ['Gather battery info.'],
      Platforms: ['Android (partially)', 'ChromeOS', 'Web'],
      Required: ['A battery :)'],
      Languages: ['Javascript', 'Thunkable Blockly'],
      Connection: 'Required',
    },

    notes: { // allows the developer or ai to supply additional notes such as bugs
      'inaccurate info': {
        description: "Some properties may return inaccurate information this is because some browsers have different implementations, safety reasons or compatability requirements.",
        type: 'Compatability issue of browser/webviewer services',
        status: '',
        for: '' // if tied to a specific function or importqant for that one, leave empty to be global.
      },
    },

    demoLinks: { // links to examples users can look at
      'Playground': 'https://x.thunkable.com/web-build/index.html?projectId=675034b7267bc8dd4bc33f6c&noframe=1&responsive=1&screenId=undefined',
      "Remix sample Project": "https://x.thunkable.com/projectPage/675034b7267bc8dd4bc33f6c",
    },

    repo: {
      repoName: 'Thunkable Modules',
      link: 'https://github.com/lukeplays33/Thunkable-Modules',
      openSource: 'Open source',
      developerDocs: '',
      developer: 'dreamForge',
      version: '0.0.1',
      status: "Alive", // deperecated/ no-longer maintained or alive or custom
    },

    licensing: {
      license: 'Apache 2.0',
      licenseLink: 'https://httpd.apache.org/docs/2.4/license.html'
    },

  },
  contents: {
    chargingStateChanged: {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The chargingStateChanged event fires when the charging state changes, if the user for example starts charging the device this event will fire.',
        outputValueOptions: [],
        type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/BycZ6bD/Screenshot-2025-01-15-092530.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    chargingTimeChanged: {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The chargingTimeChanged event fires when the time required to charge the device fully changes.',
        outputValueOptions: [],
        type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/rfnyLGV/Screenshot-2025-01-15-092707.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    dischargingTimeChanged: {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The dischargingTimeChanged event fires when the time to discharge the device to 0% changes.',
        outputValueOptions: [],
        type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/BCkcGkw/Screenshot-2025-01-15-092805.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    batteryLevelChanged: {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The batteryLevelChanged event fires when the level of the battery changes.',
        outputValueOptions: [],
        type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/4gy91kw/Screenshot-2025-01-15-092857.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    getBatteryInfo: {

      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The getBatteryInfo function gathers all available information about the battery. <br> Note: When any change event is fired this block needs to be called again to get the updated information.',
        outputValueOptions: [],
        type: 'Funtion', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/wh3GH038/Screenshot-2025-02-02-142039.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    getBatteryLevel: {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The getBatteryLevel function returns the current percentage of the battery.',
        outputValueOptions: ['number'],
        type: 'Funtion', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/4gy91kw/Screenshot-2025-01-15-092857.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    getChargingTime: {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The getChargingTime function returns the time it takes to fully charge the battery in seconds.',
        outputValueOptions: ['number', '<br>0 (Means its fully charged or an error occured getting the status)', '<br>Infinity (means it is discharging)'],
        type: 'Funtion', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/rfnyLGV/Screenshot-2025-01-15-092707.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    getDischargingTime: {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The getDischargingTime function returns the time it takes to fully drain the battery to 0% in seconds.',
        outputValueOptions: ['number', '<br>Infinity (means it is charging)'],
        type: 'Funtion', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/BCkcGkw/Screenshot-2025-01-15-092805.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    "isCharging?": {

      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The isCharging? function returns if the battery is connencted to a charger or not.',
        outputValueOptions: ['boolean'],
        type: 'Funtion', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/BycZ6bD/Screenshot-2025-01-15-092530.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },
  },
  //quickLinks: [], //e.g. for quickly navigating to a tutorial
}

export { batteryInfo };