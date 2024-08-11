const next = (n) => {
  let sum = 0
  while (n > 0) {
    let d = n % 10
    sum += d * d
    n = Math.floor(n / 10)
  }
  return sum
}
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n === 1) return true
  let fast = n,
    slow = n
  while (true) {
    fast = next(next(fast))
    slow = next(slow)
    if (slow === fast) break
  }
  return slow === 1
}
