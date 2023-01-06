//Example 1: Find HCF using for Loop
const highCommonFactor = (num1, num2) => {
  let hcf;
  for (let i = 1; i < num1 && i < num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      hcf = i;
    }
  }
  return hcf;
};
console.log(highCommonFactor(60, 20));
//Example 2: HCF using while Loop and if...else
const highCommonFactorWhile = (num1, num2) => {
  let result;
  while (num1 !== num2) {
    if (num1 > num2) {
      result = num1 -= num2;
    } else {
      result = num2 -= num1;
    }
  }
  return result;
};
console.log(highCommonFactorWhile(1, 8));
