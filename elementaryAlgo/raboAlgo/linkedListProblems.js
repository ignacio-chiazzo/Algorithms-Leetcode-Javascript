class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
a.next = b;
b.next = c;
c.next = d;

//print to console iteratively
const printLinkedList = (head) => {
  let current = head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
};
//print to console recursively
console.log(printLinkedList(a));
const printLinkedListRecursive = (head) => {
  if (head === null) return;
  console.log(head.value);
  printLinkedListRecursive(head.next);
};
console.log(printLinkedListRecursive(a));

//linked list values iteratively
const linkedListValue = (head) => {
  let values = [];
  let current = head;
  while (current !== null) {
    values.push(current.value);
    current = current.next;
  }
  return values;
};
console.log(linkedListValue(a));

//linked list values recursively
const linkedListRecursive = (head) => {
  let results = [];
  results.push(head.value);
  fillCallList(head.next, results);
  return results;
};
function fillCallList(head, results) {
  if (head === null) return;
  results.push(head.value);
  fillCallList(head.next, results);
}
console.log(linkedListRecursive(a));
const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);

one.next = two;
two.next = three;
three.next = four;

//sumList
const sumList = (head) => {
  let total = 0;
  let current = head;
  while (current) {
    total += current.value;
    current = current.next;
  }
  return total;
};
console.log(sumList(one));

//sumList
const sumListRecursive = (head) => {
  if (head === null) return 0;
  return head.value + sumListRecursive(head.next);
};

console.log(sumListRecursive(one));

// target node
const targetNode = (head, val) => {
  let current = head;
  while (current) {
    if (current.value === val) {
      return true;
    }
    current = current.next;
  }
  return false;
};
console.log(targetNode(a, "D"));
console.log(targetNode(a, "B"));
console.log(targetNode(a, ""));

//target node recursively
const targetNodeRecursive = (head, val) => {
  if (head === null) return false;
  if (head.value === val) return true;
  return targetNodeRecursive(head.next, val);
};
console.log(targetNodeRecursive(a, "B"));
console.log(targetNodeRecursive(a, "B"));
console.log(targetNodeRecursive(a, ""));

const getValue = (head, index) => {
  let current = head;
  let ind = 0;
  while (current) {
    if (ind === index) {
      return current.value;
    }

    ind++;
    current = current.next;
  }
  return null;
};
console.log(getValue(a, 1));
console.log(getValue(a, 2));
console.log(getValue(a, 3));
console.log(getValue(a, 4));

const getValueRecursive = (head, index) => {
  if (head === null) return null;
  if (index === 0) return head.value;
  return getValueRecursive(head.next, index - 1);
};
console.log(getValueRecursive(a, 1));
console.log(getValueRecursive(a, 2));
console.log(getValueRecursive(a, 3));
console.log(getValueRecursive(a, 4));

const reverseList = (head) => {
  let current = head;
  let prev = null;
  while (current) {
    let next = current.next;
    current.next = prev;

    prev = current;
    current = next;
  }
  return prev;
};

console.log(reverseList(a));

const zippList = (head1, head2) => {
  let tail = head1;
  let current1 = head1.next;
  let current2 = head2;
  let count = 0;
  while (current1 !== null && current2 !== null) {
    //when count is even add current2 to tail
    if (count % 2 === 0) {
      tail.next = current2;
      //shift current2 current node to the next
      current2 = current2.next;
    } else {
      //else add current1 to tail
      tail.next = current1;
      //shift current1 current node to the next
      current1 = current1.next;
    }
    //shift tail to the next iteration
    tail = tail.next;
    count++;
  }
  //if the while loop finishes and there is still
  //element in either list then append them to the tail
  if (current1 !== null) {
    tail.next = current1;
  }
  if (current2 !== null) {
    tail.next = current2;
  }
  //return the entry head
  return head1;
};
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
five.next = six;
six.next = seven;
console.log(one);
console.log(five);
console.log(zippList(one, five));
