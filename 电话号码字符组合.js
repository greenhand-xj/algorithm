/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return []
  const phoneMap = [
    '',
    '',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz',
  ]
  const ans = []
  function backtrack(digits, index, path) {
    if (index === digits.length) {
      ans.push(path)
      return
    }
    const digit = digits[index]
    const letters = phoneMap[digit]
    for (const letter of letters) {
      backtrack(digits, index + 1, path + letter)
    }
  }
  backtrack(digits, 0, '')
  return ans
}
