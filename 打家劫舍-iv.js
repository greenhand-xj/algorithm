/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function (nums, k) {
  let l = nums[0],
    r = nums[0]
  const n = nums.length
  for (let i = 1; i < n; i++) {
    l = Math.min(l, nums[i])
    r = Math.max(r, nums[i])
  }
  let m = 0,
    ans = 0
  while (l <= r) {
    m = l + ((r - l) >> 1)
    if (check(nums, n, m) >= k) {
      r = m - 1
      ans = m
    } else {
      l = m + 1
    }
  }
  return ans
}

function check(nums, n, ability) {
  if (n === 1) return nums[0] <= ability ? 1 : 0
  if (n === 2) return nums[0] <= ability || nums[1] <= ability ? 1 : 0
  const dp = new Array(n).fill(0)
  dp[0] = nums[0] <= ability ? 1 : 0
  dp[1] = nums[0] <= ability || nums[1] <= ability ? 1 : 0
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + (nums[i] <= ability ? 1 : 0))
  }
  return dp[n - 1]
}
