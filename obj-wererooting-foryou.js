const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "plumpness";

const judgeVegetable = function (vegetables, metric) {
  let redness = 0;
  let submitter = "";
  for (let i = 0; i < vegetables.length; i++) {
    if (redness < vegetables[i][metric]) {
      redness = vegetables[i][metric];
      submitter = vegetables[i].submitter;
    }
  }
  return submitter;
};

console.log(judgeVegetable(vegetables, metric));
