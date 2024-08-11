var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length
  const map = new Array(256).fill(-1)
  let ans = 0,
    n = s.length
  for (let l = 0, r = 0; r < n; r++) {
    const num = s[r].charCodeAt(0)
    l = Math.max(map[num] + 1, l)
    map[num] = r
    ans = Math.max(ans, r - l + 1)
  }
  return ans
}
console.log(lengthOfLongestSubstring('abcabcbb'))
