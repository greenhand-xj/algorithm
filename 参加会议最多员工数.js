/**
 * @param {number[]} favorite
 * @return {number}
 */
var maximumInvitations = function (favorite) {
  const n = favorite.length
  const indegree = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    indegree[favorite[i]]++
  }
  const q = []
  for (let i = 0; i < n; i++) {
    if (indegree[i] == 0) q.push(i)
  }
  const deep = new Array(n).fill(0)
  while (q.length) {
    const cur = q.shift()
    const next = favorite[cur]
    deep[next] = Math.max(deep[next], deep[cur] + 1)
    if (--indegree[next] == 0) q.push(next)
  }
  let smallRing = 0
  let bigRing = 0
  for (let i = 0; i < n; i++) {
    if (indegree[i] > 0) {
      let ringSize = 1
      indegree[i] = 0
      for (let j = favorite[i]; j !== i; j = favorite[j]) {
        indegree[j] = 0
        ringSize++
      }
      if (ringSize === 2) {
        smallRing += 2 + deep[i] + deep[favorite[i]]
      } else {
        bigRing = Math.max(bigRing, ringSize)
      }
    }
  }
  return Math.max(smallRing, bigRing)
}
