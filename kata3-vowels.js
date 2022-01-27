/* Count the number of vowels that appear in the given string.
 The vowels: a,e,i,o,u */

/* Loop through each string - use for loop.
 Check for vowels in the given string.
 Count the NUMBER of vowels in that string and ADD the total number.
 Return the number of vowels in that string. */

const numberOfVowels = function (data) {
  let numVowels = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < data.length; i++) {
    if (
      data[i] === vowels[0] ||
      data[i] === vowels[1] ||
      data[i] === vowels[2] ||
      data[i] === vowels[3] ||
      data[i] === vowels[4]
    )
      numVowels++;
  }
  return numVowels;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
console.log(numberOfVowels("supercalifragilisticexpialidocious"));
console.log(numberOfVowels("")); // Deliberately left empty string to check output.
