const arr = [1, 2, 3, 4, 5, 6]

function traverseArr(arr, i = 0) {
  if (arr.length == 0) return
  if (i >= arr.length) return
  console.log(arr[i])
  traverseArr(arr, i + 1)
  console.log(i)
}
traverseArr(arr)
