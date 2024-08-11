/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const n = s.length
  let ans = 0

  for (let i = 0; i < 2 * n - 1; i++) {
    let l = Math.floor(i / 2),
      r = l + (i % 2)
    while (l >= 0 && r < n && s[l] === s[r]) {
      ans++, l--, r++
    }
  }

  return ans
}
var countSubstrings = function (s) {
  const n = s.length
  const dp = new Array(n).fill().map(() => new Array(n).fill(false))

  let ans = 0
  for (let i = 0; i < n; i++) (dp[i][i] = true), ans++
  for (let j = 1; j < n; j++) {
    for (let i = 0; i < j; i++) {
      const isCharEqual = s[i] === s[j]
      if (j - i === 1) dp[i][j] = isCharEqual
      else dp[i][j] = isCharEqual && dp[i + 1][j - 1]
      if (dp[i][j]) ans++
    }
  }

  return ans
}
