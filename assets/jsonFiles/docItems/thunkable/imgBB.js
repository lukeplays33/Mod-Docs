let imgBB = {
  about: {

    installation: {
      link: 'https://x.thunkable.com/module/676d0ceb05584dabb2c0728f/',
      guide: 'https://docs.thunkable.com/app-design/ui-components/modules#import-a-module'
    },
    description: 'The imgBB module allows you to upload images and gifs to the public imgBB service.',
    useCases: ['Upload images or gifs to an public image service that is free to use.'],

    notes: { // allows the developer or ai to supply additional notes such as bugs
      'ImgBB privacy concerns': {
        description: "ImgBB is a public service, although images upload through the imgBB site allows private images, the API does not so all your uploaded images will be public for everyone to see.",
        type: 'Note',
        status: '',
        for: '' // if tied to a specific function or importqant for that one, leave empty to be global.
      },
    },

    demoLinks: { // links to examples users can look at
      'Playground': 'https://x.thunkable.com/projectPage/675034b7267bc8dd4bc33f6c',
    },

    platforms: ['Android', 'Ios', 'ChromeOS', 'Web'],
    required: ['imgBB API key'],
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
    setup: {
      description: 'ImgBB is a simple API that you can easilly use and connect to your Thunkable project. <br> Below are the steps to connect to imgBB after you installed the module.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
          "Create a imgBB account": {
            description: '1. Go to https://imgbb.com/ and click sign-in or create account. <br>2.Then follow the instructions from there.'
          },

          "Get your API key.": {
            description: '1. Go to https://api.imgbb.com/. <br>2. Click Get API key or Add API key. <br> 3. Copy and paste the link into the API Key property.'
          },
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

    imageUploadedSuccesfully: {
      description: 'The imageUploadedSuccesfully event fires when a file has succesfully been uploaded.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number

        image: {
          readOnly: true, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['string'],
          inputTypes: [],  // cannot have any value when in events since they cant accept input values

          description: 'The link to the uploaded image',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        response: {
          readOnly: true, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['JSON'],
          inputTypes: [],

          description: 'The full response from imgBB returned as a JSON.',

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
      displayFile: 'https://i.ibb.co/r7yRKgp/Screenshot-2025-01-15-093553.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    urlFromUploadedImage: {
      description: 'The urlFromUploadedImage allows you to upload a image to imgBB.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number

        Image: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: ['BLOB', 'URL', 'Base64'], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: [],
          inputTypes: ['BLOB'],  // cannot have any value when in events since they cant accept input values

          description: 'The image that should be uploaded to imgBB.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['imgBB URL'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/mbzHb71/Screenshot-2025-01-15-093645.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    urlFromAdvancedUploadedImage: {
      description: 'The urlFromAdvancedUploadedImage allows you to upload a image to imgBB with some extra options.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number

        Image: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: ['BLOB', 'URL', 'Base64'], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: [],
          inputTypes: ['BLOB'],  // cannot have any value when in events since they cant accept input values

          description: 'The image that should be uploaded to imgBB.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        name: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: [],
          inputTypes: ['string'],

          description: 'The name the image should get once its uploaded.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },
        expirityDateInSeconds: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: [],
          inputTypes: ['number'],

          description: 'The expirityDateInSeconds allows you to tell imgBB to auto delete your image after x amount of seconds.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        }
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['imgBB URL'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/PxZMmDz/Screenshot-2025-01-15-093747.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getImageNameFromImgBB: {
      description: 'The getImageNameFromImgBB function allows you to get the name of an imgBB url.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number

        url: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: ['ImgBB file URL'], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: [],
          inputTypes: ['string'],

          description: 'The imgBB url referring to the file you want to get the name of.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        }
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['string'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/HN3BhjS/Screenshot-2025-01-15-093904.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    fullJsonResponse: {
      description: 'The fullJsonResponse function returns the whole response from imgBB as a JSON string.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['JSON'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/g3x8DsV/Screenshot-2025-01-15-094009.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    apiKey: {
      description: 'The API key referring to your imgBB account for uploads.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,

        input: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['string'],
          inputTypes: ['string'],  // cannot have any value when in events since they cant accept input values

          description: 'The imgBB API key.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['string'],
      type: 'Property', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/nm1HbYh/Screenshot-2025-01-15-094052.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },
  },
  //quickLinks: [], //e.g. for quickly navigating to a tutorial
}

export { imgBB };