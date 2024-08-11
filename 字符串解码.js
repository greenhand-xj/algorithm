/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let where = 0
  function f(s, i) {
    let cur = 0
    let path = ''
    while (i < s.length && s[i] !== ']') {
      if (s[i] >= '0' && s[i] <= '9') {
        cur = cur * 10 + +s[i++]
      } else if (s[i] !== '[') {
        // 遇到字符
        path += s[i++]
      } else {
        // 遇到[
        let str = f(s, i + 1)
        path += str.repeat(cur)
        cur = 0
        i = where
      }
    }
    where = i + 1
    return path
  }
  return f(s, 0)
}

console.log(decodeString('3[a]2[bc]')) // 'aaabcbc'
console.log(decodeString('3[a2[c]]')) // 'accaccacc'
console.log(decodeString('2[abc]3[cd]ef')) // 'abcabccdcdcdef'
