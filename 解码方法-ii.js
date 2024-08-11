/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const dp = new Array(s.length).fill(-1)
  return f2(s, 0, dp)
}
const MOD = 1e9 + 7
function f2(s, i, dp) {
  if (i === s.length) return 1
  if (s[i] === '0') return 0
  if (dp[i] !== -1) return dp[i]
  let ans = f2(s, i + 1, dp) * (s[i] === '*' ? 9 : 1)
  if (i + 1 < s.length) {
    if (s[i] !== '*') {
      if (s[i + 1] !== '*') {
        if ((s[i] - '0') * 10 + (s[i + 1] - '0') <= 26) {
          ans += f2(s, i + 2, dp)
        }
      } else {
        if (s[i] === '1') ans += f2(s, i + 2, dp) * 9
        if (s[i] === '2') ans += f2(s, i + 2, dp) * 6
      }
    } else {
      if (s[i + 1] !== '*') {
        if (s[i + 1] <= '6') ans += f2(s, i + 2, dp) * 2
        else ans += f2(s, i + 2, dp)
      } else {
        ans += f2(s, i + 2, dp) * 15
      }
    }
  }
  return (dp[i] = ans % MOD)
}
