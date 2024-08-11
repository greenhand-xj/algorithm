/**
 * @param {number[][]} array
 * @return {number[]}
 */
var spiralArray = function (array) {
  if (array.length === 0) return []
  const ans = []
  const n = array.length
  const m = array[0].length
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]
  let dir = 0,
    row = 0,
    col = 0
  for (let i = 0; i < n * m; i++) {
    ans.push(array[row][col])
    array[row][col] = Infinity

    const [nextRow, nextCol] = [row + dirs[dir][0], col + dirs[dir][1]]
    if (
      nextRow < 0 ||
      nextRow >= n ||
      nextCol < 0 ||
      nextCol >= m ||
      array[nextRow][nextCol] === Infinity
    ) {
      dir = (dir + 1) % 4
    }

    ;[row, col] = [row + dirs[dir][0], col + dirs[dir][1]]
  }

  return ans
}

console.log(
  spiralArray([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
)
