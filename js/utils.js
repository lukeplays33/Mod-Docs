function waitForElement(selector, callback) {
    const intervalId = setInterval(() => {
      if (document.querySelector(selector)) {
        clearInterval(intervalId);
        callback();
      }
    }, 500);
  }

  export { waitForElement };