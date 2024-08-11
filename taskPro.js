class TaskPro {
  constructor() {
    this.taskList = []
    this.curTaskIndex = 0
    this._running = false
  }

  addTask(task) {
    this.taskList.push(task)
  }

  async run() {
    if (this._running) return
    this._running = true
    await this._runTask()
  }
  async _runTask() {
    if (this.curTaskIndex >= this.taskList.length) {
      this._running = false
      this.taskList = []
      this.curTaskIndex = 0
      return
    }
    const task = this.taskList[this.curTaskIndex]
    const i = this.curTaskIndex
    await task(this._next.bind(this))
    const j = this.curTaskIndex
    if (i === j) {
      await this._next()
    }
  }
  async _next() {
    this.curTaskIndex++
    await this._runTask()
  }
}

const t = new TaskPro()
t.addTask(async (next) => {
  console.log('1 start')
  await next()
  console.log('1 end')
})
t.addTask(() => {
  console.log('2')
})
t.addTask(() => {
  console.log('3')
})
t.run()
