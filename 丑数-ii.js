/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const dp = new Array(n + 1)
  dp[1] = 1
  for (let i = 2, a, b, c, i2 = 1, i3 = 1, i5 = 1, cur; i <= n; i++) {
    a = dp[i2] * 2
    b = dp[i3] * 3
    c = dp[i5] * 5
    cur = Math.min(a, b, c)
    if (cur === a) i2++
    if (cur === b) i3++
    if (cur === c) i5++
    dp[i] = cur
  }
  return dp[n]
}
