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
        description: 'When desinging a website Pichai UX does not build based on what the screen size is of the device but rather its orientation. <br> Weve noticed that most of the time it s not needed to design specifically for every device, since theyre almost always rectengular and not squared or rounded(watches excluded) and since Pichai UX automatically sizes its elements to fit the screen, all you need to do is to keep an eye on the orientation (if not handled by Pichai UX itself).',
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
          <img src='https://i.ibb.co/Q7KgBWDG/lukeplays33-github-io-Mod-Docs-page-Pichai-UX-Responsiveness-1.png'>

                    <ul>
          <li style="text-align:left; margin-left:8px;">A drawer is open by default if the device is in landscape mode</li>
          </ul>
          </div>

          <div class='exampleFrame correct'>
          <img src='https://i.ibb.co/hFNrxqXy/lukeplays33-github-io-Mod-Docs-page-Pichai-UX-Responsiveness.png'>

                    <ul>
          <li style="text-align:left; margin-left:8px;">A drawer is closed by default in portrait mode</li>
          </ul>
          </div>

          <p> In the above examples you see how a drawer reacts to various screen orientations
          `
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