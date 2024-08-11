/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  if (tokens.length === 1) return tokens[0]
  let stack = [],
    num1,
    num2
  const map = {
    '+': (num1, num2) => +num1 + +num2,
    '-': (num1, num2) => +num1 - +num2,
    '*': (num1, num2) => num1 * num2,
    '/': (num1, num2) => num1 / num2,
  }
  const isNumericChar = (v) => +v >= 0 && +v <= 9
  for (let i = 0; i < tokens.length; i++) {
    if (isNumericChar(tokens[i])) {
      stack.push(tokens[i])
    } else {
      num2 = stack.pop()
      num1 = stack.pop()
      const result = map[tokens[i]](num1, num2)
      stack.push(result)
    }
  }
  return stack[0]
}

evalRPN(['4', '13', '5', '/', '+'])

// 判断是否为数字
