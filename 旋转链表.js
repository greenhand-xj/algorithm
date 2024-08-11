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
var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) return head
  let len = 0
  let curr = head,
    lastNode = null
  while (curr) {
    len++
    lastNode = curr
    curr = curr.next
  }
  k = k % len
  if (k === 0) return head
  let newTail = head
  for (let i = 0; i < len - k - 1; i++) {
    newTail = newTail.next
  }
  let newHead = newTail.next
  newTail.next = null
  lastNode.next = head
  return newHead
}

function reverse(head) {
  let prev = null
  let curr = head
  while (curr) {
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
}
