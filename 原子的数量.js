/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {
  let where = 0
  function fill(ans, name, pre, cnt) {
    if (name.length !== 0 || pre !== null) {
      cnt = cnt || 1
      if (name.length > 0) {
        ans.set(name, (ans.get(name) || 0) + cnt)
      } else {
        for (let [k, v] of pre) {
          ans.set(k, (ans.get(k) || 0) + v * cnt)
        }
      }
    }
  }
  function parse(s, i) {
    let name = ''
    let ans = new Map()
    let pre = null
    let cnt = 0
    while (i < s.length && s[i] !== ')') {
      if ((s[i] >= 'A' && s[i] <= 'Z') || s[i] === '(') {
        fill(ans, name, pre, cnt)
        name = ''
        pre = null
        cnt = 0
        if (s[i] >= 'A' && s[i] <= 'Z') {
          name += s[i++]
        } else {
          pre = parse(s, i + 1)
          i = where + 1
        }
      } else if (s[i] >= 'a' && s[i] <= 'z') {
        name += s[i++]
      } else {
        cnt = cnt * 10 + (s[i++] - '0')
      }
    }
    fill(ans, name, pre, cnt)
    where = i
    return ans
  }
  let ans = parse(formula, 0)
  ans = Array.from(ans.entries()).sort((a, b) => (a[0] < b[0] ? -1 : 1))
  return ans.map(([k, v]) => k + (v > 1 ? v : '')).join('')
}

console.log(countOfAtoms('K4(ON(SO3)2)2'))
