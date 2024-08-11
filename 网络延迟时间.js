/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  // 1.初始化图,邻接表
  const graph = Array.from({ length: n + 1 }, () => [])
  for (const [u, v, w] of times) {
    graph[u].push([v, w])
  }
  // 记录每个点到k点的最短距离
  const distance = Array(n + 1).fill(Infinity)
  distance[0] = -Infinity
  distance[k] = 0
  // [node, distance],node是节点,distance是到达该节点的最短距离
  const heap = new Heap((a, b) => a[1] - b[1])
  heap.insert([k, 0])
  // visited数组表示节点是否已经被访问
  const visited = Array(n + 1).fill(false)

  while (heap.size > 0) {
    let [u] = heap.pop()
    if (visited[u]) continue
    visited[u] = true
    for (const [v, w] of graph[u]) {
      if (!visited[v] && distance[u] + w < distance[v]) {
        distance[v] = distance[u] + w
        heap.insert([v, distance[v]])
      }
    }
  }
  if (distance.some((x) => x === Infinity)) return -1
  return Math.max(...distance)
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
