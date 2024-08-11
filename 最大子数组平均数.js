/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sum = 0,
    n = nums.length
  for (let i = 0; i < k; i++) {
    sum += nums[i]
  }
  let ans = +(sum / k).toFixed(5)
  for (let r = k, l = 0; r < n; r++, l++) {
    sum -= nums[l]
    sum += nums[r]
    const avg = +(sum / k).toFixed(5)
    ans = Math.max(ans, avg)
  }
  return ans
}
