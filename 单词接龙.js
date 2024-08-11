/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList)
  if (!wordSet.has(endWord)) {
    return 0
  }
  wordSet.delete(beginWord)
  let smallLevel = new Set([beginWord])
  let bigLevel = new Set([endWord])
  let nextLevel = new Set()
  for (let level = 2; smallLevel.size > 0; level++) {
    for (const word of smallLevel) {
      for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < 26; j++) {
          const newWord =
            word.slice(0, i) + String.fromCharCode(97 + j) + word.slice(i + 1)
          if (bigLevel.has(newWord)) {
            return level
          }
          if (wordSet.has(newWord)) {
            nextLevel.add(newWord)
            wordSet.delete(newWord)
          }
        }
      }
    }
    if (nextLevel.size <= bigLevel.size) {
      ;[smallLevel, nextLevel] = [nextLevel, smallLevel]
    } else {
      const tmp = smallLevel
      smallLevel = bigLevel
      bigLevel = nextLevel
      nextLevel = tmp
    }
    nextLevel.clear()
  }
  return 0
}
