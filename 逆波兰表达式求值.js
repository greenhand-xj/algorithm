/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = []
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i]
    if (token === '+' || token === '-' || token === '*' || token === '/') {
      const b = stack.pop()
      const a = stack.pop()
      switch (token) {
        case '+':
          stack.push(a + b)
          break
        case '-':
          stack.push(a - b)
          break
        case '*':
          stack.push(a * b)
          break
        case '/':
          stack.push((a / b) | 0)
          break
      }
    } else {
      stack.push(Number(token))
    }
  }
  return stack[0]
}
