
function compare(s1: string, s2: string) {
  const it1 = walk(s1)
  const it2 = walk(s2)
  while (1) {
    const n1 = it1.next()
    const n2 = it2.next()
    if (n1.done && n2.done) return 0
    else if (n1.done) return -1
    else if (n2.done) return 1
    else if (n1.value > n2.value) return 1
    else if (n1.value < n2.value) return -1
  }
}

function* walk(s: string) {
  let n = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '-') {
      if (n) {
        yield Number(n)
        n = ''
      }
    } else {
      n += s[i]
    }
  }
  if (n) {
    yield Number(n)
  }
}


const s1 = '1-2-3'
const s2 = '1-2-4'
console.log(compare(s1, s2))