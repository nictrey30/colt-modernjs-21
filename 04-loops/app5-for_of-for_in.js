// for (variable of iterable) {
//   statement
// }
let subreddits = ['soccer', 'popheads', 'cringe', 'books'];
for (let subreddit of subreddits) console.log(subreddit);

const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
];

for (let row of magicSquare) {
  let sum = 0;
  for (let el of row) sum += el;
  console.log(`row ${magicSquare.indexOf(row)} sum: ${sum}`);
}

const words1 = ['mail', 'milk', 'bath', 'black'];
const words2 = ['box', 'shake', 'tub', 'berry'];

// comparing for and for of
for (let i = 0; i < words1.length; i++) {
  console.log(`${words1[i]}-${words2[i]}`);
}

// for of with objects - OBJECTS ARE NOT ITERABLE!!
const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  'In Bruges': 9,
  Amadeus: 10,
  'Kill Bill': 8,
  'Little Miss Sunshine': 8.5,
  Coraline: 7.5
};
// loop over just the keys or just the values
// Object.keys(object), Object.values(object)
for (let key of Object.keys(movieReviews)) {
  console.log(`${key}: rating -> ${movieReviews[key]}`);
}
// find the average review score
let averageReview = 0;
let ratings = Object.values(movieReviews);
for (let value of ratings) averageReview += value;
console.log(
  `The average rating is ${(averageReview / ratings.length).toFixed(2)}`
);

// for in loops ... loop over the keys in an object
for (let key in movieReviews) {
  console.log(`${key}: ${movieReviews[key]}`);
}
