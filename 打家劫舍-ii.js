/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length
  if (n === 1) return nums[0]
  return Math.max(helper(nums, 2, n - 2) + nums[0], helper(nums, 1, n - 1))
}

function helper(nums, start, end) {
  if (start === end) return nums[start]
  if (start > end) return 0
  if (start + 1 === end) return Math.max(nums[start], nums[end])
  let prepre = nums[start]
  pre = Math.max(nums[start], nums[start + 1])
  for (let i = start + 2; i <= end; i++) {
    const cur = Math.max(Math.max(prepre, 0) + nums[i], pre)
    prepre = pre
    pre = cur
  }
  return pre
}
