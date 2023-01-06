//Example 1: Sum of Natural Numbers Using for Loop
const sumForLoop = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};
console.log(sumForLoop(10));
//Example 2: Sum of Natural Numbers Using while Loop
const sumWhileLoop = (num) => {
  let sum = 0,
    i = 1;
  while (i <= num) {
    sum += i;
    i++;
  }
  return sum;
};
console.log(sumWhileLoop(10));
