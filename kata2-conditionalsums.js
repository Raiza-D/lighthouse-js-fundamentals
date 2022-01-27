// Add the numbers in the array that match
// the given condition

/* Loop through each element in the array - use for loop.
 Check the condition - if "even", check each number in the
 array if it's even and save that value. ADD the saved values.
 Do the same thing for "odd" condition and odd numbers.
 Have a test for array that is empty or zero - return zero.*/

const conditionalSum = function (values, condition) {
  let total = 0;

  for (let i = 0; i < values.length; i++) {
    if (condition === "even" && values[i] % 2 === 0) {
      total += values[i];
    } else if (condition === "odd" && values[i] % 2 !== 0) {
      total += values[i];
    }
  }
  if (values === undefined || values === 0) {
    return 0;
  }
  return total;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
console.log(conditionalSum([-5, -9, -2, -6], "odd"));
