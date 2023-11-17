class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  deleteFromTail() {
    if (!this.tail) {
      return;
    }
  
    if (!this.head) {
      this.head = null;
      this.tail = null;
      return;
    }
  
    // Caso especial: Si solo hay un nodo en la lista
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }
  
    let current = this.head;
  
    // Caso general: Buscar el penúltimo nodo
    while (current.next !== this.tail) {
      current = current.next;
    }
  
    current.next = null;
    this.tail = current;
  }
  
}

module.exports = { LinkedList };