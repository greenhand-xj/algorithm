/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const ans = []
  const swap = (i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]])
  const backtrack = (i) => {
    if (i === nums.length) {
      ans.push([...nums])
      return
    }
    const set = new Set()
    for (let j = i; j < nums.length; j++) {
      if (set.has(nums[j])) continue
      set.add(nums[j])
      swap(i, j)
      backtrack(i + 1)
      swap(i, j)
    }
  }
  backtrack(0)
  return ans
}
