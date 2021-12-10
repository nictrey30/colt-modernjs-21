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

for (row of magicSquare) {
  let sum = 0;
  for (el of row) sum += el;
}
