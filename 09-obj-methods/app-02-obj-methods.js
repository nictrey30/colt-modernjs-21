// Adding methods to an object!
const math = {
  numbers: [1, 2, 3, 4, 5],
  add(x, y) {
    return x + y;
  },
  multiply(x, y) {
    return x * y;
  }
};

const auth = {
  username: 'Tommy',
  login() {
    console.log('Logged you in!');
  },
  logout() {
    console.log('Goodbye');
  }
};
