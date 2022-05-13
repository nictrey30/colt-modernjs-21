// Make a new empty img element:
const newImg = document.createElement('img');
// Add a src:
newImg.src =
  'https://images.unsplash.com/photo-1504006833117-8886a355efbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80';
// Change its width:
newImg.style.width = '300px';

//Add it to the end of the body:
document.body.appendChild(newImg);

// Create a new anchor tag
const newLink = document.createElement('a');
// Set its innerText:
newLink.innerText = 'Mr. Bubz Video! CLICK MEEE';
// Set its src:
newLink.href = 'https://www.youtube.com/watch?v=QQNL83fhWJU';

// Select the first paragraph:
const firstP = document.querySelector('p');
// Add the link as a child of the paragraph:
firstP.appendChild(newLink);

// append, prepend, insertBefore
// add a new li to the list
const parentUl = document.querySelector('ul');
const newLi = document.createElement('li');
newLi.innerText = 'I am a NEW li element';
// parentUl.appendChild(newLi);

// inserBefore
const firstLi = document.querySelector('li.todo');
parentUl.insertBefore(newLi, firstLi);

// insertAdjacentElement(position, element)
// 'beforebegin': Before the targetElement itself.
// 'afterbegin': Just inside the targetElement, before its first child.
// 'beforeend': Just inside the targetElement, after its last child.
// 'afterend': After the targetElement itself.
const i = document.createElement('i');
i.innerText = 'I am Italics';
firstP.insertAdjacentElement('beforebegin', i);

// append is diffrent from appendChild in that we can insert multiple elements at once
