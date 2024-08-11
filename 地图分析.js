/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
  const n = grid.length
  const m = grid[0].length
  const move = [-1, 0, 1, 0, -1]
  const visited = new Array(n).fill(0).map(() => new Array(m).fill(false))
  const queue = []
  let seas = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        queue.push([i, j])
        visited[i][j] = true
      } else {
        seas++
      }
    }
  }
  if (seas === 0 || seas === n * m) return -1
  let level = 0
  while (queue.length) {
    const size = queue.length
    level++
    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift()
      for (let k = 0; k < 4; k++) {
        const newX = x + move[k]
        const newY = y + move[k + 1]
        if (
          newX >= 0 &&
          newX < n &&
          newY >= 0 &&
          newY < m &&
          !visited[newX][newY]
        ) {
          queue.push([newX, newY])
          visited[newX][newY] = true
        }
      }
    }
  }
  return level - 1
}
