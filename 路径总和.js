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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  const traverse = (root, sum) => {
    if (!root) return false
    if (!root.left && !root.right) {
      return sum + root.val === targetSum
    }
    return (
      traverse(root.left, sum + root.val) ||
      traverse(root.right, sum + root.val)
    )
  }
  return traverse(root, 0)
}
