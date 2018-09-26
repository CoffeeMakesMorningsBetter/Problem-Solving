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
    if(!this.root) return []
    let queue = [this.root]
    let other = []
    while (queue.length) {
      let value = queue.shift()
      if (value.left !== null) {
        queue.push(value.left)
      }
      if (value.right !== null) {
        queue.push(value.right)
      }
      other.push(value.value)
    }
    return other
  }

  DFSPre(currentNode = this.root, other = []) {
    if(!currentNode) return other 
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
    if(!currentNode) return other 
    if (currentNode.left) {
      this.DFSInOrder(currentNode.left, other)
    }
    if (currentNode.value) {
      other.push(currentNode.value)
    }
    if (currentNode.right) {
      this.DFSInOrder(currentNode.right, other)
    }
    return other
  }

  DFSPost(currentNode = this.root, other = []) {
    if(!currentNode) return other 
    if (currentNode.left) {
      this.DFSPost(currentNode.left, other)
    }
    if (currentNode.right) {
      this.DFSPost(currentNode.right, other)
    }
    if (currentNode.value) {
      other.push(currentNode.value)
    }
    return other
  }

  MaxDepthOfBST(currentNode = this.root) {
    if (currentNode === null) return 0
    let left = this.MaxDepthOfBST(currentNode.left)
    let right = this.MaxDepthOfBST(currentNode.right)
    return Math.max(left, right) + 1
  }

  Sum(currentNode = this.root, DFSPost) {
    return this.DFSPost(currentNode).reduce((sum, value) => sum += value)
  }

  // PROPER WAY TO DO addBST
  addBST(currentNode = this.root) {
    if (currentNode === null) return 0
    return currentNode.value + this.addBST(currentNode.left) + this.addBST(currentNode.right)
  }

  isValid(currentNode = this.root, min=null, max=null) {
    if(currentNode === null) return true 
    if(min !== null && currentNode.val <= min || max !== null && currentNode.val > max) return false
    return this.isValid(currentNode.left, min, currentNode.val) && this.isValid(currentNode.right, currentNode.val, max)
  }

  isSameTree(b1, b2) {
    if(!b1 && !b2) return true 
    if(!b1 || !b2) return false
    if(b1.val !== b2.val) return false 
    return this.isSameTree(b1.left, b2.left) && this.isSameTree(b1.right, b2.right)
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

BST.DFSPost() // [ 0.5, 1, 4, 3, 2, 9, 11, 10, 5 ]

BST.MaxDepthOfBST() // 4

BST.Sum() // 45.5

BST.addBST() // 45.5