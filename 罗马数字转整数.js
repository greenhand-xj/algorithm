/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanMap = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ])

  let result = 0
  for (let i = 0; i < s.length; i++) {
    const currVal = romanMap.get(s[i])
    const nextVal = romanMap.get(s[i + 1])
    if (nextVal && currVal < nextVal) {
      result -= currVal
    } else {
      result += currVal
    }
  }
  return result
}
