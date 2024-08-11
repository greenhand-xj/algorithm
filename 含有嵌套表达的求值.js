/**
 *
 * @param {string} str 表达式
 * @return {number}
 */
var calculate = function (str) {
  let where = 0
  function f(s, i) {
    let cur = 0
    const numbers = [],
      ops = []
    while (i < s.length && s[i] !== ')') {
      if (s[i] >= '0' && s[i] <= '9') {
        cur = cur * 10 + +s[i++]
      } else if (s[i] !== '(') {
        // 遇到运算符
        push(numbers, ops, cur, s[i++])
        cur = 0
      } else {
        // 遇到左括号
        cur = f(s, i + 1)
        i = where
      }
    }
    push(numbers, ops, cur, '+')
    where = i + 1
    return doCalc(numbers, ops)
  }
  function push(numbers, ops, cur, op) {
    const lastOp = ops[ops.length - 1]
    if (lastOp === '+' || lastOp === '-' || ops.length === 0) {
      ops.push(op)
      numbers.push(cur)
      return
    }
    if (lastOp === '*') {
      numbers[numbers.length - 1] *= cur
    } else {
      numbers[numbers.length - 1] /= cur
    }
    ops[ops.length - 1] = op
  }
  function doCalc(numbers, ops) {
    let ans = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
      ans += ops[i - 1] === '+' ? numbers[i] : -numbers[i]
    }
    return ans
  }
  return f(str, 0)
}

console.log(calculate('1+1')) // 2
console.log(calculate('2-1+2')) // 3
console.log(calculate('(1+(4+5+2)-3)+(6+8)')) // 23
console.log(calculate('2-1+(2*3+4)*5+2')) // 53
