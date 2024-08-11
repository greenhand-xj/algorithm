/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root
  const d = new Node()
  let cur = root
  while (cur) {
    let prev = d
    while (cur) {
      if (cur.left) {
        prev.next = cur.left
        prev = prev.next
      }
      if (cur.right) {
        prev.next = cur.right
        prev = prev.next
      }
      cur = cur.next
    }
    cur = d.next
    d.next = null
  }

  return root
}
