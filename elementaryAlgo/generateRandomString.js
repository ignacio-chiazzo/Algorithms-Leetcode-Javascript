//Example 1: Generate Random Strings
const generateRandomString = (len) => {
  let word = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < len; i++) {
    word += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return word;
};
console.log(generateRandomString(7));
//Example 2: Generate Random Strings Using Built-in Methods
const generateRandomStr = () => {
  return Math.random().toString(36).substring(2, 7);
};
console.log(generateRandomStr());
console.log(String(36));
