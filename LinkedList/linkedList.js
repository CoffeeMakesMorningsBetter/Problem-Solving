class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null 
    this.tail = null 
    this.size = 0
  }

  insertFirst(value) {
    let node = new Node(value)
    let temp

    if(!this.head){
      this.head = node 
      this.tail = node 
      this.size++
      return this.size
    } else {
      temp = this.head 
      this.head = node 
      this.head.next = temp 
      this.size++
      return this.size
    }
  }
}