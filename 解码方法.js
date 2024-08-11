/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const n = s.length
  const dp = new Array(n + 1).fill(-1)
  // 为什么赋值为1呢？因为只有一种解码方式，即只有一个字符，即只有一种方案
  dp[n] = 1
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === '0') {
      dp[i] = 0
    } else {
      dp[i] = dp[i + 1]
      if (i + 1 < s.length && Number(s[i]) * 10 + Number(s[i + 1]) <= 26) {
        dp[i] += dp[i + 2]
      }
    }
  }
  // 为什么返回dp[0]呢？因为dp[0]表示s的第一个字符的解码方式
  console.log(dp)
  return dp[0]
}
numDecodings('226')
