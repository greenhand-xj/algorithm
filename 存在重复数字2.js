/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const set = new Set()
  let left = 0,
    right = 0
  while (right < nums.length) {
    if (set.has(nums[right])) return true
    set.add(nums[right])
    if (set.size > k) set.delete(nums[left++])
    right++
  }
  return false
}

containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)
