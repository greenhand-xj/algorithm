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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return []
  const ans = []
  const q = [root]
  let rtl = false
  while (q.length) {
    const len = q.length
    const level = new Array(len)
    for (let i = 0; i < len; i++) {
      const node = q.shift()
      if (rtl) {
        level[len - 1 - i] = node.val
      } else {
        level[i] = node.val
      }
      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
    ans.push(level)
    rtl = !rtl
  }
  return ans
}
