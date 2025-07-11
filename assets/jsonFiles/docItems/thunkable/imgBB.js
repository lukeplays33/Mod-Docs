let imgBB = {
  about: {

    installation: {
      link: 'https://x.thunkable.com/module/676d0ceb05584dabb2c0728f/',
      guide: 'https://docs.thunkable.com/app-design/ui-components/modules#import-a-module'
    },

    moduleInformation: {
      Description: 'The imgBB module allows you to upload images and gifs to the public imgBB service.',
      UseCases: ['Upload images or gifs to an public image service that is free to use.'],
      Platforms: ['Android', 'Ios', 'ChromeOS', 'Web'],
      Required: ['imgBB API key'],
      Languages: ['Javascript', 'Thunkable Blockly'],
      Connection: 'Required',
    },

    notes: { // allows the developer or ai to supply additional notes such as bugs
      'ImgBB privacy concerns': {
        description: "ImgBB is a public service, although images uploaded through the imgBB site allows private images, the API does not so all your uploaded images will be public for everyone to see.",
        type: 'Note',
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
    setup: {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
        "Create a imgBB account": {
          content: `<ol>
          <li> Go to https://imgbb.com/ and click sign-in or create account.</li>
          <li> Then follow the instructions from there.</li>
          </ol>`, // use the contents item to tell mod docs to display html strings rather than the default table view, can be for variables or general use
        },

        "Get your API key.": {
          content: `<ol>
          <li> Go to https://api.imgbb.com/.</li>
          <li> Click Get API key or Add API key.</li>
          <li> Copy and paste the link into the API Key property.</li>
          </ol
          `,
        },
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'ImgBB is a simple API that you can easilly use and connect to your Thunkable project. <br> Below are the steps to connect to imgBB after you installed the module.',
        outputValueOptions: [],
        type: 'Guide', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/MDb0kX7/setup.gif', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    imageUploadedSuccesfully: {
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

      generalInformation: {
        description: 'The imageUploadedSuccesfully event fires when a file has succesfully been uploaded.',
        outputValueOptions: [], // none for events
        type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/r7yRKgp/Screenshot-2025-01-15-093553.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    failedUploading: {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number

        error: {
          readOnly: true, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['string'],
          inputTypes: [],  // cannot have any value when in events since they cant accept input values

          description: 'The error that caused the failed upload.',

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
        description: 'The failedUploading event fires when the API upload call has failed to upload the image.',
        outputValueOptions: [], // none for events
        type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/cbn5GJK/Screenshot-2025-01-16-164526.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    startedUploading: {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The startedUploading event fires when a file upload started.',
        outputValueOptions: [], // none for events
        type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/SRcnsYs/Screenshot-2025-01-16-141153.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    urlFromUploadedImage: {
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

      generalInformation: {
        description: 'The urlFromUploadedImage allows you to upload a image to imgBB.',
        outputValueOptions: ['imgBB URL'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/mbzHb71/Screenshot-2025-01-15-093645.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    urlFromAdvancedUploadedImage: {
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

      generalInformation: {
        description: 'The urlFromAdvancedUploadedImage allows you to upload a image to imgBB with some extra options.',
        outputValueOptions: ['imgBB URL'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/PxZMmDz/Screenshot-2025-01-15-093747.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    getImageNameFromImgBB: {
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

      generalInformation: {
        description: 'The getImageNameFromImgBB function allows you to get the name of an imgBB url.',
        outputValueOptions: ['string'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/HN3BhjS/Screenshot-2025-01-15-093904.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    fullJsonResponse: {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The fullJsonResponse function returns the whole response from imgBB as a JSON string.',
        outputValueOptions: ['JSON'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/g3x8DsV/Screenshot-2025-01-15-094009.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    apiKey: {
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

      generalInformation: {
        description: 'The API key referring to your imgBB account for uploads.',
        outputValueOptions: ['string'],
        type: 'Property', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/nm1HbYh/Screenshot-2025-01-15-094052.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },
  },
  //quickLinks: [], //e.g. for quickly navigating to a tutorial
}

export { imgBB };