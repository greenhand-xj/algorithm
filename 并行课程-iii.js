/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number[]} time
 * @return {number}
 */
var minimumTime = function (n, relations, time) {
  const graph = new Array(n + 1).fill(0).map(() => [])
  const indegree = new Array(n + 1).fill(0)
  for (const [a, b] of relations) {
    graph[a].push(b)
    indegree[b]++
  }
  const queue = []
  for (let i = 1; i <= n; i++) {
    if (indegree[i] === 0) queue.push(i)
  }
  const cost = new Array(n + 1).fill(0)
  let ans = 0
  while (queue.length) {
    const cur = queue.shift()
    cost[cur] += time[cur - 1]
    for (const next of graph[cur]) {
      cost[next] = Math.max(cost[next], cost[cur])
      if (--indegree[next] === 0) queue.push(next)
    }
    ans = Math.max(ans, cost[cur])
  }
  return ans
}
