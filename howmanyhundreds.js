// Each container can only hold exactly 100 bottles
// Determine how many containers can be filled and sent

function howManyHundreds(bottles) {
  if (bottles < 100) {
    return 0;
  }
  if (bottles > 100) {
    return Math.floor(bottles / 100);
  }
  if (bottles === 100) {
    return 1;
  }
}
console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));

// Old code:
// function howManyHundreds(bottles) {
//   if (bottles % 100) {
//     return Math.round(bottles / 100);
//   }
//   if (bottles < 100) {
//     return 0;
//   }
// }
// console.log(howManyHundreds(1000));
// console.log(howManyHundreds(894));
// console.log(howManyHundreds(520));
// console.log(howManyHundreds(99));
// console.log(howManyHundreds(0));
