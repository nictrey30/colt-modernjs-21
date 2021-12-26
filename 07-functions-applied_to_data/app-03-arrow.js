const square = (x) => x * x;
// console.log(square(4));
const isEven = (num) => num % 2 === 0;
// console.log(isEven(5), isEven(4));
const multiply = (x, y) => x * y;

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const doubleNums = nums.map((num) => num * 2);
const parityList = nums.map((num) =>
  num % 2 === 0 ? `${num} is even` : `${num} is odd`
);
