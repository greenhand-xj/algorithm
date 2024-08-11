/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  const visited = new Map()
  const dfs = (node) => {
    if (!node) return null
    const newNode = new Node(node.val, [])
    visited.set(node, newNode)
    for (let neighbor of node.neighbors) {
      if (!visited.has(neighbor)) {
        newNode.neighbors.push(dfs(neighbor))
      } else {
        newNode.neighbors.push(visited.get(neighbor))
      }
    }
    return node
  }
  return dfs(node)
}
