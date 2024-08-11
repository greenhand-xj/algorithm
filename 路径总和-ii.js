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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const ans = []
  dfs(root, targetSum, [])

  function dfs(node, targetSum, path) {
    if (!node) return null
    path.push(node.val)
    targetSum -= node.val
    if (targetSum === 0 && !node.left && !node.right) {
      ans.push([...path])
    } else {
      dfs(node.left, targetSum, path)
      path.pop()
      dfs(node.right, targetSum, path)
      path.pop()
    }
  }
  return ans
}
