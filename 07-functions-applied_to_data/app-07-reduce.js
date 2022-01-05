const nums = [3, 4, 5, 6, 7];
// multiply all values in nums
// array.reduce((accumulator, currentValue) => return returnValue))
const product = nums.reduce((a, b) => a * b, 1);

let grades = [89, 96, 100, 77, 62, 93, 81, 99, 73];
// find the max in the array
let maxGrade = grades.reduce((max, currentVal) => Math.max(max, currentVal));

// tallying
const votes = [
  'y',
  'y',
  'n',
  'absent',
  'y',
  'n',
  'y',
  'n',
  'y',
  'n',
  'n',
  'n',
  'y',
  'y'
];
const results = votes.reduce((tally, val) => {
  tally[val] ? tally[val]++ : (tally[val] = 1);
  return tally;
}, {});

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
    title: 'A Truly Horrible Book',
    authors: ['Xavier Time'],
    rating: 2.18,
    genres: ['fiction', 'garbage']
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
// To group books by rating:
const booksByRating = books.reduce((tally, currentVal) => {
  let rating = Math.floor(currentVal.rating);
  if (!tally[rating]) {
    tally[rating] = [];
  }
  tally[rating].push(currentVal.title);
  return tally;
}, {});
