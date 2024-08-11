/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (!head || !head.next) return head
  let smallDummy = new ListNode()
  let bigDummy = new ListNode()
  let small = smallDummy
  let big = bigDummy
  while (head) {
    if (head.val < x) {
      small.next = head
      small = small.next
    } else {
      big.next = head
      big = big.next
    }
    head = head.next
  }
  big.next = null
  small.next = bigDummy.next
  return smallDummy.next
}
