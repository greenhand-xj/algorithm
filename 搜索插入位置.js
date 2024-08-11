/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums.length === 0) return 0
  if (nums[nums.length - 1] < target) return nums.length
  let l = 0,
    r = nums.length - 1
  while (l <= r) {
    let mid = l + ((r - l) >> 2)
    if (nums[mid] >= target) {
      if (nums[mid - 1] < target) return mid
      else r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return 0
}
