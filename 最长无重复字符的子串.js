/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length
  const map = new Array(256).fill(-1)
  let ans = 0
  for (let l = 0, r = 0; r < s.length; r++) {
    l = Math.max(l, map[s[r].charCodeAt(0)] + 1)
    map[s[r].charCodeAt(0)] = r
    ans = Math.max(ans, r - l + 1)
  }
  return ans
}
