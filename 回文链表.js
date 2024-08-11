/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let slow = head,
    fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  let prev = null,
    curr = slow
  while (curr) {
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  while (prev) {
    if (prev.val !== head.val) return false
    prev = prev.next
    head = head.next
  }
  return true
}
