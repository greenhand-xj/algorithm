// 定义二叉树节点
class TreeNode {
  constructor(val, left, right) {
    this.val = val
    this.left = left || null
    this.right = right || null
  }
}

// 翻转深度 n 以下的所有节点
function invertTreeAtDepth(root, depth, targetDepth) {
  if (root === null) {
    return
  }

  // 到达目标深度时，交换左右子树
  if (depth >= targetDepth) {
    const temp = root.left
    root.left = root.right
    root.right = temp
  }

  // 递归翻转深度 n 以下的所有节点
  invertTreeAtDepth(root.left, depth + 1, targetDepth)
  invertTreeAtDepth(root.right, depth + 1, targetDepth)
}

// 创建一个二叉树
const tree = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(
    7,
    new TreeNode(6),
    new TreeNode(9, new TreeNode(8), new TreeNode(10))
  )
)

// 翻转深度 2 以下的所有节点
invertTreeAtDepth(tree, 1, 1)

// 打印翻转后的二叉树
console.log(tree)
