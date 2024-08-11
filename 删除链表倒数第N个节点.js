/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head)
  dummy.next = head
  let first = dummy
  let slow = dummy
  while (n-- > 0) {
    first = first.next
  }
  while (first.next) {
    first = first.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return dummy.next
}
