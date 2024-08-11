/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let ans = []
  function backtrack(startIndex, path) {
    if (path.length === k) {
      ans.push([...path])
      return
    }
    for (let i = startIndex; i <= n; i++) {
      path.push(i)
      backtrack(i + 1, path)
      path.pop()
    }
  }
  backtrack(1, [])
  return ans
}
