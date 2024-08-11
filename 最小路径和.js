/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const n = grid.length
  const m = grid[0].length
  const dp = new Array(m).fill(0)
  dp[0] = grid[0][0]
  for (let i = 1; i < m; i++) {
    dp[i] = dp[i - 1] + grid[0][i]
  }
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (j === 0) dp[j] = dp[j] + grid[i][j]
      else dp[j] = Math.min(dp[j - 1], dp[j]) + grid[i][j]
    }
  }
  return dp[m - 1]
}
// var minPathSum = function (grid) {
//   const n = grid.length
//   const m = grid[0].length
//   const heap = new Heap((a, b) => a[2] - b[2])
//   heap.insert([0, 0, grid[0][0]])
//   const visited = new Array(n).fill(0).map(() => new Array(m).fill(false))
//   visited[0][0] = true
//   const move = [1, 0, 1]
//   while (heap.size) {
//     const [x, y, cost] = heap.peek()
//     heap.pop()
//     if (x === n - 1 && y === m - 1) {
//       return cost
//     }
//     for (let i = 0; i < 2; i++) {
//       const newX = x + move[i]
//       const newY = y + move[i + 1]
//       if (
//         newX >= 0 &&
//         newX < n &&
//         newY >= 0 &&
//         newY < m &&
//         !visited[newX][newY]
//       ) {
//         visited[newX][newY] = true
//         heap.insert([newX, newY, cost + grid[newX][newY]])
//       }
//     }
//   }
//   return -1
// }

// class Heap {
//   constructor(compare) {
//     this.heap = []
//     // 默认是小顶堆
//     this.compare = compare ? compare : (a, b) => a - b
//   }
//   peek() {
//     return this.heap[0]
//   }
//   get size() {
//     return this.heap.length
//   }
//   insert(node) {
//     let i = this.heap.length
//     this.heap.push(node)
//     this.shiftUp(i)
//   }
//   shiftUp(i) {
//     let parent = Math.floor((i - 1) / 2)
//     while (i > 0 && this.compare(this.heap[i], this.heap[parent]) < 0) {
//       ;[this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]]
//       i = parent
//       parent = Math.floor((i - 1) / 2)
//     }
//   }
//   pop() {
//     if (this.heap.length === 0) return null
//     if (this.heap.length === 1) return this.heap.pop()
//     let result = this.heap[0]
//     this.heap[0] = this.heap.pop()
//     this.shiftDown(0)
//     return result
//   }
//   shiftDown(i) {
//     let l = i * 2 + 1
//     while (l < this.heap.length) {
//       let r = i * 2 + 2
//       let best =
//         r < this.heap.length && this.compare(this.heap[r], this.heap[l]) < 0
//           ? r
//           : l
//       best = this.compare(this.heap[best], this.heap[i]) < 0 ? best : i
//       if (best === i) break
//       ;[this.heap[best], this.heap[i]] = [this.heap[i], this.heap[best]]
//       i = best
//       l = i * 2 + 1
//     }
//   }
// }
