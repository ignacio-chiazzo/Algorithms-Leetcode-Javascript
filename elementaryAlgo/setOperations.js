//intersection of a sets
const intersectionOfSet = (setA, setB) => {
  let intersection = new Set();
  for (let i of setA) {
    if (setB.has(i)) {
      intersection.add(i);
    }
  }
  return intersection;
};
console.log(
  intersectionOfSet(new Set([1, 2, 5, 7, 8]), new Set([2, 4, 6, 8, 9]))
);
//union of sets
const unionOfSet = (setA, setB) => {
  let union = new Set(setA);
  for (let i of setB) {
    union.add(i);
  }
  return union;
};
console.log(unionOfSet(new Set([1, 2, 5, 7, 8]), new Set([2, 4, 6, 8, 9])));
//difference of setA and setB
const differenceOfSet = (setA, setB) => {
     for(let i of setB){
        if(setA.has(i)){
            setA.delete(i)
        }
     }
     return setA
}
console.log(differenceOfSet(new Set([1, 2, 5, 7, 8]), new Set([2, 4, 6, 8, 9])));
//subse of setA and setB
const subSet = (setA, setB) => {
    for(let i of setB){
        if(!setA.has(i)){
            return false
        }
    }
    return true
}
console.log(subSet(new Set([1, 2, 5, 7, 8]), new Set([2, 4, 6, 8, 9])))