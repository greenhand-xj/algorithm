class MemorizedMap {
  constructor() {
    this.normalMap = new Map()
    this.objectMap = new WeakMap()
  }
  isObject(value) {
    return typeof value === 'object' && value !== null
  }
  get(key) {
    if (this.isObject(key)) {
      return this.objectMap.get(key)
    } else {
      return this.normalMap.get(key)
    }
  }

  set(key, value) {
    if (this.isObject(key)) {
      this.objectMap.set(key, value)
    } else {
      this.normalMap.set(key, value)
    }
  }
}

function memorize(func, resolver) {
  function _memorized(...args) {
    const key = resolver ? resolver(...args) : args[0]
    if (_memorized.cache.get(key)) {
      return _memorized.cache.get(key)
    }
    const result = func.apply(this, args)
    _memorized.cache.set(key, result)
    return result
  }
  _memorized.cache = new MemorizedMap()
  return _memorized
}

var object = { a: 1, b: 2 }
var other = { c: 3, d: 4 }

var values = memorize((obj) => Object.values(obj))

console.log(values(object)) // [1, 2]
console.log(values(other)) // [3, 4]

object.a = 2
console.log(values(object)) // [1, 2]

values.cache.set(object, ['a', 'b'])
console.log(values(object)) // ['a', 'b']
