/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s
  if (numRows >= s.length) return s
  let n = s.length
  const gap = numRows - 2 + numRows
  const firstLinePos = []
  for (let i = gap; i < n; i += gap) {
    firstLinePos.push(i)
  }
  if (firstLinePos.length === 0) firstLinePos.push(s.length)
  let ans = s[0] + firstLinePos.reduce((pre, cur) => pre + (s[cur] || ''), '')
  for (let i = 1, line = ''; i < gap / 2 + 1; i++) {
    line += s[i]
    let pos = firstLinePos[0]
    if (pos - i > i) line += s[pos - i]
    if (pos + i < n) line += s[pos + i]
    for (let j = 1; j < firstLinePos.length; j++) {
      const pos = firstLinePos[j]
      if (pos - i > firstLinePos[j - 1] + i) line += s[pos - i]
      if (pos + i < n) line += s[pos + i]
    }
    ans += line
    line = ''
  }
  return ans
}

console.log(convert('ABCDE', 4)) //PINALSIGYAHRPI
// if (numRows === 2) {
//   let firstLine = '',
//     secondLine = ''
//   for (let i = 0; i < s.length; i += 2) {
//     firstLine += s[i]
//     secondLine += s[i + 1]
//   }
//   if (s.length % 2 === 1) firstLine += s[s.length - 1]
//   return firstLine + secondLine
// }
