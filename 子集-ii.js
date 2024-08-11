/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b)
  let ans = []
  let path = []
  collect(nums, 0, path, 0, ans)
  return ans
}

function collect(nums, i, path, size, ans) {
  if (i === nums.length) {
    ans.push(path.slice(0, size))
    return
  }
  let j = i + 1
  while (j < nums.length && nums[j] === nums[i]) j++
  collect(nums, j, path, size, ans)
  for (; i < j; i++) {
    path[size++] = nums[i]
    collect(nums, j, path, size, ans)
  }
}

console.log(subsetsWithDup([1, 2, 2]))
