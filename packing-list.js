// Iterating over an array using for loop example:
const packingList = [
  "bowls",
  "plates",
  "pots",
  "pans",
  "eating utensils",
  "glasses",
  "cups",
  "cooking utensils",
];

// console.log("Kitchen stuff to pack:");
// for (let i = 0; i < packingList.length; i++) {
//   console.log(packingList[i]);
// }

// console.log(packingList[3]);

// Iterating over an array using while loop example:
console.log("Kitchen stuff to pack:");
let i = 0;
while (i < packingList.length) {
  console.log(packingList[i]);
  i++;
}
