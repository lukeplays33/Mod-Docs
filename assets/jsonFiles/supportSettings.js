let settings = {
    server: { // a server where announcements are placed or support can be found
        "inviteURL": 'https://discord.gg/2tJvuH73Kq',
        "serverID": '1037411700632195143',
        'channelID': '1037419802215583905',
    },
    
    faq: true,
    troubleShooting: true,
    privacyPolicy: 'https://dreamforge-forging-our-dreams-in-tech.github.io/The-Magic-Garden/pages/privacyPolicy.html',

    about: { // about the project 
        url: 'https://dreamforge-forging-our-dreams-in-tech.github.io/The-Magic-Garden/pages/about/moddocs.html',
        message: 'What is Mod Docs?'
    },
    donations: { // daonations or subscription links
        url: 'https://buymeacoffee.com/sketchdonate',
        message: 'Donate to Mod Docs!',

        globalMessage: { // allows the developer to set global support messages thatll appear above the download link.
            enabled: true,
            message: "Hey there, Thank you so much for taking a look at my projects I hope you like them! <br> If you like what I'm doing you can donate something to me to help keep me motivated and keep the projects going! - dreamForge",
        }
    },
    blog: { // quick links for blog posts that can be either normal or for support (support guides, preverbally support blog posts)
        url: 'https://dreamforge-forging-our-dreams-in-tech.github.io/The-Magic-Garden/pages/blog.html',
        message: 'Blog'
    }
}

export { settings }