// forEach, map, filter, find, reduce, some, every
// forEach - accepts a callback fn, and it calls it for each element in the array
// forEach((element, index, array) => { /* ... */ } )
const nums = [20, 21, 22, 23, 24, 25, 26, 27];
nums.forEach((num, i) => console.log(`Elem at index ${i}: ${num}`));

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

// printing all the books titles
books.forEach((book) => console.log(book.title));
// Printing all book titles using for...of:
for (let book of books) console.log(book.title);
