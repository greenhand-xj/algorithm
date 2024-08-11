function findElement(arr, target) {
  let l = 0,
    r = arr.length - 1
  while (l <= r) {
    let mid = l + ((r - l) >> 1)
    if (arr[mid] === target) {
      if (mid === 0 || arr[mid - 1] !== target) return mid
      else r = mid - 1
    } else if (arr[mid] < target) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return -1
}

// 测试

// Test case 1:
console.log(findElement([1, 2, 3, 3, 4, 4, 5], 3))

// Test case 2:
console.log(findElement([1, 2, 3, 3, 4, 4, 5], 4))
