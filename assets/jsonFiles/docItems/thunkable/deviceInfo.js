let deviceInfo = {
  about: {

    installation: {
      link: 'https://x.thunkable.com/module/67790cf89ebf3d690c7d363f/',
      guide: 'https://docs.thunkable.com/app-design/ui-components/modules#import-a-module'
    },

    moduleInformation: {
      description: 'The devicInfo module allows you to gather information about the users device.',
      useCases: ['Gather device info.'],
      platforms: ['Android (partially)', 'ChromeOS', 'Web'],
      required: ['A device to use this Thunkable module with 🤯'],
      languages: ['Javascript', 'Thunkable Blockly'],
    },

    notes: { // allows the developer or ai to supply additional notes such as bugs
      'inaccurate info': {
        description: "Some properties may return inaccurate information this is because some browsers have different implementations, safety reasons or compatability requirements. <br> But this can also be because there are workarounds uses for example checking the 12 hour clock is based of the users device timezone and not if it prefers the 12 hour clock.",
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
    gotDeviceInfo: {
      description: 'The gotDeviceInfo event fires when information about the device has been succesfully gathered.',
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
      displayFile: 'https://i.ibb.co/099hStx/Screenshot-2025-01-15-083848.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getDeviceInfo: {
      description: 'The getDeviceInfo() function gathers all available info about the device wich you can then access using the get blocks.',
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
      displayFile: 'https://i.ibb.co/DptB2B9/Screenshot-2025-01-15-083801.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getDeviceLanguage: {
      description: 'The getDeviceLanguage function allows you to see the main language the user has set for its device',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['string'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/099hStx/Screenshot-2025-01-15-083848.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getBrowserVersion: {
      description: 'The getBrowserVersion function allows you to see information about the browser, if you run your app as a mobile device it will return info about the device its webviewer services.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['number'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/D4WGVGx/Screenshot-2025-01-15-083945.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    "cookiesEnabled?": {
      description: 'The cookiesEnabled? function allows you to see if the browser has cookies enabled.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['boolean'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/QJZKDRf/Screenshot-2025-01-15-084022.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getDeviceCoreOS: {
      description: 'The getDeviceCoreOS function allows you to see what the core OS of the device is (e.g. linux for android because android is build ontop of linux.)',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['string'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/RHhK12y/Screenshot-2025-01-15-084735.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getUserAgent: {
      description: 'The getUserAgent function returns a string with browser info.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['string'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/1sSJ8Zp/Screenshot-2025-01-15-085836.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getLogicalProssecorCores: {
      description: 'The getLogicalProssecorCores function returns the amount of proccesor cores the device has.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['number'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/2jZN2NN/Screenshot-2025-01-15-085910.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getDeviceMemory: {
      description: 'The getDeviceMemory function allows you to see how much working memory the device has.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['number'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/ysnrJZ3/Screenshot-2025-01-15-090029.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    getDeviceLanguages: {
      description: 'The getDeviceLanguages function returns a array of all installed languages on the device.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['array'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/4pWpQwV/Screenshot-2025-01-15-090211.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    "isMobile?": {
      description: 'The isMobile? function checks if the device is a mobile device or desktop device. \nNote: some browsers may see tablets as desktop devices.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['boolean'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/ssbVghB/Screenshot-2025-01-15-090415.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    "getBrands": {
      description: 'The getBrands function returns a JSOn object with brand information of the browser or webviewer service.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['JSON'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/d4JWk2X/Screenshot-2025-01-15-090523.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    "getFullDeviceInfoJSON": {
      description: 'The getFullDeviceInfoJSON function returns a JSOn object generated by the getDeviceInfo() function.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['JSON'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/s2NzZpv/Screenshot-2025-01-15-090610.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    "getScreenColorDepth": {
      description: 'The getScreenColorDepth function returns the color depth of the screen the website is in open.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['number'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/2Y9K7Xc/Screenshot-2025-01-15-090738.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    "getScreenPixelDepth": {
      description: 'The getScreenPixelDepth function returns the pixel depth of the screen the website is in open.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['number'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/HPKxG90/Screenshot-2025-01-15-090927.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    "getBrowserName": {
      description: 'The getBrowserName function returns the name of the current browser the page is run in.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['string'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/rcfWTN6/Screenshot-2025-01-15-091028.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    "getDeviceArchitecture": {
      description: 'The getDeviceArchitecture function returns the architecture of the device, however if its android it will return null.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['string'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/gRrfCwb/Screenshot-2025-01-15-091205.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    "getOSVersion": {
      description: 'The getOSVersion function returns the version of the OS.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['number'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/XyXCWQX/Screenshot-2025-01-15-091331.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    "getArchitectureBits": {
      description: 'The getArchitectureBits function returns the bits of the architecture.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['number'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/fXRD3c6/Screenshot-2025-01-15-091508.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    "getDeviceModel": {
      description: 'The getDeviceModel function returns the name of the mobile device its model.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['string'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/yfQFBzd/Screenshot-2025-01-15-091555.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    "getMaxTouchPoints": {
      description: 'The getMaxTouchPoints function returns the maximum amount of simultaneous touch points the browser supports.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['number'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/ZKcZRv8/Screenshot-2025-01-19-115013.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    "isTablet?": {
      description: 'The isTablet? function allows you to see if the device is a tablet or not. <br>Note: some browsers may see tablets as desktop devices and thus say false when it is a tablet.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['boolean'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/p2H0nLW/Screenshot-2025-01-20-190407.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    "getDeviceOS": {
      description: 'The getDeviceOS function returns the actual name of the OS your device is running on. <br>This is not to be confused with the getDeviceCoreOS function wich returns the name on wich the OS is build/based on.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['string'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/h2wwMHW/Screenshot-2025-01-20-190702.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    "getCountryCode": {
      description: 'The getCountryCode function returns the country code of the device this is based on the system language the user or manufacturer has set.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['string'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/PDTh0Xy/Screenshot-2025-01-21-143605.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    }, 

    "getCountryName": {
      description: 'The getCountryName function returns the country name of the device this is based on the system language the user or manufacturer has set.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['string'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/6FDJNbF/Screenshot-2025-01-21-145213.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    "uses12HourClock?": {
      description: 'The uses12HourClock? function returns true if the device uses the 12 hour clock rather than 24 hour clock(military time).',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['string'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/sb8mGTh/Screenshot-2025-01-21-155012.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },

    "usesMetricSystem?": {
      description: 'The usesMetricSystem? checks wheter the user is most likely to use the metric system or not. <br>It does this based on your languagee settings.',
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      outputValueOptions: ['boolean'], // none for events
      type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
      displayFile: 'https://i.ibb.co/6WPvN2g/Screenshot-2025-01-22-104614.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
    },
  },
  //quickLinks: [], //e.g. for quickly navigating to a tutorial
}

export { deviceInfo }; 