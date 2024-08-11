/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const ans = []
  candidates.sort((a, b) => a - b)
  function backtrack(start, target, t) {
    if (target === 0) {
      ans.push(t.slice())
      return
    }
    if (target < 0) return
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > target) break
      t.push(candidates[i])
      backtrack(i, target - candidates[i], t)
      t.pop()
    }
  }
  backtrack(0, target, [])
  return ans
}
