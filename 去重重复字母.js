/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  const stack = []
  const map = {}
  const n = s.length
  // 计算每个字母出现的次数,是否已经进栈
  for (const char of s) {
    if (!map[char]) {
      map[char] = { count: 1, isEnter: false }
    } else {
      map[char].count++
    }
  }
  for (let i = 0; i < n; i++) {
    // 如果是字母并且没有进栈，就进栈
    if (!map[s[i]].isEnter) {
      while (
        stack.length &&
        s[i] < stack.at(-1) &&
        map[stack.at(-1)].count > 0
      ) {
        map[stack.pop()].isEnter = false
      }
      stack.push(s[i])
      map[s[i]].isEnter = true
    }
    map[s[i]].count--
  }
  return stack.join('')
}
