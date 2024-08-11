/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists1 = function (lists) {
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
  const minHeap = new Heap((a, b) => a.val - b.val)
  for (const list of lists) {
    if (list) minHeap.insert(list)
  }
  let dummy = new ListNode()
  let cur = dummy
  while (minHeap.size > 0) {
    const node = minHeap.pop()
    cur.next = node
    cur = cur.next
    if (node.next) minHeap.insert(node.next)
  }
  return dummy.next
}

var mergeKLists = function (lists) {
  return merge(lists, 0, lists.length - 1)
}

function merge(lists, l, r) {
  if (l === r) return lists[l]
  if (l > r) return null
  const mid = (l + r) >> 1
  return mergeTwoLists(merge(lists, l, mid), merge(lists, mid + 1, r))
}

function mergeTwoLists(l1, l2) {
  const dummy = new ListNode()
  let cur = dummy
  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1
      l1 = l1.next
    } else {
      cur.next = l2
      l2 = l2.next
    }
    cur = cur.next
  }
  cur.next = l1 ? l1 : l2
  return dummy.next
}
