//Example 1: Multiplication Table Up to 10
const multiplicationTable = (num) => {
  let multiples = [];
  for (let i = 1; i <= 10; i++) {
    multiples.push(i * num);
  }
  return multiples;
};
console.log(multiplicationTable(10));
console.log(multiplicationTable(1));
