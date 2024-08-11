/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kIncreasing = function (arr, k) {
  const n = arr.length
  const nums = new Array(n)
  const ends = new Array(n)
  let size = 0,
    ans = 0
  for (let i = 0; i < k; ++i) {
    size = 0
    for (let j = i; j < n; j += k) {
      nums[size++] = arr[j]
    }
    ans += size - lengthOfNoDecreasing(nums, ends, size)
  }
  return ans
}
function lengthOfNoDecreasing(nums, ends, size) {
  let len = 0
  for (let i = 0; i < size; ++i) {
    const find = binarySearch1(ends, len, nums[i])
    if (find === -1) {
      ends[len++] = nums[i]
    } else {
      ends[find] = nums[i]
    }
  }
  return len
}

function binarySearch1(ends, len, num) {
  let l = 0,
    r = len - 1,
    ans = -1
  while (l <= r) {
    const mid = (l + r) >> 1
    if (ends[mid] > num) {
      ans = mid
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return ans
}
