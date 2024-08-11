/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let eor1 = 0
  for (let num of nums) {
    eor1 ^= num
  }
  // eor1: a ^ b
  let rightOne = eor1 & -eor1
  let eor2 = 0
  for (let num of nums) {
    if ((num & rightOne) !== 0) {
      eor2 ^= num
    }
  }
  return [eor2, eor1 ^ eor2]
}
