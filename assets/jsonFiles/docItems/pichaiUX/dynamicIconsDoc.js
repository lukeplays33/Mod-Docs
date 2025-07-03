let dynamicIcons = {
  about: {

    installation: {
      link: '',
      guide: ''
    },
    description: 'Dynamic icons are icons that dynamically change altogether with the theme of your Pichai-UX project.',
    useCases: ['Make your icons fit inside of your projects theme.'],

    notes: { // allows the developer or ai to supply additional notes such as bugs

      'DynamicIcons are in Beta': {
        description: "The Dynamic Icons future is a highly experimental future and may not work properly.",
        type: 'Beta',
        status: 'Beta Development',
        for: 'DynamicIcon' // if tied to a specific function or importqant for that one, leave empty to be global.
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
    generateDynamicIcon: {
      generalInformation: {
        description: 'Generates a themed icon based on your projects theme..',
        outputValueOptions: ['Base64'], // none for events, tells what kind of value is outputted
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'pichaiUx.generateDyanmicIcon(img, radius);', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
        codeFormat: 'javascript', // set to img to display a image
      },

      variables: { //the input or outputs it can have, the types they return or accept such as a string or number

        image: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: ['Base 64'], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['Base 64'],
          inputTypes: [],  // cannot have any value when in events since they cant accept input values

          description: 'The image file needing to be dynamically themed..',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        radius: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '360',
          valueOptions: ['number'], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: [],
          inputTypes: [],

          description: 'The radius attribute tells pichai-ux in what kind of shape the icon should be generated.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },

        "Things to keep in mind": {
          'Recommended image size': '224px by 224px', // default for events, cannot be false for events


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

export { dynamicIcons };