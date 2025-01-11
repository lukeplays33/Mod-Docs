let screen = {
  about: {

    installation: {
      link: 'https://x.thunkable.com/module/66bda9468b92252078174df8/',
      guide: 'https://docs.thunkable.com/app-design/ui-components/modules#import-a-module'
    },
    description: 'The screen events module allows user to acces various event regarding the device its screen inside of their Thunkable project.',
    useCases: ['Capture screen swipes/scrolling ', 'Capture resizing', 'Capture orientation changes'],

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
    },

    platforms: ['Android', 'Ios', 'ChromeOS', 'Web'],
    required: ['Physical Mouse/Touchpad or touchscreen, Physical Screen (duh;)'],
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
    requestFocus: {
      description: 'The requestFocus function allows the developer to manually request listening to screen events, wich automatically stops when interacting with UI elements.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: [],
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/SBCYPXw/Screenshot-2024-12-04-130414.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    wheel: {
      description: 'The wheel event fires when the user starts scrolling with the mouse wheel.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number

        deltaY: {
          readOnly: true, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['number'],
          inputTypes: [],  // cannot have any value when in events since they cant accept input values

          description: 'The delta value on the Y cordinate',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        deltaX: {
          readOnly: true, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['number'],
          inputTypes: [],

          description: 'The delta value on the X cordinate.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        deltaZ: {
          readOnly: true, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['boolean'],
          inputTypes: [],

          description: 'The delta value on the Z cordinate',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: [], // none for events
      type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/6Y9mP6h/Screenshot-2024-10-01-162555.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    mouseMove: {
      description: 'The mouseMove event fires when the user moves the mouse around on the screen.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number

        X: {
          readOnly: true, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['number'],
          inputTypes: [],  // cannot have any value when in events since they cant accept input values

          description: 'The x coordinate of the mouse.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        Y: {
          readOnly: true, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['number'],
          inputTypes: [],

          description: 'The y coordinate of the mouse.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        }
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: [], // none for events
      type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/fnkV6GG/Screenshot-2024-10-01-162616.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    touchMove: {
      description: 'The touchMove event fires when the user starts moving around the screen using its finger.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number

        X: {
          readOnly: true, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['number'],
          inputTypes: [],  // cannot have any value when in events since they cant accept input values

          description: 'The x coordinate on the screen.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        Y: {
          readOnly: true, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['number'],
          inputTypes: [],

          description: 'The y coordinate on the screen.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        }
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: [], // none for events
      type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/9vghL9y/Screenshot-2024-12-04-191927.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    resize: {
      description: 'The resize event fires when the user resizes the screen.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: [], // none for events
      type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/zxwkmK4/Event-resize.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    orientationChange: {
      description: 'The orientationCHange event fires when the user changes the screen orientation',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number

        orientationAngle: {
          readOnly: true, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['number'],
          inputTypes: [],  // cannot have any value when in events since they cant accept input values

          description: 'The angle the screen has rotated to.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: [], // none for events
      type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/SmmRrXt/Event-orientation-Change.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    fileDropped: {
      description: 'The fileDropped event fires when the user has succesfully dropped a file onto the screen.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number

        fileName: {
          readOnly: true, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['string'],
          inputTypes: [],  // cannot have any value when in events since they cant accept input values

          description: 'The name of the file that has been dropped.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        file: {
          readOnly: true, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['base64'],
          inputTypes: [],  // cannot have any value when in events since they cant accept input values

          description: 'The dropped file in base64 format.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        fileSize: {
          readOnly: true, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['number'],
          inputTypes: [],  // cannot have any value when in events since they cant accept input values

          description: 'The size of the file that has been dropped in bytes.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        fileLastModificationDate: {
          readOnly: true, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['date'],
          inputTypes: [],  // cannot have any value when in events since they cant accept input values

          description: 'The last date the file has been modified.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: [], // none for events
      type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/SrTWJws/Screenshot-2024-12-04-195144.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    mouseUp: {
      description: 'The mouseUp event fires when the user stops clicking the screen.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: [], // none for events
      type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/BLzqjs4/Screenshot-2025-01-06-115711.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    mouseDown: {
      description: 'The mouseDown event fires when the user starts clicking the screen.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: [], // none for events
      type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/ZGx79Nm/Screenshot-2025-01-06-115843.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    touchStart: {
      description: 'The touchStart event fires when the user starts pressing the screen.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: [], // none for events
      type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/vx5DchT/Screenshot-2025-01-06-115938.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    touchEnd: {
      description: 'The touchEnd event fires when the user stops pressing the screen.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: [], // none for events
      type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/yBLn3LF/Screenshot-2025-01-06-120133.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },
  },
  quickLinks: {
    'Standard Thunkable docs': 'https://docs.thunkable.com/app-design/ui-components/basic-components/button#button-blocks'
  }, //e.g. for quickly navigating to a tutorial
}

export { screen };