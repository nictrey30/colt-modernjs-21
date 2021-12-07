// 3 pieces to a for loop:
// 1 - Variable declaration
// 2 - The condition
// 3 - Update the loop variable

// STEP 1: 'let i = 1' - start i at 1
// STEP 2: 'i <= 10' - run the loop as long as i <= 10
// STEP 3: 'i++' - add 1 to i each time through
for (let i = 1; i <= 10; i++) {
  console.log('HELLO:', i);
}

// Counting by 3's:
for (let i = 1; i <= 10; i += 3) {
  console.log('HELLO:', i);
}

// Printing first 20 perfect squares:
for (let num = 1; num <= 20; num++) {
  console.log(`${num}x${num} = ${num * num}`);
}

// Counting DOWN from 200 by intervals of 25:
for (let i = 200; i >= 0; i -= 25) {
  console.log(i);
}

// for loops for arrays
const animals = ['lions', 'tigers', 'bears'];
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
const examScores = [98, 77, 84, 91, 57, 66];
const myStudents = [
  {
    firstName: 'Zeus',
    grade: 86
  },
  {
    firstName: 'Artemis',
    grade: 97
  },
  {
    firstName: 'Hera',
    grade: 72
  },
  {
    firstName: 'Apollo',
    grade: 90
  }
];
let sum = 0;
for (let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i];
  // console.log(`${student.firstName} has a grade of ${student.grade}`);
  sum += student.grade;
}
console.log(
  `The average grade of the students is ${(sum / myStudents.length).toFixed(2)}`
);
// reverse a word
const word = 'stressed';
let reversedWord = '';
for (let i = word.length - 1; i >= 0; i--) {
  reversedWord += word[i];
}
console.log(`THe reversed word ${word} is: ${reversedWord}`);
