/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}
class BSTIterator {
  private stack: TreeNode[] = []
  private current: TreeNode | null = null
  constructor(root: TreeNode | null) {
    this.current = root
  }

  next(): number {
    while (this.current) {
      this.stack.push(this.current)
      this.current = this.current.left
    }
    this.current = this.stack.pop()!
    const ans = this.current.val
    this.current = this.current.right
    return ans
  }

  hasNext(): boolean {
    return this.stack.length > 0 || this.current !== null
  }
}

/**
* Your BSTIterator object will be instantiated and called as such:
* var obj = new BSTIterator(root)
* var param_1 = obj.next()
* var param_2 = obj.hasNext()
*/