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
        changes: "Added text and icon buttons.",
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
        description: 'Specifications buttons.',
        displayFile: `https://lukeplays33.github.io/Mod-Docs-Pichai-UX-Examples/pages/buttons.html`, // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },

      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
        "Types": {
          text: 'A text button is a button that only displays text.',
          icon: 'A icon button is a button that displays a icon and a tooltip instead of text.',
          "text and icon": 'A text and icon button is a button that displays a icon along side its text.',
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
        description: 'Guidelines on how to use buttons throughout your website or app.',
        displayFile: `https://lukeplays33.github.io/Mod-Docs-Pichai-UX-Examples/pages/buttons.html`, // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },

      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
        "Size": {
          content: `
          <ul>
          <li style="text-align:left; margin-left:8px;">Do: A button it's width/height is responsive to it's text content and wraps around it with even spacing.</li>
          <li style="text-align:left; margin-left:8px;">Don't: A button it's width/height is narrower than it's text.</li>
          </ul>
          `
        },

        "Text": {
          content: `
          <ul>
          <li style="text-align:left; margin-left:8px;">Do: A button it's text should use simple and short words to describe the button it's action or theme.</li>
          <li style="text-align:left; margin-left:8px;">Don't: A button it's text shouldn't be long, hard to read and going too much into detail.</li>
          </ul>
          `
        },

        "Icon": {
          content: `
          <ul>
          <li style="text-align:left; margin-left:8px;">Do: A button it's icon matches the text or functionality the button has.</li>
          <li style="text-align:left; margin-left:8px;">Don't: A button has more than one icon.</li>
          </ul>
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

export { buttons };