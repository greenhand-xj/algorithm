/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const n = nums.length
  const dp = new Array(n).fill(1)
  let ans = 1
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
        ans = Math.max(ans, dp[i])
      }
    }
  }
  return ans
}
var lengthOfLIS = function (nums) {
  const n = nums.length
  const ends = new Array(n)
  let len = 0
  for (let i = 0, find; i < n; i++) {
    find = binarySearch1(ends, len, nums[i])
    if (find === -1) {
      ends[len++] = nums[i]
    } else {
      ends[find] = nums[i]
    }
  }
  return len
}
function binarySearch1(ends, len, num) {
  let l = 0,
    r = len - 1,
    ans = -1
  while (l <= r) {
    const mid = (l + r) >> 1
    if (ends[mid] >= num) {
      ans = mid
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return ans
}
