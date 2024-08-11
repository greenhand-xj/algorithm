/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let preSign = 1,
    num = 0
  let ans = 0
  const stack = []
  let base = '0'.charCodeAt()
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= '0' && s[i] <= '9') {
      num = num * 10 + (s[i].charCodeAt() - base)
    } else if (s[i] === '+') {
      ans += preSign * num
      preSign = 1
      num = 0
    } else if (s[i] === '-') {
      ans += preSign * num
      preSign = -1
      num = 0
    } else if (s[i] === '(') {
      stack.push({ preSign, ans })
      preSign = 1
      ans = 0
    } else if (s[i] === ')') {
      ans += preSign * num
      num = 0
      const t = stack.pop()
      ans = t.ans + t.preSign * ans
      preSign = 1
    }
  }
  ans += preSign * num
  return ans
}
