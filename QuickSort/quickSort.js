function pivot(list, start=0, end=list.length-1) {
  let pivotIdx = 0 // keeps track of where "pivot Value needs to end up at once we get to the end"
  let check = start // list[check] is the pivot value that is to compare all values against
  for(let i = start + 1; i <= end; i++) { // use start and end in for loop otherwise it will only work once with recursion
    if(list[check] > list[i]) { // check if current value is less the "pivot value"
      pivotIdx++ // increment(pivotIdx) first before swaping otherwise you'll swap pivotValue which is last to get swapped 
      [list[i], list[pivotIdx]] = [list[pivotIdx],list[i]]
    }
  }
  // SWAP pivot value with pivotIdx now its in the correct order on the list
  [list[check], list[pivotIdx]] = [list[pivotIdx], list[check]]
  console.log(list)
  return pivotIdx
}

let test = [26,23,27,44,17,47,39,42,43,1] //3 list[3] = 26

pivot(test) // pivotIdx = 3 [ 1, 23, 17, 26, 27, 47, 39, 42, 43, 44 ]