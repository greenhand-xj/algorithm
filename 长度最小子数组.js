/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let ans = Infinity
  const n = nums.length
  for (let l = 0, sum = 0, r = 0; r < n; r++) {
    sum += nums[r]
    while (sum - nums[l] >= target) sum -= nums[l++]
    if (sum >= target) ans = Math.min(ans, r - l + 1)
  }
  return ans === Infinity ? 0 : ans
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
