/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function (stickers, target) {
  // const graph = Array.from({ length: 26 }, () => [])
  const map = new Map()
  const visited = new Set()
  const base = 'a'.charCodeAt()
  for (let str of stickers) {
    str = sort(str)
    for (let i = 0; i < str.length; i++) {
      if (i === 0 || str[i] !== str[i - 1]) {
        // graph[str.charCodeAt(i) - base].push(str)
        if (!map.has(str[i])) {
          map.set(str[i], [str])
        } else {
          map.get(str[i]).push(str)
        }
      }
    }
  }
  target = sort(target)
  visited.add(target)
  const queue = [target]
  let level = 1
  while (queue.length) {
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const cur = queue.shift()
      // graph[cur.charCodeAt(0) - base]
      for (const s of map.get(cur[0]) || []) {
        const next = getNext(cur, s)
        if (next === '') {
          return level
        } else if (!visited.has(next)) {
          queue.push(next)
          visited.add(next)
        }
      }
    }
    level++
  }
  return -1
}

function sort(str) {
  const arr = str.split('')
  arr.sort()
  return arr.join('')
}

function getNext(cur, s) {
  let str = ''
  for (let i = 0, j = 0; i < cur.length; ) {
    if (j === s.length) {
      return str + cur.slice(i)
    } else {
      if (cur[i] > s[j]) {
        j++
      } else if (cur[i] < s[j]) {
        str += cur[i++]
      } else {
        i++
        j++
      }
    }
  }
  return str
}

console.log(minStickers(['with', 'example', 'science'], 'thehat'))
