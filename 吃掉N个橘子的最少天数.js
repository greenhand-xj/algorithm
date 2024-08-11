/**
 * @param {number} n
 * @return {number}
 */
var minDays = function (n) {
  const dp = new Map()
  const dfs = (n) => {
    if (n <= 1) return n
    if (dp.has(n)) return dp.get(n)
    let ans = Math.min(
      (n % 2) + 1 + dfs(Math.floor(n / 2)),
      (n % 3) + 1 + dfs(Math.floor(n / 3))
    )
    dp.set(n, ans)
    return ans
  }
  return dfs(n)
}
