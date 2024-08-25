/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let ans = 0
  const n = grid.length
  const m = grid[0].length
  const dfs = (i, j) => {
    if (
      i >= n ||
      i < 0 ||
      j >= m ||
      j < 0 ||
      grid[i][j] === '0' ||
      grid[i][j] === Infinity
    )
      return
    grid[i][j] = Infinity
    dfs(i - 1, j)
    dfs(i + 1, j)
    dfs(i, j - 1)
    dfs(i, j + 1)
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === '1') {
        ans++
        dfs(i, j)
      }
    }
  }
  return ans
}
