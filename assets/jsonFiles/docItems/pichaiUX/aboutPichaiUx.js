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
      generalInformation: {
        description: 'Pichai UX is the design language for you, if you want to use a design that is created by you, Interactive, fun and versatille.<br> Pichai UX follows the four core principles of dreamForge their design language: personalizable, interactive, playfull and easy to use. \n Want to learn more about Pichai UX? Read on!',
        outputValueOptions: ['Alot of cuteness UwU'], // none for events, tells what kind of value is outputted
        type: 'Introduction', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'pichaiUx.generateDyanmicIcon(img, radius);', // the file that is displayed all together with the info, it can be an image, video, a code file or a I demo that let's user see what happens when a variable it's value is changed for example.
        codeFormat: 'javascript', // set to img to display a image
      },

      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
        Personalizable: {
          descirption: 'In its core Pichai UX has been designed and build to be incredibily customizable and expresive, per user. <br> Users can decide how the site looks for them without companies having to set a design that is set in stone, users can change the font, colors, wallpapers, shapes, icons and many more allowing them to express themselves!',
        },
        Interactive: {
          description: 'The second principle of Pichai Ux is Interacrtive, with fun animations, interactive elements and interactive designs Pichai UX achieves this.',
        },
        Playfull: {
          description: 'The third principle of Pichai Ux is playfullness, with fun shapes, playfull aniamtions and fun animals or figures incorporated into the design we make the design more playfull.',
        },
        "Easy to use": {
          description: 'The fourth principle of Pichai Ux is easy to use, Pichai UX aims at making designs easy, fun and quick, with tempaltes, extra functions and new elements we hope to increase productivity and speed of making new designs and building websites. <br> Not only that Pichai UX also aims at making the user navigation for its users easy and fast, limiting clicks and getting things done quickly!',
        },
      },

      controls: { // tells the docs page to display controls for displayFile
        hideControls: true, // if true, the controls will not be displayed

        fullscreen: false,
        play: false,
        console: false,
        viewCode: false,
      },

      layoutClass: 'columnDirection', // the layout class that is used to display the item, this class allows you to apply a custom styling to items per page, allowing you to make different designs per page.
    },
  },
}

export { aboutPichaiUX };