import { SingleLinkedList, Node} from './linkedList'

function nthFromLast(ll, n) {
  let slow = ll.head
  let fast = ll.head 

  for(let i = n ; i > 0; i--){
    fast = fast.next 
    n--
  }

  while(fast.next) {
    slow = slow.next
    fast = fast.next
  }
  return slow
}

let linkedList = new SingleLinkedList()

linkedList.push(5)
linkedList.push(10)
linkedList.push(15)
linkedList.push("JavaScript")
linkedList.push("mark")

nthFromLast(list, 3) // node with value 10