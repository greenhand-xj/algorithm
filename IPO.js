/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function (k, w, profits, capital) {
  //需要启动资金的小顶堆
  const minHeap = new Heap((a, b) => a[0] - b[0])
  //利润大顶堆
  const maxHeap = new Heap((a, b) => b[1] - a[1])
  for (let i = 0; i < profits.length; i++) {
    minHeap.insert([capital[i], profits[i]])
  }
  while (k > 0) {
    while (minHeap.size && minHeap.peek()[0] <= w) {
      maxHeap.insert(minHeap.pop())
    }
    if (maxHeap.size === 0) break
    w += maxHeap.pop()[1]
    k--
  }
  return w
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
