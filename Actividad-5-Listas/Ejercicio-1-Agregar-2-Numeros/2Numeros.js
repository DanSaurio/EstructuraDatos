class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function Agg2(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;
  
    while (l1 || l2) {
      let sum = carry;
  
      if (l1) {
        sum += l1.val;
        l1 = l1.next;
      }
  
      if (l2) {
        sum += l2.val;
        l2 = l2.next;
      }
  
      carry = Math.floor(sum / 10);
      current.next = new ListNode(sum % 10);
      current = current.next;
    }
  
    if (carry > 0) {
      current.next = new ListNode(carry);
    }
  
    return dummy.next;
  }
module.exports = {Agg2,ListNode};