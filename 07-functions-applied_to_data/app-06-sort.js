const prices = [400.5, 3000, 99.99, 35.99, 12.0, 9500];
// REMEMBER THAT SORT() MUTATES THE ORIGINAL ARRAY!
// I'm using slice() to create a new copy, otherwise we would be sorting the same array 3 times:

// Default string sort :(
const badSort = prices.slice().sort();

// compare function - specifies a function that defines the sort order.
// compareFunction(a, b) return value
// < 0	sort a before b
// > 0	sort b before a
// === 0	keep original order of a and b
// Note: compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments.
// function compare(a, b) {
//   if (a is less than b by some ordering criterion) {
//     return -1;
//   }
//   if (a is greater than b by the ordering criterion) {
//     return 1;
//   }
//   // a must be equal to b
//   return 0;
// }
const ascSort = prices.slice().sort((a, b) => a - b);
const descSort = prices.slice().sort((a, b) => b - a);

const books = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
];

// Sorting books by their rating:
const sortedBooksByRating = books.slice().sort((a, b) => b.rating - a.rating);
