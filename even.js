// isEven function:
// const isEven = function (num) {
//   return num % 2 === 0;
// };

// const tenIsEven = isEven(10);
// const elevenIsEven = isEven(11);

// console.log(tenIsEven);
// console.log(elevenIsEven);

// We simplify the above code in the following way below.
// In this method, we don't need to set our function return values
// to new variables before doing something with them.
// The values are entered and used directly into console.log.
const isEven = function (num) {
  return num % 2 === 0;
};
console.log(isEven(10));
console.log(isEven(11));
