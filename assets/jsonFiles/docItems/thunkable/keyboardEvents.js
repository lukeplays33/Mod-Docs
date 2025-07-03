let keyboard = {
  about: {

    installation: {
      link: 'https://x.thunkable.com/module/66bcb8c35969ac7509eca98f/',
      guide: 'https://docs.thunkable.com/app-design/ui-components/modules#import-a-module'
    },

    moduleInformation: {
      Platforms: ['Android', 'Ios', 'ChromeOS', 'Web'],
      Required: ['Physical keyboard'],
      Languages: ['Javascript', 'Thunkable Blockly'],
      Description: 'The keyboard events module allows users to capture key presses and releases inside of their Thunkable project.',
      UseCases: ['Capture key presses', 'Capture key releases', 'Capture heldDown events'],
      Connection: 'Required',
    },

    notes: { // allows the developer or ai to supply additional notes such as bugs

      'Module stays visible after setting visible to false': {
        description: "This is a Thunkable bug, a temporary workaround is to place the module in a group and then hide or show that group.",
        type: 'Bug',
        status: 'Passed on to Thunkable team',
        for: '' // if tied to a specific function or importqant for that one, leave empty to be global.
      },

      'Module fails to capture events or unfocuses.': {
        description: "Due to the way JavaScript sandboxing works aswel as how Thunkable Modules work the module may not properly capture events to solve this you can use the requestFocus() function to recapture focus into the module. \n This is often used after a UI interaction since that stops the focus on the capturing.",
        type: 'CORS rule',
        for: 'requestFocus' // if tied to a specific function or important for that one, leave empty to be global.
      }
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
    keyPress: {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number

        keyName: {
          readOnly: true, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['string'],
          inputTypes: [],  // cannot have any value when in events since they cant accept input values

          description: 'The name of the key that is pressed.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        keyCode: {
          readOnly: true, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['number'],
          inputTypes: [],

          description: 'The code of the key that is pressed.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        heldDown: {
          readOnly: true, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['boolean'],
          inputTypes: [],

          description: 'Returns true if the key is held down for long periods of time.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The keyPress event fires when a key is pressed and released on the keyboard.',
        outputValueOptions: [], // none for events
        type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/28Z1DCG/Screenshot-2025-01-14-133534.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    keyDown: {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number

        keyName: {
          readOnly: true, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['string'],
          inputTypes: [],  // cannot have any value when in events since they cant accept input values

          description: 'The name of the key that is pressed.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        keyCode: {
          readOnly: true, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['number'],
          inputTypes: [],

          description: 'The code of the key that is pressed.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        heldDown: {
          readOnly: true, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['boolean'],
          inputTypes: [],

          description: 'Returns true if the key is held down for long periods of time.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The keyDown event fires when a key is pressed down on the keyboard.',
        outputValueOptions: [], // none for events
        type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/GV2smhc/Screenshot-2025-01-14-133730.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    keyUp: {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number

        keyName: {
          readOnly: true, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['string'],
          inputTypes: [],  // cannot have any value when in events since they cant accept input values

          description: 'The name of the key that is pressed.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        keyCode: {
          readOnly: true, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['number'],
          inputTypes: [],

          description: 'The code of the key that is pressed.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        heldDown: {
          readOnly: true, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['boolean'],
          inputTypes: [],

          description: 'Returns true if the key is held down for long periods of time.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The keyUp event fires when a key is released on the keyboard.',
        outputValueOptions: [], // none for events
        type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/GnpcWL6/Screenshot-2025-01-14-133835.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    requestFocus: {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The requestFocus function allows the developer to manually request listening to keyboard events, wich automatically stops when interacting with UI elements.',
        outputValueOptions: [],
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/BtvWLdC/Screenshot-2025-01-14-133918.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    visible: {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
        input: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['boolean'],
          inputTypes: ['boolean'],  // cannot have any value when in events since they cant accept input values

          description: '',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The visible property allows you to set the visibility of the module.',
        outputValueOptions: ['boolean'],
        type: 'Property', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/S0R4q76/Screenshot-2025-01-14-133958.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },
  },
  quickLinks: {
  }, //e.g. for quickly navigating to a tutorial
}

export { keyboard };