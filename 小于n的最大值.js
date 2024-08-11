function LessThanTheMaximumValueOfN(nums, n) {
  let ans = -1
  nums.sort((a, b) => b - a)
  function dfs(path) {
    if (path >= n) {
      ans = path
      return true
    }
    for (let i = 0; i < nums.length; i++) {
      if (nums[i]) if (dfs(path * 10 + nums[i])) return true
    }
    return false
  }
  dfs(0)
  return ans
}
console.log(LessThanTheMaximumValueOfN([9, 4, 2], 253))
