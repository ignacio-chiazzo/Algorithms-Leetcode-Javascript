const combinations = (array) => {
  if (array.length === 0) return [[]];
  let firstElem = array[0];
  let withFirst = array.slice(1);
  let combinationWithFirstElem = [];
  let combinationWithoutFirstElem = combinations(withFirst);
  combinationWithoutFirstElem.forEach((arr) => {
    let WithFirstElem = [...arr, firstElem];
    combinationWithFirstElem.push(WithFirstElem);
  });
  return [...combinationWithFirstElem, ...combinationWithoutFirstElem];
};
console.log(combinations(["a", "b", "c"]));
console.log(combinations(["a", "b"]));
//Time : O(2^n)
//Space : O(n * n)
