/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  const n = nums.length
  let right = -1
  let max = -Infinity
  for (let i = 0; i < n; i++) {
    if (max > nums[i]) right = i
    max = Math.max(max, nums[i])
  }
  let left = n
  let min = Infinity
  for (let i = n - 1; i >= 0; i--) {
    if (min < nums[i]) left = i
    min = Math.min(min, nums[i])
  }
  return Math.max(right - left + 1, 0)
}
