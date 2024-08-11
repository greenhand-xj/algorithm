/**
 *
 * @param {number[][]} matrix
 */
function solution(matrix, size) {
  let n = matrix.length,
    m = matrix[0].length
  let ans = []
  let sum = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0))
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      sum[i][j] = matrix[i - 1][j - 1]
    }
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      sum[i][j] += sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1]
    }
  }
  let count = 0
  const sumRegion = (a, b, c, d) => {
    return sum[c][d] - sum[a - 1][d] - sum[c][b - 1] + sum[a - 1][b - 1]
  }
  for (let k = 1; k <= size; k++) {
    if (k % 2 !== 0) {
      ans.push(0)
      continue
    }
    for (let a = 1, c = a + k - 1; a <= n && c <= n; a++, c++) {
      for (let b = 1, d = b + k - 1; b <= m && d <= m; b++, d++) {
        if (sumRegion(a, b, c, d) === (k * k) / 2) {
          count++
        }
      }
    }
    ans.push(count)
    count = 0
  }
  return ans
}

const matrix = [
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 0, 1, 1],
]
const result = solution(matrix, 4)
console.log('result', result)
