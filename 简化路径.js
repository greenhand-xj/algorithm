/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const dirs = path.split('/')
  const stack = []
  for (const dir of dirs) {
    if (dir === '..') {
      stack.pop()
    } else if (dir && dir !== '.') {
      stack.push(dir)
    }
  }
  return '/' + stack.join('/')
}
