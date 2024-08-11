function solution(nums) {
  const map = new Map()
  map.set(0, -1)
  let ans = 0
  nums.forEach((num, index) => {
    if (num > 0) nums[index] = 1
    else if (num < 0) nums[index] = -1
    else nums[index] = 0
  })
  console.log(nums)
  for (let i = 0, sum = 0; i < nums.length; i++) {
    sum += nums[i]
    if (map.has(sum - 0)) {
      ans = Math.max(ans, i - map.get(sum - 0))
    }
    if (!map.has(sum)) {
      map.set(sum, i)
    }
  }
  return ans
}

console.log(solution([3, 0, -3, 5, -7, 9, -13, 24, 36]))
