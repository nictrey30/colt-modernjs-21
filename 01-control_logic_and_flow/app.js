let myName = 'Cucu';
console.log(`Hello ${myName}`);
// console.log(3 + 4);
// console.error('Oh NO!!');

// if statements
// Example 1
if (1 === 1) {
  console.log("It's true!");
}
// Example 2
let rating = 4;
if (rating < 3) {
  console.log('You are below expectations!');
} else if (rating > 3) {
  console.log('You are exceeding the expectations!');
} else {
  console.log("You're ok");
}
// Example 3
let num = Math.floor(Math.random() * 100) + 1;
if (num % 2 !== 0) {
  console.log(`${num} is an odd number.`);
} else {
  console.log(`${num} is an even number.`);
}
// Example 4 - Nesting Conditionals
let password = 'cat dog';
if (password.length >= 6) {
  if (password.indexOf(' ') !== -1) {
    console.log('Passwords cannot include spaces');
  } else {
    console.log('Valid password');
  }
} else {
  console.log('Password too short!');
}
// Example 5 - truthy / falsy values
let loggedInUser = 'thomas123';
if (!loggedInUser) {
  console.log('Please log in.');
} else {
  console.log('You are logged in.');
}
