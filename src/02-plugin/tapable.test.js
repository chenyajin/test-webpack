const { SyncHook, SyncBailHook, AsyncParallelHook, AsyncSeriesHook } = require('tapable')

class Lesson { 

  constructor() {
    // 1、初始化hooks容器
    this.hooks = {
      go: new SyncHook(['address']) //同步hooks 任务依次执行
      // go: new SyncBailHook(['address']) //同步hooks 一旦有返回值就退出不再执行～
      // leave: new AsyncParallelHook(['name', 'age']) // 异步hooks 异步并行
      // leave: new AsyncSeriesHook(['name', 'age']) // 异步hooks 异步串行
    }
  }

  
  tap () {
    // 2、往hooks容器里注册事件 / 添加回调函数，tap、tapAsync、tapPromise
    this.hooks.go.tap('name1', (address) => {
      console.log('name1', address)
    })

    this.hooks.leave.tapAsync('name3', (name, age, cb) => {
      setTimeout(() => {
        console.log('name3', name, age)
        cb()
      }, 2000)
    })

    this.hooks.leave.tapPromise('name4', (name, age) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('name4', name, age)
          resolve()
        }, 1000)
      })
    })
  }

  start () {
    // 3、触发hooks，call、callAsync
    this.hooks.go.call('jack')
    this.hooks.leave.callAsync('rose', 18, () => {
      // 代表leave容器中所有函数执行完了，才触发
      console.log('end~~~')
    })
  }
}

const l = new Lesson()
l.tap()
l.start()