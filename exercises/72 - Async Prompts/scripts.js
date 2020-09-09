function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
  popup.classList.remove('open');
  await wait(1000);
  // remove the popup entirely
  popup.remove();
  popup = null;
}

function ask(options) {
  return new Promise(async function(resolve) {
    // create a popup with all of the fields in it
      const popup = document.createElement('form');
      popup.classList.add('popup');
      popup.insertAdjacentHTML('afterbegin', 
      `<fieldset>
          <label>${options.title}</label>
          <input type="text" name="input" />
          <button type="submit">Submit</button>
        </fieldset>
      `);

    // check if they want a cancel button
    if(options.cancel) {
      const skipButton = document.createElement('button');
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      popup.firstElementChild.appendChild(skipButton);
      // TODO: listen for a click on cancel button
      skipButton.addEventListener('click', function() {
        resolve(null);
        destroyPopup(popup);
      }, { once: true });
    }

    // listen for the submit event on the inputs
    popup.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log('SUBMITTED');
      resolve(e.target.input.value);
      // remove it from the DOM entirely
      destroyPopup(popup);
    }, { once: true });

    // when someone does submit it, resolve the data that was in the input box

    // insert popup into the DOM
    document.body.appendChild(popup);
    // set timeout before we add open class
    await wait(50);
    popup.classList.add('open');
  });
}

// select all buttons that have a question
async function askQuestion(e) {
  const button = e.currentTarget;
  const cancel = 'cancel' in button.dataset;

  const answer = await ask({ 
    title: button.dataset.question, 
    cancel,
  });
  console.log(answer);
}

const buttons = document.querySelectorAll('[data-question');
buttons.forEach(button => button.addEventListener('click', askQuestion));

const questions = [
  { title: 'What is your name?' },
  { title: 'What is your age', cancel: true },
  { title: 'What is your dogs name?' },
];

// generic utility function that will work in place of specific fn below it
async function asyncMap(array, callback) {
  // make array to store results
  const results = [];
  // loop over array
  for(const item of array) {
    results.push(await callback(item));
  }
  // when loop is done, return results
  return results;
}

async function go() {
  const answers = await asyncMap(questions, ask);
  console.log(answers);
}

go();

// for of allows you to pause a loop by awaiting something inside of it
// async function askMany() {
//   for(const question of questions) {
//     const answer = await ask(question);
//     console.log(answer);
//   }
// }

// askMany();