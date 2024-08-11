/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function (events) {
  events.sort((a, b) => a[0] - b[0])
  let ans = 0
  let min = events[0][0]
  let max = events[0][1]
  for (let i = 0; i < events.length; i++) {
    max = Math.max(max, events[i][1])
  }
  let i = 0
  let heap = new Heap()
  for (let day = min; day <= max; day++) {
    while (i < events.length && events[i][0] === day) {
      heap.insert(events[i][1])
      i++
    }
    while (heap.size > 0 && heap.peek() < day) {
      heap.pop()
    }
    if (heap.size > 0) {
      ans++
      heap.pop()
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
