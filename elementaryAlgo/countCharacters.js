const countCharacters = (str, letter) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    //console.log(str[i]);
    if (str.charAt(i) === letter) {
      count++;
    }
  }
  return count;
};
console.log(countCharacters("hello world", "h"));
