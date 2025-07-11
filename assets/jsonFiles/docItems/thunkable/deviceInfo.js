let deviceInfo = {
  about: {

    installation: {
      link: 'https://x.thunkable.com/module/67790cf89ebf3d690c7d363f/',
      guide: 'https://docs.thunkable.com/app-design/ui-components/modules#import-a-module'
    },

    moduleInformation: {
      Description: 'The devicInfo module allows you to gather information about the users device.',
      UseCases: ['Gather device info.'],
      Platforms: ['Android (partially)', 'ChromeOS', 'Web'],
      Required: ['A device to use this Thunkable module with 🤯'],
      Languages: ['Javascript', 'Thunkable Blockly'],
      Connection: 'Required',
    },

    notes: { // allows the developer or ai to supply additional notes such as bugs
      'inaccurate info': {
        description: "Some properties may return inaccurate information this is because some browsers have different implementations, safety reasons or compatability requirements. <br> But this can also be because there are workarounds used, for example checking the 12 hour clock is based of the users device timezone and not if it prefers the 12 hour clock.",
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

  },
  contents: {
    gotDeviceInfo: {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The gotDeviceInfo event fires when information about the device has been succesfully gathered.',
        outputValueOptions: [],
        type: 'Event', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/099hStx/Screenshot-2025-01-15-083848.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    getDeviceInfo: {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number,
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The getDeviceInfo() function gathers all available info about the device wich you can then access using the get blocks.',
        outputValueOptions: [],
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/DptB2B9/Screenshot-2025-01-15-083801.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    getDeviceLanguage: {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The getDeviceLanguage function allows you to see the main language the user has set for its device',
        outputValueOptions: ['string'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/099hStx/Screenshot-2025-01-15-083848.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    getBrowserVersion: {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The getBrowserVersion function allows you to see information about the browser, if you run your app as a mobile device it will return info about the device its webviewer services.',
        outputValueOptions: ['number'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/D4WGVGx/Screenshot-2025-01-15-083945.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    "cookiesEnabled?": {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The cookiesEnabled? function allows you to see if the browser has cookies enabled.',
        outputValueOptions: ['boolean'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/QJZKDRf/Screenshot-2025-01-15-084022.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    getDeviceCoreOS: {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The getDeviceCoreOS function allows you to see what the core OS of the device is (e.g. linux for android because android is build ontop of linux.)',
        outputValueOptions: ['string'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/RHhK12y/Screenshot-2025-01-15-084735.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    getUserAgent: {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The getUserAgent function returns a string with browser info.',
        outputValueOptions: ['string'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/1sSJ8Zp/Screenshot-2025-01-15-085836.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    getLogicalProssecorCores: {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The getLogicalProssecorCores function returns the amount of proccesor cores the device has.',
        outputValueOptions: ['number'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/2jZN2NN/Screenshot-2025-01-15-085910.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    getDeviceMemory: {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The getDeviceMemory function allows you to see how much working memory the device has.',
        outputValueOptions: ['number'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/ysnrJZ3/Screenshot-2025-01-15-090029.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    getDeviceLanguages: {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The getDeviceLanguages function returns a array of all installed languages on the device.',
        outputValueOptions: ['array'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/4pWpQwV/Screenshot-2025-01-15-090211.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    "isMobile?": {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The isMobile? function checks if the device is a mobile device or desktop device. \nNote: some browsers may see tablets as desktop devices.',
        outputValueOptions: ['boolean'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/ssbVghB/Screenshot-2025-01-15-090415.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    "getBrands": {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The getBrands function returns a JSOn object with brand information of the browser or webviewer service.',
        outputValueOptions: ['JSON'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/d4JWk2X/Screenshot-2025-01-15-090523.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    "getFullDeviceInfoJSON": {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The getFullDeviceInfoJSON function returns a JSOn object generated by the getDeviceInfo() function.',
        outputValueOptions: ['JSON'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/s2NzZpv/Screenshot-2025-01-15-090610.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    "getScreenColorDepth": {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The getScreenColorDepth function returns the color depth of the screen the website is in open.',
        outputValueOptions: ['number'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/2Y9K7Xc/Screenshot-2025-01-15-090738.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    "getScreenPixelDepth": {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The getScreenPixelDepth function returns the pixel depth of the screen the website is in open.',
        outputValueOptions: ['number'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/HPKxG90/Screenshot-2025-01-15-090927.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    "getBrowserName": {

      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The getBrowserName function returns the name of the current browser the page is run in.',
        outputValueOptions: ['string'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/rcfWTN6/Screenshot-2025-01-15-091028.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    "getDeviceArchitecture": {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The getDeviceArchitecture function returns the architecture of the device, however if its android it will return null.',
        outputValueOptions: ['string'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/gRrfCwb/Screenshot-2025-01-15-091205.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    "getOSVersion": {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The getOSVersion function returns the version of the OS.',
        outputValueOptions: ['number'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/XyXCWQX/Screenshot-2025-01-15-091331.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    "getArchitectureBits": {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The getArchitectureBits function returns the bits of the architecture.',
        outputValueOptions: ['number'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/fXRD3c6/Screenshot-2025-01-15-091508.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    "getDeviceModel": {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The getDeviceModel function returns the name of the mobile device its model.',
        outputValueOptions: ['string'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/yfQFBzd/Screenshot-2025-01-15-091555.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    "getMaxTouchPoints": {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The getMaxTouchPoints function returns the maximum amount of simultaneous touch points the browser supports.',
        outputValueOptions: ['number'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/ZKcZRv8/Screenshot-2025-01-19-115013.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    "isTablet?": {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The isTablet? function allows you to see if the device is a tablet or not. <br>Note: some browsers may see tablets as desktop devices and thus say false when it is a tablet.',
        outputValueOptions: ['boolean'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/p2H0nLW/Screenshot-2025-01-20-190407.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    "getDeviceOS": {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The getDeviceOS function returns the actual name of the OS your device is running on. <br>This is not to be confused with the getDeviceCoreOS function wich returns the name on wich the OS is build/based on.',
        outputValueOptions: ['string'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/h2wwMHW/Screenshot-2025-01-20-190702.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    "getCountryCode": {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The getCountryCode function returns the country code of the device this is based on the system language the user or manufacturer has set.',
        outputValueOptions: ['string'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/PDTh0Xy/Screenshot-2025-01-21-143605.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    "getCountryName": {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The getCountryName function returns the country name of the device this is based on the system language the user or manufacturer has set.',
        outputValueOptions: ['string'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/6FDJNbF/Screenshot-2025-01-21-145213.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    "uses12HourClock?": {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The uses12HourClock? function returns true if the device uses the 12 hour clock rather than 24 hour clock(military time).',
        outputValueOptions: ['string'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/sb8mGTh/Screenshot-2025-01-21-155012.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    "usesMetricSystem?": {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The usesMetricSystem? checks wheter the user is most likely to use the metric system or not. <br>It does this based on your languagee settings.',
        outputValueOptions: ['boolean'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/6WPvN2g/Screenshot-2025-01-22-104614.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    "getTemperatureUnit": {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The getTemperatureUnit function returns what temperature unit the user most likely wants to use.',
        outputValueOptions: ['string'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/852S1wT/Screenshot-2025-01-23-092522.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    "getDateFormat": {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The getDateFormat function returns what date format the user most likely wants to use.',
        outputValueOptions: ['string'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/M8W68RD/Screenshot-2025-01-23-093335.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    "getTimezone": {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The getTimezone function returns the timezone of the device.',
        outputValueOptions: ['string'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/S7GjW79/Screenshot-2025-01-24-100016.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    "getScreenResolution": {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The getScreenResolution function returns the resolution of the screen.',
        outputValueOptions: ['string'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/JRF3QzR6/Screenshot-2025-01-29-103249.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    "usesMonoschromeDisplay?": {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The usesMonoschromeDisplay? function returns wheter the display is a monoschrome (black and white) display or not.',
        outputValueOptions: ['string'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/Q31wGGNt/Screenshot-2025-01-29-103707.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    "getScreenColorGamut": {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The getScreenColorGamut function returns the range of colors the screen can produce or record.',
        outputValueOptions: ['string'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/4ZJ7Z18Q/Screenshot-2025-01-29-104032.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    "getPixeRatio": {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The getPixeRatio function returns the pixel ratio of the screen.',
        outputValueOptions: ['number'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/4np3Y1JF/Screenshot-2025-01-29-104627.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    "isTouchScreenDisplay?": {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The isTouchScreenDisplay? function checkd if the display used on the device is a touchscreen display or not.',
        outputValueOptions: ['boolean'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/HfgX5dTS/Screenshot-2025-01-29-104917.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },

    "isScreenRetina?": {
      variables: { //the input or outputs it can have, the types they return or accept such as a string or number
      },

      controls: { // tells the docs page to display controls for displayFile
        fullscreen: true,
        play: false,
        console: false,
        viewCode: false,
      },

      generalInformation: {
        description: 'The isScreenRetina? function checks if the display used on the device is a retina display or not.',
        outputValueOptions: ['boolean'], // none for events
        type: 'Function', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
        displayFile: 'https://i.ibb.co/01M5tqM/Screenshot-2025-01-29-105229.png', // the file that is displayed all together with the info, it can be an image, video, a code file or a interactive demo that let's user see what happens when a variable it's value is changed for example.
      },
    },
  },
  //quickLinks: [], //e.g. for quickly navigating to a tutorial
}

export { deviceInfo }; 