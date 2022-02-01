// THE OLD WAY
//The arguments object is available in every function you write (except arrow functions)
//It contains all the arguments passed in.
function sum() {
  //It is NOT an array, we have to turn it into one if we want to use array methods
  const argsArr = [...arguments];
  return argsArr.reduce((total, currVal) => {
    return total + currVal;
  });
}

// No arguments object inside of arrow functions :(
const multiply = () => {
  console.log(arguments);
};

// THE NEW WAY - REST
// collects all the remaining arguments into an actual array
function newSum(...nums) {
  return nums.reduce((total, current) => total + current);
}
const newMultiply = (...nums) =>
  nums.reduce((total, current) => total * current);

console.log(`sum with newSum: ${newSum(4, 5, 6)}`);
console.log(`multiply: ${newMultiply(4, 5, 6)}`);

// collect the remaining arguments
function fullName(first, last, ...titles) {
  console.log(`First: ${first}`);
  console.log(`Last: ${last}`);
  console.log(`titles: ${titles}`);
}

fullName('Ana', 'Maria', 'dnsoara', 'mimoza');
