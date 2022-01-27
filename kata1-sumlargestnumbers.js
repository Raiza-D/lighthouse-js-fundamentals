const sumLargestNumbers = function (data) {
  let numOne = data[0];
  let numTwo = data[0];
  let newArray = [];

  if (data.length === 2) {
    return data[0] + data[1];
  }

  /*Not required nor requested in the criteria of the assignment.
Lines of code to take care of if an array element was zero
or if an array has less than two elements:
  if (data === 0 || data.length < 2) {
    return data;
  } */

  for (let i = 0; i < data.length; i++) {
    if (data[i] > numOne) {
      numOne = data[i];
      newArray[0] = numOne;
    }
  }

  for (let j = 0; j < data.length; j++) {
    if (data[j] < newArray[0] && data[j] > numTwo) {
      numTwo = data[j];
      newArray[1] = numTwo;
    }
  }
  return newArray[0] + newArray[1];
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbers([-6, -2, -3, -4]));
