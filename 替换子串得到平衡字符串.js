var balancedString = function (s) {
  const require = s.length / 4
  console.log('require', require)
  const map = {
    Q: 0,
    W: 0,
    E: 0,
    R: 0,
  }
  for (let i = 0; i < s.length; i++) {
    map[s[i]]++
  }
  console.log(map)
  const arr = Object.values(map).filter((v) => v > require)
  if (arr.length === 0) return 0
  let ans = 0
  for (let i = 0; i < arr.length; i++) {
    ans += arr[i] - require
  }
  console.log('ans', ans)
  return ans
}

balancedString('WWEQERQWQWWRWWERQWEQ')
