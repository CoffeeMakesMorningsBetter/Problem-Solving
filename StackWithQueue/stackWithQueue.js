import Queue, { Node } from '../Queue/queue.js'

class Stack {
  constructor() {
    this.top = new Queue()
    this.bottom = new Queue() 
  }

  push() {
    this.top.enqueue(val)
    return this
  }

  pop() {
    if(!this.top.size && !this.bottom.size) return null 

    if(!this.bottom.size) {
      while(this.top.size > 0) {
        this.bottom.enqueue(this.top.dequeue())
      }
      
      let removed = this.top.enqueue()

      while(this.bottom.size) {
        this.top.enqueue(this.bottom.dequeue)
      }
    }
    return removed 
  }
}

let s = new Stack()
s.push(10).push(20).push(30)
s.pop() // 30
s.pop() // 20
s.pop() // 10
s.pop() // null
s.push(30).push(40).push(50)
s.pop() // 50
s.push(60)
s.pop() // 60