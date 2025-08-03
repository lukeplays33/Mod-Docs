let cssVars = {
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
        Variables: {
            generalInformation: {
                description: 'Here all variables that Pichai UX generates are described, you can use these in your own css files as well.',
                displayFile: 'pichaiUx.generateDyanmicIcon(img, radius);', // the file that is displayed all together with the info, it can be an image, video, a code file or a I demo that let's user see what happens when a variable it's value is changed for example.
                codeFormat: 'javascript', // set to img to display a image
            },

            variables: { //the input or outputs it can have, the types they return or accept such as a string or number
                contrast: {
                    description: "A numerical value representing the contrast level of an element.",
                    defaultValue: '1',
                },
                wallpaperBlur: {
                    description: "The blur level applied to the wallpaper, specified in pixels (e.g., '0px').",
                    defaultValue: '0',
                },
                inversion: {
                    description: "The inversion level of an element. 0 means no inversion.",
                    defaultValue: '0',
                },
                wallpaperBrightness: {
                    description: "The brightness level of the wallpaper, where 1 is the default.",
                    defaultValue: '0.9',
                },
                hueRotation: {
                    description: "The hue rotation applied to an element, specified in degrees (e.g., '0deg').",
                    defaultValue: '0deg',
                },
                wallpaperInversion: {
                    description: "The inversion level of the wallpaper. 0 means no inversion.",
                    defaultValue: '0',
                },
                wallpaperSize: {
                    description: "Controls how the background image is sized. 'cover' scales the image to cover the entire container.",
                    defaultValue: 'cover',
                },
                wallpaperPosition: {
                    description: "The position of the wallpaper within its container. 'center' centers the image.",
                    defaultValue: 'center',
                },
                wallpaperRepeat: {
                    description: "Determines if and how the wallpaper image is repeated. 'no-repeat' means the image is displayed once.",
                    defaultValue: 'no-repeat',
                },
                elementBlur: {
                    description: "The blur level applied to a general element, specified in pixels (e.g., '0px').",
                    defaultValue: '15px',
                },
                primary: {
                    description: "The primary color, specified as an RGBA value.",
                    readOnly: true,
                },
                secondairy: {
                    description: "The secondary color, specified as an RGBA value.",
                    readOnly: true,
                },
                tertiary: {
                    description: "The tertiary color, specified as an RGBA value.",
                    readOnly: true,
                },
                primaryTextColor: {
                    description: "The text color for primary elements.",
                    readOnly: true,
                },
                secondairyTextColor: {
                    description: "The text color for secondary elements.",
                    readOnly: true,
                },
                tertiaryTextColor: {
                    description: "The text color for tertiary elements.",
                    readOnly: true,
                },
                backgroundColor: {
                    description: "The background color of a main container, specified as an RGBA value.",
                    readOnly: true,
                },
                primaryContainer: {
                    description: "The background color for a primary container, specified as an HSLA value.",
                    readOnly: true,
                },
                secondairyContainer: {
                    description: "The background color for a secondary container, specified as an HSLA value.",
                    readOnly: true,
                },
                tertiaryContainer: {
                    description: "The background color for a tertiary container, specified as an HSLA value.",
                    readOnly: true,
                },
                primaryContainerTextColor: {
                    description: "The text color for a primary container.",
                    readOnly: true,
                },
                secondairyContainerTextColor: {
                    description: "The text color for a secondary container.",
                    readOnly: true,
                },
                tertiaryContainerTextColor: {
                    description: "The text color for a tertiary container.",
                    readOnly: true,
                },
                error: {
                    description: "The color used to represent an error, specified as an HSLA value.",
                    readOnly: true,
                },
                warning: {
                    description: "The color used to represent a warning, specified as an HSLA value.",
                    readOnly: true,
                },
                note: {
                    description: "The color used to represent a note or informational message, specified as an HSLA value.",
                    readOnly: true,
                },
                check: {
                    description: "The color used to represent a successful check, specified as an HSLA value.",
                    readOnly: true,
                },
                errorTextColor: {
                    description: "The text color for error messages.",
                    readOnly: true,
                },
                warningTextColor: {
                    description: "The text color for warning messages.",
                    readOnly: true,
                },
                noteTextColor: {
                    description: "The text color for notes.",
                    readOnly: true,
                },
                checkTextColor: {
                    description: "The text color for successful checks.",
                    readOnly: true,
                },
                errorContainer: {
                    description: "The background color for an error container, specified as an HSLA value.",
                    readOnly: true,
                },
                warningContainer: {
                    description: "The background color for a warning container, specified as an HSLA value.",
                    readOnly: true,
                },
                noteContainer: {
                    description: "The background color for a note container, specified as an HSLA value.",
                    readOnly: true,
                },
                checkContainer: {
                    description: "The background color for a check container, specified as an HSLA value.",
                    readOnly: true,
                },
                errorContainerTextColor: {
                    description: "The text color for an error container.",
                    readOnly: true,
                },
                warningContainerTextColor: {
                    description: "The text color for a warning container.",
                    readOnly: true,
                },
                noteContainerTextColor: {
                    description: "The text color for a note container.",
                    readOnly: true,
                },
                checkContainerTextColor: {
                    description: "The text color for a check container.",
                    readOnly: true,
                },
            },

            controls: { // tells the docs page to display controls for displayFile
                hideControls: true, // if true, the controls will not be displayed

                fullscreen: false,
                play: false,
                console: false,
                viewCode: false,
            },
        },
    },
}

export { cssVars };