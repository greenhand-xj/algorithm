var RandomizedCollection = function () {
  this.map = new Map()
  this.list = []
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
  const set = this.map.get(val) || new Set()
  this.list.push(val)
  set.add(this.list.length - 1)
  this.map.set(val, set)
  return set.size === 1
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
  if (!this.map.has(val)) return false
  const set = this.map.get(val)
  const delIndex = set.values().next().value
  const endValue = this.list.at(-1)
  if (val === endValue) {
    set.delete(this.list.length - 1)
  } else {
    const endSet = this.map.get(endValue)
    endSet.delete(this.list.length - 1)
    endSet.add(delIndex)
    set.delete(delIndex)
    this.list[delIndex] = endValue
  }
  this.list.pop()
  set.size === 0 && this.map.delete(val)
  return true
}

/**
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {
  const index = Math.floor(Math.random() * this.list.length)
  return this.list[index]
}

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
