/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let ans = 0,
    n = height.length
  if (n < 2) return 0
  let leftMax = 0,
    rightMax = 0
  let l = 0,
    r = n - 1
  while (l < r) {
    leftMax = Math.max(leftMax, height[l])
    rightMax = Math.max(rightMax, height[r])
    if (height[l] < height[r]) {
      ans += leftMax - height[l]
      l++
    } else {
      ans += rightMax - height[r]
      r--
    }
  }

  return ans
}
