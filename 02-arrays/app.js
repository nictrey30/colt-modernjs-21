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

// includes
let ingredients = [
  'water',
  'corn starch',
  // 'flour',
  'cheese',
  'brown sugar',
  'shrimp',
  'eel',
  'butter'
];
console.log(ingredients.includes('flour') ? 'contains gluten' : 'gluten free');

// reverse and join
// reverse mutates the original array
let letters = ['d', 'g', 'a', 'z', 'n', 'm'];
letters.reverse();
// join - creates a new string by concatenating all the elements in the array, separated by commas or a  specified separator string.
let elements = ['water', 'smoke', 'air', 'fire'];
console.log(elements.join(', '));

// slice - copy portion of an array
// returns a shallow copy of a portion of an array into a new array object selected from BEGIN to END(end not included) where BEGIN and END represent the index of items in that array.
let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];
let waterAnimals = animals.slice(0, 3); // index 3 is not incuded
let mammals = animals.slice(2, 4);
let reptiles = animals.slice(4);
let fourLeggedAnimals = animals.slice(-3); // go back 3 elements from the end
// just calling slice() on an array makes a copy of the array

// splice - remove/replaces elements from an array or adds new elements
// splice(start, deleteCount, item1, item2, itemN). deleteCount and adding items are optional
// if we want to update the middle of the array of delete something.

// insert something after salmon
animals.splice(1, 0, 'monkey'); // 1 -start index, 0 - how many items we want to delete, 'monkey' added
// splice will return the deleted values if there are any

// sorting arrays - sorts the array in place
let people = ['Joe', 'Doe', 'Smith', 'Ariel', 'Muriel', 'Cowell'];
let nums = [24, 10, 10000, 57, 99];
// compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments.
// compareFunction(a, b) return value	sort order
// > 0	sort b before a
// < 0	sort a before b
// === 0	keep original order of a and b
nums.sort((a, b) => a - b);

// reference types
let numsArray = [5, 6, 7, 8];
let otherNums = numsArray;
numsArray.push(9, 10);
console.log(`otherNums: ${otherNums}`);
const cities = ['Lisbon', 'Barcelona', 'Ploiesti'];
cities.push('Bucuresti');
