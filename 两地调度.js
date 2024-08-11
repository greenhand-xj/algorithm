/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  let n = costs.length
  let sum = 0
  let diff = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    diff[i] = costs[i][1] - costs[i][0]
    sum += costs[i][0]
  }
  diff.sort((a, b) => a - b)
  for (let i = 0; i < n / 2; i++) {
    sum += diff[i]
  }
  return sum
}
