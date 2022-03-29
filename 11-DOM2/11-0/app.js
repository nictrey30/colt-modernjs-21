// Select all LI's on the page:
const allLis = document.querySelectorAll('li');

// innerText returns all the text inside the element selected
// One option, a regular for loop:
for (let i = 0; i < allLis.length; i++) {
  allLis[i].innerText = 'WE ARE THE CHAMPIONS!';
}

//Another option using for...of:
for (let li of allLis) {
  li.innerHTML = 'WE ARE <b>THE CHAMPIONS</b>';
}

// innerHtml is gonna return not only the text inside an element, but also all other tags inside a given element

// getting and setting attributes
const range = document.querySelector('input[type="range"]');
console.log(range.getAttribute('min'));
range.setAttribute('min', 200);

// Finding parent/children/siblings
const firstLI = document.querySelector('li');
// firstLI.parentElement
// firstLI.nextElementSibling
const ul = document.querySelector('ul');
// ul.children
