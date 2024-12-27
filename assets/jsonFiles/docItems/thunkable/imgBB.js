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

    apiKey: {
      description: 'The API key referring to your imgBB account for uploads.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,

        input: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['string'],
          inputTypes: [],  // cannot have any value when in events since they cant accept input values

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
      displayFile: 'https://i.ibb.co/dMC2Pc6/Screenshot-2024-12-27-114127.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
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

          outputTypes: ['number'],
          inputTypes: [],

          description: 'The full response from imgBB returned as JSON.',

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
      displayFile: 'https://i.ibb.co/HPFshMG/Screenshot-2024-12-27-111433.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    urlFromUploadedImage: {
      description: 'The urlFromUploadedImage allows you to upload a image to imgBB.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number

        Image: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['BLOB'],
          inputTypes: [],  // cannot have any value when in events since they cant accept input values

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
      displayFile: 'https://i.ibb.co/8YmZfsF/Screenshot-2024-12-27-111900.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    urlFromAdvancedUploadedImage: {
      description: 'The urlFromAdvancedUploadedImage allows you to upload a image to imgBB with some extra options.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number

        Image: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['BLOB'],
          inputTypes: [],  // cannot have any value when in events since they cant accept input values

          description: 'The image that should be uploaded to imgBB.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        name: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['string'],
          inputTypes: [],

          description: 'The name the image should get once its uploaded.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },
        expirityDateInSeconds: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['number'],
          inputTypes: [],

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
      displayFile: 'https://i.ibb.co/RDT9K7q/Screenshot-2024-12-27-112152.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getImageNameFromImgBB: {
      description: 'The getImageNameFromImgBB function allows you to get the name of an imgBB url..',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number

        url: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['string'],
          inputTypes: [],

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
      displayFile: 'https://i.ibb.co/ZcpMDHP/Screenshot-2024-12-27-113315.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
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
      displayFile: 'https://i.ibb.co/bBB87wm/Screenshot-2024-12-27-113721.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },
  },
  //quickLinks: [], //e.g. for quickly navigating to a tutorial
}

export { imgBB };