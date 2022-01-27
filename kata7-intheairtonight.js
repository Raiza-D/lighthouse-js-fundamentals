/* Function checkAir will receive two arguments - an array of air samples and 
threshold for highest acceptable amount of dirty air samples.
Return "Polluted" if too many dirty air samples or
"Clean" if dirty samples below given threshold. */

/* Loop through each array element - for loop.
If sample equals "dirty", increment dirty samples counter.
If total dirty samples in given array exceeds given threshold,
RETURN "Polluted", otherwise RETURN "Clean". */

const checkAir = function (samples, threshold) {
  let dirtySamples = 0;

  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === "dirty") {
      dirtySamples++;
    }
  }
  let decimalDirty = dirtySamples / samples.length;

  if (decimalDirty >= threshold) {
    return "Polluted";
  } else {
    return "Clean";
  }
};

console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
);

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
);
