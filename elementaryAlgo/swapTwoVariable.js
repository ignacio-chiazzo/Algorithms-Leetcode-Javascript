//Example 1: Using a Temporary Variable
const swapTemporaryVariable = (arr) => {
  let [a, b] = arr;
  let temp = a;
  a = b;
  b = temp;
  return [a, b];
};
console.log(swapTemporaryVariable([20, 40]));

//Example 2: Using es6(ES2015) Destructuring assignment
const swapEs6 = (arr) => {
  let [a, b] = arr;
  [b, a] = [a, b];
  return [a, b];
};
console.log(swapEs6([20, 40]));
//Example 3: Using Arithmetic Operators
const swapArithmetic = (arr) => {
  let [a, b] = arr;
  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
};
console.log(swapArithmetic([20, 40]));
//Example 4: Using Bitwise XOR operator
const swapBitwiseXOR = (arr) => {
  let [a, b] = arr;
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  return [a, b];
};
console.log(swapBitwiseXOR([20, 40]));
