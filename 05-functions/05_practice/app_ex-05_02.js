// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2
function avgArray(arr) {
  let sum = 0;
  if (Array.isArray(arr)) {
    for (elem of arr) {
      if (isNaN(elem)) {
        return `${elem} at index ${arr.indexOf(elem)} is not a valid number`;
      }
    }
    // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
    sum = arr.reduce((a, b) => a + b, 0);
    return (sum / arr.length).toFixed(1);
  }
  return `${arr} is not a valid input`;
}
console.log(avgArray([0, 50])); //25
console.log(avgArray([75, 76, 80, 95, 100])); //85.2
console.log(avgArray('mere')); // mere is not a valid input
console.log(avgArray([4, 5, '5s', 6])); // 5s at index 2 is not a valid number
