// array FIND
// returns the value of the first element in the array that satisfies th provided testing function
// The value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.

// If you need the index of the found element in the array, use findIndex().
// If you need to find the index of a value, use Array.prototype.indexOf(). (It’s similar to findIndex(), but checks each element for equality with the value instead of using a testing function.)
// If you need to find if a value exists in an array, use Array.prototype.includes(). Again, it checks each element for equality with the value instead of using a testing function.
// If you need to find if any element satisfies the provided testing function, use Array.prototype.some().

let movies = [
  'The Fantastic Mr. Fox',
  'Mr. and Mrs. Smith',
  'Mrs. Doubtfire',
  'Mr. Deeds'
];
// Find first movie that includes 'Mrs' in its title:
let movie = movies.find((movie) => movie.includes('Mrs'));
// Find first movie that begins with 'Mrs':
// The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
let movie2 = movies.find((movie) => movie.indexOf('Mrs') === 0);

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
// Find first book w/ rating over 4.3
const book = books.find((book) => book.rating >= 4.3);
// Find first book with Neil Gaiman as an author:
const book2 = books.find((book) => book.authors.includes('Neil Gaiman'));
