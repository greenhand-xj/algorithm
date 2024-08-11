/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (root === null) return null
  let cur = root
  while (cur !== null) {
    if (cur.left !== null) {
      let pre = cur.left
      while (pre.right !== null) {
        pre = pre.right
      }
      pre.right = cur.right
      cur.right = cur.left
      cur.left = null
    }
    cur = cur.right
  }
}
