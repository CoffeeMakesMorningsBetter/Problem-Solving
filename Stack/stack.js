/*
  STACK - A stack is a basic data structure that can be logically thought as linear structure represented by a real physical stack or pile, a structure where insertion and deletion of items takes place at one end called top of the stack. The basic concept can be illustrated by thinking of your data set as a stack of plates or books where you can only take the top item off the stack in order to remove things from it. This structure is used all throughout programming.
*/ 

class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0
  }

  // ADD's to the Top of the Stack
  push(value) {
    let node = new Node(value)
    
    if(this.size === 0){
      this.bottom = node 
      this.top = node
      this.size = ++this.size 
      return this.size
    } else {
      this.top.next = node 
      this.top = node 
      this.size = ++this.size
      return this.size
    }
  }

  // removes and returns the top value from the stack 
  pop() {
    let current = this.bottom
    let temp

    if(!this.top) return null 

    if(this.size === 1){
      temp = current
      this.bottom = null 
      this.top = null 
      this.size = --this.size
      return temp.value
    }

    while(current.next) {
      if(current.next === this.top){
        temp = current.next
        current.next = null 
        this.top = current
        this.size = --this.size
        return temp.value
      } else {
        current = current.next
      }
    }
  }

  // returns top value on stack
  peek() {
    return this.top.value
  }
}

let stack = new Stack()
stack.push(4)
stack.push(40)
stack.push(400)
stack.peek() // 400
stack.pop() // 400
stack.pop() // 40
stack.pop() // 4
stack.size // 0