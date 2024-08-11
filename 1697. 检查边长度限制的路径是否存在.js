/**
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */
const father = new Array(n).fill(0).map((_, i) => i)
var distanceLimitedPathsExist = function (n, edgeList, queries) {
  const m = edgeList.length
  const k = queries.length
  edgeList.sort((a, b) => a[2] - b[2])
  queries.forEach((q, i) => {
    q.push(i)
  })
  queries.sort((a, b) => a[2] - b[2])
  let ans = new Array(k).fill(false)
  for (let i = 0, j = 0; i < k; i++) {
    while (j < m && edgeList[j][2] < queries[i][2]) {
      union(edgeList[j][0], edgeList[j][1])
      j++
    }
    ans[queries[i][3]] = isSameSet(queries[i][0], queries[i][1])
  }
  return ans
}

function find(i) {
  if (i !== father[i]) {
    father[i] = find(father[i])
  }
  return father[i]
}
function union(x, y) {
  father[find(x)] = find(y)
}
function isSameSet(x, y) {
  return find(x) === find(y)
}
