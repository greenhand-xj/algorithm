/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const roman = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ]
  const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let ans = '',
    index = 0
  while (num > 0) {
    while (num >= nums[index]) {
      num -= nums[index]
      ans += roman[index]
    }
    index++
  }
  return ans
}
