function solution(nums, aim) {
  const map = new Map()
  map.set(0, -1)
  let ans = 0
  for (let i = 0, sum = 0; i < nums.length; i++) {
    sum += nums[i]
    if (map.has(sum - aim)) {
      ans = Math.max(ans, i - map.get(sum - aim))
    }
    if (!map.has(sum)) {
      map.set(sum, i)
    }
  }
  return ans
}

console.log(solution([1, -2, 1, 1, 1], 0))
