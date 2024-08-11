/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumObstacles = function (grid) {
  const n = grid.length
  const m = grid[0].length
  const distance = Array.from({ length: n }, () => Array(m).fill(Infinity))
  const move = [-1, 0, 1, 0, -1]
  distance[0][0] = 0
  const deque = [[0, 0]]
  while (deque.length) {
    const [x, y] = deque.shift()
    if (x === n - 1 && y === m - 1) {
      return distance[x][y]
    }
    for (let i = 0; i < 4; i++) {
      const newX = x + move[i]
      const newY = y + move[i + 1]
      if (
        newX >= 0 &&
        newX < n &&
        newY >= 0 &&
        newY < m &&
        distance[x][y] + grid[newX][newY] < distance[newX][newY]
      ) {
        distance[newX][newY] = distance[x][y] + grid[newX][newY]
        if (grid[newX][newY] === 0) {
          deque.unshift([newX, newY])
        } else {
          deque.push([newX, newY])
        }
      }
    }
  }
  return -1
}
