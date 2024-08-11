class LinkNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

function traverseLinkList(root) {
  if (!root) return
  console.log(root.value)
  traverseLinkList(root.next)
}

function createLinkList(data) {
  const result = data.map((v) => (v = new LinkNode(v)))
  for (let i = 0; i < result.length - 1; i++) {
    const node = result[i]
    node.next = result[i + 1]
  }
  result[result.length - 1].next = null
  return result[0]
}

function reverseLinkList(root) {
  let p1 = root.next,
    p2 = root,
    p3 = null
  p2.next = null
  while (p1) {
    p3 = p1.next
    p1.next = p2
    p2 = p1
    p1 = p3
  }
  return p2
}

let root = createLinkList([1, 2, 3, 4])
root = reverseLinkList(root)
traverseLinkList(root)
