/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const cntT = new Array(60).fill(0)
  let uniqueChars = 0,
    base = 'A'.charCodeAt()
  for (const char of t) {
    const code = char.charCodeAt() - base
    if (cntT[code] === 0) {
      uniqueChars++
    }
    cntT[code]++
  }
  const filteredS = [],
    n = s.length
  for (let i = 0; i < n; i++) {
    const code = char.charCodeAt() - base
    if (cntT[code] > 0) {
      filteredS.push([i, s[i]])
    }
  }
  let left = 0,
    right = 0,
    matchedChars = 0
  const windowCnt = new Array(60).fill(0)
  const ans = [-1, 0, 0]
  while (right < filteredS.length) {
    const [_, rightChar] = filteredS[right]
    const code = rightChar.charCodeAt() - base
    windowCnt[code]++
    if (windowCnt[code] === cntT[code]) {
      matchedChars++
    }
    while (left <= right && matchedChars === uniqueChars) {
      const start = filteredS[left][0]
      const end = filteredS[right][0]
      if (ans[0] === -1 || end - start + 1 < ans[0]) {
        ans[0] = end - start + 1
        ans[1] = start
        ans[2] = end
      }
      const leftChar = filteredS[left][1]
      const code = leftChar.charCodeAt() - base
      windowCnt[code]--
      if (windowCnt[code] < cntT[code]) {
        matchedChars--
      }
      left++
    }
    right++
  }
  return ans[0] === -1 ? '' : s.slice(ans[1], ans[2] + 1)
}
