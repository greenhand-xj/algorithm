/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let ans = nums[0]
  for (
    let i = 0, min = nums[0], max = nums[0], curMax, curMin;
    i < nums.length;
    i++
  ) {
    curMax = Math.max(nums[i], max * nums[i], min * nums[i])
    curMin = Math.min(nums[i], max * nums[i], min * nums[i])
    min = curMin
    max = curMax
    ans = Math.max(ans, curMax)
  }
  return ans
}
