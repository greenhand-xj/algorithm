/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const n = board.length
  const m = board[0].length
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ]
  const copyBoard = structuredClone(board)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let liveNeighbors = 0
      for (const direction of directions) {
        const x = i + direction[0]
        const y = j + direction[1]
        if (x >= 0 && x < n && y >= 0 && y < m && (copyBoard[x][y] & 1) === 1) {
          liveNeighbors++
        }
      }
      if (copyBoard[i][j] === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
        board[i][j] = 0
      } else if (copyBoard[i][j] === 0 && liveNeighbors === 3) {
        board[i][j] = 1
      } else if (
        copyBoard[i][j] === 1 &&
        (liveNeighbors === 2 || liveNeighbors === 3)
      ) {
        board[i][j] = 1
      }
    }
  }
  return board
}

console.log(
  gameOfLife([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ])
)

// 如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
// 如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
// 如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
// 如果死细胞周围正好有三个活细胞，则该位置死细胞复活；
