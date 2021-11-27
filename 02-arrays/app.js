//An empty array:
let todoList = [];
//Array of strings:
let shoppingList = ['cereal', 'cheese', 'ice'];
// Array of numbers:
let lotto = [45, 12, 23, 25, 34];
// Array of multiple types:
let myCollection = [12, 'dog', true, null, NaN];

// modifying arrays
shoppingList[1] = 'cheddar cheese';
// add 'carrot' at the end
shoppingList.push('carrot');
console.log(shoppingList, shoppingList.pop());

// Array methods
// push - add to end
// pop - remove from end
// shift - remove from start
// unshift - add to start
// concat - merge arrays
// includes - look for a value
// indexOf - just like str.indexOf
// join - creates a string from array
// reverse - reverses an array
// slice - copy portion of an array
// splice - remove/replace elements
// sort - sorts an array

let dishesToDo = ['large platter'];

//to add to the start:
dishesToDo.unshift('plate');

//add to the start again:
dishesToDo.unshift('cereal bowl');
dishesToDo.unshift('spoon');

//remove from the start:
dishesToDo.shift();

// concat arrays
let fruits = ['apple', 'banana'];
let veggies = ['cacarot', 'onion', 'pwla'];
// console.log(fruits.concat(veggies));
// console.log(veggies.concat(fruits));
