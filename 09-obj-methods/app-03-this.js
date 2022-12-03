function sayHi() {
  console.log('HI');
  // this refers to the window (global scope object in the browser)
  // this is the current execution scope
  console.log(this);
}

const person = {
  first: 'Cherilyn',
  last: 'Sarkisian',
  nickName: 'Cher',
  fullName() {
    const { first, last, nickName } = this;
    return `${first} ${last} aka ${nickName}`;
  },
  printBio() {
    console.log(`${this.fullName()} is a person!`);
  },
  // THIS - invocation context
  // The value of THIS depends on the invocation context of the function it is used in
  // arrow functions don't get their own version of THIS
  laugh: () => {
    console.log(this);
    console.log(`${this.nickName} says HAHAHA`);
  }
};

person.laugh(); // undefined says HAHAHA
