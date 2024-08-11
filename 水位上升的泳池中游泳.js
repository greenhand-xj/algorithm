/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
  const move = [-1, 0, 1, 0, -1]
  const n = grid.length
  const m = grid[0].length
  // 记录是否访问过
  const visited = Array.from({ length: n }, () => Array(m).fill(false))
  // 记录二维数组的最短距离，初始化为无穷大
  const distance = Array.from({ length: n }, () => Array(m).fill(Infinity))
  // 从(0, 0)到grid[0][0]的最短距离为0
  distance[0][0] = grid[0][0]
  // 小顶堆
  const heap = new Heap((a, b) => a[2] - b[2])
  // 从(0, 0)开始，到(0, 0)的最短距离为0
  heap.insert([0, 0, grid[0][0]])

  while (heap.size > 0) {
    const [x, y, c] = heap.pop()
    // 到达终点，返回最短距离
    if (x === n - 1 && y === m - 1) return c
    if (visited[x][y]) continue
    visited[x][y] = true
    // 遍历上下左右四个方向
    for (let i = 0; i < 4; i++) {
      const newX = x + move[i]
      const newY = y + move[i + 1]
      if (
        newX >= 0 &&
        newX < n &&
        newY >= 0 &&
        newY < m &&
        !visited[newX][newY]
      ) {
        // 计算从(x, y)到(newX, newY)的最短距离,也就是体力消耗最小的那条边
        const time = Math.max(c, grid[newX][newY])
        if (time < distance[newX][newY]) {
          distance[newX][newY] = time
          heap.insert([newX, newY, time])
        }
      }
    }
  }
  return -1
}
class Heap {
  constructor(compare) {
    this.heap = []
    // 默认是小顶堆
    this.compare = compare ? compare : (a, b) => a - b
  }
  peek() {
    return this.heap[0]
  }
  get size() {
    return this.heap.length
  }
  insert(node) {
    let i = this.heap.length
    this.heap.push(node)
    this.shiftUp(i)
  }
  shiftUp(i) {
    let parent = Math.floor((i - 1) / 2)
    while (i > 0 && this.compare(this.heap[i], this.heap[parent]) < 0) {
      ;[this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]]
      i = parent
      parent = Math.floor((i - 1) / 2)
    }
  }
  pop() {
    if (this.heap.length === 0) return null
    if (this.heap.length === 1) return this.heap.pop()
    let result = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
    return result
  }
  shiftDown(i) {
    let l = i * 2 + 1
    while (l < this.heap.length) {
      let r = i * 2 + 2
      let best =
        r < this.heap.length && this.compare(this.heap[r], this.heap[l]) < 0
          ? r
          : l
      best = this.compare(this.heap[best], this.heap[i]) < 0 ? best : i
      if (best === i) break
      ;[this.heap[best], this.heap[i]] = [this.heap[i], this.heap[best]]
      i = best
      l = i * 2 + 1
    }
  }
}
