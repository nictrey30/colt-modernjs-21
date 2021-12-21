// map - creates a new array with the results of calling a callback on every element in the array
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ['asap', 'byob', 'rsvp', 'diy'];

// map - needs to return a value
const doubles = numbers.map((num) => num * 2);
const odds = numbers
  .map((num) => (num % 2 !== 0 ? num : null))
  .filter((num) => num !== null);

const abbrWords = words.map((word) => word.toUpperCase().split('').join('.'));
//["A.S.A.P", "B.Y.O.B", "R.S.V.P", "D.I.Y"]

const books = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36
  }
];
// create new array that contains all the book titles
const titles = books.map((book) => book.title);
