function range(start, end, step) {
  let numbersArray = [];

  if (start === undefined || end === undefined || step === undefined) {
    return [];
  }
  if (start > end) {
    return [];
  }

  if (step === 0 || step < 0) {
    return [];
  }

  for (let i = start; i <= end; i += step) {
    numbersArray.push(i);
  }
  return numbersArray;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(0, 10, -5));

// More efficient way for the if statement blocks:
// By keeping it all in one if statement.  Less code.
// if (start === undefined || step === undefined || stop === undefined ||
// start > stop || step <= 0) {
//return [];
