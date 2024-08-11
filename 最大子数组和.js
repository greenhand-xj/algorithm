/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0]
  let currentSum = nums[0]
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i])
    maxSum = Math.max(maxSum, currentSum)
  }
  return maxSum
}

let left = 0,
  right = 0,
  sum = -Infinity
var extra = function (nums) {
  for (let r = 0, l = 0, pre = -Infinity; r < nums.length; r++) {
    if (pre < 0) {
      pre = nums[r]
      l = r
    } else {
      pre += nums[r]
    }
    if (sum < pre) {
      sum = pre
      left = l
      right = r
    }
  }
}
