function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

// 示例用法
const originalArray = [1, 2, 3, 4, 5]
const shuffledArray = shuffleArray(originalArray)
console.log(shuffledArray)
