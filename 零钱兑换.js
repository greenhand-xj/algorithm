/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(amount + 1)
  dp[0] = 0
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i >= coin && dp[i - coin] !== amount + 1) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
      }
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount]
}

// coins.sort((a, b) => b - a)
//   let ans = Infinity
//   function dfs(path, rest) {
//     if (rest === 0) {
//       ans = Math.min(ans, path.length)
//       return true
//     }
//     for (let i = 0; i < coins.length; i++) {
//       if (rest - coins[i] < 0) continue
//       path.push(coins[i])
//       if (dfs(path, rest - coins[i])) return true
//       path.pop()
//     }
//     return false
//   }
//   dfs([], amount)
//   return ans === Infinity ? -1 : ans
