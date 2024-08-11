/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function (courses) {
  // 先按照课程结束时间排序
  courses.sort((a, b) => a[1] - b[1])
  // 大顶堆
  const heap = new Heap((a, b) => b - a)
  let time = 0
  for (const [duration, end] of courses) {
    if (time + duration <= end) {
      heap.insert(duration)
      time += duration
    } else {
      // 如果当前课程不能完成，则从堆顶取出时间最长的课程
      if (heap.size > 0 && heap.peek() > duration) {
        time += duration - heap.pop()
        heap.insert(duration)
      }
    }
  }
  return heap.size
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
