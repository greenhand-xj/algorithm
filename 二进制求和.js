/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const maxLen = Math.max(a.length, b.length)
  a = a.padStart(maxLen, '0')
  b = b.padStart(maxLen, '0')
  let ans = ''
  let carry = 0
  for (let i = maxLen - 1; i >= 0; --i) {
    const sum = carry + +a[i] + +b[i]
    carry = Math.floor(sum / 2)
    ans = (sum % 2) + ans
  }
  return carry ? '1' + ans : ans
}
