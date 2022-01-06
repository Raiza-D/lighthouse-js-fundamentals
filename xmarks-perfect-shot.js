const moves = ["north", "north", "west", "west", "north", "east", "north"];

const finalPosition = function (moves) {
  let position = [];
  let xAxis = 0;
  let yAxis = 0;

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "north") {
      yAxis += 1;
    } else if (moves[i] === "south") {
      yAxis -= 1;
    } else if (moves[i] === "east") {
      xAxis += 1;
    } else if (moves[i] === "west") {
      xAxis -= 1;
    }
  }
  position.push(xAxis);
  position.push(yAxis);
  return position;
};

console.log(finalPosition(moves));
