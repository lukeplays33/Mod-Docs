let buttons = {
  about: {

    installation: {
      link: 'https://dreamforge-forging-our-dreams-in-tech.github.io/Pichai-UX/imports.js',
      guide: 'https://lukeplays33.github.io/Mod-Docs/?page=Pichai_UX+-+Initializing+Pichai+UX'
    },

    moduleInformation: {
      description: 'Buttons are an interactive element that users can click to perform actions such as submitting forms or triggering scripts.',
      useCases: ['Submit forms', 'Trigger scripts', 'Navigate to other pages', 'Open dialogs'],
      platforms: ['Web'],
      required: ['Pichai-UX'],
      languages: ['Javascript, HTML and CSS'],
    },

    licensing: {
      license: 'Apache 2.0',
      licenseLink: 'https://httpd.apache.org/docs/2.4/license.html'
    },

    notes: { // allows the developer or ai to supply additional notes such as bugs
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
    "Overview": {
      generalInformation: {
        description: 'An button is an interactive element that users can click to perform actions such as submitting forms or triggering scripts.',
        added: "0.5",
        upadted: "0.5",
        changes: "Added the Button and fab styling and classes",
        displayFile: `https://i.ibb.co/4gKnfcZT/Screenshot-From-2025-07-04-13-12-31.png`, // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },

      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },
    },

    "Specifications": {
      generalInformation: {
        description: 'In the specifications section you can find the specifications of the button element, such as related classes/forms, states and more. <br> Most specifications are automatically handled by Pichai UX and thus only specifications that you may need to apply manually is documented here.',
        displayFile: `https://i.ibb.co/4gKnfcZT/Screenshot-From-2025-07-04-13-12-31.png`, // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },

      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
        "Related classes": {
          fab: 'The fab class allows you to turn your buttons (or any other element) into a floating action button',
        },

        "Related States": {
          disabled: 'The disabled state allows you to disable the element, preventing users from clicking it, this state displays the element in a 0.7 opacity.',
          enabled: 'The enabled state allows you to enable the element, allowing users to click it, this state displays the element in a 1 opacity.',
        },
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },
    },

    "Guidelines": {
      generalInformation: {
        description: 'An button is an interactive element that users can click to perform actions such as submitting forms or triggering scripts.',
        outputValueOptions: [], // none for events, tells what kind of value is outputted
        type: 'Element', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: `https://i.ibb.co/4gKnfcZT/Screenshot-From-2025-07-04-13-12-31.png`, // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },

      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
        "Amounts": {
          buttons: 'Avoid using too many buttons, buttons are often used to indicate a important action and using too many can lead to confusion or ruin visual heirachy.',
          fabs: 'Only place a maximum of two fabs above each other, preferrably the biggest should be on the bottom to keep a visual hierachy.',
        },

        "Styling": {
          width: 'A button its width shouldnt be narrower than the buttons text and should keep a minimum of 8px free on both sides.',
          textalign: 'A button its text should always be centered to keep a visual and responsive design.',
        },

        "Text and Icons": {
          text: 'A button its text should always describe what the button it action does in a short and easy to understand way.',
          icon: 'A button its icon should always match the text and action that the button has.',
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

export { buttons };