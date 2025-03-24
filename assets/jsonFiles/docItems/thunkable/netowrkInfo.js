let netowrkInfo = {
  about: {

    installation: {
      link: 'https://x.thunkable.com/module/679a09f836673652a8a3393f/',
      guide: 'https://docs.thunkable.com/app-design/ui-components/modules#import-a-module'
    },

    moduleInformation: {
      Description: 'The networkInfo module allows you to gather information about the users network.',
      UseCases: ['Gather network info.'],
      Platforms: ['Android (partially)', 'ChromeOS', 'Web'],
      Required: ['A network connection'],
      Languages: ['Javascript', 'Thunkable Blockly'],
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
      "Remix sample Project": "https://x.thunkable.com/projectPage/675034b7267bc8dd4bc33f6c",
    },

    repo: {
      repoName: 'Thunkable Modules',
      link: 'https://github.com/lukeplays33/Thunkable-Modules',
      openSource: 'Open source',
      developerDocs: '',
      developer: 'dreamForge',
      version: '0.0.1',
      status: "Alive", // deperecated/ no-longer maintained or alive or custom
    },

    licensing: {
      license: 'Apache 2.0',
      licenseLink: 'https://httpd.apache.org/docs/2.4/license.html'
    },

    compatabilityChart: { // allows the developer to introduce a more advanced compatability chart
      platforms: ['Android', 'ChromeOS', 'Ios', 'Chrome', 'Edge', 'Opera', 'Safari', 'Firefox'],
      connectionChanged: ['Android 4.4+', 'ChromeOS 4.4+', 'X', 'Chrome 4.4+', 'Edge 4.4+', 'Opera 4.4+', 'X', 'X'],
      networkInformationChanged: ['Android 4.4+', 'ChromeOS 4.4+', 'X', 'Chrome 4.4+', 'Edge 4.4+', 'Opera 4.4+', 'X', 'X'],
      latencyChanged: ['Android 4.4+', 'ChromeOS 4.4+', 'X', 'Chrome 4.4+', 'Edge 4.4+', 'Opera 4.4+', 'X', 'X'],
      getNetworkInfo: ['Android 4.4+', 'ChromeOS 4.4+', 'X', 'Chrome 4.4+', 'Edge 4.4+', 'Opera 4.4+', 'X', 'X'],
      getRandomizedmDNS: ['Android 4.4+', 'ChromeOS 4.4+', 'X', 'Chrome 4.4+', 'Edge 4.4+', 'Opera 4.4+', 'X', 'X'],
      getListeningPort: ['Android 4.4+', 'ChromeOS 4.4+', 'X', 'Chrome 4.4+', 'Edge 4.4+', 'Opera 4.4+', 'X', 'X'],
      getProtocol: ['Android 4.4+', 'ChromeOS 4.4+', 'X', 'Chrome 4.4+', 'Edge 4.4+', 'Opera 4.4+', 'X', 'X'],
      getNetworkType: ['Android 4.4+', 'ChromeOS 4.4+', 'X', 'Chrome 4.4+', 'Edge 4.4+', 'Opera 4.4+', 'X', 'X'],
      getDownlinkSpeed: ['Android 4.4+', 'ChromeOS 4.4+', 'X', 'Chrome 4.4+', 'Edge 4.4+', 'Opera 4.4+', 'X', 'X'],
      getRoundTripTime: ['Android 4.4+', 'ChromeOS 4.4+', 'X', 'Chrome 4.4+', 'Edge 4.4+', 'Opera 4.4+', 'X', 'X'],
      getNetworkType: ['Android 4.4+', 'ChromeOS 4.4+', 'X', 'Chrome 4.4+', 'Edge 4.4+', 'Opera 4.4+', 'X', 'X'],
      getNetworkQuality: ['Android 4.4+', 'ChromeOS 4.4+', 'X', 'Chrome 4.4+', 'Edge 4.4+', 'Opera 4.4+', 'X', 'X'],
      getMaxDownlinkSpeed: ['Android 4.4+', 'ChromeOS 4.4+', 'X', 'Chrome 4.4+', 'Edge 4.4+', 'Opera 4.4+', 'X', 'X'],
      getNetworkLatency: ['Android 4.4+', 'ChromeOS 4.4+', 'X', 'Chrome 4.4+', 'Edge 4.4+', 'Opera 4.4+', 'X', 'X'],
      getNetworkJitter: ['Android 4.4+', 'ChromeOS 4.4+', 'X', 'Chrome 4.4+', 'Edge 4.4+', 'Opera 4.4+', 'X', 'X'],
      getNetworkPacketloss: ['Android 4.4+', 'ChromeOS 4.4+', 'X', 'Chrome 4.4+', 'Edge 4.4+', 'Opera 4.4+', 'X', 'X'],
      startLatencyCheck: ['Android 4.4+', 'ChromeOS 4.4+', 'X', 'Chrome 4.4+', 'Edge 4.4+', 'Opera 4.4+', 'X', 'X'],
      stopLatencyCheck: ['Android 4.4+', 'ChromeOS 4.4+', 'X', 'Chrome 4.4+', 'Edge 4.4+', 'Opera 4.4+', 'X', 'X'],
      latencyTestURL: ['Android 4.4+', 'ChromeOS 4.4+', 'X', 'Chrome 4.4+', 'Edge 4.4+', 'Opera 4.4+', 'X', 'X'],
      latencyCheckInterval: ['Android 4.4+', 'ChromeOS 4.4+', 'X', 'Chrome 4.4+', 'Edge 4.4+', 'Opera 4.4+', 'X', 'X'],
    }

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
      description: 'The networkInformationChanged event fires when a change in information about the network has been detected.',
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

    latencyChanged: {
      description: 'The latencyChanged event fires when a latency test has completed and latency, jitter and packetloss values hava been calculated.',
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
      displayFile: 'https://i.ibb.co/SX7jNv5S/Screenshot-2025-01-31-112657.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
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

    getMaxDownlinkSpeed: {
      description: 'The getMaxDownlinkSpeed returns the max speed of wich files or messages arrive on your device in Mbps.',
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
      displayFile: 'https://i.ibb.co/C5yvmssd/Screenshot-2025-01-31-092011.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getNetworkLatency: {
      description: 'The getNetworkLatency function returns the time it takes from data to pass from one point on a network to another in ms.',
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
      displayFile: 'https://i.ibb.co/6JrhFJgR/Screenshot-2025-01-31-092254.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getNetworkJitter: {
      description: 'The getNetworkJitter function returns the variation in time delay between when a signal is transmitted and when its received over a network connection, measuring the variability in ping and returned in ms.',
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
      displayFile: 'https://i.ibb.co/TqDLtgmN/Screenshot-2025-01-31-103607.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getNetworkPacketloss: {
      description: 'The getNetworkPacketloss function returns the how much pieces of data got lost when traveling through the network in percentage.',
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
      displayFile: 'https://i.ibb.co/Kcr8HCgV/Screenshot-2025-01-31-104150.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    startLatencyCheck: {
      description: 'The startLatencyCheck function starts checking the network its latency, jitter and packetloss every x amount of seconds.',
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
      displayFile: 'https://i.ibb.co/WJjk0fZ/Screenshot-2025-01-31-113046.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    stopLatencyCheck: {
      description: 'The stopLatencyCheck function stops any current running latency checks.',
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
      displayFile: 'https://i.ibb.co/KjmrnxJQ/Screenshot-2025-01-31-113154.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    latencyTestURL: {
      description: 'The latencyTestURL property is the API URL that should be used to detect the network its latency, jitter and packetloss. <br> Each site may have a different latency, jitter and packetloss or has a server that is further away so custom urls may provide more accuracy.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
        input: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['string'],
          inputTypes: ['string'],  // cannot have any value when in events since they cant accept input values

          description: '',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['string'],
      type: 'Property', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/t7FZSqK/Screenshot-2025-01-31-094558.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    latencyCheckInterval: {
      description: 'The latencyCheckInterval property specifies how much time in seconds is between each latency check used by startLatencyCheck and stopLatencyCheck. <br> Be warned tho, the shorter the time the more request will be made resulting in slower computers, slower networks or even a ban from the server for 10 minutes.<br> If banned you cannot use the module for those 10 minutes.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
        input: {
          readOnly: false, // default for events, cannot be false for events

          defaultValue: '20(recommended)',
          valueOptions: [], // an array of options telling the developer wich choices are accepted by the input

          outputTypes: ['number'],
          inputTypes: ['number'],  // cannot have any value when in events since they cant accept input values

          description: '',

          accessCode: "", //what the user can type to access the variable; e.g. event.detail.keyCode
        },
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['number'],
      type: 'Property', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/mVD1WCtg/Screenshot-2025-01-31-113710.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },
  },
  //quickLinks: [], //e.g. for quickly navigating to a tutorial
}

export { netowrkInfo };