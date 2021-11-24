// Example 1 - Logical Operators &&
let password = 'chicken_Gal';
if (password.length >= 8 && password.indexOf(' ') === -1) {
  console.log('valid pass');
} else {
  console.log('invalid pass');
}
// Example 2 - Logical Operators ||
let age = 44;
if (age < 6 || age >= 65) {
  console.log('You get in for free.');
} else {
  console.log('You must pay.');
}
// Example 2 - Logical Operators NOT !
let loggedInUser;
// if there isn't a logged in user
if (!loggedInUser) {
  console.log('You are not logged in!');
}
let flavour = 'watermelon';
if (!(flavour === 'grape' || flavour === 'cherry'))
  console.log("we don't have that flavour");

// SWITCH
let day = 7;

// USING TRADITIONAL CONDITIONAL....
// if (day === 1) {
// 	console.log('MONDAY');
// }
// else if (day === 2) {
// 	console.log('TUESDAY');
// }
// else if (day === 3) {
// 	console.log('WEDNESDAY');
// }
// else if (day === 4) {
// 	console.log('THURSDAY');
// }
// else if (day === 5) {
// 	console.log('FRIDAY');
// }
// else if (day === 6) {
// 	console.log('SATURDAY');
// }
// else if (day === 7) {
// 	console.log('SUNDAY');
// }
// else {
// 	console.log('INVALID DAY');
// }

// USING A SWITCH INSTEAD...
switch (day) {
  case 1:
    console.log('MONDAY');
    break;
  case 2:
    console.log('TUESDAY');
    break;
  case 3:
    console.log('WEDNESDAY');
    break;
  case 4:
    console.log('THURSDAY');
    break;
  case 5:
    console.log('FRIDAY');
    break;
  case 6:
    console.log('SATURDAY');
    break;
  case 7:
    console.log('SUNDAY');
    break;
  default:
    console.log('INVALID DAY');
}

// EXAMPLE 2
let emoji = 'heart';

// Switch with overlapping cases...
switch (emoji) {
  case 'sad face':
  case 'happy face':
    console.log('yellow');
    break;
  case 'eggplant':
    console.log('purple');
    break;
  case 'heart':
  case 'lips':
    console.log('red');
    break;
}
// the ternary operator
// condition ? expIfTrue : expIfFalse
let num = 7;
if (num === 7) {
  console.log('lucky');
} else {
  console.log('bad');
}
console.log(num === 7 ? 'lucky' : 'bad');
// use the ternary operator to assign to a variable
let myStatus = 'offline';
let color = myStatus === 'offline' ? 'red' : 'green';
console.log(`Status is ${color}`);
