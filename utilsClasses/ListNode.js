class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  static linkenList(arr) {
    if(arr.length === 0)
      return null;
    
    var first = new ListNode(arr[0]);
    var head = first;
    for(var i = 1; i < arr.length; i++) {
      head.next = new ListNode(arr[i]);
      head = head.next;
    }

    return first;
  }

  length() {
    var list = this;
    var size = 0;
    while(list) {
      list = list.next;
      size++;
    }

    return size;
  }
}

module.exports.ListNode = ListNode;