// SORT ARRAY NUMERICALLY...

const students = [
  { id: 1, name: "zack", age: 40 },
  { id: 2, name: "alex", age: 22 },
  { id: 3, name: "alex", age: 42 },
  { id: 4, name: "tom",  age: 30 }
];


// SORT FUNCTION...
students.sort((a,b) => {
  let nameA = a.name;
  let nameB = b.name;
  let ageA = a.age;
  let ageB = b.age;
  
  // SORT BY ALPHEBETICAL ORDER...
  if (nameA < nameB) {
    return -1;
  } else if (nameA > nameB) {
    return 1;

    // IF SAME NAME, SORT BY DESCENDING AGE...
  } else {
    if (ageA < ageB) {
      return 1;
    } else if (ageA > ageB) {
      return -1;
      // IF NAME AND AGE ARE BOTH THE SAME, DO NOTHING...
    } else {
      return 0;
    }
  }
});

console.log(students);

