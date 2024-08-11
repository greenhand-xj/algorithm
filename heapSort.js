var sortArray = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    heapInsert(nums, i)
  }
  let size = nums.length
  while (size > 1) {
    swap(nums, 0, --size)
    heapify(nums, 0, size)
  }
}

function heapify(arr, i, size) {
  let l = i * 2 + 1
  while (l < size) {
    let largest = l + 1 < size && arr[l] < arr[l + 1] ? l + 1 : l
    largest = arr[i] > arr[largest] ? i : largest
    if (i === largest) break
    swap(arr, i, largest)
    i = largest
    l = i * 2 + 1
  }
}

function heapInsert(arr, i) {
  while (arr[i] > arr[(i - 1) >> 1]) {
    swap(arr, i, (i - 1) >> 1)
    i = (i - 1) >> 1
  }
}
function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
