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

          installation: {
            link: 'https://x.thunkable.com/module/66bcb8c35969ac7509eca98f/',
            guide: 'https://docs.thunkable.com/app-design/ui-components/modules#import-a-module'
          },
          description: 'The keyboard events module allows users to capture key presses and releases inside of their Thunkable project.',
          useCases: ['Capture key presses', 'Capture key releases', 'Capture heldDown events'],

          notes: { // allows the developer or ai to supply additional notes such as bugs
            'Bug - Module stays visible after setting visible to false': "This is a Thunkable bug, a temporary workaround is to place the module in a group and then hide or show that group."
          },

          demoLinks: { // links to examples users can look at
          },

          platforms: ['Android', 'Ios', 'ChromeOS', 'Web'],
          required: ['Physical keyboard'],
          languages: ['Javascript', 'Thunkable Blockly'],

          repo: {
            repoName: 'Mod Docs',
            link: 'https://github.com/lukeplays33/Mod-Docs',
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
          keyPress: {
            description: 'The key pressed event fires when a key is pressed and released on the keyboard.',
            variables: { //the input or outputs it can have, the types they return or accept such as a string or number

              keyName: {
                readOnly: true, // default for events, cannot be false for events

                defaultValue: '',
                valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

                returnTypes: ['string'],
                inputTypes: [],  // cannot have any value when in events since they cant accept input values

                description: 'The name of the key that is pressed.',

                accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
              },

              keyCode: {
                readOnly: true, // default for events, cannot be false for events

                defaultValue: '',
                valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

                returnTypes: ['number'],
                inputTypes: [],

                description: 'The code of the key that is pressed.',

                accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
              },

              heldDown: {
                readOnly: true, // default for events, cannot be false for events

                defaultValue: '',
                valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

                returnTypes: ['boolean'],
                inputTypes: [],

                description: 'Returns true if the key is held down for long periods of time.',

                accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
              },
            },
            
            type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
            displayFile: '../assets/images/docs/Event: keyPress.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
          },

          keyDown: {
            description: 'The key down event fires when a key is down on the keyboard.',
            variables: { //the input or outputs it can have, the types they return or accept such as a string or number

              keyName: {
                readOnly: true, // default for events, cannot be false for events

                defaultValue: '',
                valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

                returnTypes: ['string'],
                inputTypes: [],  // cannot have any value when in events since they cant accept input values

                description: 'The name of the key that is pressed.',

                accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
              },

              keyCode: {
                readOnly: true, // default for events, cannot be false for events

                defaultValue: '',
                valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

                returnTypes: ['number'],
                inputTypes: [],

                description: 'The code of the key that is pressed.',

                accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
              },

              heldDown: {
                readOnly: true, // default for events, cannot be false for events

                defaultValue: '',
                valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

                returnTypes: ['boolean'],
                inputTypes: [],

                description: 'Returns true if the key is held down for long periods of time.',

                accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
              },
            },
            
            type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
            displayFile: '../assets/images/docs/Event: keyDown.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
          },

          keyUp: {
            description: 'The key pressed event fires when a key is released on the keyboard.',
            variables: { //the input or outputs it can have, the types they return or accept such as a string or number

              keyName: {
                readOnly: true, // default for events, cannot be false for events

                defaultValue: '',
                valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

                returnTypes: ['string'],
                inputTypes: [],  // cannot have any value when in events since they cant accept input values

                description: 'The name of the key that is pressed.',

                accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
              },

              keyCode: {
                readOnly: true, // default for events, cannot be false for events

                defaultValue: '',
                valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

                returnTypes: ['number'],
                inputTypes: [],

                description: 'The code of the key that is pressed.',

                accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
              },

              heldDown: {
                readOnly: true, // default for events, cannot be false for events

                defaultValue: '',
                valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

                returnTypes: ['boolean'],
                inputTypes: [],

                description: 'Returns true if the key is held down for long periods of time.',

                accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
              },
            },
            
            type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
            displayFile: '../assets/images/docs/Event: keyUp.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
          },
        },
        //quickLinks: [], //e.g. for quickly navigating to a tutorial
      },
      "Screen_Events": {},
      "Theme_Swapper": {},
      "ASD": {},
      "Console": {}
    }
  }
}

export { docsItemsJson }