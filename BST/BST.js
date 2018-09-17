class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insertRecursively(value, start) {

    let currentNode = start || this.root

    if (!this.root) {
      this.root = new Node(value)
      return this
    }
    // GO LEFT
    if (currentNode.value > value) {
      if (currentNode.left === null) {
        currentNode.left = new Node(value)
        return this
      } else {
        return this.insertRecursively(value, currentNode.left)
      }

      // GO RIGHT  
    } else {
      if (currentNode.right === null) {
        currentNode.right = new Node(value)
        return this
      } else {
        return this.insertRecursively(value, currentNode.right)
      }
    }
  }

  findRecursively(value, currentNode = this.root) {
    if (currentNode.value === value) return currentNode
    if (currentNode.value > value) {
      if (currentNode.left === null) {
        return 'NOT in BST'
      } else {
        return this.findRecursively(value, currentNode.left)
      }
    } else {
      if (currentNode.right === null) {
        return 'NOT in BST'
      } else {
        return this.findRecursively(value, currentNode.right)
      }
    }
  }

  BFS() {
    let queue = [this.root]
    let other = []
    while(queue.length) {
      let value = queue.shift()
      if(value.left !== null) {
        queue.push(value.left)
      }
      if(value.right !== null) {
        queue.push(value.right)
      }
     other.push(value.value)
    }
    return other 
  }

  DFSPre(currentNode = this.root, other = []) {
    if (currentNode.value) {
      other.push(currentNode.value)
    }
    if (currentNode.left) {
      this.DFSPre(currentNode.left, other)
    }
    if (currentNode.right) {
      this.DFSPre(currentNode.right, other)
    }
    return other
  }

  DFSInOrder(currentNode = this.root, other = []) {
    if(currentNode.left) {
      this.DFSInOrder(currentNode.left, other)
    }
    if(currentNode.value) {
      other.push(currentNode.value)
    }
    if(currentNode.right) {
      this.DFSInOrder(currentNode.right, other)
    }
    return other 
  }
}

let BST = new BinarySearchTree()

BST.insertRecursively(5)
BST.insertRecursively(10)
BST.insertRecursively(2)
BST.insertRecursively(3)
BST.insertRecursively(9)
BST.insertRecursively(11)
BST.insertRecursively(1)
BST.insertRecursively(4)
BST.insertRecursively(0.5)

BST.findRecursively(11)
BST.findRecursively(100)
BST.findRecursively(3)
BST.findRecursively(2)

BST.BFS() // [ 5, 2, 10, 1, 3, 9, 11, 0.5, 4 ]

BST.DFSPre() // [ 5, 2, 1, 0.5, 3, 4, 10, 9, 11 ]

BST.DFSInOrder() // [ 0.5, 1, 2, 3, 4, 5, 9, 10, 11 ]

