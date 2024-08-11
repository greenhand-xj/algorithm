/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const wordsMap = new Map()
  for (const word of words) {
    wordsMap.set(word, (wordsMap.get(word) || 0) + 1)
  }
  let wordLen = words[0].length
  const ans = []
  for (let i = 0; i < wordLen; i++) {
    let left = i,
      right = i,
      matched = 0,
      windowMap = new Map()
    while (right <= s.length - wordLen) {
      const currentWord = s.slice(right, right + wordLen)
      windowMap.set(currentWord, (windowMap.get(currentWord) || 0) + 1)
      matched++
      while (
        (windowMap.get(currentWord) || 0) > (wordsMap.get(currentWord) || 0)
      ) {
        const leftWord = s.slice(left, left + wordLen)
        windowMap.set(leftWord, (windowMap.get(leftWord) || 0) - 1)
        matched--
        left += wordLen
      }
      if (matched === words.length) {
        ans.push(left)
      }
      right += wordLen
    }
  }
  return ans
}
findSubstring('aaaaaaaaaaaaaa', ['aa', 'aa'])
