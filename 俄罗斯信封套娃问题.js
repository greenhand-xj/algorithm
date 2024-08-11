/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  const n = envelopes.length
  // 先按宽度排序，宽度相同的按高度排序
  envelopes.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]))

  const ends = new Array(n)
  let len = 0
  for (let i = 0; i < n; i++) {
    const num = envelopes[i][1]
    const find = binarySearch1(ends, len, num)
    if (find === -1) {
      ends[len++] = num
    } else {
      ends[find] = num
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
    if (ends[mid] >= num) {
      ans = mid
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return ans
}
