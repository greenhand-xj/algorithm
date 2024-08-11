/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const dp = new Array(s.length).fill(0)
  let ans = 0

  for (let i = 1, lastPos = 0; i < s.length; i++) {
    if (s[i] === ')') {
      lastPos = i - dp[i - 1] - 1
      if (lastPos >= 0 && s[lastPos] === '(') {
        dp[i] = dp[i - 1] + 2 + (lastPos > 0 ? dp[lastPos - 1] : 0)
      }
      ans = Math.max(ans, dp[i])
    }
  }

  return ans
}
