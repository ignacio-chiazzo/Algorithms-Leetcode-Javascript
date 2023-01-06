const stringInAnotherStr = (string, str) => {
  if (string.indexOf(str) !== -1) {
    return str;
  }
  return "";
};
console.log(stringInAnotherStr("hello world I love you so much", "lo"));
console.log(stringInAnotherStr("hello world I love you so much", "hi"));
