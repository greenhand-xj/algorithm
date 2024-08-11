function generatePermutation(str) {
  const set = new Set()
  gen(0, '', set, str)
  return [...set]
}
function gen(i, path, set, str) {
  if (i === str.length) {
    set.add(path)
    return
  }
  gen(i + 1, path + str[i], set, str)
  gen(i + 1, path, set, str)
}

console.log(generatePermutation('abc'))
