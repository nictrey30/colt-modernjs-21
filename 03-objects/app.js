const fitBitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: '5 of 7',
  avgGoodSleep: '2:13'
};
console.log(fitBitData.totalMiles);
console.log(fitBitData['totalMiles']);

// adding and updating properties
const userReviews = {};
userReviews['queenBee49'] = 4.0;
userReviews.mrSmith78 = 3.5;
console.log(userReviews);

// nested arrays and objects
const student = {
  firstName: 'David',
  lastName: 'Jones',
  strengths: ['Music', 'Art'],
  exams: {
    midterm: 92,
    final: 88
  }
};

const avg = (student.exams.midterm + student.exams.final) / 2;

const shoppingCart = [
  {
    product: 'Jenga Classic',
    price: 6.88,
    quantity: 1
  },
  {
    product: 'Echo Dot',
    price: 29.99,
    quantity: 3
  },
  {
    product: 'Fire Stick',
    price: 39.99,
    quantity: 2
  }
];

const game = {
  player1: {
    username: 'Blue',
    playingAs: 'X'
  },
  player2: {
    username: 'Muffins',
    playingAs: 'O'
  },
  board: [
    ['O', null, 'X'],
    ['X', 'O', 'X'],
    [null, 'O', 'X']
  ]
};
