/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function (heightMap) {
  const n = heightMap.length
  const m = heightMap[0].length
  const heap = new Heap((a, b) => a[2] - b[2])
  const visited = Array.from({ length: n }, () => Array(m).fill(false))
  const move = [-1, 0, 1, 0, -1]
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 || i === n - 1 || j === 0 || j === m - 1) {
        visited[i][j] = true
        heap.insert([i, j, heightMap[i][j]])
      }
    }
  }
  let ans = 0
  while (heap.size > 0) {
    const [x, y, h] = heap.pop()
    ans += h - heightMap[x][y]
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
        heap.insert([newX, newY, Math.max(h, heightMap[newX][newY])])
        visited[newX][newY] = true
      }
    }
  }
  return ans
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
