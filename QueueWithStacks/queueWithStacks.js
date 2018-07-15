import Stack , { Node } from '../Stack/stack'

class Queue {
  constructor(){
    this.first = new Stack()
    this.last = new Stack()
  }

  enqueue(value) {
    this.first.push(value)
    return this 
  } 

  dequeue() {
    if(!this.last.size) {
      while(this.first.size){
        this.last.push(this.first.pop())
      }
    }
    return this.last.pop()
  }
}

let q1 = new Queue();
q1.enqueue(3); // returns the queue
q1.enqueue(4); // returns the queue
q1.enqueue(5); // returns the queue
q1.enqueue(6).enqueue(7) // returns the queue
q1.dequeue(); // 3
q1.dequeue(); // 4
q1.dequeue(); // 5
q1.dequeue(); // 6
q1.dequeue(); // 7
q1.dequeue(); // null