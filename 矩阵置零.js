/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rows = matrix.length
  const cols = matrix[0].length
  function dfs(i, j, lastI, lastJ) {
    if (i < 0 || i >= rows || j < 0 || j >= cols || matrix[i][j] === Infinity)
      return
    if (matrix[i][j] === 0) {
      matrix[i][j] = Infinity
      lastI = i
      lastJ = j
    } else if (lastI === i || lastJ === j) {
      matrix[i][j] = Infinity
    } else {
      return
    }
    dfs(i - 1, j, lastI, lastJ)
    dfs(i + 1, j, lastI, lastJ)
    dfs(i, j - 1, lastI, lastJ)
    dfs(i, j + 1, lastI, lastJ)
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        dfs(i, j, i, j)
      }
    }
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === Infinity) {
        matrix[i][j] = 0
      }
    }
  }
}
const matrix = [
  [0, 1, 2, 2],
  [3, 0, 5, 2],
  [1, 3, 1, 5],
]
setZeroes(matrix)
console.log('matrix', matrix)
