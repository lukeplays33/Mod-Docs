let netowrkInfo = {
  about: {

    installation: {
      link: 'https://x.thunkable.com/module/679a09f836673652a8a3393f/',
      guide: 'https://docs.thunkable.com/app-design/ui-components/modules#import-a-module'
    },

    moduleInformation: {
      Description: 'The batteryInfo module allows you to gather information about the users device its battery.',
      UseCases: ['Gather battery info.'],
      Platforms: ['Android (partially)', 'ChromeOS', 'Web'],
      Required: ['A battery :)'],
      Languages: ['Javascript', 'Thunkable Blockly'],
      Connection: 'Required',
    },

    notes: { // allows the developer or ai to supply additional notes such as bugs
      'inaccurate info': {
        description: "Some properties may return inaccurate information this is because some browsers have different implementations, safety reasons or compatability requirements.",
        type: 'Compatability issue of browser/webviewer services',
        status: '',
        for: '' // if tied to a specific function or importqant for that one, leave empty to be global.
      },
    },

    demoLinks: { // links to examples users can look at
      'Playground': 'https://x.thunkable.com/web-build/index.html?projectId=675034b7267bc8dd4bc33f6c&noframe=1&responsive=1&screenId=undefined',
    },

    repo: {
      repoName: 'Thunkable Modules',
      link: 'https://github.com/lukeplays33/Thunkable-Modules',
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
    connectionChanged: {
      description: 'The connectionChanged event fires when the user disconnects or connects to a network.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
        connectionState: {
          readOnly: true, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['boolean'],
          inputTypes: [],  // cannot have any value when in events since they cant accept input values

          description: 'If the device is connected to a network or not.',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: [],
      type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/fV4Kjsp8/Screenshot-2025-01-29-200112.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    networkInformationChanged: {
      description: 'The networkInformationChanged event fires when a change in information about the network has changed.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: [],
      type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/qFsgFhCB/Screenshot-2025-01-30-095110.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getNetworkInfo: {
      description: 'The getNetworkInfo function gathers all available information about the network..',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: [],
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/wZMKpVBm/Screenshot-2025-01-29-142252.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getRandomizedmDNS: {
      description: 'The getRandomizedmDNS function returns a random mDNS encrypted ip address this value will always change with each getNetworkInfo call.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['string or large integer number'],
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/C5WHpMvn/Screenshot-2025-01-29-142419.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getListeningPort: {
      description: 'The getListeningPort function returns the listening port of the webRTC api, this port is used to gather various network information.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['number'],
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/hRB1F53b/Screenshot-2025-01-29-142711.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getProtocol: {
      description: 'The getProtocol function returns the network protocol.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['string'],
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/zHRq56Jj/Screenshot-2025-01-29-142743.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getNetworkType: {
      description: 'The getNetworkType function returns the network type.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['string'],
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/5g5TstGD/Screenshot-2025-01-29-144341.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getDownlinkSpeed: {
      description: 'The getDownlinkSpeed function returns the speed of wich files or messages arrive on your device in Mbps.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['number'],
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/r1F5Nxn/Screenshot-2025-01-29-145049.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getRoundTripTime: {
      description: 'The getRoundTripTime function returns the estimated effective round-trip time of the current connection, rounded to the nearest multiple of 25 milliseconds.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['number'],
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/Xf2NJXB3/Screenshot-2025-01-29-145321.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getNetworkType: {
      description: 'The getNetworkType function returns what type of network is used on the device.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['string'],
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/4g7pWYFm/Screenshot-2025-01-29-151844.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getNetworkQuality: {
      description: 'The getNetworkQuality function returns the quality of the network where slow-2g is slowest and 4g is fastest.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['string'],
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/dqWw5qX/Screenshot-2025-01-30-094909.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getEstimatedLoadingTime: {
      description: 'The getEstimatedLoadingTime returns the estimated time itll take to load files <br> THis is done by tracking the loading speed of 1 image, 2 videos and 2 websites.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['number'],
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/jkpbYqhh/Screenshot-2025-01-30-160316.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },
  },
  //quickLinks: [], //e.g. for quickly navigating to a tutorial
}

export { netowrkInfo };