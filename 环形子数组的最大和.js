/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  const n = nums.length
  let all = nums[0],
    maxSum = nums[0],
    minSum = nums[0]
  for (let i = 1, maxPre = 0, minPre = 0; i < n; i++) {
    all += nums[i]
    maxPre = Math.max(maxPre + nums[i], nums[i])
    maxSum = Math.max(maxSum, maxPre)
    minPre = Math.min(minPre + nums[i], nums[i])
    minSum = Math.min(minSum, minPre)
  }
  return all === minSum ? maxSum : Math.max(all - minSum, maxSum)
}
