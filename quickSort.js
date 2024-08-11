let nums = [3, 4, 1, 13, 7, 8, 1, 3, 0, -1, 123]
let first, last

quickSort(0, nums.length - 1)
console.log('nums', nums)
/**
 *
 * @param {number} l
 * @param {number} r
 */
function quickSort(l, r) {
  if (l >= r) return
  let index = Math.floor(Math.random() * (r - l + 1) + l)
  let x = nums[index]
  partition(l, r, x)
  let left = first,
    right = last
  quickSort(l, left - 1)
  quickSort(right + 1, r)
}

function partition(l, r, x) {
  first = l
  last = r
  let i = l
  while (i <= last) {
    if (nums[i] < x) {
      swap(i, first), i++, first++
    } else if (nums[i] > x) {
      swap(i, last--)
    } else {
      i++
    }
  }
}

function swap(i, j) {
  let temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}
