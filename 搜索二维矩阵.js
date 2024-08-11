/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let n = matrix.length,
    m = matrix[0].length
  let l = 0,
    r = n * m - 1
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2)
    let num = matrix[Math.floor(mid / m)][mid % m]
    if (num === target) return true
    else if (num < target) l = mid + 1
    else r = mid - 1
  }
  return false
}

searchMatrix([[1, 1]], 2)
