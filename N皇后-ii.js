/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  if (n < 1) return 0
  return f1(0, new Array(n), n)
}

function f1(i, path, n) {
  if (i === n) return 1
  let ans = 0
  for (let j = 0; j < n; j++) {
    if (check(path, i, j)) {
      path[i] = j
      ans += f1(i + 1, path, n)
    }
  }
  return ans
}

function check(path, i, j) {
  for (let k = 0; k < i; k++) {
    if (j === path[k] || Math.abs(i - k) === Math.abs(j - path[k])) {
      return false
    }
  }
  return true
}
