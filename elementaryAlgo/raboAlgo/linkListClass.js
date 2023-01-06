//linkedList without tail
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  //O(1)
  prepend(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  //O(n)
  append(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  insert(value, index) {
    if (index < 0 || index >= this.size) {
      return "Invalid index";
    }
    if (index === 0) {
      this.prepend(value);
    }
    let node = new Node(value);
    let prev = this.head;
    let ind = 0;
    while (prev) {
      if (ind === index - 1) {
        let next = prev.next;
        prev.next = node;
        node.next = next;
        this.size++;
      }
      prev = prev.next;
      ind++;
    }
  }
  remove(index) {
    if (index < 0 || index >= this.size) {
      return "Invalid index";
    }
    if (this.isEmpty()) {
      return null;
    }
    if (index === 0) {
      let head = this.head;
      this.head = head.next;
      this.size--;
      return head.value;
    }
    let fast = this.head;
    let ind = 0;
    while (fast) {
      if (ind === index - 1) {
        let next = fast.next;
        fast.next = fast.next.next;
        this.size--;
        return next.value;
      }
      fast = fast.next;
      ind++;
    }
  }
  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (value === this.head.value) {
      let remove = this.head;
      this.head = this.head.next;
      this.size--;
      return remove.value;
    }
    let prev = this.head;

    while (prev.next && prev.next.value !== value) {
      prev = prev.next;
    }
    if (prev.next) {
      let remove = prev.next;
      prev.next = remove.next;
      this.size--;
      return remove.value;
    }
    return null;
  }
  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let prev = this.head;
    let ind = 0;
    while (prev) {
      if (prev.value === value) {
        return ind;
      }
      ind++;
      prev = prev.next;
    }
    return -1;
  }
  reverse() {
    let prev = null,
      cur = this.head;
    while (cur) {
      let next = cur.next;
      cur.next = prev;
      //advance prev pointer
      prev = cur;
      //advance curr pointer
      cur = next;
    }
    //set head to be new item in the list
    this.head = prev;
  }
  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let result = "";
      let currentNode = this.head;
      while (currentNode) {
        result += `${currentNode.value} `;
        currentNode = currentNode.next;
      }
      console.log(result);
      return result;
    }
  }
}
let linkedList = new LinkedList();
console.log(linkedList.isEmpty());
console.log(linkedList.getSize());
linkedList.prepend(2);
linkedList.prepend(40);
console.log(linkedList.print());
linkedList.append(100);
console.log(linkedList.print());
console.log(linkedList.insert(700, 1));
console.log(linkedList.print());
console.log(linkedList.remove(0));
console.log(linkedList.print());
console.log(linkedList.removeValue(700));
console.log(linkedList.removeValue(1000));
console.log(linkedList.print());
console.log(linkedList.search(100));
console.log(linkedList.reverse());
console.log(linkedList.print());
class NewNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//linkList with head
class LinkedListNew {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  //prepend
  prepend(value) {
    let node = new NewNode(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      let head = this.head;
      this.head = node;
      node.next = head;
    }
    this.size++;
    return this.head;
  }
  append(value) {
    let node = new NewNode(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      let tail = this.tail;
      this.tail = node;
      tail.next = node;
    }
    this.size++;
    return this.head;
  }
  insert(value, index) {
    if (index < 0 || index >= this.size) return "Invalid index";
    if (index === 0) {
      this.prepend(value);
    }
    if (index === this.size - 1) {
      this.append(value);
    }
    let newNode = new NewNode(value);
    let current = this.head;
    let ind = 0;
    while (current.next) {
      if (ind === index - 1) {
        let node = current.next;
        current.next = newNode;
        newNode.next = node;
        this.size++;
      }
      index++;
      current = current.next;
    }
    return this.head;
  }
  remove(index) {
    if (index < 0 || index >= this.size - 1) return "Invilid index";
    if (index === 0) {
      let head = this.head;
      this.head = head.next;
      this.size--;
      return head;
    }
    let current = this.head;
    let ind = 0;
    while (current) {
      if (ind === index - 1) {
        let next = current.next;
        current.next = next.next;
        this.size--;
        return next;
      }
      ind++;
      current = current.next;
    }
  }
  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    let head = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size--;
      return head.value;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return head;
  }
  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += `${current.value} `;
      current = current.next;
    }
    return result;
  }
}
let newLinkedList = new LinkedListNew();
newLinkedList.prepend(2);
newLinkedList.prepend(400);
console.log(newLinkedList);
console.log(newLinkedList.isEmpty());
console.log(newLinkedList.print());
console.log(newLinkedList.append(90));
console.log(newLinkedList.print());
console.log(newLinkedList.insert(600, 1));
console.log(newLinkedList.insert(700, 3));
console.log(newLinkedList.removeFromEnd(4));
console.log(newLinkedList);
console.log(newLinkedList.print());
