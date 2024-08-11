var topKFrequent = function (nums, k) {
  const map = {}
  for (let val of nums) {
    if (map[val]) {
      map[val] = map[val] + 1
    } else {
      map[val] = 1
    }
  }
  const arr = Object.entries(map)
  arr.sort((a, b) => b[1] - a[1])
  const result = []
  for (let i = 0; i < k; i++) {
    result.push(arr[i][0])
  }
  return result
}

topKFrequent([1, 1, 1, 2, 2, 3])

class MinHeap {
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
    if (this.head[parentIndex]?.value > this.head[index].value) {
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

    if (this.head[leftIndex]?.value < this.head[index].value) {
      this.swap(leftIndex, index)
      this.shiftDown(leftIndex)
    }
    if (this.head[rightIndex]?.value < this.head[index].value) {
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
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map()
  nums.forEach((n) => {
    map.set(n, map.has(n) ? map.get(n) + 1 : 1)
  })
  // const list = Array.from(map).sort((a, b) => b[1] - a[1])
  // return list.slice(0, k).map((item) => item[0])

  const h = new MinHeap()
  map.forEach((value, key) => {
    h.insert({ value, key })
    if (h.size() > k) h.pop()
  })
  return h.head.map((a) => a.key)
}
