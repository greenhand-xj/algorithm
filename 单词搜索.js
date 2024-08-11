/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const n = board.length
  const m = board[0].length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(board, i, j, word, 0)) return true
    }
  }
  // 四个方向搜索
  function dfs(board, i, j, word, k) {
    if (k === word.length) return true
    if (i < 0 || i >= n || j < 0 || j >= m || board[i][j] !== word[k])
      return false
    const temp = board[i][j]
    board[i][j] = '#'
    let ans =
      dfs(board, i + 1, j, word, k + 1) ||
      dfs(board, i - 1, j, word, k + 1) ||
      dfs(board, i, j + 1, word, k + 1) ||
      dfs(board, i, j - 1, word, k + 1)
    board[i][j] = temp
    return ans
  }
  return false
}
