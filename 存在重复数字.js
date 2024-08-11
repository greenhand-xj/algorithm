/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = new Map()
  for (let val of nums) {
    if (map.has(val)) {
      return true
    }
    map.set(val, true)
  }
  return false
}
