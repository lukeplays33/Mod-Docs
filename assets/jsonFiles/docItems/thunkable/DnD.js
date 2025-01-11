let DnD = {
  about: {

    installation: {
      link: 'https://x.thunkable.com/module/677bc62a45f85729a560a19e/',
      guide: 'https://docs.thunkable.com/app-design/ui-components/modules#import-a-module'
    },
    description: 'The DnD module allows you drag and drop images.',
    useCases: ['Drag and drop Images.'],

    notes: { // allows the developer or ai to supply additional notes such as bugs
      'DragOver and leave events not firing properly': {
        description: "This is a issue on Chrome that has sadly not been fixed yet.",
        type: 'Bug',
        status: 'Chrome ignorance',
        for: '' // if tied to a specific function or importqant for that one, leave empty to be global.
      },

      'Unable to change position or size using inputs': {
        description: "This is a issue very similar to the invisible bug on thunkable, sadly there are no work arounds found yet.",
        type: 'Bug',
        status: 'Passed on to Thunkable',
        for: '' // if tied to a specific function or importqant for that one, leave empty to be global.
      },
    },

    demoLinks: { // links to examples users can look at
    },

    platforms: ['Android', 'Ios', 'ChromeOS', 'Web'],
    required: ['Something to drag around :)'],
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
    picture: {
      description: 'The draggable image its picture.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['string'],
      type: 'Property', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/0XnqBCv/Screenshot-2025-01-06-163032.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    pictureResizeMode: {
      description: 'Sets the size of the image its picture.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      inputValueOptions: ['cover', 'contain', 'fill'],
      outputValueOptions: ['cover', 'contain', 'fill'],
      type: 'Property', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/5Fp7dSX/Screenshot-2025-01-06-163226.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    allowDragging: {
      description: 'Whether its allowed for the image to be draggable or not.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['boolean'], // none for events
      type: 'Property', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/xzjN55t/Screenshot-2025-01-06-164050.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    doubleClicked: {
      description: 'The doubleClicked event fires when the user double clicks the draggable image.',
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
      displayFile: 'https://i.ibb.co/yP9Thyw/Screenshot-2025-01-11-140902.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    dragOver: {
      description: 'The dragOver event fires when a draggable image is hovering over another draggable image.',
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
      displayFile: 'https://i.ibb.co/S0K924m/Screenshot-2025-01-06-164352.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    dragLeave: {
      description: 'The dragLeave event fires when a draggable image stops hovering over another draggable image.',
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
      displayFile: 'https://i.ibb.co/JCPCpGH/Screenshot-2025-01-06-164552.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    startedDragging: {
      description: 'The startedDragging event fires when a user has started dragging a image.',
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
      displayFile: 'https://i.ibb.co/tc5C6jH/Screenshot-2025-01-06-164649.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    itemDropped: {
      description: 'The itemDropped event fires when a user has dropped a image.',
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
      displayFile: 'https://i.ibb.co/WxZxfK8/Screenshot-2025-01-06-164815.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

  },
  //quickLinks: [], //e.g. for quickly navigating to a tutorial
}

export { DnD };