/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function (words) {
  const indegree = new Array(26).fill(-1)
  const graph = new Array(26).fill(0).map(() => [])
  const n = words.length
  const base = 'a'.charCodeAt()
  // build indegree -1 represent no edge, 0 represent only one edge
  for (const word of words) {
    for (const c of word) {
      indegree[c.charCodeAt() - base] = 0
    }
  }
  for (let i = 0, j, len; i < n - 1; i++) {
    const [cur, next] = [words[i], words[i + 1]]
    j = 0
    len = Math.min(cur.length, next.length)
    for (; j < len; j++) {
      if (cur[j] !== next[j]) {
        indegree[next[j].charCodeAt() - base]++
        graph[cur[j].charCodeAt() - base].push(next[j].charCodeAt() - base)
        break
      }
    }
    if (j < cur.length && j === next.length) return ''
  }

  const queue = []
  const ans = []
  let kinds = 0
  for (let i = 0; i < 26; i++) {
    if (indegree[i] === 0) queue.push(i)
    if (indegree[i] !== -1) kinds++
  }

  while (queue.length) {
    const top = queue.shift()
    ans.push(String.fromCharCode(top + base))
    for (const next of graph[top]) {
      indegree[next]--
      if (indegree[next] === 0) queue.push(next)
    }
  }

  return ans.length === kinds ? ans.join('') : ''
}
