/*Convert any whitespaces WITHIN the given string
into "%20". */

/* Loop through each string - for loop.
For each space within the string, change it to "%20."
Return the string, but with the "%20" in place of any whitespaces.
 */

const urlEncode = function (text) {
  text = text.trim();
  let newString = "";

  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      newString += "%20";
    } else {
      newString += text[i];
    }
  }
  return newString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
