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
        displayFile: `https://lukeplays33.github.io/Mod-Docs-Pichai-UX-Examples/pages/buttons.html`, // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
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
        description: 'Specifications for the button or fab element/class.',
        displayFile: `https://lukeplays33.github.io/Mod-Docs-Pichai-UX-Examples/pages/buttons.html`, // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },

      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
        "Types": {
          text: 'A text button is a button that only displays text.',
          icon: 'A icon button is a button that displays a icon and a tooltip instead of text.',
          "text and icon": 'A text and icon button is a button that displays a icon along side its text.',
        },

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

    "Markup Guidelines": {
      generalInformation: {
        description: 'Guidelines on how to use buttons or floating action buttons in your HTML code.',
        displayFile: `https://lukeplays33.github.io/Mod-Docs-Pichai-UX-Examples/pages/buttons.html`, // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },

      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
        "Placements": {
          content: `
          <div styling="width: calc(100% - 16px)" >
          <h2>Buttons</h2>
          <h2>Floating Action Buttons</h2>
          </div>`
        },

        "Styling": {
          width: 'A button its width shouldnt be narrower than the buttons text and should keep a minimum of 8px free on both sides.',
          textAlign: 'A button its text should always be centered to keep a visual and responsive design.',
        },

        "Text and Icons": {
          text: 'A button its text should always describe what the button it action does in a short and easy to understand way.',
          icon: 'A button its icon should always match the text and action that the button has.',
        },

        "Accessibility": {
          tooltips: 'Display a tooltip when a button only displays a icon, this ensures that users can still understand what a button does even when they dont understand the meaning of the icon.',
        },
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },
    },

    "Styling Guidelines": {
      generalInformation: {
        description: 'Guidelines on how to use and style a button or fab.',
        displayFile: `https://lukeplays33.github.io/Mod-Docs-Pichai-UX-Examples/pages/buttons.html`, // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },

      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
        "Amounts": {
          buttons: 'Avoid using too many buttons, buttons are often used to indicate a important action and using too many can lead to confusion or ruin visual heirachy.',
          fabs: 'Only place a maximum of two fabs above each other, preferrably the biggest should be on the bottom to keep a visual hierachy.',
        },

        "Styling": {
          width: 'A button its width shouldnt be narrower than the buttons text and should keep a minimum of 8px free on both sides.',
          textAlign: 'A button its text should always be centered to keep a visual and responsive design.',
        },

        "Text and Icons": {
          text: 'A button its text should always describe what the button it action does in a short and easy to understand way.',
          icon: 'A button its icon should always match the text and action that the button has.',
        },

        "Accessibility": {
          tooltips: 'Display a tooltip when a button only displays a icon, this ensures that users can still understand what a button does even when they dont understand the meaning of the icon.',
        },
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },
    },

    "Accessibility Guidelines": {
      generalInformation: {
        description: 'Guidelines on how to use and style a button or fab.',
        displayFile: `https://lukeplays33.github.io/Mod-Docs-Pichai-UX-Examples/pages/buttons.html`, // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },

      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
        "Amounts": {
          buttons: 'Avoid using too many buttons, buttons are often used to indicate a important action and using too many can lead to confusion or ruin visual heirachy.',
          fabs: 'Only place a maximum of two fabs above each other, preferrably the biggest should be on the bottom to keep a visual hierachy.',
        },

        "Styling": {
          width: 'A button its width shouldnt be narrower than the buttons text and should keep a minimum of 8px free on both sides.',
          textAlign: 'A button its text should always be centered to keep a visual and responsive design.',
        },

        "Text and Icons": {
          text: 'A button its text should always describe what the button it action does in a short and easy to understand way.',
          icon: 'A button its icon should always match the text and action that the button has.',
        },

        "Accessibility": {
          tooltips: 'Display a tooltip when a button only displays a icon, this ensures that users can still understand what a button does even when they dont understand the meaning of the icon.',
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