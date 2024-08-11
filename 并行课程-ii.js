/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number} k
 * @return {number}
 */
var minNumberOfSemesters = function (n, relations, k) {
  const graph = new Array(n + 1).fill(0).map(() => [])
  const indegree = new Array(n + 1).fill(0)
  for (const [a, b] of relations) {
    graph[a].push(b)
    indegree[b]++
  }
  const q = []
  for (let i = 1; i <= n; i++) {
    if (indegree[i] === 0) {
      q.push(i)
    }
  }
  let semester = 0
  while (q.length) {
    semester++
    const size = q.length
    // 一个学期最多只能选k门课程
    for (let i = 1; i <= k && i <= size; i++) {
      const cur = q.shift()
      for (const c of graph[cur]) {
        if (--indegree[c] === 0) {
          q.push(c)
        }
      }
    }
  }
  return semester
}
minNumberOfSemesters(
  5,
  [
    [2, 1],
    [3, 1],
    [4, 1],
    [1, 5],
  ],
  2
)
