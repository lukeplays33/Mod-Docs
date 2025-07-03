let aboutPichaiUX = {
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
    Introduction: {
      description: '<p>test</p>',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: [], // none for events, tells what kind of value is outputted
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'pichaiUx.generateDyanmicIcon(img, radius);', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      codeFormat: 'javascript', // set to img to display a image
    },
  },
}

export { aboutPichaiUX };