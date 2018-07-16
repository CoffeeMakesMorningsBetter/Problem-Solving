import { SingleLinkedList, Node} from './linkedList'

// Find MidPoint of LL Without using size or counter 

function midPoint(ll) {
  let fast = ll.head
  let slow = ll.head

  while(fast.next && fast.next.next) {
    slow = slow.next 
    fast = fast.next.next
  }
  return slow 
}

let linkedList = new SingleLinkedList()

linkedList.push(5)
linkedList.push(10)
linkedList.push(15)
linkedList.push("JavaScript")
linkedList.push("mark")

// return node with value 15

linkedList.removeAll()

linkedList.push(5)
linkedList.push(10)
linkedList.push(15)
linkedList.push("JavaScript")

// return node with value 10