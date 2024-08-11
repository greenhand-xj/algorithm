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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (root === null) return []
  const ans = []
  function preorder(root, depth) {
    if (root === null) return
    if (depth === ans.length) ans.push(root.val)
    preorder(root.right, depth + 1)
    preorder(root.left, depth + 1)
  }
  preorder(root, 0)
  return ans
}
