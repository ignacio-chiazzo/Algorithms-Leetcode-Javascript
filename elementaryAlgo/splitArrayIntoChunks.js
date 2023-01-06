const splitArrayIntoChunks = (array, chunk) => {
  let result = [];
  for (let i = 0; i < array.length; i += chunk) {
    let temp = array.slice(i, i + chunk);
    result.push(temp);
  }
  return result;
};
console.log(splitArrayIntoChunks([7, 8, 8, 9, 10, 11, 12, 13, 14, 15], 3));
const splitArrayIntoChunk = (array, chunk) => {
  let result = [];
  while (array.length > 0) {
    let temp = array.splice(0, chunk);
    result.push(temp);
  }
  return result;
};
console.log(splitArrayIntoChunk([7, 8, 8, 9, 10, 11, 12, 13, 14, 15], 2));
