class Node {
  constructor(val) {
      this.val = val;
      this.next = null;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
  }

  append(val) {
      const newNode = new Node(val);
      if (!this.head) {
          this.head = newNode;
      } else {
          let current = this.head;
          while (current.next) {
              current = current.next;
          }
          current.next = newNode;
      }
  }

}

module.exports = LinkedList;
