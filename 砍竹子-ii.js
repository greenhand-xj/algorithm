/**
 * @param {number} bamboo_len
 * @return {number}
 */
var cuttingBamboo = function (n) {
  const MOD = 1e9 + 7
  function quickPower(x, n) {
    let ans = 1
    while (n > 0) {
      if ((n & 1) === 1) ans *= x % MOD
      x = (x * x) % MOD
      n >>>= 1
    }
    return ans
  }
  if (n <= 2) return 1
  if (n === 3) return 2
  let tail = n % 3 === 0 ? 1 : n % 3 === 1 ? 4 : 2
  let power = (tail === 1 ? n : n - tail) / 3
  return (quickPower(3, power) * tail) % MOD
}
