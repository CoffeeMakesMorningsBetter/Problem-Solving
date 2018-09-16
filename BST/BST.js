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

    if(!this.root) {
      this.root = new Node(value) 
      return this
    }
    // GO LEFT
    if(currentNode.value > value) {
      if(currentNode.left === null) {
        currentNode.left = new Node(value) 
        return this
      } else {
        return this.insertRecursively(value, currentNode.left)
      }
      
    // GO RIGHT  
    } else {
        if(currentNode.right === null) {
          currentNode.right = new Node(value)
          return this
        } else {
          return this.insertRecursively(value, currentNode.right)
        }
      } 
    }
}

let BST = new BinarySearchTree()

BST.insertRecursively(5)
BST.insertRecursively(10)
BST.insertRecursively(2)
BST.insertRecursively(3)
BST.insertRecursively(9)
BST.insertRecursively(11)