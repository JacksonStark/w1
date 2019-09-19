let inputs = process.argv;

const sum = (array) => {
  let code = array.slice(2);
  let a = new Number(code[0]);
  let b = new Number(code[1]);
  let math = a + b;
  return math;
};

console.log(sum(inputs));