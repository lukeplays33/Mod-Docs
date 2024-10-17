let faqItems = {
    "Why do we barely use Logic Modules for Thunkable?": "This is because Modules allow us to interact with the screen, most of the time we need access to the screen for the modules to work even if the are not visible.",
    "Why do we have a requestFocus() function in Thunkable?": "To have JavaScript events work such as a key event the user needs to have focused the iframe it is in, this function allows that after the focus was lost the developer can request it back to the iframe to capture events.",
    "I want to use Mod Docs! for my own docs.": "This will be possible in the future but not now, at the moment we want to focus on publicly testing and incorporating user feedback."
    
}
  
  export { faqItems }