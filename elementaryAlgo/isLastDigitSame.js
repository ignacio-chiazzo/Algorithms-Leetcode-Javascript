const isLastDigitSame = (num1, num2, num3) => {
  const mod1 = num1 % 10;
  const mod2 = num2 % 10;
  const mod3 = num3 % 10;
  if (mod1 === mod2 && mod2 === mod3) {
    return true;
  }
  return false;
};
console.log(isLastDigitSame(33, 33, 53));
console.log(isLastDigitSame(33, 33, 53));
console.log(isLastDigitSame(33, 32, 53));
