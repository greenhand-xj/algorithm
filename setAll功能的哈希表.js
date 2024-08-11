class mapWithSetAllFunction {
  map = new Map()
  cnt = 0
  setAllValue = null
  setAllTime = null
  put(key, value) {
    if (this.map.has(key)) {
      const arr = this.map.get(key)
      arr[0] = value
      arr[1] = this.cnt++
    } else {
      this.map.set(key, [value, this.cnt++])
    }
  }
  setAll(value) {
    this.setAllValue = value
    this.setAllTime = this.cnt++
  }
  get(key) {
    if (!this.map.has(key)) return -1
    const [value, time] = this.map.get(key)
    if (time <= this.setAllTime) return this.setAllValue
    return value
  }
}

//测试
let m = new mapWithSetAllFunction()
m.put(1, 1)
m.put(2, 2)
m.setAll(3)
m.put(4, 4)
console.log(m.get(1))
console.log(m.get(4))
