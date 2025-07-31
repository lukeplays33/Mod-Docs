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
                description: 'Pichai UX is the design language for you, if you want to use a design that is created by you, Interactive, fun and versatille.<br> Pichai UX follows the four core principles of dreamForge their design language: personalizable, interactive, playfull and easy to use. \n Want to learn more about Pichai UX? Read on!',
                outputValueOptions: ['Alot of cuteness UwU'], // none for events, tells what kind of value is outputted
                type: 'Introduction', // boolean,int, string, function, class etc or event if it's a event or property for property of elements etc
                displayFile: 'pichaiUx.generateDyanmicIcon(img, radius);', // the file that is displayed all together with the info, it can be an image, video, a code file or a I demo that let's user see what happens when a variable it's value is changed for example.
                codeFormat: 'javascript', // set to img to display a image
            },

            variables: { //the input or outputs it can have, the types they return or accept such as a string or number
                backgroundImage: {
                    description: "The URL or path for a background image. 'none' indicates no image is used.",
                },
                contrast: {
                    description: "A numerical value representing the contrast level of an element. 1 is the default.",
                },
                wallpaperBlur: {
                    description: "The blur level applied to the wallpaper, specified in pixels (e.g., '0px').",
                },
                inversion: {
                    description: "The inversion level of an element. 0 means no inversion.",
                },
                wallpaperBrightness: {
                    description: "The brightness level of the wallpaper, where 1 is the default.",
                },
                hueRotation: {
                    description: "The hue rotation applied to an element, specified in degrees (e.g., '0deg').",
                },
                wallpaperInversion: {
                    description: "The inversion level of the wallpaper. 0 means no inversion.",
                },
                wallpaperSize: {
                    description: "Controls how the background image is sized. 'cover' scales the image to cover the entire container.",
                },
                wallpaperPosition: {
                    description: "The position of the wallpaper within its container. 'center' centers the image.",
                },
                wallpaperRepeat: {
                    description: "Determines if and how the wallpaper image is repeated. 'no-repeat' means the image is displayed once.",
                },
                elementBlur: {
                    description: "The blur level applied to a general element, specified in pixels (e.g., '0px').",
                },
                primary: {
                    description: "The primary color, specified as an RGBA value.",
                },
                secondairy: {
                    description: "The secondary color, specified as an RGBA value.",
                },
                tertiary: {
                    description: "The tertiary color, specified as an RGBA value.",
                },
                primaryTextColor: {
                    description: "The text color for primary elements, which is 'white' in this case.",
                },
                secondairyTextColor: {
                    description: "The text color for secondary elements, which is 'white' in this case.",
                },
                tertiaryTextColor: {
                    description: "The text color for tertiary elements, which is 'white' in this case.",
                },
                backgroundColor: {
                    description: "The background color of a main container, specified as an RGBA value.",
                },
                primaryContainer: {
                    description: "The background color for a primary container, specified as an HSLA value.",
                },
                secondairyContainer: {
                    description: "The background color for a secondary container, specified as an HSLA value.",
                },
                tertiaryContainer: {
                    description: "The background color for a tertiary container, specified as an HSLA value.",
                },
                primaryContainerTextColor: {
                    description: "The text color for a primary container, which is 'black'.",
                },
                secondairyContainerTextColor: {
                    description: "The text color for a secondary container, which is 'black'.",
                },
                tertiaryContainerTextColor: {
                    description: "The text color for a tertiary container, which is 'white'.",
                },
                error: {
                    description: "The color used to represent an error, specified as an HSLA value.",
                },
                warning: {
                    description: "The color used to represent a warning, specified as an HSLA value.",
                },
                note: {
                    description: "The color used to represent a note or informational message, specified as an HSLA value.",
                },
                check: {
                    description: "The color used to represent a successful check, specified as an HSLA value.",
                },
                errorTextColor: {
                    description: "The text color for error messages, which is 'white'.",
                },
                warningTextColor: {
                    description: "The text color for warning messages, which is 'black'.",
                },
                noteTextColor: {
                    description: "The text color for notes, which is 'white'.",
                },
                checkTextColor: {
                    description: "The text color for successful checks, which is 'black'.",
                },
                errorContainer: {
                    description: "The background color for an error container, specified as an HSLA value.",
                },
                warningContainer: {
                    description: "The background color for a warning container, specified as an HSLA value.",
                },
                noteContainer: {
                    description: "The background color for a note container, specified as an HSLA value.",
                },
                checkContainer: {
                    description: "The background color for a check container, specified as an HSLA value.",
                },
                errorContainerTextColor: {
                    description: "The text color for an error container, which is 'black'.",
                },
                warningContainerTextColor: {
                    description: "The text color for a warning container, which is 'black'.",
                },
                noteContainerTextColor: {
                    description: "The text color for a note container, which is 'black'.",
                },
                checkContainerTextColor: {
                    description: "The text color for a check container, which is 'black'.",
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