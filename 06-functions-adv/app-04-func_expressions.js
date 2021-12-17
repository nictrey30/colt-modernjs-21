// function expressions
// in JS functions are objects
const square = function (num) {
  return num * num;
};
console.log(square(4));

function add(x, y) {
  return x + y;
}

const sum = function (x, y) {
  return x + y;
};
console.log(sum(4, 5));
