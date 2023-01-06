let str = "hello world";
for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i));
}
for (let word in str) {
  console.log(str[word]);
}
[...str].forEach((word) => console.log(word));
for (let char of str) {
  console.log(char);
}

Math.abs(-5); // 5
Math.floor(1.6); // 1
Math.ceil(2.4); // 3
Math.round(3.8); // 4
Math.max(-4, 5, 6); // 6
Math.min(-7, -2, 3); // -7
Math.sqrt(64); // 8
Math.pow(5, 3); // 125
Math.trunc(-6.3); // -6
const isInt = (value) => {
  return value % 1 === 0;
};
console.log(isInt(1));
console.log(isInt(-6661));
console.log(isInt(0));
console.log(isInt(4.4));
console.log(isInt(1.6));
console.log(1 % 1);
console.log(3 % 1);
console.log(4 % 10);
console.log(50.4 % 1);
const randomNum = (start, end) => {
  return Math.floor(Math.random() * (end - start)) + start;
};
console.log(randomNum(1, 5));
