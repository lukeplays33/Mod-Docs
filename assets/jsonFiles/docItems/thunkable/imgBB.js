let imgBB = {
  about: {

    installation: {
      link: 'https://x.thunkable.com/module/676d0ceb05584dabb2c0728f/',
      guide: 'https://docs.thunkable.com/app-design/ui-components/modules#import-a-module'
    },
    description: 'The imgBB module allows you to upload images and gif to the public imgBB service.',
    useCases: ['Upload images or gifs to an public image service that is free to use.'],

    notes: { // allows the developer or ai to supply additional notes such as bugs
    },

    demoLinks: { // links to examples users can look at
    },

    platforms: ['Android', 'Ios', 'ChromeOS', 'Web'],
    required: ['imgBB API key'],
    languages: ['Javascript', 'Thunkable Blockly'],

    repo: {
      repoName: 'Mod Docs',
      link: 'https://github.com/lukeplays33/Mod-Docs',
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
    setup: {
      description: 'To use the imgBB module you need to get an API key from imgBB. PLease go to: https://imgbb.com/ then log-in or sign-up and from there you can go to: https://api.imgbb.com/ to get your api key.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: [],
      type: 'Guide', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/gZc7q8M/setup.gif', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
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
  },
  //quickLinks: [], //e.g. for quickly navigating to a tutorial
}

export { imgBB };