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
var sumNumbers = function (root) {
  if (!root) return 0
  return preOrder(root, 0)
}

function preOrder(root, sum) {
  if (!root) return 0
  sum = sum * 10 + root.val
  if (!root.left && !root.right) return sum
  return preOrder(root.left, sum) + preOrder(root.right, sum)
}
