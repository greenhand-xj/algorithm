/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n < 0) {
    x = 1 / x
    n = -n
  }
  let ans = 1
  while (n > 0) {
    if ((n & 1) === 1) ans *= x
    x *= x
    n >>= 1
  }
  return ans
}

function quickMul(x, n) {
  if (n === 0) return 1.0
  if (n === 1) return x
  let y = quickMul(x, Math.floor(n / 2))
  return y * y * (n % 2 === 0 ? 1 : x)
}
