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

  // Adds a new node to the begining of the list
  unshift(value) {
    let node = new Node(value)
    let temp

    if(!this.head) {
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
  
  // Removes first node from the begining and resets head
  shift() {
    let removedNode
    
    if(!this.head) {
      return null
    } else {
      removedNode = this.head 
      this.head = removedNode.next 
      removedNode.next = null
      this.size--
      return removedNode
    }

  }

  // Adds a new node to the end of the list and sets new tail
  push(value) {
    let node = new Node(value)
    let temp 

    if(!this.tail) {
      this.head = node 
      this.tail = node 
      this.size++
      return this.size
    } else {
      temp = this.tail 
      temp.next = node 
      this.tail = node 
      this.size++
      return this.size
    }
  }

  // Removes last node in list and resets tail 
  pop() {
    let current = this.head 
    let removedNode

    if(!this.tail) {
      return null
    } 

    if(this.size === 1) {
      removedNode = this.tail 
      this.head = null 
      this.tail = null
      this.size--
      return removedNode
    }

    while(current.next) {
      if(current.next === this.tail) {
        removedNode = this.tail 
        current.next = null
        this.tail = current 
        this.size--
        return removedNode
      } else {
        current = current.next
      }
    }
  }

  // Removes all nodes in the linkedList 
  removeAll() {
    this.head = null
    this.tail = null 
    this.size = 0
    return this
  }

  // Should return the Index of the Node at the first found value
  get(value) {
    let current = this.head
    let idx = 0 

    if(!this.head) return -1

    while(current.next) {
      if(current.value === value) {
        return idx
      } else {
        current = current.next 
        idx++
      }
    }
    return -1 
  }

  // Given an Index and Value it should update the nodes value
  set(idx, updateValue) {
    let current = this.head
    let count = 0

    if(!this.head || idx > this.size) return null 

    while(current.next) {
      if(idx === count) {
        current.value = updateValue
        return current
      } else {
        current = current.next 
        count++
      }
    }
  }

  // Should insert a new Node given an idx 
  insert(idx, value) {
    let node = new Node(value)
    let current = this.head 
    let count = 0
    let temp 

    if(!this.head || idx > this.size || idx < 0) return false

    if(idx === this.size) {
      this.tail.next = node 
      node = this.tail 
      this.size++
      return true 
    }

    if(idx === 0) {
      node.next = this.head 
      this.head = node 
      this.size++
      return true
    }

    while(current.next) {
      if(count + 1 === idx) {
        temp = current.next 
        current.next = node 
        node.next = temp
        this.size++
        return true 
      } else {
        current = current.next 
        count++
      }
    }
  }

  // Should remove a Node at a given idx and return the removed node 
  remove(idx) {
    let count = 0
    let current = this.head 
    let removedNode 

    if(!this.head || idx < 0 || idx >= this.size) return null 

    if(idx === 0) {
      removedNode = this.head 
      this.head = removedNode.next
      removedNode.next = null 
      this.size--
      return removedNode
    }

    while(current.next) {
      if(count + 1 === idx) {
        let temp 
        removedNode = current.next
        // check if removedNode.next is not null AKA tail
        // dont need to set temp but need to reset tail 
        if(!removedNode.next) {
          current.next = null 
          this.tail = current
          this.size--
          return removedNode
        } else {
          temp = removedNode.next
          removedNode.next = null 
          current.next = temp 
          this.size--
          return removedNode
        }
      } else {
        current = current.next 
        count++
      }
    }
  }
  
  // Reverses a LinkedList and update next 
  reverseList() {
    let prevNode = null 
    let currentNode = this.head 
    let nextNode = currentNode.next

    let priorhead = this.head

    if(!this.size) return null

    while(nextNode) {
      // this sets next 
      currentNode.next = prevNode 

      prevNode = currentNode 
      currentNode = nextNode
      nextNode = nextNode.next
    }
    currentNode.next = prevNode
    this.head = this.tail
    this.tail = priorhead
    return this
  }
}

let list = new SingleLinkedList()
list.unshift(5)
list.unshift(10) // size = 2
list.unshift(100) // list.head = 100 size = 3
list.push(1000) // list.tail = 1000 size = 4
list.push(99) // list.tail = 99 size = 5
list.shift() // list.head = 10 removed old head of 100 size = 4
list.pop() // list.tail = 1000 removed tail should be 99 size = 3

list.removeAll()

list.push(5)
list.push(10)
list.push(15)
list.push(20)
list.get(15) // 2
list.set(2, "Boston")

list.removeAll()

list.push(5)
list.push(10)
list.push(15)
list.insert(1,"NYC")
list.insert(0, "Oakland")

list.removeAll()

list.push(5)
list.push(10)
list.push(15)
list.insert(1,"NYC")
list.insert(0, "Oakland")
list.remove(0) // return {Oakland}
list.remove(3)  // return {15}
list.push("SF")
list.push("LA")
list.remove(3) // return {SF}

list.removeAll()

list.push(5)
list.push(10)
list.push(15)
list.push("JavaScript")
list.reverseList()