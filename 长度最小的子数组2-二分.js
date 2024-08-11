/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let n = nums.length
  let ans = Infinity
  const prefix = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++) {
    prefix[i] = prefix[i - 1] + nums[i - 1]
  }
  for (let i = 1, t; i <= n; i++) {
    t = target + prefix[i - 1]
    let j = findGETargetElement(prefix, t, i - 1)
    if (j !== -1) ans = Math.min(ans, j - i + 1)
  }
  return ans === Infinity ? 0 : ans
}

function findGETargetElement(nums, target, i) {
  let l = i,
    n = nums.length,
    r = n - 1
  while (l <= r) {
    let mid = Math.floor((l + r) / 2)
    if (nums[mid] >= target) {
      if (mid === 0 || nums[mid - 1] < target) return mid
      else r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return -1
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
