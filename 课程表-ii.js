/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  let n = numCourses
  // 邻接表
  const graph = Array.from({ length: n }, () => [])
  // 入读表
  const indegree = new Array(n).fill(0)
  for (const [a, b] of prerequisites) {
    graph[b].push(a)
    indegree[a]++
  }
  // 初始化队列
  const queue = []
  for (let i = 0; i < n; ++i) {
    if (indegree[i] === 0) {
      queue.push(i)
    }
  }
  // 拓扑排序
  const ans = []
  while (queue.length) {
    const t = queue.shift()
    ans.push(t)
    for (const to of graph[t]) {
      if (--indegree[to] === 0) {
        queue.push(to)
      }
    }
  }
  return ans.length === n ? ans : []
}

findOrder(4, [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2],
])
