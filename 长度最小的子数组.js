/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let n = nums.length
  let ans = Infinity
  for (let l = 0, r = 0, sum = 0; r < n; r++) {
    sum += nums[r]
    if (sum >= target) {
      while (l < r && sum - nums[l] >= target) {
        sum -= nums[l++]
      }
      ans = Math.min(ans, r - l + 1)
    }
  }
  return ans
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
