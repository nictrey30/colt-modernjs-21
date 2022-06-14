const repeat = (str, times) => {
  let result = '';
  for (let i = 0; i < times; i++) {
    result += str;
  }
  return result;
};

const scream = (str) => str.toUpperCase() + '!!';

const getRantText = (phrase) => {
  let text = scream(phrase);
  let rant = repeat(text, 3);
  return rant;
};

const makeRant = (phrase, el) => {
  const h2 = document.createElement('h2');
  h2.innerText = getRantText(phrase);
  el.appendChild(h2);
};

console.log('hello');

makeRant('I hate mayo', document.body);
// makeRant('I like rice', document.body);
