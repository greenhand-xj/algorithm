/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let result = [-1, -1]
  if (nums.length === 0) return result
  const FTI = searchFTI(nums, target)
  if (FTI === -1) return result
  const LBI = searchLBI(nums, target)
  result = [LBI, FTI]
  return result
}

function searchFTI(nums, target) {
  let l = 0,
    r = nums.length - 1
  while (l <= r) {
    const mid = Math.floor((l + r) / 2)
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

function searchLBI(nums, target) {
  let l = 0,
    r = nums.length - 1
  while (l <= r) {
    const mid = Math.floor((l + r) / 2)
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
