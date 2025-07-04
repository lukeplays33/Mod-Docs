let initPichaiUX = {
  about: {

    installation: {
      link: '',
      guide: ''
    },
    description: 'Dynamic icons are icons that dynamically change altogether with the theme of your Pichai-UX project.',
    useCases: ['Make your icons fit inside of your projects theme.'],

    notes: { // allows the developer or ai to supply additional notes such as bugs

      'Pichai-UX is in Beta': {
        description: "Pixhai-UX is a highly experimental design language and may not work properly or look properly. <br> If you have any feedback, please do not hesitate to share!",
        type: 'Beta',
        status: 'Beta Development',
        for: 'Pichai-UX' // if tied to a specific function or importqant for that one, leave empty to be global.
      },
    },

    demoLinks: { // links to examples users can look at
    },

    platforms: ['Android', 'Ios', 'ChromeOS', 'Web'],
    required: ['Pichai-UX'],
    languages: ['Javascript'],

    repo: {
      repoName: 'Pichai-UX',
      link: 'https://github.com/dreamForge-forging-our-dreams-in-tech/Pichai-UX',
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
    initialize: {
      generalInformation: {
        description: 'The initialize function starts initializing all required packages for pichai UX to work, based on the options you provide.',
        outputValueOptions: [], // none for events, tells what kind of value is outputted
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: `import { PichaiUX } from 'https://dreamforge-forging-our-dreams-in-tech.github.io/Pichai-UX/imports.js';
        
        let options = {}; // A object with al the options you want to initialize Pichai UX with.
        
        let pichai = new PichaiUX(options);
        pichai.initialize();`, // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
        codeFormat: 'javascript', // set to img to display a image
      },

      variables: { //the input or outputs it can have, the types they return or accept such as a string or number

        options: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: ['contrast'], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['Object'],
          inputTypes: ['Object'],  // cannot have any value when in events since they cant accept input values

          description: 'The options property tells Pichai-UX with what options you want to initialize the design language.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        "options.contrast": {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['number'],
          inputTypes: ['number'],  // cannot have any value when in events since they cant accept input values

          description: 'The options.contrast property allows you to set the contrast of the generated theme.',

          accessCode: "options.contrast", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        "options.wallpaperBlur": {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['number'],
          inputTypes: ['number'],  // cannot have any value when in events since they cant accept input values

          description: 'The options.wallpaperBlur property allows you to set the wallpaper blur of the site.',

          accessCode: "options.wallpaperBlur", //what the user can type to access the variable; e.g. event.detail.keyCode
        },
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },
    },
  },
}

export { initPichaiUX };