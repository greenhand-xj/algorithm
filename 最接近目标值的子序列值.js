/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
let fill = 0
var minAbsDifference = function (nums, goal) {
  const n = nums.length
  let posSum = 0,
    negSum = 0
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) posSum += nums[i]
    if (nums[i] < 0) negSum += nums[i]
  }
  if (posSum <= goal) return Math.abs(posSum - goal)
  if (negSum >= goal) return Math.abs(negSum - goal)
  const lsum = [],
    rsum = []
  nums.sort((a, b) => a - b)
  fill = 0
  collect(nums, 0, n >> 1, 0, lsum)
  let lsize = fill
  fill = 0
  collect(nums, n >> 1, n, 0, rsum)
  let rsize = fill
  lsum.sort((a, b) => a - b)
  rsum.sort((a, b) => a - b)

  let ans = Math.abs(goal)
  for (let i = 0, j = rsize - 1; i < lsize; i++) {
    while (
      j > 0 &&
      Math.abs(lsum[i] + rsum[j] - goal) >=
        Math.abs(lsum[i] + rsum[j - 1] - goal)
    ) {
      j--
    }
    ans = Math.min(ans, Math.abs(lsum[i] + rsum[j] - goal))
  }
  return ans
}
function collect(nums, i, e, s, sum) {
  if (i === e) {
    sum[fill++] = s
  } else {
    let j = i + 1
    while (j < e && nums[j] === nums[i]) j++
    for (let k = 0; k <= j - i; k++) {
      collect(nums, j, e, s + k * nums[i], sum)
    }
  }
}

console.log(minAbsDifference([5, -7, 3, 5], 6))
