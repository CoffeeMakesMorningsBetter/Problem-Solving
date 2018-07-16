import { SingleLinkedList, Node} from './linkedList'

function circular(ll) {
  let slow = ll.head
  let fast = ll.head 

  while(fast.next && fast.next.next){
    slow = slow.next 
    fast = fast.next.next 
    
    if(slow === fast) {
      return true 
    }
  }
  return false
}

let linkedList = new SingleLinkedList()

linkedList.push(5)
linkedList.push(10)
linkedList.push(15)
linkedList.push("JavaScript")
linkedList.push("mark")

// return false

linkedList.removeAll()

linkedList.push(5)
linkedList.push(10)
linkedList.push(15)
linkedList.push("JavaScript")
linkedList.push("mark")
let cNode = list.get(2)
list.tail.next = cNode

// returns true

