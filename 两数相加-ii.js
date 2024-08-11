/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode()
  let cur = dummy,
    carry = 0
  l1 = reverse(l1)
  l2 = reverse(l2)
  while (l1 || l2) {
    const x = l1 ? l1.val : 0
    const y = l2 ? l2.val : 0
    const sum = x + y + carry
    carry = sum >= 10 ? 1 : 0
    cur.next = new ListNode(sum % 10)
    cur = cur.next
    l1 = l1 ? l1.next : l1
    l2 = l2 ? l2.next : l2
  }
  if (carry > 0) {
    cur.next = new ListNode(carry)
  }
  return reverse(dummy.next)
}

function reverse(head) {
  let prev = null,
    curr = head
  while (curr !== null) {
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
}
