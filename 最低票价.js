/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  const n = days.length
  const dp = new Array(n + 1).fill(Infinity)
  dp[n] = 0
  for (let i = n - 1; i >= 0; i--) {
    for (let k = 0, j = i; k < 3; k++) {
      while (j < n && days[j] < days[i] + durations[k]) {
        j++
      }
      dp[i] = Math.min(dp[i], dp[j] + costs[k])
    }
  }
  console.log(dp)
  return dp[0]
}
var mincostTickets1 = function (days, costs) {
  const dp = new Array(days.length).fill(-1)
  return f2(days, costs, 0, dp)
}
const durations = [1, 7, 30]

function f2(days, costs, i, dp) {
  if (i === days.length) return 0
  if (dp[i] !== -1) return dp[i]
  let ans = Infinity
  for (let k = 0, j = i; k < 3; k++) {
    // 枚举三种票价
    while (j < days.length && days[j] < days[i] + durations[k]) {
      j++
    }
    ans = Math.min(ans, costs[k] + f2(days, costs, j, dp))
  }
  dp[i] = ans
  return ans
}
function f(days, costs, i) {
  if (i === days.length) return 0
  let ans = Infinity
  for (let k = 0, j = i; k < 3; k++) {
    // 枚举三种票价
    while (j < days.length && days[j] < days[i] + durations[k]) {
      j++
    }
    ans = Math.min(ans, costs[k] + f(days, costs, j))
  }
  return ans
}

console.log(mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15]))
