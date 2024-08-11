/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const n = board.length,
    m = board[0].length
  function dfs(i, j, char) {
    if (i < 0 || i >= n || j < 0 || j >= m || board[i][j] !== 'O') return
    board[i][j] = char
    dfs(i + 1, j, char)
    dfs(i - 1, j, char)
    dfs(i, j + 1, char)
    dfs(i, j - 1, char)
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (
        (i === 0 || i === n - 1 || j === 0 || j === m - 1) &&
        board[i][j] === 'O'
      ) {
        dfs(i, j, '*')
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 'O') board[i][j] = 'X'
      if (board[i][j] === '*') board[i][j] = 'O'
    }
  }
}

console.log(
  solve([
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X'],
  ])
)
