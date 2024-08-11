/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  let carry = 0
  k = k
    .toString(10)
    .split('')
    .map((n) => +n)
  if (num.length < k.length) {
    let len = k.length - num.length
    for (let i = 0; i < len; i++) {
      num.unshift(0)
    }
  }
  for (let i = num.length - 1, j = k.length - 1; i >= 0 || j >= 0; i--, j--) {
    let x = i < 0 ? 0 : num[i]
    let y = j < 0 ? 0 : k[j]
    num[i] = (x + y + carry) % 10
    carry = Math.floor((x + y + carry) / 10)
  }

  if (carry > 0) {
    num.unshift(carry)
  }

  return num
}

console.log(addToArrayForm([0], 23)) // [1,2,3,4]
