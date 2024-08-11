/**
 *
 * @param {number[]} arr
 * @param {number} l
 * @param {number} r
 * @param {number} k
 */
function quickSortOfTopK(arr, l, r, k) {
  let index = Math.floor(Math.random() * (r - l + 1) + l)
  let x = arr[index]
  const [left, right] = partition(arr, l, r, x)
  const m = left
  if (m === k - 1) return arr.slice(0, k)
  else if (m > k - 1) return quickSortOfTopK(arr, l, m - 1, k)
  else return quickSortOfTopK(arr, m + 1, r, k)
}
function swap(nums, i, j) {
  const temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}
function partition(nums, l, r, x) {
  let a = l,
    b = r
  for (let i = l; i <= b; ) {
    if (nums[i] > x) {
      swap(nums, a++, i++)
    } else if (nums[i] < x) {
      swap(nums, b--, i)
    } else {
      i++
    }
  }
  return [a, b]
}

const arr = [3, 2, 1, 5, 6, 4]

const ans = quickSortOfTopK(arr, 0, arr.length - 1, 3)
console.log(ans)
