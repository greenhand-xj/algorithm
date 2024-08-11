/**
 * @param {number} n 人数
 * @param {*} m 苹果数量
 * @param {*} k 小明的编号是k
 */
function distributeApples(n, m, k) {
  const apples = new Array(n).fill(1)
  let rest = m - n
  while (1) {
    if (rest < 0) break
    if (validKPos(apples, k - 1) && ok(rest, apples, k - 2)) {
    }
  }
}
/**
 *
 * @param {number[]} apples
 * @param {number} i 小明的编号
 * @returns {boolean} 是否满足条件
 */
function validKPos(apples, i) {
  let val = apples[i] + 1
  let condition = i - 1 < 0 || val - apples[i - 1] <= 1
  condition =
    (condition && i + 1 > apples.length - 1) || val - apples[i + 1] <= 1
  return condition
}
/**
 * @param {number} rest 剩余待分配的苹果
 * @param {number[]} apples 苹果数组
 * @param {number} i 小明的编号,递归小明左右的编号
 */
function ok(rest, apples, i) {
  if (i < 0) return true
  let val = apples[i]
}

distributeApples(4, 6, 2)
