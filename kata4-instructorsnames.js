/* Determine which instructor has the longest name.
 Return the object that has the longest name.
 If there are two instructors with the longest name, return the first one. */

/* Loop through objects array.
Check each name (string) and determine its length.
Keep the name with the longest character length.
Return that name - instructor name.*/

const instructorWithLongestName = function (instructors) {
  let longestName = "";
  let instructorCourse;

  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > longestName) {
      longestName = instructors[i].name;
    }

    let savedName = instructors[i].name;
    instructorCourse = instructors[i].course;

    if (longestName.length < savedName.length) {
      longestName = savedName;
    }
  }
  return "name: " + longestName + ", " + "course: " + instructorCourse;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);

console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);
