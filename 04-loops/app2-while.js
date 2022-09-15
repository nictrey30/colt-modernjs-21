// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

//Recreating the above for loop w/ a while loop:
// let i = 0;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// guessing game
let currentGuesses = [];
const target = Math.floor(Math.random() * 10) + 1;
console.log(`The target is: ${target} `);
let guess = Math.floor(Math.random() * 10) + 1;
console.log(`current guess: ${guess}`);
currentGuesses.push(guess);
while (!currentGuesses.includes(target)) {
  while (currentGuesses.includes(guess)) {
    guess = Math.floor(Math.random() * 10) + 1;
  }
  console.log(`current guess: ${guess}`);
  currentGuesses.push(guess);
}
console.log(
  `You correctly guessed the ${
    currentGuesses.length === 1
      ? '1st'
      : currentGuesses.length === 2
      ? '2nd'
      : currentGuesses.length + 'th'
  } time, and the number was ${currentGuesses[currentGuesses.length - 1]}`
);
console.dir(currentGuesses);

// break
// while (true) {
//   if (condition) {
//     break;
//   }
// }
