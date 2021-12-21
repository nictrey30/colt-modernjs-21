// returning a function within a function
function makeBetweenFunc(min, max) {
  return function (val) {
    return val >= min && val <= max;
  };
}

const inAgeRange = makeBetweenFunc(18, 100);
console.log(inAgeRange(17)); // false
console.log(inAgeRange(68)); // true

function multiplyBy(num) {
  return function (val) {
    return num * val;
  };
}
const triple = multiplyBy(3);
console.log(triple(7)); // 21
