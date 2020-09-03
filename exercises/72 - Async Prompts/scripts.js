function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function ask(options) {
  return new Promise(async function(resolve) {
    // create a popup with all of the fields in it
      const popup = document.createElement('form');
      popup.classList.add('popup');
      popup.insertAdjacentHTML('afterbegin', `
        <fieldset>
          <label>${options.title}</label>
          <input type="text" name"input" />
          <button type="submit">Submit</button>
        </fieldset>
      `);

    // check if they want a cancel button
    if(options.cancel) {
      const skipButton = document.createElement('button');
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      // TODO: listen for a click on cancel button
    }

    // listen for the submit event on the inputs


    // when someone does submit it, resolve the data that was in the input box

    // insert popup into the DOM
    document.body.appendChild(popup);
    // set timeout before we add open class
    await wait(50);
    popup.classList.add('open');
  });
}