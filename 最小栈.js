/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
}
class Node {
  constructor(val, min) {
    this.val = val
    this.min = min
  }
}
/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  const min = this.stack.length ? Math.min(this.stack.at(-1).min, x) : x
  this.stack.push(new Node(x, min))
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack.at(-1).val
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stack.at(-1).min
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
