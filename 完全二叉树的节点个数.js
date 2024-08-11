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
var countNodes = function (root) {
  if (!root) return 0
  let level = 0
  let node = root
  while (node) {
    node = node.left
    level++
  }
  if (level === 0) return 1

  let low = 1 << level,
    high = (1 << (level + 1)) - 1
  while (low < high) {
    const mid = low + ((high - low + 1) >> 1)
    if (exist(root, level, mid)) {
      low = mid
    } else {
      high = mid - 1
    }
  }

  return low
}

function exist(root, level, mid) {
  let mask = 1 << (level - 1)
  let node = root
  while (mask > 0 && node) {
    if ((mid & mask) === 0) {
      node = node.left
    } else {
      node = node.right
    }
    mask >>= 1
  }
  return !!node
}
