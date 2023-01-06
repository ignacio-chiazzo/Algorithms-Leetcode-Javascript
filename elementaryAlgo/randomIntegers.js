//Example 3: Integer Value between 1 and 10
const randomIntegers = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
console.log(randomIntegers(1, 10));
console.log(randomIntegers(1, 10));
//Example 4: Integer Value between Two Numbers (Inclusive)
const randomNumbers = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
