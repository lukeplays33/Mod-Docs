let faqItems = {
    "Why do we barely use Logic Modules for Thunkable?": "This is because Modules allow us to interact with the screen, most of the time we need access to the screen for the modules to work even if the are not visible.",
    "Why do we have a requestFocus() function in Thunkable?": "To have JavaScript events work such as a key event the user needs to have focused the iframe it is in, this function allows that after the focus was lost the developer can request it back to the iframe to capture events.",
    "I want to use Mod Docs! for my own docs.": "This will be possible in the future but not now, at the moment we want to focus on publicly testing and incorporating user feedback when it comes to user usefullness, basically we are gathering information to what our users need to have in a documentation to be clear to understand, after that we will allow users to create their own documentation, first allowing custom text, items etc and then even custom layouts.",
    "Why can't you create modules that have as much access as kodular components have e.g. device utilities vs deviceInfo?" : "This is sadly because of browser restrictions for security, Thunkable Modules access JS wich has some limitations compared to native code, sadly since we can't use native react code in modules there is now way to add more futures without restrictions.",
    "Why are Modules not offline available?": "To add offline capabilities to modules we need to be able to dynamically set the URL of the Javascript Webbridge, this is not possible at the moment, and a future request has been made to add this future until then we can't add offline capabilities to modules.",
    
}
  
  export { faqItems }