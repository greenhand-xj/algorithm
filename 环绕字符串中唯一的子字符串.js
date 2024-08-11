/**
 * @param {string} s
 * @return {number}
 */
var findSubstringInWraproundString = function (s) {
  const dp = new Array(26).fill(0),
    base = 'a'.charCodeAt()
  dp[s[0].charCodeAt() - base] = 1
  for (let i = 1, len = 1, cur, pre; i < s.length; i++) {
    cur = s[i].charCodeAt() - base
    pre = s[i - 1].charCodeAt() - base
    if ((pre === 25 && cur === 0) || pre + 1 === cur) {
      len++
    } else {
      len = 1
    }
    dp[cur] = Math.max(dp[cur], len)
  }
  return dp.reduce((a, b) => a + b)
}
