/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length <= 1) return s
  const n = s.length
  let ans = s[0]
  const dp = new Array(n).fill().map(() => new Array(n).fill(false))
  for (let i = 0; i < n; i++) dp[i][i] = true
  for (let j = 1; j < n; j++) {
    for (let i = 0; i < j; i++) {
      const isCharEqual = s[i] === s[j]
      if (j - i === 1) dp[i][j] = isCharEqual
      else dp[i][j] = isCharEqual && dp[i + 1][j - 1]
      if (dp[i][j] && j - i + 1 > ans.length) {
        ans = s.slice(i, j + 1)
      }
    }
  }

  return ans
}
