const str = "JavaScript is awesome";
const arrayReverseWords = str
  .split(" ")
  .map((word) => word.split("").reverse().join(""))
  .join(" ");
console.log(arrayReverseWords);
