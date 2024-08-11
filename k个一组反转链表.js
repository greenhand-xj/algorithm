/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (head === null || head.next === null || k < 2) return head
  const dummy = new ListNode(-1)
  dummy.next = head
  let prev = dummy,
    first = head,
    last = head
  while (first !== null) {
    for (let i = 0; i < k - 1; i++) {
      last = last.next
      if (last === null) return dummy.next
    }
    let next = last.next
    last.next = null
    prev.next = reverse(first)
    first.next = next
    prev = first
    first = next
    last = first
  }
  return dummy.next
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
