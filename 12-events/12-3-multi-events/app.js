const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'indigo',
  'violet'
];

// by using function() and not () =>, we can keep the this of the calling element, 'box' in this case
const changeColor = function () {
  const h1 = document.querySelector('h1');
  h1.style.color = this.style.backgroundColor;
};

// section for attaching all the generated boxes
const container = document.querySelector('#boxes');
for (let color of colors) {
  const box = document.createElement('div');
  box.classList.add('box');
  box.style.backgroundColor = color;
  container.append(box);
  box.addEventListener('click', changeColor);
}
