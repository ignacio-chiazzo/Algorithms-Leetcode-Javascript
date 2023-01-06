const a = [1, 2, 3, 4, 5];
const b = [4, 0, 0, 0, 8];

const startPositionFor1stArray = a.length / 2 - 1;
const startPositionFor2ndArray = b.length / 2 - 1;
//console.log(startPositionFor1stArray, startPositionFor2ndArray);
console.log(a.splice(startPositionFor1stArray));
a.splice(
  startPositionFor1stArray,
  3,
  ...b.slice(startPositionFor2ndArray, startPositionFor2ndArray + 3)
);

const books = [
  { name: "Warcross", author: "Marie Lu" },
  { name: "The Hunger Games", author: "Suzanne Collins" },
  { name: "Harry Potter", author: "Joanne Rowling" },
];
const sortedObj = books.sort((a, b) => {
  let book1 = a.author.split(" ")[1];
  let book2 = b.author.split(" ")[1];
  return book1 < book2 ? 1 : -1;
});
console.log(sortedObj);
