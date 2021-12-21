// a callback function is a function passed into another function as
// an argument, which is then invoked inside the outer function
function grumpus() {
  console.log('go away');
}
setTimeout(grumpus, 3000);

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  console.log('why did you click me?');
});
