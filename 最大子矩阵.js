/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var getMaxMatrix = function (matrix) {
  const n = matrix.length
  const m = matrix[0].length
  let a, b, c, d
  let max = -Infinity
  const nums = new Array(m)
  for (let up = 0; up < n; up++) {
    nums.fill(0)
    for (let down = up; down < n; down++) {
      for (let l = 0, r = 0, pre = -Infinity; r < m; r++) {
        nums[r] += matrix[down][r]
        if (pre >= 0) {
          pre += nums[r]
        } else {
          l = r
          pre = nums[r]
        }
        if (pre > max) {
          a = up
          b = l
          c = down
          d = r
          max = pre
        }
      }
    }
  }
  return [a, b, c, d]
}
