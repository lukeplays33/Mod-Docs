let docsItemsJson = {
  "Pichai_UX": {},
  "Lucy": {},
  "Gryffindor": {},
  "NexOS": {},
  "Stereo": {},
  "Debugger": {},
  "Mod_Docs!": {},
  "Thunkable": {
    description: 'Modules are a way that allows Thunkable users to create more functions for their app. it allows them to develop easier and faster. <br> Below is a list of Modules we have developed for Thunkable.',
    items: {
      "Keyboard_Events": {
        about: {
          installationLink: 'https://x.thunkable.com/module/66bcb8c35969ac7509eca98f/',
          description: 'The keyboard events module allows users to capture key presses and releases inside of their Thunkable project.',

          demoLink: null,
          useCaseDescription: ['The keyboard events module can be used to capture the key down/up and press events of a physical keyboard, fro mthere you can acces the key name/code and if the user is holding the key down.'],
          platforms: ['Android, Ios, ChromeOS'],
          required: ['Physical keyboard'],

          repo: {
            link: 'https://github.com/lukeplays33/Mod-Docs',
            openSource: true,
            developerDocs: '',
            developer: 'DreamForge',

            license: {
              name: 'apache 2.0',
              docs: 'https://httpd.apache.org/docs/2.4/license.html'
            },
          },

        },
        contents: {
          keyPress: {
            description: 'The key pressed event fires when a key is pressed and released on the keyboard.',
            variables: { //the input or outputs it can have
              keyName: 'The name of the key that is pressed.',
              keyCode: 'The code of the key that is pressed.',
              heldDown: 'Returns true if the key is held down for long periods of time.'
            },
            type: 'Event', // boolean,int, string etc or event if it's a event or property for property of elements etc
            code: null,
            image: '../assets/images/docs/Event: keyPress.png',

            usage: {
              do: [],
              dont: []
            }
          },
        },
        quickLinks: [], //e.g. for quickly navigating to a tutorial
      },
      "Screen_Events": {},
      "Theme_Swapper": {},
      "ASD": {},
      "Console": {}
    }
  }
}

export { docsItemsJson }