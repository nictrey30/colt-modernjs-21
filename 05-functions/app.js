// STEP 1: Define the function:
function grumpus() {
  console.log('ugh...you again...');
  console.log('FOR THE LAST TIME...');
  console.log('LEAVE ME ALONE!!!');
}
// STEP 2: Call the function:
// grumpus();

// dice roll function
function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  return roll;
}
function throwDice(rolls) {
  for (let i = 0; i < rolls; i++) console.log(`rolled ${rollDie()}`);
}
// throwDice(3);

// functions with multiple arguments
function square(num) {
  return num * num;
}
function sum(x, y) {
  return x + y;
}
function divide(a, b) {
  return a / b;
}
function isPurple(color) {
  return color.toLowerCase() === 'purple';
}
function containsPurple(arr) {
  for (let color of arr) {
    if (color.toLowerCase() === 'purple') {
      return true;
    }
  }
  return false;
}
