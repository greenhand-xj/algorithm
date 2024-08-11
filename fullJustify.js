/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const ans = [],
    str = []
  let l = 0,
    n = words.length,
    r = 0,
    acc = 0
  while (1) {
    l = r
    acc = 0
    str.length = 0
    while (r < n && acc + words[r].length + r - l <= maxWidth) {
      acc += words[r].length
      str.push(words[r])
      r++
    }
    // last line
    if (r === n) {
      ans.push(str.join(' ').padEnd(maxWidth, ' '))
      return ans
    }
    // only one word
    if (r - l === 1) {
      ans.push(str.join(' ').padEnd(maxWidth, ' '))
      continue
    }
    // multiple words
    let allSpace = maxWidth - acc
    let averageSpace = Math.floor(allSpace / (str.length - 1))
    let extraSpace = allSpace % (str.length - 1)
    let joinString = ''
    for (let i = 0; i < str.length - 1; i++) {
      joinString += str[i] + ' '.repeat(averageSpace + (i < extraSpace ? 1 : 0))
    }
    ans.push(joinString + str[str.length - 1])
  }
}

const ans = fullJustify(
  ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'],
  16
)
console.log(ans)
