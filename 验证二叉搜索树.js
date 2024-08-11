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
 * @return {boolean}
 */
var isValidBST = function (root) {
  let pre = null
  function inOrder(root) {
    if (root === null) return
    inOrder(root.left)
    if (pre !== null && pre.val >= root.val) return false
    pre = root
    inOrder(root.right)
    return true
  }
  inOrder(root)
  return true
}
