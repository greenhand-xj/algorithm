/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length
  const map = {}
  let ans = 0
  for (let l = 0, r = 0; r < s.length; r++) {
    if (map[s[r]] !== undefined) {
      l = Math.max(map[s[r]] + 1, l)
    }
    map[s[r]] = r
    ans = Math.max(ans, r - l + 1)
  }
  return ans
}
// abcabcbb

lengthOfLongestSubstring('abba')
