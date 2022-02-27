function sayHi() {
  console.log('HI');
  //this refers to the window (global scope object in the browser)
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
  }
};
