/**
 *
 * @param {number[]} arr
 */
function findUniq(arr) {
  let l = 0,
    n = arr.length,
    r = n - 1
  let ans = 0
  while (l < r) {
    if (arr[l] === arr[r]) l++, r--
    else if (arr[l] < arr[r]) l++, ans++
    else r--, ans++
    if (l === r && arr[l] === arr[r]) {
      ans++
      break
    }
  }
  return ans
}

const ans = findUniq([-1, 0, 100, 101, 2, 1, 0, -2])
console.log('ans', ans)
