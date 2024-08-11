/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null
  let curr = head
  while (curr) {
    const next = curr.next
    curr.next = new Node(curr.val)
    curr.next.next = next
    curr = next
  }
  curr = head
  while (curr) {
    if (curr.random) {
      // curr.next.random指向curr.random.next
      curr.next.random = curr.random ? curr.random.next : null // 防止curr.random为null
    }
    curr = curr.next.next
  }
  const newHead = head.next
  let oldCurr = head
  let newCurr = newHead
  while (oldCurr) {
    oldCurr.next = oldCurr.next.next
    newCurr.next = newCurr.next ? newCurr.next.next : null
    oldCurr = oldCurr.next
    newCurr = newCurr.next
  }
  return newHead
}
