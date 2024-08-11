/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function (s) {
  const MOD = 10 ** 9 + 7
  const n = s.length,
    base = 'a'.charCodeAt()
  const cnt = new Array(26).fill(0)
  // all 为 1表示有空集
  let all = 1,
    newAddition = 0
  for (let i = 0; i < n; ++i) {
    // 算出纯新增的，不包括之前的
    newAddition = (all - cnt[s.charCodeAt(i) - base] + MOD) % MOD
    // 更新以当前字符为结尾的子序列数
    cnt[s.charCodeAt(i) - base] =
      (cnt[s.charCodeAt(i) - base] + newAddition) % MOD
    // 更新所有子序列数
    all = (all + newAddition) % MOD
  }
  return (all - 1 + MOD) % MOD
}
