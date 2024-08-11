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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let ans = 0
  const inOrder = (root) => {
    if (root === null) return
    inOrder(root.left)
    if (--k === 0) {
      ans = root.val
    }
    inOrder(root.right)
  }
  inOrder(root)
  return ans
}
