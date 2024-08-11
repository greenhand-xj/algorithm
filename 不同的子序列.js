/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  const n = s.length
  const m = t.length
  const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0))
  for (let i = 0; i <= n; i++) {
    dp[i][0] = 1
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      dp[i][j] = dp[i - 1][j]
      if (s[i - 1] === t[j - 1]) dp[i][j] += dp[i - 1][j - 1]
    }
  }
  return dp[n][m]
}
