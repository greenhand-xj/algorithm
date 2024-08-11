/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function (nums) {
  const n = nums.length
  let ans = -Infinity
  const stack = [0]
  for (let i = 1; i < n; i++) {
    if (nums[stack.at(-1)] > nums[i]) stack.push(i)
  }
  for (let j = n - 1; j >= 0; j--) {
    while (stack.length && nums[j] >= nums[stack.at(-1)]) {
      ans = Math.max(ans, j - stack.pop())
    }
  }
  return ans
}
