/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const ans = [-1, -1]
  if (nums.length === 0) return ans
  const LBI = searchLBI(nums, target)
  if (LBI === -1) return ans
  const FTI = searchFTI(nums, target)
  ans[0] = FTI
  ans[1] = LBI
  return ans
}

function searchLBI(nums, target) {
  let l = 0,
    r = nums.length - 1
  while (l <= r) {
    let mid = l + ((r - l) >> 1)
    if (nums[mid] === target) {
      if (mid === nums.length - 1 || nums[mid + 1] !== target) return mid
      else l = mid + 1
    } else if (nums[mid] < target) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return -1
}

function searchFTI(nums, target) {
  let l = 0,
    r = nums.length - 1
  while (l <= r) {
    let mid = l + ((r - l) >> 1)
    if (nums[mid] === target) {
      if (mid === 0 || nums[mid - 1] !== target) return mid
      else r = mid - 1
    } else if (nums[mid] < target) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return -1
}
