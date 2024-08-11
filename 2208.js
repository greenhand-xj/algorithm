class MaxHeap {
  constructor() {
    this.head = []
  }
  insert(value) {
    this.head.push(value)
    this.shiftUp(this.head.length - 1)
  }
  shiftUp(index) {
    if (index == 0) return
    const parentIndex = this.getParentIndex(index)
    if (this.head[parentIndex] < this.head[index]) {
      this.swap(parentIndex, index)
      this.shiftUp(parentIndex)
    }
  }
  getParentIndex(i) {
    return (i - 1) >> 1
  }
  getLeftIndex(i) {
    return i * 2 + 1
  }
  getRightIndex(i) {
    return i * 2 + 2
  }
  swap(i1, i2) {
    const temp = this.head[i1]
    this.head[i1] = this.head[i2]
    this.head[i2] = temp
  }
  pop() {
    this.head[0] = this.head.pop()
    this.shiftDown(0)
  }
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index)
    const rightIndex = this.getRightIndex(index)

    if (this.head[leftIndex] > this.head[index]) {
      this.swap(leftIndex, index)
      this.shiftDown(leftIndex)
    }
    if (this.head[rightIndex] > this.head[index]) {
      this.swap(rightIndex, index)
      this.shiftDown(rightIndex)
    }
  }
  peek() {
    return this.head[0]
  }
  size() {
    return this.head.length
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var halveArray = function (nums) {
  const heap = new MaxHeap()
  let sum = 0
  for (const num of nums) {
    heap.insert(num)
    sum += num
  }
  let target = sum / 2
  let ans = 0,
    count = 0
  while (ans < target) {
    const max = heap.peek() / 2
    heap.pop()
    ans += max
    count++
    heap.insert(max)
  }
  console.log('count', count)
  return count
}

halveArray([5, 19, 8, 1])
