/*
Queue is a FIFO(first in first out) data structure: the first thing to be added to the queue will also be the first thing to be removed.

enqueue:
This function adds the value to the end of the queue. This should be an O(1) operation and return the new size of the queue.

dequeue:
This function removes the value at the beginning of the queue. This should be an O(1) operation and return the value removed.

peek:
This function returns the first value in the queue.
*/ 

export class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

export default class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0
  }

  enqueue(value){
    let node = new Node(value)

    if(!this.first){
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }  

  // Removes first
  dequeue(){
    let current = this.last;
    let temp 

    if(!this.first) return null;

    if(this.size === 1) {
      this.first = null;
      this.last = null;
      this.size = --this.size;
      return current;
    }
     
    while(current.next){
      if(current.next === this.first){
        temp = current.next
        this.first = current
        this.first.next = null
        this.size = --this.size
        return temp.value
      } else {
        current = current.next 
      }
    }
  }

  peek(){
    return this.first.value
  }
}

// TESET DATA

let queue = new Queue();
queue.enqueue(10) // 1
queue.size // 1
queue.enqueue(100) // 2
queue.size // 2
queue.enqueue(1000) // 3
queue.size // 3
queue.peek() // 10
let removed = queue.dequeue() 
removed; // 10
queue.size // 2
queue.dequeue()
queue.dequeue()
queue.size // 0