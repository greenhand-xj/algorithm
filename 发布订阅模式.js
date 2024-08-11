class EventEmitter {
  constructor() {
    this.events = new Map()
  }

  on(eventName, cb) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, [cb])
      return
    }
    this.events.get(eventName).push(cb)
  }

  emit(eventName, ...args) {
    if (!this.events.has(eventName)) return
    const events = this.events.get(eventName)
    events.forEach((cb) => cb(...args))
  }

  once(eventName, cb) {
    const fn = (...args) => {
      cb(...args)
      this.off(eventName, fn)
    }
    this.on(eventName, fn)
  }

  off(eventName, cb) {
    if (!this.events.has(eventName)) return
    const events = this.events.get(eventName)
    const index = events.indexOf(cb)
    if (index !== -1) {
      events.splice(index, 1)
    }
  }
}

// 测试代码
const emitter = new EventEmitter()
const log = (...args) => console.log(...args)

emitter.on('test', () => {
  log('test1') // test1
})

emitter.on('test', () => {
  log('test2') // test2
})

emitter.emit('test')

emitter.once('test2', (a) => {
  log('test2', a) // test3
})

emitter.emit('test2', { a: 1 })
emitter.emit('test2', { a: 1 })
