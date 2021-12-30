// Using while loop:
let num = 100;
while (num <= 200) {
  if (num % 3 === 0 && num % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (num % 4 === 0) {
    console.log("Lighthouse");
  } else if (num % 3 === 0) {
    console.log("Loopy");
  } else {
    console.log(num);
  }
  num = num + 1;
}

// // If you use a for loop instead, the code will look like this:
// let num = 100;
// for (num = 100; num <= 200; num = num + 1) {
//   if (num % 3 === 0 && num % 4 === 0) {
//     console.log("LoopyLighthouse");
//   } else if (num % 4 === 0) {
//     console.log("Lighthouse");
//   } else if (num % 3 === 0) {
//     console.log("Loopy");
//   } else {
//     console.log(num);
//   }
// }
