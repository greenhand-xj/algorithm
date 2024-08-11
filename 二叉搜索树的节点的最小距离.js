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
 * @return {number}
 */
var minDiffInBST = function (root) {
  let ans = Infinity,
    pre = null
  function inOrder(root) {
    if (!root) return
    inOrder(root.left)
    if (pre !== null) {
      ans = Math.min(ans, root.val - pre.val)
    }
    pre = root
    inOrder(root.right)
  }
  inOrder(root)
  return ans
}
