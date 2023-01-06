//Example 2: LCM Calculation Using HCF
const lowestCommonMultiple = (num1, num2) => {
  let hcf;
  for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      hcf = i;
    }
  }
  let lcm = (num1 * num2) / 2;
  return lcm;
};
console.log(lowestCommonMultiple(30, 60));
console.log(lowestCommonMultiple(6, 8));
