/* 2-Dimensional array of parking spots provided and a vehicle type (string).
Find available parking spot according to vehicle type.
Uppercase means spot available. Lowercase means unavailable.
Return the COORDINATES (x,y) of available parking spot.
Return false if no spot available. */

/* Loop through each array group - for loop, nested.
If statements for each vehicle type and the spot that it can take.
Return coordinate if conditions met.
Return false if none of conditions met. */

const whereCanIPark = function (spots, vehicle) {
  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots[y].length; x++) {
      let stall = spots[y][x];

      if (vehicle === "regular") {
        if (stall === "R") {
          return [x, y];
        }
      } else if (vehicle === "small") {
        if (stall === "R" || stall === "S") {
          return [x, y];
        }
      } else if (vehicle === "motorcycle") {
        if (stall === "R" || stall === "S" || stall === "M") {
          return [x, y];
        }
      }
    }
  }
  return false;
};

console.log(
  whereCanIPark(
    [
      // COLUMNS ARE X
      // 0    1    2    3    4    5
      ["s", "s", "s", "S", "R", "M"], // 0 ROWS ARE Y
      ["s", "M", "s", "S", "r", "M"], // 1
      ["s", "M", "s", "S", "r", "m"], // 2
      ["S", "r", "s", "m", "r", "M"], // 3
      ["S", "r", "s", "m", "r", "M"], // 4
      ["S", "r", "S", "M", "M", "S"], // 5
    ],
    "regular"
  )
);

console.log(
  whereCanIPark(
    [
      ["M", "M", "M", "M"],
      ["M", "s", "M", "M"],
      ["M", "M", "M", "M"],
      ["M", "M", "r", "M"],
    ],
    "small"
  )
);

console.log(
  whereCanIPark(
    [
      ["s", "s", "s", "s", "s", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["S", "r", "s", "m", "r", "s"],
      ["S", "r", "s", "m", "R", "s"],
      ["S", "r", "S", "M", "m", "S"],
    ],
    "motorcycle"
  )
);
