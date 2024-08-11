/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
// [-1,5,3,4,0]
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head || !head.next) return head
  let len = 0
  let dummy = new ListNode()
  dummy.next = head
  while (head) {
    head = head.next
    len++
  }
  for (let step = 1; step < len; step *= 2) {
    let prev = dummy
    let curr = dummy.next
    while (curr) {
      let left = curr
      let right = splitList(left, step)
      curr = splitList(right, step)
      prev = merge(left, right, prev)
    }
  }
  return dummy.next
}
const head = new ListNode(
  -1,
  new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(0))))
)
sortList(head)

function merge(left, right, prev) {
  while (left && right) {
    if (left.val < right.val) {
      prev.next = left
      left = left.next
    } else {
      prev.next = right
      right = right.next
    }
    prev = prev.next
  }
  prev.next = left || right
  while (prev.next) {
    prev = prev.next
  }
  return prev
}

function splitList(head, n) {
  if (!head) return head
  let cur = head
  for (let i = 0; i < n - 1 && cur.next; i++) {
    cur = cur.next
  }
  const next = cur.next
  cur.next = null
  return next
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
  cur.next = l1 || l2
  return dummy.next
}
