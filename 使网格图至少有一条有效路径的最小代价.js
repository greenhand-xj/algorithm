/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function (grid) {
  const n = grid.length
  const m = grid[0].length
  // 右左下上
  const move = [[], [0, 1], [0, -1], [1, 0], [-1, 0]]
  const distance = Array.from({ length: n }, () => Array(m).fill(Infinity))
  const deque = []
  // 原点
  deque.push([0, 0])
  // 原点到原点的距离为0
  distance[0][0] = 0
  while (deque.length) {
    const [x, y] = deque.shift()
    if (x === n - 1 && y === m - 1) {
      return distance[x][y]
    }
    for (let i = 1; i <= 4; i++) {
      const newX = x + move[i][0]
      const newY = y + move[i][1]
      const weight = grid[x][y] === i ? 0 : 1
      if (
        newX >= 0 &&
        newX < n &&
        newY >= 0 &&
        newY < m &&
        distance[newX][newY] > distance[x][y] + weight
      ) {
        distance[newX][newY] = distance[x][y] + weight
        if (weight === 0) {
          deque.unshift([newX, newY])
        } else {
          deque.push([newX, newY])
        }
      }
    }
  }
  return -1
}
