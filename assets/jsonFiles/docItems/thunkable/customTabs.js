let customTabs = {
  about: {

    installation: {
      link: 'https://x.thunkable.com/module/67cd5d82340532b008816fb8/',
      guide: 'https://docs.thunkable.com/app-design/ui-components/modules#import-a-module'
    },

    moduleInformation: {
      Description: 'The Custom Tabs module gives you some extra control on opening windows on desktop. It allows you to open custom browser tabs or windows with custom sizes or positions.',
      UseCases: ['Open custom browser tabs or windows.'],
      Platforms: ['Chromium Web (Desktop Only)'],
      Required: ['A URL to open'],
      Languages: ['Javascript', 'Thunkable Blockly'],
      Connection: 'Not-Required',
    },

    notes: { // allows the developer or ai to supply additional notes such as bugs
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

      license: {
        name: 'Apache 2.0',
        link: 'https://httpd.apache.org/docs/2.4/license.html'
      },
    },

  },
  contents: {
    windowOpened: {
      description: 'The windowOpened event fires when a new window or tab has been opened.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
        window: {
          readOnly: true, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['number'],
          inputTypes: [],  // cannot have any value when in events since they cant accept input values

          description: 'The id of the window that has been opened. <br> This is a number that is unique to each window that is opened and is required to edit windows or tabs.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: [],
      type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/YBBJ8shW/download.jpg', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    windowClosed: {
      description: 'The windowClosed event fires when the window has been closed programmatically or by the user.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
        windowID: {
          readOnly: true, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['number'],
          inputTypes: [],  // cannot have any value when in events since they cant accept input values

          description: 'The id of the window that has been closed.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: [],
      type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/k6Gb0kB3/download.jpg', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    openWindow: {
      description: 'The openWindow function opens a new url in a new tab or window.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
        url: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: [],
          inputTypes: ['string'],  // cannot have any value when in events since they cant accept input values

          description: 'The url to open.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        target: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '_blank',
          valueOptions: ['_blank', '_self', '_parent', '_top'], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: [],
          inputTypes: ['string'],  // cannot have any value when in events since they cant accept input values

          description: 'The form the window opens in e.g. open as a new window or browser tab.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        windowFeatures: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: ['width', 'height', 'left', 'top', 'noopener', 'popup'], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: [],
          inputTypes: ['string'],  // cannot have any value when in events since they cant accept input values

          description: 'The windowFeatures property allows you to customize the way a new window or tab behaves or is controlled.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: [],
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/mCVHzDr1/download.jpg', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    closeWindow: {
      description: 'The closeWindow function closes the window with the given ID.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
        windowID: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: [],
          inputTypes: ['number'],  // cannot have any value when in events since they cant accept input values

          description: 'The ID of the window to close.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: [],
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/846fkQZb/download.jpg', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    reopenWindow: {
      description: 'The reopenWindow function allows you to re-open a window that has been closed previously.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
        windowID: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: [],
          inputTypes: ['number'],  // cannot have any value when in events since they cant accept input values

          description: 'The ID of the window to close.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: [],
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/RkbQJ6zL/download.jpg', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    allOpenWindows: {
      description: 'The allOpenWindows function returns an array containing all IDs of all open windows.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['array'],
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/39mfCn5Q/Screenshot-2025-03-11-110528.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    'isWindowClosed?': {
      description: 'The isWindowClosed? function checks if a certain window has been closed or not.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
        windowID: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['number'],
          inputTypes: [],  // cannot have any value when in events since they cant accept input values

          description: 'The ID of the window to close.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['boolean'],
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/pj1ThRcP/Screenshot-2025-03-11-130040.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },
  },
  //quickLinks: [], //e.g. for quickly navigating to a tutorial
}

export { customTabs };