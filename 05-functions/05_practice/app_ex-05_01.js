// 05-functions practice 1 - passwordValidator
// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
// - be at least 8 char
// - cannot contain spaces
// - cannot contain the username
// If all req are met return true, otherwise return false

// isValidPassword('89Fjj1nms', 'dogLuvr'); //true
// isValidPassword('dogLuvr123!', 'dogLuvr'); //false

const isValidPassword = (pass, user) =>
  pass && user
    ? pass.length > 8 && pass.indexOf(' ') === -1 && !pass.includes(user)
    : false;

console.log(isValidPassword('89Fjj1nms', 'dogLuvr')); //true
console.log(isValidPassword('dogLuvr123!', 'dogLuvr')); //false
console.log(isValidPassword('hello1', 'dogLuvr')); //false
