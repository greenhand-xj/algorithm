class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

function copyList(head) {
  if (!head || !head.next) return head
  const node = new Node(head.val)
  node.next = copyList(head.next)
  return node
}

const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
const copyHead = copyList(head)
console.log(copyHead)
console.log(copyHead === head)

// 1 -> 2 -> 3 -> 4 -> 5
