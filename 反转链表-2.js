/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  const dummy = new ListNode(-1)
  dummy.next = head
  let prev = dummy
  for (let i = 0; i < left - 1; i++) {
    prev = prev.next
  }
  let start = prev.next
  let then = start.next
  for (let i = 0; i < right - left; i++) {
    start.next = then.next
    then.next = prev.next
    prev.next = then
    then = start.next
  }
  return dummy.next
}
