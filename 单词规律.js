/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const patternMap = {}
  const sMap = {}
  const words = s.split(' ')
  if (pattern.length !== words.length) return false
  for (let i = 0; i < words.length; i++) {
    const c = pattern[i]
    const word = words[i]
    if (patternMap.hasOwnProperty(c) && patternMap[c] !== word) return false
    if (sMap.hasOwnProperty(word) && sMap[word] !== c) return false
    patternMap[c] = word
    sMap[word] = c
  }
  return true
}
wordPattern('abba', 'dog constructor constructor dog')
