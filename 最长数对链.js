/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
  pairs.sort((a, b) => a[0] - b[0])
  let len = 0
  const n = pairs.length
  let ends = new Array(n)
  for (const pair of pairs) {
    find = binarySearch1(ends, len, pair[0])
    if (find === -1) {
      ends[len++] = pair[1]
    } else {
      ends[find] = Math.min(ends[find], pair[1])
    }
  }
  return len
}

function binarySearch1(ends, len, target) {
  let l = 0,
    r = len - 1,
    ans = -1
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (ends[mid] <= target) {
      l = mid + 1
    } else {
      r = mid - 1
      ans = mid
    }
  }
  return ans
}
