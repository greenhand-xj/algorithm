var combinationSum2 = function (candidates, target) {
  const ans = []
  candidates.sort((a, b) => a - b)
  function backtrack(start, target, t, used) {
    if (target === 0) {
      ans.push(t.slice())
      return
    }
    if (target < 0) return
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > target) break
      t.push(candidates[i])
      if (i > start && candidates[i] === candidates[i - 1] && !used[i - 1])
        continue // 剪枝
      used[i] = true
      backtrack(i + 1, target - candidates[i], t)
      t.pop()
      used[i] = false
    }
  }
  backtrack(0, target, [])
  return ans
}
