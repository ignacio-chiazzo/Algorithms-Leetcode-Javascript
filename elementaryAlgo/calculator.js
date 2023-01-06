//simple calculation with if else statements
const calculatorWithIfElse = (operator, num1, num2) => {
  let result;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else {
    result = num1 / num2;
  }
  return result;
};
console.log(calculatorWithIfElse("*", 10, 10));
const calculatorWithSwitch = (operator, num1, num2) => {
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }
  return result;
};
console.log(calculatorWithSwitch("+", 10, 10));
