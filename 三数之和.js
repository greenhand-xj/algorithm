/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.lenght < 3) return []
  const ans = []
  let n = nums.length
  nums.sort((a, b) => a - b)
  for (let i = 0, target = 0, l = 0, r = 0; i < n; i++) {
    if ((i > 0) & (nums[i] === nums[i - 1])) continue
    target = -nums[i]
    l = i + 1
    r = n - 1
    while (l < r) {
      let sum = nums[l] + nums[r]
      if (sum === target) {
        ans.push([nums[i], nums[l], nums[r]])
        while (l < r && nums[l] === nums[++l]);
        while (l < r && nums[r] === nums[--r]);
      } else if (sum > target) {
        r--
      } else {
        l++
      }
    }
  }
  return ans
}

threeSum([-1, 0, 1, 2, -1, -4])
