const img = document.getElementById('bear-photo');
const p = document.getElementById('main');

// getElementsByTagName
const inputs = document.getElementById('form');
const submitBtn = document.querySelector("[type='submit']");
form.addEventListener('submit', (e) => {
  e.preventDefault();
  for (let input of inputs) {
    if (input.value !== 'submit') {
      console.log(input.value);
    } else {
      continue;
    }
  }
});

const arrInputs = [...inputs];

// getElementsByClassName
const ul = document.getElementsByTagName('ul')[0];
ul.getElementsByClassName('special')[0].style.color = 'crimson';

// querySelector
//To find the first li on the page:
document.querySelector('li');
//To find the first element with class of special:
document.querySelector('.special');
//To find the first element with id of main (there should only be one...)
document.querySelector('#main');
// To find the first li with the class of special, nested inside of a ul, nested inside a section:
document.querySelector('section ul li.special');

// querySelectorAll
// To find ALL li's on the page:
document.querySelectorAll('li');
// To find ALL elements with the class of special on the page:
document.querySelectorAll('.special');
