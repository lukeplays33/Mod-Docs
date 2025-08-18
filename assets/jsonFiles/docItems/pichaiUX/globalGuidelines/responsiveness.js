let responsiveness = {
  about: {

    installation: {
      link: 'https://dreamforge-forging-our-dreams-in-tech.github.io/Pichai-UX/imports.js',
      guide: 'https://lukeplays33.github.io/Mod-Docs/?page=Pichai_UX+-+Initializing+Pichai+UX'
    },

    moduleInformation: {
      description: 'Pichai UX is the go to design language for you, if you want to use a design that is created by you, interactive, fun and versatille. \n Pichai UX follows the four core principles of dreamForge their design language: customizable, attractive, playfull and joyfull.',
      useCases: ['Make colorful, playfull, interactive, and customizable themes for your website or web app.'],
      platforms: ['Web'],
      required: ['Pichai-UX'],
      languages: ['Javascript, HTML and CSS'],
    },

    licensing: {
      license: 'Apache 2.0',
      licenseLink: 'https://httpd.apache.org/docs/2.4/license.html'
    },

    notes: { // allows the developer or ai to supply additional notes such as bugs

      'Pichai UX is in Beta': {
        description: "Pixhai UX is a highly experimental design language and may not work properly or look properly If you have any feedback, please do not hesitate to share them with us on our discord server!",
        type: 'Beta',
        status: 'Beta Development',
        for: 'Pichai-UX' // if tied to a specific function or importqant for that one, leave empty to be global.
      },
    },

    demoLinks: { // links to examples users can look at
    },

    repo: {
      repoName: 'Pichai-UX',
      link: 'https://github.com/dreamForge-forging-our-dreams-in-tech/Pichai-UX',
      openSource: 'Open source',
      developerDocs: '',
      developer: 'dreamForge',
      version: 'Beta 0.5',
      status: "Alive", // deperecated/ no-longer maintained or alive or custom
    },

  },
  contents: {
    'Introduction': {
      generalInformation: {
        description: 'Pichai Ux handles responsiveness a little bit different than most design languages in this article well descirbe how responsiveness is handled and how you can use them. <br> Note: Indivual responsiveness docs may be added to certain elements if they do not follow the global rules.',
        type: 'Introduction', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: `
 import { PichaiUX } from 'https://dreamforge-forging-our-dreams-in-tech.github.io/Pichai-UX/imports.js';
        
 let options = {}; // A object with al the options you want to initialize Pichai UX with.
        
 let pichai = new PichaiUX(options);
 pichai.initialize();`, // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
        codeFormat: 'javascript', // set to img to display a image
      },

      variables: {},

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },
    },

    "Landscape VS Portrait mode": {
      generalInformation: {
        description: 'When desinging a website Pichai UX does not build based on what the screen size is of the device but rather its orientation. <br> Weve noticed that most of the time it s not needed to design specifically for every device, since their almost always rectengular and not squared or rounded(watches excluded) and since Pichai UX automatically sizes its elements to fit the screen all you need to do is to keep an eye on the orientation (if not handled by Pichai UX itself).',
        outputValueOptions: [], // none for events, tells what kind of value is outputted
        type: 'Object', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: `
 import { PichaiUX } from 'https://dreamforge-forging-our-dreams-in-tech.github.io/Pichai-UX/imports.js';
        
 let options = {}; // A object with al the options you want to initialize Pichai UX with.
        
 let pichai = new PichaiUX(options);
 pichai.initialize();`, // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
        codeFormat: 'javascript', // set to img to display a image
      },

      variables: { //the input or outputs it can have, the types they return or accept such as a string or number

        Drawers: {
          content: `
          <div class='exampleFrame correct'>
          <img src='https://i.ibb.co/Jwsb17TG/Schermafbeelding-2025-08-18-161548.png'>

                    <ul>
          <li style="text-align:left; margin-left:8px;">A button it's width/height is responsive to it's text content and wraps around it with even spacing.</li>
          </ul>
          </div>

          <div class='exampleFrame error'>
          <button style="width:60px; max-height:60px"> This button has a incorrect sizing!</button>

                    <ul>
          <li style="text-align:left; margin-left:8px;">A button it's width/height is narrower than it's text.</li>
          </ul>
          </div>
          `
        },

        iconPack: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: 'https://fonts.googleapis.com/icon?family=Material+Icons',
          valueOptions: ['An link reffering to the icon pack Pichai UX should The icon pack should be based and act similar as to how Google Icon import links work and follow the same naming scheme for icons.'], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['string'],
          inputTypes: ['string'],  // cannot have any value when in events since they cant accept input values

          description: 'The options.iconPack property tells Pichai-UX what the main source of the theme is. It can be a image, gif or a array that contains 10 colors. ,br> Please note that when wnating to make a theme with one color you can use the optiosn.hueRotation.',

          accessCode: "options.iconPack", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        hueRotation: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '0',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['nbumber'],
          inputTypes: ['number'],  // cannot have any value when in events since they cant accept input values

          description: 'The options.hueRotation property allows you to set a theme color from a single hue.',

          accessCode: "options.hueRotation", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        inversion: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '0',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['nbumber'],
          inputTypes: ['number'],  // cannot have any value when in events since they cant accept input values

          description: 'The options.inversion property allows you to set the inversion of the theme colors.',

          accessCode: "options.inversion", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        blur: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '0',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['nbumber'],
          inputTypes: ['number'],  // cannot have any value when in events since they cant accept input values

          description: 'The options.blur property allows you to set the blur of the theme.',

          accessCode: "options.blur", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        extractionPosition: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['number (0 - 10)'],
          inputTypes: ['number (0 - 10)'],  // cannot have any value when in events since they cant accept input values

          description: 'The options.extractionPosition property is used to set the extraction position of colors from your image, gif or array.',

          accessCode: "options.extractionPosition", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        themedFavIcon: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: 'true',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['boolean'],
          inputTypes: ['boolean'],  // cannot have any value when in events since they cant accept input values

          description: 'The options.themedFavIcon property decides whether the favIcon will be repainted to fit the browers theme.',

          accessCode: "options.themedFavIcon", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        transparency: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '0.7',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['nbumber (0.0 - 1.0)'],
          inputTypes: ['number (0.0 - 1.0)'],  // cannot have any value when in events since they cant accept input values

          description: 'The options.transparency property sets the transparency of the theme its colors.',

          accessCode: "options.transparency", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        contrast: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '1',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['nbumber'],
          inputTypes: ['number'],  // cannot have any value when in events since they cant accept input values

          description: 'The options.contrast property sets the contrast of the theme its colors.',

          accessCode: "options.contrast", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        wallpaperBlur: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '0',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['nbumber'],
          inputTypes: ['number'],  // cannot have any value when in events since they cant accept input values

          description: 'The options.wallpaperBlur property sets the wallpaper blur of the the website.',

          accessCode: "options.wallpaperBlur", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        wallpaperBrightness: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '1',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['nbumber'],
          inputTypes: ['number'],  // cannot have any value when in events since they cant accept input values

          description: 'The options.wallpaperBrightness property sets the wallpaper brightness of the the website.',

          accessCode: "options.wallpaperBrightness", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        wallpaperInversion: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '0',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['nbumber'],
          inputTypes: ['number'],  // cannot have any value when in events since they cant accept input values

          description: 'The options.wallpaperInversion property sets the wallpaper inversion of the the website.',

          accessCode: "options.wallpaperInversion", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        wallpaperSize: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: 'cover',
          valueOptions: ['cover', 'contain'], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['string', 'number'],
          inputTypes: ['string', 'number'],  // cannot have any value when in events since they cant accept input values

          description: 'The options.wallpaperSize property sets the wallpaper size of the the website.',

          accessCode: "options.wallpaperSize", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        walpaperPosition: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: 'center',
          valueOptions: ['center', 'top', 'left', 'right', 'bottom'], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['string', 'number'],
          inputTypes: ['string', 'number'],  // cannot have any value when in events since they cant accept input values

          description: 'The options.walpaperPosition property sets the wallpaper positionh of the the website.',

          accessCode: "options.walpaperPosition", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        walpaperRepeat: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: 'no-repeat',
          valueOptions: ['space', 'repeat', 'repeat-y', 'repeat-x', 'round'], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['string'],
          inputTypes: ['string'],  // cannot have any value when in events since they cant accept input values

          description: 'The options.walpaperRepeat property sets the wallpaper positionh of the the website.',

          accessCode: "options.walpaperRepeat", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        rtl: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: 'false',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['boolean'],
          inputTypes: ['boolean'],  // cannot have any value when in events since they cant accept input values

          description: 'The options.rtl property sets whether Pichai Ux should display items in rtl or ltr mode.',

          accessCode: "options.rtl", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        storageName: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: 'Pichai-UX ',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['string'],
          inputTypes: ['string'],  // cannot have any value when in events since they cant accept input values

          description: 'The options.storageName property tells Pichai UX what the storage key is for saving any changes made by the user.',

          accessCode: "options.storageName", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        homeLink: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: 'Default website domain',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['string'],
          inputTypes: ['string'],  // cannot have any value when in events since they cant accept input values

          description: 'The options.homeLink property tells Pichai UX where the user should be navigated to when they press any links that refer to a home page in e.g. the header or footer.',

          accessCode: "options.homeLink", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        settingsDialog: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: 'template-settings-drawer',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['HTML Element'],
          inputTypes: ['HTML Element'],  // cannot have any value when in events since they cant accept input values

          description: 'The options.settingsDialog property allows you to set the dialog that shows when the user presses on the gear icon in the header or quickSettings button.',

          accessCode: "options.settingsDialog", //what the user can type to access the variable; e.g. event.detail.keyCode
        },
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },
    },

    "Functions": {
      generalInformation: {
        description: 'The Pichai UX functions are functions that developers can use through Pichai UX, these functions handle certain tasks such as creating drawer menus or making dynamic icons. .',
        outputValueOptions: [], // none for events, tells what kind of value is outputted
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: `
 import { PichaiUX } from 'https://dreamforge-forging-our-dreams-in-tech.github.io/Pichai-UX/imports.js';
        
 let options = {}; // A object with al the options you want to initialize Pichai UX with.
        
 let pichai = new PichaiUX(options);
 pichai.initialize();`, // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
        codeFormat: 'javascript', // set to img to display a image
      },

      variables: { //the input or outputs it can have, the types they return or accept such as a string or number

        initialize: {
          valueOptions: ['Pichai UX init options'], // an array of options telling the developer wich choices are accepted by the input

          inputTypes: ['Object'],  // cannot have any value when in events since they cant accept input values

          description: 'The pichaiUX.initialize function Initializes Pichai UX with the given options.',

          accessCode: "pichaiUX.initialize", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        generateDynamicIcon: {
          outputTypes: ['base64'],
          inputTypes: ['image'],  // cannot have any value when in events since they cant accept input values

          description: 'The pichaiUX.generateDynamicIcon fuunction generates an icon(90x90) that matches the website it`s theme.',

          accessCode: "pichaiUX.generateDynamicIcon", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        optimizeTextColor: {
          defaultValue: 'document',

          inputTypes: ['HTML element'],  // cannot have any value when in events since they cant accept input values

          description: 'The pichaiUX.optimizeTextColor function optimizes the text color of any given element.',

          accessCode: "pichaiUX.optimizeTextColor", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        createSimpleDrawer: {
          inputTypes: ['HTML element'],  // cannot have any value when in events since they cant accept input values

          description: 'The pichaiUX.createSimpleDrawer function allows you to turn a given HTML element into a drawwer menu.',

          accessCode: "pichaiUX.createSimpleDrawer", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        removeSimpleDrawer: {
          inputTypes: ['HTML element'],  // cannot have any value when in events since they cant accept input values

          description: 'The pichaiUX.removeSimpleDrawer function allows you to remove a given HTML element that has been turned a drawer menu.',

          accessCode: "pichaiUX.removeSimpleDrawer", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        pickFiles: {

          inputTypes: ['JS callback function'],  // cannot have any value when in events since they cant accept input values

          description: 'The pichaiUX.pickFiles function is a simple function to quickly open a file picker.',

          accessCode: "pichaiUX.pickFiles", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        updateStyling: {
          description: 'The pichaiUX.updateStyling function forces Pichai UX to update it`s theming and styles.',

          accessCode: "pichaiUX.updateStyling", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        varExists: {
          outputTypes: ['boolean'],
          inputTypes: ['CSS variable name'],  // cannot have any value when in events since they cant accept input values

          description: 'The pichaiUX.varExists function chekcs if a CSS variable has been properly created and/or exists.',

          accessCode: "pichaiUX.varExists", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        pichaiStorageKeys: {
          readOnly: true, // default for events, cannot be false for events

          outputTypes: ['array'],

          description: 'The pichaiUX.pichaiStorageKeys function returns a list of storage keys that is in use by Pichai UX.',

          accessCode: "pichaiUX.pichaiStorageKeys", //what the user can type to access the variable; e.g. event.detail.keyCode
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

export { responsiveness };