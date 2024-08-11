/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const ans = []
  const dp = new Array(s.length)
    .fill(0)
    .map(() => new Array(s.length).fill(false))
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true
  }
  for (let j = 1; j < s.length; j++) {
    for (let i = 0; i < j; i++) {
      dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1])
    }
  }
  const backtrack = (s, start, path) => {
    if (start === s.length) {
      ans.push([...path])
    }

    for (let i = start; i < s.length; i++) {
      if (dp[start][i]) {
        path.push(s.slice(start, i + 1))
        backtrack(s, i + 1, path)
        path.pop()
      }
    }
  }

  backtrack(s, 0, [])
  return ans
}
