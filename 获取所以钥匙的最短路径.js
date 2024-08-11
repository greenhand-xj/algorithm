/**
 * @param {string[]} grid
 * @return {number}
 */
var shortestPathAllKeys = function (grid) {
  const n = grid.length
  const m = grid[0].length
  const move = [-1, 0, 1, 0, -1]
  const q = []
  let base = 'a'.charCodeAt()
  let key = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === '@') {
        q.push([i, j, 0])
      }
      if (grid[i][j] >= 'a' && grid[i][j] <= 'f') {
        key |= 1 << (grid[i][j].charCodeAt() - base)
      }
    }
  }
  const visited = Array.from({ length: n }, () =>
    Array(m)
      .fill(0)
      .map(() => Array(key + 1).fill(false))
  )
  visited[q[0][0]][q[0][1]][q[0][2]] = true
  let level = 1
  while (q.length) {
    const size = q.length
    for (let k = 0; k < size; k++) {
      const [x, y, s] = q.shift()
      for (let i = 0; i < 4; i++) {
        const nx = x + move[i]
        const ny = y + move[i + 1]
        let ns = s
        if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue
        if (grid[nx][ny] === '#') continue
        if (
          grid[nx][ny] >= 'A' &&
          grid[nx][ny] <= 'F' &&
          (ns & (1 << (grid[nx][ny].charCodeAt() - 'A'.charCodeAt()))) === 0
        ) {
          continue
        }
        if (grid[nx][ny] >= 'a' && grid[nx][ny] <= 'f') {
          ns = ns | (1 << (grid[nx][ny].charCodeAt() - base))
        }
        if (ns === key) {
          return level
        }
        if (!visited[nx][ny][ns]) {
          visited[nx][ny][ns] = true
          q.push([nx, ny, ns])
        }
      }
    }
    level++
  }
  return -1
}

shortestPathAllKeys(['@Aa'])
