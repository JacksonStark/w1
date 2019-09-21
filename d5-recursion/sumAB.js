// Sum values from a start-point to an end-point
const sum = (fromN, toN) => {
  if (fromN === toN) {
    return toN;
  } else {
    return fromN + sum(fromN + 1, toN);
  }
};

console.log(sum(3, 7));
