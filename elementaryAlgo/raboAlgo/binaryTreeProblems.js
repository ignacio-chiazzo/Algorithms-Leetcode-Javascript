class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");
const f = new Node("F");
a.right = b;
a.left = c;
b.right = d;
b.left = e;
c.right = f;
console.log(a);

//printDepthFirst iterative
const printDepthFirst = (root) => {
  if (root === null) return [];
  let result = [];
  let stack = [root];
  while (stack.length > 0) {
    let element = stack.pop();
    result.push(element.value);
    if (element.left) stack.push(element.left);
    if (element.right) stack.push(element.right);
  }
  return result;
};
console.log(printDepthFirst(a));

//printDepthRecursive
const printDepthFirstRecursive = (root) => {
  if (root === null) return [];
  const leftValue = printDepthFirstRecursive(root.left);
  let rightValue = printDepthFirstRecursive(root.right);
  return [root.value, ...rightValue, ...leftValue];
};
console.log(printDepthFirstRecursive(a));

//printBreadthFirst iterative
const printBreadthFirst = (root) => {
  let result = [];
  if (root === null) return [];
  let queue = [root];
  while (queue.length > 0) {
    let element = queue.shift();
    result.push(element.value);
    if (element.right) queue.push(element.right);
    if (element.left) queue.push(element.left);
  }
  return result;
};
console.log(printBreadthFirst(a));

//tree Includes Recursive
const treeIncludesRecursive = (root, target) => {
  if (root === null) return false;
  if (root.value === target) return true;
  let left = treeIncludesRecursive(root.left, target);
  let right = treeIncludesRecursive(root.right, target);
  return left === true || right === true ? true : false;
};
console.log(treeIncludesRecursive(a, "A"));
//tree includes iterative
const treeIncludes = (root, target) => {
  if (root === null) return false;
  let stack = [root];
  while (stack.length > 0) {
    let element = stack.pop();
    if (element.value === target) return true;
    if (element.left) stack.push(element.left);
    if (element.right) stack.push(element.right);
  }
  return false;
};
console.log(treeIncludes(a, "A"));
console.log(treeIncludes(b, "B"));
console.log(treeIncludes(c, "C"));
console.log(treeIncludes("", "D"));
console.log(treeIncludes(null, "E"));
console.log(treeIncludes(a, "T"));

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
one.right = two;
one.left = three;
two.right = four;
two.left = five;
three.right = six;
//tree sum recursively
const treeSumRecursive = (root) => {
  if (root === null) return 0;
  let rightSum = treeSumRecursive(root.right);
  let leftSum = treeSumRecursive(root.left);
  return root.value + rightSum + leftSum;
};
console.log(treeSumRecursive(one));
//tree sum iteratively using breadth-first
const treeSum = (root) => {
  let sum = 0;
  if (root === null) return 0;
  let queue = [root];
  while (queue.length > 0) {
    let element = queue.shift();
    sum += element.value;
    if (element.left) stack.push(element.left);
    if (element.right) stack.push(element.right);
  }
  return sum;
};
console.log(treeSumRecursive(one));

//minimum value recursion
const treeMinValueRecursive = (root) => {
  if (root === null) return Infinity;
  let rootValue = root.value;
  let leftValue = treeMinValueRecursive(root.left);
  let rightValue = treeMinValueRecursive(root.right);
  return Math.min(rootValue, leftValue, rightValue);
};
console.log(treeMinValueRecursive(one));

//minimum value iterative
const treeMinValueIterative = (root) => {
  let min = Infinity;
  if (root === null) return Infinity;
  let queue = [root];
  while (queue.length > 0) {
    let element = queue.shift();
    min = Math.min(min, element.value);
    if (element.right) queue.push(element.right);
    if (element.left) queue.push(element.left);
  }
  return min;
};
console.log(treeMinValueIterative(one));

//tree max value Iterative
const treeMaxValueIterative = (root) => {
  let max = -Infinity;
  if (root === null) return -Infinity;

  let queue = [root];
  while (queue.length > 0) {
    let element = queue.shift();
    max = Math.max(max, element.value);
    if (element.right) queue.push(element.right);
    if (element.left) queue.push(element.left);
  }
  return max;
};
console.log(treeMaxValueIterative(one));
console.log(treeMaxValueIterative(null));
//tree max value recursively
const treeMaxValueRecursive = (root) => {
  let max = -Infinity;
  if (root === null) return -Infinity;
  let rootValue = root.value;
  max = Math.max(max, rootValue);
  let leftValue = treeMaxValueRecursive(root.left);
  let rightValue = treeMaxValueRecursive(root.right);
  return Math.max(max, rightValue, leftValue);
};
console.log(treeMaxValueRecursive(one));

//max path tree problem
const maxPath = (root) => {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.value;
  let maxLeftOrRight = Math.max(maxPath(root.left), maxPath(root.right));
  return root.value + maxLeftOrRight;
};
console.log(maxPath(one));
