/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function (richer, quiet) {
  const n = quiet.length
  const indegree = new Array(n).fill(0)
  const graph = new Array(n).fill(0).map(() => [])
  // build graph and indegree
  for (const [a, b] of richer) {
    graph[a].push(b)
    indegree[b]++
  }
  const queue = []
  for (let i = 0; i < n; i++) {
    if (indegree[i] == 0) {
      queue.push(i)
    }
  }
  const ans = Array.from({ length: n }, (_, i) => i)

  while (queue.length) {
    const cur = queue.shift()
    for (const neighbor of graph[cur]) {
      if (quiet[ans[neighbor]] > quiet[ans[cur]]) {
        ans[neighbor] = ans[cur]
      }
      if (--indegree[neighbor] == 0) {
        queue.push(neighbor)
      }
    }
  }
  return ans
}
