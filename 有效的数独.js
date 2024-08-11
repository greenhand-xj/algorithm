/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rowUsed = new Array(9).fill(0).map(() => new Array(9).fill(false))
  const colUsed = new Array(9).fill(0).map(() => new Array(9).fill(false))
  const blockUsed = new Array(9).fill(0).map(() => new Array(9).fill(false))
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') {
        const num = +board[i][j]
        if (rowUsed[i][num]) return false
        if (colUsed[j][num]) return false
        const blockIndex = Math.floor(i / 3) + Math.floor(j / 3) * 3
        if (blockUsed[blockIndex][num]) return false
        rowUsed[i][num] = true
        colUsed[j][num] = true
        blockUsed[blockIndex][num] = true
      }
    }
  }
  return true
}
