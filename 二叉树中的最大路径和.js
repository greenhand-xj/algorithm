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
var maxPathSum = function (root) {
  let max = -Infinity
  const dfs = (root) => {
    if (!root) return 0
    let left = Math.max(dfs(root.left), 0)
    let right = Math.max(dfs(root.right), 0)
    max = Math.max(max, left + right + root.val)
    return Math.max(left, right) + root.val
  }
  dfs(root)
  return max
}
