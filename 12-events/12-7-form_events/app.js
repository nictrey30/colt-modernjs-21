const form = document.querySelector('#signup-form');

const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

form.addEventListener('submit', function (e) {
  e.preventDefault(); //stops the request from being sent (prevents page reload)
  console.log('cc', creditCardInput.value);
  console.log('terms', termsCheckbox.checked);
  console.log('veggieSelect', veggieSelect.value);
  //send form data to db
  //append something to page using form data
});

// input and change events
const formData = {};
// The input event fires when the value of an <input>, <select>, or <textarea> element has been changed.
// creditCardInput.addEventListener('input', (e) => {
//   formData['cc'] = e.target.value;
// });
// veggieSelect.addEventListener('input', (e) => {
//   formData['veggie'] = e.target.value;
// });
// termsCheckbox.addEventListener('input', (e) => {
//   formData['agreeToTerms'] = e.target.checked;
// });

// 2nd method by  adding a name attribute to the input in html
for (let input of [creditCardInput, termsCheckbox, veggieSelect]) {
  input.addEventListener('input', (e) => {
    formData[e.target.name] =
      input !== termsCheckbox ? e.target.value : e.target.checked;
  });
}
