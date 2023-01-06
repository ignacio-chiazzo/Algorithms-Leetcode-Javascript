const permutations = (array) => {
  if (array.length === 0) return [[]];
  let firstElem = array[0];
  let rest = array.slice(1);
  let permutationsWithoutFirst = permutations(rest);
  let allPermutation = [];
  permutationsWithoutFirst.forEach((perm) => {
    //inserting firstElem elements in all possible positions
    for (let i = 0; i <= perm.length; i++) {
      let permutationWithFirstElem = [
        ...perm.slice(0, i),
        firstElem,
        ...perm.slice(i),
      ];
      allPermutation.push(permutationWithFirstElem);
    }
  });
  return allPermutation;
};
console.log(permutations(["a", "b", "c"]));
//Time: O(n!)
//Space: O(n^2)
